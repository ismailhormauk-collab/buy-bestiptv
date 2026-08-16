#!/usr/bin/env node
/**
 * One-time / re-runnable local setup script.
 *
 * Reads a Google service account JSON key file and writes the three values
 * the app needs (client_email, private_key, project_id) into .env.local as
 * GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY /
 * GOOGLE_CLOUD_PROJECT_ID.
 *
 * The private key is NEVER printed to the terminal — only a redacted
 * confirmation (email + key length) is logged.
 *
 * Usage:
 *   node scripts/setup-google-credentials.mjs [path-to-service-account.json]
 *
 * Defaults to looking for a service-account-shaped JSON file on the
 * Desktop if no path is given.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const envPath = path.join(projectRoot, ".env.local");

function findDesktopServiceAccountFile() {
  const desktop = path.join(os.homedir(), "Desktop");
  if (!fs.existsSync(desktop)) return null;
  const candidates = fs
    .readdirSync(desktop)
    .filter((f) => f.toLowerCase().endsWith(".json"))
    .map((f) => path.join(desktop, f));

  for (const file of candidates) {
    try {
      const data = JSON.parse(fs.readFileSync(file, "utf8"));
      if (data.type === "service_account" && data.client_email && data.private_key) {
        return file;
      }
    } catch {
      // not JSON / not readable — skip
    }
  }
  return null;
}

const argPath = process.argv[2];
const filePath = argPath ? path.resolve(argPath) : findDesktopServiceAccountFile();

if (!filePath || !fs.existsSync(filePath)) {
  console.error(
    "Could not find a Google service account JSON file.\n" +
      "Pass the path explicitly:\n" +
      "  node scripts/setup-google-credentials.mjs /path/to/file.json"
  );
  process.exit(1);
}

let creds;
try {
  creds = JSON.parse(fs.readFileSync(filePath, "utf8"));
} catch (err) {
  console.error("Failed to parse JSON file:", err.message);
  process.exit(1);
}

if (creds.type !== "service_account" || !creds.client_email || !creds.private_key || !creds.project_id) {
  console.error("This file does not look like a valid Google service account key (missing required fields).");
  process.exit(1);
}

// Store the private key as a single line with escaped \n — this is the
// portable format for both .env.local and the Vercel dashboard. The app's
// auth code converts \n back to real newlines at runtime.
const singleLineKey = creds.private_key.replace(/\r?\n/g, "\\n");

const varsToWrite = {
  GOOGLE_SERVICE_ACCOUNT_EMAIL: creds.client_email,
  GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: singleLineKey,
  GOOGLE_CLOUD_PROJECT_ID: creds.project_id,
};

let existing = "";
if (fs.existsSync(envPath)) {
  existing = fs.readFileSync(envPath, "utf8");
}

let lines = existing.length ? existing.split(/\r?\n/) : [];
const seenKeys = new Set();

lines = lines.map((line) => {
  const match = line.match(/^([A-Z0-9_]+)=/);
  if (match && Object.prototype.hasOwnProperty.call(varsToWrite, match[1])) {
    seenKeys.add(match[1]);
    return `${match[1]}=${varsToWrite[match[1]]}`;
  }
  return line;
});

for (const [key, value] of Object.entries(varsToWrite)) {
  if (!seenKeys.has(key)) {
    lines.push(`${key}=${value}`);
  }
}

// Also make sure ADMIN_API_SECRET has a placeholder if not already set,
// so the Search Console API routes have something to check against locally.
if (!lines.some((l) => l.startsWith("ADMIN_API_SECRET="))) {
  const generated = fs.existsSync("/dev/urandom")
    ? Buffer.from(await import("node:crypto").then((c) => c.randomBytes(24))).toString("hex")
    : Math.random().toString(36).slice(2);
  lines.push(`ADMIN_API_SECRET=${generated}`);
}

fs.writeFileSync(envPath, lines.filter((l, i, arr) => !(l === "" && arr[i - 1] === "")).join("\n") + "\n", {
  mode: 0o600,
});

console.log("Credentials written to .env.local (not committed — see .gitignore).");
console.log(`  GOOGLE_SERVICE_ACCOUNT_EMAIL   = ${creds.client_email}`);
console.log(`  GOOGLE_CLOUD_PROJECT_ID        = ${creds.project_id}`);
console.log(`  GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY = [REDACTED, ${creds.private_key.length} chars]`);
console.log("\nSource file was NOT copied into the project and was NOT modified.");
console.log(`You may now delete or move the source file if you wish:\n  ${filePath}`);
