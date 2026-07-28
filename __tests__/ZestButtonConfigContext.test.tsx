import React from "react";
import { render, screen } from "@testing-library/react";
import ZestButtonConfigContext, { useZestButtonConfig } from "../UI/ZestButtonConfigContext";

const ConfigReader: React.FC = () => {
  const config = useZestButtonConfig();
  return <div data-testid="config">{JSON.stringify(config ?? null)}</div>;
};

describe("ZestButtonConfigContext / useZestButtonConfig", () => {
  it("returns undefined when consumed outside a provider", () => {
    render(<ConfigReader />);

    expect(screen.getByTestId("config")).toHaveTextContent("null");
  });

  it("returns the exact value supplied by the nearest Provider", () => {
    const config = { defaultProps: { theme: "dark" as const } };

    render(
      <ZestButtonConfigContext.Provider value={config}>
        <ConfigReader />
      </ZestButtonConfigContext.Provider>
    );

    expect(screen.getByTestId("config")).toHaveTextContent(JSON.stringify(config));
  });
});
