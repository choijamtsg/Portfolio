"use client";

import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/i18n";

/** МН / EN / IT — цагаан дугуй сэлгүүр */
export default function LanguageSwitcher({
  current,
  label,
  className = "",
}: {
  current: Locale;
  label: string;
  className?: string;
}) {
  return (
    <div
      aria-label={label}
      className={`flex items-center gap-0.5 rounded-full bg-card p-1 shadow-[var(--sh-1)] ${className}`}
    >
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={`/${locale}`}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-medium tracking-wide transition-colors duration-300 ${
              active
                ? "bg-accent text-accent-ink"
                : "text-faint hover:text-ink"
            }`}
          >
            {localeNames[locale].short}
          </Link>
        );
      })}
    </div>
  );
}
