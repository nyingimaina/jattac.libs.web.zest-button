import React from "react";
import { render } from "@testing-library/react";
import ZestButton from "../UI/ZestButton";
import {
  ZEST_ICON_ELEMENTS,
  ZEST_ICON_NAMES,
  getZestIconElement,
} from "../UI/zestIcons";

const PERF_TYPES = [
  "add",
  "save",
  "delete",
  "search",
  "filter",
  "next",
  "approve",
] as const;

describe("built-in icon performance", () => {
  it("R3: an icon element is created once and the same reference is reused on every lookup", () => {
    ZEST_ICON_NAMES.forEach((name) => {
      const first = getZestIconElement(name);

      expect(first).not.toBeNull();
      expect(first).toBe(ZEST_ICON_ELEMENTS[name]);

      for (let i = 0; i < 100; i++) {
        expect(getZestIconElement(name)).toBe(first);
      }
    });
  });

  it("R3: aliases share one icon element instead of building a copy per type", () => {
    const uniqueElements = new Set(Object.values(ZEST_ICON_ELEMENTS));

    expect(uniqueElements.size).toBeLessThan(ZEST_ICON_NAMES.length);
    expect(ZEST_ICON_ELEMENTS.add).toBe(ZEST_ICON_ELEMENTS.new);
    expect(ZEST_ICON_ELEMENTS.save).toBe(ZEST_ICON_ELEMENTS.submit);
    expect(ZEST_ICON_ELEMENTS.view).toBe(ZEST_ICON_ELEMENTS.details);
    expect(ZEST_ICON_ELEMENTS.search).not.toBe(ZEST_ICON_ELEMENTS.filter);
  });

  it("R3: a hundred built-in buttons render one icon each and keep the module-level elements on re-render", () => {
    const before = new Map(
      ZEST_ICON_NAMES.map((name) => [name, getZestIconElement(name)])
    );

    const buttons = Array.from({ length: 100 }, (_, index) => {
      const semanticType = PERF_TYPES[index % PERF_TYPES.length];
      return (
        <ZestButton key={index} zest={{ semanticType }}>
          {`Button ${index}`}
        </ZestButton>
      );
    });

    const { container, rerender } = render(<>{buttons}</>);

    expect(container.querySelectorAll("button")).toHaveLength(100);
    expect(container.querySelectorAll("button svg")).toHaveLength(100);

    rerender(<>{buttons}</>);

    expect(container.querySelectorAll("button svg")).toHaveLength(100);

    ZEST_ICON_NAMES.forEach((name) => {
      expect(getZestIconElement(name)).toBe(before.get(name));
    });
  });

  it("R8: the icon registry is a fixed module-level map, not something rebuilt per render", () => {
    const firstSnapshot = { ...ZEST_ICON_ELEMENTS };

    for (let i = 0; i < 10; i++) {
      getZestIconElement("search");
    }

    expect(ZEST_ICON_ELEMENTS).toEqual(firstSnapshot);
    expect(ZEST_ICON_NAMES).toEqual(Object.keys(ZEST_ICON_ELEMENTS));
  });
});
