export const SITE_URL = "https://slickcents.com";
export const SITE_NAME = "SlickCents";
export const AUTHOR_NAME = "Sarah Chen";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
