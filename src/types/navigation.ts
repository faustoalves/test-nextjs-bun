import { DomainList } from "./domains";
import { SocialNetworks } from "./networks";

export interface RedirectItem {
  source: string;
  destination: string;
  permanent: boolean;
}

export interface RewriteItem {
  source: string;
  destination: string;
}

export interface LinkItem {
  label: string;
  path: string;
}

export interface SubMenuGroup {
  label?: string;
  path?: string;
  col?: "col_1" | "col_2" | "col_3" | "col_4" | "col_5";
  items: LinkItem[];
}

export interface MenuGroup {
  label: string;
  path?: string;
  submenu?: SubMenuGroup[];
}

export interface SocialItem {
  social: SocialNetworks;
  path: string;
}

export interface MainNavigation {
  domain: DomainList;
  redirects: RedirectItem[];
  rewrites: RewriteItem[];
  topMenu: MenuGroup[];
  footerMenu: MenuGroup[];
  social?: SocialItem[];
  routesExperiments?: Map<string, string>;
}
