"use client";
import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import DesktopPhone from "./DesktopPhone";
import DesktopUser from "./DesktopUser";
import { DesktopMenu } from "./DesktopMenu";

const DesktopNavBar = () => {
  const [activeBg, setActiveBg] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setActiveBg(window.pageYOffset > 40 ? true : false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeBg]);

  return (
    <div
      className={`fixed top-0 z-10 flex w-full items-center justify-center transition-all duration-500 ${
        activeBg
          ? "bg-secondary-100 bg-opacity-70 shadow-xl  backdrop-blur-lg backdrop-brightness-75 "
          : "bg-transparent bg-opacity-0 shadow-none"
      } `}
    >
      <div className="mx-auto flex w-full flex-row items-center justify-between px-2 py-2 xl:container">
        <Logo type="iconLogo" size={180} className="w-36" />
        <DesktopMenu />
        <DesktopUser />
        <DesktopPhone />
      </div>
    </div>
  );
};

export default DesktopNavBar;
