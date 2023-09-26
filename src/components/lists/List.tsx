import dynamic from "next/dynamic";

const List1 = dynamic(() => import("./List1"));
const List2 = dynamic(() => import("./List2"));

const Features = (props: any) => {
  switch (props.__component) {
    case "list.list-1":
      return <List1 {...props} />;
    case "list.list-2":
      return <List2 {...props} />;
    default:
      return <></>;
  }
};

export default Features;
