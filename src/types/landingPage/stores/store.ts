import { ButtonProps } from "@/types/button";
import { ImageProps } from "@/types/image";

export interface StoreContent {
  image: ImageProps;
  title: string;
  content: string;
  buttons: ButtonProps[];
  list: StoreListItem[];
}
export interface StoreListItem {
  name: string;
  storeName: string;
  storePhone: string;
  storeTime: string;
  storeZipCode: string;
  storeCity: string;
  storeEmail: string;
  latlng: string;
  storeGoogleMapsUrl: string;
  storeAddress: string;
  storeLink: string;
  storeImage: ImageProps;
  storeDistrict?: string;
}
