import React from "react";
import { getBorderTheme, getTextTheme } from "../../util/theme/theme";

interface ContainIconButtonProps {
  label: string;
  theme: "primary" | "secondary" | "success" | "danger" | "warning" | "normal";
  type: "button" | "submit" | "reset" | undefined;
  icon: React.ElementType;
  action: () => void;
}

export const ContainIconButton = (props: ContainIconButtonProps) => {
  const borderTheme = getBorderTheme(props.theme);
  const textTheme = getTextTheme(props.theme);
  const Icon = props.icon;
  return (
    <button
      type={props.type}
      className={`inline-flex box-border border-solid border ${borderTheme} rounded-lg p-2 items-center cursor-pointer`}
    >
      <Icon theme={props.theme} />
      <span className={` ml-1 font-medium ${textTheme}`}>{props.label}</span>
    </button>
  );
};

// className={`box-border border-solid bottom-2 border-black rounded cursor-pointer`}
