import dynamic from "next/dynamic";

const Stores = dynamic(() => import("./stores/Stores"));
const Cta = dynamic(() => import("./cta/Cta"));
const Features = dynamic(() => import("./features/Features"));
const Prices = dynamic(() => import("./prices/Prices"));
const Faqs = dynamic(() => import("./faq/Faqs"));
const Steps = dynamic(() => import("./step/Steps"));
const Location = dynamic(() => import("./locations/Location"));
const List = dynamic(() => import("./lists/List"));

const SelectComponent = (props: any) => {
  // console.log(props.__component);
  if (props.__component.startsWith("stores.")) {
    return <Stores {...props} />;
  } else if (props.__component.startsWith("cta.")) {
    return <Cta {...props} />;
  } else if (props.__component.startsWith("feature.")) {
    return <Features {...props} />;
  } else if (props.__component.startsWith("price.")) {
    return <Prices {...props} />;
  } else if (props.__component.startsWith("faq.")) {
    return <Faqs {...props} />;
  } else if (props.__component.startsWith("steps.")) {
    return <Steps {...props} />;
  } else if (props.__component.startsWith("list.")) {
    return <List {...props} />;
  } else if (props.__component.startsWith("locations.")) {
    return <Location {...props} />;
  } else {
    return <></>;
  }
};

export default SelectComponent;
