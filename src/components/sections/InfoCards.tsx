import type { Dictionary } from "@/content/types";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

/** Нүүрний доорх гурван товч мэдээллийн карт */
export default function InfoCards({ t }: { t: Dictionary }) {
  const cards = [
    {
      tone: "sage" as const,
      k: t.contact.locationLabel,
      title: t.contact.location,
      body: t.about.nowBody,
    },
    {
      tone: "clay" as const,
      k: t.skills.label,
      title: t.skills.groups[0]?.title ?? "",
      body: t.skills.groups[0]?.tech.join(" · ") ?? "",
    },
    {
      tone: "sky" as const,
      k: t.nav.language,
      title: "МН · EN · IT",
      body: t.skills.groups[3]?.description ?? "",
    },
  ];

  return (
    <section className="shell pb-[var(--section-y)]">
      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.k} delay={i * 0.08}>
            <Card tone={c.tone} className="flex h-full flex-col p-7">
              <p className="label">{c.k}</p>
              <h3 className="display mt-2 text-2xl">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">{c.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
