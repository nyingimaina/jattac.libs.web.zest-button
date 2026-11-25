import React from "react";
import fs from "fs";
import path from "path";
import { render, screen, fireEvent } from "@testing-library/react";
import ZestButton from "../UI/ZestButton";

const css = fs.readFileSync(path.join(__dirname, "../Styles/ZestButton.module.css"), "utf8");
const sheenStart = css.indexOf("/* Opt-in focus streak");
const sheenEnd = css.indexOf("@media (prefers-reduced-motion: reduce)", sheenStart);
const sheenCss = css.slice(sheenStart, sheenEnd);
const dropdownOptions = [{ label: "Export as PDF" }];

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const cssBlock = (selector: string): string => {
  const match = css.match(new RegExp(`${escapeRegExp(selector)}\\s*\\{([^}]*)\\}`));
  if (!match) throw new Error(`Missing CSS block for ${selector}`);
  return match[1];
};

const cssProp = (block: string, name: string): string => {
  const match = block.match(new RegExp(`${escapeRegExp(name)}\\s*:\\s*([^;]+);`));
  if (!match) throw new Error(`Missing CSS property ${name}`);
  return match[1].trim();
};

const stateOf = (button: HTMLElement) => ({
  role: button.getAttribute("role"),
  tagName: button.tagName,
  ariaPressed: button.getAttribute("aria-pressed"),
  ariaBusy: button.getAttribute("aria-busy"),
  ariaLive: button.getAttribute("aria-live"),
  tabIndex: button.getAttribute("tabindex"),
  disabled: (button as HTMLButtonElement).disabled,
});

// R10/A2: the streak is decoration only. It must never intercept pointer
// input, change the accessibility tree or state, add a focusable node, or
// shift layout.
describe("ZestButton focus streak decoration contract", () => {
  it("R10: clicking a button during its sweep runs the action exactly once", () => {
    const onClick = jest.fn();
    render(
      <ZestButton onClick={onClick} zest={{ focusSheen: true }}>
        Save
      </ZestButton>
    );
    const button = screen.getByRole("button", { name: "Save" });

    fireEvent.focus(button);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveClass("focusSheen");
  });

  it("R10: keyboard activation during a sweep still runs the action once", () => {
    const onClick = jest.fn();
    render(
      <ZestButton onClick={onClick} zest={{ focusSheen: true }}>
        Save
      </ZestButton>
    );
    const button = screen.getByRole("button", { name: "Save" });

    fireEvent.focus(button);
    fireEvent.keyDown(button, { key: "Enter" });
    fireEvent.click(button);
    fireEvent.keyUp(button, { key: "Enter" });

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("A2: every focus and programmatic layer is click-through and absolutely inset", () => {
    const selectors = [
      ".button.focusSheen::after",
      ".focusSheenSplit::after",
      ".button.focusSheen.sheenProgrammatic::before",
      ".focusSheenSplit.sheenProgrammatic::before",
    ];

    selectors.forEach((selector) => {
      const block = cssBlock(selector);
      expect(cssProp(block, "pointer-events")).toBe("none");
      expect(cssProp(block, "position")).toBe("absolute");
      expect(cssProp(block, "inset")).toBe("0");
    });
  });

  it("A2: an opted-in button has the same accessible name, role, state and disabled value", () => {
    const cases: Array<{ name: string; props: Record<string, unknown>; zest?: Record<string, unknown> }> = [
      { name: "Plain", props: {} },
      { name: "Toggle", props: {}, zest: { toggleOptions: { defaultPressed: true } } },
      { name: "Busy", props: { "aria-busy": true } },
      { name: "Disabled", props: { disabled: true } },
    ];

    cases.forEach(({ name, props, zest }) => {
      const plainRender = render(
        React.createElement(ZestButton, { ...props, zest } as never, name)
      );
      const plain = stateOf(plainRender.container.querySelector("button") as HTMLElement);
      plainRender.unmount();

      const optedRender = render(
        React.createElement(
          ZestButton,
          { ...props, zest: { ...zest, focusSheen: true } } as never,
          name
        )
      );
      const opted = stateOf(optedRender.container.querySelector("button") as HTMLElement);

      expect(opted).toEqual(plain);
      expect(opted.ariaLive).toBeNull();
      expect(opted.role).toBeNull();
      expect(opted.tabIndex).toBeNull();
    });
  });

  it("R10: a toggle and a busy button keep their state values while the streak plays", () => {
    render(
      <>
        <ZestButton zest={{ focusSheen: true, toggleOptions: { defaultPressed: true } }}>Bold</ZestButton>
        <ZestButton aria-busy={true} zest={{ focusSheen: true }}>
          Sync
        </ZestButton>
      </>
    );

    const toggle = screen.getByRole("button", { name: "Bold", pressed: true });
    const busy = screen.getByRole("button", { name: "Sync" });

    fireEvent.focus(toggle);
    fireEvent.focus(busy);

    expect(toggle).toHaveClass("focusSheen", "toggleOn");
    expect(toggle).toHaveAttribute("aria-pressed", "true");
    expect(busy).toHaveClass("focusSheen");
    expect(busy).toHaveAttribute("aria-busy", "true");
    expect(busy).toBeDisabled();
  });

  it("R10: opting in adds no DOM element, no aria-live announcement and no focusable node", () => {
    const { container: plain } = render(<ZestButton>Plain</ZestButton>);
    const plainCount = plain.querySelectorAll("*").length;

    const { container: opted } = render(
      <ZestButton zest={{ focusSheen: true }}>Opted</ZestButton>
    );

    expect(opted.querySelectorAll("*").length).toBe(plainCount);
    expect(opted.querySelector("[aria-live]")).toBeNull();
    expect(opted.querySelector("[role]")).toBeNull();
    expect(opted.querySelector("[tabindex]")).toBeNull();
    expect(opted.querySelectorAll("button")).toHaveLength(1);
  });

  it("R10: the split wrapper stays out of the tab order and is not announced", () => {
    const { container } = render(
      <ZestButton zest={{ focusSheen: true, dropdownOptions }}>Export</ZestButton>
    );
    const wrapper = container.firstElementChild as HTMLElement;

    expect(wrapper).toHaveClass("splitButtonContainer", "focusSheenSplit");
    expect(wrapper).not.toHaveAttribute("tabindex");
    expect(wrapper).not.toHaveAttribute("role");
    expect(wrapper).not.toHaveAttribute("aria-live");
    expect(wrapper.tabIndex).toBe(-1);
    expect(wrapper.querySelector("[aria-live]")).toBeNull();
  });

  it("R10: at high zoom the band stays inside the button and adds no scrollbar", () => {
    expect(cssBlock(".button.focusSheen::after")).toMatch(/inset:\s*0;/);
    expect(cssBlock(".focusSheenSplit::after")).toMatch(/inset:\s*0;/);
    expect(css).toMatch(/\.button\s*\{[^}]*overflow:\s*hidden;/);
    expect(sheenCss).not.toMatch(/overflow\s*:\s*(auto|scroll)/);
    expect(sheenCss).not.toMatch(/background-attachment\s*:\s*fixed/);
  });

  it("A2: the sheen rules contain no size, spacing or font declarations", () => {
    expect(sheenCss).not.toMatch(
      /(?:^|[;{])\s*(width|min-width|max-width|height|min-height|max-height|margin|margin-[a-z]+|padding|padding-[a-z]+|font-size)\s*:/m
    );
  });
});
