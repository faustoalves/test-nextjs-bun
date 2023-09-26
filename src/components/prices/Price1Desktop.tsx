"use client";
import Button from "@/components/Button";
import CImage from "@/components/CImage";
import {
  ButtonSize,
  ButtonType,
  ButtonVariation,
  ButtonVisual,
} from "@/types/button";
import { IconList } from "@/types/icons";
import {
  FuneralPrice,
  FuneralPriceItem,
  FuneralPricePlan,
} from "@/types/landingPage/content/funeralPrice";
import { getStyle } from "@/utils/styles";
import React, { useState } from "react";

interface Props {
  style: string;
  selectFuneral?: "thumbs" | "dropdown";
  id: string;
}

const Price1Desktop = ({
  title,
  funeralTypes,
  style,
  selectFuneral,
  id,
}: FuneralPrice & Props) => {
  const [funeralPosition, setFuneralPosition] = useState(0);
  const setPosition = (index: number) => {
    setFuneralPosition(index);
  };
  const setSelectPosition = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setFuneralPosition(Number(event.target.value));
  };
  return (
    <section className={` `} id={id}>
      <div
        className={`container mx-auto flex flex-col items-center justify-center space-y-6`}
      >
        {selectFuneral === "thumbs" && (
          <>
            <h3 className="w-full text-center ">{`${title}`}</h3>
            <div className="grid w-full grid-cols-4 gap-8">
              {funeralTypes.map((item, index) => (
                <div
                  onClick={() => {
                    setFuneralPosition(index);
                  }}
                >
                  <FuneralTypeItem
                    {...item}
                    style={style}
                    active={index === funeralPosition}
                  />
                </div>
              ))}
            </div>
          </>
        )}
        <div
          className={`grid w-full grid-cols-3 gap-8 ${
            selectFuneral === "thumbs" &&
            "border border-secondary-200 bg-secondary-100  p-8"
          }`}
        >
          <FuneralPricePlanItems
            style={style}
            {...funeralTypes[funeralPosition]}
            key={funeralPosition}
          />
        </div>
      </div>
    </section>
  );
};

const FuneralTypeItem = ({
  name,
  image,
  style,
  active,
  label,
}: FuneralPriceItem & Props & { active: boolean }) => (
  <div className={`relative cursor-pointer bg-white`}>
    <CImage
      {...image}
      src={image.url}
      width={370}
      height={200}
      crop={true}
      className={`h-auto w-full ${active ? "opacity-100" : "opacity-60"}`}
    />
    <div
      className={`w-full bg-secondary ${
        active ? "bg-opacity-100" : "bg-opacity-60"
      } p-4 text-2xl font-bold text-white`}
    >
      {label}
    </div>
    {active && (
      <div className="absolute -mt-px flex w-full items-start justify-center">
        <svg
          width="48"
          height="21"
          viewBox="0 0 48 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-auto fill-secondary"
        >
          <path d="M0 0.757812H48L24 21L0 0.757812Z" />
        </svg>
      </div>
    )}
  </div>
);

const FuneralPricePlanItems = ({
  plans,
  name,
  id,
  funeralType,
  style,
}: FuneralPriceItem & Props) => {
  return (
    <>
      {plans.map((plan, index) => {
        return (
          <FuneralPricePlanItem
            id={""}
            {...plan}
            style={style}
            key={index}
            funeralType={funeralType}
          />
        );
      })}
    </>
  );
};

interface FuneralTypeProps {
  funeralType: string;
}

const FuneralPricePlanItem = ({
  planName,
  price,
  content,
  funeralType,
  style,
}: FuneralPricePlan & FuneralTypeProps & Props) => {
  return (
    <div className="w-full flex-grow flex-col border border-secondary-200 bg-white">
      <div className="w-full bg-secondary p-4 text-white">
        <p className="text-2xl font-bold">{planName}</p>
        <p className="space-x-2 text-2xl font-bold">
          <span className="mr-2 text-base font-normal">ab</span>
          {price}
        </p>
      </div>
      <span
        className={`space-y-4 px-6 py-4 text-lg text-black ${getStyle(style)}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      aaa
      <div className="w-full p-4">
        <Button
          label="Kosten Berechnen"
          visual={ButtonVisual.PRIMARY}
          variation={ButtonVariation.DEFAULT}
          size={ButtonSize.LARGE}
          className="w-full text-white"
          icon={IconList.ARROW_RIGHT}
          type={ButtonType.WIZARD}
          sendEvent={true}
          link={funeralType}
          buttonId={`price_${funeralType}_cta`.toLowerCase()}
        />
      </div>
    </div>
  );
};

export default Price1Desktop;
