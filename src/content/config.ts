/**
 * Орчуулагдахгүй тохиргоо — холбоос, и-мэйл, зургийн зам.
 * Бүх текст /src/content/{mn,en,it}.ts дотор байна.
 */

export const SITE = {
  /** Нэр нь бүх хэл дээр латинаар бичигдэнэ */
  name: "Choijamts",
  email: "choijamts.gk@gmail.com",
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
    image: "/images/work/sparkxp.webp",
    liveUrl: "https://spark-xp-web.vercel.app/",
    repoUrl: "https://github.com/usukh6ayar/SparkXP",
  },
  {
    id: "nomadkids",
    image: "/images/work/nomadkids.webp",
    liveUrl: "https://nomadkids.mn/",
    repoUrl: "https://github.com/usukh6ayar/NomadKids",
  },
  {
    /* Repo нь хаалттай тул код руу холбоос тавихгүй — зочин 404 харах болно */
    id: "carcare",
    image: "/images/work/carcare.webp",
  },
  {
    /* Мөн хаалттай. Нээвэл энд repoUrl нэмнэ. */
    id: "guessthesong",
    image: "/images/work/guessthesong.webp",
  },
];
