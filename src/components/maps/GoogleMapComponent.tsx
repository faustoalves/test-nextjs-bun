import React, { PropsWithChildren } from "react";
import CImage from "../CImage";
import Image from "next/image";

type Props = {
  url: string;
  latlng: string;
  marker: string;
  activeLink: boolean;
  className: string;
  width: number;
  height: number;
};

const GoogleMapComponent = (props: Props) => {
  const { url, latlng, marker, activeLink, className, width, height } = props;
  // console.log(latlng);
  return (
    <ClickableArea {...props}>
      <img
        src={generateImageUrl(props)}
        alt="Click to open Google Map"
        className={`${className} h-full w-full object-cover`}
      />
    </ClickableArea>
  );
};

const generateImageUrl = (props: Props) => {
  let type = "full";
  if (props.width < 300) {
    type = "quarter";
  } else if (props.width < 600) {
    type = "half";
  }
  return `https://res.cloudinary.com/dkyl4jbxx/image/fetch/q_auto:best/f_auto/v1694460168/https://lp.benu.at/api/googlemaps-image/${props.latlng}/${type}/${props.marker}/`;
};

const ClickableArea = ({
  url,
  latlng,
  marker,
  activeLink,
  className,
  children,
}: Props & PropsWithChildren) => {
  if (activeLink && url && url.length > 20) {
    return (
      <a href={url} target="_blank">
        {children}
      </a>
    );
  }
  return <>{children}</>;
};

export default GoogleMapComponent;
