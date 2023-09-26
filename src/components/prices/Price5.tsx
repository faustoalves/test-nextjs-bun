import { FuneralTypeItem } from "@/types/landingPage/content/funeralType";
import { getStyle } from "@/utils/styles";
import React from "react";
import Button from "../Button";
import { ButtonProps, ButtonSize } from "@/types/button";
import Price5Item from "./Price5Item";

type Props = {
  title: string;
  content: string;
  style: string;
  button: ButtonProps;
  funeralTypes: FuneralTypeItem[];
  id: string;
  buttonPrefix?: string;
};

const Price5 = ({
  title,
  content,
  style,
  button,
  funeralTypes,
  id,
  buttonPrefix,
}: Props) => {
  return (
    <section
      className={`${getStyle(style).bg} ${
        getStyle(style).text
      } w-full p-6 py-12 md:py-16`}
      id={id}
    >
      <div
        className={`container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2`}
      >
        <div className={`flex h-auto w-full flex-col justify-center space-y-8`}>
          <h2 className="col-span-1 md:col-span-2">{title}</h2>
          <span
            dangerouslySetInnerHTML={{ __html: content }}
            className={` ${getStyle(style).htmlContent}`}
          />
          {button && (
            <Button
              {...button}
              size={ButtonSize.LARGE}
              className="w-full md:mr-auto md:w-auto"
            />
          )}
        </div>
        <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 md:gap-6">
          {funeralTypes.map((item) => (
            <Price5Item
              style={style}
              {...item}
              buttonPrefix={buttonPrefix ? buttonPrefix : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price5;
