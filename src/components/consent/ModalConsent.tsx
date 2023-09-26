"use client";

import React, { useEffect, useState } from "react";
import Button from "../Button";
import Cookies from "js-cookie";
import Logo from "../Logo";
import {
  ButtonSize,
  ButtonType,
  ButtonVariation,
  ButtonVisual,
} from "@/types/button";
import Script from "next/script";

type Props = {};

const ModalConsent = (props: Props) => {
  const [showModalConsent, setShowModalConsent] = useState(true);
  const [showModalExtraConsent, setShowModalExtraConsent] = useState(false);
  const acceptCookie = () => {
    Cookies.set("activeConsent", "true");
    setShowModalConsent(false);
  };
  const customCookie = () => {
    setShowModalExtraConsent(true);
  };
  useEffect(() => {
    setTimeout(() => {
      console.log("Accept");
      acceptCookie();
    }, 3500);
  }, []);

  const closeCustomCookie = () => {
    setShowModalExtraConsent(false);
  };
  if (showModalExtraConsent) {
    return (
      <></>
      // <div className="top right fixed z-50 flex h-full w-screen items-end justify-start bg-black/50 p-2 md:p-4">
      //   <div
      //     id="consentContainer"
      //     className=" flex h-auto w-auto flex-col items-start justify-between space-y-4 bg-white p-4 shadow-lg md:items-center md:space-x-8 md:space-y-0 lg:flex-row"
      //   >
      //     {/* <div className="w-48">
      //       <Logo type="iconLogo" className="h-auto w-48" />
      //     </div> */}
      //     <div className="">
      //       <h4 className="text-sm font-bold text-secondary-800">
      //         Cookie-Einstellungen
      //       </h4>
      //       <p className="text-sm leading-4">
      //         Hier können Sie die Cookie-Einstellungen verschiedener Tools, die
      //         auf dieser Domain und ihren Subdomains verwendet werden, einsehen
      //         bzw. ändern.
      //       </p>
      //     </div>
      //     <div className="w-full space-y-2 md:w-60">
      //       <Button
      //         label="ALLE AKZEPTIEREN"
      //         visual={ButtonVisual.PRIMARY}
      //         variation={ButtonVariation.DEFAULT}
      //         size={ButtonSize.SMALL}
      //         onClick={() => {
      //           acceptCookie();
      //         }}
      //         className="w-full md:w-60"
      //         type={ButtonType.ACTION}
      //         link="#"
      //       />
      //       <Button
      //         label="EINSTELLUNG SPEICHERN"
      //         visual={ButtonVisual.PRIMARY}
      //         variation={ButtonVariation.INVERT}
      //         size={ButtonSize.SMALL}
      //         className="w-full md:w-60"
      //         onClick={() => {
      //           acceptCookie();
      //         }}
      //         type={ButtonType.ACTION}
      //         link="#"
      //       />
      //       <Button
      //         label="ZURÜCK"
      //         visual={ButtonVisual.PRIMARY}
      //         variation={ButtonVariation.TEXT}
      //         size={ButtonSize.SMALL}
      //         className="w-full md:w-60"
      //         onClick={() => {
      //           closeCustomCookie();
      //         }}
      //         type={ButtonType.ACTION}
      //         link="#"
      //       />
      //     </div>
      //   </div>
      // </div>
    );
  } else if (showModalConsent && !showModalExtraConsent) {
    return (
      <></>
      // <div className="top right fixed z-50 flex h-full w-screen items-end justify-start bg-black/50 p-2 md:p-4">
      //   <div
      //     id="consentContainer"
      //     className=" flex h-auto w-auto flex-col items-start justify-between space-y-4 bg-white p-4 shadow-lg md:items-center md:space-x-8 md:space-y-0 lg:flex-row"
      //   >
      //     <div className="w-48">
      //       <Logo type="iconLogo" className="h-auto w-48" />
      //     </div>
      //     <div className="">
      //       <h4 className="text-sm font-bold text-secondary-800">
      //         Diese Webseite verwendet
      //       </h4>
      //       <p className="text-sm leading-4">
      //         Cookies Wir verwenden Cookies, um Inhalte und Anzeigen zu
      //         personalisieren, Funktionen für soziale Medien anbieten zu können
      //         und die Zugriffe auf unsere Website zu analysieren. Außerdem geben
      //         wir Informationen zu Ihrer Verwendung unserer Website an unsere
      //         Partner für soziale Medien, Werbung und Analysen weiter. Unsere
      //         Partner führen diese Informationen möglicherweise mit weiteren
      //         Daten zusammen, die Sie ihnen bereitgestellt haben oder die sie im
      //         Rahmen Ihrer Nutzung der Dienste
      //       </p>
      //     </div>
      //     <div className="w-full space-y-2 md:w-48">
      //       <Button
      //         label="AKZEPTIEREN"
      //         visual={ButtonVisual.PRIMARY}
      //         variation={ButtonVariation.DEFAULT}
      //         size={ButtonSize.SMALL}
      //         onClick={() => {
      //           acceptCookie();
      //         }}
      //         buttonId="accept-cookie"
      //         className="w-full md:w-48"
      //         type={ButtonType.ACTION}
      //         link="#"
      //       />
      //       <Button
      //         label="EINSTELLUNGEN"
      //         visual={ButtonVisual.PRIMARY}
      //         variation={ButtonVariation.TEXT}
      //         size={ButtonSize.SMALL}
      //         className="w-full md:w-48"
      //         buttonId="custom-cookie"
      //         onClick={() => {
      //           customCookie();
      //         }}
      //         type={ButtonType.ACTION}
      //         link="#"
      //       />
      //     </div>
      //   </div>
      // </div>
    );
  } else {
    return (
      <Script id="google-analytics" strategy="lazyOnload">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer', 'GTM-TKT2HCR')
    `}
      </Script>
    );
  }
};

export default ModalConsent;
