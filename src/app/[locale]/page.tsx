import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import InfoCards from "@/components/sections/InfoCards";
import About from "@/components/sections/About";
import Path from "@/components/sections/Path";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale as Locale);

  return (
    <>
      <TopBar t={t} locale={locale as Locale} />
      <main>
        <Hero t={t} />
        <InfoCards t={t} />
        <About t={t} />
        <Path t={t} />
        <Work t={t} />
        <Skills t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
