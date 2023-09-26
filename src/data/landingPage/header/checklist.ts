import { IconList } from "@/types/icons";
import {
  ButtonSize,
  ButtonType,
  ButtonVariation,
  ButtonVisual,
} from "./../../../types/button";
import { InternalCTAContent, LineCTAContent } from "@/types/landingPage/cta";
import { GAEvents } from "@/types/events";

export const ChecklistHeader = {
  title: "Was ist im <br/><strong>Todesfall</strong> zu tun?",
  subtitle:
    "Wir bedauern Ihren Verlust sehr und es ist uns ein Anliegen, Sie so gut wie möglich zu unterstützen. Erfahren Sie was es nun zu tun gilt, indem Sie auf die Schaltfläche des Sterbeortes klicken.",
};
export const ChecklistListCTA: LineCTAContent = {
  list: [
    {
      label: "Krankenhaus",
      visual: ButtonVisual.SECONDARY,
      variation: ButtonVariation.WHITE,
      size: ButtonSize.LARGE,
      className: "mx-auto w-2xl",
      type: ButtonType.INTERNAL,
      link: "#hospital",
      buttonId: "checkliste_header_hospital",
      sendEvent: true,
    },
    {
      label: "Zuhause, Pflegeheim, Hospiz",
      visual: ButtonVisual.SECONDARY,
      variation: ButtonVariation.WHITE,
      size: ButtonSize.LARGE,
      className: "mx-auto w-2xl",
      type: ButtonType.INTERNAL,
      link: "#others",
      buttonId: "checkliste_header_other",
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
