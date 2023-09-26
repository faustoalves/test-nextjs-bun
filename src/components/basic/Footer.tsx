import React from "react";

import { siteNavigation, siteParams } from "../../data";
import SocialIcons from "../SocialIcons";
import Logo from "../Logo";

type Props = {
  className?: string;
};

const Footer = ({ className }: Props) => {
  return (
    <section
      className={`flex w-full flex-col space-y-8 ${
        className ? className : "bg-secondary-700"
      } fill-current py-8 text-white md:py-12 lg:py-16`}
    >
      <div className="container mx-auto flex flex-col items-start justify-between space-y-4 px-4 text-xs md:flex-row md:items-center md:space-y-0 md:text-sm">
        <a href="https://www.benu.at">
          <Logo type="iconLogo" className="h-10 w-auto md:h-12" />
        </a>

        <div>{siteParams.footerSignature}</div>
        <div className="flex flex-row space-x-2 ">
          {siteNavigation.social?.map((item) => {
            return (
              <a
                className="z-0 scale-100 p-1 opacity-80 transition-transform duration-200 hover:scale-110 hover:opacity-100"
                aria-label={`Access ${item.social} network`}
                href={item.path}
                target="_blank"
              >
                <SocialIcons
                  icon={item.social}
                  size={16}
                  className="h-5 w-5 md:h-4 md:w-4"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
