import React from "react";
import { renderHook } from "@testing-library/react";
import { useZestConfig } from "../../UI/hooks/useZestConfig";
import ZestButtonConfigContext, { ZestGlobalConfig } from "../../UI/ZestButtonConfigContext";
import { ZEST_ICON_ELEMENTS } from "../../UI/zestIcons";
import type { ZestCustomProps } from "../../UI/ZestButton";

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

  it("R1: a new built-in type resolves to its default icon and look", () => {
    const { result } = renderHook(() => useZestConfig({ semanticType: "search" }));

    expect(result.current.visualOptions?.variant).toBe("standard");
    expect(result.current.visualOptions?.iconLeft).toBe(ZEST_ICON_ELEMENTS.search);
  });

  it("R1: an app's own configuration for a new name wins over the built-in default", () => {
    const wrapper = withGlobalConfig({
      semanticTypeDefaults: {
        search: { visualOptions: { variant: "danger" } },
      },
    });

    const { result } = renderHook(() => useZestConfig({ semanticType: "search" }), { wrapper });

    expect(result.current.visualOptions?.variant).toBe("danger");
    expect(result.current.visualOptions?.iconLeft).toBe(ZEST_ICON_ELEMENTS.search);
  });

  it("R1: an unknown, capitalised or spaced name is not treated as a built-in type", () => {
    (["unknown-type", "Search", " search ", "SEARCH"] as const).forEach((semanticType) => {
      const { result, unmount } = renderHook(() =>
        useZestConfig({ semanticType: semanticType as ZestCustomProps["semanticType"] })
      );

      expect(result.current.visualOptions).toBeUndefined();
      expect(result.current.busyOptions).toBeUndefined();
      expect(result.current.confirmOptions).toBeUndefined();

      unmount();
    });
  });

  it("R2: a local iconLeft wins and the built-in icon is not kept alongside it", () => {
    const customIcon = React.createElement("span", { "data-testid": "app-icon" });
    const { result } = renderHook(() =>
      useZestConfig({ semanticType: "search", visualOptions: { iconLeft: customIcon } })
    );

    const iconLeft = result.current.visualOptions?.iconLeft as React.ReactElement;
    expect(iconLeft.props["data-testid"]).toBe("app-icon");
    expect(iconLeft).not.toBe(ZEST_ICON_ELEMENTS.search);
  });

  it("R2: defaults are merged without changing the configuration the app passes in", () => {
    const localZest: ZestCustomProps = {
      semanticType: "next",
      visualOptions: { variant: "danger" },
    };
    const before = {
      semanticType: localZest.semanticType,
      visualOptions: { ...localZest.visualOptions },
    };

    const wrapper = withGlobalConfig({
      semanticTypeDefaults: {
        next: { visualOptions: { variant: "success" } },
      },
    });

    const { result } = renderHook(() => useZestConfig(localZest), { wrapper });

    expect(result.current.visualOptions?.variant).toBe("danger");
    expect(result.current.visualOptions?.iconRight).toBe(ZEST_ICON_ELEMENTS.next);
    expect(localZest).toEqual(before);
  });

  it("R6: a provider override of a built-in type's iconLeft keeps the app's own icon", () => {
    const appIcon = React.createElement("span", { "data-testid": "provider-icon" });
    const wrapper = withGlobalConfig({
      semanticTypeDefaults: {
        save: { visualOptions: { iconLeft: appIcon } },
      },
    });

    const { result } = renderHook(() => useZestConfig({ semanticType: "save" }), { wrapper });

    const iconLeft = result.current.visualOptions?.iconLeft as React.ReactElement;
    expect(iconLeft.props["data-testid"]).toBe("provider-icon");
    expect(result.current.visualOptions?.variant).toBe("success");
  });

  it("R6: the existing types keep their options after the icon change", () => {
    const { result } = renderHook(() => useZestConfig({ semanticType: "delete" }));

    expect(result.current.visualOptions?.variant).toBe("danger");
    expect(result.current.visualOptions?.iconLeft).toBe(ZEST_ICON_ELEMENTS.delete);
    expect(result.current.confirmOptions?.displayLabel).toBe("Confirm Delete");
    expect(result.current.successOptions?.showFailIcon).toBe(true);
  });

  it("R8: deep merging a type preserves the shared icon element reference", () => {
    const wrapper = withGlobalConfig({
      defaultProps: { visualOptions: { size: "lg" } },
      semanticTypeDefaults: {
        search: { visualOptions: { stretch: true } },
      },
    });

    const { result } = renderHook(
      () => useZestConfig({ semanticType: "search", visualOptions: { variant: "danger" } }),
      { wrapper }
    );

    expect(result.current.visualOptions?.iconLeft).toBe(ZEST_ICON_ELEMENTS.search);
    expect(result.current.visualOptions?.size).toBe("lg");
    expect(result.current.visualOptions?.stretch).toBe(true);
    expect(result.current.visualOptions?.variant).toBe("danger");
  });
});
