import Image from "next/image";
import { PROJECTS } from "@/content/config";
import type { Dictionary, ProjectCopy } from "@/content/types";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRightIcon } from "@/components/ui/Icons";

/** Tailwind нь `bg-${x}` мэт динамик класс үүсгэдэггүй тул бүтнээр нь бичнэ */
const BOX_TONES = ["bg-sage", "bg-clay", "bg-sky"] as const;

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
  imagePosition,
  liveUrl,
  repoUrl,
  toneClass,
}: {
  t: Dictionary;
  copy: ProjectCopy;
  image: string | null;
  imagePosition?: string;
  liveUrl?: string;
  repoUrl?: string;
  toneClass: (typeof BOX_TONES)[number];
}) {
  return (
    <Card className="p-8 sm:p-10" lift={false}>
      <div className="grid gap-9 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12">
        <div>
          <span className="inline-block rounded-full bg-sage px-3.5 py-1.5 text-xs text-accent">
            {copy.category} · {t.work.roleLabel}: {copy.role}
          </span>

          <h3 className="display mt-4 text-[clamp(2rem,4vw,3rem)]">
            {copy.title}
          </h3>

          <p className="mt-4 max-w-[50ch] text-dim">{copy.summary}</p>

          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            <Detail label={t.work.problemLabel} body={copy.problem} />
            <Detail label={t.work.solutionLabel} body={copy.solution} />
            <Detail label={t.work.statusLabel} body={copy.status} />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ul className="flex flex-wrap gap-2">
              {copy.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-background px-3 py-1.5 text-xs text-dim"
                >
                  {s}
                </li>
              ))}
            </ul>

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
          </div>
        </div>

        {/* Зураг эсвэл өнгөт хайрцаг */}
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-[var(--r-md)] ${toneClass}`}
        >
          {image ? (
            <Image
              src={image}
              alt={copy.title}
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
              style={{ objectPosition: imagePosition ?? "50% 50%" }}
            />
          ) : (
            <div className="absolute inset-0 grid place-content-center text-center">
              <p className="display text-[clamp(2rem,4vw,3rem)] text-accent">
                {copy.title}
              </p>
              <p className="label mt-2">{t.work.imagePlaceholder}</p>
            </div>
          )}
        </div>
      </div>
    </Card>
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

      <div className="space-y-4">
        {PROJECTS.map((meta, i) => {
          const copy = t.work.projects[meta.id];
          if (!copy) return null;
          return (
            <Reveal key={meta.id} delay={i * 0.08}>
              <Project
                t={t}
                copy={copy}
                image={meta.image}
                imagePosition={meta.imagePosition}
                liveUrl={meta.liveUrl}
                repoUrl={meta.repoUrl}
                toneClass={BOX_TONES[i % BOX_TONES.length]}
              />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
