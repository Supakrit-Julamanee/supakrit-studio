import Image from "next/image";
import portrait from "@/assets/portrait.jpg";
import type { Content } from "@/content";
import { links, profile } from "@/content/shared";
import { buildMonths, countWorked, type Stroke } from "@/content/timeline";
import { Icon, type IconName } from "./icon";
import { HatchSwatch, MonthDrawing } from "./month-drawing";

const strokes: Stroke[] = ["vertical", "horizontal"];

export function Hero({ t }: { t: Content }) {
  const months = buildMonths(t.drawing);
  const actions: { name: IconName; label: string; href: string }[] = [
    { name: "email", label: t.hero.mail, href: links.email.href },
    { name: "github", label: "GitHub", href: links.github.href },
    { name: "linkedin", label: "LinkedIn", href: links.linkedin.href },
  ];

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="shell pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-28 lg:pt-14"
    >
      <div className="md:grid md:grid-cols-12 md:items-center md:gap-x-6 lg:gap-x-8">
        {/* ภาพโปรไฟล์: อยู่เหนือชื่อบนจอแคบ ย้ายไปด้านขวาตั้งแต่จอ 768 px */}
        <div className="size-30 overflow-hidden rounded-full sm:size-36 md:col-span-4 md:col-start-9 md:row-start-1 md:aspect-square md:size-auto">
          <Image
            src={portrait}
            alt={t.hero.portraitAlt}
            sizes="(min-width: 48rem) min(24rem, 30vw), 9rem"
            placeholder="blur"
            loading="eager"
            fetchPriority="high"
            className="size-full object-cover object-[50%_55%] grayscale"
          />
        </div>

        <div className="mt-7 md:col-span-8 md:col-start-1 md:row-start-1 md:mt-0">
          <h1
            id="hero-title"
            className="text-display font-light"
          >
            {t.hero.name}
          </h1>
          <p className="mt-3 text-lead md:mt-4" lang="en">
            {profile.role}
          </p>

          <p className="mt-7 max-w-[40rem] text-balance text-list font-light md:mt-9">
            {t.hero.lead}
          </p>
          <p className="mt-4 max-w-[40rem] text-pretty md:mt-5">
            {t.hero.summary}
          </p>
          {/* ช่องทางติดต่อเป็นไอคอนสามตัว ชื่ออยู่ใน aria-label และ title */}
          <ul className="mt-7 flex items-center gap-6 md:mt-8">
            {actions.map(({ name, label, href }) => (
              <li key={name}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  className="-m-2.5 block p-2.5 transition-colors hover:text-klein"
                  {...(href.startsWith("http") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  <Icon name={name} className="size-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-24">
        <MonthDrawing
          months={months}
          monthNames={t.drawing.monthNames}
          description={t.drawing.description}
        />
      </div>

      {/* ป้ายผลงานของภาพวาด */}
      <div className="mt-6">
        <div className="gap-x-12 text-label sm:flex">
          <div>
            <p className="font-semibold">
              {t.drawing.worked(countWorked(months), profile.years)}
            </p>
            <p className="text-graphite">
              <span className="dark:hidden">{t.drawing.medium.light}</span>
              <span className="hidden dark:inline">{t.drawing.medium.dark}</span>
            </p>
          </div>
          <div className="mt-3 text-graphite sm:mt-0">
            <p>{t.drawing.unit}</p>
            <ul className="mt-1.5 flex flex-wrap gap-x-6 gap-y-1.5">
              {strokes.map((stroke) => (
                <li key={stroke} className="flex items-center gap-2.5">
                  <HatchSwatch stroke={stroke} />
                  {t.drawing.legend[stroke]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
