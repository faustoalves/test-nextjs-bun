import { NumberArrowContentItem } from "@/types/landingPage/content";
import { getStyle } from "@/utils/styles";
import React from "react";
import DrawingIcons from "../DrawingIcons";
import { NumberedDrawList } from "@/types/icons";
import SmallArrowRight from "@/assets/drawing/SmallArrowRight";
import SmallArrowLeft from "@/assets/drawing/SmallArrowLeft";
import SmallArrowDown from "@/assets/drawing/SmallArrowDown";

type Props = {
  title: string;
  style: string;
  content: string;
  items: NumberArrowContentItem[];
  id: string;
};

const Step2 = ({ title, content, style, items, id }: Props) => {
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
        <div
          className={`flex w-full flex-col items-start justify-start space-y-4 md:w-11/12 md:text-center ${
            getStyle(style).htmlContent
          }`}
        >
          <span dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className="flex flex-col items-center justify-between gap-6 md:gap-0">
          {items.map((item, index) => (
            <StepItem
              item={item}
              position={index}
              last={index === items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type ItemProps = {
  item: NumberArrowContentItem;
  position: number;
  last: boolean;
};

export const StepItem = ({ item, position, last }: ItemProps) => {
  return (
    <div className="relative flex w-full flex-row items-center justify-start gap-4 md:w-4/6 md:gap-8">
      {/* {position % 2 === 1 && <div className="min-w-[36px]" />} */}
      <div
        className={`relative flex h-48 flex-col items-center justify-between opacity-60 md:min-w-[140px] md:justify-start ${
          position % 2 === 1 && "md:ml-12"
        }`}
      >
        <DrawingIcons
          icon={NumberedDrawList[position]}
          size={110}
          className={`w-16 md:mb-4 md:mt-4 md:w-24`}
        />
        {last ? (
          <></>
        ) : position % 2 === 0 && !last ? (
          <div className="hidden md:block">
            <SmallArrowRight />
          </div>
        ) : (
          <div className="hidden md:block">
            <SmallArrowLeft />
          </div>
        )}
        <div className="block md:hidden">
          <SmallArrowDown />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h4>{item.title}</h4>
        <span dangerouslySetInnerHTML={{ __html: item.content }}></span>
      </div>
    </div>
  );
};

export default Step2;
