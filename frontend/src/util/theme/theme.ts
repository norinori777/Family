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

export const getBorderTheme = (theme: theme) => {
  switch (theme) {
    case "primary":
      return "border-primary-default hover:bg-lightPrimary-light";
    case "secondary":
      return "border-secondary-default hover:bg-lightSecondary-light";
    case "success":
      return "border-success-default hover:bg-lightSuccess-light";
    case "danger":
      return "border-danger-default hover:bg-lightDanger-light";
    case "warning":
      return "border-warning-default hover:bg-lightWarning-light";
    case "normal":
      return "border-normal-default hover:bg-lightNormal-light";
  }
};

export const getButtonBackGroundTheme = (theme: theme) => {
  switch (theme) {
    case "primary":
      return "bg-primary-default hover:bg-primary-dark";
    case "secondary":
      return "bg-secondary-default hover:bg-secondary-dark";
    case "success":
      return "bg-success-default hover:bg-success-dark";
    case "danger":
      return "bg-danger-default hover:bg-danger-dark";
    case "warning":
      return "bg-warning-default hover:bg-warning-dark";
    case "normal":
      return "bg-normal-default hover:bg-normal-dark";
  }
};
