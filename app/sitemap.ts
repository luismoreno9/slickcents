import type { MetadataRoute } from "next";
import { allArticles, CATEGORIES, categorySlug } from "@/lib/articles";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Home — highest priority
  const home: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Secondary static pages
  const staticPaths = ["/about", "/contact", "/privacy-policy", "/terms-of-service"];
  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  // Category index pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/category/${categorySlug(cat)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  // Blog articles
  const articlePages: MetadataRoute.Sitemap = allArticles.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...home, ...staticPages, ...categoryPages, ...articlePages];
}
