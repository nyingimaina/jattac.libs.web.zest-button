import React from "react";
import fs from "fs";
import path from "path";
import { render, screen } from "@testing-library/react";
import ZestButton from "../UI/ZestButton";
import { ZestIcon } from "../UI/ZestIcon";
import { ZEST_ICON_ELEMENTS, ZEST_ICON_NAMES, getZestIconElement } from "../UI/zestIcons";
import ZestButtonFromBarrel, {
  ZestButtonConfigProvider,
  ZestIcon as ZestIconFromBarrel,
  useZestButtonConfig,
  type ZestIconProps,
  type ZestIconSize,
} from "../UI";
import * as ZestPackage from "../UI";

const read = (p: string) => fs.readFileSync(path.join(__dirname, "..", p), "utf8");
const css = read("Styles/ZestButton.module.css");

const SHARED_ICON_SETTINGS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
};

describe("ZestIcon", () => {
  it("R5: renders the named built-in icon in the shared style", () => {
    const { container } = render(<ZestIcon name="search" />);
    const svg = container.querySelector("svg") as SVGElement;

    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
    expect(svg).toHaveAttribute("fill", "none");
    expect(svg).toHaveAttribute("stroke", "currentColor");
    expect(svg).toHaveAttribute("stroke-width", "2");
    expect(svg).toHaveAttribute("stroke-linecap", "round");
    expect(svg).toHaveAttribute("stroke-linejoin", "round");
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("focusable", "false");
  });

  it("R5: an icon passed as iconLeft renders exactly one icon", () => {
    const { container } = render(
      <ZestButton zest={{ visualOptions: { iconLeft: <ZestIcon name="copy" /> } }}>
        Copy
      </ZestButton>
    );

    expect(container.querySelectorAll("svg")).toHaveLength(1);
    expect(container.querySelector(".zestIcon")).not.toBeNull();
  });

  it("R5: an unknown name renders nothing and does not throw", () => {
    let container!: HTMLElement;
    expect(() => {
      ({ container } = render(<ZestIcon name="not-a-real-icon" />));
    }).not.toThrow();

    expect(container.querySelector("svg")).toBeNull();
    expect(container.textContent).toBe("");
  });

  it("R5: names inherited from Object.prototype are not treated as built-in icons", () => {
    ["__proto__", "constructor", "toString", "hasOwnProperty", "valueOf"].forEach((name) => {
      expect(getZestIconElement(name)).toBeNull();

      let container!: HTMLElement;
      expect(() => {
        ({ container } = render(<ZestIcon name={name} />));
      }).not.toThrow();

      expect(container.querySelector("svg")).toBeNull();
      expect(container.textContent).toBe("");
    });
  });

  it("R5: the public barrel exports ZestIcon, its types, the default button, the provider and the config hook", () => {
    const size: ZestIconSize = "lg";
    const iconProps: ZestIconProps = { name: "search", size };
    let receivedConfig: ReturnType<typeof useZestButtonConfig>;

    const Consumer = () => {
      receivedConfig = useZestButtonConfig();
      return (
        <ZestButtonFromBarrel
          zest={{ visualOptions: { iconLeft: <ZestIconFromBarrel {...iconProps} /> } }}
        >
          Find
        </ZestButtonFromBarrel>
      );
    };

    const { container } = render(
      <ZestButtonConfigProvider config={{ defaultProps: { buttonStyle: "outline" } }}>
        <Consumer />
      </ZestButtonConfigProvider>
    );

    expect(screen.getByRole("button", { name: "Find" })).toHaveClass("outline");
    expect(container.querySelectorAll("svg")).toHaveLength(1);
    expect(receivedConfig).toEqual({ defaultProps: { buttonStyle: "outline" } });
  });

  it("R5: two ZestIcons on one page do not clash (no shared ids)", () => {
    const { container } = render(
      <>
        <ZestIcon name="search" />
        <ZestIcon name="search" />
      </>
    );

    expect(container.querySelectorAll("svg")).toHaveLength(2);
    expect(container.querySelectorAll("[id]")).toHaveLength(0);
  });

  it("R5: a rem size or a size name scales the icon without px", () => {
    const { container, rerender } = render(<ZestIcon name="home" size="1.5rem" />);
    const wrapper = container.firstElementChild as HTMLElement;

    expect(wrapper.style.fontSize).toBe("1.5rem");
    expect(wrapper.style.width).toBe("");
    expect(wrapper.style.height).toBe("");

    rerender(<ZestIcon name="home" size={2} />);
    expect(wrapper.style.fontSize).toBe("2rem");

    rerender(<ZestIcon name="home" size="sm" />);
    expect(wrapper).toHaveClass("zestIconSm");

    rerender(<ZestIcon name="home" size="md" />);
    expect(wrapper).toHaveClass("zestIconMd");

    rerender(<ZestIcon name="home" size="lg" />);
    expect(wrapper).toHaveClass("zestIconLg");
    expect(wrapper.style.fontSize).toBe("");

    expect(css).toMatch(/\.zestIconSm\s*\{[^}]*font-size:\s*[\d.]+rem/);
    expect(css).toMatch(/\.zestIconMd\s*\{[^}]*font-size:\s*[\d.]+rem/);
    expect(css).toMatch(/\.zestIconLg\s*\{[^}]*font-size:\s*[\d.]+rem/);
    expect(css).not.toMatch(/\.zestIcon\s*\{[^}]*\d+px/);
    expect(css).toMatch(/\.zestIcon svg\s*\{[^}]*width:\s*1em[^}]*height:\s*1em/s);
  });

  it("R8: every built-in icon uses the shared view box and stroke settings", () => {
    ZEST_ICON_NAMES.forEach((name) => {
      const element = ZEST_ICON_ELEMENTS[name];

      expect(element).toBeDefined();
      expect(element.props).toMatchObject(SHARED_ICON_SETTINGS);
      expect(element.props.dangerouslySetInnerHTML).toBeUndefined();
    });
  });

  it("R7: the features table lists exactly the built-in semantic types", () => {
    const features = read("documentation/features.md");
    const start = features.indexOf("### Built-in Semantic Types Reference");
    expect(start).toBeGreaterThan(-1);

    const nextSection = features.indexOf("\n---", start);
    const block = features.slice(start, nextSection === -1 ? undefined : nextSection);
    const documented = Array.from(block.matchAll(/^\|\s*`([^`]+)`\s*\|/gm)).map((m) => m[1]);

    expect(documented).toHaveLength(47);
    expect(documented.slice().sort()).toEqual(ZEST_ICON_NAMES.slice().sort());
  });

  it("R7: the docs use the new types and icon component, with no stale type count", () => {
    const pages = [
      "README.md",
      "documentation/examples.md",
      "documentation/features.md",
      "documentation/api.md",
      "documentation/configuration.md",
      "documentation/development.md",
      "documentation/breaking-changes.md",
    ];
    const docs = pages.map(read).join("\n");

    expect(read("README.md")).toMatch(/semanticType:\s*'search'/);
    expect(read("README.md")).toContain("ZestIcon");
    expect(read("documentation/api.md")).toContain("ZestIcon");
    expect(read("documentation/examples.md")).toContain("ZestIcon");
    expect(read("documentation/examples.md")).toContain("aria-label");
    expect(read("documentation/development.md")).toContain("zestIcons.tsx");
    expect(docs).not.toMatch(/17 built-in types/i);
  });

  it("R7: examples.md shows how to override a built-in type's default icon", () => {
    const examples = read("documentation/examples.md");
    const recipeStart = examples.indexOf("### Recipe 8: Swapping a Built-in Icon");
    expect(recipeStart).toBeGreaterThan(-1);

    const block = examples.slice(recipeStart);
    expect(block).toMatch(/semanticType:\s*'search'/);
    expect(block).toMatch(/visualOptions:\s*\{[^}]*iconLeft/s);
    expect(block).toContain("<ZestIcon");
    expect(block).toMatch(/iconRight/);
  });

  it("R7: every documented package import compiles against the real barrel exports", () => {
    const examples = ["README.md", "documentation/examples.md"].map(read).join("\n");
    const clauses = Array.from(
      examples.matchAll(/^import\s+(.+?)\s+from\s+'jattac\.libs\.web\.zest-button';/gm)
    ).map((match) => match[1]);

    expect(clauses.length).toBeGreaterThan(0);
    expect(examples).not.toMatch(
      /import\s*\{[^}]*\bZestButton\b[^}]*\}\s*from\s*'jattac\.libs\.web\.zest-button'/
    );

    clauses.forEach((clause) => {
      const [defaultPart, namedPart = ""] = clause.split("{");
      const defaultName = defaultPart.replace(/,\s*$/, "").trim();

      if (defaultName) {
        expect(defaultName).toBe("ZestButton");
        expect(ZestPackage.default).toBe(ZestButtonFromBarrel);
      }

      namedPart
        .replace("}", "")
        .split(",")
        .map((name) => name.trim())
        .filter(Boolean)
        .forEach((name) => {
          expect(Object.prototype.hasOwnProperty.call(ZestPackage, name)).toBe(true);
        });
    });
  });

  it("R7: every documentation page links to the previous and next page", () => {
    const pages = [
      "README.md",
      "documentation/examples.md",
      "documentation/features.md",
      "documentation/api.md",
      "documentation/configuration.md",
      "documentation/development.md",
      "documentation/breaking-changes.md",
    ];

    pages.forEach((page) => {
      const text = read(page);
      expect(text).toMatch(/Previous:/);
      expect(text).toMatch(/Next:/);
    });
  });
});
