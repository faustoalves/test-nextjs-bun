import { NextRequest, NextResponse, userAgent } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  let data = await fetch(generateUrl(request), {
    next: { tags: ["stream"], revalidate: 999999999 },
  });

  const res = new NextResponse(data.body, {
    status: 200,
    headers: new Headers({
      "content-type": "application/javascript",
    }),
  });
  return res;
}

const generateUrl = (request: NextRequest) => {
  let search = request.nextUrl.searchParams;
  let url = "https:/";
  search.forEach((value, key) => {
    if (key === "slug") {
      url = `${url}/${value}`;
    }
  });
  search.forEach((value, key) => {
    if (key !== "slug") {
      url = `${url}${url.includes("?") ? "&" : "?"}${key}=${value}`;
    }
  });
  return url;
};
