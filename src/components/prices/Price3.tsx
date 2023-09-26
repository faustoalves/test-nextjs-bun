import { FuneralTypeItem } from "@/types/landingPage/content/funeralType";
import { getStyle } from "@/utils/styles";
import React from "react";
import Icons from "../Icons";
import { IconList, IconProps } from "@/types/icons";
import Price3Item from "./Price3Item";

type Props = {
  title: string;
  content: string;
  style: string;
  funeralTypes: FuneralTypeItem[];
  id: string;
  buttonPrefix?: string;
};

const Price3 = ({
  title,
  content,
  style,
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
        className={`container mx-auto h-auto w-full pb-8 text-center md:py-16`}
      >
        <div className="flex flex-col items-center justify-start space-y-8">
          <h3 className="text-left md:text-right">{title}</h3>
          <span
            dangerouslySetInnerHTML={{ __html: content }}
            className={`w-full ${
              getStyle(style).htmlContent
            } text-left md:text-center`}
          />
          <div className="flex w-full flex-col justify-between gap-4 md:flex-row lg:grid-cols-4">
            {funeralTypes.map((funeral) => (
              <Price3Item
                funeralType={funeral}
                style={style}
                buttonPrefix={buttonPrefix ? buttonPrefix : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price3;
