import dynamic from "next/dynamic";

const Feature1 = dynamic(() => import("./Feature1"));
const Feature2 = dynamic(() => import("./Feature2"));
const Feature3 = dynamic(() => import("./Feature3"));
const Feature4 = dynamic(() => import("./Feature4"));
const Feature5 = dynamic(() => import("./Feature5"));
const Feature6 = dynamic(() => import("./Feature6"));
const Feature7 = dynamic(() => import("./Feature7"));
const Feature8 = dynamic(() => import("./Feature8"));

const Features = (props: any) => {
  // console.log(props);
  switch (props.__component) {
    case "feature.feature-1":
      return <Feature1 {...props} />;
    case "feature.feature-2":
      return <Feature2 {...props} />;
    case "feature.feature-3":
      return <Feature3 {...props} />;
    case "feature.feature-4":
      return <Feature4 {...props} />;
    case "feature.feature-5":
      return <Feature5 {...props} />;
    case "feature.feature-6":
      return <Feature6 {...props} />;
    case "feature.feature-7":
      return <Feature7 {...props} />;
    case "feature.feature-8":
      return <Feature8 {...props} />;
    default:
      return <></>;
  }
};

export default Features;
