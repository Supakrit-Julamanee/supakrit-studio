import type { ReactNode } from "react";
import type { Content } from "@/content";
import type { SectionId } from "@/content/shared";

export function Section({
  id,
  t,
  children,
}: {
  id: SectionId;
  t: Content;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="shell">
      <div className="border-t border-pencil pb-16 pt-7 sm:pb-20 sm:pt-8 lg:pb-28 lg:pt-10">
        <header className="mb-8 sm:mb-10 lg:mb-14">
          <h2 id={`${id}-title`} className="text-section font-light">
            {t.sections[id]}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
