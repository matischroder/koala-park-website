import type { MetadataRoute } from "next";
import { site, siteUrl } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: site.isPreview ? { userAgent: "*", disallow: "/" } : { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl()}/sitemap.xml`,
  };
}
