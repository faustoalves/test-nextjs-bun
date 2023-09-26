import { getStyle } from "@/utils/styles";
import React from "react";

type Props = {
  title: string;
  firstContent: string;
  secondContent: string;
  style: string;
  id: string;
};

const Feature6 = ({ title, firstContent, secondContent, style, id }: Props) => {
  return (
    <section
      className={`${getStyle(style).bg} ${getStyle(style).text} px-4`}
      id={id}
    >
      <div
        className={`container mx-auto flex h-auto w-full flex-col gap-8 pb-8 md:py-16`}
      >
        <h3 className="col-span-1 text-center md:col-span-2">{title}</h3>
        <div className="flex w-full flex-col items-start justify-start space-y-4 text-center">
          <span
            dangerouslySetInnerHTML={{ __html: firstContent }}
            className={` ${getStyle(style).htmlContent} w-full`}
          />
        </div>
        <div className="flex flex-col items-start justify-start space-y-4">
          <span
            dangerouslySetInnerHTML={{ __html: secondContent }}
            className={`${getStyle(style).htmlContent} dual-column`}
          />
        </div>
      </div>
    </section>
  );
};

export default Feature6;
