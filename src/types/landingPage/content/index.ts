import { DrawingIconList } from "@/types/icons";

export type IconArrowContent = {
  title: string;
  list: IconArrowContentItem[];
};

export type IconArrowContentItem = {
  icon: DrawingIconList;
  title: string;
  content: string;
};

export type NumberArrowContentItem = {
  title: string;
  content: string;
};
