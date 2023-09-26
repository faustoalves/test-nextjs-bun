"use client";

import React from "react";
import Icons from "../Icons";
import { getStyle } from "@/utils/styles";
import { FuneralTypeItem } from "@/types/landingPage/content/funeralType";
import { IconList } from "@/types/icons";
import { StatsigSendEvent } from "@/utils/events";
import { getWizardUrl } from "@/utils/wizard";

type Props = {
  style: string;
  funeralType: FuneralTypeItem;
  buttonPrefix: string;
};

const Price3Item = ({ style, funeralType, buttonPrefix }: Props) => {
  const handlerEvent = async () => {
    if (buttonPrefix?.length > 2) {
      await StatsigSendEvent(
        `${buttonPrefix}${funeralType.funeralType.toLowerCase()}`
      );
    }
  };
  return (
    <a
      className="flex w-auto cursor-pointer flex-row items-center justify-start space-x-2 hover:underline"
      href={getWizardUrl()}
      id={
        buttonPrefix?.length > 2
          ? `${buttonPrefix}${funeralType.funeralType.toLowerCase()}`
          : ""
      }
      onClick={handlerEvent}
    >
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-full ${
          getStyle(style).bgInvert
        } ${getStyle(style).textInvert}`}
      >
        <Icons icon={funeralType.funeralType as IconList} />
      </span>
      <span className="flex flex-col items-start justify-start">
        <p className="text-lg font-bold underline">{funeralType.label}</p>
        <p className="text-base">
          ab <span className="font-bold">{funeralType.plans[0].price} €</span>
        </p>
      </span>
    </a>
  );
};

export default Price3Item;
