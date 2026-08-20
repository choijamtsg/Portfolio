import type { Dictionary } from "@/content/types";
import Card, { type Tone } from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

/** Бүлэг бүрт ээлжлэн пастель өнгө оноодог */
const TONES: Tone[] = ["sage", "clay", "sky", "white"];

export default function Skills({ t }: { t: Dictionary }) {
  return (
    <section id="skills" className="shell scroll-mt-24 pb-[var(--section-y)]">
      <Reveal>
        <p className="label mb-4">
          <span className="text-accent">03</span> — {t.skills.label}
        </p>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="display mb-3 text-[clamp(1.8rem,3.4vw,2.6rem)]">
          {t.skills.headline}
        </h2>
        <p className="mb-8 max-w-[46ch] text-dim">{t.skills.intro}</p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.skills.groups.map((g, i) => (
          <Reveal key={g.index} delay={0.08 + i * 0.07}>
            <Card
              tone={TONES[i % TONES.length]}
              className="flex h-full flex-col p-7"
            >
              <span className="text-xs text-accent">{g.index}</span>
              <h3 className="display mt-3 text-xl">{g.title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-dim">
                {g.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {g.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-background/70 px-2.5 py-1 text-xs text-dim"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
