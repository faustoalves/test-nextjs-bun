import React from "react";

type Props = {
  size?: "small" | "medium" | "large";
  value?: number;
};

const Stars = ({ size = "large", value = 5 }: Props) => {
  return (
    <div className={`stars`}>
      <ul className={size}>
        {[...Array(value)].map((e, i) => {
          return <li key={i} />;
        })}
      </ul>
    </div>
  );
};

export default Stars;
