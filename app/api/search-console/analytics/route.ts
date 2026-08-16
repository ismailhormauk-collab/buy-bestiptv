import { isAuthorizedAdminRequest, unauthorizedResponse } from "@/lib/admin-auth";
import { getSearchAnalytics, type SearchAnalyticsDimension } from "@/lib/google-search-console";

export const runtime = "nodejs";

const VALID_DIMENSIONS: SearchAnalyticsDimension[] = ["query", "page", "country", "device", "date"];

/**
 * GET /api/search-console/analytics?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD&dimensions=query,page&rowLimit=100
 *
 * Returns Search Analytics (clicks, impressions, CTR, position) for
 * https://buy-bestiptv.com/ over the given date range. Admin-only.
 */
export async function GET(request: Request) {
  if (!isAuthorizedAdminRequest(request)) return unauthorizedResponse();

  const { searchParams } = new URL(request.url);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  if (!startDate || !endDate || !/^\d{4}-\d{2}-\d{2}$/.test(startDate) || !/^\d{4}-\d{2}-\d{2}$/.test(endDate)) {
    return Response.json({ error: "startDate and endDate query params are required (YYYY-MM-DD)." }, { status: 400 });
  }

  const dimensionsParam = searchParams.get("dimensions");
  const dimensions = dimensionsParam
    ? dimensionsParam
        .split(",")
        .map((d) => d.trim())
        .filter((d): d is SearchAnalyticsDimension => (VALID_DIMENSIONS as string[]).includes(d))
    : undefined;

  const rowLimitParam = searchParams.get("rowLimit");
  const rowLimit = rowLimitParam ? Number.parseInt(rowLimitParam, 10) : undefined;

  try {
    const rows = await getSearchAnalytics({ startDate, endDate, dimensions, rowLimit });
    return Response.json({ rows });
  } catch (error) {
    console.error("Search Console analytics query failed:", error instanceof Error ? error.message : error);
    return Response.json({ error: "Failed to fetch Search Analytics data." }, { status: 502 });
  }
}
