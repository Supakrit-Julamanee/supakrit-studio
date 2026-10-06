import { content } from "@/content";
import type { Locale } from "@/content/locale";
import { ChatWidget } from "./chat-widget";
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
      {/* แชตบอทแสดงเมื่อตั้ง GEMINI_API_KEY ไว้ตอน build เท่านั้น ถ้าไม่มี key หน้าเว็บจะไม่มีปุ่มแชต */}
      {process.env.GEMINI_API_KEY && <ChatWidget t={t.chat} />}
    </>
  );
}
