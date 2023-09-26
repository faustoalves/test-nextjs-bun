import { ImageProps } from "@/types/image";

export interface FuneralPriceItem {
  id: string;
  name: string;
  label: string;
  link?: string;
  funeralType: "CREMATION" | "BURIAL" | "TREE_FUNERAL" | "SEA_FUNERAL";
  image: ImageProps;
  plans: FuneralPricePlan[];
  table: string[][];
}

export interface FuneralPricePlan {
  // highlight?: boolean;
  planName: string;
  price: string;
  serviceTitle: string;
  serviceItems: string;
  content: string;
}

export interface FuneralPrice {
  title: string;
  style: string;
  funeralTypes: FuneralPriceItem[];
}
