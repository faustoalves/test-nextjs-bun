import React from "react";
import { cookies } from "next/headers";
import ModalConsent from "./ModalConsent";
import { getHeaderCookie } from "@/utils/cookies";
import Script from "next/script";

type Props = {};

const ModalConsentContainer = (props: Props) => {
  const acceptedConsent = getHeaderCookie("activeConsent");
  if (acceptedConsent === "false" || !acceptedConsent) {
    return <ModalConsent />;
  }
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
};

export default ModalConsentContainer;
