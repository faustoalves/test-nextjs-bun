import React from "react";
const ArrowDown = ({ size = 27, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 26 15"
    className={`${className} fill-none stroke-current`}
  >
    <path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M.416.737a1.5 1.5 0 012.12-.048L13 10.698 23.463.689a1.5 1.5 0 112.074 2.168l-11.5 11a1.5 1.5 0 01-2.074 0l-11.5-11A1.5 1.5 0 01.416.737z"
      clipRule="evenodd"
    ></path>
  </svg>
);
export default ArrowDown;
