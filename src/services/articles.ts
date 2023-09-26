export const Articles = {
  async getStrapiInfo(slug: string) {
    const article = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API}/article/getBySlug?slug=${slug}`,
      {
        next: { tags: [`article-${slug}`] },
      }
    );
    return await article.json();
  },
  async getStrapiMetadata(slug: string) {},
};
