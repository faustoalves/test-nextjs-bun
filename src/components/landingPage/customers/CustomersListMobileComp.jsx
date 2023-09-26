// "use client";
import React from "react";
import Carousel from "react-multi-carousel";


const responsive = {
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomersListMobileComp =  ({
  children,
}) => {
  return (
    <div className="flex md:hidden">
    <Carousel 
    ssr={true}
    deviceType="mobile"
    arrows={false}
    showDots={true}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={6000}
    responsive={responsive}>
      {children}
    </Carousel>
    </div>
  );
};

export default CustomersListMobileComp;
