import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/content/config";
import { getSiteUrl } from "@/lib/site-url";
import { displayCyrillic, displayLatin, sans } from "@/lib/fonts";
import {
  getDictionary,
  isLocale,
  locales,
  localeTags,
  type Locale,
} from "@/lib/i18n";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "../globals.css";

/** Гурван хэлийг урьдчилан статикаар үүсгэнэ */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [localeTags[l], `/${l}`])
      ),
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/${locale}`,
      title: t.meta.title,
      description: t.meta.description,
      siteName: SITE.name,
      locale: localeTags[locale].replace("-", "_"),
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export const viewport = {
  themeColor: "#faf7f2",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale as Locale);

  return (
    <html
      lang={localeTags[locale as Locale]}
      className={`${displayLatin.variable} ${displayCyrillic.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-sm focus:text-on-accent"
        >
          {t.nav.about}
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
