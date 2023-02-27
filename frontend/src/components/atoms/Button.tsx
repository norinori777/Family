import React from "react";

interface ButtonProps {
  label: string;
  theme: "primary" | "secondary" | "success" | "danger" | "warning" | "normal";
  type: "button" | "submit" | "reset" | undefined;
  action: () => void;
}

export const Button = (props: ButtonProps) => {
  const baseStyle = "text-white font-bold py-2 px-4 rounded ";
  const themeStyle =
    "bg-" + props.theme + "-default hover:bg-" + props.theme + "-dark";
  return (
    <>
      <button
        type={props.type}
        className={themeStyle + baseStyle}
        onClick={props.action}
      >
        {props.label}
      </button>
    </>
  );
};
