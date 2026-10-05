import type { Content } from "@/content";
import { profile } from "@/content/shared";

export function SiteFooter({ t }: { t: Content }) {
  return (
    <footer className="shell">
      <div className="flex flex-col gap-1 border-t border-pencil py-8 text-label text-graphite sm:flex-row sm:justify-between">
        <p>
          © 2026 <span lang="en">{profile.studio}</span>
        </p>
        <p>{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
