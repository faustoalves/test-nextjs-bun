"use client";

import Script from "next/script";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Props = {};

const AsyncScripts = (props: Props) => {
  // console.log("async scripts");
  const searchParams = useSearchParams();

  const gtm_debug = searchParams.get("gtm_debug");

  const [loadScripts, setLoadScripts] = useState(false);
  const acceptCookie = () => {
    // console.log("accept cookie");
    setLoadScripts(true);
  };
  useEffect(() => {
    setTimeout(() => {
      acceptCookie();
    }, 3500);
  }, []);
  // console.log(gtm_debug);

  if (loadScripts) {
    return (
      <>
        <Script id="google-analytics" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '${
      gtm_debug ? "https://" : "/api/stream/"
    }googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', 'GTM-TKT2HCR')
  `}
        </Script>
      </>
    );
  } else {
    return <></>;
  }
};

export default AsyncScripts;
