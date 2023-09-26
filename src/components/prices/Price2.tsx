import { FuneralTypeItem } from "@/types/landingPage/content/funeralType";
import React from "react";
import Price2Item from "./Price2Item";
import { getStyle } from "@/utils/styles";

type Props = {
  title: string;
  style: string;
  funeralTypes: FuneralTypeItem[];
  id: string;
  buttonPrefix?: string;
};

const Price2 = ({ title, style, funeralTypes, id, buttonPrefix }: Props) => {
  return (
    <section
      className={`default-container w-full ${getStyle(style).bg} ${
        getStyle(style).text
      } md:flex`}
      id={id}
    >
      <div
        className={`container mx-auto flex flex-col items-center justify-center space-y-6`}
      >
        <h3 className="w-full text-center text-secondary-800 ">{title}</h3>
        <div className="grid w-full grid-cols-1 gap-6 py-4 md:grid-cols-4">
          {funeralTypes.map((item, index) => (
            <Price2Item
              {...item}
              style={style}
              buttonPrefix={buttonPrefix ? buttonPrefix : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price2;
