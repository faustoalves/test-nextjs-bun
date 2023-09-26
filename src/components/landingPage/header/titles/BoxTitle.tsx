import React from "react";

type Props = {
  children: string;
  defaultTitleStyle: string;
};

const BoxTitle = ({ defaultTitleStyle, children }: Props) => {
  return (
    <h1
      className={getTitle(defaultTitleStyle)}
      dangerouslySetInnerHTML={{ __html: children }}
    ></h1>
  );
};

const getTitle = (defaultTitleStyle: string) => {
  switch (defaultTitleStyle) {
    case "box":
      return "box-title";
    case "underline":
      return "underline-title";
    default:
      return "normal-title";
  }
};

export default BoxTitle;
