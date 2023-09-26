"use client";
import { generateAdjustedPhoneNumber } from "@/utils/phone";
import { getAdjustedPhoneNumber } from "@/utils/phone";

type Props = {};

const DesktopPhone = (props: Props) => {
  return (
    <div className="flex h-auto flex-col items-start pl-2 text-white">
      <span className="text-sm uppercase">24h erreichbar</span>
      <a
        href={getAdjustedPhoneNumber(generateAdjustedPhoneNumber()).link}
        target="_self"
        className="-mt-1 w-40 text-left text-xl font-bold leading-6"
      >
        {getAdjustedPhoneNumber(generateAdjustedPhoneNumber()).label}
      </a>
    </div>
  );
};

export default DesktopPhone;
