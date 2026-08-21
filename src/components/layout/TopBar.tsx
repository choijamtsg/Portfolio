"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { NAV_ITEMS, SITE } from "@/content/config";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import StatusPill from "@/components/ui/StatusPill";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function TopBar({
  t,
  locale,
}: {
  t: Dictionary;
  locale: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = NAV_ITEMS.map((n) => document.getElementById(n.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top) setActive(top.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.6, 1] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between py-4 sm:py-5">
        <a href="#top" className="display text-lg sm:text-xl">
          {SITE.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.key}
                href={item.href}
                className={`relative text-sm transition-colors duration-300 ${
                  isActive ? "text-ink" : "text-dim hover:text-ink"
                }`}
              >
                {t.nav[item.key]}
                {isActive ? (
                  <motion.span
                    layoutId="topbar-dot"
                    className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <StatusPill label={t.nav.available} className="hidden lg:inline-flex" />
          <LanguageSwitcher current={locale} label={t.nav.language} />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full bg-card shadow-[var(--sh-1)] md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-full bg-ink transition-all duration-300 ${
                  open ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-ink transition-all duration-300 ${
                  open ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="shell flex flex-col gap-1 pb-6">
              {NAV_ITEMS.map((item, i) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="display block py-2.5 text-3xl"
                  >
                    <span className="mr-3 text-sm text-accent">0{i + 1}</span>
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <StatusPill label={t.nav.available} />
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
