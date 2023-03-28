import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { HeaderTitle, HeaderTitleProps } from "./HeaderTitle";

const props: HeaderTitleProps = {
  icon: () => <div>Icon</div>,
  title: "Header Title",
  theme: "primary",
};

test("renders header title", () => {
  const { getByTestId } = render(<HeaderTitle {...props} />);
  const headerTitle = getByTestId("headerTitle");
  expect(headerTitle).toBeInTheDocument();
});
