import { ButtonProps, ButtonSize } from "@/types/button";
import React from "react";
import Button from "../Button";
import { getStyle } from "@/utils/styles";

type Props = {
  title: string;
  content: string;
  style: string;
  buttons: ButtonProps[];
  id: string;
};

const Cta1 = ({ title, content, style, buttons, id }: Props) => {
  return (
    <section
      className={`default-container relative
        flex h-auto w-full flex-col ${getStyle(style).bg} }  md:flex-row`}
      id={id}
    >
      {/* <p className="text-primary-900">a</p> */}
      <div
        className={`container mx-auto flex flex-col items-center ${
          getStyle(style).text
        } space-y-6`}
      >
        {title && title.length > 2 && <h3 className="text-center">{title}</h3>}
        {content.length > 6 && (
          <span
            className="w-full md:text-center lg:w-3/4"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
        <div className="flex w-full flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          {buttons.map((button) => (
            <Button {...button} size={ButtonSize.LARGE} className="w-2xl " />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cta1;
