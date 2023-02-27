import React from "react";
import { getTextTheme } from "../../util/theme/theme";
import { theme } from "../../util/theme/types";

interface HeaderTitleProps {
  title: string;
  theme: theme;
}

export const HeaderTitle = (props: HeaderTitleProps) => {
  const themeStyle = getTextTheme(props.theme);
  return (
    <>
      <p
        data-testid="headerTitle"
        className={`text-3xl ${themeStyle} w-52 border-r-2 border-slat-50 p-3`}
      >
        {props.title}
      </p>
    </>
  );
};
