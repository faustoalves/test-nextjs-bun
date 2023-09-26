import React from "react";

type Props = {
  className?: string;
};

const SmallArrowLeft = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="43"
      fill="none"
      viewBox="0 0 29 36"
      className={`${props.className} fill-current`}
    >
      <path d="M27.865 0c.743 3.701.214 4.483.242 6.819-1.524 11.779-11.15 18.185-19.613 24.536 1.831.118 8.123 1.338 4.253 3.672-3.403-.24-6.894-1.11-10.284-1.682-2.58-.514-3.024-1.602-1.839-3.85 1.644-3.075 2.852-6.246 4.765-9.23 1.04 1.145.677 4.276-1.065 9.369C16.179 23.643 26.867 14.134 27.865 0z"></path>
    </svg>
  );
};

export default SmallArrowLeft;
