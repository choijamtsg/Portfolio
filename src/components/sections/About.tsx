import type { Dictionary } from "@/content/types";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export default function About({ t }: { t: Dictionary }) {
  return (
    <section id="about" className="shell scroll-mt-24 pb-[var(--section-y)]">
      <Reveal>
        <p className="label mb-4">
          <span className="text-accent">01</span> — {t.about.label}
        </p>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
        {/* Танилцуулга */}
        <Reveal>
          <Card className="h-full p-8 sm:p-10" lift={false}>
            <h2 className="display text-[clamp(1.8rem,3.4vw,2.6rem)]">
              {t.about.headline}
            </h2>
            <p className="mt-5 max-w-[52ch] text-dim">{t.about.intro}</p>
            <div className="mt-5 space-y-3.5">
              {t.about.story.map((p, i) => (
                <p key={i} className="max-w-[56ch] text-sm leading-relaxed text-dim">
                  {p}
                </p>
              ))}
            </div>
          </Card>
        </Reveal>

        {/* Зарчим */}
        <Reveal delay={0.1}>
          <Card tone="sage" className="h-full p-8 sm:p-10" lift={false}>
            <p className="label mb-6">{t.about.principlesLabel}</p>
            <ul className="space-y-6">
              {t.about.principles.map((pr, i) => (
                <li key={pr.title} className="flex gap-4">
                  <span className="mt-1 text-xs text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="display text-xl">{pr.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-dim">
                      {pr.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
