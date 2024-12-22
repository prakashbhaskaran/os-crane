import { baseUrl, navbarLinks } from "@constants/links";

export default async function sitemap() {
  const links = [...navbarLinks.main, ...navbarLinks.extra].map((item) => ({
    url: `${baseUrl}${item.link}`,
    lastModified: new Date(),
  }));
  return [...links];
}
