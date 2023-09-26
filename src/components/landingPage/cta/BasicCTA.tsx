import Button from "@/components/Button";
import { ButtonSize } from "@/types/button";
import { LineCTAContent } from "@/types/landingPage/cta";
import React from "react";

const BasicCTA = ({ list }: LineCTAContent) => {
  return (
    <div className="w-full space-y-6 px-4">
      {list.map((item, index) => {
        return (
          <Button {...item} size={ButtonSize.LARGE} className="w-2xl mx-auto" />
        );
      })}
    </div>
  );
};

export default BasicCTA;
