import React from "react";
import fs from "fs";
import path from "path";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ZestButton from "../UI/ZestButton";

const noBusy = { handleInternally: false };
const css = fs.readFileSync(path.join(__dirname, "../Styles/ZestButton.module.css"), "utf8");
const toggleCss = css.slice(css.indexOf("/* Toggle mode"));

const checkOf = (container: HTMLElement) => container.querySelector(".toggleCheck");

describe("ZestButton toggle mode", () => {
  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  describe("R1 opt-in", () => {
    it("R1: an empty toggleOptions object enables toggle mode, off by default", () => {
      render(<ZestButton zest={{ toggleOptions: {} }}>Bold</ZestButton>);
      expect(screen.getByRole("button", { name: "Bold", pressed: false })).toHaveAttribute("aria-pressed", "false");
    });

    it("R1: removing toggleOptions returns a plain button with no aria-pressed", () => {
      const { rerender, container } = render(<ZestButton zest={{ toggleOptions: { defaultPressed: true } }}>Bold</ZestButton>);
      expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");

      rerender(<ZestButton>Bold</ZestButton>);
      const button = screen.getByRole("button");
      expect(button).not.toHaveAttribute("aria-pressed");
      expect(button.className).not.toMatch(/toggle/i);
      expect(checkOf(container)).toBeNull();
    });

    it("R1: a button without toggleOptions keeps no aria-pressed after a click", () => {
      render(<ZestButton zest={{ busyOptions: noBusy }}>Plain</ZestButton>);
      fireEvent.click(screen.getByRole("button"));
      expect(screen.getByRole("button")).not.toHaveAttribute("aria-pressed");
    });
  });

  describe("R2 on/off value", () => {
    it("R2: self-managed toggle starts off, flips per click and reports each value", () => {
      const onPressedChange = jest.fn();
      render(
        <ZestButton zest={{ busyOptions: noBusy, toggleOptions: { onPressedChange } }}>Bold</ZestButton>
      );
      const button = screen.getByRole("button");

      fireEvent.click(button);
      expect(button).toHaveAttribute("aria-pressed", "true");
      expect(onPressedChange).toHaveBeenLastCalledWith(true);

      fireEvent.click(button);
      expect(button).toHaveAttribute("aria-pressed", "false");
      expect(onPressedChange).toHaveBeenLastCalledWith(false);
      expect(onPressedChange).toHaveBeenCalledTimes(2);
    });

    it("R2: defaultPressed starts the toggle on", () => {
      render(<ZestButton zest={{ toggleOptions: { defaultPressed: true } }}>Bold</ZestButton>);
      expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
    });

    it("R2: a controlled toggle only changes when the app passes a new pressed value", () => {
      const onPressedChange = jest.fn();
      const { rerender } = render(
        <ZestButton zest={{ busyOptions: noBusy, toggleOptions: { pressed: true, onPressedChange } }}>Bold</ZestButton>
      );
      const button = screen.getByRole("button");

      fireEvent.click(button);
      expect(onPressedChange).toHaveBeenCalledWith(false);
      expect(button).toHaveAttribute("aria-pressed", "true");

      rerender(
        <ZestButton zest={{ busyOptions: noBusy, toggleOptions: { pressed: false, onPressedChange } }}>Bold</ZestButton>
      );
      expect(button).toHaveAttribute("aria-pressed", "false");
    });

    it("R2: an app that ignores onPressedChange keeps seeing its fixed value", () => {
      render(
        <ZestButton zest={{ busyOptions: noBusy, toggleOptions: { pressed: false, onPressedChange: () => {} } }}>
          Bold
        </ZestButton>
      );
      const button = screen.getByRole("button");
      fireEvent.click(button);
      fireEvent.click(button);
      expect(button).toHaveAttribute("aria-pressed", "false");
    });

    it("R2: pressed wins when both pressed and defaultPressed are given", () => {
      render(<ZestButton zest={{ toggleOptions: { pressed: false, defaultPressed: true } }}>Bold</ZestButton>);
      expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "false");
    });

    it("R2: two rapid clicks flip twice, once per click", () => {
      const onPressedChange = jest.fn();
      render(<ZestButton zest={{ busyOptions: noBusy, toggleOptions: { onPressedChange } }}>Bold</ZestButton>);
      const button = screen.getByRole("button");
      act(() => {
        button.click();
        button.click();
      });
      expect(onPressedChange.mock.calls.map((c) => c[0])).toEqual([true, false]);
      expect(button).toHaveAttribute("aria-pressed", "false");
    });

    it("R2: the existing onClick still runs on each click as well as onPressedChange", () => {
      const onClick = jest.fn();
      const onPressedChange = jest.fn();
      render(
        <ZestButton zest={{ busyOptions: noBusy, toggleOptions: { onPressedChange } }} onClick={onClick}>
          Bold
        </ZestButton>
      );
      fireEvent.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onPressedChange).toHaveBeenCalledTimes(1);
    });
  });

  describe("R3 pressed look and check mark", () => {
    it("R3: the check mark and pressed look show only when on, and the check is hidden from screen readers", () => {
      const { container, rerender } = render(
        <ZestButton zest={{ toggleOptions: { pressed: false } }}>Bold</ZestButton>
      );
      const button = screen.getByRole("button");
      expect(checkOf(container)).toBeNull();
      expect(button).not.toHaveClass("toggleOn");

      rerender(<ZestButton zest={{ toggleOptions: { pressed: true } }}>Bold</ZestButton>);
      const check = checkOf(container);
      expect(check).not.toBeNull();
      expect(check).toHaveAttribute("aria-hidden", "true");
      expect(button).toHaveClass("toggleOn");
      expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("R3: the on-state check is a different element from the async success checkmark", () => {
      const { container } = render(<ZestButton zest={{ toggleOptions: { defaultPressed: true } }}>Bold</ZestButton>);
      expect(container.querySelector(".animatedCheck")).toBeNull();
      expect(checkOf(container)).not.toBeNull();
    });

    it.each(["solid", "outline", "text", "dashed"] as const)(
      "R3: the on look is applied with buttonStyle %s",
      (buttonStyle) => {
        render(<ZestButton zest={{ buttonStyle, toggleOptions: { defaultPressed: true } }}>Bold</ZestButton>);
        expect(screen.getByRole("button")).toHaveClass("toggleOn", buttonStyle);
      }
    );

    it("R3: a very long label keeps the check mark and the label together", () => {
      const label = "A very long label ".repeat(10);
      const { container } = render(<ZestButton zest={{ toggleOptions: { defaultPressed: true } }}>{label}</ZestButton>);
      expect(screen.getByRole("button")).toHaveTextContent(label.trim());
      expect(checkOf(container)).not.toBeNull();
    });

    it("R3: a reduced-motion rule switches the check animation off", () => {
      const block = css.slice(css.lastIndexOf("@media (prefers-reduced-motion: reduce)"));
      expect(toggleCss).toMatch(/@media \(prefers-reduced-motion: reduce\)[^}]*\{[\s\S]*\.toggleCheck[\s\S]*animation:\s*none/);
      expect(block.length).toBeGreaterThan(0);
    });
  });

  describe("R4 check position", () => {
    const labelIndexOf = (container: HTMLElement) => {
      const content = container.querySelector(".content") as HTMLElement;
      return Array.from(content.childNodes);
    };

    it("R4: the check defaults to the start of the button, before the label", () => {
      const { container } = render(<ZestButton zest={{ toggleOptions: { defaultPressed: true } }}>Bold</ZestButton>);
      const nodes = labelIndexOf(container);
      expect((nodes[0] as HTMLElement).querySelector(".toggleCheck")).not.toBeNull();
      expect(nodes[1].textContent).toBe("Bold");
    });

    it("R4: checkPosition 'end' places the check after the label", () => {
      const { container } = render(
        <ZestButton zest={{ toggleOptions: { defaultPressed: true, checkPosition: "end" } }}>Bold</ZestButton>
      );
      const nodes = labelIndexOf(container);
      expect(nodes[0].textContent).toBe("Bold");
      expect((nodes[nodes.length - 1] as HTMLElement).querySelector(".toggleCheck")).not.toBeNull();
    });

    it("R4: an unknown checkPosition falls back to the start instead of hiding the check", () => {
      const { container } = render(
        <ZestButton zest={{ toggleOptions: { defaultPressed: true, checkPosition: "middle" as never } }}>Bold</ZestButton>
      );
      const nodes = labelIndexOf(container);
      expect((nodes[0] as HTMLElement).querySelector(".toggleCheck")).not.toBeNull();
    });

    it("R4: iconLeft with the check at the start keeps both, icon first, and does not reorder", () => {
      const { container } = render(
        <ZestButton
          zest={{
            visualOptions: { iconLeft: <span data-testid="left">L</span> },
            toggleOptions: { defaultPressed: true },
          }}
        >
          Bold
        </ZestButton>
      );
      const left = screen.getByTestId("left");
      const check = checkOf(container) as Element;
      expect(check).not.toBeNull();
      expect(left.compareDocumentPosition(check) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    });

    it("R4: iconRight with the check at the end keeps both, icon before the check", () => {
      const { container } = render(
        <ZestButton
          zest={{
            visualOptions: { iconRight: <span data-testid="right">R</span> },
            toggleOptions: { defaultPressed: true, checkPosition: "end" },
          }}
        >
          Bold
        </ZestButton>
      );
      const right = screen.getByTestId("right");
      const check = checkOf(container) as Element;
      expect(check).not.toBeNull();
      expect(right.compareDocumentPosition(check) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    });

    it("R4: with stretch the check stays inside the content next to the label", () => {
      const { container } = render(
        <ZestButton zest={{ visualOptions: { stretch: true }, toggleOptions: { defaultPressed: true } }}>Bold</ZestButton>
      );
      expect(screen.getByRole("button")).toHaveClass("stretch");
      expect((container.querySelector(".content") as HTMLElement).querySelector(".toggleCheck")).not.toBeNull();
    });
  });

  describe("R5 keyboard and assistive technology", () => {
    it("R5: it stays a button (no switch role) that reports pressed", () => {
      render(<ZestButton zest={{ toggleOptions: {} }}>Bold</ZestButton>);
      expect(screen.getByRole("button")).toBeInTheDocument();
      expect(screen.queryByRole("switch")).toBeNull();
    });

    it("R5: an icon-only toggle exposes its name and pressed state", () => {
      render(
        <ZestButton aria-label="Bold" zest={{ toggleOptions: { defaultPressed: true } }}>
          <span>B</span>
        </ZestButton>
      );
      expect(screen.getByRole("button", { name: "Bold", pressed: true })).toBeInTheDocument();
    });

    it("R5: a keyboard click (Enter/Space activate the native button) flips it once", () => {
      render(<ZestButton zest={{ busyOptions: noBusy, toggleOptions: {} }}>Bold</ZestButton>);
      const button = screen.getByRole("button");
      button.focus();
      expect(button).toHaveFocus();
      fireEvent.keyDown(button, { key: "Enter" });
      fireEvent.click(button);
      expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("R5: holding Enter down does not repeat the activation", () => {
      render(<ZestButton zest={{ toggleOptions: {} }}>Bold</ZestButton>);
      const notPrevented = fireEvent.keyDown(screen.getByRole("button"), { key: "Enter", repeat: true });
      expect(notPrevented).toBe(false);
    });

    it("R5: a first Enter press is not suppressed and the developer's onKeyDown still runs", () => {
      const onKeyDown = jest.fn();
      render(<ZestButton zest={{ toggleOptions: {} }} onKeyDown={onKeyDown}>Bold</ZestButton>);
      const notPrevented = fireEvent.keyDown(screen.getByRole("button"), { key: "Enter" });
      expect(notPrevented).toBe(true);
      expect(onKeyDown).toHaveBeenCalledTimes(1);
    });

    it("R5: the focus ring is defined for the on state", () => {
      expect(toggleCss).toMatch(/\.toggleOn:focus-visible/);
    });
  });

  describe("R6 themes and units", () => {
    it.each(["light", "dark"] as const)("R6: the on look combines with the %s theme", (theme) => {
      render(<ZestButton zest={{ theme, toggleOptions: { defaultPressed: true } }}>Bold</ZestButton>);
      expect(screen.getByRole("button")).toHaveClass("toggleOn", theme === "light" ? "force-light" : "force-dark");
    });

    it("R6: a theme change while on keeps it on", () => {
      const { rerender } = render(<ZestButton zest={{ theme: "light", toggleOptions: { defaultPressed: true } }}>Bold</ZestButton>);
      rerender(<ZestButton zest={{ theme: "dark", toggleOptions: { defaultPressed: true } }}>Bold</ZestButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("force-dark", "toggleOn");
      expect(button).toHaveAttribute("aria-pressed", "true");
    });

    describe("system theme", () => {
      const originalMatchMedia = window.matchMedia;
      afterEach(() => {
        window.matchMedia = originalMatchMedia;
      });

      const mockOs = (initialDark: boolean) => {
        let matches = initialDark;
        let listener: () => void = () => {};
        window.matchMedia = jest.fn().mockImplementation(() => ({
          get matches() {
            return matches;
          },
          media: "(prefers-color-scheme: dark)",
          addEventListener: (_: string, cb: () => void) => {
            listener = cb;
          },
          removeEventListener: jest.fn(),
        })) as unknown as typeof window.matchMedia;
        return (dark: boolean) => {
          matches = dark;
          act(() => listener());
        };
      };

      it.each([
        ["light", false, "force-light"],
        ["dark", true, "force-dark"],
      ])("R6: with the default system theme and an OS set to %s, the on look gets %s", (_n, dark, cls) => {
        mockOs(dark);
        render(<ZestButton zest={{ toggleOptions: { defaultPressed: true } }}>Bold</ZestButton>);
        const button = screen.getByRole("button");
        expect(button).toHaveClass("toggleOn", cls);
        expect(button).toHaveAttribute("aria-pressed", "true");
      });

      it("R6: with theme 'system' the toggle follows an OS change while on", () => {
        const setOsDark = mockOs(false);
        render(<ZestButton zest={{ theme: "system", toggleOptions: { defaultPressed: true } }}>Bold</ZestButton>);
        const button = screen.getByRole("button");
        expect(button).toHaveClass("toggleOn", "force-light");

        setOsDark(true);
        expect(button).toHaveClass("toggleOn", "force-dark");
        expect(button).not.toHaveClass("force-light");
        expect(button).toHaveAttribute("aria-pressed", "true");

        setOsDark(false);
        expect(button).toHaveClass("toggleOn", "force-light");
        expect(button).toHaveAttribute("aria-pressed", "true");
      });
    });

    it("R6: the on state has its own hover and active rules and uses rem, not px", () => {
      expect(toggleCss).toMatch(/\.toggleOn:hover:not\(:disabled\)/);
      expect(toggleCss).toMatch(/\.toggleOn:active:not\(:disabled\)/);
      expect(toggleCss).not.toMatch(/\d\s*px/);
      expect(toggleCss).toMatch(/var\(--zest-/);
    });
  });

  describe("R7 interplay with existing features", () => {
    it("R7: a disabled toggle ignores clicks and still shows its state", () => {
      const onPressedChange = jest.fn();
      render(
        <ZestButton disabled zest={{ toggleOptions: { defaultPressed: true, onPressedChange } }}>
          Bold
        </ZestButton>
      );
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(onPressedChange).not.toHaveBeenCalled();
      expect(button).toHaveAttribute("aria-pressed", "true");
      expect(button).toHaveClass("toggleOn", "disabled");
    });

    it("R7: while busy, clicks do not flip the toggle", async () => {
      const onPressedChange = jest.fn();
      let release: () => void = () => {};
      const onClick = () => new Promise<void>((resolve) => { release = resolve; });
      render(
        <ZestButton zest={{ toggleOptions: { onPressedChange } }} onClick={onClick}>
          Bold
        </ZestButton>
      );
      const button = screen.getByRole("button");
      await act(async () => { fireEvent.click(button); });
      expect(button).toBeDisabled();
      fireEvent.click(button);
      expect(onPressedChange).toHaveBeenCalledTimes(1);
      await act(async () => { release(); });
    });

    it("R7: with confirmOptions the first click does not flip, the confirming click flips once", () => {
      jest.useFakeTimers();
      const onPressedChange = jest.fn();
      render(
        <ZestButton
          zest={{
            busyOptions: noBusy,
            confirmOptions: { displayLabel: "Sure?", timeoutSecs: 5 },
            toggleOptions: { onPressedChange },
          }}
          onClick={() => {}}
        >
          Bold
        </ZestButton>
      );
      const button = screen.getByRole("button");

      fireEvent.click(button);
      expect(button).toHaveTextContent("Sure? (5s)");
      expect(onPressedChange).not.toHaveBeenCalled();
      expect(button).toHaveAttribute("aria-pressed", "false");

      fireEvent.click(button);
      expect(onPressedChange).toHaveBeenCalledTimes(1);
      expect(onPressedChange).toHaveBeenCalledWith(true);
      expect(button).toHaveTextContent("Bold");
    });

    it("R7: letting the confirmation time out leaves the state unchanged", () => {
      jest.useFakeTimers();
      const onPressedChange = jest.fn();
      render(
        <ZestButton
          zest={{
            busyOptions: noBusy,
            confirmOptions: { displayLabel: "Sure?", timeoutSecs: 2 },
            toggleOptions: { onPressedChange },
          }}
          onClick={() => {}}
        >
          Bold
        </ZestButton>
      );
      const button = screen.getByRole("button");
      fireEvent.click(button);
      act(() => { jest.advanceTimersByTime(3000); });
      expect(button).toHaveTextContent("Bold");
      expect(onPressedChange).not.toHaveBeenCalled();
      expect(button).toHaveAttribute("aria-pressed", "false");
    });

    it("R7: with a dropdown only the main part toggles and opening the menu keeps the state", () => {
      render(
        <ZestButton
          zest={{
            busyOptions: noBusy,
            dropdownOptions: [{ label: "More" }],
            toggleOptions: {},
          }}
        >
          Bold
        </ZestButton>
      );
      const main = screen.getByRole("button", { name: "Bold" });
      const trigger = screen.getByRole("button", { name: "More options" });
      expect(trigger).not.toHaveAttribute("aria-pressed");

      fireEvent.click(main);
      expect(main).toHaveAttribute("aria-pressed", "true");

      fireEvent.pointerDown(trigger, { button: 0, ctrlKey: false });
      expect(main).toHaveAttribute("aria-pressed", "true");
    });

    it("R7: if onClick rejects, the toggle keeps the value it flipped to", async () => {
      jest.spyOn(console, "error").mockImplementation(() => {});
      const onClick = () => Promise.reject(new Error("boom"));
      render(
        <ZestButton zest={{ toggleOptions: {} }} onClick={onClick}>
          Bold
        </ZestButton>
      );
      const button = screen.getByRole("button");
      await act(async () => { fireEvent.click(button); });
      expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("R7: a semanticType keeps its label and icon defaults and still shows the on look", () => {
      render(
        <ZestButton zest={{ semanticType: "save", toggleOptions: { defaultPressed: true } }}>Save</ZestButton>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("toggleOn");
      expect(button).toHaveTextContent("Save");
      expect(button.querySelector("svg")).not.toBeNull();
    });

    it("R6 and R8: a new type icon and the toggle check coexist without replacing each other", () => {
      const { container } = render(
        <ZestButton
          zest={{ semanticType: "favorite", toggleOptions: { defaultPressed: true, checkPosition: "end" } }}
        >
          Favourite
        </ZestButton>
      );

      const button = screen.getByRole("button", { name: "Favourite" });
      expect(button).toHaveClass("toggleOn");
      expect(button).toHaveAttribute("aria-pressed", "true");
      expect(container.querySelector(".inner > .icon svg")).not.toBeNull();
      expect(container.querySelector(".content .toggleCheck")).not.toBeNull();
    });
  });

  describe("R8 documentation", () => {
    const read = (p: string) => fs.readFileSync(path.join(__dirname, "..", p), "utf8");

    it("R8: the API page documents every ToggleOptions prop and the README shows a toggle example", () => {
      const api = read("documentation/api.md");
      ["pressed", "defaultPressed", "onPressedChange", "checkPosition", "toggleOptions"].forEach((prop) =>
        expect(api).toContain("`" + prop + "`")
      );
    expect(read("README.md")).toContain("toggleOptions");
    expect(read("documentation/breaking-changes.md")).toContain("Version 1.7.0");
    expect(JSON.parse(read("package.json")).version).toBe("1.7.0");
    });

    it("R8: the documented examples type-check against the exported types and render", () => {
      // Mirrors the README / Recipe 6 examples; ts-jest fails this file if the types drift.
      const options: import("../UI/ZestButton").ToggleOptions = {
        pressed: false,
        defaultPressed: true,
        onPressedChange: (on: boolean) => void on,
        checkPosition: "end" as import("../UI/ZestButton").ToggleCheckPosition,
      };
      render(
        <ZestButton aria-label="Favourite" zest={{ toggleOptions: options, visualOptions: { iconLeft: "★" } }} />
      );
      expect(screen.getByRole("button", { name: "Favourite" })).toHaveAttribute("aria-pressed", "false");
    });
  });

  describe("R9 existing behaviour untouched", () => {
    it("R9: toggle mode adds no listeners or timers that survive unmount", () => {
      jest.useFakeTimers();
      const { unmount } = render(<ZestButton zest={{ toggleOptions: { defaultPressed: true } }}>Bold</ZestButton>);
      unmount();
      expect(jest.getTimerCount()).toBe(0);
    });
  });
});
