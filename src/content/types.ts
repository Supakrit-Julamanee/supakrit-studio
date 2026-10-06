import type { IconName } from "@/components/icon";
import type { Turn } from "./chat-protocol";
import type { Locale } from "./locale";
import type { Org, SectionId } from "./shared";
import type { Stroke, TimelineLabels } from "./timeline";

// โลโก้ ตำแหน่ง และ stack มาจาก orgs ใน shared.ts ส่วนที่เหลือเป็นข้อความของแต่ละภาษา
type Job = Org & {
  // ชื่อทางการของบริษัท
  org: string;
  // บรรทัดบนป้ายผลงาน: ช่วงเวลา ระยะเวลา สถานที่
  details: string[];
  works: { title: string; body: string }[];
};

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
  speakers: Record<Turn["role"], string>;
  suggestions: string[];
  // คีย์ตรงกับรหัสข้อผิดพลาดที่ /api/chat ส่งกลับ
  errors: { rate_limited: string; too_long: string; unavailable: string };
};

// ข้อความทั้งหมดของหน้าในหนึ่งภาษา
export type Content = {
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
