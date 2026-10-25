import { useEffect, useLayoutEffect, useMemo } from "react";
import { useZestButtonConfig } from "../ZestButtonConfigContext";
import { compileToggleStyle } from "../toggleStyle/compileToggleStyle";
import { acquireToggleStyle } from "../toggleStyle/toggleStyleSheet";
import type { ZestToggleStyle } from "../toggleStyle/types";

// useLayoutEffect warns during server rendering; the rules only need to exist
// in the browser, so fall back to useEffect where there is no window.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface UseToggleStyleOptions {
  enabled: boolean;
  /** Per-button override from `zest.toggleOptions.style`. */
  style?: ZestToggleStyle;
  theme: "light" | "dark";
  variant: string;
  size: string;
}

/**
 * Returns the id for the button's `data-zest-toggle-style` attribute, or
 * undefined when nothing is configured (the button then looks as it always did).
 */
export const useToggleStyle = ({ enabled, style, theme, variant, size }: UseToggleStyleOptions): string | undefined => {
  const providerStyle = useZestButtonConfig()?.styles?.toggle;

  const compiled = useMemo(
    () => (enabled ? compileToggleStyle(providerStyle, style, theme, variant, size) : null),
    [enabled, providerStyle, style, theme, variant, size]
  );

  const id = compiled?.id;
  const css = compiled?.css;
  useIsomorphicLayoutEffect(() => {
    if (id === undefined || css === undefined) return;
    return acquireToggleStyle(id, css);
  }, [id, css]);

  return id;
};
