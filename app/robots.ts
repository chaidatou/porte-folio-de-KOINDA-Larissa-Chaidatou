import type { MetadataRoute } from "next";

const siteUrl = "https://porte-folio-de-koinda-larissa-chaid.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
