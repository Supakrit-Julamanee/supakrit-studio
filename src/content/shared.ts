// ข้อมูลที่เหมือนกันทุกภาษา: ชื่อ ลิงก์ บริษัท และชื่อเทคโนโลยี
import skyfrogDarkLogo from "@/assets/logos/skyfrog-dark.svg";
import skyfrogLogo from "@/assets/logos/skyfrog.svg";
import unixdevDarkLogo from "@/assets/logos/unixdev-dark.svg";
import unixdevLogo from "@/assets/logos/unixdev.svg";

export const profile = {
  studio: "supakrit studio",
  name: "Supakrit Julamanee",
  nameTh: "ศุภกฤต จุฬามณี",
  role: "Full Stack Developer",
};

// ส่วนของหน้าตามลำดับ ใช้เป็นเมนูในแถบบนด้วย
export const sectionIds = [
  "experience",
  "skills",
  "education",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

export const links = {
  email: {
    text: "supakritjulamanee@gmail.com",
    href: "mailto:supakritjulamanee@gmail.com",
  },
  phone: {
    text: "062-212-7689",
    textIntl: "+66 62 212 7689",
    href: "tel:+66622127689",
  },
  github: {
    text: "github.com/Supakrit-Julamanee",
    href: "https://github.com/Supakrit-Julamanee",
  },
  linkedin: {
    text: "linkedin.com/in/supakrit-julamanee",
    href: "https://www.linkedin.com/in/supakrit-julamanee-6b48553b9/",
  },
};

// ข้อมูลของแต่ละบริษัทที่เหมือนกันทุกภาษา ชื่อบริษัทและคำอธิบายงานอยู่ใน en.ts และ th.ts
// logoDark คือโลโก้แบบที่ใช้บนพื้นมืด
export const orgs = {
  unixdev: {
    logo: unixdevLogo,
    logoDark: unixdevDarkLogo,
    role: "Frontend Developer",
    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Next Auth",
      "ESLint",
      "Claude Code",
      "Git",
    ],
  },
  skyfrog: {
    logo: skyfrogLogo,
    logoDark: skyfrogDarkLogo,
    role: "Software Developer",
    stack: [
      "C# (.NET 8)",
      "LINQ",
      "Microservices",
      "Ext JS",
      "PostgreSQL",
      "SQL",
      "Git",
    ],
  },
};

export type OrgId = keyof typeof orgs;

export type Org = (typeof orgs)[OrgId];

export const skills = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Flutter",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "C# (.NET 8)",
      "RESTful API",
      "Next.js API Routes",
      "JWT",
      "Prisma ORM",
    ],
  },
  {
    group: "Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Figma",
      "Postman",
      "Jira",
      "Vercel",
      "ClickUp",
      "VS Code",
      "Claude CLI",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
];

export const thesis = {
  title: "Transportation Cost Calculation System",
  stack: ["JavaScript", "C# (.NET 8)", "PostgreSQL"],
};

// ช่วงเวลาไม่ถูกตัดขึ้นบรรทัดใหม่กลางคัน: ใช้เว้นวรรคแบบไม่ตัดบรรทัด
// และ word joiner หลังขีด เพราะเบราว์เซอร์ตัดบรรทัดหลังขีดได้
export const nowrap = (text: string) =>
  text.replaceAll(" ", "\u00a0").replaceAll("–", "–\u2060");
