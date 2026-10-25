import type { ZestSize, ZestVariant } from "../ZestButton";

/** A CSS value written exactly as it should appear (`"0.5rem"`, `"var(--my-accent)"`, `0.8`). */
export type ZestToggleStyleValue = string | number;

/**
 * One look: CSS property names (camelCase or kebab-case) mapped to values.
 * `checkColor` and `checkSize` style the check mark instead of the button.
 */
export interface ZestToggleStyleLook {
  checkColor?: string | null;
  checkSize?: ZestToggleStyleValue | null;
  [cssProperty: string]: ZestToggleStyleValue | null | undefined;
}

/** A look for each state of a toggle. */
export interface ZestToggleStateLooks {
  off?: ZestToggleStyleLook;
  on?: ZestToggleStyleLook;
  hoverOff?: ZestToggleStyleLook;
  hoverOn?: ZestToggleStyleLook;
  focus?: ZestToggleStyleLook;
  disabled?: ZestToggleStyleLook;
  busy?: ZestToggleStyleLook;
}

/** State looks, with optional light and dark theme overrides. */
export interface ZestToggleStyleLayer extends ZestToggleStateLooks {
  light?: ZestToggleStateLooks;
  dark?: ZestToggleStateLooks;
}

/**
 * Toggle styling. Precedence, lowest to highest: built-in look, all toggles,
 * `sizes`, `variants`, then the per-button `zest.toggleOptions.style`.
 */
export interface ZestToggleStyle extends ZestToggleStyleLayer {
  variants?: Partial<Record<ZestVariant, ZestToggleStyleLayer>>;
  sizes?: Partial<Record<ZestSize, ZestToggleStyleLayer>>;
}

/** Styling section of the provider config, organised by button kind. */
export interface ZestButtonStyles {
  toggle?: ZestToggleStyle;
}
