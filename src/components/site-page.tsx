import { content } from "@/content";
import type { Locale } from "@/content/locale";
import { Contact } from "./contact";
import { Education } from "./education";
import { Experience } from "./experience";
import { Hero } from "./hero";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { Skills } from "./skills";

// หน้าเดียวกันทั้งสองภาษา ต่างกันที่ชุดข้อความ
export function SitePage({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <>
      <SiteHeader t={t} />
      <main id="main">
        <Hero t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>
      <SiteFooter t={t} />
    </>
  );
}
