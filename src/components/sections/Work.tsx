import { PROJECTS } from "@/content/config";
import type { Dictionary, ProjectCopy } from "@/content/types";
import Card from "@/components/ui/Card";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import ProjectShot from "@/components/ui/ProjectShot";
import CardStack from "@/components/ui/CardStack";
import { ArrowUpRightIcon } from "@/components/ui/Icons";

/** Tailwind нь `bg-${x}` мэт динамик класс үүсгэдэггүй тул бүтнээр нь бичнэ */
const BOX_TONES = ["bg-clay", "bg-sky", "bg-clay", "bg-sage"] as const;

function Detail({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="label mb-1.5">{label}</p>
      <p className="text-sm leading-relaxed text-dim">{body}</p>
    </div>
  );
}

function Project({
  t,
  copy,
  image,
  liveUrl,
  repoUrl,
  toneClass,
}: {
  t: Dictionary;
  copy: ProjectCopy;
  image: string | null;
  liveUrl?: string;
  repoUrl?: string;
  toneClass: (typeof BOX_TONES)[number];
}) {
  return (
    <RevealGroup>
      <Card
        className="p-5 sm:p-8 lg:p-10 lg:shadow-[0_-6px_30px_rgba(34,31,27,0.06)]"
        lift={false}
      >
        <div className="grid gap-7 lg:grid-cols-[1.08fr_1fr] lg:items-center lg:gap-12">
          {/* Бүтээгдэхүүний дэлгэц */}
          <ProjectShot src={image} alt={copy.title} toneClass={toneClass}>
            <div className="absolute inset-0 grid place-content-center text-center">
              <p className="display text-[clamp(2rem,4vw,3rem)] text-accent">
                {copy.title}
              </p>
              <p className="label mt-2">{t.work.imagePlaceholder}</p>
            </div>
          </ProjectShot>

          {/* Мөр бүр нь RevealItem — картын дараа дараалан гарна */}
          <div>
            <RevealItem>
              {/* Ангилал ба он — техник мэдрэмжтэй нэг мөр */}
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-dim">
                {copy.category}
                <span className="text-faint"> / {copy.year}</span>
              </p>

              <h3 className="display mt-3 text-[clamp(2.25rem,4.6vw,3.25rem)]">
                {copy.title}
              </h3>
            </RevealItem>

            <RevealItem>
              <p className="mt-4 max-w-[46ch] text-dim">{copy.summary}</p>
            </RevealItem>

            <RevealItem>
              <p className="label mt-6">
                {t.work.roleLabel}:{" "}
                {/* Үүргийн утга нь нэр учир том үсгээр хашгируулахгүй */}
                <span className="normal-case text-ink">{copy.role}</span>
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {copy.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line px-3 py-1.5 font-mono text-[0.7rem] text-dim"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </RevealItem>

            {liveUrl || repoUrl ? (
              <RevealItem className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                {liveUrl ? (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-1.5 text-sm text-accent"
                  >
                    {t.work.live}
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : null}
                {repoUrl ? (
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-1.5 text-sm text-dim hover:text-ink"
                  >
                    {t.work.repo}
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : null}
              </RevealItem>
            ) : null}
          </div>
        </div>

        {/* Асуудал · Шийдэл · Төлөв — картын доод хэсэгт бүтэн өргөнөөр */}
        <RevealItem className="mt-8 grid gap-5 border-t border-line pt-7 sm:grid-cols-3 sm:gap-8">
          <Detail label={t.work.problemLabel} body={copy.problem} />
          <Detail label={t.work.solutionLabel} body={copy.solution} />
          <Detail label={t.work.statusLabel} body={copy.status} />
        </RevealItem>
      </Card>
    </RevealGroup>
  );
}

export default function Work({ t }: { t: Dictionary }) {
  return (
    <section id="work" className="shell scroll-mt-24 pb-[var(--section-y)]">
      <Reveal>
        <p className="label mb-4">
          <span className="text-accent">02</span> — {t.work.label}
        </p>
      </Reveal>

      <CardStack
        items={PROJECTS.flatMap((meta, i) => {
          const copy = t.work.projects[meta.id];
          if (!copy) return [];
          return [
            <Project
              key={meta.id}
              t={t}
              copy={copy}
              image={meta.image}
              liveUrl={meta.liveUrl}
              repoUrl={meta.repoUrl}
              toneClass={BOX_TONES[i % BOX_TONES.length]}
            />,
          ];
        })}
      />
    </section>
  );
}
