import { education } from "@/content/profile";
import { Section } from "./section";

export function Education() {
  const { degree, school, details, thesis } = education;

  return (
    <Section id="education" title="การศึกษา" titleEn="Education">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-9 lg:col-start-4">
          <h3 className="text-balance font-display text-heading font-light">
            {degree}
          </h3>
          <p className="mt-3 text-lead">{school}</p>
        </div>
        <ul className="mt-4 text-label text-graphite lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:pt-1.5">
          {details.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <h3 className="text-label font-semibold lg:col-span-3 lg:pt-2.5">
          ปริญญานิพนธ์
        </h3>
        <div className="mt-1.5 lg:col-span-9 lg:mt-0" lang="en">
          <p className="font-display text-list font-light">{thesis.title}</p>
          <p className="mt-2 text-label text-graphite">
            {thesis.stack.join(", ")}
          </p>
        </div>
      </div>
    </Section>
  );
}
