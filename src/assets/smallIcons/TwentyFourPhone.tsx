import React from "react";
import { RiPhoneLine } from "react-icons/ri";

const TwentyFourPhone = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 22 21"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20.55 1.233v5.861h-5.862m5.149-.79A9.77 9.77 0 106.635 19.597"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.273 6.117v4.885l-3.419 1.466"
    ></path>
    <path
      fill="currentColor"
      stroke="none"
      d="M9.287 20.772v-1.388l2.65-2.192a6.01 6.01 0 00.452-.41c.127-.13.224-.262.291-.399a.99.99 0 00.104-.454.887.887 0 00-.118-.469.764.764 0 00-.319-.298 1 1 0 00-.472-.108 1 1 0 00-.472.108.747.747 0 00-.312.316 1.064 1.064 0 00-.11.506H9.147c0-.5.113-.93.337-1.29a2.2 2.2 0 01.95-.833c.41-.194.89-.291 1.44-.291.57 0 1.062.09 1.478.274.419.18.742.434.968.763.23.328.344.713.344 1.155 0 .273-.057.545-.17.815-.114.269-.317.566-.611.892-.294.326-.711.715-1.252 1.166l-.666.555v.041h2.775v1.54H9.287zM15.381 19.662v-1.5l2.859-4.495h1.36v1.998h-.777l-1.54 2.442v.056H21.5v1.499h-6.12zm3.455 1.11v-1.568l.042-.652v-4.885h1.804v7.105h-1.846z"
    ></path>
  </svg>
);

export default TwentyFourPhone;
