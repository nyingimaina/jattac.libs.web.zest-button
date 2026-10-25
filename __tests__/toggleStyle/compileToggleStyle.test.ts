import { compileToggleStyle } from "../../UI/toggleStyle/compileToggleStyle";
import type { ZestToggleStyle } from "../../UI/toggleStyle/types";

const css = (provider?: ZestToggleStyle, own?: ZestToggleStyle, theme: "light" | "dark" = "light", variant = "standard", size = "md") =>
  compileToggleStyle(provider, own, theme, variant, size)?.css ?? "";

describe("compileToggleStyle", () => {
  it("R1: empty or missing settings compile to nothing", () => {
    expect(compileToggleStyle(undefined, undefined, "light", "standard", "md")).toBeNull();
    expect(compileToggleStyle({}, undefined, "light", "standard", "md")).toBeNull();
    expect(compileToggleStyle({ off: {}, on: {} }, undefined, "light", "standard", "md")).toBeNull();
  });

  it("R2: any CSS property is applied exactly as written, including px", () => {
    const out = css({ off: { background: "#eee", borderRadius: "6px", letterSpacing: "0.1em", transition: "all 1s" } });
    expect(out).toContain("background:#eee");
    expect(out).toContain("border-radius:6px");
    expect(out).toContain("letter-spacing:0.1em");
    expect(out).toContain("transition:all 1s");
  });

  it("R2: kebab-case and camelCase are the same property and are emitted once", () => {
    const out = css({ off: { "letter-spacing": "1px", letterSpacing: "2px" } });
    expect(out.match(/letter-spacing/g)).toHaveLength(1);
    expect(out).toContain("letter-spacing:2px");
  });

  it("R2/R8: an unknown property is passed through but bad values drop only themselves", () => {
    const out = css({ off: { color: "red", background: {} as unknown as string, border: null, "bad name!": "x", margin: undefined } });
    expect(out).toContain("color:red");
    expect(out).not.toContain("background");
    expect(out).not.toContain("border");
    expect(out).not.toContain("bad");
    expect(out).not.toContain("margin");
  });

  it.each([
    "red; } body { display:none",
    "red} .x{color:blue",
    "url(javascript:alert(1))",
    "red /* c */",
    "expression(alert(1))",
    "\\72 ed",
    "red\nblue",
    "'unterminated",
    "rgb(1,2,3",
    "x) y(",
    "@import 'a'",
    "</style><script>",
  ])("R2: injection value %j is dropped and cannot add rules", (value) => {
    const out = css({ off: { color: value, opacity: "0.5" } });
    expect(out).not.toContain("color:");
    expect(out).toContain("opacity:0.5");
    expect(out.match(/\{/g)).toHaveLength(1);
  });

  it("R2: a property name that tries to break out is dropped", () => {
    expect(css({ off: { "color:red;}x{y": "1" } })).toBe("");
  });

  it("R3: each state gets its own selector; disabled and busy come after on/off", () => {
    const out = css({
      off: { color: "a" },
      on: { color: "b" },
      hoverOff: { color: "c" },
      hoverOn: { color: "d" },
      focus: { outline: "2px solid red" },
      disabled: { opacity: 0.4 },
      busy: { cursor: "progress" },
    });
    expect(out).toContain('[aria-pressed="false"]{color:a}');
    expect(out).toContain('[aria-pressed="true"]{color:b}');
    expect(out).toContain(":focus-visible{outline:2px solid red}");
    expect(out).toContain(":disabled{opacity:0.4}");
    expect(out).toContain('[aria-busy="true"]{cursor:progress}');
    expect(out.indexOf('[aria-pressed="true"]{')).toBeLessThan(out.indexOf(":disabled{"));
  });

  it("R3: hover looks sit inside a hover-capable media query and exclude disabled", () => {
    const out = css({ hoverOn: { background: "red" } });
    expect(out).toMatch(/^@media \(hover:hover\)\{/);
    expect(out).toContain(':hover:not(:disabled){background:red}');
  });

  it("R3: no hover rule is emitted for an off look, so disabled toggles are not affected", () => {
    expect(css({ off: { color: "a" } })).not.toContain(":hover");
  });

  it("R3/R7: check-mark colour and size style the check element, not the button", () => {
    const out = css({ on: { checkColor: "#fff", checkSize: "1rem" } });
    expect(out).toContain("[data-zest-toggle-check]{color:#fff;width:1rem;height:1rem}");
    expect(out.match(/\{/g)).toHaveLength(1);
  });

  it("R4: size, variant and base layer, variant beats size beats base, other properties merge", () => {
    const style: ZestToggleStyle = {
      on: { background: "base", color: "base-color" },
      sizes: { lg: { on: { background: "size", minHeight: "3rem" } } },
      variants: { danger: { on: { background: "variant" } } },
    };
    const out = css(style, undefined, "light", "danger", "lg");
    expect(out).toContain("background:variant");
    expect(out).toContain("min-height:3rem");
    expect(out).toContain("color:base-color");
    expect(out).not.toContain("background:size");
  });

  it("R4: size and variant looks do not leak onto other sizes or variants", () => {
    const style: ZestToggleStyle = {
      sizes: { lg: { on: { minHeight: "3rem" } } },
      variants: { danger: { on: { background: "red" } } },
    };
    expect(css(style, undefined, "light", "standard", "md")).toBe("");
    expect(css(style, undefined, "light", "success", "sm")).toBe("");
  });

  it("R4/R8: unknown variant or size names in the config are ignored", () => {
    const style = { variants: { nope: { on: { color: "x" } } }, sizes: { huge: { on: { color: "y" } } }, on: { color: "ok" } } as ZestToggleStyle;
    expect(css(style)).toContain("color:ok");
    expect(css(style)).not.toContain("color:x");
    expect(css(style, undefined, "light", "__proto__", "constructor")).toContain("color:ok");
  });

  it("R5: theme looks beat theme-less looks and only the active theme applies", () => {
    const style: ZestToggleStyle = {
      on: { background: "any", color: "any-color" },
      light: { on: { background: "light" } },
      dark: { on: { background: "dark" } },
    };
    const light = css(style, undefined, "light");
    const dark = css(style, undefined, "dark");
    expect(light).toContain("background:light");
    expect(light).toContain("color:any-color");
    expect(dark).toContain("background:dark");
    expect(dark).not.toContain("background:light");
  });

  it("R5: a light-only colour leaves the dark theme at the built-in look", () => {
    expect(css({ light: { on: { color: "#111" } } }, undefined, "dark")).toBe("");
  });

  it("R6: the per-button look beats every provider layer for the properties it gives", () => {
    const provider: ZestToggleStyle = {
      on: { background: "p", color: "p-color" },
      variants: { danger: { on: { background: "variant" } } },
    };
    const out = css(provider, { on: { background: "own" } }, "light", "danger");
    expect(out).toContain("background:own");
    expect(out).toContain("color:p-color");
    expect(out).not.toContain("background:variant");
  });

  it("R6: a per-button style alone works without a provider", () => {
    expect(css(undefined, { off: { color: "z" } })).toContain("color:z");
  });

  it("R7: no focus rule is generated unless a focus look is given", () => {
    expect(css({ on: { background: "x" }, off: { background: "y" } })).not.toContain("focus-visible");
  });

  it("R8: equal contents give the same id; different contents give a different id", () => {
    const a = compileToggleStyle({ on: { color: "a" } }, undefined, "light", "standard", "md");
    const b = compileToggleStyle({ on: { color: "a" } }, undefined, "light", "standard", "md");
    const c = compileToggleStyle({ on: { color: "c" } }, undefined, "light", "standard", "md");
    expect(a?.id).toBe(b?.id);
    expect(a?.id).not.toBe(c?.id);
  });

  it("R8: non-object input never throws", () => {
    expect(() => compileToggleStyle("x" as never, 5 as never, "light", "standard", "md")).not.toThrow();
    expect(() => compileToggleStyle({ on: "bad", variants: 3, sizes: [] } as never, undefined, "light", "standard", "md")).not.toThrow();
  });

  it("R8: a throwing getter in the settings returns null instead of throwing", () => {
    const hostile = {};
    Object.defineProperty(hostile, "on", { enumerable: true, get() { throw new Error("boom"); } });
    expect(compileToggleStyle(hostile, undefined, "light", "standard", "md")).toBeNull();
  });

  it("R8: the same settings object is compiled once per theme, variant and size", () => {
    let reads = 0;
    const style = new Proxy({ on: { color: "a" } } as ZestToggleStyle, {
      get(target, key, receiver) {
        reads++;
        return Reflect.get(target, key, receiver);
      },
    });
    compileToggleStyle(style, undefined, "light", "standard", "md");
    const after = reads;
    for (let i = 0; i < 100; i++) compileToggleStyle(style, undefined, "light", "standard", "md");
    expect(reads).toBe(after);
    compileToggleStyle(style, undefined, "dark", "standard", "md");
    expect(reads).toBeGreaterThan(after);
  });
});
