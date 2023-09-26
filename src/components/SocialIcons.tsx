import React from "react";
import { SocialNetworks } from "../types/networks";
import Facebook from "../assets/icons/social/Facebook";
import Youtube from "../assets/icons/social/Youtube";
import Tiktok from "../assets/icons/social/Tiktok";
import Instagram from "../assets/icons/social/Instagram";
import Linkedin from "../assets/icons/social/Lindekin";
import Twitter from "../assets/icons/social/Twitter";

type Props = {
  icon: SocialNetworks;
  size?: number;
  className?: string;
};

const SocialIcons = ({ icon, size = 16, className = "" }: Props) => {
  switch (icon) {
    case SocialNetworks.FACEBOOK:
      return <Facebook size={size} className={className} />;
    case SocialNetworks.TWITTER:
      return <Twitter size={size} className={className} />;
    case SocialNetworks.LINDEDIN:
      return <Linkedin size={size} className={className} />;
    case SocialNetworks.INSTAGRAM:
      return <Instagram size={size} className={className} />;
    case SocialNetworks.TIKTOK:
      return <Tiktok size={size} className={className} />;
    case SocialNetworks.YOUTUBE:
      return <Youtube size={size} className={className} />;
    default:
      return <></>;
  }
};

export default SocialIcons;
