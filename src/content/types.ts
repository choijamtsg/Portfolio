/**
 * Хэлний файлуудын БҮТЭЦ (mn.ts / en.ts / it.ts бүгд үүнийг дагана).
 * Шинэ текст нэмэх бол: энд талбар нэмээд, гурван хэлэнд нь бич.
 * Аль нэгэнд нь бичихээ мартвал TypeScript алдаа заана.
 */

export type Principle = { title: string; detail: string };
export type TimelineItem = { year: string; title: string; detail: string };
export type SkillGroup = {
  index: string;
  title: string;
  description: string;
  tech: string[];
};

export type ProjectCopy = {
  title: string;
  category: string;
  year: string;
  /** Багийн төсөл дээр өөрийн үүргээ шударгаар бичих талбар */
  role: string;
  summary: string;
  problem: string;
  solution: string;
  /** Хэмжсэн үр дүн байхгүй бол зохиохгүй — үнэнээ бич */
  status: string;
  stack: string[];
};

export type Dictionary = {
  meta: { title: string; description: string };

  nav: {
    about: string;
    work: string;
    skills: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    available: string;
  };

  hero: {
    role: string;
    /** Гарчиг мөр мөрөөр — сүүлийн мөр нь онцлох өнгөтэй */
    line1: string;
    line2: string;
    accent: string;
    subcopy: string;
    ctaWork: string;
    ctaContact: string;
  };

  about: {
    label: string;
    headline: string;
    intro: string;
    story: string[];
    principlesLabel: string;
    principles: Principle[];
    pathLabel: string;
    timeline: TimelineItem[];
    nowBody: string;
    portraitAlt: string;
  };

  work: {
    label: string;
    headline: string;
    intro: string;
    roleLabel: string;
    problemLabel: string;
    solutionLabel: string;
    statusLabel: string;
    stackLabel: string;
    imagePlaceholder: string;
    live: string;
    repo: string;
    projects: Record<string, ProjectCopy>;
  };

  skills: {
    label: string;
    headline: string;
    intro: string;
    groups: SkillGroup[];
  };

  contact: {
    label: string;
    line1: string;
    accent: string;
    body: string;
    locationLabel: string;
    location: string;
  };

  footer: { note: string };

  social: { github: string; linkedin: string; email: string };
};
