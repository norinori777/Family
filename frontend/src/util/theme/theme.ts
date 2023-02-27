import { theme } from "./types";

export const getTextTheme = (theme: theme) => {
  switch (theme) {
    case "primary":
      return "text-primary-default";
    case "secondary":
      return "text-secondary-default";
    case "success":
      return "text-success-default";
    case "danger":
      return "text-danger-default";
    case "warning":
      return "text-warning-default";
    case "normal":
      return "text-normal-default";
  }
};
