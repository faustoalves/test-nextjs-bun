// "use client";
import { getHeaderCookie } from "@/utils/cookies";
import { cookies, headers } from "next/headers";
import React, { ReactNode } from "react";

type Props = {
  children: React.ReactNode;
};

const ResponsiveDesktop = ({ children }: Props) => {
  const viewport = getHeaderCookie("viewport");
  if (viewport === "mobile") {
    return <></>;
  } else {
    return <>{children}</>;
  }
};

export default ResponsiveDesktop;
