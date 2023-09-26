import Button from "@/components/Button";
import CImage from "@/components/CImage";
import {
  ButtonSize,
  ButtonType,
  ButtonVariation,
  ButtonVisual,
} from "@/types/button";
import { IconList } from "@/types/icons";
import { FuneralTypeItem } from "@/types/landingPage/content/funeralType";
import { StatsigSendEvent } from "@/utils/events";
import { getStyle } from "@/utils/styles";
import React from "react";

type Props = {
  style: string;
  buttonPrefix: string;
};

const Price2Item = ({
  name,
  funeralType,
  label,
  image,
  plans,
  table,
  style,
  buttonPrefix,
}: FuneralTypeItem & Props) => {
  const handlerEvent = async () => {
    if (buttonPrefix?.length > 2) {
      await StatsigSendEvent(`${buttonPrefix}${funeralType.toLowerCase()}`);
    }
  };

  return (
    <div className="flex h-auto w-full flex-col border border-secondary-400 bg-white">
      <CImage
        {...image}
        src={image.url}
        width={400}
        height={250}
        crop={true}
        className="h-36 w-full"
      />
      <div className="flex flex-col bg-secondary p-4 text-white">
        <p className="text-xl font-bold">{label}</p>
        <p className="text-xl font-bold">
          <span className="text-base font-normal">ab </span>
          {plans[0].price} €
        </p>
      </div>
      <span
        className={`flex flex-grow p-4 text-base ${
          getStyle(style).htmlContent
        }`}
        dangerouslySetInnerHTML={{ __html: plans[0].content }}
      />
      <div className="flex flex-col items-start justify-start bg-primary-700 p-1">
        <Button
          label="Jetzt Planen"
          variation={ButtonVariation.TEXT}
          icon={IconList.ARROW_RIGHT}
          className="left mx-0 mx-auto w-full"
          type={ButtonType.WIZARD}
          link="CREMATION"
          buttonId={
            buttonPrefix?.length > 2
              ? `${buttonPrefix}${funeralType.toLowerCase()}`
              : ""
          }
          sendEvent={true}
          visual={ButtonVisual.WHITE_TEXT}
          size={ButtonSize.LARGE}
        />
      </div>
    </div>
  );
};

export default Price2Item;
