import React from "react";

type Props = {
  children: React.ReactNode;
};

const NormalTitle = ({ children }: Props) => {
  return <h1 className="normal-title">{children}</h1>;
};

export default NormalTitle;
