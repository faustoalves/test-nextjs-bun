import Button from "@/components/Button";
import { InternalCTAContent } from "@/types/landingPage/cta";
import React from "react";

type Props = {};

const InternalCTA = ({ content, list }: InternalCTAContent) => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 text-center">
      <span dangerouslySetInnerHTML={{ __html: content }} />
      <div className="flex w-full flex-col items-center justify-center space-y-4 md:w-auto md:flex-row md:space-x-6 md:space-y-0">
        {list.map((button, index) => (
          <Button {...button} />
        ))}
      </div>
    </div>
  );
};

export default InternalCTA;
