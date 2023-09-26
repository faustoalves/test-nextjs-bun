import Button from "@/components/Button";
import ImageSliderMobile from "@/components/slider/ImageSliderMobile";
import { ButtonProps, ButtonSize } from "@/types/button";
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

const Feature5 = ({
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
          <h3 className="col-span-1 text-center md:col-span-2">{title}</h3>
          <div className="flex flex-col items-start justify-start space-y-4">
            <span
              dangerouslySetInnerHTML={{ __html: firstContent }}
              className={` ${getStyle(style).htmlContent}`}
            />
          </div>
          <div className="flex flex-col items-start justify-start space-y-4">
            <span
              dangerouslySetInnerHTML={{ __html: secondContent }}
              className={` ${getStyle(style).htmlContent}`}
            />
          </div>
          <div className="col-span-1 flex flex-row items-center justify-center md:col-span-2">
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

export default Feature5;
