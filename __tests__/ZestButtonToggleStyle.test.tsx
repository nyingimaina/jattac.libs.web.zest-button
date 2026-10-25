import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ZestButton from "../UI/ZestButton";
import ZestButtonConfigProvider from "../UI/ZestButtonConfigProvider";
import * as index from "../UI";
import type { ZestGlobalConfig, ZestToggleStyle } from "../UI";

const sheetText = () => document.head.querySelector("style[data-zest-toggle-styles]")?.textContent ?? "";

const renderWith = (toggle: ZestToggleStyle, ui: React.ReactNode, extra: Partial<ZestGlobalConfig> = {}) =>
  render(<ZestButtonConfigProvider config={{ styles: { toggle }, ...extra }}>{ui}</ZestButtonConfigProvider>);

const mockSystemTheme = (dark: boolean) => {
  const listeners: Array<() => void> = [];
  const mq = {
    matches: dark,
    media: "",
    addEventListener: (_: string, l: () => void) => listeners.push(l),
    removeEventListener: (_: string, l: () => void) => listeners.splice(listeners.indexOf(l), 1),
  };
  window.matchMedia = jest.fn().mockReturnValue(mq) as never;
  return {
    set(next: boolean) {
      mq.matches = next;
      act(() => listeners.slice().forEach((l) => l()));
    },
    listenerCount: () => listeners.length,
  };
};

afterEach(() => {
  window.matchMedia = ((query: string) => ({ matches: false, media: query, addEventListener() {}, removeEventListener() {} })) as never;
});

describe("ZestButton toggle styling", () => {
  it("R1: a toggle inside the provider gets the configured look through a data attribute", () => {
    renderWith({ on: { background: "#0a7" } }, <ZestButton zest={{ toggleOptions: {} }}>Bold</ZestButton>);
    const id = screen.getByRole("button").getAttribute("data-zest-toggle-style");
    expect(id).toBeTruthy();
    expect(sheetText()).toContain(`[data-zest-toggle-style="${id}"]`);
    expect(sheetText()).toContain("background:#0a7");
  });

  it("R1: a plain button inside a styled provider is not styled", () => {
    renderWith({ on: { background: "#0a7" } }, <ZestButton>Plain</ZestButton>);
    expect(screen.getByRole("button").getAttribute("data-zest-toggle-style")).toBeNull();
    expect(sheetText()).toBe("");
  });

  it("R1: an empty styles section or empty toggle renders exactly as today", () => {
    render(
      <ZestButtonConfigProvider config={{ styles: {} }}>
        <ZestButton zest={{ toggleOptions: {} }}>A</ZestButton>
      </ZestButtonConfigProvider>
    );
    expect(screen.getByRole("button").getAttribute("data-zest-toggle-style")).toBeNull();
    expect(sheetText()).toBe("");
  });

  it("R1: defaultProps and semanticTypeDefaults keep working next to styles", () => {
    renderWith(
      { on: { color: "red" } },
      <ZestButton zest={{ semanticType: "delete", toggleOptions: {} }}>Del</ZestButton>,
      { defaultProps: { visualOptions: { size: "lg" } } }
    );
    expect(screen.getByRole("button").className).toMatch(/danger/);
    expect(screen.getByRole("button").className).toMatch(/lg/);
  });

  it("R1: toggles outside the provider are untouched while another toggle is styled", () => {
    render(
      <>
        <ZestButtonConfigProvider config={{ styles: { toggle: { on: { color: "red" } } } }}>
          <ZestButton zest={{ toggleOptions: {} }}>In</ZestButton>
        </ZestButtonConfigProvider>
        <ZestButton zest={{ toggleOptions: {} }}>Out</ZestButton>
      </>
    );
    expect(screen.getByRole("button", { name: "In" }).getAttribute("data-zest-toggle-style")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Out" }).getAttribute("data-zest-toggle-style")).toBeNull();
  });

  it("R4: a toggle whose semantic type supplies the danger variant uses the danger look", () => {
    renderWith(
      { variants: { danger: { on: { background: "crimson" } } } },
      <>
        <ZestButton zest={{ semanticType: "delete", toggleOptions: {} }}>Del</ZestButton>
        <ZestButton zest={{ toggleOptions: {} }}>Std</ZestButton>
      </>
    );
    expect(screen.getByRole("button", { name: "Del" }).getAttribute("data-zest-toggle-style")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Std" }).getAttribute("data-zest-toggle-style")).toBeNull();
  });

  it("R4: default size and variant (md, standard) are used for the lookup", () => {
    renderWith({ sizes: { md: { on: { minHeight: "3rem" } } } }, <ZestButton zest={{ toggleOptions: {} }}>M</ZestButton>);
    expect(sheetText()).toContain("min-height:3rem");
  });

  it("R5: theme 'system' follows the operating system theme live", () => {
    const os = mockSystemTheme(false);
    renderWith(
      { light: { on: { color: "LIGHT" } }, dark: { on: { color: "DARK" } } },
      <ZestButton zest={{ toggleOptions: {} }}>S</ZestButton>
    );
    expect(sheetText()).toContain("color:LIGHT");
    os.set(true);
    expect(sheetText()).toContain("color:DARK");
    expect(sheetText()).not.toContain("color:LIGHT");
  });

  it("R5: explicit light and dark themes ignore the operating system", () => {
    mockSystemTheme(true);
    renderWith(
      { light: { on: { color: "LIGHT" } }, dark: { on: { color: "DARK" } } },
      <ZestButton zest={{ theme: "light", toggleOptions: {} }}>L</ZestButton>
    );
    expect(sheetText()).toContain("color:LIGHT");
    expect(sheetText()).not.toContain("color:DARK");
  });

  it("R6: a per-button style changes only that toggle and updates on re-render", () => {
    const provider = { on: { background: "prov", color: "pc" } };
    const ui = (color: string) => (
      <ZestButtonConfigProvider config={{ styles: { toggle: provider } }}>
        <ZestButton zest={{ toggleOptions: { style: { on: { background: color } } } }}>One</ZestButton>
        <ZestButton zest={{ toggleOptions: {} }}>Two</ZestButton>
      </ZestButtonConfigProvider>
    );
    const { rerender } = render(ui("own1"));
    const one = screen.getByRole("button", { name: "One" }).getAttribute("data-zest-toggle-style");
    const two = screen.getByRole("button", { name: "Two" }).getAttribute("data-zest-toggle-style");
    expect(one).not.toBe(two);
    expect(sheetText()).toContain("background:own1");
    expect(sheetText()).toContain("background:prov");
    rerender(ui("own2"));
    expect(sheetText()).toContain("background:own2");
    expect(sheetText()).not.toContain("background:own1");
    expect(screen.getByRole("button", { name: "Two" }).getAttribute("data-zest-toggle-style")).toBe(two);
  });

  it("R7: heavy styling keeps aria-pressed, click, Space/Enter, the aria-hidden check and no focus override", () => {
    const { container } = renderWith(
      { off: { background: "#eee" }, on: { background: "#0a7", checkColor: "#0a7" }, hoverOn: { opacity: 0.5 }, disabled: { opacity: 0.2 } },
      <ZestButton zest={{ toggleOptions: {} }}>Bold</ZestButton>
    );
    const button = screen.getByRole("button", { name: "Bold" });
    expect(button).toHaveAttribute("aria-pressed", "false");
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(container.querySelector("[data-zest-toggle-check]")).toHaveAttribute("aria-hidden", "true");
    expect(sheetText()).not.toContain("focus-visible");
    // Space and Enter on a native button fire click; the toggle handles both identically.
    fireEvent.keyDown(button, { key: "Enter" });
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-pressed", "false");
  });

  it("R7: check position is unaffected by styling", () => {
    const { container } = renderWith(
      { on: { checkSize: "2rem" } },
      <ZestButton zest={{ toggleOptions: { defaultPressed: true, checkPosition: "end" } }}>Bold</ZestButton>
    );
    const content = container.querySelector(".content") as HTMLElement;
    expect(content.lastElementChild?.className).toMatch(/toggleCheckSlot/);
  });

  it("R7: a disabled styled toggle is still not operable and keeps its state", () => {
    renderWith({ disabled: { opacity: 0.3 } }, <ZestButton disabled zest={{ toggleOptions: { defaultPressed: true } }}>D</ZestButton>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-pressed", "true");
  });

  it("R8: a hostile config does not unmount the button", () => {
    const hostile = {};
    Object.defineProperty(hostile, "on", { enumerable: true, get() { throw new Error("boom"); } });
    renderWith(hostile, <ZestButton zest={{ toggleOptions: {} }}>Safe</ZestButton>);
    expect(screen.getByRole("button", { name: "Safe" })).toBeInTheDocument();
  });

  it("R8: a replaced config restyles on the next render", () => {
    const ui = (color: string) => (
      <ZestButtonConfigProvider config={{ styles: { toggle: { on: { color } } } }}>
        <ZestButton zest={{ toggleOptions: {} }}>X</ZestButton>
      </ZestButtonConfigProvider>
    );
    const { rerender } = render(ui("first"));
    expect(sheetText()).toContain("color:first");
    rerender(ui("second"));
    expect(sheetText()).toContain("color:second");
    expect(sheetText()).not.toContain("color:first");
  });

  it("R8: a config recreated every render keeps the same id (no flicker)", () => {
    const ui = () => (
      <ZestButtonConfigProvider config={{ styles: { toggle: { on: { color: "stable" } } } }}>
        <ZestButton zest={{ toggleOptions: {} }}>X</ZestButton>
      </ZestButtonConfigProvider>
    );
    const { rerender } = render(ui());
    const before = screen.getByRole("button").getAttribute("data-zest-toggle-style");
    rerender(ui());
    rerender(ui());
    expect(screen.getByRole("button").getAttribute("data-zest-toggle-style")).toBe(before);
    expect(document.head.querySelectorAll("style[data-zest-toggle-styles]")).toHaveLength(1);
  });

  it("R2: injection values never reach the page as extra rules, elements or properties", () => {
    renderWith(
      { on: { color: "red; } body { display:none", background: "url(javascript:alert(1))", opacity: "0.5" } },
      <ZestButton zest={{ toggleOptions: {} }}>Sec</ZestButton>
    );
    expect(sheetText()).toContain("opacity:0.5");
    expect(sheetText()).not.toMatch(/body|display|url\(|javascript/);
    expect(document.head.querySelector("script")).toBeNull();
  });

  it("R3/R8: 100 styled toggles share one rule set and leave no style element or timers behind", () => {
    jest.useFakeTimers();
    const addSpy = jest.spyOn(document, "addEventListener");
    const { unmount } = renderWith(
      { off: { color: "a" }, on: { color: "b" }, hoverOn: { color: "c" } },
      <>
        {Array.from({ length: 100 }, (_, i) => (
          <ZestButton key={i} zest={{ toggleOptions: {} }}>T{i}</ZestButton>
        ))}
      </>
    );
    const ids = new Set(screen.getAllByRole("button").map((b) => b.getAttribute("data-zest-toggle-style")));
    expect(ids.size).toBe(1);
    expect(document.head.querySelectorAll("style[data-zest-toggle-styles]")).toHaveLength(1);
    expect(jest.getTimerCount()).toBe(0);
    expect(addSpy.mock.calls.filter(([type]) => type === "keydown")).toHaveLength(0);
    unmount();
    expect(document.head.querySelector("style[data-zest-toggle-styles]")).toBeNull();
    expect(jest.getTimerCount()).toBe(0);
    jest.useRealTimers();
    addSpy.mockRestore();
  });

  it("R9: the new types and the existing exports are available from the package entry", () => {
    expect(typeof index.default).toBe("function");
    expect(typeof index.ZestButtonConfigProvider).toBe("function");
    expect(typeof index.ZestIcon).toBe("function");
    const typed: ZestGlobalConfig = { defaultProps: {}, semanticTypeDefaults: {}, styles: { toggle: { on: { background: "x" } } } };
    expect(typed.styles?.toggle?.on?.background).toBe("x");
  });
});
