import Image from "next/image";
import kmutnbLogo from "@/assets/logos/kmutnb.png";
import type { Content } from "@/content";
import { thesis } from "@/content/shared";
import { Section } from "./section";

export function Education({ t }: { t: Content }) {
  const { degree, school, details, thesisLabel } = t.education;

  return (
    <Section id="education" t={t}>
      <div className="md:grid md:grid-cols-12 md:items-baseline md:gap-x-6 lg:gap-x-8">
        {/* ตราอยู่ข้างวุฒิและชื่อมหาวิทยาลัย
            self-baseline ทำให้บรรทัดแรกของวุฒิเป็นเส้นฐานที่รายละเอียดคอลัมน์ซ้ายใช้จัดแนว */}
        <div className="flex items-start gap-4 md:col-span-9 md:col-start-4 lg:gap-5">
          {/* ตราสีตามต้นฉบับ: ชื่อมหาวิทยาลัยอยู่ในข้อความแล้ว จึงไม่ใส่ alt ซ้ำ */}
          <Image
            src={kmutnbLogo}
            alt=""
            sizes="4.5rem"
            className="size-16 shrink-0 lg:size-18"
          />
          <div className="self-baseline">
            <h3 className="text-balance text-heading font-light">{degree}</h3>
            <p className="mt-2 text-lead">{school}</p>
          </div>
        </div>
        <ul className="mt-4 text-label text-graphite md:col-span-3 md:col-start-1 md:row-start-1 md:mt-0">
          {details.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10 md:mt-14 md:grid md:grid-cols-12 md:items-baseline md:gap-x-6 lg:mt-16 lg:gap-x-8">
        <h3 className="text-label font-semibold md:col-span-3">
          {thesisLabel}
        </h3>
        <div className="mt-1.5 md:col-span-9 md:mt-0" lang="en">
          <p className="text-list font-light">{thesis.title}</p>
          <p className="mt-2 text-label text-graphite">
            {thesis.stack.join(", ")}
          </p>
        </div>
      </div>
    </Section>
  );
}
