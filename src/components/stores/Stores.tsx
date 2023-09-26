import dynamic from "next/dynamic";

const StoreList = dynamic(() => import("./StoreList"));
const StoreList2 = dynamic(() => import("./StoreList2"));

const Stores = (props: any) => {
  // console.log(props);
  switch (props.__component) {
    case "stores.store-list-1":
      return <StoreList {...props} />;
    case "stores.store-list-2":
      return <StoreList2 {...props} />;
    default:
      return <></>;
  }
};

export default Stores;
