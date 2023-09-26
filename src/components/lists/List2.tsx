import Button from "@/components/Button";
import ImageSliderMobile from "@/components/slider/ImageSliderMobile";
import {
  ButtonProps,
  ButtonSize,
  ButtonType,
  ButtonVariation,
  ButtonVisual,
} from "@/types/button";
import { IconList } from "@/types/icons";
import { ImageProps } from "@/types/image";
import { StoreListItem } from "@/types/landingPage/stores/store";
import { getStyle } from "@/utils/styles";
import React from "react";
import GoogleMapComponent from "../maps/GoogleMapComponent";

type Props = {
  title: string;
  content: string;
  style: string;
  button: ButtonProps;
  stores: StoreListItem[];
  id: string;
  items: PlaceList[];
};

type PlaceList = {
  title: string;
  list: PlaceListItem[];
};
type PlaceListItem = {
  city: string;
  name: string;
  address: string;
};

const List2 = ({ title, content, style, button, stores, id, items }: Props) => {
  // console.log(content);
  return (
    <section
      className={`${getStyle(style).bg} ${getStyle(style).text} w-full p-4`}
      id={id}
    >
      <div className={`container mx-auto h-auto w-full pb-8 md:py-16 `}>
        <div className="flex flex-col items-center justify-start gap-8 text-center">
          {title && title.length > 2 && <h3>{title}</h3>}
          <div className="grid w-full grid-cols-1">
            {items.map((item, index) => (
              <div
                className={`flex flex-col items-center justify-center gap-6 border-b-2 border-secondary-400/40 ${
                  getStyle(style).text
                } py-10`}
              >
                <h3>{item.title}</h3>
                <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row">
                  {item.list.map((subitem, index) => (
                    <div className="flex w-auto flex-col gap-0.5 px-2">
                      <h5>{subitem.city}</h5>
                      <p className="text-lg font-semibold">{subitem.name}</p>
                      <span className="flex flex-row items-center justify-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          fill="none"
                          viewBox="0 0 20 21"
                          className="mr-2 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M12.499 7.01l-3.217 3.24a.31.31 0 01-.442 0L7.5 8.9m9.166-.223c0 3.682-5 10-6.666 10-1.667 0-6.667-6.318-6.667-10a6.667 6.667 0 0113.333 0z"
                          ></path>
                        </svg>
                        <p>{subitem.address}</p>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <span dangerouslySetInnerHTML={{ __html: content }} />
          <Button
            {...button}
            className="w-xl mx-auto"
            size={ButtonSize.LARGE}
          />
        </div>
      </div>
    </section>
  );
};

export default List2;
