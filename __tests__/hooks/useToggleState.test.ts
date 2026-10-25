import { renderHook, act } from "@testing-library/react";
import { useToggleState } from "../../UI/hooks/useToggleState";

describe("useToggleState", () => {
  it("R2: starts off when nothing is given and flips once per toggle, reporting each value", () => {
    const onPressedChange = jest.fn();
    const { result } = renderHook(() => useToggleState({ onPressedChange }));

    expect(result.current.pressed).toBe(false);

    act(() => result.current.toggle());
    expect(result.current.pressed).toBe(true);
    expect(onPressedChange).toHaveBeenLastCalledWith(true);

    act(() => result.current.toggle());
    expect(result.current.pressed).toBe(false);
    expect(onPressedChange).toHaveBeenLastCalledWith(false);
    expect(onPressedChange).toHaveBeenCalledTimes(2);
  });

  it("R2: defaultPressed starts the toggle on", () => {
    const { result } = renderHook(() => useToggleState({ defaultPressed: true }));
    expect(result.current.pressed).toBe(true);
  });

  it("R2: two toggles in the same tick flip twice, not merged or lost", () => {
    const onPressedChange = jest.fn();
    const { result } = renderHook(() => useToggleState({ onPressedChange }));

    act(() => {
      result.current.toggle();
      result.current.toggle();
    });

    expect(onPressedChange.mock.calls.map((c) => c[0])).toEqual([true, false]);
    expect(result.current.pressed).toBe(false);
  });

  it("R2: a controlled value does not change until the app passes a new one", () => {
    const onPressedChange = jest.fn();
    const { result, rerender } = renderHook(
      ({ pressed }) => useToggleState({ pressed, onPressedChange }),
      { initialProps: { pressed: true } }
    );

    act(() => result.current.toggle());
    expect(onPressedChange).toHaveBeenCalledWith(false);
    expect(result.current.pressed).toBe(true);

    rerender({ pressed: false });
    expect(result.current.pressed).toBe(false);
  });

  it("R2: pressed wins over defaultPressed", () => {
    const { result } = renderHook(() => useToggleState({ pressed: false, defaultPressed: true }));
    expect(result.current.pressed).toBe(false);
  });

  it("R9: reports the resulting state, with no timers left running", () => {
    jest.useFakeTimers();
    const { result, unmount } = renderHook(() => useToggleState({}));
    act(() => result.current.toggle());
    expect(result.current.pressed).toBe(true);
    unmount();
    expect(jest.getTimerCount()).toBe(0);
    jest.useRealTimers();
  });
});
