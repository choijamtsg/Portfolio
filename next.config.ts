import type { NextConfig } from "next";

/**
 * Тэмдэглэл: next.config.ts дотор "@/..." alias ажиллахгүй тул
 * үндсэн хэлийг энд шууд бичнэ (src/lib/i18n.ts-тэй ижил байлга).
 */
const DEFAULT_LOCALE = "en";

const nextConfig: NextConfig = {
  /** "/" рүү орвол үндсэн хэл рүү шилжүүлнэ */
  async redirects() {
    return [
      { source: "/", destination: `/${DEFAULT_LOCALE}`, permanent: false },
    ];
  },
};

export default nextConfig;
