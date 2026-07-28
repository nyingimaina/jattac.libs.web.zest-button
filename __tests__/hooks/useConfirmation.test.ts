import { renderHook, act } from "@testing-library/react";
import { useConfirmation } from "../../UI/hooks/useConfirmation";

describe("useConfirmation", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("returns original children and awaitingConfirm=false when no confirmOptions are given", () => {
    const { result } = renderHook(() =>
      useConfirmation({ confirmOptions: undefined, originalChildren: "Delete" })
    );

    expect(result.current.awaitingConfirm).toBe(false);
    expect(result.current.currentChildren).toBe("Delete");
  });

  it("startConfirmation is a no-op when confirmOptions is missing", () => {
    const { result } = renderHook(() =>
      useConfirmation({ confirmOptions: undefined, originalChildren: "Delete" })
    );

    act(() => {
      result.current.startConfirmation();
    });

    expect(result.current.awaitingConfirm).toBe(false);
    expect(result.current.currentChildren).toBe("Delete");
  });

  it("shows the confirm label with countdown when startConfirmation is called", () => {
    const { result } = renderHook(() =>
      useConfirmation({
        confirmOptions: { displayLabel: "Confirm Delete", timeoutSecs: 5 },
        originalChildren: "Delete",
      })
    );

    act(() => {
      result.current.startConfirmation();
    });

    expect(result.current.awaitingConfirm).toBe(true);
    expect(result.current.currentChildren).toBe("Confirm Delete (5s)");
  });

  it("ticks the countdown down each second", () => {
    const { result } = renderHook(() =>
      useConfirmation({
        confirmOptions: { displayLabel: "Confirm Delete", timeoutSecs: 5 },
        originalChildren: "Delete",
      })
    );

    act(() => {
      result.current.startConfirmation();
    });

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.currentChildren).toBe("Confirm Delete (4s)");

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.currentChildren).toBe("Confirm Delete (3s)");
  });

  it("auto-cancels and calls onConfirmFail when the countdown reaches zero", () => {
    const onConfirmFail = jest.fn();
    const { result } = renderHook(() =>
      useConfirmation({
        confirmOptions: { displayLabel: "Confirm Delete", timeoutSecs: 2 },
        originalChildren: "Delete",
        onConfirmFail,
      })
    );

    act(() => {
      result.current.startConfirmation();
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(onConfirmFail).toHaveBeenCalledTimes(1);
    expect(result.current.awaitingConfirm).toBe(false);
    expect(result.current.currentChildren).toBe("Delete");
  });

  it("stopConfirmation resets state and clears the interval immediately", () => {
    const onConfirmFail = jest.fn();
    const { result } = renderHook(() =>
      useConfirmation({
        confirmOptions: { displayLabel: "Confirm Delete", timeoutSecs: 5 },
        originalChildren: "Delete",
        onConfirmFail,
      })
    );

    act(() => {
      result.current.startConfirmation();
    });
    act(() => {
      result.current.stopConfirmation();
    });

    expect(result.current.awaitingConfirm).toBe(false);
    expect(result.current.currentChildren).toBe("Delete");

    // Advancing time after stop must not fire onConfirmFail — the interval
    // should have been cleared, not merely ignored.
    act(() => {
      jest.advanceTimersByTime(10000);
    });
    expect(onConfirmFail).not.toHaveBeenCalled();
  });

  it("clears the interval on unmount", () => {
    const onConfirmFail = jest.fn();
    const { result, unmount } = renderHook(() =>
      useConfirmation({
        confirmOptions: { displayLabel: "Confirm Delete", timeoutSecs: 5 },
        originalChildren: "Delete",
        onConfirmFail,
      })
    );

    act(() => {
      result.current.startConfirmation();
    });

    unmount();

    act(() => {
      jest.advanceTimersByTime(10000);
    });
    expect(onConfirmFail).not.toHaveBeenCalled();
  });
});
