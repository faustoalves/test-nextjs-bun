export const CustomersScrap = {
  async getCustomersInfo() {
    const article = await fetch(`https://lp.benu.at/api/scrapComments`, {
      next: { tags: ["customers"], revalidate: 60 * 60 * 24000 },
    });
    return await article.json();
  },
};
