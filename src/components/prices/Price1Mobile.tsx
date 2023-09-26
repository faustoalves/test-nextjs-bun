import { FuneralPrice } from "@/types/landingPage/content/funeralPrice";
import React from "react";
import Price1MobileItem from "./Price1MobileItem";

interface Props {
  className: string;
  style: string;
  id: string;
}

const Price1Mobile = ({
  title,
  funeralTypes,
  className,
  style,
  id,
}: FuneralPrice & Props) => {
  return (
    <section className={` ${className ? className : ""}`} id={id}>
      <div
        className={`container mx-auto flex flex-col items-center justify-center space-y-8`}
      >
        <h3 className="text-3xl">{title}</h3>
        {funeralTypes.map((item, index) => {
          return <Price1MobileItem {...item} />;
        })}
      </div>
    </section>
  );
};

export default Price1Mobile;
