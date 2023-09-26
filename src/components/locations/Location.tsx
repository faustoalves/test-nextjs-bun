import dynamic from "next/dynamic";

const Location1 = dynamic(() => import("./Location1"));

const Location = (props: any) => {
  // console.log(props);
  switch (props.__component) {
    case "locations.location-1":
      return <Location1 {...props} />;
    default:
      return <></>;
  }
};

export default Location;
