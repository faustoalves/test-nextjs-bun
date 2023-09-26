import { getHeaderCookie } from "@/utils/cookies";
import React, { ReactNode } from "react";

type Props = {
  children: React.ReactNode;
};

const ResponsiveMobile = ({ children }: Props) => {
  const viewport = getHeaderCookie("viewport");
  if (viewport === "desktop") {
    return <></>;
  } else {
    return <>{children}</>;
  }
};

export default ResponsiveMobile;
