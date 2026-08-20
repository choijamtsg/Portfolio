/** Пастель картын нэгдсэн хэлбэр */
const TONES = {
  white: "bg-card",
  sage: "bg-sage",
  clay: "bg-clay",
  sky: "bg-sky",
  accent: "bg-accent text-accent-ink",
} as const;

export type Tone = keyof typeof TONES;

export default function Card({
  tone = "white",
  className = "",
  lift = true,
  children,
}: {
  tone?: Tone;
  className?: string;
  lift?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-[var(--r-lg)] ${TONES[tone]} ${
        lift ? "lift" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
