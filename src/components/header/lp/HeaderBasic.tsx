import Logo from "@/components/Logo";
import BasicCTA from "@/components/landingPage/cta/BasicCTA";
import SolidHeader from "@/components/landingPage/header/SolidHeader";
import BoxTitle from "@/components/landingPage/header/titles/BoxTitle";
import { ButtonProps } from "@/types/button";
import React from "react";

type Props = {
  __component: string;
  style: string;
  title: string;
  subtitle: string;
  buttons: ButtonProps[];
  defaultTitleStyle: string;
};

const HeaderBasic = (props: Props) => {
  return (
    <SolidHeader className={`header-gradient-${props.style}`}>
      <Logo type="full" className="h-auto w-36 md:w-40 lg:w-48" />
      <BoxTitle defaultTitleStyle={props.defaultTitleStyle}>
        {props.title}
      </BoxTitle>
      <p className="subtitle md:w-3/4 lg:w-1/2">{props.subtitle}</p>
      <BasicCTA list={props.buttons} />
    </SolidHeader>
  );
};

export default HeaderBasic;
