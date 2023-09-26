import CImage from "@/components/CImage";
import { Customer, CustomerItem } from "@/types/landingPage/content/customers";
import Image from "next/image";
import React from "react";
import CustomersListMobile from "./CustomersListMobile";
import ResponsiveMobile from "@/components/basic/ResponsiveMobile";
import ResponsiveDesktop from "@/components/basic/ResponsiveDesktop";
import Stars from "@/components/basic/common/assets/Stars";
import { CustomersScrap } from "@/services/Customers";

interface Props {
  className: string;
}

const Customers = async ({ className }: Props) => {
  const info = await CustomersScrap.getCustomersInfo();
  // console.log(info);
  let title = "Kundenbewertungen";
  let content =
    "Wir sind froh, schon über 2.000 Familien professionell begleitet und unterstützt zu haben. Es macht uns sehr glücklich zu lesen, dass unsere Kunden unseren Einsatz und Service schätzen und mit unserer Dienstleistung vollstens zufrieden sind. Alle Bewertungen haben wir über Google, Facebook, eKomi oder per E-Mail bzw. Brief erhalten.";
  return (
    <section className={` ${className ? className : ""}`}>
      <div
        className={`container mx-auto grid h-auto w-full grid-cols-1 flex-row items-center justify-center gap-12 py-8 text-base md:grid-cols-3 lg:grid-cols-4`}
      >
        <div className="h-auto space-y-4">
          <p className="text-3xl font-bold">{title}</p>
          <span dangerouslySetInnerHTML={{ __html: content }} />
          <ResponsiveMobile>
            <CustomersListMobile
              customers={info.customers.slice(0, 8)}
              title={title}
              content={content}
              total={info.count}
            />
          </ResponsiveMobile>
          <div className="flex flex-col items-center justify-center space-y-2 lg:pt-2">
            <CImage
              src="https://res.cloudinary.com/dkyl4jbxx/image/upload/v1685122235/assets/pngs/TrustIndex.png"
              width={174 * 2}
              height={29 * 2}
              alt="trust-index"
              className="h-auto w-48"
              quality={90}
            />
            <Stars />
            <p className="text-sm">
              Basierend auf{" "}
              <a
                href="https://admin.trustindex.io/logc.php?wid=05b546c131f375364716651ae38"
                target="_blank"
                className="underline"
                aria-label="Open TrustIndex"
              >
                {info.count} Bewertungen
              </a>
            </p>
          </div>
        </div>
        <ResponsiveDesktop>
          <div className="col-span-2 ml-4 hidden flex-row space-x-6 md:flex lg:col-span-3 ">
            <div className="flex flex-grow flex-col space-y-6">
              <CustomerItemComp {...info.customers[0]} />
              <CustomerItemComp {...info.customers[1]} />
            </div>
            <div className="flex flex-grow flex-col space-y-6">
              <CustomerItemComp {...info.customers[2]} />
              <CustomerItemComp {...info.customers[4]} />
            </div>
          </div>
        </ResponsiveDesktop>
      </div>
    </section>
  );
};

const CustomerItemComp = ({
  image,
  name,
  date,
  stars,
  review,
}: CustomerItem) => (
  <div className="flex  h-full w-full flex-grow flex-col space-y-4 bg-white p-4 text-sm text-black md:h-auto">
    <div className="flex w-full flex-row items-center justify-start space-x-2">
      <Image
        src={image}
        width={64}
        height={64}
        alt={name}
        className="h-12 w-12 rounded-full"
      />
      <span className="w-auto">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs">{date}</p>
      </span>
    </div>
    <Stars value={stars} size="small" />
    <p className="text-sm">{review}</p>
  </div>
);

export default Customers;
