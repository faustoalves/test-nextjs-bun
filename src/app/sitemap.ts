import { Sitemap } from "../services/sitemap";

export default async function sitemap() {
  let info: any[] = await Sitemap.getByDomain("benu");
  return info.map((item) => {
    return {
      url: item.url,
      lastModified: item.lastmod,
    };
  });
}
