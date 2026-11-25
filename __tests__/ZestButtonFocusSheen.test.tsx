import React from "react";
import fs from "fs";
import path from "path";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ZestButton, { ZestButtonStyle, ZestTheme, ZestVariant } from "../UI/ZestButton";

const css = fs.readFileSync(path.join(__dirname, "../Styles/ZestButton.module.css"), "utf8");
const sheenStart = css.indexOf("/* Opt-in focus streak");
const sheenEnd = css.indexOf("@media (prefers-reduced-motion: reduce)", sheenStart);
const sheenCss = css.slice(sheenStart, sheenEnd);

const reducedMotionStart = css.indexOf("@media (prefers-reduced-motion: reduce)");
const reducedMotionEnd = css.indexOf("@media (prefers-reduced-motion: reduce)", reducedMotionStart + 1);
const firstReducedMotionBlock = css.slice(
  reducedMotionStart,
  reducedMotionEnd === -1 ? undefined : reducedMotionEnd
);

const reducedMotionBlock = (() => {
  const start = css.indexOf("@media (prefers-reduced-motion: reduce)");
  const end = css.indexOf("\n}", start);
  return css.slice(start, end === -1 ? undefined : end + 2);
})();

const read = (file: string) => fs.readFileSync(path.join(__dirname, "..", file), "utf8");

const hookSource = fs.readFileSync(path.join(__dirname, "../UI/hooks/useSheenTrigger.ts"), "utf8");

const keyframes = (name: string): string => {
  const match = css.match(new RegExp(`@keyframes ${name}\\s*\\{([\\s\\S]*?)\\n\\}`));
  if (!match) throw new Error(`Missing keyframes for ${name}`);
  return match[1];
};

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const cssBlock = (selector: string): string => {
  const match = css.match(new RegExp(`${escapeRegExp(selector)}\\s*\\{([^}]*)\\}`));
  if (!match) throw new Error(`Missing CSS block for ${selector}`);
  return match[1];
};

const cssProp = (block: string, propName: string): string => {
  const match = block.match(new RegExp(`${escapeRegExp(propName)}\\s*:\\s*([^;]+);`));
  if (!match) throw new Error(`Missing CSS property ${propName}`);
  return match[1].trim();
};

const hexToRgb = (hex: string): [number, number, number] => {
  const value = hex.replace("#", "").trim();
  return [
    parseInt(value.slice(0, 2), 16),
    parseInt(value.slice(2, 4), 16),
    parseInt(value.slice(4, 6), 16),
  ];
};

const linearChannel = (channel: number): number => {
  const value = channel / 255;
  return value <= 0.04045 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
};

const luminance = ([r, g, b]: [number, number, number]): number =>
  0.2126 * linearChannel(r) + 0.7152 * linearChannel(g) + 0.0722 * linearChannel(b);

const contrastAtPeak = (bandHex: string, backgroundHex: string, peak: number): number => {
  const band = hexToRgb(bandHex);
  const background = hexToRgb(backgroundHex);
  const blended = band.map((channel, index) => peak * channel + (1 - peak) * background[index]) as [
    number,
    number,
    number
  ];
  const bandLuminance = luminance(blended);
  const backgroundLuminance = luminance(background);
  return (
    (Math.max(bandLuminance, backgroundLuminance) + 0.05) /
    (Math.min(bandLuminance, backgroundLuminance) + 0.05)
  );
};

const dropdownOptions = [{ label: "Export as PDF" }];

function openTrigger(trigger: HTMLElement) {
  act(() => {
    fireEvent.pointerDown(trigger, { button: 0, pointerType: "mouse" });
    fireEvent.pointerUp(trigger, { button: 0, pointerType: "mouse" });
  });
}

const themeClass = (theme: ZestTheme) => (theme === "light" ? "force-light" : "force-dark");

describe("ZestButton focus streak (focusSheen)", () => {
  describe("R1 opt-in", () => {
    it("R1: focusSheen is off by default and opts in per button without leaking", () => {
      render(
        <>
          <ZestButton>Plain</ZestButton>
          <ZestButton zest={{ focusSheen: true }}>Opted</ZestButton>
        </>
      );

      expect(screen.getByRole("button", { name: "Plain" })).not.toHaveClass("focusSheen");
      expect(screen.getByRole("button", { name: "Opted" })).toHaveClass("focusSheen");
    });

    it("R1: focusSheen={false} renders no streak layer", () => {
      render(<ZestButton zest={{ focusSheen: false }}>Plain</ZestButton>);
      expect(screen.getByRole("button", { name: "Plain" })).not.toHaveClass("focusSheen");
    });

    it("R1: turning focusSheen off at runtime removes the streak layer from a regular button and a split control", () => {
      const { rerender } = render(
        <>
          <ZestButton zest={{ focusSheen: true }}>Plain</ZestButton>
          <ZestButton zest={{ focusSheen: true, dropdownOptions }}>Export</ZestButton>
        </>
      );

      expect(screen.getByRole("button", { name: "Plain" })).toHaveClass("focusSheen");
      expect(screen.getByRole("button", { name: "Export" }).parentElement).toHaveClass("focusSheenSplit");

      rerender(
        <>
          <ZestButton zest={{ focusSheen: false }}>Plain</ZestButton>
          <ZestButton zest={{ focusSheen: false, dropdownOptions }}>Export</ZestButton>
        </>
      );

      expect(screen.getByRole("button", { name: "Plain" })).not.toHaveClass("focusSheen");
      expect(screen.getByRole("button", { name: "Export" }).parentElement).not.toHaveClass("focusSheenSplit");
    });

    it("R1: a split button opts in with one whole-control layer and no per-segment layer", () => {
      render(<ZestButton zest={{ focusSheen: true, dropdownOptions }}>Export</ZestButton>);

      const main = screen.getByRole("button", { name: "Export" });
      const trigger = screen.getByRole("button", { name: "More options" });

      expect(main.parentElement).toHaveClass("focusSheenSplit");
      expect(main).not.toHaveClass("focusSheen");
      expect(trigger).not.toHaveClass("focusSheen");
      expect(document.querySelectorAll(".focusSheenSplit")).toHaveLength(1);
    });

    it("R1: opting in leaves the accessible name, role and pressed state alone", () => {
      render(
        <ZestButton zest={{ focusSheen: true, toggleOptions: {} }}>Bold</ZestButton>
      );

      const button = screen.getByRole("button", { name: "Bold", pressed: false });
      expect(button).toHaveClass("focusSheen");
      expect(button).toHaveAttribute("aria-pressed", "false");
    });
  });

  describe("R2 keyboard focus only", () => {
    it("R2: plain focus or a mouse click adds no JS state; only :focus-visible starts the sweep", () => {
      render(<ZestButton zest={{ focusSheen: true }}>Save</ZestButton>);
      const button = screen.getByRole("button", { name: "Save" });

      fireEvent.focus(button);
      fireEvent.click(button);

      expect(button).toHaveClass("focusSheen");
      expect(button.className).not.toMatch(/sheenOn|isFocused|active/i);
      expect(sheenCss).toMatch(/\.button\.focusSheen:focus-visible::after/);
      expect(sheenCss).not.toMatch(/\.button\.focusSheen:focus(?!-visible)/);
      expect(sheenCss).not.toMatch(/\.button\.focusSheen:focus-within/);
    });

    it("R2: each focus arrival plays exactly one sweep and a re-focus replays it", () => {
      render(<ZestButton zest={{ focusSheen: true }}>Save</ZestButton>);
      const button = screen.getByRole("button", { name: "Save" });

      fireEvent.focus(button);
      fireEvent.blur(button);
      fireEvent.focus(button);

      expect(button).toHaveClass("focusSheen");
      expect(sheenCss).toMatch(
        /\.button\.focusSheen:focus-visible::after\s*\{[^}]*animation:\s*zestFocusSheenSweep\s+0\.6s[^;]*\s1\s+both/
      );
      expect(sheenCss).not.toMatch(/animation-direction:\s*alternate/);
    });

    it("R2: the existing focus ring remains the primary focus signal", () => {
      render(<ZestButton zest={{ focusSheen: true }}>Save</ZestButton>);
      expect(screen.getByRole("button", { name: "Save" })).toHaveClass("focusSheen");
      expect(css).toMatch(
        /\.button:focus-visible\s*\{[^}]*box-shadow:\s*var\(--zest-shadow-resting\),\s*var\(--zest-focus-ring\)/
      );
      expect(sheenCss).not.toMatch(/box-shadow\s*:/);
      expect(sheenCss).not.toMatch(/outline\s*:/);
    });

    it("R2: a toggle in its on state keeps its pressed look and focus ring while the streak plays", () => {
      render(
        <ZestButton zest={{ focusSheen: true, toggleOptions: { defaultPressed: true } }}>Bold</ZestButton>
      );

      const button = screen.getByRole("button", { name: "Bold", pressed: true });
      expect(button).toHaveClass("toggleOn", "focusSheen");
      expect(css).toMatch(/\.solid\.toggleOn:focus-visible\s*\{[^}]*var\(--zest-focus-ring\)/);
    });
  });

  describe("R3 the diagonal band", () => {
    it("R3: the band is a 45-degree diagonal that travels top-right to bottom-left over 0.6 seconds", () => {
      expect(sheenCss).toMatch(/linear-gradient\(\s*45deg/);
      expect(sheenCss).toMatch(
        /@keyframes zestFocusSheenSweep\s*\{[\s\S]*0%\s*\{[^}]*background-position:\s*-120%\s+120%;[^}]*opacity:\s*0;/
      );
      expect(sheenCss).toMatch(
        /100%\s*\{[^}]*background-position:\s*120%\s+-120%;[^}]*opacity:\s*0;/
      );
      expect(sheenCss).toMatch(/animation:\s*zestFocusSheenSweep\s+0\.6s/);
    });

    it("R3: the band is clipped by the button's rounded overflow and never changes its layout", () => {
      expect(css).toMatch(/\.button\s*\{[^}]*position:\s*relative;[^}]*overflow:\s*hidden;/);
      expect(css).toMatch(/\.button\s*\{[^}]*border-radius:\s*var\(--zest-radius-md\)/);
      expect(sheenCss).toMatch(/\.button\.focusSheen::after\s*\{[^}]*position:\s*absolute;[^}]*inset:\s*0;/);
      expect(sheenCss).not.toMatch(/^\s*(width|height|margin|padding|font-size)\s*:/m);
      expect(sheenCss).not.toMatch(/\d+px/);
    });

    it("R3: the band ends transparent and is not left stuck or tinted", () => {
      expect(sheenCss).toMatch(/\.button\.focusSheen::after\s*\{[^}]*opacity:\s*0;/);
      expect(sheenCss).toMatch(/@keyframes zestFocusSheenSweep[\s\S]*100%\s*\{[^}]*opacity:\s*0;/);
      expect(sheenCss).toMatch(/animation:\s*zestFocusSheenSweep\s+0\.6s[^;]*\s1\s+both/);
    });

    it("R3: very small and very large buttons share one continuous sweep with no stacked layers", () => {
      const { container } = render(
        <>
          <ZestButton zest={{ focusSheen: true, visualOptions: { size: "sm" } }}>Small</ZestButton>
          <ZestButton zest={{ focusSheen: true, visualOptions: { size: "lg" } }}>Large</ZestButton>
        </>
      );

      expect(container.querySelectorAll(".focusSheen")).toHaveLength(2);
      expect(sheenCss.match(/\.button\.focusSheen::after\s*\{/g)).toHaveLength(1);
    });
  });

  describe("R4 every style, variant and theme", () => {
    it("R4: every style, variant and forced theme gets the streak layer on a regular button", () => {
      const buttonStyles: ZestButtonStyle[] = ["solid", "outline", "text", "dashed"];
      const variants: ZestVariant[] = ["standard", "success", "danger"];
      const themes: ZestTheme[] = ["light", "dark"];

      const { container } = render(
        <div>
          {buttonStyles.flatMap((buttonStyle) =>
            variants.flatMap((variant) =>
              themes.map((theme) => (
                <ZestButton
                  key={`${buttonStyle}-${variant}-${theme}`}
                  data-testid={`${buttonStyle}-${variant}-${theme}`}
                  zest={{ focusSheen: true, buttonStyle, visualOptions: { variant }, theme }}
                >
                  Label
                </ZestButton>
              ))
            )
          )}
        </div>
      );

      buttonStyles.forEach((buttonStyle) =>
        variants.forEach((variant) =>
          themes.forEach((theme) => {
            const button = container.querySelector(`[data-testid="${buttonStyle}-${variant}-${theme}"]`);
            expect(button).toHaveClass("focusSheen", buttonStyle, variant, themeClass(theme));
          })
        )
      );
    });

    it("R4: every style, variant and forced theme gets the whole-control layer on a split button", () => {
      const buttonStyles: ZestButtonStyle[] = ["solid", "outline", "text", "dashed"];
      const variants: ZestVariant[] = ["standard", "success", "danger"];
      const themes: ZestTheme[] = ["light", "dark"];
      const markerStyle: Record<ZestButtonStyle, string> = {
        solid: "sheenSolid",
        outline: "sheenOutline",
        text: "sheenText",
        dashed: "sheenDashed",
      };
      const markerVariant: Record<ZestVariant, string> = {
        standard: "sheenStandard",
        success: "sheenSuccess",
        danger: "sheenDanger",
      };

      const { container } = render(
        <div>
          {buttonStyles.flatMap((buttonStyle) =>
            variants.flatMap((variant) =>
              themes.map((theme) => (
                <ZestButton
                  key={`${buttonStyle}-${variant}-${theme}`}
                  data-testid={`split-${buttonStyle}-${variant}-${theme}`}
                  zest={{ focusSheen: true, buttonStyle, visualOptions: { variant }, theme, dropdownOptions }}
                >
                  Label
                </ZestButton>
              ))
            )
          )}
        </div>
      );

      buttonStyles.forEach((buttonStyle) =>
        variants.forEach((variant) =>
          themes.forEach((theme) => {
            const main = container.querySelector(`[data-testid="split-${buttonStyle}-${variant}-${theme}"]`);
            const wrapper = main?.parentElement;
            expect(wrapper).toHaveClass(
              "focusSheenSplit",
              markerStyle[buttonStyle],
              markerVariant[variant],
              themeClass(theme)
            );
            expect(main).not.toHaveClass("focusSheen");
          })
        )
      );
    });

    it("R4: the band colour follows currentColor and the button's own theme tokens so it reads on every style", () => {
      expect(sheenCss).toMatch(
        /\.button\.focusSheen::after\s*\{[^}]*linear-gradient\([\s\S]*?currentColor/
      );
      expect(sheenCss).toMatch(/\.button\.focusSheen\.solid::after\s*\{[^}]*--zest-focus-sheen-peak:\s*0\.9/);
      expect(sheenCss).toMatch(/--zest-color-standard-border/);
      expect(sheenCss).toMatch(/--zest-color-success-border/);
      expect(sheenCss).toMatch(/--zest-color-danger-border/);
      expect(sheenCss).toMatch(/\.focusSheenSplit\.sheenSolid\s*\{[^}]*--zest-focus-sheen-color:\s*#ffffff/);
    });

    it("R4: every solid style, variant and theme band reaches 3:1 contrast against its own background at its brightest point", () => {
      expect(cssBlock(".button.focusSheen::after")).toMatch(/var\(--zest-focus-sheen-color/);
      expect(cssBlock(".focusSheenSplit::after")).toMatch(/var\(--zest-focus-sheen-color/);

      const variants: ZestVariant[] = ["standard", "success", "danger"];
      const themes: Array<"light" | "dark"> = ["light", "dark"];
      const backgroundVar: Record<ZestVariant, string> = {
        standard: "--zest-color-standard-bg",
        success: "--zest-color-success-bg",
        danger: "--zest-color-danger-bg",
      };

      const themeBlocks: Record<"light" | "dark", string> = {
        light: cssBlock(".force-light"),
        dark: cssBlock(".force-dark"),
      };

      const regularDefault = cssBlock(".button.focusSheen.solid::after");
      const regularDefaultColour = cssProp(regularDefault, "--zest-focus-sheen-color");
      const regularPeak = Number(cssProp(regularDefault, "--zest-focus-sheen-peak"));
      const regularDarkSuccessColour = cssProp(
        cssBlock(".button.focusSheen.solid.force-dark.success::after"),
        "--zest-focus-sheen-color"
      );

      const splitDefaultColour = cssProp(
        cssBlock(".focusSheenSplit.sheenSolid"),
        "--zest-focus-sheen-color"
      );
      const splitPeak = Number(
        cssProp(cssBlock(".focusSheenSplit.sheenSolid::after"), "--zest-focus-sheen-peak")
      );
      const splitDarkSuccessColour = cssProp(
        cssBlock(".focusSheenSplit.sheenSolid.force-dark.sheenSuccess"),
        "--zest-focus-sheen-color"
      );

      themes.forEach((theme) => {
        variants.forEach((variant) => {
          const background = cssProp(themeBlocks[theme], backgroundVar[variant]);
          const regularColour =
            theme === "dark" && variant === "success" ? regularDarkSuccessColour : regularDefaultColour;
          const splitColour =
            theme === "dark" && variant === "success" ? splitDarkSuccessColour : splitDefaultColour;

          expect(contrastAtPeak(regularColour, background, regularPeak)).toBeGreaterThanOrEqual(3);
          expect(contrastAtPeak(splitColour, background, splitPeak)).toBeGreaterThanOrEqual(3);
        });
      });
    });

    it("R4: the label sits above the translucent band so it stays readable", () => {
      expect(sheenCss).toMatch(/\.button\.focusSheen\s*>\s*\.inner\s*\{[^}]*z-index:\s*1/);
      expect(sheenCss).toMatch(/\.focusSheenSplit\s+\.button\s*>\s*\.inner\s*\{[^}]*z-index:\s*1/);
      const peaks = [...sheenCss.matchAll(/--zest-focus-sheen-peak:\s*([0-9.]+)/g)].map((m) => Number(m[1]));
      expect(peaks.length).toBeGreaterThan(0);
      peaks.forEach((peak) => expect(peak).toBeLessThan(1));
    });
  });

  describe("R5 split control", () => {
    it("R5: a split control plays one whole-control sweep from either segment", () => {
      render(<ZestButton zest={{ focusSheen: true, dropdownOptions }}>Export</ZestButton>);

      const main = screen.getByRole("button", { name: "Export" });
      const trigger = screen.getByRole("button", { name: "More options" });

      expect(main.parentElement).toHaveClass("focusSheenSplit");
      expect(main).not.toHaveClass("focusSheen");
      expect(trigger).not.toHaveClass("focusSheen");
      expect(sheenCss).toMatch(/\.focusSheenSplit:has\(:focus-visible\)::after\s*\{[^}]*animation:\s*zestFocusSheenSweep/);
    });

    it("R5: the split band is clipped to the rounded outer corners without clipping either focus ring", () => {
      expect(sheenCss).toMatch(
        /\.splitButtonContainer\.focusSheenSplit\s*\{[^}]*position:\s*relative;/
      );
      expect(sheenCss).not.toMatch(/\.splitButtonContainer\.focusSheenSplit\s*\{[^}]*overflow\s*:/);
      expect(sheenCss).toMatch(
        /\.focusSheenSplit::after\s*\{[^}]*inset:\s*0;[^}]*border-radius:\s*var\(--zest-radius-md\)/
      );
      expect(css).toMatch(
        /\.button:focus-visible\s*\{[^}]*box-shadow:\s*var\(--zest-shadow-resting\),\s*var\(--zest-focus-ring\)/
      );
      expect(css).not.toMatch(/\.splitButtonContainer[^}]*overflow\s*:\s*hidden/);
    });

    it("R5: the open menu is rendered outside the clipping wrapper and stays visible", async () => {
      const { container } = render(
        <ZestButton zest={{ focusSheen: true, dropdownOptions }}>A very long main action label</ZestButton>
      );
      const wrapper = container.firstElementChild as HTMLElement;

      openTrigger(screen.getByRole("button", { name: "More options" }));
      const item = await screen.findByRole("menuitem", { name: "Export as PDF" });

      expect(wrapper).toHaveClass("focusSheenSplit");
      expect(wrapper.contains(item)).toBe(false);
      expect(item).toBeVisible();
      expect(sheenCss).toMatch(/\.focusSheenSplit::after\s*\{[^}]*pointer-events:\s*none/);
    });

    it("R5: moving focus from the main segment to the chevron keeps one overlay for the whole visit", () => {
      const { container } = render(<ZestButton zest={{ focusSheen: true, dropdownOptions }}>Export</ZestButton>);
      const main = screen.getByRole("button", { name: "Export" });
      const trigger = screen.getByRole("button", { name: "More options" });

      fireEvent.focus(main);
      fireEvent.focus(trigger);

      expect(container.querySelectorAll(".focusSheenSplit")).toHaveLength(1);
      expect(main).not.toHaveClass("focusSheen");
      expect(trigger).not.toHaveClass("focusSheen");
    });
  });

  describe("A1 reduced motion", () => {
    it("A1: reduced motion disables the focus streak for regular and split buttons", () => {
      expect(firstReducedMotionBlock).toMatch(
        /\.button\.focusSheen::after,\s*\.focusSheenSplit::after\s*\{[^}]*animation:\s*none;[^}]*content:\s*none/
      );
    });

    it("A1: without the preference the streak keeps its animation on both button kinds", () => {
      expect(sheenCss).toMatch(/\.button\.focusSheen:focus-visible::after\s*\{[^}]*animation:\s*zestFocusSheenSweep/);
      expect(sheenCss).toMatch(
        /\.focusSheenSplit:has\(:focus-visible\)::after\s*\{[^}]*animation:\s*zestFocusSheenSweep/
      );
    });
  });

  describe("A2 no colliding chevron mount streak", () => {
    it("A2: an opted-in split control suppresses the chevron mount streak", () => {
      render(<ZestButton zest={{ focusSheen: true, dropdownOptions }}>Export</ZestButton>);
      expect(screen.getByRole("button", { name: "Export" }).parentElement).toHaveClass("focusSheenSplit");
      expect(sheenCss).toMatch(
        /\.focusSheenSplit\s+\.dropdownTrigger::before\s*\{[^}]*animation:\s*none;[^}]*content:\s*none/
      );
    });

    it("A2: a split control that is not opted in keeps its chevron mount streak", () => {
      render(<ZestButton zest={{ dropdownOptions }}>Export</ZestButton>);
      expect(screen.getByRole("button", { name: "Export" }).parentElement).not.toHaveClass("focusSheenSplit");
      expect(css).toMatch(/\.dropdownTrigger::before\s*\{[^}]*animation:\s*dropdownTriggerDiscoverySheen/);
      expect(css).toMatch(/@keyframes dropdownTriggerDiscoverySheen/);
    });
  });

  describe("R6 no chevron mount streak while the sheen is in use", () => {
    it("R6: a split button with focusSheen suppresses the chevron mount streak and shows only the whole-control layer", () => {
      render(<ZestButton zest={{ focusSheen: true, dropdownOptions }}>Export</ZestButton>);

      const main = screen.getByRole("button", { name: "Export" });
      const wrapper = main.parentElement as HTMLElement;

      expect(wrapper).toHaveClass("focusSheenSplit");
      expect(main).not.toHaveClass("focusSheen");
      expect(sheenCss).toMatch(
        /\.focusSheenSplit\s+\.dropdownTrigger::before\s*\{[^}]*animation:\s*none;[^}]*content:\s*none/
      );
    });

    it("R6: a split button given a sheenTrigger suppresses the chevron mount streak", () => {
      const { rerender } = render(
        <ZestButton zest={{ sheenTrigger: 0, dropdownOptions }}>Export</ZestButton>
      );

      expect(screen.getByRole("button", { name: "Export" }).parentElement).toHaveClass(
        "focusSheenSplit"
      );

      rerender(<ZestButton zest={{ sheenTrigger: 1, dropdownOptions }}>Export</ZestButton>);

      expect(screen.getByRole("button", { name: "Export" }).parentElement).toHaveClass(
        "focusSheenSplit"
      );
      expect(screen.getByRole("button", { name: "More options" }).className).not.toMatch(/sheen/i);
      expect(sheenCss).toMatch(/\.focusSheenSplit\s+\.dropdownTrigger::before\s*\{[^}]*content:\s*none/);
    });

    it("R6: regular buttons have no mount streak and gain no extra chevron layer", () => {
      const { container } = render(<ZestButton zest={{ focusSheen: true }}>Save</ZestButton>);

      const button = screen.getByRole("button", { name: "Save" });
      expect(button).toHaveClass("focusSheen");
      expect(button).not.toHaveClass("dropdownTrigger");
      expect(container.querySelectorAll(".dropdownTrigger")).toHaveLength(0);
    });

    it("R6: a split button mounted and then immediately focused shows only the whole-control layer", () => {
      const { container } = render(
        <ZestButton zest={{ focusSheen: true, dropdownOptions }}>Export</ZestButton>
      );

      fireEvent.focus(screen.getByRole("button", { name: "Export" }));

      expect(container.querySelectorAll(".focusSheen, .focusSheenSplit")).toHaveLength(1);
      expect(screen.getByRole("button", { name: "Export" })).not.toHaveClass("focusSheen");
    });

    it("R6: a trigger change inside the old mount-streak window adds no second chevron streak", () => {
      const { rerender } = render(
        <ZestButton zest={{ sheenTrigger: 0, dropdownOptions }}>Export</ZestButton>
      );
      const trigger = screen.getByRole("button", { name: "More options" });

      rerender(<ZestButton zest={{ sheenTrigger: 1, dropdownOptions }}>Export</ZestButton>);

      expect(trigger).not.toHaveClass("sheenProgrammatic");
      expect(trigger.className).not.toMatch(/sheen/i);
    });

    it("R6: suppressing the mount streak leaves no empty layout layer", () => {
      expect(sheenCss).toMatch(/\.focusSheenSplit\s+\.dropdownTrigger::before\s*\{[^}]*content:\s*none/);
      expect(sheenCss).not.toMatch(/^\s*(width|height|margin|padding|font-size)\s*:/m);
    });
  });

  describe("R7 programmatic trigger", () => {
    it("R7: the value on mount plays nothing and the first change plays one sweep on an unfocused button", () => {
      const onClick = jest.fn();
      const { rerender } = render(
        <ZestButton onClick={onClick} zest={{ sheenTrigger: 0 }}>Sync</ZestButton>
      );
      const button = screen.getByRole("button", { name: "Sync" });

      expect(button).not.toHaveClass("sheenProgrammatic");

      rerender(<ZestButton onClick={onClick} zest={{ sheenTrigger: 1 }}>Sync</ZestButton>);

      expect(button).toHaveClass("focusSheen", "sheenProgrammatic");
      expect(button).toHaveClass("sheenTriggerOdd");
      expect(onClick).not.toHaveBeenCalled();
    });

    it("R7: changing while a sweep is playing restarts it (parity flips)", () => {
      const { rerender } = render(<ZestButton zest={{ sheenTrigger: 0 }}>Sync</ZestButton>);
      const button = screen.getByRole("button", { name: "Sync" });

      rerender(<ZestButton zest={{ sheenTrigger: 1 }}>Sync</ZestButton>);
      const first = button.className.match(/sheenTrigger(Odd|Even)/)?.[0];

      rerender(<ZestButton zest={{ sheenTrigger: 2 }}>Sync</ZestButton>);
      const second = button.className.match(/sheenTrigger(Odd|Even)/)?.[0];

      expect(first).toBeDefined();
      expect(second).toBeDefined();
      expect(second).not.toBe(first);
    });

    it("R7: setting the same value again plays nothing, but a number-to-string change counts", () => {
      const { rerender } = render(<ZestButton zest={{ sheenTrigger: 0 }}>Sync</ZestButton>);
      const button = screen.getByRole("button", { name: "Sync" });

      rerender(<ZestButton zest={{ sheenTrigger: 1 }}>Sync</ZestButton>);
      const afterFirst = button.className.match(/sheenTrigger(Odd|Even)/)?.[0];

      rerender(<ZestButton zest={{ sheenTrigger: 1 }}>Sync</ZestButton>);
      expect(button.className.match(/sheenTrigger(Odd|Even)/)?.[0]).toBe(afterFirst);

      rerender(<ZestButton zest={{ sheenTrigger: "1" }}>Sync</ZestButton>);
      expect(button.className.match(/sheenTrigger(Odd|Even)/)?.[0]).not.toBe(afterFirst);
    });

    it("R7: works with focusSheen omitted, false and true", () => {
      [undefined, false, true].forEach((focusSheen) => {
        const { rerender, unmount } = render(
          <ZestButton zest={{ sheenTrigger: 0, focusSheen }}>Sync</ZestButton>
        );
        const button = screen.getByRole("button", { name: "Sync" });

        rerender(<ZestButton zest={{ sheenTrigger: 1, focusSheen }}>Sync</ZestButton>);

        expect(button).toHaveClass("sheenProgrammatic");
        unmount();
      });
    });

    it("R7: several quick changes each restart and no queue builds up", () => {
      const { rerender } = render(<ZestButton zest={{ sheenTrigger: 0 }}>Sync</ZestButton>);
      const button = screen.getByRole("button", { name: "Sync" });
      const seen: string[] = [];

      [1, 2, 3, 4].forEach((value) => {
        rerender(<ZestButton zest={{ sheenTrigger: value }}>Sync</ZestButton>);
        const parity = button.className.match(/sheenTrigger(Odd|Even)/)?.[0];
        if (parity) seen.push(parity);
      });

      expect(seen).toHaveLength(4);
      expect(seen[0]).not.toBe(seen[1]);
      expect(seen[1]).not.toBe(seen[2]);
      expect(seen[2]).not.toBe(seen[3]);
    });

    it("R7: a trigger while focused plays the programmatic layer as well as the focus layer", () => {
      const { rerender } = render(
        <ZestButton zest={{ focusSheen: true, sheenTrigger: 0 }}>Sync</ZestButton>
      );
      const button = screen.getByRole("button", { name: "Sync" });

      fireEvent.focus(button);
      rerender(<ZestButton zest={{ focusSheen: true, sheenTrigger: 1 }}>Sync</ZestButton>);

      expect(button).toHaveClass("focusSheen", "sheenProgrammatic");
      expect(sheenCss).toMatch(/\.button\.focusSheen:focus-visible::after\s*\{[^}]*animation:/);
    });

    it("R7: repeated triggers after the animation has ended still replay", () => {
      const { rerender } = render(<ZestButton zest={{ sheenTrigger: 0 }}>Sync</ZestButton>);
      const button = screen.getByRole("button", { name: "Sync" });

      rerender(<ZestButton zest={{ sheenTrigger: 1 }}>Sync</ZestButton>);
      const first = button.className.match(/sheenTrigger(Odd|Even)/)?.[0];
      rerender(<ZestButton zest={{ sheenTrigger: 2 }}>Sync</ZestButton>);
      const second = button.className.match(/sheenTrigger(Odd|Even)/)?.[0];
      rerender(<ZestButton zest={{ sheenTrigger: 3 }}>Sync</ZestButton>);
      const third = button.className.match(/sheenTrigger(Odd|Even)/)?.[0];

      expect(second).not.toBe(first);
      expect(third).not.toBe(second);
    });

    it("R7: the first value never plays on mount", () => {
      const { container } = render(<ZestButton zest={{ sheenTrigger: 0 }}>Sync</ZestButton>);

      expect(container.querySelector(".sheenProgrammatic")).toBeNull();
      expect(hookSource).not.toMatch(/typeof window|useLayoutEffect/);
    });
  });

  describe("R8 programmatic on split, disabled and busy", () => {
    it("R8: a split control sweeps once across the whole control per trigger change", () => {
      const { rerender } = render(
        <ZestButton zest={{ sheenTrigger: 0, dropdownOptions }}>Export</ZestButton>
      );
      const main = screen.getByRole("button", { name: "Export" });
      const wrapper = main.parentElement as HTMLElement;

      expect(wrapper).toHaveClass("focusSheenSplit");

      rerender(<ZestButton zest={{ sheenTrigger: 1, dropdownOptions }}>Export</ZestButton>);

      expect(wrapper).toHaveClass("focusSheenSplit", "sheenProgrammatic");
      // The whole-control sweep needs the parity class on the wrapper, because
      // the split animation is keyed off the wrapper, not either segment.
      const first = wrapper.className.match(/sheenTrigger(Odd|Even)/)?.[0];
      expect(first).toBeDefined();
      expect(main).not.toHaveClass("sheenProgrammatic");
      expect(screen.getByRole("button", { name: "More options" })).not.toHaveClass("sheenProgrammatic");

      // A later change swaps parity on the wrapper so the sweep genuinely
      // replays on the split overlay instead of staying finished.
      rerender(<ZestButton zest={{ sheenTrigger: 2, dropdownOptions }}>Export</ZestButton>);
      const second = wrapper.className.match(/sheenTrigger(Odd|Even)/)?.[0];
      expect(second).not.toBe(first);

      // The split overlay runs the alternating keyframes, which is what makes
      // the band visible and restartable (a bare sheenProgrammatic is opacity:0).
      expect(cssBlock(".focusSheenSplit.sheenProgrammatic.sheenTriggerOdd::before")).toMatch(
        /animation:\s*zestFocusSheenSweep\s/
      );
      expect(cssBlock(".focusSheenSplit.sheenProgrammatic.sheenTriggerEven::before")).toMatch(
        /animation:\s*zestFocusSheenSweepAlt\s/
      );
    });

    it("R8: a disabled button plays one sweep without becoming usable or firing its click handler", () => {
      const onClick = jest.fn();
      const { rerender } = render(
        <ZestButton disabled onClick={onClick} zest={{ sheenTrigger: 0 }}>Sync</ZestButton>
      );
      const button = screen.getByRole("button", { name: "Sync" }) as HTMLButtonElement;

      expect(button.disabled).toBe(true);

      rerender(<ZestButton disabled onClick={onClick} zest={{ sheenTrigger: 1 }}>Sync</ZestButton>);

      expect(button).toHaveClass("sheenProgrammatic");
      expect(button.disabled).toBe(true);
      expect(button).not.toHaveAttribute("tabindex");

      fireEvent.click(button);
      expect(onClick).not.toHaveBeenCalled();
    });

    it("R8: a busy button plays a sweep and keeps its aria-busy and spinner state", () => {
      const { rerender } = render(
        <ZestButton aria-busy={true} zest={{ sheenTrigger: 0 }}>Sync</ZestButton>
      );
      const button = screen.getByRole("button", { name: "Sync" });

      rerender(<ZestButton aria-busy={true} zest={{ sheenTrigger: 1 }}>Sync</ZestButton>);

      expect(button).toHaveClass("sheenProgrammatic");
      expect(button).toHaveAttribute("aria-busy", "true");
      expect(button).toBeDisabled();
    });

    it("R8: a disabled button never shows a focus streak", () => {
      const { container } = render(<ZestButton disabled zest={{ focusSheen: true }}>Sync</ZestButton>);
      const button = screen.getByRole("button", { name: "Sync" });

      fireEvent.focus(button);

      expect(button).toBeDisabled();
      expect(container.querySelector(".sheenProgrammatic")).toBeNull();
      expect(sheenCss).not.toMatch(/\.button\.focusSheen:disabled/);
    });

    it("R8: a button that is both disabled and busy plays exactly one sweep per change", () => {
      const { rerender } = render(
        <ZestButton disabled aria-busy={true} zest={{ sheenTrigger: 0 }}>Sync</ZestButton>
      );
      const button = screen.getByRole("button", { name: "Sync" });

      rerender(<ZestButton disabled aria-busy={true} zest={{ sheenTrigger: 1 }}>Sync</ZestButton>);
      const first = button.className.match(/sheenTrigger(Odd|Even)/)?.[0];

      rerender(<ZestButton disabled aria-busy={true} zest={{ sheenTrigger: 2 }}>Sync</ZestButton>);
      const second = button.className.match(/sheenTrigger(Odd|Even)/)?.[0];

      expect(first).toBeDefined();
      expect(second).not.toBe(first);
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute("aria-busy", "true");
    });

    it("R8: the sweep is not restarted when the busy state ends part-way", () => {
      const { rerender } = render(
        <ZestButton aria-busy={true} zest={{ sheenTrigger: 0 }}>Sync</ZestButton>
      );
      const button = screen.getByRole("button", { name: "Sync" });

      rerender(<ZestButton aria-busy={true} zest={{ sheenTrigger: 1 }}>Sync</ZestButton>);
      const parity = button.className.match(/sheenTrigger(Odd|Even)/)?.[0];

      rerender(<ZestButton aria-busy={false} zest={{ sheenTrigger: 1 }}>Sync</ZestButton>);

      expect(button.className.match(/sheenTrigger(Odd|Even)/)?.[0]).toBe(parity);
      expect(button).not.toBeDisabled();
    });

    it("R8: the band is visible on the disabled colours of every style", () => {
      expect(cssBlock(".button.focusSheen.sheenProgrammatic.solid.disabled")).toMatch(
        /--zest-focus-sheen-color:\s*#1f2937/
      );
      expect(
        cssBlock(".button.focusSheen.sheenProgrammatic.solid.force-dark.disabled")
      ).toMatch(/--zest-focus-sheen-color:\s*#ffffff/);
      expect(cssBlock(".button.focusSheen.sheenProgrammatic::before")).toMatch(
        /var\(--zest-focus-sheen-color,\s*currentColor\)/
      );

      const disabledBg: Record<"light" | "dark", string> = {
        light: cssProp(cssBlock(".force-light"), "--zest-color-disabled-bg"),
        dark: cssProp(cssBlock(".force-dark"), "--zest-color-disabled-bg"),
      };
      const lightBand = cssProp(
        cssBlock(".button.focusSheen.sheenProgrammatic.solid.disabled"),
        "--zest-focus-sheen-color"
      );
      const darkBand = cssProp(
        cssBlock(".button.focusSheen.sheenProgrammatic.solid.force-dark.disabled"),
        "--zest-focus-sheen-color"
      );

      expect(contrastAtPeak(lightBand, disabledBg.light, 0.9)).toBeGreaterThanOrEqual(3);
      expect(contrastAtPeak(darkBand, disabledBg.dark, 0.9)).toBeGreaterThanOrEqual(3);
    });

    it("R8: the band is visible on the disabled colours of outline, text and dashed buttons", () => {
      const nonSolidStyles: Array<{ style: ZestButtonStyle; selector: string }> = [
        { style: "outline", selector: ".outline:disabled, .outline.disabled" },
        { style: "text", selector: ".text:disabled, .text.disabled" },
        { style: "dashed", selector: ".dashed:disabled, .dashed.disabled" },
      ];

      // The programmatic band takes the button's own colour, so it follows each
      // disabled style instead of disappearing against a light or dark page.
      expect(cssBlock(".button.focusSheen.sheenProgrammatic::before")).toMatch(
        /var\(--zest-focus-sheen-color,\s*currentColor\)/
      );
      expect(cssProp(cssBlock(".force-light"), "--zest-color-disabled-text")).toMatch(/^#[0-9a-f]{6}$/i);
      expect(cssProp(cssBlock(".force-dark"), "--zest-color-disabled-text")).toMatch(/^#[0-9a-f]{6}$/i);

      nonSolidStyles.forEach(({ style, selector }) => {
        const disabled = cssBlock(selector);

        // The disabled style paints an opaque own colour for the band to inherit.
        expect(cssProp(disabled, "background-color")).toBe("transparent");
        expect(disabled).toMatch(/;\s*color:\s*var\(--zest-color-disabled-text\)\s*;/);

        // No rule zeroes or hides the programmatic band on this disabled style.
        expect(css).not.toMatch(
          new RegExp(
            `\\.${style}[^{]*\\.sheenProgrammatic[^{]*\\{[^}]*--zest-focus-sheen-color:\\s*transparent`
          )
        );
        expect(css).not.toMatch(
          new RegExp(`\\.${style}[^{]*\\.sheenProgrammatic[^{]*\\{[^}]*content:\\s*none`)
        );

        const { container, rerender } = render(
          <ZestButton disabled data-testid={`disabled-${style}`} zest={{ buttonStyle: style, sheenTrigger: 0 }}>
            Sync
          </ZestButton>
        );
        const button = container.querySelector(`[data-testid="disabled-${style}"]`) as HTMLButtonElement;

        rerender(
          <ZestButton disabled data-testid={`disabled-${style}`} zest={{ buttonStyle: style, sheenTrigger: 1 }}>
            Sync
          </ZestButton>
        );

        // The band layer is actually active on this disabled style and the
        // button stays unusable.
        expect(button).toHaveClass("sheenProgrammatic", style);
        expect(button.disabled).toBe(true);
      });
    });
  });

  describe("R9 reduced motion covers both triggers", () => {
    it("R9: reduced motion removes both bands entirely, with no override", () => {
      expect(reducedMotionBlock).toMatch(
        /\.button\.focusSheen::after,\s*\.focusSheenSplit::after\s*\{[^}]*animation:\s*none;[^}]*content:\s*none/
      );
      expect(reducedMotionBlock).toMatch(
        /\.button\.focusSheen\.sheenProgrammatic::before,\s*\.focusSheenSplit\.sheenProgrammatic::before\s*\{[^}]*animation:\s*none;[^}]*content:\s*none/
      );
      expect(css).not.toMatch(/sheenForce|forceSheen|motionOverride/i);
    });

    it("R9: the rule is a live media query applied to regular, split and both triggers", () => {
      expect(css).toMatch(/@media \(prefers-reduced-motion: reduce\)/);
      expect(reducedMotionBlock).toContain(".button.focusSheen::after");
      expect(reducedMotionBlock).toContain(".focusSheenSplit::after");
      expect(reducedMotionBlock).toContain(".button.focusSheen.sheenProgrammatic::before");
      expect(reducedMotionBlock).toContain(".focusSheenSplit.sheenProgrammatic::before");
    });

    it("R9: reduced motion leaves the focus ring and other feedback alone", () => {
      expect(reducedMotionBlock).not.toMatch(/box-shadow\s*:\s*none/);
      expect(reducedMotionBlock).not.toMatch(/outline\s*:\s*none/);
      expect(css).toMatch(/\.button:focus-visible\s*\{[^}]*var\(--zest-focus-ring\)/);
    });
  });

  describe("A2 replay restarts by alternating keyframe names", () => {
    it("A2: two identical keyframes exist and odd/even reference a different one", () => {
      const sweep = keyframes("zestFocusSheenSweep").replace(/\s+/g, "");
      const alt = keyframes("zestFocusSheenSweepAlt").replace(/\s+/g, "");

      expect(alt).toBe(sweep);
      expect(cssBlock(".button.focusSheen.sheenProgrammatic.sheenTriggerOdd::before")).toMatch(
        /animation:\s*zestFocusSheenSweep\s/
      );
      expect(cssBlock(".button.focusSheen.sheenProgrammatic.sheenTriggerEven::before")).toMatch(
        /animation:\s*zestFocusSheenSweepAlt\s/
      );
    });

    it("A2: each trigger change swaps the parity class in a single render", () => {
      const { rerender } = render(<ZestButton zest={{ sheenTrigger: 0 }}>Sync</ZestButton>);
      const button = screen.getByRole("button", { name: "Sync" });

      rerender(<ZestButton zest={{ sheenTrigger: 1 }}>Sync</ZestButton>);
      const first = button.className.match(/sheenTrigger(Odd|Even)/)?.[0];
      rerender(<ZestButton zest={{ sheenTrigger: 2 }}>Sync</ZestButton>);
      const second = button.className.match(/sheenTrigger(Odd|Even)/)?.[0];

      expect(first).toBeDefined();
      expect(second).not.toBe(first);
    });

    it("A2: replay uses no timeout, animation frame, extra element or DOM re-key", () => {
      expect(hookSource).not.toMatch(/setTimeout|setInterval|requestAnimationFrame/);

      const { container, rerender } = render(<ZestButton zest={{ sheenTrigger: 0 }}>Sync</ZestButton>);
      const before = container.querySelectorAll("*").length;

      rerender(<ZestButton zest={{ sheenTrigger: 1 }}>Sync</ZestButton>);

      expect(container.querySelectorAll("*").length).toBe(before);
      expect(container.querySelectorAll(".sheenProgrammatic")).toHaveLength(1);
    });
  });

  describe("A4 documentation", () => {
    it("A4: the API, features and examples pages document focusSheen for regular and split buttons", () => {
      const api = read("documentation/api.md");
      const features = read("documentation/features.md");
      const examples = read("documentation/examples.md");

      expect(api).toContain("`focusSheen`");
      expect(api).toMatch(/focusSheen[\s\S]*false/);
      expect(features).toContain("focusSheen");
      expect(examples).toContain("focusSheen");
      expect(examples).toContain("dropdownOptions");
    });

    it("A4: the configuration page sets focusSheen app-wide through defaultProps and the README links the guide", () => {
      const configuration = read("documentation/configuration.md");
      const readme = read("README.md");

      expect(configuration).toContain("focusSheen");
      expect(configuration).toMatch(/defaultProps[\s\S]{0,400}focusSheen/);
      expect(configuration).toMatch(/focusSheen[\s\S]{0,400}prefers-reduced-motion/);
      expect(configuration).toContain("docs/features/zest-button-focus-sheen/guide.md");

      expect(readme).toContain("focusSheen");
      expect(readme).toContain("dropdownOptions");
      expect(readme).toContain("docs/features/zest-button-focus-sheen/guide.md");
      expect(readme).toMatch(/prefers-reduced-motion/);
    });

    it("A4: every guide link points at an always-available URL, not the unpublished docs/ path", () => {
      const pages = [
        "README.md",
        "documentation/api.md",
        "documentation/configuration.md",
        "documentation/examples.md",
        "documentation/features.md",
      ];
      const guideUrl =
        "https://github.com/nyingimaina/jattac.libs.web.zest-button/blob/master/docs/features/zest-button-focus-sheen/guide.md";

      pages.forEach((page) => {
        const text = read(page);
        expect(text).toContain(guideUrl);
        expect(text).not.toMatch(/\]\((\.\.?\/)?docs\/features\/zest-button-focus-sheen\/guide\.md\)/);
      });
    });
  });

  describe("A3 programmatic streak documentation", () => {
    it("A3: the API page lists sheenTrigger, its string|number type, absent default and first-value-on-mount rule", () => {
      const api = read("documentation/api.md");

      expect(api).toMatch(/`sheenTrigger`/);
      expect(api).toMatch(/sheenTrigger`[\s\S]{0,200}string \| number/);
      expect(api).toMatch(/default absent/i);
      expect(api).toMatch(/first value on mount plays nothing/i);
    });

    it("A3: features, examples, configuration, README and the guide show a sheenTrigger example and say it works with or without focusSheen", () => {
      const pages = [
        "documentation/features.md",
        "documentation/examples.md",
        "documentation/configuration.md",
        "README.md",
        "docs/features/zest-button-focus-sheen/guide.md",
      ];

      pages.forEach((page) => {
        const text = read(page);
        expect(text).toContain("sheenTrigger");
        expect(text).toMatch(/zest=\{\{\s*sheenTrigger:/);
        expect(text).toMatch(/with or without `focusSheen`/);
      });
    });

    it("A3: the pages say reduced motion disables both triggers and that no prop overrides it", () => {
      const pages = [
        "documentation/features.md",
        "documentation/examples.md",
        "documentation/configuration.md",
        "README.md",
        "docs/features/zest-button-focus-sheen/guide.md",
      ];

      pages.forEach((page) => {
        const text = read(page);
        expect(text).toMatch(/prefers-reduced-motion[\s\S]{0,250}(focus|either)/i);
        expect(text).toMatch(/prefers-reduced-motion[\s\S]{0,250}programmatic/i);
        expect(text).toMatch(/no prop overrides/i);
      });
    });
  });

});
