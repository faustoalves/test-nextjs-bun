import React from "react";
import { RiPhoneLine } from "react-icons/ri";

const Link = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.667"
      d="M8.336 10.954a4.168 4.168 0 006.283.45l2.5-2.5a4.167 4.167 0 00-5.891-5.892L9.794 4.437"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.667"
      d="M11.664 9.287a4.167 4.167 0 00-6.283-.45l-2.5 2.5a4.166 4.166 0 005.891 5.892l1.425-1.425"
    ></path>
  </svg>
);

export default Link;
