import { skills } from "@/content/profile";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="skills" title="ทักษะ" titleEn="Stack">
      <div className="space-y-9 lg:space-y-12">
        {skills.map(({ group, items }) => (
          <div key={group} className="lg:grid lg:grid-cols-12 lg:gap-x-8">
            <h3
              className="text-label font-semibold lg:col-span-3 lg:pt-2.5"
              lang="en"
            >
              {group}
            </h3>
            <ul
              className="mt-1.5 font-display text-list font-light lg:col-span-9 lg:mt-0"
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
