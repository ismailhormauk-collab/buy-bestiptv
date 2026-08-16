import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

/**
 * Resolves a page's real last-modified date from git history at build time,
 * so static routes get an accurate lastModified instead of a fresh timestamp
 * on every build. Falls back to undefined (omitted from the sitemap entry)
 * if git history isn't available in the build environment.
 */
function getLastModified(relativeFilePath: string): Date | undefined {
  try {
    const output = execSync(`git log -1 --format=%cI -- "${relativeFilePath}"`, {
      cwd: process.cwd(),
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return output ? new Date(output) : undefined;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1, lastModified: getLastModified("app/page.tsx") },
    {
      url: `${siteConfig.url}/pricing`,
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: getLastModified("app/pricing/page.tsx"),
    },
    {
      url: `${siteConfig.url}/features`,
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: getLastModified("app/features/page.tsx"),
    },
    {
      url: `${siteConfig.url}/installation`,
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: getLastModified("app/installation/page.tsx"),
    },
    {
      url: `${siteConfig.url}/faq`,
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: getLastModified("app/faq/page.tsx"),
    },
    {
      url: `${siteConfig.url}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: getLastModified("app/blog/page.tsx"),
    },
    {
      url: `${siteConfig.url}/contact`,
      changeFrequency: "yearly",
      priority: 0.6,
      lastModified: getLastModified("app/contact/page.tsx"),
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
