import Button from "@/components/Button";
import CImage from "@/components/CImage";
import { ButtonProps, ButtonSize } from "@/types/button";
import { ImageProps } from "@/types/image";
import { StoreContent, StoreListItem } from "@/types/landingPage/stores/store";
import React from "react";

type Props = {
  style: string;
  title: string;
  content: string;
  image: ImageProps;
  button: ButtonProps;
  stores: StoreListItem[];
  className?: string;
  id: string;
  infoFirst?: boolean;
};

const StoreList = ({
  style,
  title,
  content,
  image,
  button,
  stores,
  className,
  id,
  infoFirst,
}: Props) => {
  return (
    <>
      <section
        className={` ${
          style.includes("rimary") ? "bg-primary" : "bg-secondary"
        } relative flex h-auto w-full flex-col text-secondary-900 md:flex-row`}
        id={id}
      >
        <div className="grid h-full w-full grid-cols-1 md:absolute md:grid-cols-2">
          <div className="flex h-full w-full overflow-auto ">
            <CImage
              src={image.url}
              width={800}
              height={400}
              className="left-0  flex h-full w-full object-cover"
              priority={true}
              quality={99}
            />
          </div>
          <div className="hidden h-auto w-full bg-white md:block"></div>
        </div>
        <div className="relative top-0 h-auto w-full ">
          <div className="container mx-auto flex h-full flex-row justify-end ">
            <div className="flex w-full flex-col space-y-4 bg-white p-6 md:w-2/3 md:p-8 xl:pr-0">
              <h3>{title}</h3>
              <div
                className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${
                  stores.length % 3 === 0 || stores.length > 4
                    ? "lg:grid-cols-3"
                    : "lg:grid-cols-2"
                } md:min-h-[350px] ${infoFirst ? "order-3" : ""}`}
              >
                {stores.map((item, index) => (
                  <StoreItem {...item} key={index} />
                ))}
              </div>
              <span dangerouslySetInnerHTML={{ __html: content }} />
              <div className="flex flex-row items-start justify-start">
                <Button
                  {...button}
                  size={ButtonSize.LARGE}
                  className="w-xl mb-4 mr-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={` ${
          className ? className : ""
        } flex h-full w-full flex-col text-secondary-900 md:flex-row`}
      ></section>
    </>
  );
};

const StoreItem = ({
  storeImage,
  storeName,
  storeAddress,
  storeZipCode,
  storeCity,
  storeLink,
}: StoreListItem) => {
  return (
    <a
      className="group relative flex h-full w-full flex-grow flex-col overflow-hidden text-white"
      href={storeLink}
      target="_self"
    >
      <CImage
        src={storeImage.url}
        width={400}
        height={300}
        className="relative h-full w-full scale-105 object-cover transition-all duration-300 group-hover:scale-125 "
        crop={true}
        priority={true}
      />
      <div className=" absolute bottom-0 flex h-auto w-full flex-row items-center justify-between  bg-black bg-opacity-50 p-2 backdrop-blur-sm">
        <span className="flex flex-col">
          <p className="text-lg font-bold">{storeName}</p>
          <span className="flex flex-row items-center justify-start ">
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
            <span
              dangerouslySetInnerHTML={{
                __html: `${storeAddress}<br/>${storeZipCode} ${storeCity}`,
              }}
              className="text-sm leading-5"
            />
          </span>
        </span>
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
    </a>
  );
};

export default StoreList;
