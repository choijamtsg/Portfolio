import type { MetadataRoute } from "next";
import { SITE } from "@/content/config";
import { defaultLocale, locales, localeTags } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${SITE.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === defaultLocale ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [localeTags[l], `${SITE.url}/${l}`])
      ),
    },
  }));
}
