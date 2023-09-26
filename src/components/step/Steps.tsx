import dynamic from "next/dynamic";

const Step1 = dynamic(() => import("./Step1"));
const Step2 = dynamic(() => import("./Step2"));

const Steps = (props: any) => {
  // console.log(props);
  switch (props.__component) {
    case "steps.step-1":
      return <Step1 {...props} />;
    case "steps.step-2":
      return <Step2 {...props} />;
    default:
      return <></>;
  }
};

export default Steps;
