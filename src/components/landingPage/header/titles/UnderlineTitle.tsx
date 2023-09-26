import React from "react";

type Props = {
  children: React.ReactNode;
};

const UnderlineTitle = ({ children }: Props) => {
  return <h1 className="underline-title">{children}</h1>;
};

export default UnderlineTitle;
