import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="shell">
      <div className="flex flex-col gap-1 border-t border-pencil py-8 text-label text-graphite sm:flex-row sm:justify-between">
        <p>
          © 2026 <span lang="en">{profile.studio}</span>
        </p>
        <p>สร้างด้วย Next.js, TypeScript และ Tailwind CSS</p>
      </div>
    </footer>
  );
}
