/**
 * Prefix the Pages basePath on root-relative asset URLs.
 * next/image with `unoptimized` does not apply basePath, so media srcs
 * must be prefixed explicitly for project Pages hosts (/SPGD-site).
 */
export function withBase(src: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return base && src.startsWith('/') ? `${base}${src}` : src;
}
