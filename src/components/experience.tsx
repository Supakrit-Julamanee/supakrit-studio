import Image from "next/image";
import type { Content } from "@/content";
import { Section } from "./section";

export function Experience({ t }: { t: Content }) {
  return (
    <Section id="experience" t={t}>
      <div className="space-y-14 md:space-y-20 lg:space-y-28">
        {t.jobs.map((job) => (
          <article
            key={job.org}
            className="flex flex-col md:grid md:grid-cols-12 md:gap-x-6 lg:gap-x-8"
          >
            <h3 className="order-2 mt-4 text-heading font-light md:order-none md:col-span-9 md:col-start-4 md:mt-0">
              {job.org}
            </h3>

            {/* ป้ายผลงาน: ตั้งแต่จอ 768 px เป็นบล็อกเดียวค้างอยู่ข้างเนื้อหาระหว่างเลื่อนอ่าน
                บนจอแคบแยกเป็นสองชิ้น โลโก้อยู่เหนือชื่อบริษัท รายละเอียดอยู่ใต้ชื่อ */}
            <div className="contents md:col-span-3 md:col-start-1 md:row-span-2 md:row-start-1 md:block">
              <div className="contents md:sticky md:top-24 md:block md:pt-0.5">
                {/* โลโก้สองแบบสลับตามโหมดสว่างและมืด ชื่อบริษัทอยู่ในหัวข้อแล้ว จึงไม่ใส่ alt ซ้ำ */}
                <Image
                  src={job.logo}
                  alt=""
                  className="order-1 h-8 w-32 object-contain object-left md:mb-4 lg:w-36 dark:hidden"
                />
                <Image
                  src={job.logoDark}
                  alt=""
                  className="order-1 hidden h-8 w-32 object-contain object-left md:mb-4 lg:w-36 dark:block"
                />
                <div className="order-3 mt-3 text-label text-graphite md:mt-0">
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
            </div>

            <ul className="order-4 mt-8 grid gap-x-10 gap-y-8 md:order-none md:col-span-9 md:col-start-4 md:mt-9 lg:mt-10 lg:gap-y-9 xl:grid-cols-2">
              {job.works.map((work) => (
                <li key={work.title}>
                  <h4 className="font-semibold">{work.title}</h4>
                  <p className="mt-2 max-w-[36rem] text-pretty">{work.body}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
