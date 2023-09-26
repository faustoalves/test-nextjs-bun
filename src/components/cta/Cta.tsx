import dynamic from "next/dynamic";

const Cta1 = dynamic(() => import("./Cta1"));
const Cta2 = dynamic(() => import("./Cta2"));

const Cta = (props: any) => {
  switch (props.__component) {
    case "cta.cta-1":
      return <Cta1 {...props} />;
    case "cta.cta-2":
      return <Cta2 {...props} />;
    default:
      return <></>;
  }
};

export default Cta;
