import type { ZestToggleStyle } from "./types";

export interface CompiledToggleStyle {
  /** Stable name derived from the generated rules; equal looks share one id. */
  id: string;
  css: string;
}

type State = "off" | "on" | "hoverOff" | "hoverOn" | "focus" | "disabled" | "busy";

const STATES: readonly State[] = ["off", "on", "hoverOff", "hoverOn", "focus", "disabled", "busy"];

// Source order matters: later rules win at equal specificity, so disabled and
// busy sit on top of on/off and hover (which excludes disabled itself).
const STATE_SELECTOR: Record<State, string> = {
  off: '[aria-pressed="false"]',
  on: '[aria-pressed="true"]',
  hoverOff: '[aria-pressed="false"]:hover:not(:disabled)',
  hoverOn: '[aria-pressed="true"]:hover:not(:disabled)',
  focus: ":focus-visible",
  disabled: ":disabled",
  busy: '[aria-busy="true"]',
};

const HOVER_STATES: readonly State[] = ["hoverOff", "hoverOn"];

const PROPERTY_NAME = /^-{0,2}[a-zA-Z][a-zA-Z0-9-]*$/;
// Anything that could end the declaration, open a rule, fetch a resource,
// start a comment or hide characters behind an escape is rejected.
const FORBIDDEN_VALUE = /[;{}<>\\]|\/\*|\*\/|url\s*\(|expression\s*\(|@import|javascript:|-moz-binding|behavior\s*:/i;
const CONTROL_CHARS = /[\u0000-\u001f\u007f]/;
const MAX_VALUE_LENGTH = 500;

type Declarations = Map<string, string>;
type StateDeclarations = Record<State, Declarations>;

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const hasOwn = (target: object, key: string) => Object.prototype.hasOwnProperty.call(target, key);

const normalizeName = (name: string): string | undefined => {
  if (!PROPERTY_NAME.test(name)) return undefined;
  if (name.indexOf("-") !== -1) return name.toLowerCase().startsWith("--") ? name : name.toLowerCase();
  return name.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
};

const isBalanced = (value: string): boolean => {
  let parens = 0;
  let single = 0;
  let double = 0;
  for (let i = 0; i < value.length; i++) {
    const c = value[i];
    if (c === "'" && double % 2 === 0) single++;
    else if (c === '"' && single % 2 === 0) double++;
    else if (single % 2 === 0 && double % 2 === 0) {
      if (c === "(") parens++;
      else if (c === ")" && --parens < 0) return false;
    }
  }
  return parens === 0 && single % 2 === 0 && double % 2 === 0;
};

const sanitizeValue = (value: unknown): string | undefined => {
  if (typeof value === "number") return Number.isFinite(value) ? String(value) : undefined;
  if (typeof value !== "string") return undefined;
  const text = value.trim();
  if (!text || text.length > MAX_VALUE_LENGTH) return undefined;
  if (FORBIDDEN_VALUE.test(text) || CONTROL_CHARS.test(text) || !isBalanced(text)) return undefined;
  return text;
};

const collectStates = (target: StateDeclarations, source: unknown): void => {
  if (!isObject(source)) return;
  for (const state of STATES) {
    const look = source[state];
    if (!isObject(look)) continue;
    for (const key of Object.keys(look)) {
      const name = normalizeName(key);
      const value = sanitizeValue(look[key]);
      if (name !== undefined && value !== undefined) target[state].set(name, value);
    }
  }
};

// Within a layer the theme-specific look beats the theme-less one.
const applyLayer = (target: StateDeclarations, layer: unknown, theme: "light" | "dark"): void => {
  if (!isObject(layer)) return;
  collectStates(target, layer);
  collectStates(target, layer[theme]);
};

// Layer order inside one style: all toggles < size < variant.
const applyStyle = (
  target: StateDeclarations,
  style: unknown,
  theme: "light" | "dark",
  variant: string,
  size: string
): void => {
  if (!isObject(style)) return;
  applyLayer(target, style, theme);
  if (isObject(style.sizes) && hasOwn(style.sizes, size)) applyLayer(target, style.sizes[size], theme);
  if (isObject(style.variants) && hasOwn(style.variants, variant)) applyLayer(target, style.variants[variant], theme);
};

const hashOf = (text: string): string => {
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36) + text.length.toString(36);
};

const buildCompiled = (
  provider: unknown,
  own: unknown,
  theme: "light" | "dark",
  variant: string,
  size: string
): CompiledToggleStyle | null => {
  const merged = {} as StateDeclarations;
  for (const state of STATES) merged[state] = new Map();
  applyStyle(merged, provider, theme, variant, size);
  applyStyle(merged, own, theme, variant, size);

  const entries: Array<{ state: State; button: string; check: string }> = [];
  for (const state of STATES) {
    const button: string[] = [];
    const check: string[] = [];
    merged[state].forEach((value, name) => {
      if (name === "check-color") check.push(`color:${value}`);
      else if (name === "check-size") check.push(`width:${value}`, `height:${value}`);
      else button.push(`${name}:${value}`);
    });
    if (button.length || check.length) entries.push({ state, button: button.join(";"), check: check.join(";") });
  }
  if (entries.length === 0) return null;

  const body = entries.map((e) => `${e.state}{${e.button}}{${e.check}}`).join("");
  const id = hashOf(body);
  // The attribute is repeated so the rules outrank the library's own
  // `.solid.toggleOn:hover:not(:disabled)` style selectors without !important.
  const base = `[data-zest-toggle-style="${id}"][data-zest-toggle-style="${id}"][data-zest-toggle-style="${id}"]`;
  let css = "";
  for (const e of entries) {
    const selector = base + STATE_SELECTOR[e.state];
    let rules = "";
    if (e.button) rules += `${selector}{${e.button}}`;
    if (e.check) rules += `${selector} [data-zest-toggle-check]{${e.check}}`;
    // Hover only where the device really hovers, so a tap cannot leave it stuck on.
    css += HOVER_STATES.indexOf(e.state) !== -1 ? `@media (hover:hover){${rules}}` : rules;
  }
  return { id, css };
};

const NO_STYLE = {};
type VariantSizeCache = Map<string, CompiledToggleStyle | null>;
const cache = new WeakMap<object, WeakMap<object, VariantSizeCache>>();

/**
 * Turns the provider's toggle style and an optional per-button style into the
 * CSS for one (theme, variant, size). Results are memoised per settings object,
 * so many toggles under one provider share a single compile. Never throws.
 */
export const compileToggleStyle = (
  provider: ZestToggleStyle | undefined,
  own: ZestToggleStyle | undefined,
  theme: "light" | "dark",
  variant: string,
  size: string
): CompiledToggleStyle | null => {
  try {
    const providerObject = isObject(provider) ? provider : undefined;
    const ownObject = isObject(own) ? own : undefined;
    if (!providerObject && !ownObject) return null;

    const first = providerObject ?? NO_STYLE;
    const second = ownObject ?? NO_STYLE;
    let byOwn = cache.get(first);
    if (!byOwn) cache.set(first, (byOwn = new WeakMap()));
    let byKey = byOwn.get(second);
    if (!byKey) byOwn.set(second, (byKey = new Map()));

    const key = `${theme}|${variant}|${size}`;
    if (byKey.has(key)) return byKey.get(key) as CompiledToggleStyle | null;
    const compiled = buildCompiled(providerObject, ownObject, theme, variant, size);
    byKey.set(key, compiled);
    return compiled;
  } catch {
    return null;
  }
};
