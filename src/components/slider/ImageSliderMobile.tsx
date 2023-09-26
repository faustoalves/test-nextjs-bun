"use client";
import { ImageProps } from "@/types/image";
import React from "react";
import Carousel from "react-multi-carousel";
import CImage from "../CImage";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

type Props = {
  sliderImageUrl: ImageProps[];
};

const ImageSliderMobile = ({ sliderImageUrl }: Props) => {
  return (
    <div className="h-auto min-h-fit w-screen  md:w-full">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        autoPlaySpeed={6000}
      >
        {sliderImageUrl.map((image, index) => {
          return (
            <CImage
              src={image.url}
              alt={image.alt}
              width={1200}
              height={620}
              crop={false}
              className="h-[300px] w-full object-cover lg:h-[620px]"
              priority={false}
              quality={95}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageSliderMobile;
