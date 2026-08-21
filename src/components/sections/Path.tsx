import type { Dictionary } from "@/content/types";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

/** Замнал — цайвар картан дээрх энгийн цаг хугацааны эгнээ */
export default function Path({ t }: { t: Dictionary }) {
  return (
    <section className="shell pb-[var(--section-y)]">
      <Reveal>
        <Card className="p-6 sm:p-8 lg:p-10" lift={false}>
          <p className="label mb-8">{t.about.pathLabel}</p>

          <ol className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-8">
            {t.about.timeline.map((item, i) => (
              <li key={`${item.year}-${i}`} className="relative">
                {/* Холбоос зураас — сүүлийнхээс бусад дээр */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-[0.4rem] hidden h-px w-full bg-line lg:block ${
                    i === t.about.timeline.length - 1 ? "lg:hidden" : ""
                  }`}
                />
                <span
                  aria-hidden
                  className="absolute left-0 top-1 hidden h-2 w-2 rounded-full bg-accent lg:block"
                />

                <p className="display text-3xl text-accent lg:mt-6">
                  {item.year}
                </p>
                <h3 className="mt-2 text-[0.95rem] font-medium">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-dim">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </Card>
      </Reveal>
    </section>
  );
}
