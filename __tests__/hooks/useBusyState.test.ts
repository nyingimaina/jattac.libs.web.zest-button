import { renderHook, act } from "@testing-library/react";
import { useBusyState } from "../../UI/hooks/useBusyState";

describe("useBusyState", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("applies documented defaults when no options are given", () => {
    const { result } = renderHook(() =>
      useBusyState({ busyOptions: undefined, successOptions: undefined })
    );

    expect(result.current.handleInternally).toBe(true);
    expect(result.current.preventRageClick).toBe(true);
    expect(result.current.minBusyDurationMs).toBe(500);
    expect(result.current.showCheckmark).toBe(true);
    expect(result.current.showFailIcon).toBe(true);
    expect(result.current.autoResetAfterMs).toBe(2000);
    expect(result.current.internalBusy).toBe(false);
  });

  it("sets internalBusy true and clears success/fail flags on startBusy", () => {
    const { result } = renderHook(() =>
      useBusyState({ busyOptions: {}, successOptions: {} })
    );

    act(() => {
      result.current.endBusy(false);
    });
    expect(result.current.wasFailed).toBe(true);

    act(() => {
      result.current.startBusy();
    });

    expect(result.current.internalBusy).toBe(true);
    expect(result.current.wasSuccessful).toBe(false);
    expect(result.current.wasFailed).toBe(false);
  });

  it("sets wasSuccessful on endBusy(true) when showCheckmark is enabled", () => {
    const { result } = renderHook(() =>
      useBusyState({ busyOptions: {}, successOptions: { showCheckmark: true } })
    );

    act(() => {
      result.current.endBusy(true);
    });

    expect(result.current.internalBusy).toBe(false);
    expect(result.current.wasSuccessful).toBe(true);
    expect(result.current.wasFailed).toBe(false);
  });

  it("does not set wasSuccessful on endBusy(true) when showCheckmark is disabled", () => {
    const { result } = renderHook(() =>
      useBusyState({ busyOptions: {}, successOptions: { showCheckmark: false } })
    );

    act(() => {
      result.current.endBusy(true);
    });

    expect(result.current.wasSuccessful).toBe(false);
  });

  it("sets wasFailed on endBusy(false) when showFailIcon is enabled, then auto-clears after 400ms", () => {
    const { result } = renderHook(() =>
      useBusyState({ busyOptions: {}, successOptions: { showFailIcon: true } })
    );

    act(() => {
      result.current.endBusy(false);
    });
    expect(result.current.wasFailed).toBe(true);

    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(result.current.wasFailed).toBe(false);
  });

  it("does not set wasFailed on endBusy(false) when showFailIcon is disabled", () => {
    const { result } = renderHook(() =>
      useBusyState({ busyOptions: {}, successOptions: { showFailIcon: false } })
    );

    act(() => {
      result.current.endBusy(false);
    });

    expect(result.current.wasFailed).toBe(false);
  });

  it("auto-resets wasSuccessful after autoResetAfterMs", () => {
    const { result } = renderHook(() =>
      useBusyState({
        busyOptions: {},
        successOptions: { showCheckmark: true, autoResetAfterMs: 2000 },
      })
    );

    act(() => {
      result.current.endBusy(true);
    });
    expect(result.current.wasSuccessful).toBe(true);

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(result.current.wasSuccessful).toBe(false);
  });

  it("clears the fail timeout when unmounted before it fires", () => {
    const { result, unmount } = renderHook(() =>
      useBusyState({ busyOptions: {}, successOptions: { showFailIcon: true } })
    );

    act(() => {
      result.current.endBusy(false);
    });

    expect(() => unmount()).not.toThrow();
  });

  it("clears a pending fail timeout when endBusy(false) is called again before it fires", () => {
    const { result } = renderHook(() =>
      useBusyState({ busyOptions: {}, successOptions: { showFailIcon: true } })
    );

    act(() => {
      result.current.endBusy(false);
    });
    act(() => {
      jest.advanceTimersByTime(200);
    });
    act(() => {
      result.current.endBusy(false);
    });

    // Only the second timeout should still be pending; advancing by the
    // remaining 200ms of the first must NOT have already cleared wasFailed.
    act(() => {
      jest.advanceTimersByTime(200);
    });
    expect(result.current.wasFailed).toBe(true);

    act(() => {
      jest.advanceTimersByTime(200);
    });
    expect(result.current.wasFailed).toBe(false);
  });

  it("warns in development when minBusyDurationMs or autoResetAfterMs is very short", () => {
    const originalNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "development";
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});

    try {
      renderHook(() =>
        useBusyState({
          busyOptions: { minBusyDurationMs: 50 },
          successOptions: { autoResetAfterMs: 50 },
        })
      );

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining("'minBusyDurationMs' is set to 50ms")
      );
      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining("'autoResetAfterMs' is set to 50ms")
      );
    } finally {
      process.env.NODE_ENV = originalNodeEnv;
      warn.mockRestore();
    }
  });

  it("auto-reset clears a still-pending fail timeout so the fail flag cannot resurface", () => {
    const { result } = renderHook(() =>
      useBusyState({
        busyOptions: {},
        successOptions: { showFailIcon: true, autoResetAfterMs: 50 },
      })
    );

    act(() => {
      result.current.endBusy(false);
    });
    expect(result.current.wasFailed).toBe(true);

    // autoResetAfterMs (50ms) fires before the 400ms fail timeout, so the
    // auto-reset path must clear the still-pending fail timeout.
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(result.current.wasFailed).toBe(false);

    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(result.current.wasFailed).toBe(false);
  });
});
