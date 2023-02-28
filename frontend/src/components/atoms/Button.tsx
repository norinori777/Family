import React from "react";
import { getButtonBackGroundTheme } from "../../util/theme/theme";

interface ButtonProps {
  label: string;
  theme: "primary" | "secondary" | "success" | "danger" | "warning" | "normal";
  type: "button" | "submit" | "reset" | undefined;
  action: () => void;
}

export const Button = (props: ButtonProps) => {
  const themeStyle = getButtonBackGroundTheme(props.theme);
  return (
    <>
      <button
        type={props.type}
        className={`text-white font-bold py-2 px-4 rounded ${themeStyle}`}
        onClick={props.action}
      >
        {props.label}
      </button>
    </>
  );
};
