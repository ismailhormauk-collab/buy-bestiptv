import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/pricing`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/features`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/installation`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
