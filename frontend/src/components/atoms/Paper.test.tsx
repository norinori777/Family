import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Paper } from "./Paper";

describe("Paper", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <Paper theme="primary">
        <p>Test content</p>
      </Paper>
    );

    expect(getByText("Test content")).toBeInTheDocument();
  });

  it("applies correct theme style to section element", () => {
    const { container } = render(
      <Paper theme="primary">
        <p>Test content</p>
      </Paper>
    );

    expect(container.firstChild).toHaveClass("rounded box-border border-solid border border-primary-dark bg-primary-default");
  });
});
