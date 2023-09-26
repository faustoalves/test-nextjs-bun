import dynamic from "next/dynamic";

const Faq1 = dynamic(() => import("./Faq1"));
const Faqs = (props: any) => {
  // console.log(props);
  switch (props.__component) {
    case "faq.faq-1":
      return <Faq1 {...props} />;
    default:
      return <></>;
  }
};

export default Faqs;
