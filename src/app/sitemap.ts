import type { MetadataRoute } from "next";
import { defaultLocale, locales, localeTags } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === defaultLocale ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [localeTags[l], `${siteUrl}/${l}`])
      ),
    },
  }));
}
