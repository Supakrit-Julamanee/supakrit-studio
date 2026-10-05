import Link from "next/link";
import type { Content } from "@/content";
import { localePath } from "@/content/locale";
import { profile } from "@/content/shared";
import type { SectionId } from "@/content/types";
import { Flag } from "./flag";
import { MobileMenu } from "./mobile-menu";
import { StudioMark } from "./studio-mark";
import { ThemeToggle } from "./theme-toggle";

const sections: SectionId[] = ["experience", "skills", "education", "contact"];

export function SiteHeader({ t }: { t: Content }) {
  const items = sections.map((id) => ({
    href: `#${id}`,
    label: t.sections[id],
  }));

  return (
    <header className="sticky top-0 z-10 border-b border-pencil bg-wall">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-ink focus:px-4 focus:py-2 focus:text-label focus:text-wall"
      >
        {t.header.skip}
      </a>
      <div className="shell flex h-14 items-center justify-between gap-4 md:h-16 md:gap-6">
        <a
          href="#top"
          lang="en"
          className="flex items-center gap-2.5 text-lead"
        >
          <StudioMark className="size-5 shrink-0" />
          {/* จอแคบกว่า 360 px เหลือเฉพาะเครื่องหมาย ให้ปุ่มอยู่ในแถวเดียวได้ */}
          <span className="sr-only min-[22.5rem]:not-sr-only">
            {profile.studio}
          </span>
        </a>
        <div className="flex items-center gap-5 text-label md:gap-7">
          {/* จอ 768 px ขึ้นไปแสดงเมนูในแถบ จอที่แคบกว่าใช้ MobileMenu ท้ายแถว */}
          <nav aria-label={t.header.navLabel} className="hidden md:block">
            <ul className="flex items-center gap-7">
              {items.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="py-3 transition-colors hover:text-klein"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle label={t.header.theme} />
          {/* สลับภาษา: ธงของภาษาที่จะเปลี่ยนไป ชื่อภาษาอยู่ใน aria-label และ title
              prefetch={false}: ไม่โหลดหน้าอีกภาษาล่วงหน้า เพราะจะดึงฟอนต์ของภาษานั้นมาด้วยทั้งที่ยังไม่ได้ใช้ */}
          <Link
            href={localePath[t.other.locale]}
            prefetch={false}
            hrefLang={t.other.locale}
            lang={t.other.locale}
            aria-label={t.other.label}
            title={t.other.label}
            className="group -m-2.5 rounded-full p-2.5"
          >
            <Flag locale={t.other.locale} className="block size-5" />
          </Link>
          <MobileMenu
            label={t.header.menu}
            navLabel={t.header.navLabel}
            items={items}
          />
        </div>
      </div>
    </header>
  );
}
