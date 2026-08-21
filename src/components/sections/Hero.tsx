"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PORTRAIT } from "@/content/config";
import type { Dictionary } from "@/content/types";
import StatusPill from "@/components/ui/StatusPill";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero({ t }: { t: Dictionary }) {
  return (
    <section id="top" className="shell pb-10 pt-4 sm:pb-14 sm:pt-10">
      <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-[1.25fr_1fr] md:gap-14">
        {/* Бичвэр */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="label mb-4 sm:mb-6"
          >
            {t.hero.role}
          </motion.p>

          <h1 className="display text-[clamp(2rem,9vw,5rem)]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.05, ease: EASE }}
              >
                {t.hero.line1} {t.hero.line2}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block italic text-accent"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: EASE }}
              >
                {t.hero.accent}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="mt-5 max-w-[44ch] text-dim sm:mt-7"
          >
            {t.hero.subcopy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9"
          >
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3 text-sm text-accent-ink transition-transform duration-500 hover:-translate-y-0.5"
            >
              {t.hero.ctaWork}
            </a>
            <a
              href="#contact"
              className="rounded-full bg-card px-6 py-3 text-sm shadow-[var(--sh-1)] transition-transform duration-500 hover:-translate-y-0.5"
            >
              {t.hero.ctaContact}
            </a>
            <StatusPill label={t.nav.available} className="lg:hidden" />
          </motion.div>
        </div>

        {/* Хөрөг */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="relative mx-auto w-full max-w-[17rem] overflow-hidden rounded-[var(--r-lg)] bg-clay md:max-w-none"
        >
          <div className="relative aspect-[4/5]">
            <Image
              src={PORTRAIT.src}
              alt={t.about.portraitAlt}
              fill
              sizes="(min-width: 768px) 420px, 272px"
              className="object-cover object-[36%_56%]"
              priority
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
