import { Articles } from "@/services/articles";
import { ImageResponse } from "next/server";

const font = fetch(
  new URL("/public/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export const generateOgPageImage = async ({ slug }: any) => {
  const fontData = await font;

  const info = await Articles.getStrapiInfo(`${slug}`);
  // console.log(info.global_seo);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          color: "#FAFAFA",
          background: "white",
          backgroundImage: `url('${info.global_seo.sharing_image.url.replace(
            "/upload",
            "/upload/w_1200,h_600,c_fill,f_auto,q_auto/e_colorize:80,co_rgb:000000"
          )}')`,
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
          textShadow: "3px 3px 10px #000000",
        }}
      >
        <div
          style={{
            fontSize: 32,
            width: "80%",
          }}
        >
          aaa
        </div>
        <div
          style={{
            fontSize: 48,
            width: "80%",
          }}
        >
          {info.global_seo.title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
};
