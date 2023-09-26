import { ImageProps } from "@/types/image";

export interface FuneralTypeItem {
  id: string;
  name: string;
  label: string;
  link: string;
  funeralType: string;
  image: ImageProps;
  plans: FuneralTypePlan[];
  table: string[][];
}
export interface FuneralTypePlan {
  planName: string;
  price: string;
  serviceTitle: string;
  serviceItems: string;
  content: string;
}
