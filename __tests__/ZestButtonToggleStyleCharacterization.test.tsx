import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ZestButton from "../UI/ZestButton";
import ZestButtonConfigProvider from "../UI/ZestButtonConfigProvider";

// Characterization: behaviour that existed before toggle styling was added and
// must not change (USR-004). Written and run green before any production edit.
describe("toggle and provider baseline (characterization)", () => {
  it("R1: a toggle outside any provider has no generated style hook and keeps aria-pressed", () => {
    render(<ZestButton zest={{ toggleOptions: {} }}>Bold</ZestButton>);
    const button = screen.getByRole("button", { name: "Bold" });
    expect(button).toHaveAttribute("aria-pressed", "false");
    expect(button.getAttribute("data-zest-toggle-style")).toBeNull();
    expect(document.head.querySelector("style[data-zest-toggle-styles]")).toBeNull();
  });

  it("R1: a toggle still flips, shows the aria-hidden check and keeps classes", () => {
    const { container } = render(<ZestButton zest={{ toggleOptions: {} }}>Bold</ZestButton>);
    const button = screen.getByRole("button", { name: "Bold" });
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(button.className).toMatch(/toggleOn/);
    expect(container.querySelector(".toggleCheck")).toHaveAttribute("aria-hidden", "true");
  });

  it("R1: provider defaultProps keep applying to buttons", () => {
    render(
      <ZestButtonConfigProvider config={{ defaultProps: { visualOptions: { variant: "danger" } } }}>
        <ZestButton>Plain</ZestButton>
      </ZestButtonConfigProvider>
    );
    expect(screen.getByRole("button", { name: "Plain" }).className).toMatch(/danger/);
  });

  it("R1: a plain button has no aria-pressed and no style hook", () => {
    render(<ZestButton>Plain</ZestButton>);
    const button = screen.getByRole("button", { name: "Plain" });
    expect(button).not.toHaveAttribute("aria-pressed");
    expect(button.getAttribute("data-zest-toggle-style")).toBeNull();
  });
});
