import { jobs } from "@/content/profile";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" title="ประสบการณ์" titleEn="Experience">
      <div className="space-y-20 lg:space-y-28">
        {jobs.map((job) => (
          <article key={job.org} className="lg:grid lg:grid-cols-12 lg:gap-x-8">
            <h3 className="font-display text-heading font-light lg:col-span-9 lg:col-start-4">
              {job.org}
            </h3>

            {/* ป้ายผลงาน: ค้างอยู่ข้างเนื้อหาระหว่างเลื่อนอ่านบนจอกว้าง */}
            <div className="mt-4 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0">
              <div className="text-label text-graphite lg:sticky lg:top-24 lg:pt-1.5">
                <p className="font-semibold text-ink" lang="en">
                  {job.role}
                </p>
                {job.details.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p className="mt-3 max-w-[16rem]" lang="en">
                  {job.stack.join(", ")}
                </p>
              </div>
            </div>

            <ul className="mt-10 grid gap-x-10 gap-y-9 lg:col-span-9 lg:col-start-4 xl:grid-cols-2">
              {job.works.map((work) => (
                <li key={work.title}>
                  <h4 className="font-semibold">{work.title}</h4>
                  <p className="mt-2 max-w-[40rem] text-pretty">{work.body}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
