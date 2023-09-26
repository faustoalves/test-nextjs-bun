import { NextFetchEvent, NextRequest } from "next/server";
import Statsig, { DynamicConfig } from "statsig-node";
import { EdgeConfigDataAdapter } from "statsig-node-vercel";
import { routesExperiment } from "./test-buckets";

const dataAdapter = new EdgeConfigDataAdapter(
  process.env.EDGE_CONFIG_ITEM_KEY!
);

export const resolveUrl = async (
  request: NextRequest,
  userId: string,
  event: NextFetchEvent
) => {
  let pathname = request.nextUrl.pathname;
  if (routesExperiment.get(pathname)) {
    await Statsig.initialize(process.env.STATSIG_SERVER_API_KEY!, {
      dataAdapter,
    });
    const experiment = await Statsig.getExperiment(
      {
        userID: userId,
        custom: {
          userAgent: request.headers.get("user-agent")?.toString(),
          ip: request.ip,
          env: process.env.NEXT_PUBLIC_STAGE,
        },
      },
      String(routesExperiment.get(pathname))
    );
    if (experiment.value.path) {
      pathname = String(experiment.value.path);
      event.waitUntil(Statsig.flush());
    }
  }
  return pathname;
};
