export const Page = {
  async getStrapiInfo(slug: string) {
    // console.log("slug: " + slug);
    const article = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/landing-page/getLandingPageBySlug/?slug=${slug}`,
      {
        next: { tags: [slug, "global", "pages"], revalidate: 99999999 },
      }
    );
    return await article.json();
  },
};
