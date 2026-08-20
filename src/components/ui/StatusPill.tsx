/** "Боломж нээлттэй" — цагаан бөмбөлөг, ногоон цэгтэй */
export default function StatusPill({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-xs text-dim shadow-[var(--sh-1)] ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      {label}
    </span>
  );
}
