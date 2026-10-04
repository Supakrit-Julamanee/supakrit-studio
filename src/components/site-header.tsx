import { profile } from "@/content/profile";

const sections = [
  { href: "#experience", label: "ประสบการณ์" },
  { href: "#skills", label: "ทักษะ" },
  { href: "#education", label: "การศึกษา" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-pencil bg-wall">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-ink focus:px-4 focus:py-2 focus:text-label focus:text-wall"
      >
        ข้ามไปยังเนื้อหา
      </a>
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a href="#top" lang="en" className="font-display text-lead">
          {profile.studio}
        </a>
        <nav aria-label="ส่วนต่าง ๆ ของหน้า">
          <ul className="flex items-center gap-7 text-label">
            {sections.map(({ href, label }) => (
              <li key={href} className="hidden sm:block">
                <a href={href} className="transition-colors hover:text-klein">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="link">
                ติดต่อ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
