import React from "react";
import { render } from "@testing-library/react";
import SpinnerIcon from "../UI/SpinnerIcon";

describe("SpinnerIcon", () => {
  it("renders an svg with the animate-spin class", () => {
    const { container } = render(<SpinnerIcon />);

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("animate-spin");
  });
});
