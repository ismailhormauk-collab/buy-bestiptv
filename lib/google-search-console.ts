import "server-only";
import { google } from "googleapis";
import { siteConfig } from "./site";

/**
 * Server-only Google Search Console integration.
 *
 * Authenticates as the service account configured via environment
 * variables (never hardcoded, never client-exposed) and exposes small,
 * purpose-built helpers for Search Analytics, Sitemaps, and URL Inspection.
 *
 * This does NOT replace the app's own /sitemap.xml (see app/sitemap.ts),
 * which remains the single source of truth for the site's URLs. This module
 * only talks to Google's Search Console API about that existing sitemap —
 * it never generates or hardcodes URLs of its own.
 */

// The buy-bestiptv.com property is registered in Search Console as a
// Domain property, not a URL-prefix property — those use the special
// "sc-domain:<domain>" identifier (no protocol) as the API's siteUrl,
// which differs from the app's own canonical URLs. Keep that distinction
// local to this file.
const SEARCH_CONSOLE_SITE_URL = `sc-domain:${siteConfig.domain}`;
const SITEMAP_URL = `${siteConfig.url}/sitemap.xml`;

const SCOPES = ["https://www.googleapis.com/auth/webmasters"];

class MissingCredentialsError extends Error {
  constructor(missing: string[]) {
    super(`Google Search Console is not configured. Missing env var(s): ${missing.join(", ")}`);
    this.name = "MissingCredentialsError";
  }
}

function readCredentials() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;

  const missing: string[] = [];
  if (!email) missing.push("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  if (!rawKey) missing.push("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY");
  if (!projectId) missing.push("GOOGLE_CLOUD_PROJECT_ID");
  if (missing.length > 0) throw new MissingCredentialsError(missing);

  // Env vars store the key as a single line with escaped \n; convert back
  // to real newlines for the PEM parser.
  const privateKey = rawKey!.includes("\\n") ? rawKey!.replace(/\\n/g, "\n") : rawKey!;

  return { email: email!, privateKey, projectId: projectId! };
}

let cachedAuth: InstanceType<typeof google.auth.JWT> | null = null;

function getAuth() {
  if (cachedAuth) return cachedAuth;
  const { email, privateKey } = readCredentials();
  cachedAuth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: SCOPES,
  });
  return cachedAuth;
}

/** Search Analytics + Sitemaps live under the legacy "webmasters" API surface. */
function getWebmastersClient() {
  return google.webmasters({ version: "v3", auth: getAuth() });
}

/** URL Inspection lives under the newer "searchconsole" API surface. */
function getSearchConsoleClient() {
  return google.searchconsole({ version: "v1", auth: getAuth() });
}

export type SearchAnalyticsDimension = "query" | "page" | "country" | "device" | "date";

export type SearchAnalyticsParams = {
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  dimensions?: SearchAnalyticsDimension[];
  rowLimit?: number;
};

export type SearchAnalyticsRow = {
  keys?: string[];
  clicks?: number;
  impressions?: number;
  ctr?: number;
  position?: number;
};

/**
 * Query clicks/impressions/CTR/position for the site, optionally broken
 * down by query, page, country, device, and/or date.
 */
export async function getSearchAnalytics(params: SearchAnalyticsParams): Promise<SearchAnalyticsRow[]> {
  const webmasters = getWebmastersClient();
  const rowLimit = Math.min(params.rowLimit ?? 100, 1000); // never request unbounded data

  const res = await webmasters.searchanalytics.query({
    siteUrl: SEARCH_CONSOLE_SITE_URL,
    requestBody: {
      startDate: params.startDate,
      endDate: params.endDate,
      dimensions: params.dimensions,
      rowLimit,
    },
  });

  return (res.data.rows ?? []) as SearchAnalyticsRow[];
}

export type SitemapInfo = {
  path?: string | null;
  lastSubmitted?: string | null;
  lastDownloaded?: string | null;
  isPending?: boolean | null;
  isSitemapsIndex?: boolean | null;
  warnings?: string | null;
  errors?: string | null;
  contents?: Array<{ type?: string | null; submitted?: string | null; indexed?: string | null }> | null;
};

/** List sitemaps currently known to Search Console for this property. */
export async function listSitemaps(): Promise<SitemapInfo[]> {
  const webmasters = getWebmastersClient();
  const res = await webmasters.sitemaps.list({ siteUrl: SEARCH_CONSOLE_SITE_URL });
  return (res.data.sitemap ?? []) as SitemapInfo[];
}

/** Get the status of the app's own sitemap.xml specifically. */
export async function getSitemapStatus(): Promise<SitemapInfo | null> {
  const webmasters = getWebmastersClient();
  try {
    const res = await webmasters.sitemaps.get({
      siteUrl: SEARCH_CONSOLE_SITE_URL,
      feedpath: SITEMAP_URL,
    });
    return res.data as SitemapInfo;
  } catch (err) {
    const status = (err as { code?: number; response?: { status?: number } })?.code ?? (err as { response?: { status?: number } })?.response?.status;
    if (status === 404) return null; // not submitted yet — not an error
    throw err;
  }
}

/**
 * Explicitly (re-)submit the site's existing sitemap.xml to Search Console.
 * Submitting a sitemap tells Google where to look — it does not force or
 * guarantee indexing of any URL within it.
 */
export async function submitSitemap(): Promise<{ submittedUrl: string }> {
  const webmasters = getWebmastersClient();
  await webmasters.sitemaps.submit({
    siteUrl: SEARCH_CONSOLE_SITE_URL,
    feedpath: SITEMAP_URL,
  });
  return { submittedUrl: SITEMAP_URL };
}

export type UrlInspectionResult = {
  inspectionResultLink?: string | null;
  indexStatusResult?: {
    verdict?: string | null;
    coverageState?: string | null;
    robotsTxtState?: string | null;
    indexingState?: string | null;
    lastCrawlTime?: string | null;
    googleCanonical?: string | null;
    userCanonical?: string | null;
    crawledAs?: string | null;
  } | null;
};

/**
 * Inspect a single URL's current indexing status. Only URLs under the
 * site's own production domain may be inspected (enforced by the caller /
 * API route, not just here, but re-checked as defense-in-depth).
 *
 * This reports Google's current view of the URL — it does not request or
 * force indexing.
 */
export async function inspectUrl(url: string): Promise<UrlInspectionResult> {
  if (!url.startsWith(siteConfig.url)) {
    throw new Error(`Refusing to inspect a URL outside ${siteConfig.url}`);
  }
  const searchconsole = getSearchConsoleClient();
  const res = await searchconsole.urlInspection.index.inspect({
    requestBody: {
      inspectionUrl: url,
      siteUrl: SEARCH_CONSOLE_SITE_URL,
    },
  });
  return (res.data as UrlInspectionResult) ?? {};
}

export const searchConsoleConfig = {
  siteUrl: SEARCH_CONSOLE_SITE_URL,
  sitemapUrl: SITEMAP_URL,
};
