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
  boxTitle: string;
  boxContent: string;
};

const StoreList2 = ({
  title,
  content,
  style,
  button,
  id,
  boxTitle,
  boxContent,
  stores,
}: Props) => {
  return (
    <section
      className={`${getStyle(style).bg} ${getStyle(style).text} w-full`}
      id={id}
    >
      <div className={`container mx-auto h-auto w-full pb-8 md:py-16 `}>
        <div
          className={`mx-auto w-full gap-4 px-4 py-6 md:gap-12 lg:grid-cols-2`}
        >
          <div className="flex flex-col items-center justify-start gap-6 text-center">
            <h3>{title}</h3>
            <span dangerouslySetInnerHTML={{ __html: content }} />
            <Button
              {...button}
              className="w-xl mx-auto mb-4"
              size={ButtonSize.LARGE}
            />
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
              {stores.map((store) => (
                <a
                  href={store.storeLink}
                  target="_self"
                  className=" flex flex-grow "
                >
                  <div className="grid h-auto w-full grid-cols-1 shadow-md md:grid-cols-2">
                    <div
                      className={`order-3 flex w-full flex-row items-center justify-between md:order-1 ${
                        getStyle(style).bgInvert
                      } ${getStyle(style).textInvert} p-4`}
                    >
                      <div className=" flex h-full flex-col items-start justify-between gap-2 text-left ">
                        <span>
                          <p className="text-lg font-bold">{store.name}</p>
                          {store.storeDistrict && (
                            <p className="text-lg font-bold">
                              {store.storeDistrict}
                            </p>
                          )}
                        </span>
                        <span className="flex flex-row items-center justify-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="21"
                            fill="none"
                            viewBox="0 0 20 21"
                            className="mr-2"
                          >
                            <path
                              stroke="#FAFAFA"
                              strokeLinecap="round"
                              strokeWidth="2"
                              d="M12.499 7.01l-3.217 3.24a.31.31 0 01-.442 0L7.5 8.9m9.166-.223c0 3.682-5 10-6.666 10-1.667 0-6.667-6.318-6.667-10a6.667 6.667 0 0113.333 0z"
                            ></path>
                          </svg>
                          <span className="flex flex-row gap-1 md:flex-col md:gap-0">
                            <p>{store.storeAddress}</p>
                            <p>
                              {store.storeZipCode}, {store.storeCity}
                            </p>
                          </span>
                        </span>
                      </div>
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current"
                        >
                          <path
                            d="M2 23.2059L11.5536 12.7582L2 2.31054"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="order-2 h-44">
                      <GoogleMapComponent
                        url={store.storeGoogleMapsUrl}
                        width={299}
                        height={200}
                        activeLink={false}
                        latlng={store.latlng}
                        marker="default"
                        className="h-44 w-full"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {boxTitle && boxContent && (
              <div
                className={`grid w-full grid-cols-1 gap-6 p-8 md:grid-cols-3 ${
                  getStyle(style).bgInvert
                } ${getStyle(style).textInvert} text-left`}
              >
                <p className="text-3xl font-bold">{boxTitle}</p>
                <span
                  className={`md:col-span-2 ${
                    getStyle(style).htmlContent
                  } flex items-center justify-center`}
                >
                  <span dangerouslySetInnerHTML={{ __html: boxContent }} />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreList2;
