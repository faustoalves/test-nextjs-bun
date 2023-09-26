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
  button: ButtonProps;
  images: ImageProps[];
  id: string;
};

const Feature1 = ({
  title,
  firstContent,
  secondContent,
  style,
  button,
  images,
  id,
}: Props) => {
  return (
    <section
      className={`${getStyle(style).bg} ${getStyle(style).text}`}
      id={id}
    >
      <div className={`container mx-auto h-auto w-full pb-8 md:py-16 `}>
        <ImageSliderMobile sliderImageUrl={images} />
        <div
          className={`mx-auto grid w-full grid-cols-1 gap-4 px-8 py-6 md:gap-12 md:bg-secondary-100 lg:w-11/12 lg:grid-cols-2`}
        >
          <div className="flex flex-col items-start justify-start space-y-4">
            <h3>{title}</h3>
            <span dangerouslySetInnerHTML={{ __html: firstContent }} />
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
            {button && (
              <Button
                {...button}
                className="mr-auto w-auto"
                size={ButtonSize.LARGE}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
