import { ButtonEventsProps } from "@/types/button";

declare const window: Window & { dataLayer: Record<string, unknown>[] };

export const StatsigSendEvent = async (event: string, value: string = "") => {
  await fetch(`/api/statsig/event/`, {
    method: "POST",
    body: JSON.stringify({
      event: event,
      value: value !== "" ? value : getPageUrl(),
    }),
  });
};

const getPageUrl = (): string => {
  if (window) {
    return `${window.location.pathname}`;
  }
  return "";
};

export const GASendEvent = ({
  eventName,
  eventCategory,
  eventAction,
  eventLabel,
}: ButtonEventsProps) => {
  console.log(
    "SEND EVENT TO ANALYTICS",
    eventName,
    eventCategory,
    eventAction,
    eventLabel
  );
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      category: eventCategory,
      action: eventAction,
      label: eventLabel,
    });
  } else {
    console.log("Analytics not detected");
  }
};

export const GAPageView = (url: string) => {
  console.log("SEND PAGEVIEW TO ANALYTICS", url);

  if (window.dataLayer) {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  }
};
