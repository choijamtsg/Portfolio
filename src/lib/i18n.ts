import type { Dictionary } from "@/content/types";
import { mn } from "@/content/mn";
import { en } from "@/content/en";
import { it } from "@/content/it";

export const locales = ["en", "mn", "it"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Хэл солих товчны шошго */
export const localeNames: Record<Locale, { short: string; full: string }> = {
  mn: { short: "МН", full: "Монгол" },
  en: { short: "EN", full: "English" },
  it: { short: "IT", full: "Italiano" },
};

/** <html lang="..."> болон hreflang-д ашиглана */
export const localeTags: Record<Locale, string> = {
  mn: "mn-MN",
  en: "en",
  it: "it-IT",
};

const dictionaries: Record<Locale, Dictionary> = { mn, en, it };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
