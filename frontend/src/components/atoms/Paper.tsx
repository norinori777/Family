import React from "react";
import { ReactNode } from "react";
import { theme } from "../../util/theme/types";
import { getDrakBorderBackGroundTheme } from "../../util/theme/theme";

interface PaperProps {
  children: ReactNode;
  theme: theme;
}

export const Paper = (props: PaperProps) => {
  const themeStyle = getDrakBorderBackGroundTheme(props.theme);
  return (
    <section className={`rounded box-border border-solid border ${themeStyle}`}>
      {props.children}
    </section>
  );
};
