import { isAuthorizedAdminRequest, unauthorizedResponse } from "@/lib/admin-auth";
import { inspectUrl } from "@/lib/google-search-console";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

/**
 * GET /api/search-console/inspect?url=https://buy-bestiptv.com/some-page
 *
 * Reports Google's current indexing status for a single URL on this site.
 * Restricted to https://buy-bestiptv.com/* URLs only. This reports status —
 * it does NOT request or guarantee indexing of the URL. Admin-only.
 */
export async function GET(request: Request) {
  if (!isAuthorizedAdminRequest(request)) return unauthorizedResponse();

  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return Response.json({ error: "url query param is required." }, { status: 400 });
  }
  if (!url.startsWith(siteConfig.url)) {
    return Response.json({ error: `Only URLs under ${siteConfig.url} may be inspected.` }, { status: 400 });
  }

  try {
    const result = await inspectUrl(url);
    return Response.json({ result });
  } catch (error) {
    console.error("Search Console URL inspection failed:", error instanceof Error ? error.message : error);
    return Response.json({ error: "Failed to inspect URL." }, { status: 502 });
  }
}
