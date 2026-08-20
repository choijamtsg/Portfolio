/**
 * Сайтын үндсэн хаяг.
 *
 * Домэйн байхгүй тул Vercel-ийн өгдөг хаягийг автоматаар авна:
 *   1. NEXT_PUBLIC_SITE_URL      — өөрийн домэйн авсан үед энэ хувьсагчийг Vercel дээр нэм
 *   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel-ийн тогтмол production хаяг (…vercel.app)
 *   3. localhost                 — дотоод хөгжүүлэлт
 *
 * Зөвхөн сервер талд (metadata, sitemap, robots) ашиглана — client компонент
 * дотор env хувьсагч байдаггүй тул тэнд дуудаж болохгүй.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}
