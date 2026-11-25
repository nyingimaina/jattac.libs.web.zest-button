import React from "react";
import fs from "fs";
import path from "path";
import { act, render } from "@testing-library/react";
import ZestButton from "../UI/ZestButton";

const css = fs.readFileSync(path.join(__dirname, "../Styles/ZestButton.module.css"), "utf8");
const read = (file: string) => fs.readFileSync(path.join(__dirname, "..", file), "utf8");
const hookSource = read("UI/hooks/useSheenTrigger.ts");
const pkg = JSON.parse(read("package.json"));

const dropdownOptions = [{ label: "Export as PDF" }];

type Zest = React.ComponentProps<typeof ZestButton>["zest"];

const batch = (count: number, zestFor: (index: number) => Zest) => (
  <>
    {Array.from({ length: count }, (_, index) => (
      <ZestButton key={index} zest={zestFor(index)}>
        {`Button ${index}`}
      </ZestButton>
    ))}
  </>
);

const OriginalResizeObserver = globalThis.ResizeObserver;
let observerCount = 0;
let disconnectCount = 0;

class CountingResizeObserver {
  constructor(_callback: ResizeObserverCallback) {
    observerCount += 1;
  }
  observe() {}
  unobserve() {}
  disconnect() {
    disconnectCount += 1;
  }
}

// React attaches one framework-level "selectionchange" listener to the
// document when it mounts a root; it is not part of the streak and is the
// only document listener a plain render produces.
const frameworkDocumentListeners = new Set(["selectionchange"]);

const countListeners = () => {
  const documentAdd = jest.spyOn(document, "addEventListener");
  const windowAdd = jest.spyOn(window, "addEventListener");
  const stop = () => ({
    document: documentAdd.mock.calls
      .map((call) => String(call[0]))
      .filter((type) => !frameworkDocumentListeners.has(type)),
    window: windowAdd.mock.calls.map((call) => String(call[0])),
  });
  return {
    stop,
    totals: () => {
      const captured = stop();
      return { document: captured.document.length, window: captured.window.length };
    },
    restore: () => {
      documentAdd.mockRestore();
      windowAdd.mockRestore();
    },
  };
};

// R13/A3: a screen can hold many buttons, so the decoration must never turn
// into per-button timers, observers, listeners or retained subscriptions.
describe("ZestButton focus streak cost at scale", () => {
  beforeEach(() => {
    observerCount = 0;
    disconnectCount = 0;
    (globalThis as unknown as { ResizeObserver: unknown }).ResizeObserver =
      CountingResizeObserver;
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
    (globalThis as unknown as { ResizeObserver: unknown }).ResizeObserver =
      OriginalResizeObserver;
  });

  it("R13: a hundred opted-in regular buttons schedule no timers and add no listeners", () => {
    const listeners = countListeners();

    const { container, unmount } = render(batch(100, () => ({ focusSheen: true })));
    const afterMount = listeners.stop();

    expect(container.querySelectorAll("button")).toHaveLength(100);
    expect(jest.getTimerCount()).toBe(0);
    expect(afterMount.document).toEqual([]);
    expect(afterMount.window).toEqual([]);

    act(() => {
      jest.advanceTimersByTime(700);
    });
    expect(jest.getTimerCount()).toBe(0);

    unmount();
    listeners.restore();
  });

  it("A3: opting in adds no listener to a mixed screen of a hundred regular and split buttons", () => {
    const plainListeners = countListeners();
    const plain = render(
      batch(100, (index) => (index % 2 === 0 ? {} : { dropdownOptions }))
    );
    const plainCounts = plainListeners.totals();
    plain.unmount();
    plainListeners.restore();

    const optedListeners = countListeners();
    const opted = render(
      batch(100, (index) =>
        index % 2 === 0 ? { focusSheen: true } : { focusSheen: true, dropdownOptions }
      )
    );
    const optedCounts = optedListeners.totals();

    expect(opted.container.querySelectorAll("button")).toHaveLength(150);
    expect(jest.getTimerCount()).toBe(0);
    expect(optedCounts.document).toBe(plainCounts.document);
    expect(optedCounts.window).toBe(plainCounts.window);
    optedListeners.restore();
    opted.unmount();
  });

  it("A3: opting in adds no ResizeObserver to regular buttons and no extra observer to split buttons", () => {
    const plainRegular = render(batch(50, () => ({})));
    expect(observerCount).toBe(0);
    plainRegular.unmount();

    observerCount = 0;
    const optedRegular = render(batch(50, () => ({ focusSheen: true })));
    expect(observerCount).toBe(0);
    optedRegular.unmount();

    observerCount = 0;
    const plainSplit = render(batch(50, () => ({ dropdownOptions })));
    expect(observerCount).toBe(50);
    plainSplit.unmount();

    observerCount = 0;
    disconnectCount = 0;
    const optedSplit = render(batch(50, () => ({ focusSheen: true, dropdownOptions })));
    expect(observerCount).toBe(50);
    optedSplit.unmount();
    expect(disconnectCount).toBe(50);
  });

  it("R13: the existing split-button width measurement is unchanged and left behind on unmount", () => {
    const split = render(batch(10, () => ({ dropdownOptions, focusSheen: true })));

    expect(observerCount).toBe(10);
    expect(disconnectCount).toBe(0);

    split.unmount();

    expect(disconnectCount).toBe(10);
  });

  it("R13: a button unmounted during a sweep leaves nothing scheduled", () => {
    const listeners = countListeners();
    const { rerender, container, unmount } = render(
      <ZestButton zest={{ sheenTrigger: 0 }}>Sync</ZestButton>
    );

    rerender(<ZestButton zest={{ sheenTrigger: 1 }}>Sync</ZestButton>);
    expect(container.querySelector(".sheenProgrammatic")).not.toBeNull();

    unmount();

    expect(jest.getTimerCount()).toBe(0);
    expect(listeners.stop()).toEqual({ document: [], window: [] });
    listeners.restore();
  });

  it("R13: rapid programmatic triggers on many buttons build no backlog", () => {
    const buttons = (trigger: number) => batch(100, () => ({ sheenTrigger: trigger }));
    const { container, rerender } = render(buttons(0));

    [1, 2, 3, 4, 5].forEach((trigger) => {
      rerender(buttons(trigger));
      expect(jest.getTimerCount()).toBe(0);
    });

    expect(container.querySelectorAll(".sheenProgrammatic")).toHaveLength(100);

    act(() => {
      jest.advanceTimersByTime(700);
    });

    expect(jest.getTimerCount()).toBe(0);
  });

  it("R13: tabbing quickly through a hundred buttons accumulates no work and leaves no streak on unfocused buttons", () => {
    const listeners = countListeners();
    const { container, unmount } = render(batch(100, () => ({ focusSheen: true })));
    const buttons = Array.from(container.querySelectorAll("button")) as HTMLButtonElement[];
    const afterMount = listeners.stop();

    buttons.forEach((button) => {
      act(() => {
        button.focus();
      });

      expect(jest.getTimerCount()).toBe(0);
      expect(button.matches(":focus")).toBe(true);
    });

    expect(document.activeElement).toBe(buttons[buttons.length - 1]);
    // Only the button the user is on is focused; the ninety-nine left behind
    // must not still be matching the focus layer.
    expect(buttons.filter((button) => button.matches(":focus"))).toEqual([
      buttons[buttons.length - 1],
    ]);
    // Focus never flips the programmatic trigger, so no active streak class is
    // left on any button after tabbing past it.
    expect(container.querySelectorAll(".sheenProgrammatic")).toHaveLength(0);
    expect(container.querySelectorAll(".sheenTriggerOdd, .sheenTriggerEven")).toHaveLength(0);

    act(() => {
      jest.advanceTimersByTime(700);
    });
    expect(jest.getTimerCount()).toBe(0);

    const afterTabbing = listeners.stop();
    expect(afterTabbing.document).toEqual(afterMount.document);
    expect(afterTabbing.window).toEqual(afterMount.window);

    unmount();
    expect(jest.getTimerCount()).toBe(0);
    listeners.restore();
  });

  it("R13/A3: the sweep runs once with fill both and adds no runtime dependency", () => {
    expect(css).toMatch(
      /\.button\.focusSheen:focus-visible::after\s*\{[^}]*animation:\s*zestFocusSheenSweep\s+0\.6s[^;]*\s1\s+both/
    );
    expect(css).toMatch(
      /\.button\.focusSheen\.sheenProgrammatic\.sheenTriggerOdd::before\s*\{[^}]*animation:\s*zestFocusSheenSweep\s+0\.6s[^;]*\s1\s+both/
    );
    expect(css).toMatch(
      /\.button\.focusSheen\.sheenProgrammatic\.sheenTriggerEven::before\s*\{[^}]*animation:\s*zestFocusSheenSweepAlt\s+0\.6s[^;]*\s1\s+both/
    );

    expect(hookSource).not.toMatch(
      /setTimeout|setInterval|requestAnimationFrame|addEventListener|MutationObserver|ResizeObserver|IntersectionObserver/
    );

    expect(pkg.dependencies).toBeUndefined();
    expect(Object.keys(pkg.peerDependencies).sort()).toEqual(
      ["@radix-ui/react-dropdown-menu", "react", "react-dom", "react-icons"].sort()
    );
  });
});
