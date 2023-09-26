export const getStyle = (style: string) => {
  let styleName = null;
  let styleValue: number = 0;
  let styleAdd = null;
  let styleReturn = {
    bg: "",
    text: "",
    bgInvert: "",
    textInvert: "",
    htmlContent: "",
  };
  if (/\d{3}/g.test(style)) {
    styleName = style.replace(/\d{3}/g, "");
    styleValue = parseInt(style.replace(/\D/g, ""));
  } else {
    if (style.includes("hite")) {
      styleName = "white";
      styleAdd = style.replace("white", "").toLowerCase();
    } else {
      styleReturn.bg = `bg-${style}`;
      styleReturn.text = StylesMap.get(`${style}DarkBg`)!.text;
      styleReturn.textInvert = StylesMap.get(`${style}DarkBg`)!.textInvert;
      styleReturn.bgInvert = StylesMap.get(`${style}DarkBg`)!.bgInvert;
      styleReturn.htmlContent = StylesMap.get(`${style}DarkBg`)!.htmlContent;
      return styleReturn;
    }
  }
  if (styleName === "white") {
    styleReturn.bg = "bg-white";
    if (styleAdd === "primary") {
      styleReturn.text = StylesMap.get("primaryLightBg")!.text;
      styleReturn.textInvert = StylesMap.get("primaryLightBg")!.textInvert;
      styleReturn.bgInvert = StylesMap.get("primaryLightBg")!.bgInvert;
      styleReturn.htmlContent = StylesMap.get("primaryLightBg")!.htmlContent;
    } else if (styleAdd === "secondary") {
      styleReturn.text = StylesMap.get("secondaryLightBg")!.text;
      styleReturn.textInvert = StylesMap.get("secondaryLightBg")!.textInvert;
      styleReturn.bgInvert = StylesMap.get("secondaryLightBg")!.bgInvert;
      styleReturn.htmlContent = StylesMap.get("secondaryLightBg")!.htmlContent;
    }
  } else {
    styleReturn.bg = `bg-${styleName}-${styleValue}`;
    styleReturn.text = StylesMap.get(
      `${styleName}${styleValue > 400 ? "Dark" : "Light"}Bg`
    )!.text;
    styleReturn.textInvert = StylesMap.get(
      `${styleName}${styleValue > 400 ? "Dark" : "Light"}Bg`
    )!.textInvert;
    styleReturn.bgInvert = StylesMap.get(
      `${styleName}${styleValue > 400 ? "Dark" : "Light"}Bg`
    )!.bgInvert;
    styleReturn.htmlContent = StylesMap.get(
      `${styleName}${styleValue > 400 ? "Dark" : "Light"}Bg`
    )!.htmlContent;
  }
  return styleReturn;
};

type TStyles = {
  text: string;
  textInvert: string;
  bgInvert: string;
  htmlContent: string;
};
const StylesMap: Map<string, TStyles> = new Map([
  [
    "primaryLightBg",
    {
      text: "text-black",
      textInvert: "text-white",
      bgInvert: "bg-primary",
      htmlContent: "primary",
    },
  ],
  [
    "primaryDarkBg",
    {
      text: "text-white",
      textInvert: "text-black",
      bgInvert: "bg-white",
      htmlContent: "white",
    },
  ],
  [
    "secondaryLightBg",
    {
      text: "text-secondary-900",
      textInvert: "text-white",
      bgInvert: "bg-secondary",
      htmlContent: "secondary",
    },
  ],
  [
    "secondaryDarkBg",
    {
      text: "text-white",
      textInvert: "text-secondary-900",
      bgInvert: "bg-white",
      htmlContent: "white",
    },
  ],
]);
