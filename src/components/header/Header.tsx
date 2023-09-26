import { ButtonProps } from "@/types/button";
import React from "react";
import dynamic from "next/dynamic";
const HeaderArrow = dynamic(() => import("./lp/HeaderArrow"));
const HeaderBasic = dynamic(() => import("./lp/HeaderBasic"));

type Props = {
  __component: string;
  style: string;
  title: string;
  subtitle: string;
  buttons: ButtonProps[];
  defaultTitleStyle: string;
  buttonHighlight?: string;
};

const LPHeader = (props: Props) => {
  switch (props.__component) {
    case "lp-header.lp-header-arrow":
      return <HeaderArrow {...props} />;
    default:
      return <></>;
  }
};

const Header = (props: any) => {
  if (props.__component.startsWith("lp-header.")) {
    return <LPHeader {...props} />;
  } else {
    return <></>;
  }
};

export default Header;
