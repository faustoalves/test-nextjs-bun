import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const adjustMiddlewareCookies = (
  request: NextRequest,
  response: NextResponse,
  userId: string
) => {
  const {
    nextUrl: { search },
  } = request;
  const urlSearchParams = new URLSearchParams(search);
  const params = Object.fromEntries(urlSearchParams.entries());

  var expiresDate = new Date();
  expiresDate.setFullYear(expiresDate.getFullYear() + 1);

  let cookieDomain = request.nextUrl.hostname.includes(
    process.env.NEXT_PUBLIC_DOMAIN!
  )
    ? process.env.NEXT_PUBLIC_DOMAIN
    : request.nextUrl.hostname;

  // console.log(cookieDomain);
  if (!request.cookies.get("uid")) {
    response.cookies.set("uid", userId, {
      expires: expiresDate,
      domain: cookieDomain,
    });
  }
  if (!request.cookies.get("city")) {
    if (request.geo?.city) {
      response.cookies.set("city", request.geo.city, {
        domain: cookieDomain,
      });
    }
  }
  if (!request.cookies.get("region")) {
    if (request.geo?.region) {
      response.cookies.set("region", request.geo.region, {
        domain: cookieDomain,
      });
    }
  }
  if (!request.cookies.get("country")) {
    if (request.geo?.country) {
      response.cookies.set("country", request.geo.country, {
        domain: cookieDomain,
      });
    }
  }
};
