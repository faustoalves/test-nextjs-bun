"use client";
import { Customer, CustomerItem } from "@/types/landingPage/content/customers";

import Image from "next/image";
import CustomersListMobileComp from "./CustomersListMobileComp";
import ResponsiveMobile from "@/components/basic/ResponsiveMobile";
import Stars from "@/components/basic/common/assets/Stars";

const CustomersListMobile = ({ customers }: Customer): any => {
  return (
    <CustomersListMobileComp>
      {customers.map((customer) => (
        <CustomerListItem {...customer} />
      ))}
    </CustomersListMobileComp>
    // </ResponsiveMobile>
  );
};
const CustomerListItem = ({
  image,
  name,
  date,
  stars,
  review,
}: CustomerItem) => (
  // <div className="h-full w-full px-8">
  <div className="flex h-full w-full flex-grow flex-col space-y-4 bg-white p-4 text-sm text-black md:h-auto">
    <div className="flex w-full flex-row items-center justify-start space-x-2">
      <Image
        src={image}
        width={64}
        height={64}
        alt={name}
        className="h-12 w-12 rounded-full"
      />
      <span className="w-auto">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs">{date}</p>
      </span>
    </div>
    <Stars value={stars} size="small" />
    <p className="text-sm">{review}</p>
  </div>
  // </div>
);
export default CustomersListMobile;
