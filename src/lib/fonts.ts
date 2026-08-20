import { Inter, Instrument_Serif, Playfair_Display } from "next/font/google";

/**
 * Instrument Serif — латин гарчиг (Choijamts, SparkXP, React…).
 * Кирилл үсэг агуулаагүй тул доорх Playfair руу автоматаар унана.
 */
export const displayLatin = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display-latin",
  display: "swap",
  preload: true,
});

/**
 * Playfair Display — кирилл гарчиг.
 * Instrument Serif-тэй ижил өндөр тодролтой serif тул зэрэгцүүлэхэд зохицдог.
 */
export const displayCyrillic = Playfair_Display({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display-cyrillic",
  display: "swap",
  preload: true,
});

/** Inter — үндсэн бичвэр, шошго, товч */
export const sans = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});
