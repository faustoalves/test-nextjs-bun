import { generateGoogleMapsImage } from "@/components/opengraph-generator/googleMaps";
import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  let center = request.nextUrl.searchParams.get("center");
  let zoom = request.nextUrl.searchParams.get("zoom");
  let scale = request.nextUrl.searchParams.get("scale");
  let markerType = request.nextUrl.searchParams.get("markerType");

  return await generateGoogleMapsImage({
    center: center,
    zoom: zoom ? zoom : 14,
    scale: scale ? scale : 2,
    markerType: markerType ? markerType : "default",
  });
}
