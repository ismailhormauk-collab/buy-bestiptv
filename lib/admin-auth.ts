import "server-only";

/**
 * Minimal shared-secret auth guard for the internal Search Console API
 * routes. This project has no broader auth system to reuse — this is
 * intentionally the smallest thing that works: a bearer token compared
 * against ADMIN_API_SECRET (server-side only env var).
 */
export function isAuthorizedAdminRequest(request: Request): boolean {
  const secret = process.env.ADMIN_API_SECRET;
  if (!secret) return false; // never allow access if unconfigured

  const header = request.headers.get("authorization") ?? "";
  const [scheme, token] = header.split(" ");
  if (scheme !== "Bearer" || !token) return false;

  return timingSafeEqual(token, secret);
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export function unauthorizedResponse(): Response {
  return Response.json({ error: "Unauthorized" }, { status: 401 });
}
