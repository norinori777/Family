import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { Button, ButtonProps } from "./Button";

describe("Buttonコンポーネント", () => {
  const mockAction = jest.fn();
  const props: ButtonProps = {
    label: "ボタン",
    theme: "primary",
    type: "button",
    action: mockAction,
  };

  it("propsが正しく渡されること", () => {
    const { getByRole } = render(<Button {...props} />);
    const button = getByRole("button");
    expect(button).toHaveTextContent(props.label);
    expect(button).toHaveAttribute("type", props.type);
  });

  it("クリック時にactionが呼び出されること", () => {
    const { getByRole } = render(<Button {...props} />);
    fireEvent.click(getByRole("button"));
    expect(mockAction).toHaveBeenCalled();
  });
});

