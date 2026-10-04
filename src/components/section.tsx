import type { ReactNode } from "react";

export function Section({
  id,
  title,
  titleEn,
  children,
}: {
  id: string;
  title: string;
  titleEn: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="shell">
      <div className="border-t border-pencil pb-20 pt-8 lg:pb-28 lg:pt-10">
        <header className="mb-10 lg:mb-14">
          <h2 id={`${id}-title`} className="font-display text-section font-light">
            {title}
          </h2>
          <p lang="en" className="text-label text-graphite">
            {titleEn}
          </p>
        </header>
        {children}
      </div>
    </section>
  );
}
