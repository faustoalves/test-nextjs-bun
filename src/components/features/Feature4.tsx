import Button from "@/components/Button";
import ImageSliderMobile from "@/components/slider/ImageSliderMobile";
import { ButtonProps, ButtonSize } from "@/types/button";
import { ImageProps } from "@/types/image";
import { getStyle } from "@/utils/styles";
import React from "react";
import CImage from "../CImage";

type Props = {
  title: string;
  content: string;
  style: string;
  button: ButtonProps;
  image: ImageProps;
  imagePosition: string;
  id: string;
};

const Feature4 = ({
  title,
  content,
  style,
  button,
  image,
  imagePosition,
  id,
}: Props) => {
  return (
    <section
      className={`${getStyle(style).bg} ${
        getStyle(style).text
      } relative w-full`}
      id={id}
    >
      <div
        className={`relative flex h-full w-full flex-row md:absolute ${
          imagePosition === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <CImage
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.alt}
          className={`h-96 object-cover before:w-full md:h-full md:w-1/2 ${
            imagePosition === "right"
              ? "object-left-bottom"
              : "object-right-bottom"
          }`}
        />
      </div>
      <div
        className={`container relative mx-auto flex flex-row  ${
          imagePosition === "right" ? "justify-start" : "justify-end"
        }`}
      >
        <div
          className={`flex h-auto w-full flex-col px-6 md:w-1/2 ${
            imagePosition === "right" ? "md:pr-12" : "md:pl-12"
          } gap-6 py-12`}
        >
          <h3>{title}</h3>
          <div className={`order-2 flex flex-col items-start space-y-4`}>
            <span
              dangerouslySetInnerHTML={{ __html: content }}
              className={` ${getStyle(style).htmlContent}`}
            />
            {button && (
              <Button
                {...button}
                className="w-xl mr-auto"
                size={ButtonSize.LARGE}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature4;
