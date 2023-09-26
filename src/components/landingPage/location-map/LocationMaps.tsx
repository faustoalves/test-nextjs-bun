import Button from "@/components/Button";
import CImage from "@/components/CImage";
import {
  ButtonProps,
  ButtonSize,
  ButtonType,
  ButtonVariation,
  ButtonVisual,
} from "@/types/button";
import React from "react";

type Props = {};

const buttons: ButtonProps[] = [
  {
    label: "Innsbruck",
    visual: ButtonVisual.PRIMARY,
    variation: ButtonVariation.DEFAULT,
    className: "w-auto",
    size: ButtonSize.LARGE,
    type: ButtonType.INTERNAL,
    link: "https://www.benu.at/bestattung/innsbruck/",
    buttonId: "checkliste_geo_innsbruck_cta",
    sendEvent: true,
  },
  {
    label: "Villach",
    visual: ButtonVisual.PRIMARY,
    variation: ButtonVariation.DEFAULT,
    className: "w-auto",
    size: ButtonSize.LARGE,
    type: ButtonType.INTERNAL,
    link: "https://www.benu.at/bestattung/villach/",
    buttonId: "checkliste_geo_villach_cta",
    sendEvent: true,
  },
  {
    label: "Klagenfurt",
    visual: ButtonVisual.PRIMARY,
    variation: ButtonVariation.DEFAULT,
    className: "w-auto",
    size: ButtonSize.LARGE,
    type: ButtonType.INTERNAL,
    link: "https://www.benu.at/bestattung/klagenfurt/",
    buttonId: "checkliste_geo_klagenfurt_cta",
    sendEvent: true,
  },
  {
    label: "Salzburg",
    visual: ButtonVisual.PRIMARY,
    variation: ButtonVariation.DEFAULT,
    className: "w-auto",
    size: ButtonSize.LARGE,
    type: ButtonType.INTERNAL,
    link: "https://www.benu.at/bestattung/salzburg/",
    buttonId: "checkliste_geo_salzburg_cta",
    sendEvent: true,
  },
  {
    label: "Wels",
    visual: ButtonVisual.PRIMARY,
    variation: ButtonVariation.DEFAULT,
    className: "w-auto",
    size: ButtonSize.LARGE,
    type: ButtonType.INTERNAL,
    link: "https://www.benu.at/bestattung/wels/",
    buttonId: "checkliste_geo_wels_cta",
    sendEvent: true,
  },
  {
    label: "Linz",
    visual: ButtonVisual.PRIMARY,
    variation: ButtonVariation.DEFAULT,
    className: "w-auto",
    size: ButtonSize.LARGE,
    type: ButtonType.INTERNAL,
    link: "https://www.benu.at/bestattung/linz/",
    buttonId: "checkliste_geo_linz_cta",
    sendEvent: true,
  },
  {
    label: "Graz",
    visual: ButtonVisual.PRIMARY,
    variation: ButtonVariation.DEFAULT,
    className: "w-auto",
    size: ButtonSize.LARGE,
    type: ButtonType.INTERNAL,
    link: "https://www.benu.at/bestattung/graz/",
    buttonId: "checkliste_geo_graz_cta",
    sendEvent: true,
  },
  {
    label: "Wien",
    visual: ButtonVisual.PRIMARY,
    variation: ButtonVariation.DEFAULT,
    className: "w-auto",
    size: ButtonSize.LARGE,
    type: ButtonType.INTERNAL,
    link: "https://www.benu.at/wien/",
    buttonId: "checkliste_geo_wien_cta",
    sendEvent: true,
  },
];

const LocationMaps = (props: Props) => {
  return (
    <section className="default-container w-full bg-secondary-100 text-secondary-800">
      <div
        className={`container mx-auto  grid h-auto w-full grid-cols-1 gap-16 text-base md:grid-cols-2 md:items-center`}
      >
        <CImage
          src="https://res.cloudinary.com/dkyl4jbxx/image/upload/v1688492118/new_map.png"
          width={575}
          height={265}
          alt="Checkliste Herunterladen [pdf]"
          className="mx-auto hidden h-auto w-full md:block"
          quality={90}
        />
        <div className="flex flex-col space-y-6">
          <h3>Wir sind in ganz Österreich für Sie da</h3>
          <CImage
            src="https://res.cloudinary.com/dkyl4jbxx/image/upload/v1688492118/new_map.png"
            width={575}
            height={265}
            alt="Checkliste Herunterladen [pdf]"
            className="mx-auto h-auto w-full md:hidden"
            quality={90}
          />
          <p className="text-lg">
            Als einziger Bestatter können wir Sie in ganz Österreich
            unterstützen.Sehen Sie hier einen Überblick über all unsere
            Standorte.
          </p>
          <div className="flex flex-wrap items-start justify-start gap-4">
            {buttons.map((button, index) => (
              <Button {...button} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMaps;
