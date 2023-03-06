import React from "react";
import { getTextTheme } from "../../util/theme/theme";
import { theme } from "../../util/theme/types";

interface XCircleProps {
  theme: theme;
}

export const XCircle = (props: XCircleProps) => {
  const theme = getTextTheme(props.theme);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className={`w-6 h-6 ${theme}`}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </>
  );
};
