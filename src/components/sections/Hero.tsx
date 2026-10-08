"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { PORTRAIT } from "@/content/config";
import type { Dictionary } from "@/content/types";
import StatusPill from "@/components/ui/StatusPill";

const EASE = [0.16, 1, 0.3, 1] as const;
/** Хөшиг нээгдэх мэт — эхэндээ удаан, дундаа хурдан */
const CURTAIN = [0.77, 0, 0.18, 1] as const;

/** Гарчгийн үгс blur-оос тодорч, нэг нэгээрээ мандана */
function Words({ text, start }: { text: string; start: number }) {
  return text.split(" ").map((word, i) => (
    <span key={i}>
      {i > 0 ? " " : null}
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: "45%", filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.1, delay: start + i * 0.07, ease: EASE }}
      >
        {word}
      </motion.span>
    </span>
  ));
}

export default function Hero({ t }: { t: Dictionary }) {
  const reduced = useReducedMotion();
  const line1 = `${t.hero.line1} ${t.hero.line2}`;
  /* Хоёр дахь мөр эхний мөрийн үгсийн араас үргэлжилнэ */
  const accentStart = 0.12 + line1.split(" ").length * 0.07;

  return (
    <section id="top" className="shell pb-10 pt-4 sm:pb-14 sm:pt-10">
      <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-[1.25fr_1fr] md:gap-14">
        {/* Бичвэр */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="label mb-4 sm:mb-6"
          >
            {t.hero.role}
          </motion.p>

          <h1 className="display text-[clamp(2rem,9vw,5rem)]">
            <span className="block overflow-hidden pb-1">
              <Words text={line1} start={0.12} />
            </span>
            <span className="block overflow-hidden pb-1 italic text-accent">
              <Words text={t.hero.accent} start={accentStart} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.62, ease: EASE }}
            className="mt-5 max-w-[44ch] text-dim sm:mt-7"
          >
            {t.hero.subcopy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.74, ease: EASE }}
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9"
          >
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3 text-sm text-accent-ink transition-transform duration-500 hover:-translate-y-0.5 active:scale-[0.97] active:duration-150"
            >
              {t.hero.ctaWork}
            </a>
            <a
              href="#contact"
              className="rounded-full bg-card px-6 py-3 text-sm shadow-[var(--sh-1)] transition-transform duration-500 hover:-translate-y-0.5 active:scale-[0.97] active:duration-150"
            >
              {t.hero.ctaContact}
            </a>
            <StatusPill label={t.nav.available} className="lg:hidden" />
          </motion.div>
        </div>

        {/* Хөрөг */}
        {/* Хөрөг доороосоо дээш нээгдэж, зураг нь зөөлөн ойртоно */}
        <motion.figure
          initial={{ clipPath: "inset(100% 0% 0% 0% round 28px)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 28px)" }}
          /* SSR-тэй зөрөхгүйн тулд эхлэл ижил, reduced-motion үед шууд нээнэ */
          transition={
            reduced
              ? { duration: 0 }
              : { duration: 1.3, delay: 0.18, ease: CURTAIN }
          }
          className="relative mx-auto w-full max-w-[15rem] overflow-hidden rounded-[var(--r-lg)] bg-clay sm:max-w-[17rem] md:max-w-none"
        >
          <motion.div
            className="relative aspect-[4/5]"
            initial={{ scale: 1.18 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.9, delay: 0.18, ease: EASE }}
          >
            <Image
              src={PORTRAIT.src}
              alt={t.about.portraitAlt}
              fill
              sizes="(min-width: 768px) 420px, 272px"
              className="object-cover object-[36%_56%]"
              priority
            />
          </motion.div>
        </motion.figure>
      </div>
    </section>
  );
}
