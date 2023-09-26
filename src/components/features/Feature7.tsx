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
import { getStyle } from "@/utils/styles";
import React from "react";
import CImage from "../CImage";

type Props = {
  title: string;
  content: string;
  style: string;
  buttons: ButtonProps[];
  image: ImageProps;
  imagePosition: string;
  id: string;
};

const Feature7 = ({
  title,
  content,
  style,
  buttons,
  image,
  imagePosition,
  id,
}: Props) => {
  return (
    <section
      className={`${getStyle(style).bg} ${getStyle(style).text} w-full py-16`}
      id={id}
    >
      <div className={`container mx-auto grid grid-cols-1 gap-12`}>
        <div
          className={`order-1 flex flex-col items-start justify-start space-y-4 px-6 md:px-0 ${
            imagePosition === "left" ? "md:order-2" : "md:order-1"
          }`}
        >
          <span className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <h3>{title}</h3>
            <div
              className={`order-2 flex flex-col items-start justify-start space-y-4`}
            >
              <span
                dangerouslySetInnerHTML={{ __html: content }}
                className={` ${getStyle(style).htmlContent}`}
              />
              <div className="flex flex-col items-center justify-center md:flex-row">
                {buttons.map((button) => (
                  <Button
                    {...button}
                    className="w-xl mr-auto"
                    size={ButtonSize.LARGE}
                  />
                ))}
              </div>
            </div>
          </span>
        </div>

        <CImage
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.alt}
          className={`order-1 h-64 w-full object-cover  ${
            imagePosition === "left" ? "md:order-1" : "md:order-2"
          }`}
        />
      </div>
    </section>
  );
};

export default Feature7;
