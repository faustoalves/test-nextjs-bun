import { IconList } from "@/types/icons";
import {
  ButtonSize,
  ButtonType,
  ButtonVariation,
  ButtonVisual,
} from "@/types/button";
import {
  ArrowCTAContent,
  InternalCTAContent,
  LineCTAContent,
} from "@/types/landingPage/cta";
import { GAEvents } from "@/types/events";

export const GeoWienHeader = {
  title: "Wir sind<br/><strong>6x in Wien</strong><br/>persönlich für Sie da",
  subtitle:
    "Wir sind in ganz Wien für Sie da. 24h rund um die Uhr in allen Situationen.",
};
export const GeoWienCTA: ArrowCTAContent = {
  list: [
    {
      label: "Kosten Berechnen",
      visual: ButtonVisual.WHITE_TEXT,
      variation: ButtonVariation.INVERT,
      size: ButtonSize.LARGE,
      className: "w-xl mx-auto",
      type: ButtonType.WIZARD,
      icon: IconList.ARROW_RIGHT,
      link: "",
      buttonId: "geo_wien_header_cta",
      sendEvent: true,
    },
    {
      label: "0800 88 44 04",
      visual: ButtonVisual.SECONDARY,
      variation: ButtonVariation.WHITE,
      className: "w-xl mx-auto",
      size: ButtonSize.LARGE,
      icon: IconList.TWENTY_FOUR,
      type: ButtonType.PHONE,
      link: "#",
      buttonId: "geo_wien_header_phone_cta",
      sendEvent: true,
    },
  ],
};

export const ChecklistInternalCTA: InternalCTAContent = {
  content:
    "Weitere hilfreiche Informationen finden Sie auf folgenden Seiten. Gerne beantworten wir alle Ihre Fragen auch telefonisch. Zögern Sie deshalb bitte nicht uns zu kontaktieren. Wir sind rund um die Uhr 24h Stunden erreichbar.",
  list: [
    {
      label: "0800 88 44 04",
      visual: ButtonVisual.SECONDARY,
      variation: ButtonVariation.INVERT,
      size: ButtonSize.LARGE,
      className: "mx-auto w-2xl",
      type: ButtonType.PHONE,
      link: "",
      buttonId: "checkliste_phone_cta",
      sendEvent: true,
    },
    {
      label: "Bestattungsarten & Kosten",
      visual: ButtonVisual.SECONDARY,
      variation: ButtonVariation.DEFAULT,
      size: ButtonSize.LARGE,
      className: "mx-auto w-2xl",
      type: ButtonType.INTERNAL,
      link: "/info/preise/vr-3",
      buttonId: "checkliste_ftandpriceinfo_cta",
      sendEvent: true,
    },
    {
      label: "Angebot Online Planen",
      visual: ButtonVisual.SECONDARY,
      variation: ButtonVariation.DEFAULT,
      size: ButtonSize.LARGE,
      className: "mx-auto w-2xl",
      type: ButtonType.WIZARD,
      link: "",
      buttonId: "checkliste_planning_cta",
      sendEvent: true,
    },
  ],
};
