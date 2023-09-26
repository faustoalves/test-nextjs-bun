import { DomainList } from "../types/domains";
import { MainNavigation } from "../types/navigation";
import { SocialNetworks } from "../types/networks";

export const siteParams = {
  footerSignature: "© 2023 Benu GmbH. Alle Rechte vorbehalten.",
};

export const siteNavigation: MainNavigation = {
  domain: DomainList.BENU,
  redirects: [],
  rewrites: [],
  topMenu: [],
  footerMenu: [],
  social: [
    {
      social: SocialNetworks.FACEBOOK,
      path: "https://www.facebook.com/benubestattungen/",
    },
    {
      social: SocialNetworks.INSTAGRAM,
      path: "https://www.instagram.com/benu_bestattung/",
    },
    {
      social: SocialNetworks.TWITTER,
      path: "https://twitter.com/benu_bestattung",
    },
    {
      social: SocialNetworks.TIKTOK,
      path: "https://www.tiktok.com/@benu_bestattung",
    },
    {
      social: SocialNetworks.YOUTUBE,
      path: "https://www.youtube.com/channel/UCFpE_1W49Km7Ty53ovheswg",
    },
  ],
};
