import Image from "next/image";
import portrait from "@/assets/portrait.jpg";
import { contact, profile } from "@/content/profile";
import {
  availableSince,
  workedMonths,
  type Stroke,
} from "@/content/timeline";
import { HatchSwatch, MonthDrawing } from "./month-drawing";

const legend: { stroke: Stroke; label: string }[] = [
  { stroke: "vertical", label: "งาน Frontend" },
  { stroke: "horizontal", label: "งาน Backend" },
];

const [, , github, linkedin] = contact.links;

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="shell pb-20 pt-10 lg:pb-28 lg:pt-14"
    >
      <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
        {/* ภาพโปรไฟล์: อยู่เหนือชื่อบนจอแคบ ย้ายไปด้านขวาบนจอกว้าง */}
        <div className="size-36 overflow-hidden rounded-full sm:size-44 lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:aspect-square lg:size-auto">
          <Image
            src={portrait}
            alt={`ภาพถ่ายขาวดำของ${profile.nameTh}`}
            sizes="(min-width: 64rem) 30vw, 11rem"
            placeholder="blur"
            preload
            className="size-full object-cover object-[50%_55%] grayscale"
          />
        </div>

        <div className="mt-8 lg:col-span-8 lg:col-start-1 lg:row-start-1 lg:mt-0">
          <h1
            id="hero-title"
            lang="en"
            className="font-display text-display font-light lg:max-xl:text-[3.5rem]"
          >
            {profile.name}
          </h1>
          <p className="font-display text-display font-light lg:max-xl:text-[3.5rem]">
            {profile.nameTh}
          </p>
          <p className="mt-4 text-lead" lang="en">
            {profile.role}
          </p>

          <p className="mt-9 max-w-[40rem] text-balance font-display text-list font-light">
            {profile.lead}
          </p>
          <p className="mt-5 max-w-[40rem] text-pretty">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 text-label">
            <a
              href={`mailto:${contact.email}`}
              className="bg-ink px-5 py-2.5 font-semibold text-wall transition-colors hover:bg-klein"
            >
              ส่งอีเมล
            </a>
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHub
            </a>
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mt-24">
        <MonthDrawing />
      </div>

      {/* ป้ายผลงานของภาพวาด */}
      <div className="mt-6">
        <div className="gap-x-12 text-label sm:flex">
          <div>
            <p className="font-semibold">
              {workedMonths} เดือน, {profile.years}
            </p>
            <p className="text-graphite">TypeScript และ SVG บนผนังสีขาว</p>
          </div>
          <div className="mt-3 text-graphite sm:mt-0">
            <p>หนึ่งช่องคือหนึ่งเดือน</p>
            <ul className="mt-1.5 flex flex-wrap gap-x-6 gap-y-1.5">
              {legend.map(({ stroke, label }) => (
                <li key={stroke} className="flex items-center gap-2.5">
                  <HatchSwatch stroke={stroke} />
                  {label}
                </li>
              ))}
              {availableSince && (
                <li className="flex items-center gap-2.5">
                  <span
                    className="size-4 shrink-0 bg-klein"
                    aria-hidden="true"
                  />
                  ว่างรับงานตั้งแต่ {availableSince}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
