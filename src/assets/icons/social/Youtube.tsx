import React from "react";
const Youtube = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={`${className} fill-current`}
  >
    <path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-7.7 7h-.6l-1.1.01c-1.48.03-3.7.1-4.46.29-.65.16-1.15.65-1.33 1.26-.18.64-.25 1.7-.29 2.46l-.02.82v.75c.03.76.1 2.09.31 2.85.18.61.68 1.1 1.33 1.26.74.19 2.87.26 4.34.29l1.41.01h1.16c1.45-.03 4-.09 4.81-.3a1.84 1.84 0 0 0 1.33-1.26c.2-.75.28-2.05.3-2.82v-.93c0-.67-.06-2.26-.3-3.13a1.84 1.84 0 0 0-1.33-1.26 25.9 25.9 0 0 0-3.88-.28L12.3 7zM10.46 9.9L14.39 12l-3.92 2.11V9.89z" />
  </svg>
);
export default Youtube;