import React from "react";
import { renderHook } from "@testing-library/react";
import { useToggleStyle } from "../../UI/hooks/useToggleStyle";
import ZestButtonConfigProvider from "../../UI/ZestButtonConfigProvider";
import type { ZestGlobalConfig } from "../../UI/ZestButtonConfigContext";

const wrap = (config: ZestGlobalConfig) => ({ children }: { children: React.ReactNode }) => (
  <ZestButtonConfigProvider config={config}>{children}</ZestButtonConfigProvider>
);

const base = { enabled: true, theme: "light" as const, variant: "standard", size: "md" };
const sheet = () => document.head.querySelector("style[data-zest-toggle-styles]");

describe("useToggleStyle", () => {
  it("R1: without a provider or style there is no id and no style element", () => {
    const { result } = renderHook(() => useToggleStyle(base));
    expect(result.current).toBeUndefined();
    expect(sheet()).toBeNull();
  });

  it("R1: a provider with an empty styles section changes nothing", () => {
    const { result } = renderHook(() => useToggleStyle(base), { wrapper: wrap({ styles: { toggle: {} } }) });
    expect(result.current).toBeUndefined();
    expect(sheet()).toBeNull();
  });

  it("R1: a disabled hook (plain button) never styles even inside a styled provider", () => {
    const { result } = renderHook(() => useToggleStyle({ ...base, enabled: false }), {
      wrapper: wrap({ styles: { toggle: { on: { color: "red" } } } }),
    });
    expect(result.current).toBeUndefined();
    expect(sheet()).toBeNull();
  });

  it("R1: nested providers use only the inner settings", () => {
    const outer = { styles: { toggle: { on: { color: "outer" } } } };
    const inner = { styles: { toggle: { on: { background: "inner" } } } };
    const { result } = renderHook(() => useToggleStyle(base), {
      wrapper: ({ children }) => (
        <ZestButtonConfigProvider config={outer}>
          <ZestButtonConfigProvider config={inner}>{children}</ZestButtonConfigProvider>
        </ZestButtonConfigProvider>
      ),
    });
    expect(result.current).toBeDefined();
    expect(sheet()?.textContent).toContain("background:inner");
    expect(sheet()?.textContent).not.toContain("outer");
  });

  it("R4: variant and size feed the lookup", () => {
    const config = { styles: { toggle: { variants: { danger: { on: { color: "red" } } } } } };
    const standard = renderHook(() => useToggleStyle(base), { wrapper: wrap(config) });
    expect(standard.result.current).toBeUndefined();
    const danger = renderHook(() => useToggleStyle({ ...base, variant: "danger" }), { wrapper: wrap(config) });
    expect(danger.result.current).toBeDefined();
    danger.unmount();
  });

  it("R5: a theme change restyles with the other theme's look", () => {
    const config = { styles: { toggle: { light: { on: { color: "L" } }, dark: { on: { color: "D" } } } } };
    const { rerender } = renderHook(({ theme }) => useToggleStyle({ ...base, theme }), {
      wrapper: wrap(config),
      initialProps: { theme: "light" as "light" | "dark" },
    });
    expect(sheet()?.textContent).toContain("color:L");
    rerender({ theme: "dark" });
    expect(sheet()?.textContent).toContain("color:D");
    expect(sheet()?.textContent).not.toContain("color:L");
  });

  it("R6: changing the per-button style on re-render updates the rules", () => {
    const { rerender } = renderHook(({ style }) => useToggleStyle({ ...base, style }), {
      initialProps: { style: { on: { color: "one" } } as import("../../UI/toggleStyle/types").ZestToggleStyle },
    });
    expect(sheet()?.textContent).toContain("color:one");
    rerender({ style: { on: { color: "two" } } });
    expect(sheet()?.textContent).toContain("color:two");
    expect(sheet()?.textContent).not.toContain("color:one");
  });

  it("R8: a recreated but identical config keeps the same id and one rule", () => {
    const { result, rerender } = renderHook(() => useToggleStyle(base), {
      wrapper: ({ children }) => (
        <ZestButtonConfigProvider config={{ styles: { toggle: { on: { color: "same" } } } }}>{children}</ZestButtonConfigProvider>
      ),
    });
    const first = result.current;
    rerender();
    rerender();
    expect(result.current).toBe(first);
    expect(sheet()?.textContent?.match(/color:same/g)).toHaveLength(1);
  });

  it("R8: unmount releases the rules", () => {
    const { unmount } = renderHook(() => useToggleStyle(base), { wrapper: wrap({ styles: { toggle: { on: { color: "gone" } } } }) });
    expect(sheet()).not.toBeNull();
    unmount();
    expect(sheet()).toBeNull();
  });

  it("R8: a hostile config does not throw from the hook", () => {
    const hostile = {};
    Object.defineProperty(hostile, "on", { enumerable: true, get() { throw new Error("boom"); } });
    expect(() =>
      renderHook(() => useToggleStyle(base), { wrapper: wrap({ styles: { toggle: hostile } }) })
    ).not.toThrow();
  });
});
