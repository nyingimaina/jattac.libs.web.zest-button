import React from "react";
import { render, screen } from "@testing-library/react";
import ZestButtonConfigProvider from "../UI/ZestButtonConfigProvider";
import { useZestButtonConfig } from "../UI/ZestButtonConfigContext";

const ConfigReader: React.FC = () => {
  const config = useZestButtonConfig();
  return <div data-testid="config">{config?.defaultProps?.theme ?? "none"}</div>;
};

describe("ZestButtonConfigProvider", () => {
  it("renders its children", () => {
    render(
      <ZestButtonConfigProvider config={{}}>
        <span>child content</span>
      </ZestButtonConfigProvider>
    );

    expect(screen.getByText("child content")).toBeInTheDocument();
  });

  it("makes the supplied config available to descendants via useZestButtonConfig", () => {
    render(
      <ZestButtonConfigProvider config={{ defaultProps: { theme: "dark" } }}>
        <ConfigReader />
      </ZestButtonConfigProvider>
    );

    expect(screen.getByTestId("config")).toHaveTextContent("dark");
  });
});
