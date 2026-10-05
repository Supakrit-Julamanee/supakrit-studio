import { Fragment } from "react";
import type { Content } from "@/content";
import { Icon } from "./icon";
import { Section } from "./section";

export function Contact({ t }: { t: Content }) {
  return (
    <Section id="contact" t={t}>
      {/* โครงเดียวกับส่วนทักษะ: ป้ายอยู่คอลัมน์ซ้าย ค่าอยู่คอลัมน์ขวา แต่ป้ายเป็นไอคอน
          บนจอแคบกว่า 768 px ไอคอนอยู่หน้าค่าในบรรทัดเดียวกัน */}
      <dl className="space-y-5 md:space-y-6">
        {t.contact.map(({ icon, label, text, href }) => (
          <div
            key={icon}
            className="flex gap-3.5 text-mail min-[22.5rem]:font-light md:grid md:grid-cols-12 md:gap-x-6 lg:gap-x-8"
          >
            {/* สูงเท่าหนึ่งบรรทัดของค่า ไอคอนจึงอยู่กึ่งกลางบรรทัดแรกเสมอ แม้ค่าจะยาวจนขึ้นสองบรรทัด */}
            <dt
              title={label}
              className="flex h-[1lh] shrink-0 items-center md:col-span-3"
            >
              <Icon name={icon} className="size-5" />
              <span className="sr-only">{label}</span>
            </dt>
            <dd className="min-w-0 md:col-span-9" lang="en">
              <a
                href={href}
                className="link [overflow-wrap:anywhere]"
                {...(href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {/* ลิงก์ที่ยาวเกินจอขึ้นบรรทัดใหม่หลังเครื่องหมายทับ ชื่อบัญชีที่มีขีดไม่ถูกตัดกลาง */}
                {text.split("/").map((part, index, parts) => (
                  <Fragment key={part}>
                    <span className={part.includes("-") ? "whitespace-nowrap" : ""}>
                      {part}
                      {index < parts.length - 1 && "/"}
                    </span>
                    {index < parts.length - 1 && <wbr />}
                  </Fragment>
                ))}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
