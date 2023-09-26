"use client";
import { getStyle } from "@/utils/styles";
import { FuneralPricePlan } from "@/types/landingPage/content/funeralPrice";
import { getWizardUrl } from "@/utils/wizard";
import { StatsigSendEvent } from "@/utils/events";

type Props = {
  style: string;
  plan: FuneralPricePlan;
  buttonPrefix: string;
};

const Price4Item = ({ style, plan, buttonPrefix }: Props) => {
  const handlerEvent = async () => {
    if (buttonPrefix?.length > 2) {
      await StatsigSendEvent(
        `${buttonPrefix.toLowerCase()}_${plan.planName.toLowerCase()}`
      );
    }
  };
  return (
    <a
      className="flex w-full cursor-pointer flex-col items-center justify-start border border-black/10 md:flex-row"
      href={getWizardUrl()}
      id={
        buttonPrefix?.length > 2
          ? `${buttonPrefix.toLowerCase()}_${plan.planName.toLowerCase()}`
          : ""
      }
      onClick={handlerEvent}
    >
      <div
        className={`flex h-full w-full flex-row items-center p-4 md:w-2/5 ${
          getStyle(style).bgInvert
        } ${getStyle(style).textInvert}`}
      >
        <span className="flex h-full w-full flex-col  items-start justify-between ">
          <p className="text-2xl font-bold">{plan.planName}</p>
          <span>
            <p>
              ab <span className="text-2xl font-bold">{plan.price} €</span>
            </p>
            <p className="text-sm">exkl. externe Kosten</p>
          </span>
          <p className="underline">Jetzt Planen</p>
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
      <span
        className={`flex w-full flex-col items-start justify-start space-y-4 bg-white p-4 md:w-3/5  ${
          getStyle(style).htmlContent
        }`}
        dangerouslySetInnerHTML={{ __html: plan.content }}
      ></span>
    </a>
  );
};

export default Price4Item;
