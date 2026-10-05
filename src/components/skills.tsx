import type { Content } from "@/content";
import { skills } from "@/content/shared";
import { Section } from "./section";

export function Skills({ t }: { t: Content }) {
  return (
    <Section id="skills" t={t}>
      <div className="space-y-7 md:space-y-9 lg:space-y-10">
        {skills.map(({ group, items }) => (
          <div
            key={group}
            className="md:grid md:grid-cols-12 md:items-baseline md:gap-x-6 lg:gap-x-8"
          >
            <h3 className="text-label font-semibold md:col-span-3" lang="en">
              {group}
            </h3>
            <ul
              className="mt-1.5 text-list font-light md:col-span-9 md:mt-0"
              lang="en"
            >
              {items.map((item, index) => (
                <li key={item} className="inline">
                  <span className="whitespace-nowrap">
                    {item}
                    {index < items.length - 1 && ","}
                  </span>{" "}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
