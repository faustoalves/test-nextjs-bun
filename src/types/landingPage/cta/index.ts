import { ButtonProps } from "@/types/button";

export interface ArrowCTAItem {
  button: ButtonProps;
  arrowLabel?: string;
}
export interface ArrowCTAContent {
  list: ButtonProps[];
}

export interface LineCTAContent {
  list: ButtonProps[];
}

export interface InternalCTAContent {
  content: string;
  list: ButtonProps[];
}
