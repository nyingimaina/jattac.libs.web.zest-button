import React from "react";
import { StrictMode } from "react";
import fs from "fs";
import path from "path";
import { renderHook } from "@testing-library/react";
import { useSheenTrigger } from "../../UI/hooks/useSheenTrigger";

const hookSource = fs.readFileSync(path.join(__dirname, "../../UI/hooks/useSheenTrigger.ts"), "utf8");

describe("useSheenTrigger", () => {
  it("A1: the value on the first render is inactive and plays nothing", () => {
    const { result } = renderHook(() => useSheenTrigger(0));

    expect(result.current.active).toBe(false);
  });

  it("A1: each later value change returns an alternating active result, including number to string", () => {
    const { result, rerender } = renderHook(({ value }) => useSheenTrigger(value), {
      initialProps: { value: 0 as string | number },
    });

    rerender({ value: 1 });
    expect(result.current.active).toBe(true);
    const firstParity = result.current.parity;

    rerender({ value: 2 });
    expect(result.current.active).toBe(true);
    expect(result.current.parity).not.toBe(firstParity);

    rerender({ value: "2" });
    expect(result.current.active).toBe(true);
    expect(result.current.parity).toBe(firstParity);
  });

  it("A1: setting the same value again returns the same result and does not replay", () => {
    const { result, rerender } = renderHook(({ value }) => useSheenTrigger(value), {
      initialProps: { value: 0 as string | number },
    });

    rerender({ value: 1 });
    const afterChange = result.current;
    rerender({ value: 1 });

    expect(result.current).toBe(afterChange);
  });

  it("A1: React Strict Mode double effects still play each change exactly once", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) =>
      React.createElement(StrictMode, null, children);
    const { result, rerender } = renderHook(({ value }) => useSheenTrigger(value), {
      initialProps: { value: 0 as string | number },
      wrapper,
    });

    expect(result.current.active).toBe(false);

    rerender({ value: 1 });
    const afterOne = result.current;
    expect(afterOne.active).toBe(true);

    rerender({ value: 2 });
    expect(result.current.parity).not.toBe(afterOne.parity);
  });

  it("A1: it uses no listener, timer or storage and leaves no timer behind", () => {
    expect(hookSource).not.toMatch(
      /addEventListener|setTimeout|setInterval|requestAnimationFrame|localStorage|sessionStorage/
    );

    jest.useFakeTimers();
    const { rerender, unmount } = renderHook(({ value }) => useSheenTrigger(value), {
      initialProps: { value: 0 as string | number },
    });
    rerender({ value: 1 });
    expect(jest.getTimerCount()).toBe(0);
    unmount();
    expect(jest.getTimerCount()).toBe(0);
    jest.useRealTimers();
  });
});
