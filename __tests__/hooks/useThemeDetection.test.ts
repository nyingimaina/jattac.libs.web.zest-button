import { renderHook, act } from "@testing-library/react";
import { useThemeDetection } from "../../UI/hooks/useThemeDetection";

type ChangeListener = () => void;

function mockMatchMedia(initialMatches: boolean) {
  let matches = initialMatches;
  let listener: ChangeListener | undefined;

  const mql = {
    get matches() {
      return matches;
    },
    addEventListener: jest.fn((_event: string, cb: ChangeListener) => {
      listener = cb;
    }),
    removeEventListener: jest.fn(),
  };

  window.matchMedia = jest.fn().mockReturnValue(mql);

  return {
    setMatches: (value: boolean) => {
      matches = value;
      act(() => {
        listener?.();
      });
    },
    mql,
  };
}

describe("useThemeDetection", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns 'dark' as the initial theme when the media query matches", () => {
    mockMatchMedia(true);

    const { result } = renderHook(() => useThemeDetection());

    expect(result.current).toBe("dark");
  });

  it("returns 'light' as the initial theme when the media query does not match", () => {
    mockMatchMedia(false);

    const { result } = renderHook(() => useThemeDetection());

    expect(result.current).toBe("light");
  });

  it("updates the theme when the media query change listener fires", () => {
    const { setMatches } = mockMatchMedia(false);

    const { result } = renderHook(() => useThemeDetection());

    expect(result.current).toBe("light");

    setMatches(true);

    expect(result.current).toBe("dark");
  });

  it("removes the change listener on unmount", () => {
    const { mql } = mockMatchMedia(false);

    const { unmount } = renderHook(() => useThemeDetection());
    unmount();

    expect(mql.removeEventListener).toHaveBeenCalledWith("change", expect.any(Function));
  });
});
