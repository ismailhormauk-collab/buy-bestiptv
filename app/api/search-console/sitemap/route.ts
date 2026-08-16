import { isAuthorizedAdminRequest, unauthorizedResponse } from "@/lib/admin-auth";
import { getSitemapStatus, listSitemaps, submitSitemap } from "@/lib/google-search-console";

export const runtime = "nodejs";

/**
 * GET /api/search-console/sitemap
 *
 * Reports Search Console's current knowledge of the site's existing
 * sitemap (see app/sitemap.ts — the sole source of truth for site URLs).
 * This route only reads/reports status; it never generates a sitemap.
 * Admin-only.
 */
export async function GET(request: Request) {
  if (!isAuthorizedAdminRequest(request)) return unauthorizedResponse();

  try {
    const [status, all] = await Promise.all([getSitemapStatus(), listSitemaps()]);
    return Response.json({ status, allSitemaps: all });
  } catch (error) {
    console.error("Search Console sitemap lookup failed:", error instanceof Error ? error.message : error);
    return Response.json({ error: "Failed to fetch sitemap status." }, { status: 502 });
  }
}

/**
 * POST /api/search-console/sitemap
 *
 * Explicitly (re-)submits the site's existing /sitemap.xml to Search
 * Console. Must be called deliberately — this does not run automatically
 * and does not create/replace any sitemap. Admin-only.
 */
export async function POST(request: Request) {
  if (!isAuthorizedAdminRequest(request)) return unauthorizedResponse();

  try {
    const result = await submitSitemap();
    return Response.json({ submitted: true, ...result });
  } catch (error) {
    console.error("Search Console sitemap submission failed:", error instanceof Error ? error.message : error);
    return Response.json({ error: "Failed to submit sitemap." }, { status: 502 });
  }
}
