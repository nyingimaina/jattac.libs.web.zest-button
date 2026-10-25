import React from "react";
import fs from "fs";
import path from "path";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import ZestButton, { SemanticType } from "../UI/ZestButton";
import ZestButtonConfigProvider from "../UI/ZestButtonConfigProvider";
import { ZEST_ICON_ELEMENTS, ZEST_ICON_NAMES } from "../UI/zestIcons";

const read = (p: string) => fs.readFileSync(path.join(__dirname, "..", p), "utf8");
const css = read("Styles/ZestButton.module.css");

const EXISTING_TYPES: SemanticType[] = [
  "add",
  "new",
  "save",
  "submit",
  "edit",
  "update",
  "delete",
  "remove",
  "cancel",
  "close",
  "view",
  "details",
  "download",
  "upload",
  "refresh",
  "reload",
  "print",
  "share",
  "confirm",
];

const NEW_TYPES: SemanticType[] = [
  "search",
  "filter",
  "sort",
  "copy",
  "paste",
  "back",
  "next",
  "home",
  "menu",
  "more",
  "settings",
  "help",
  "info",
  "warning",
  "send",
  "login",
  "logout",
  "undo",
  "redo",
  "approve",
  "reject",
  "favorite",
  "attach",
  "lock",
  "unlock",
  "archive",
  "export",
  "import",
];

const ALL_TYPES: SemanticType[] = [...EXISTING_TYPES, ...NEW_TYPES];

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

const EXPECTED_NEW_VARIANT: Record<string, string> = {
  approve: "success",
  reject: "danger",
  warning: "danger",
};

const expectSharedIconStyle = (svg: Element) => {
  expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
  expect(svg).toHaveAttribute("fill", "none");
  expect(svg).toHaveAttribute("stroke", "currentColor");
  expect(svg).toHaveAttribute("stroke-width", "2");
  expect(svg).toHaveAttribute("stroke-linecap", "round");
  expect(svg).toHaveAttribute("stroke-linejoin", "round");
  expect(svg).toHaveAttribute("aria-hidden", "true");
  expect(svg).toHaveAttribute("focusable", "false");
};

const sharedStyleIsValid = (props: Record<string, unknown>) => {
  try {
    expect(props).toMatchObject(SHARED_ICON_SETTINGS);
    return true;
  } catch {
    return false;
  }
};

describe("built-in semantic type icons", () => {
  it("R1: all 47 built-in types render a default icon and keep their children label", () => {
    ALL_TYPES.forEach((semanticType) => {
      const label = `Label for ${semanticType}`;
      const { container, unmount } = render(
        <ZestButton zest={{ semanticType }}>{label}</ZestButton>
      );

      const button = container.querySelector("button") as HTMLButtonElement;
      expect(button).toHaveTextContent(label);
      expect(button.querySelector("svg")).not.toBeNull();

      unmount();
    });
  });

  it("R1: each of the 28 new names is accepted by the SemanticType type", () => {
    const newNames: SemanticType[] = [
      "search",
      "filter",
      "sort",
      "copy",
      "paste",
      "back",
      "next",
      "home",
      "menu",
      "more",
      "settings",
      "help",
      "info",
      "warning",
      "send",
      "login",
      "logout",
      "undo",
      "redo",
      "approve",
      "reject",
      "favorite",
      "attach",
      "lock",
      "unlock",
      "archive",
      "export",
      "import",
    ];

    expect(newNames).toHaveLength(28);
  });

  it("R1: an app that registered a custom configuration for a new name keeps its own configuration", () => {
    render(
      <ZestButtonConfigProvider
        config={{
          semanticTypeDefaults: {
            search: {
              buttonStyle: "outline",
              visualOptions: { variant: "danger" },
            },
          },
        }}
      >
        <ZestButton zest={{ semanticType: "search" }}>Find</ZestButton>
      </ZestButtonConfigProvider>
    );

    const button = screen.getByRole("button", { name: "Find" });
    expect(button).toHaveClass("danger", "outline");
    expect(button).not.toHaveClass("standard", "solid");
  });

  it("R1: an unknown semanticType renders a plain button without an icon", () => {
    const { container } = render(
      <ZestButton zest={{ semanticType: "not-a-real-type" as SemanticType }}>Plain</ZestButton>
    );

    const button = container.querySelector("button") as HTMLButtonElement;
    expect(button).toHaveTextContent("Plain");
    expect(button.querySelector("svg")).toBeNull();
    expect(button).toHaveClass("standard", "solid");
  });

  it("R1: a name in capitals or with spaces is not treated as a built-in type", () => {
    (["Search", " search ", "SEARCH"] as unknown as SemanticType[]).forEach((semanticType) => {
      const { container, unmount } = render(
        <ZestButton zest={{ semanticType }}>Plain</ZestButton>
      );

      const button = container.querySelector("button") as HTMLButtonElement;
      expect(button.querySelector("svg")).toBeNull();
      expect(button).toHaveClass("standard", "solid");

      unmount();
    });
  });

  it("R2: every new type resolves to its documented variant and icon side", () => {
    NEW_TYPES.forEach((semanticType) => {
      const { container, unmount } = render(
        <ZestButton zest={{ semanticType }}>{`Label ${semanticType}`}</ZestButton>
      );

      const button = container.querySelector("button") as HTMLButtonElement;
      const svg = button.querySelector("svg") as SVGElement;
      const expectedVariant = EXPECTED_NEW_VARIANT[semanticType] ?? "standard";

      expect(button).toHaveClass(expectedVariant);

      if (semanticType === "next") {
        expect(button.querySelector(".content .icon svg")).toBe(svg);
      } else {
        expect(button.querySelector(".inner > .icon svg")).toBe(svg);
        expect(button.querySelector(".content .icon")).toBeNull();
      }

      unmount();
    });
  });

  it("R2: no new type asks for confirmation by default", () => {
    NEW_TYPES.forEach((semanticType) => {
      const onClick = jest.fn();
      const { container, unmount } = render(
        <ZestButton
          zest={{ semanticType, busyOptions: { handleInternally: false } }}
          onClick={onClick}
        >
          {`Label ${semanticType}`}
        </ZestButton>
      );

      const button = container.querySelector("button") as HTMLButtonElement;
      fireEvent.click(button);

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(button).toHaveTextContent(`Label ${semanticType}`);

      unmount();
    });
  });

  it("R2: a developer-supplied iconLeft wins and the default icon is not added twice", () => {
    const { container } = render(
      <ZestButton
        zest={{
          semanticType: "search",
          visualOptions: { iconLeft: <span data-testid="custom-icon">*</span> },
        }}
      >
        Find
      </ZestButton>
    );

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    expect(container.querySelectorAll(".icon")).toHaveLength(1);
  });

  it("R2: a developer-set variant wins over the built-in default", () => {
    render(
      <ZestButton zest={{ semanticType: "search", visualOptions: { variant: "danger" } }}>
        Find
      </ZestButton>
    );

    const button = screen.getByRole("button", { name: "Find" });
    expect(button).toHaveClass("danger");
    expect(button).not.toHaveClass("standard");
  });

  it("R2: next places its icon after the label so right-to-left layouts mirror it", () => {
    const { container } = render(
      <ZestButton zest={{ semanticType: "next" }}>Next step</ZestButton>
    );

    const content = container.querySelector(".content") as HTMLElement;
    const children = Array.from(content.childNodes);

    expect(children[0].textContent).toBe("Next step");
    expect((children[children.length - 1] as HTMLElement).querySelector("svg")).not.toBeNull();
    expect(css).toMatch(/\.content\s*\{[^}]*display:\s*inline-flex/s);
  });

  it("R3: every built-in type renders its icon in the shared style", () => {
    ALL_TYPES.forEach((semanticType) => {
      const { container, unmount } = render(
        <ZestButton zest={{ semanticType }}>{`Label ${semanticType}`}</ZestButton>
      );

      const svg = container.querySelector("button svg") as SVGElement;
      expectSharedIconStyle(svg);
      expect(svg).toHaveAttribute("width", "1em");
      expect(svg).toHaveAttribute("height", "1em");

      unmount();
    });
  });

  it("R3: the icon box is sized in rem/em so it follows the small, medium and large button sizes", () => {
    (["sm", "md", "lg"] as const).forEach((size) => {
      const { container, unmount } = render(
        <ZestButton zest={{ semanticType: "search", visualOptions: { size } }}>
          Find
        </ZestButton>
      );

      const button = container.querySelector("button") as HTMLButtonElement;
      const svg = container.querySelector("button svg") as SVGElement;

      expect(button).toHaveClass(size);
      expect(svg).toHaveAttribute("width", "1em");
      expect(svg).toHaveAttribute("height", "1em");

      unmount();
    });

    expect(css).toMatch(/\.sm\s*\{[^}]*font-size:\s*[\d.]+rem/);
    expect(css).toMatch(/\.md\s*\{[^}]*font-size:\s*[\d.]+rem/);
    expect(css).toMatch(/\.lg\s*\{[^}]*font-size:\s*[\d.]+rem/);
    expect(css).toMatch(/\.zestIcon svg\s*\{[^}]*width:\s*1em[^}]*height:\s*1em/s);
  });

  it("R3: a disabled button dims the icon with the text instead of leaving it at full strength", () => {
    const { container } = render(
      <ZestButton disabled zest={{ semanticType: "delete" }}>
        Delete
      </ZestButton>
    );

    const button = container.querySelector("button") as HTMLButtonElement;
    const svg = container.querySelector("button svg") as SVGElement;

    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled");
    expect(svg).toHaveAttribute("stroke", "currentColor");
    expect(css).toMatch(
      /\.solid:disabled[^{]*\{[^}]*color:\s*var\(--zest-color-disabled-text\)/s
    );
    expect(css).toMatch(/\.icon\s*\{[^}]*\}/s);
    expect(css).not.toMatch(/\.icon\s*\{[^}]*color:/s);
  });

  it("R3: an icon on a filled success or danger variant stays readable against the background", () => {
    ["success", "danger"].forEach((variant) => {
      const { container, unmount } = render(
        <ZestButton zest={{ semanticType: "confirm", visualOptions: { variant: variant as "success" | "danger" } }}>
          Confirm
        </ZestButton>
      );

      const svg = container.querySelector("button svg") as SVGElement;
      expect(svg).toHaveAttribute("stroke", "currentColor");
      expect(container.querySelector("button")).toHaveClass("solid", variant);

      unmount();
    });

    expect(css).toMatch(
      /\.solid\.success\s*\{[^}]*color:\s*var\(--zest-color-success-text\)/s
    );
    expect(css).toMatch(
      /\.solid\.danger\s*\{[^}]*color:\s*var\(--zest-color-danger-text\)/s
    );
  });

  it("R3: the busy state shows its spinner instead of the type icon", async () => {
    let release: () => void = () => {};
    const onClick = () => new Promise<void>((resolve) => { release = resolve; });
    const { container } = render(
      <ZestButton zest={{ semanticType: "save", busyOptions: { minBusyDurationMs: 0 } }} onClick={onClick}>
        Save
      </ZestButton>
    );

    const button = container.querySelector("button") as HTMLButtonElement;
    fireEvent.click(button);

    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button.querySelector(".spinner")).not.toBeNull();
    expect(button.querySelector('svg[viewBox="0 0 24 24"]')).toBeNull();

    await act(async () => {
      release();
    });
  });

  it("R3: the success state shows its own check mark instead of the type icon", async () => {
    const { container } = render(
      <ZestButton
        zest={{
          semanticType: "save",
          busyOptions: { minBusyDurationMs: 0 },
          successOptions: { autoResetAfterMs: 100000 },
        }}
        onClick={() => Promise.resolve()}
      >
        Save
      </ZestButton>
    );

    const button = container.querySelector("button") as HTMLButtonElement;
    fireEvent.click(button);

    await waitFor(() => expect(button).toHaveAttribute("aria-busy", "false"));

    expect(button.querySelector(".animatedCheck")).not.toBeNull();
    expect(button.querySelectorAll("svg")).toHaveLength(1);
  });

  it("R3: the fail state shows its own cross instead of the type icon", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    const { container } = render(
      <ZestButton
        zest={{
          semanticType: "refresh",
          busyOptions: { minBusyDurationMs: 0 },
          successOptions: { showFailIcon: true, autoResetAfterMs: 100000 },
        }}
        onClick={() => Promise.reject(new Error("boom"))}
      >
        Refresh
      </ZestButton>
    );

    const button = container.querySelector("button") as HTMLButtonElement;
    fireEvent.click(button);

    await waitFor(() => expect(button.querySelector(".animatedX")).not.toBeNull());

    expect(button).toHaveAttribute("aria-busy", "false");
    expect(button.querySelector("svg:not(.animatedX)")).toBeNull();
  });

  it("R4: every built-in icon is hidden from screen readers and not focusable", () => {
    ALL_TYPES.forEach((semanticType) => {
      const { container, unmount } = render(
        <ZestButton zest={{ semanticType }}>{`Label ${semanticType}`}</ZestButton>
      );

      const svg = container.querySelector("button svg") as SVGElement;
      expect(svg).toHaveAttribute("aria-hidden", "true");
      expect(svg).toHaveAttribute("focusable", "false");
      expect(svg.querySelector("title")).toBeNull();

      unmount();
    });
  });

  it("R4: a built-in type with text children has an accessible name equal to that text", () => {
    ALL_TYPES.forEach((semanticType) => {
      const { unmount } = render(
        <ZestButton zest={{ semanticType }}>{`Label ${semanticType}`}</ZestButton>
      );

      expect(screen.getByRole("button", { name: `Label ${semanticType}` })).toBeInTheDocument();

      unmount();
    });
  });

  it("R4: an icon-only button with aria-label announces that label, not the icon", () => {
    render(<ZestButton aria-label="Search" zest={{ semanticType: "search" }} />);

    const button = screen.getByRole("button", { name: "Search" });
    expect(button).toHaveAccessibleName("Search");
    expect(button.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("R4: every built-in type gets the shared keyboard focus ring in light and dark themes", () => {
    ALL_TYPES.forEach((semanticType) => {
      (["light", "dark"] as const).forEach((theme) => {
        const { unmount } = render(
          <ZestButton zest={{ semanticType, theme }}>{`Label ${semanticType}`}</ZestButton>
        );

        const button = screen.getByRole("button");
        expect(button).toHaveClass(theme === "light" ? "force-light" : "force-dark");
        expect(button).toBeEnabled();

        unmount();
      });
    });

    expect(css).toMatch(
      /\.button:focus-visible\s*\{[^}]*box-shadow:[^;]*var\(--zest-focus-ring\)/s
    );
    expect(css).toMatch(/:root\s*\{[^}]*--zest-focus-ring:/s);
    expect(css).toMatch(
      /@media \(prefers-color-scheme: dark\)[\s\S]*?--zest-focus-ring:/s
    );
  });

  it("R8: an icon added later without the shared view box or stroke settings fails the style test", () => {
    expect(sharedStyleIsValid(SHARED_ICON_SETTINGS)).toBe(true);
    expect(sharedStyleIsValid({ ...SHARED_ICON_SETTINGS, viewBox: "0 0 16 16" })).toBe(false);
    expect(sharedStyleIsValid({ ...SHARED_ICON_SETTINGS, strokeWidth: "1.5" })).toBe(false);
    expect(sharedStyleIsValid({ ...SHARED_ICON_SETTINGS, strokeLinecap: "butt" })).toBe(false);
  });

  it("R8: no icon carries a script, event handler, external link, image or raw HTML", () => {
    const walk = (node: React.ReactNode) => {
      if (!React.isValidElement(node)) return;

      Object.entries(node.props as Record<string, unknown>).forEach(([key]) => {
        expect(key).not.toBe("dangerouslySetInnerHTML");
        expect(key).not.toMatch(/href/i);
        expect(key).not.toMatch(/^on[A-Z]/);
      });

      React.Children.forEach((node.props as { children?: React.ReactNode }).children, walk);
    };

    ZEST_ICON_NAMES.forEach((name) => {
      const element = ZEST_ICON_ELEMENTS[name];
      walk(element);

      const { container, unmount } = render(<>{element}</>);
      expect(container.innerHTML).not.toMatch(/<script|<image|href=|xlink:href| on\w+=/i);
      unmount();
    });
  });
});
