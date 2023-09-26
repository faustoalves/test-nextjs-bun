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

type Props = {
  title: string;
  firstContent: string;
  secondContent: string;
  style: string;
  buttons: ButtonProps[];
  images: ImageProps[];
  id: string;
};

const Feature8 = ({
  title,
  firstContent,
  secondContent,
  style,
  buttons,
  images,
  id,
}: Props) => {
  return (
    <section
      className={`${getStyle(style).bg} ${getStyle(style).text}`}
      id={id}
    >
      <div className={`container mx-auto h-auto w-full py-6 pb-8 md:py-16  `}>
        <h3 className="mb-4 px-8 md:text-center">{title}</h3>

        <ImageSliderMobile sliderImageUrl={images} />
        <div
          className={`mx-auto grid w-full grid-cols-1 gap-4 px-8 py-6 md:gap-12 md:bg-secondary-100 lg:w-11/12 lg:grid-cols-2`}
        >
          <div className="flex flex-col items-start justify-start space-y-4">
            <span
              dangerouslySetInnerHTML={{ __html: firstContent }}
              className={` ${getStyle(style).htmlContent}`}
            />
          </div>
          <div
            className={`flex flex-col items-start justify-start space-y-4 ${
              getStyle(style).htmlContent
            }`}
          >
            <span
              dangerouslySetInnerHTML={{ __html: secondContent }}
              className={` ${getStyle(style).htmlContent}`}
            />
          </div>
        </div>
        <div
          className={`mx-auto flex w-full flex-col items-center justify-center gap-4 px-8 py-6 md:flex-row md:gap-12 md:border-t md:border-secondary-200/60 md:bg-secondary-100 lg:w-11/12`}
        >
          {buttons.map((button) => (
            <Button {...button} className="w-xl" size={ButtonSize.LARGE} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature8;
