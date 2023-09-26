import React from "react";
import { siteNavigation } from "../data";
import { DomainList } from "../types/domains";
import Brand from "../assets/logos/benu/Brand";
import IconBrand from "../assets/logos/benu/IconBrand";
import Full from "../assets/logos/benu/Full";
import Icon from "../assets/logos/benu/Icon";

interface LogoProps {
  type: "icon" | "logo" | "iconLogo" | "full";
  size?: number;
  className?: string;
}

const Logo = ({ type, size = 46, className = "" }: LogoProps) => {
  if (siteNavigation.domain === DomainList.BENU) {
    if (type === "icon") {
      return <Icon size={size} className={className} />;
    } else if (type === "logo") {
      return <Brand size={size} className={className} />;
    } else if (type === "iconLogo") {
      return <IconBrand size={size} className={className} />;
    } else if (type === "full") {
      return <Full size={size} className={className} />;
    }
  } else if (siteNavigation.domain === DomainList.CLEVER) {
    return <div className={className}>Icon</div>;
  }
  return <></>;
};

export default Logo;
