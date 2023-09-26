import { Metadata } from "next";

export const getMetadata = (type: string, props: any): Metadata => {
  let indexParam = props.seo.indexFollow.includes("noIndex") ? false : true;
  let followParam = props.seo.indexFollow.includes("noFollow") ? false : true;

  let metadata: Metadata = {
    title: props.seo.title,
    description: props.seo.description,
    alternates: {
      canonical: props.seo.canonical,
    },
    themeColor: "#1F938F",
    openGraph: {
      images: [`/api/opengraph-image?type=${type}&slug=${props.slug}`],
      type: "website",
      url: props.seo.canonical,
      title: props.seo.title,
      description: props.seo.description,
      siteName: "Benu Bestattung",
      locale: "de_AT",
    },
    twitter: {
      card: "summary_large_image",
      title: props.seo.title,
      description: props.seo.description,
      images: [`/api/opengraph-image?type=${type}&slug=${props.slug}`],
    },
    // viewport: {
    //   width: "device-width",
    //   initialScale: 1,
    //   maximumScale: 1,
    // },
    robots: {
      // index: props.seo.index_follow.includes("noindex") ? false : true,
      // follow: props.seo.index_follow.includes("nofollow") ? false : true,
      // nocache: false,
      // googleBot: {
      //   index: props.seo.index_follow.includes("noindex") ? false : true,
      //   follow: props.seo.index_follow.includes("nofollow")
      //     ? false
      //     : true,
      //   noimageindex: true,
      //   "max-video-preview": -1,
      //   "max-image-preview": "large",
      //   "max-snippet": -1,
      // },
      index: indexParam,
      follow: followParam,
      nocache: false,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
  return metadata;
};
