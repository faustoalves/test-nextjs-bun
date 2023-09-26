import { generateGoogleMapsImage } from "@/components/opengraph-generator/googleMaps";
import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

type Props = {
  params: { slug: string[] };
};

export async function GET(request: NextRequest, { params }: Props) {
  let center = params.slug[0];
  let settings = params.slug[1];
  let markerType = params.slug[2];

  return await generateGoogleMapsImage({
    center,
    settings,
    markerType,
  });
}
