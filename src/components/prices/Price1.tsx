import React from "react";
import { FuneralPrice } from "@/types/landingPage/content/funeralPrice";
import ResponsiveDesktop from "@/components/basic/ResponsiveDesktop";
import ResponsiveMobile from "@/components/basic/ResponsiveMobile";
import Price1Desktop from "./Price1Desktop";
import Price1Mobile from "./Price1Mobile";

type Props = {
  selectFuneral?: "thumbs" | "dropdown";
  className?: string;
  style: string;
  id: string;
};

const Price1 = (props: FuneralPrice & Props) => {
  return (
    <>
      <ResponsiveDesktop>
        <Price1Desktop
          {...props}
          selectFuneral={props.selectFuneral}
          style={`default-container hidden w-full ${
            props.className ? props.className : "bg-white text-secondary"
          } md:flex`}
        />
      </ResponsiveDesktop>
      <ResponsiveMobile>
        <Price1Mobile
          {...props}
          className={`default-container w-full ${
            props.className ? props.className : "bg-white text-secondary"
          } md:hidden`}
        />
      </ResponsiveMobile>
    </>
  );
};

export default Price1;
