import Candle from "@/assets/drawing/Candle";
import CurvedArrow1 from "@/assets/drawing/CurvedArrow1";
import CurvedArrow2 from "@/assets/drawing/CurvedArrow2";
import DrawingIcons from "@/components/DrawingIcons";
import { IconArrowContentItem } from "@/types/landingPage/content";
import { getStyle } from "@/utils/styles";
import React from "react";

type Props = {
  title: string;
  style: string;
  items: IconArrowContentItem[];
  id: string;
};

const Step1 = ({ title, style, items, id }: Props) => {
  return (
    <section
      className={`${getStyle(style).bg} ${
        getStyle(style).text
      } w-full px-6 py-16`}
      id={id}
    >
      <div
        className={`container mx-auto flex flex-col items-center justify-center space-y-8 md:space-y-16`}
      >
        <h2 className="font-bold">{title}</h2>
        <div className="flex flex-col items-start justify-between  md:flex-row">
          {items.map((item, index) => {
            return (
              <>
                <IconArrowItem
                  total={items.length}
                  position={index + 1}
                  style={style}
                  {...item}
                />
                <ArrowSeparator
                  total={items.length}
                  position={index + 1}
                  style={style}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};
interface Position {
  total: number;
  position: number;
  style: string;
}
const ArrowSeparator = ({ total, position }: Position) => {
  if (position < total) {
    if (position % 2 === 0) {
      return (
        <CurvedArrow1
          size={100}
          className="mx-0 my-4 ml-12 w-16 rotate-90 opacity-40 md:-mx-12 md:mt-8 md:w-auto md:rotate-0"
        />
      );
    } else {
      return (
        <CurvedArrow2
          size={100}
          className="mx-0 my-4 w-16 rotate-90 opacity-40 md:-mx-12 md:mt-24 md:w-auto md:rotate-0"
        />
      );
    }
  } else return <></>;
};
const IconArrowItem = (item: IconArrowContentItem & Position) => {
  return (
    <div className="flex w-full flex-row items-center justify-center space-y-4  text-center md:w-1/3 md:flex-col md:space-y-0">
      <DrawingIcons
        icon={item.icon}
        size={148}
        className="mb-0 h-24 opacity-70  md:mb-4 md:h-40"
      />
      <div className="flex w-full flex-col items-center justify-center">
        <h3 className="text-[20px] font-bold md:text-[24px]">{item.title}</h3>
        <span
          dangerouslySetInnerHTML={{ __html: item.content }}
          className={`px-4 ${getStyle(item.style).htmlContent}`}
        />
      </div>
    </div>
  );
};

export default Step1;
