import React from "react";
import { renderHook } from "@testing-library/react";
import { useZestConfig } from "../../UI/hooks/useZestConfig";
import ZestButtonConfigContext, { ZestGlobalConfig } from "../../UI/ZestButtonConfigContext";

function withGlobalConfig(config: ZestGlobalConfig | undefined) {
  return ({ children }: { children: React.ReactNode }) =>
    React.createElement(ZestButtonConfigContext.Provider, { value: config }, children);
}

describe("useZestConfig", () => {
  it("returns an empty-ish config when no provider and no local props are given", () => {
    const { result } = renderHook(() => useZestConfig(undefined));

    expect(result.current.semanticType).toBeUndefined();
    expect(result.current.visualOptions).toBeUndefined();
  });

  it("applies built-in semantic defaults for a known semanticType", () => {
    const { result } = renderHook(() => useZestConfig({ semanticType: "save" }));

    expect(result.current.visualOptions?.variant).toBe("success");
    expect(result.current.busyOptions?.minBusyDurationMs).toBe(500);
  });

  it("applies global default props (lowest precedence)", () => {
    const wrapper = withGlobalConfig({
      defaultProps: {
        theme: "dark",
        dropdownTheme: "light",
        dropdownWidth: 240,
        visualOptions: { size: "lg" },
      },
    });

    const { result } = renderHook(() => useZestConfig(undefined), { wrapper });

    expect(result.current.theme).toBe("dark");
    expect(result.current.dropdownTheme).toBe("light");
    expect(result.current.dropdownWidth).toBe(240);
    expect(result.current.visualOptions?.size).toBe("lg");
  });

  it("provider-level semantic defaults override built-in semantic defaults", () => {
    const wrapper = withGlobalConfig({
      semanticTypeDefaults: {
        save: { visualOptions: { variant: "standard" } },
      },
    });

    const { result } = renderHook(() => useZestConfig({ semanticType: "save" }), { wrapper });

    // Built-in 'save' default is variant 'success'; provider override wins.
    expect(result.current.visualOptions?.variant).toBe("standard");
  });

  it("local props override everything else", () => {
    const wrapper = withGlobalConfig({
      defaultProps: { theme: "dark", dropdownTheme: "dark", dropdownWidth: 240 },
      semanticTypeDefaults: {
        save: { visualOptions: { variant: "standard" } },
      },
    });

    const { result } = renderHook(
      () =>
        useZestConfig({
          semanticType: "save",
          theme: "light",
          dropdownTheme: "light",
          dropdownWidth: 320,
          visualOptions: { variant: "danger" },
        }),
      { wrapper }
    );

    expect(result.current.theme).toBe("light");
    expect(result.current.dropdownTheme).toBe("light");
    expect(result.current.dropdownWidth).toBe(320);
    expect(result.current.visualOptions?.variant).toBe("danger");
  });

  it("deep-merges nested visualOptions instead of overwriting the whole object", () => {
    const wrapper = withGlobalConfig({
      defaultProps: { visualOptions: { size: "lg", stretch: true } },
    });

    const { result } = renderHook(
      () => useZestConfig({ visualOptions: { variant: "danger" } }),
      { wrapper }
    );

    expect(result.current.visualOptions).toEqual({
      size: "lg",
      stretch: true,
      variant: "danger",
    });
  });

  it("derives semanticType from global defaultProps when no local semanticType is given", () => {
    const wrapper = withGlobalConfig({
      defaultProps: { semanticType: "delete" },
    });

    const { result } = renderHook(() => useZestConfig(undefined), { wrapper });

    expect(result.current.visualOptions?.variant).toBe("danger");
    expect(result.current.confirmOptions?.displayLabel).toBe("Confirm Delete");
  });
});
