import React from "react";
import Button from "../../Button";
import {
  ButtonSize,
  ButtonVariation,
  ButtonVisual,
} from "../../../types/button";
import Logo from "@/components/Logo";
import DesktopNavBar from "@/components/navigation/DesktopNavBar";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SolidHeader = ({ children, className = "" }: Props) => {
  return <div className={`header ${className}`}>{children}</div>;
};

export default SolidHeader;
