import React from "react";
import fs from "fs";
import path from "path";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ZestButton from "../UI/ZestButton";

const css = fs.readFileSync(path.join(__dirname, "../Styles/ZestButton.module.css"), "utf8");
const dropdownOptions = [{ label: "Export as PDF" }];

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const cssBlock = (selector: string): string => {
  const match = css.match(new RegExp(`${escapeRegExp(selector)}\\s*\\{([^}]*)\\}`));
  if (!match) throw new Error(`Missing CSS block for ${selector}`);
  return match[1];
};

// Characterization: appearance and behaviour that shipped before the focus
// streak was added and must not change for buttons that do not opt in (USR-004).
describe("ZestButton appearance baseline (characterization)", () => {
  it("A3: a plain regular button keeps its current wrapper element, classes and DOM", () => {
    const { container } = render(<ZestButton>Plain</ZestButton>);

    const button = screen.getByRole("button", { name: "Plain" });
    expect(container.firstChild).toBe(button);
    expect(button).toHaveProperty("tagName", "BUTTON");
    expect(button).toHaveClass("button", "solid", "standard", "md", "force-light");
    expect(button.className).not.toMatch(/sheen/i);
    expect(button.childNodes).toHaveLength(1);
    expect(button.firstElementChild).toHaveClass("inner");
    expect(button.firstElementChild?.firstElementChild).toHaveClass("content");
    expect(button.firstElementChild?.firstElementChild?.textContent).toBe("Plain");
  });

  it("A3: a split wrapper and its two segments keep their current classes and gain no sheen classes", () => {
    const { container } = render(
      <ZestButton zest={{ dropdownOptions: [{ label: "Export as PDF" }] }}>Export</ZestButton>
    );

    const main = screen.getByRole("button", { name: "Export" });
    const trigger = screen.getByRole("button", { name: "More options" });
    const wrapper = container.firstElementChild as HTMLElement;

    expect(wrapper).toHaveClass("splitButtonContainer");
    expect(wrapper.className).not.toMatch(/sheen/i);
    expect(wrapper).not.toHaveClass("focusSheenSplit");
    expect(main).toHaveClass("button", "splitButtonMain", "solid", "standard", "md", "force-light");
    expect(main).not.toHaveClass("focusSheen");
    expect(trigger).toHaveClass("button", "dropdownTrigger", "solid", "standard", "md", "force-light");
    expect(trigger).not.toHaveClass("focusSheen");
    expect(container.querySelectorAll(".focusSheen, .focusSheenSplit")).toHaveLength(0);
  });

  it("A3: the existing focus-ring rule is still the focus indicator", () => {
    expect(css).toMatch(
      /\.button:focus-visible\s*\{[^}]*outline:\s*none;[^}]*box-shadow:\s*var\(--zest-shadow-resting\),\s*var\(--zest-focus-ring\)/
    );
    expect(css).toMatch(/--zest-focus-ring:\s*0 0 0 3px/);
  });

  it("A3: the existing chevron mount-streak rule and keyframes are unchanged", () => {
    expect(css).toMatch(
      /\.dropdownTrigger::before\s*\{[^}]*background:\s*linear-gradient\([\s\S]*?115deg[\s\S]*?animation:\s*dropdownTriggerDiscoverySheen\s+1\.3s[^;]*0\.4s\s+1\s+both/
    );
    expect(css).toMatch(/@keyframes dropdownTriggerDiscoverySheen/);
    expect(css).toMatch(/\.dropdownTrigger::before\s*\{[^}]*rgba\(255,\s*255,\s*255,\s*0\.65\)/);
  });

  it("A3: a button that does not opt in keeps its click behaviour and adds no extra elements", () => {
    const onClick = jest.fn();
    const { container } = render(<ZestButton onClick={onClick}>Plain</ZestButton>);

    fireEvent.click(screen.getByRole("button", { name: "Plain" }));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(container.firstElementChild).toHaveProperty("tagName", "BUTTON");
    expect(container.querySelectorAll(".focusSheen, .focusSheenSplit")).toHaveLength(0);
  });

  it("R6: a split button that does not use the sheen keeps its one-time chevron mount streak", () => {
    const { container } = render(
      <ZestButton zest={{ dropdownOptions: [{ label: "Export as PDF" }] }}>Export</ZestButton>
    );
    const wrapper = container.firstElementChild as HTMLElement;

    expect(wrapper).not.toHaveClass("focusSheenSplit");
    expect(wrapper.className).not.toMatch(/sheen/i);
    expect(css).toMatch(/\.dropdownTrigger::before\s*\{[^}]*animation:\s*dropdownTriggerDiscoverySheen/);
  });

  it("R6: a regular button has no chevron mount streak to suppress and gains no sheen class", () => {
    const { container } = render(<ZestButton>Plain</ZestButton>);

    expect(container.querySelector(".dropdownTrigger")).toBeNull();
    expect(screen.getByRole("button", { name: "Plain" }).className).not.toMatch(/sheen/i);
  });

  it("R12: consumer CSS written against the split wrapper and segment class names still matches", () => {
    const { container } = render(<ZestButton zest={{ dropdownOptions }}>Export</ZestButton>);

    expect(container.firstElementChild).toHaveClass("splitButtonContainer");
    expect(screen.getByRole("button", { name: "Export" })).toHaveClass("splitButtonMain");
    expect(screen.getByRole("button", { name: "More options" })).toHaveClass("dropdownTrigger");

    expect(css).toMatch(/\.splitButtonContainer\s*\{/);
    expect(cssBlock(".splitButtonMain")).toMatch(/border-top-right-radius:\s*0/);
    expect(cssBlock(".dropdownTrigger")).toMatch(/border-top-left-radius:\s*0/);
  });

  it("R12: the split wrapper only gains relative positioning and the overlay radius when the sheen is in use", () => {
    const { container, rerender } = render(<ZestButton zest={{ dropdownOptions }}>Export</ZestButton>);
    const plainWrapper = container.firstElementChild as HTMLElement;

    expect(plainWrapper).toHaveClass("splitButtonContainer");
    expect(plainWrapper).not.toHaveClass("focusSheenSplit");
    expect(cssBlock(".splitButtonContainer")).not.toMatch(/overflow\s*:/);

    rerender(<ZestButton zest={{ focusSheen: true, dropdownOptions }}>Export</ZestButton>);
    const sheenWrapper = container.firstElementChild as HTMLElement;

    expect(sheenWrapper).toHaveClass("splitButtonContainer", "focusSheenSplit");
    expect(cssBlock(".splitButtonContainer.focusSheenSplit")).toMatch(/position:\s*relative/);
    expect(cssBlock(".splitButtonContainer.focusSheenSplit")).not.toMatch(/overflow\s*:/);
    expect(cssBlock(".focusSheenSplit::after")).toMatch(/border-radius:\s*var\(--zest-radius-md\)/);
    expect(cssBlock(".focusSheenSplit::after")).toMatch(/inset:\s*0/);
  });

  it("R12: toggle-mode buttons behave exactly as before when the sheen is not used", () => {
    render(<ZestButton zest={{ toggleOptions: {} }}>Bold</ZestButton>);
    const button = screen.getByRole("button", { name: "Bold", pressed: false });

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(button).toHaveClass("toggleOn");

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-pressed", "false");
    expect(button).not.toHaveClass("toggleOn");
    expect(button.className).not.toMatch(/sheen/i);
  });

  it("R12: busy buttons and dropdown items behave exactly as before when the sheen is not used", async () => {
    const { rerender } = render(<ZestButton aria-busy={true}>Save</ZestButton>);
    expect(screen.getByRole("button", { name: "Save" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Save" })).toHaveAttribute("aria-busy", "true");

    rerender(<ZestButton zest={{ dropdownOptions }}>Export</ZestButton>);
    const trigger = screen.getByRole("button", { name: "More options" });

    act(() => {
      fireEvent.pointerDown(trigger, { button: 0, pointerType: "mouse" });
      fireEvent.pointerUp(trigger, { button: 0, pointerType: "mouse" });
    });

    const item = await screen.findByRole("menuitem", { name: "Export as PDF" });
    expect(item).toBeVisible();
    expect(trigger).not.toHaveClass("focusSheen");
  });
});
