import React from "react";
import { theme } from "../../util/theme/types";
import { getTextTheme } from "../../util/theme/theme";

interface ModalHeaderProps {
  title: string;
  theme: theme;
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const themeStyle = getTextTheme(props.theme);
  return <p className={`text-2xl ${themeStyle}`}>{props.title}</p>;
};
