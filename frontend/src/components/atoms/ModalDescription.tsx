import React from "react";
import { theme } from "../../util/theme/types";
import { getTextDarkTheme } from "../../util/theme/theme";

interface ModalDescriptionProps {
  description: string;
  theme: theme;
}

export const ModalDescription = (props: ModalDescriptionProps) => {
  const themeStyle = getTextDarkTheme(props.theme);
  return <p className={` text-base ${themeStyle}`}>{props.description}</p>;
};
