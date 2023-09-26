import { Page } from "@/services/Page";
import { Articles } from "@/services/articles";
import { ImageResponse } from "next/server";

export const generateGoogleMapsImage = async ({
  center,
  settings,
  markerType,
}: any) => {
  const setting = getSettings(settings, markerType);
  // console.log(setting);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          color: "#FAFAFA",
          background: "white",
          backgroundImage: `url('https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${setting.zoom}&size=${setting.size}x${setting.size}&scale=${setting.scale}&key=AIzaSyC1FnqfxEtPCI6h1wg5iJ9EdOqtJbv1wxY&map_id=17e75eb531a6f0ca')`,
          backgroundSize: "100% 100%",
          objectFit: "cover",
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "30px 0px",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: setting.padding,
          }}
        >
          <img src={setting.marker} />
        </div>
      </div>
    ),
    {
      width: setting.size,
      height: setting.size,
    }
  );
};

const getSettings = (settings: string, marker: string) => {
  let baseSettings = {
    zoom: "15",
    scale: "2",
    size: 1200,
    pinSize: "140",
    padding: "0px 0px 30px",
    marker: "",
  };
  switch (settings) {
    case "quarter":
      baseSettings.size = 300;
      baseSettings.pinSize = "80";
      baseSettings.zoom = "17";
      baseSettings.padding = "0px 0px 10px";
      break;
    case "half":
      baseSettings.size = 600;
      baseSettings.pinSize = "100";
      baseSettings.zoom = "16";
      baseSettings.padding = "0px 0px 20px";
      break;

    default:
      break;
  }
  baseSettings.marker = getPin(marker, baseSettings.pinSize);
  return baseSettings;
};

const getPin = (markerType: string, size: string) => {
  switch (markerType) {
    case "default":
      return `https://res.cloudinary.com/dkyl4jbxx/image/upload/w_${size},f_auto/v1694467457/benuPin.png`;

    default:
      return `https://res.cloudinary.com/dkyl4jbxx/image/upload/w_${size},f_auto/v1694467457/benuPin.png`;
  }
};
