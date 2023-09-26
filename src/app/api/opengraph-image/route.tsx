import { generateOgPageImage } from "@/components/opengraph-generator/landingPage";
import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") || "/";
  const slug = request.nextUrl.searchParams.get("slug") || "/";
  if (type === "articles") {
    return await generateOgPageImage({ slug: slug });
  }
  return await generateOgPageImage({ slug: slug });
}
