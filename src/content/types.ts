import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/icon";
import type { Locale } from "./locale";
import type { Stroke, TimelineLabels } from "./timeline";

type Job = {
  org: string;
  logo: StaticImageData;
  // โลโก้แบบที่ใช้บนพื้นมืด
  logoDark: StaticImageData;
  role: string;
  // บรรทัดบนป้ายผลงาน: ช่วงเวลา ระยะเวลา สถานที่
  details: string[];
  stack: string[];
  works: { title: string; body: string }[];
};

export type SectionId = "experience" | "skills" | "education" | "contact";

// ข้อความของแชตบอท ส่งให้ Client Component ได้เพราะเป็นข้อความล้วน
export type ChatText = {
  open: string;
  title: string;
  close: string;
  hint: string;
  placeholder: string;
  send: string;
  thinking: string;
  // ชื่อผู้พูด สำหรับโปรแกรมอ่านหน้าจอ
  you: string;
  assistant: string;
  suggestions: string[];
  // คีย์ตรงกับรหัสข้อผิดพลาดที่ /api/chat ส่งกลับ
  errors: { rate_limited: string; too_long: string; unavailable: string };
};

// ข้อความทั้งหมดของหน้าในหนึ่งภาษา
export type Content = {
  locale: Locale;
  // อีกภาษาหนึ่ง: ใช้กับลิงก์สลับภาษา
  other: { locale: Locale; label: string };
  meta: { title: string; description: string; ogLocale: string };
  header: { skip: string; navLabel: string; theme: string; menu: string };
  // หัวข้อของแต่ละส่วน ใช้เป็นชื่อเมนูด้วย
  sections: Record<SectionId, string>;
  hero: {
    name: string;
    lead: string;
    summary: string;
    mail: string;
    portraitAlt: string;
  };
  drawing: TimelineLabels & {
    description: string;
    worked: (months: number, years: string) => string;
    // บรรทัดวัสดุของป้ายผลงาน ชื่อสีของผนังเปลี่ยนตามโหมดสว่างและมืด
    medium: { light: string; dark: string };
    unit: string;
    legend: Record<Stroke, string>;
  };
  jobs: Job[];
  education: {
    degree: string;
    school: string;
    details: string[];
    thesisLabel: string;
  };
  // label ไม่แสดงเป็นตัวหนังสือ ใช้เป็นชื่อของไอคอนสำหรับโปรแกรมอ่านหน้าจอและ tooltip
  contact: { icon: IconName; label: string; text: string; href: string }[];
  footer: { builtWith: string };
  chat: ChatText;
};
