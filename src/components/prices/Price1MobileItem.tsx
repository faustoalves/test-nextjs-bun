"use client";

import ArrowDown from "@/assets/icons/shapes/arrowDown";
import Button from "@/components/Button";
import CImage from "@/components/CImage";
import {
  ButtonSize,
  ButtonType,
  ButtonVariation,
  ButtonVisual,
} from "@/types/button";
import { IconList } from "@/types/icons";
import { FuneralPriceItem } from "@/types/landingPage/content/funeralPrice";
import React, { useState } from "react";

const Price1MobileItem = ({
  id,
  name,
  image,
  table,
  label,
  plans,
  funeralType,
}: FuneralPriceItem) => {
  const [viewTable, setViewTable] = useState(false);
  const toogleTable = () => {
    setViewTable(!viewTable);
  };
  return (
    <div className="w-full" id={id}>
      <div className="bg-secondary-700" onClick={() => toogleTable()}>
        <CImage
          {...image}
          src={image.url}
          width={600}
          height={250}
          crop={true}
        />
        <div className="flex flex-row p-2 text-white ">
          <div className="flex flex-grow flex-col">
            <p className="text-lg">Unsere Pakete zur </p>
            <p className="text-2xl font-bold">{label}</p>
            <p className="text-2xl font-bold">{`ab € ${plans[0].price}`}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-white">
            <ArrowDown
              className={`${
                viewTable ? "rotate-180" : "rotate-0"
              } transition-transform duration-200`}
            />
            <p className="text-sm font-bold">Mehr Info</p>
          </div>
        </div>
      </div>
      {viewTable && (
        <table id="table">
          {table.map((row) => {
            if (row[0] === "HEADER") {
              return (
                <thead>
                  <tr>
                    <th>{row[1]}</th>
                    <th>{row[2]}</th>
                    <th>{row[3]}</th>
                    <th>{row[4]}</th>
                  </tr>
                </thead>
              );
            } else {
              return <></>;
            }
          })}
          <tbody>
            {table.map((row) => {
              if (row[0] === "ROW") {
                return (
                  <tr>
                    <td>{row[1]}</td>
                    {row[2] === "true" || row[2] === "false" ? (
                      <td className={row[2]} />
                    ) : (
                      <td>{row[2]}</td>
                    )}
                    {row[3] === "true" || row[3] === "false" ? (
                      <td className={row[3]} />
                    ) : (
                      <td>{row[3]}</td>
                    )}
                    {row[4] === "true" || row[2] === "false" ? (
                      <td className={row[4]} />
                    ) : (
                      <td>{row[4]}</td>
                    )}
                  </tr>
                );
              } else {
                return <></>;
              }
            })}
          </tbody>
        </table>
      )}
      <div className=" bg-primary-700 py-2">
        <Button
          // {...button}
          className=" w-full text-white"
          label={`${label} Kosten Berechnen`}
          visual={ButtonVisual.WHITE_TEXT}
          variation={ButtonVariation.TEXT}
          sendEvent={true}
          type={ButtonType.WIZARD}
          icon={IconList.ARROW_RIGHT}
          buttonId={`price_${funeralType}_cta`.toLowerCase()}
          link={funeralType}
        />
      </div>
    </div>
  );
};

export default Price1MobileItem;
