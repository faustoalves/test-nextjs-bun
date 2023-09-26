import { IconList } from "@/types/icons";
import {
  ButtonSize,
  ButtonType,
  ButtonVariation,
  ButtonVisual,
} from "./../../../types/button";
import { ArrowCTAContent } from "@/types/landingPage/cta";
import { GAEvents } from "@/types/events";

export const PriceHeader = {
  title: "Unsere transparenten <strong>Preise</strong>",
  subtitle:
    "Pakete für Feuerbestattung, Erdbestattung, Baumbestattung & Donaubestattung in mehreren Preissegmenten.",
};
export const PriceArrowCTA: ArrowCTAContent = {
  list: [
    {
      label: "Kosten Berechnen",
      visual: ButtonVisual.SECONDARY,
      variation: ButtonVariation.WHITE,
      size: ButtonSize.LARGE,
      className: "w-xl mx-auto",
      type: ButtonType.WIZARD,
      link: "",
      buttonId: "price_header_cta",
      sendEvent: true,
      event: {
        eventName: GAEvents.CTA,
        eventCategory: "header",
        eventAction: "cta_click",
        eventLabel: "planning",
      },
    },
    {
      label: "0800 88 44 04",
      visual: ButtonVisual.WHITE_TEXT,
      variation: ButtonVariation.TEXT,
      className: "w-xl mx-auto",
      size: ButtonSize.LARGE,
      icon: IconList.PHONE,
      type: ButtonType.PHONE,
      link: "#",
      buttonId: "price_header_phone",
      sendEvent: true,
      event: {
        eventName: GAEvents.CTA,
        eventCategory: "header",
        eventAction: "cta_click",
        eventLabel: "call_button",
      },
    },
  ],
};

export const PriceArrowCTACyan: ArrowCTAContent = {
  list: [
    {
      label: "Kosten Berechnen",
      visual: ButtonVisual.PRIMARY,
      variation: ButtonVariation.WHITE,
      size: ButtonSize.LARGE,
      className: "w-xl mx-auto",
      type: ButtonType.WIZARD,
      link: "",
      buttonId: "price_header_cta",
      sendEvent: true,
      event: {
        eventName: GAEvents.CTA,
        eventCategory: "header",
        eventAction: "cta_click",
        eventLabel: "planning",
      },
    },
    {
      label: "0800 88 44 04",
      visual: ButtonVisual.WHITE_TEXT,
      variation: ButtonVariation.TEXT,
      className: "w-xl mx-auto",
      size: ButtonSize.LARGE,
      icon: IconList.PHONE,
      type: ButtonType.PHONE,
      link: "#",
      buttonId: "price_header_phone",
      sendEvent: true,
      event: {
        eventName: GAEvents.CTA,
        eventCategory: "header",
        eventAction: "cta_click",
        eventLabel: "call_button",
      },
    },
  ],
};

export const ExpensesArrowCTA: ArrowCTAContent = {
  list: [
    {
      label: "Kosten Berechnen",
      visual: ButtonVisual.SECONDARY,
      variation: ButtonVariation.WHITE,
      size: ButtonSize.LARGE,
      className: "w-xl mx-auto",
      type: ButtonType.WIZARD,
      link: "",
      buttonId: "bestattungskosten_header_cta",
      sendEvent: true,
      event: {
        eventName: GAEvents.CTA,
        eventCategory: "header",
        eventAction: "cta_click",
        eventLabel: "planning",
      },
    },
    {
      label: "0800 88 44 04",
      visual: ButtonVisual.WHITE_TEXT,
      variation: ButtonVariation.TEXT,
      className: "w-xl mx-auto",
      size: ButtonSize.LARGE,
      icon: IconList.PHONE,
      type: ButtonType.PHONE,
      link: "#",
      buttonId: "bestattungskosten_header_phone",
      sendEvent: true,
      event: {
        eventName: GAEvents.CTA,
        eventCategory: "header",
        eventAction: "cta_click",
        eventLabel: "call_button",
      },
    },
  ],
};
