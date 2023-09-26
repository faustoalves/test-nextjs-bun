import Button from "@/components/Button";
import ImageSliderMobile from "@/components/slider/ImageSliderMobile";
import { ButtonProps, ButtonSize } from "@/types/button";
import { getStyle } from "@/utils/styles";
import React from "react";
import CImage from "../CImage";
import { IconList } from "@/types/icons";

type Props = {
  title: string;
  content: string;
  style: string;
  buttons: ButtonProps[];
  id: string;
};

const Feature1 = ({ title, content, style, buttons, id }: Props) => {
  return (
    <section
      className={`${getStyle(style).bg} ${getStyle(style).text} w-full p-4`}
      id={id}
    >
      <div
        className={`container mx-auto grid h-auto w-full grid-cols-1 gap-12 md:grid-cols-2 md:py-16 `}
      >
        <CImage
          src={`${
            style.includes("rimary")
              ? "https://res.cloudinary.com/dkyl4jbxx/image/upload/v1693917571/Location_Map_Primary_2bc69c6915.png"
              : "https://res.cloudinary.com/dkyl4jbxx/image/upload/v1693917571/Location_Map_Secondary_1205e957dd.png"
          }`}
          width={575}
          height={265}
          alt="Location Map"
          className="mx-auto w-11/12"
        />
        <div className="flex flex-col items-start justify-center space-y-8">
          <h2>{title}</h2>

          <div
            className={`flex flex-col items-start justify-start space-y-4 ${
              getStyle(style).htmlContent
            }`}
          >
            <span dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          <div className="flex flex-wrap items-start justify-start gap-4">
            {buttons.map((button) => (
              <Button
                {...button}
                className="w-auto !px-4 !py-2 "
                size={ButtonSize.MEDIUM}
                icon={IconList.NONE}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
