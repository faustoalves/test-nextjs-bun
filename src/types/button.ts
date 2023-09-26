import { GAEvents } from "./events";
import { IconList } from "./icons";

export interface ButtonProps {
  label: string;
  extraLabel?: string;
  visual?: ButtonVisual;
  variation?: ButtonVariation;
  size?: ButtonSize;
  icon?: IconList;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  buttonId?: string;
  type: ButtonType;
  link: string;
  sendEvent?: boolean;
  event?: ButtonEventsProps;
}

export interface ButtonEventsProps {
  eventName: GAEvents | string;
  eventCategory: string;
  eventAction?: string;
  eventLabel?: string;
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum ButtonVisual {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ALTERNATIVE = "alternative",
  EXTRA = "extra",
  RED = "red",
  GREEN = "green",
  WHITE_TEXT = "gray",
}

export enum ButtonVariation {
  DEFAULT = "default",
  INVERT = "invert",
  TEXT = "text",
  WHITE = "white",
}

export enum ButtonType {
  WIZARD = "wizard",
  PHONE = "phone",
  INTERNAL = "internal_link",
  EXTERNAL = "external_link",
  ACTION = "action",
  SCROLL = "scroll",
}
