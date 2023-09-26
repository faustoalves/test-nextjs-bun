import { NextRequest, NextResponse, userAgent } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const json = await request.json();
  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";

  const url = "https://events.statsigapi.net/v1/log_event";
  let uid = request.cookies.get("uid")?.value
    ? request.cookies.get("uid")?.value
    : json.uid;

  const body = {
    events: [
      {
        user: {
          userID: uid,
          custom: {
            deviceType: viewport,
          },
        },
        eventName: json.event,
        value: json.value,
        metadata: getUserMetadata(request),
      },
    ],
  };

  const response = await fetch(url, {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "statsig-api-key": process.env.STATSIG_SERVER_API_KEY!,
    },
  });

  const responseJson = await response.json();
  // console.log(body);

  return NextResponse.json(responseJson);
}

const getUserMetadata = (request: NextRequest) => {
  return {
    gclid: request.cookies.get("gclid")?.value,
    msclkid: request.cookies.get("msclkid")?.value,
    fbclid: request.cookies.get("fbclid")?.value,
    country: request.cookies.get("country")?.value,
    region: request.cookies.get("region")?.value,
    city: request.cookies.get("city")?.value,
    pageCanonical: request.cookies.get("pageCanonical")?.value,
    offerUUID: request.cookies.get("offerUUID")?.value,
  };
};
