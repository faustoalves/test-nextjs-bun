import React from "react";

type Props = {
  className?: string;
};

const SmallArrowDown = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="60"
      fill="none"
      viewBox="0 0 16 60"
      className={`${props.className} fill-current`}
    >
      <path d="M10.012 49.693c2.193-2.477 2.612-7.02 5.81-7.276 1.57 1.898-7.814 22.558-10.63 16.46C3.444 54.83.387 51.002 0 46.576c3.988.75 3.423 6.344 6.647 8.535C8.537 36.808 7.793 18.182 10.311 0c2.994 15.594-1.502 33.384-.299 49.693z"></path>
    </svg>
  );
};

export default SmallArrowDown;
