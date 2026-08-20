import { SITE } from "@/content/config";
import type { Dictionary } from "@/content/types";

export default function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="shell flex flex-col items-start justify-between gap-2 pb-10 text-xs text-faint sm:flex-row sm:items-center">
      <p>
        © {new Date().getFullYear()} {SITE.name}
      </p>
      <p>{t.footer.note}</p>
    </footer>
  );
}
