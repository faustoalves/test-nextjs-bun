"use client";
import React from "react";
import Icons from "./Icons";
import {
  ButtonProps,
  ButtonSize,
  ButtonType,
  ButtonVariation,
} from "../types/button";
import {
  generateAdjustedPhoneNumber,
  getAdjustedPhoneNumber,
} from "@/utils/phone";
import { GASendEvent, StatsigSendEvent } from "@/utils/events";
import { getWizardUrl } from "@/utils/wizard";
import { GAEvents } from "@/types/events";
import { scrollToElement } from "@/utils/scroll";

const Button = ({
  size = ButtonSize.MEDIUM,
  visual,
  variation,
  extraLabel,
  label,
  icon,
  iconPosition,
  className,
  ariaLabel,
  buttonId,
  type,
  link,
  sendEvent,
  event,
  ...props
}: ButtonProps) => {
  let path = "";
  const handlerEvent = async () => {
    if (type === ButtonType.SCROLL && link.startsWith("#")) {
      scrollToElement(link);
    }
    if (buttonId) {
      if (event) {
        GASendEvent(event!);
      }
      await StatsigSendEvent(buttonId!);

      if (type === ButtonType.WIZARD) {
        GASendEvent({
          eventName: GAEvents.CTA,
          eventCategory: "Contact Form Funnel",
          eventAction: "start",
          eventLabel: getWizardUrl(link ? link : ""),
        });
        await StatsigSendEvent("wizard-start", buttonId ? buttonId : "");
      } else if (type === ButtonType.PHONE && !buttonId) {
        await StatsigSendEvent("PhoneCall");
      }
    }
    if (type !== ButtonType.PHONE) {
      // href={type !== ButtonType.WIZARD ? path : undefined}
      // target=
      if (type === ButtonType.WIZARD) {
        window.location.href = getWizardUrl(link);
      } else {
        if (type === ButtonType.EXTERNAL) {
          const url = path;
          const win = window.open(url, "_blank");
          if (win) {
            win.focus();
          }
        } else {
          if (type === ButtonType.INTERNAL && !path.startsWith("#")) {
            window.location.href = path;
          }
        }
      }
    }
  };
  if (type === ButtonType.PHONE) {
    path = getAdjustedPhoneNumber(generateAdjustedPhoneNumber()).link;
  } else if (type === ButtonType.EXTERNAL) {
    path = link;
  } else if (type === ButtonType.INTERNAL) {
    path = includeLinkSearchParams(link);
  }
  if (type === ButtonType.PHONE) {
    return (
      <a
        className={`button group ${size} ${
          icon && iconPosition === "right" ? "flex-row-reverse" : ""
        } ${visual ? visual : "primary"} ${variation} ${
          className ? className : ""
        }`}
        // className={className}
        data-ci={buttonId}
        id={buttonId}
        {...props}
        aria-label={ariaLabel ? ariaLabel : label}
        href={path}
        target={"_self"}
        onClick={handlerEvent}
      >
        {variation === "default" && (
          <span className="absolute inset-0 h-full w-full scale-x-75 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10" />
        )}
        {icon && <Icons icon={icon} />}
        {type === ButtonType.PHONE ? (
          <span>
            {getAdjustedPhoneNumber(generateAdjustedPhoneNumber()).label}
          </span>
        ) : (
          <span>
            <p>{label}</p>
            {extraLabel && <p>{extraLabel}</p>}
          </span>
        )}
      </a>
    );
  }
  return (
    <button
      className={`button group ${size} ${
        icon && iconPosition === "right" ? "flex-row-reverse" : ""
      } ${visual ? visual : "primary"} ${variation} ${
        className ? className : ""
      }`}
      // className={className}
      data-ci={buttonId}
      id={buttonId}
      {...props}
      aria-label={ariaLabel ? ariaLabel : label}
      onClick={handlerEvent}
    >
      {variation === "default" && (
        <span className="absolute inset-0 h-full w-full scale-x-75 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10" />
      )}
      {icon && <Icons icon={icon} />}
      <span>
        <p>{label}</p>
        {extraLabel && <p>{extraLabel}</p>}
      </span>
    </button>
  );
};

export const includeLinkSearchParams = (_url: string) => {
  if (
    _url.includes("benu.at/") ||
    _url.includes("vercel.app") ||
    _url.startsWith("/") ||
    _url.includes("localhost:3000/")
  ) {
    if (_url.split("?").length > 1) {
      _url = _url + window.location.search.replace("?", "&");
    } else {
      _url = _url + window.location.search;
    }
  }
  return _url;
};

export default Button;
