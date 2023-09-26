"use client";
import Cookies from "js-cookie";
import { v4 } from "uuid";

declare const window: Window;
declare const document: Document;

export const getWizardUrl = (extra: string = ""): string => {
  // const cookieStore = cookies();
  let canonical = getCanonical();
  let disableGTM = Cookies.get("disableGTM");
  let offerUUID = Cookies.get("offerUUID");
  let url = new URL("/wizard", "https://does.not.matter/");
  if (extra && extra.length > 1) {
    url.searchParams.set("funeralType", extra);
  }
  url.searchParams.set("offerUuid", v4());
  if (disableGTM) url.searchParams.set("disableGTM", disableGTM);
  offerUUID
    ? url.searchParams.set("recurring", "true")
    : url.searchParams.set("recurring", "false");
  url.searchParams.set("pageCanonical", canonical && canonical);
  return includeLinkSearchParams(url.pathname + url.search);
};

export const getCanonical = () => {
  try {
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLAnchorElement | null;
    if (canonical?.href) {
      return canonical!.href;
    } else {
      return window.location.href;
    }
  } catch {
    return "";
  }
};
export const includeLinkSearchParams = (_url: string) => {
  if (
    _url.includes("benu.at/") ||
    _url.startsWith("/") ||
    (_url.includes("localhost:3000/") && window)
  ) {
    if (typeof window !== "undefined") {
      if (_url.split("?").length > 1) {
        _url = _url + window.location.search.replace("?", "&");
      } else {
        _url = _url + window.location.search;
      }
    }
  }
  return _url;
};
