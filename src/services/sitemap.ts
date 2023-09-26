export const Sitemap = {
  async getByDomain(domain: string) {
    let sitemap = await fetch(
      `https://strapi.benu.at/api/sitemap/getByDomain?domain=benu`,
      {
        next: { tags: ["sitemap"] },
      }
    );
    return sitemap.json();
  },
};
