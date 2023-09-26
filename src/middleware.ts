import {
  NextResponse,
  userAgent,
  NextRequest,
  NextFetchEvent,
} from "next/server";
import { v4 } from "uuid";
import { resolveUrl } from "./lib/middleware/resolveUrl";
import { NextURL } from "next/dist/server/web/next-url";
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|fonts).*)"],
};

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  console.log("Executing Middleware for url: ", request.nextUrl.pathname);
  let url = request.nextUrl.clone();
  let res = NextResponse.rewrite(url);
  if (
    request.headers.get("user-agent")?.includes("GoogleStackdriverMonitoring")
  ) {
    console.log("Google Uptime Detected");
    return res;
  }
  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";

  let userId = request.cookies.get("uid")?.value || crypto.randomUUID();

  let newPath = await resolveUrl(request, userId, event);
  if (newPath !== url.pathname) {
    if (newPath.includes("http")) {
      url = new NextURL(newPath + url.search);
    } else {
      url.pathname = newPath;
    }
    res = NextResponse.redirect(url);
    res.headers.set("Cache-Control", "no-cache");
  }

  var expiresDate = new Date();
  expiresDate.setFullYear(expiresDate.getFullYear() + 1);

  if (!request.cookies.get("uid")) {
    res.cookies.set("uid", v4(), {
      domain: process.env.NEXT_PUBLIC_DOMAIN,
    });
  }
  if (request.nextUrl.searchParams.get("gclid")) {
    if (!request.cookies.get("gclid")) {
      res.cookies.set("gclid", request.nextUrl.searchParams.get("gclid")!, {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
      });
    }
  }
  if (request.nextUrl.searchParams.get("msclkid")) {
    if (!request.cookies.get("msclkid")) {
      res.cookies.set("msclkid", request.nextUrl.searchParams.get("msclkid")!, {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
      });
    }
  }
  if (request.nextUrl.searchParams.get("fbclid")) {
    if (!request.cookies.get("fbclid")) {
      res.cookies.set("fbclid", request.nextUrl.searchParams.get("fbclid")!, {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
      });
    }
  }
  if (!request.cookies.get("city")) {
    if (request.geo?.city) {
      res.cookies.set("city", request.geo.city, {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
      });
    }
  }
  if (!request.cookies.get("region")) {
    if (request.geo?.region) {
      res.cookies.set("region", request.geo.region, {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
      });
    }
  }
  if (!request.cookies.get("country")) {
    if (request.geo?.country) {
      res.cookies.set("country", request.geo.country, {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
      });
    }
  }
  res.cookies.set("viewport", viewport);
  return res;
}
