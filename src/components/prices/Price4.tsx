import { FuneralTypeItem } from "@/types/landingPage/content/funeralType";
import { getStyle } from "@/utils/styles";
import React from "react";
import Button from "../Button";
import { ButtonProps, ButtonSize } from "@/types/button";
import Price4Item from "./Price4Item";

type Props = {
  title: string;
  content: string;
  style: string;
  button: ButtonProps;
  funeralType: FuneralTypeItem;
  id: string;
  buttonPrefix?: string;
};

const Price4 = ({
  title,
  content,
  style,
  button,
  funeralType,
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
        <h2 className="col-span-1 md:col-span-2 md:text-center">{title}</h2>
        <div className={`flex h-auto w-full flex-col justify-center space-y-8`}>
          <span
            dangerouslySetInnerHTML={{ __html: content }}
            className={` ${getStyle(style).htmlContent}`}
          />
          {button && (
            <Button
              {...button}
              size={ButtonSize.LARGE}
              className="w-xl mr-auto"
            />
          )}
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          {funeralType.plans.map((plan) => (
            <Price4Item
              style={style}
              plan={plan}
              buttonPrefix={
                buttonPrefix ? `${buttonPrefix}_${funeralType.funeralType}` : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price4;
