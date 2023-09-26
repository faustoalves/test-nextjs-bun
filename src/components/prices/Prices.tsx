import dynamic from "next/dynamic";

const Price1 = dynamic(() => import("./Price1"));
const Price2 = dynamic(() => import("./Price2"));
const Price3 = dynamic(() => import("./Price3"));
const Price4 = dynamic(() => import("./Price4"));
const Price5 = dynamic(() => import("./Price5"));

const Prices = (props: any) => {
  switch (props.__component) {
    case "price.price-1":
      return <Price1 {...props} className="bg-white text-secondary-900" />;
    case "price.price-2":
      return <Price2 {...props} />;
    case "price.price-3":
      return <Price3 {...props} />;
    case "price.price-4":
      return <Price4 {...props} />;
    case "price.price-5":
      return <Price5 {...props} />;
    default:
      return <></>;
  }
};

export default Prices;
