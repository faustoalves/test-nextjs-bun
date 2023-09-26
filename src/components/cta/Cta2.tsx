import { ButtonProps, ButtonSize } from "@/types/button";
import React from "react";
import Button from "../Button";
import { getStyle } from "@/utils/styles";
import { ImageProps } from "@/types/image";
import CImage from "../CImage";

type Props = {
  title: string;
  content: string;
  style: string;
  imagePosition: string;
  image: ImageProps;
  buttons: ButtonProps[];
  id: string;
};

const Cta2 = ({
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
      className={`default-container relative
        flex h-auto w-full flex-col ${getStyle(style).bg} }  md:flex-row`}
      id={id}
    >
      <div
        className={`container mx-auto flex flex-col items-center md:flex-row ${
          getStyle(style).text
        } gap-6`}
      >
        {image && (
          <CImage
            {...image}
            src={image.url}
            className={`h-60 w-full object-contain md:h-96 md:w-1/2 ${
              imagePosition === "right" ? "md:order-3" : "md:order-1"
            }`}
          />
        )}

        <div className="order-2 flex flex-col items-start justify-start gap-6">
          {title.length > 2 && <h3>{title}</h3>}
          {content.length > 6 && (
            <span
              className="w-full md:text-center lg:w-3/4"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          {/* <div className="flex w-full flex-col items-center justify-start space-y-4 md:flex-row md:space-x-4 md:space-y-0"> */}
          {buttons.map((button) => (
            <Button
              {...button}
              size={ButtonSize.LARGE}
              className="!px-8 md:w-auto "
            />
          ))}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Cta2;
