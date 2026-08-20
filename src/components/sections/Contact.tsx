import { SITE, SOCIAL_ITEMS } from "@/content/config";
import type { Dictionary } from "@/content/types";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { socialIcons, type SocialKey } from "@/components/ui/Icons";

export default function Contact({ t }: { t: Dictionary }) {
  return (
    <section id="contact" className="shell scroll-mt-24 pb-[var(--section-y)]">
      <Reveal>
        <p className="label mb-4">
          <span className="text-accent">04</span> — {t.contact.label}
        </p>
      </Reveal>

      <Reveal delay={0.06}>
        <Card
          tone="accent"
          lift={false}
          className="px-8 py-14 text-center sm:px-12 sm:py-20"
        >
          <h2 className="display text-[clamp(2rem,5vw,3.75rem)]">
            {t.contact.line1}{" "}
            <span className="italic opacity-90">{t.contact.accent}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[44ch] text-sm leading-relaxed text-accent-ink/80">
            {t.contact.body}
          </p>

          <a
            href={`mailto:${SITE.email}`}
            className="mt-9 inline-block break-all rounded-full bg-card px-7 py-3.5 text-sm text-accent transition-transform duration-500 hover:-translate-y-0.5"
          >
            {SITE.email}
          </a>

          <ul className="mt-8 flex justify-center gap-2">
            {SOCIAL_ITEMS.map((s) => {
              const Icon = socialIcons[s.key as SocialKey];
              return (
                <li key={s.key}>
                  <a
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noreferrer noopener" : undefined}
                    aria-label={t.social[s.key as SocialKey]}
                    className="grid h-10 w-10 place-items-center rounded-full bg-accent-ink/10 text-accent-ink transition-colors duration-300 hover:bg-accent-ink/20"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </Card>
      </Reveal>
    </section>
  );
}
