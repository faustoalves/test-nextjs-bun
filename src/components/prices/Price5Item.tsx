"use client";
import { getStyle } from "@/utils/styles";
import { getWizardUrl } from "@/utils/wizard";
import { FuneralTypeItem } from "@/types/landingPage/content/funeralType";
import CImage from "../CImage";
import { StatsigSendEvent } from "@/utils/events";

type Props = {
  style: string;
  buttonPrefix: string;
};

const Price5Item = ({
  style,
  image,
  label,
  plans,
  funeralType,
  link,
  buttonPrefix,
}: FuneralTypeItem & Props) => {
  const handlerEvent = async () => {
    if (buttonPrefix?.length > 2) {
      await StatsigSendEvent(
        `${buttonPrefix.toLowerCase()}_${funeralType.toLowerCase()}`
      );
    }
  };
  return (
    <a
      className="group relative flex h-52 w-full flex-grow cursor-pointer flex-col overflow-hidden text-white md:h-full"
      href={getWizardUrl()}
      target="_self"
      onClick={handlerEvent}
      id={
        buttonPrefix?.length > 2
          ? `${buttonPrefix.toLowerCase()}_${funeralType.toLowerCase()}`
          : ""
      }
    >
      <CImage
        src={image.url}
        width={400}
        height={300}
        className="relative h-full w-full scale-105 object-cover transition-all duration-300 group-hover:scale-125 "
        crop={true}
        priority={true}
      />
      <div className=" absolute bottom-0 flex h-auto w-full flex-row items-center justify-between  bg-black bg-opacity-50 p-4 backdrop-blur-sm md:h-32">
        <span className="flex flex-col">
          <p className="text-lg font-bold">{label}</p>
          <span className="flex flex-row items-center justify-start ">
            ab <span className="mx-1 font-bold">{plans[0].price} €</span>
          </span>
        </span>
        <span>
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 23.2059L11.5536 12.7582L2 2.31054"
              stroke="#FAFAFA"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </a>
  );
};

export default Price5Item;
