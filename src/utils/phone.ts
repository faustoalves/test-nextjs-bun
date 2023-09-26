import Cookie from "js-cookie";
import { useRouter } from "next/router";

export type TPhoneItem = {
  type: string;
  label: string;
  link: string;
};

export const enum TLocationList {
  BURGENLAND = "1",
  CARINTHIA = "2",
  LOWER_AUSTRIA = "3",
  UPPER_AUSTRIA = "4",
  SALZBURB = "5",
  STYRIA = "6",
  TYROL = "7",
  VORARLBERG = "8",
  VIENNA = "9",
  DEFAULT = "default",
}

export const enum TDomainList {
  CLEVER = "clever",
  BENUDE = "benude",
  BESTATTUNGSINFO = "bestattungsinfo",
  DIEBAUMBESTATTUNG = "diebaumbestattung",
}

export const TPhoneItems: Map<TLocationList, TPhoneItem[]> = new Map([
  [
    TLocationList.UPPER_AUSTRIA,
    [
      {
        type: "info",
        label: "0732 279 810",
        link: "tel:+43732279810",
      },
      {
        type: "articles",
        label: "0732 279 810",
        link: "tel:+43732279810",
      },
    ],
  ],
  [
    TLocationList.VIENNA,
    [
      {
        type: "info",
        label: "01 907 68 85",
        link: "tel:+4319076885",
      },
      {
        type: "articles",
        label: "01 358 7640",
        link: "tel:+4313587640",
      },
    ],
  ],
  [
    TLocationList.DEFAULT,
    [
      {
        type: "info",
        label: "0800 88 44 04",
        link: "tel:+43800884404",
      },
      {
        type: "articles",
        label: "0800 88 44 04",
        link: "tel:+43800884404",
      },
    ],
  ],
]);

export const TPhoneDomains: Map<TDomainList, TPhoneItem[]> = new Map([
  [
    TDomainList.CLEVER,
    [
      {
        type: "info",
        label: "+43 1 3587260",
        link: "tel:+4313587260",
      },
      {
        type: "articles",
        label: "+43 1 3587260",
        link: "tel:+4313587260",
      },
    ],
  ],
  [
    TDomainList.BENUDE,
    [
      {
        type: "info",
        label: "+49 8031 98166",
        link: "tel:0049803198166",
      },
      {
        type: "articles",
        label: "+49 8031 98166",
        link: "tel:0049803198166",
      },
    ],
  ],
  [
    TDomainList.BESTATTUNGSINFO,
    [
      {
        type: "info",
        label: "01 3587249",
        link: "tel:+4313587249",
      },
      {
        type: "articles",
        label: "01 3587249",
        link: "tel:+4313587249",
      },
    ],
  ],
  [
    TDomainList.DIEBAUMBESTATTUNG,
    [
      {
        type: "info",
        label: "01 3587249",
        link: "tel:+4313587249",
      },
      {
        type: "articles",
        label: "01 3587249",
        link: "tel:+4313587249",
      },
    ],
  ],
]);

export const generateAdjustedPhoneNumber = (): TPhoneItem[] => {
  let phones: TPhoneItem[] = [];
  phones = TPhoneItems.get(TLocationList.DEFAULT) as TPhoneItem[];
  // console.log(Cookie.get("country"), Cookie.get("region"), Cookie.get("city"));
  if (
    Cookie.get("country") === "AT" &&
    Cookie.get("region") &&
    Cookie.get("city")
  ) {
    if (TPhoneItems.get(Cookie.get("city") as TLocationList)) {
      phones = TPhoneItems.get(
        Cookie.get("city") as TLocationList
      ) as TPhoneItem[];
    } else if (TPhoneItems.get(Cookie.get("region") as TLocationList)) {
      phones = TPhoneItems.get(
        Cookie.get("region") as TLocationList
      ) as TPhoneItem[];
    }
  }
  return phones;
};

export const getAdjustedPhoneNumber = (phoneObject: TPhoneItem[]) => {
  // if (window) {
  //   if (window.location.pathname.startsWith("/ratgeber")) {
  //     return phoneObject.filter((p) => p.type === "articles")[0];
  //   } else if (
  //     !window.location.pathname.startsWith("/schuldenfalle") &&
  //     !window.location.pathname.startsWith("/friedhof") &&
  //     !window.location.pathname.startsWith("/traueranzeigen") &&
  //     !window.location.pathname.includes("/wiener-verein") &&
  //     phoneObject.filter((p) => p.type === "matelso").length > 0
  //   ) {
  //     return phoneObject.filter((p) => p.type === "matelso")[0];
  //   } else {
  //     return phoneObject.filter((p) => p.type === "info")[0];
  //   }
  // }
  // console.log(phoneObject);
  return phoneObject.filter((p) => p.type === "info")[0];
};
