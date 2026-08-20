/**
 * Орчуулагдахгүй тохиргоо — холбоос, и-мэйл, зургийн зам.
 * Бүх текст /src/content/{mn,en,it}.ts дотор байна.
 */

export const SITE = {
  /** Нэр нь бүх хэл дээр латинаар бичигдэнэ */
  name: "Choijamts",
  email: "choijamts.gk@gmail.com",
  /** Deploy хийсний дараа жинхэнэ домэйнээ бич */
  url: "https://choijamts.dev",
} as const;

export const NAV_ITEMS = [
  { key: "about", href: "#about" },
  { key: "work", href: "#work" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" },
] as const;

export const SOCIAL_ITEMS = [
  { key: "github", href: "https://github.com/choijamtsg", external: true },
  { key: "email", href: `mailto:${SITE.email}`, external: false },
] as const;

/** Хөрөг зураг */
export const PORTRAIT = {
  src: "/images/portrait.jpg",
  width: 853,
  height: 1280,
} as const;

export type ProjectMeta = {
  id: string;
  /** Бүтээгдэхүүний зураг — байхгүй бол null (автомат дэвсгэр гарна) */
  image: string | null;
  /** Зургийн таслалтын байрлал, CSS object-position (жишээ: "85% 50%") */
  imagePosition?: string;
  liveUrl?: string;
  repoUrl?: string;
};

/**
 * Төслийн бүтэц. Текст нь хэл тус бүрийн файлд `work.projects[id]` дотор.
 * Шинэ төсөл нэмэхдээ: энд мөр нэмээд, гурван хэлний файлд текстийг нь бич.
 */
export const PROJECTS: ProjectMeta[] = [
  {
    id: "sparkxp",
    /* SparkXP-ийн брэнд зураг. Аппын жинхэнэ дэлгэц авбал энэ замыг сольно. */
    image: "/images/work/sparkxp-hero.webp",
    /* Үнэг зургийн баруун талд байдаг тул баруун тийш шахаж таслана */
    imagePosition: "88% 50%",
  },
];
