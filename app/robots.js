import { baseUrl, navbarLinks } from "@constants/links";
export default function robots() {
  const links = [...navbarLinks.main, ...navbarLinks.extra].map(
    (item) => item.link
  );
  return {
    rules: {
      userAgent: "*",
      allow: links,
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
