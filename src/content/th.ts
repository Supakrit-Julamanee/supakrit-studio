import { links, logos, nowrap, profile, stacks } from "./shared";
import type { Content } from "./types";

export const th: Content = {
  locale: "th",
  other: { locale: "en", label: "English" },
  meta: {
    title: "Supakrit Julamanee, Full Stack Developer | supakrit studio",
    description:
      "พอร์ตโฟลิโอของศุภกฤต จุฬามณี Full Stack Developer ประสบการณ์พัฒนาเว็บกว่า 2 ปี ด้วย React.js, Next.js, TypeScript และ C# (.NET)",
    ogLocale: "th_TH",
  },
  header: {
    skip: "ข้ามไปยังเนื้อหา",
    navLabel: "ส่วนต่าง ๆ ของหน้า",
    theme: "สลับโหมดสว่างและมืด",
    menu: "เมนู",
  },
  sections: {
    experience: "ประสบการณ์",
    skills: "ทักษะ",
    education: "การศึกษา",
    contact: "ติดต่อ",
  },
  hero: {
    name: profile.nameTh,
    // word joiner กันคำว่า "ผู้ใช้" ถูกตัดขึ้นบรรทัดใหม่กลางคำ
    lead: "ทำงานได้ครบทั้งสองฝั่งของระบบ ตั้งแต่หน้าจอผู้\u2060ใช้จนถึง API และฐานข้อมูล",
    summary:
      "ประสบการณ์พัฒนาเว็บรวมกว่า 2 ปี 2 เดือน ฝั่ง Frontend แข็งแรงจากการพัฒนาเว็บแอปพลิเคชันระดับ Production ด้วย React.js, Next.js, TypeScript และ Tailwind CSS ส่วนฝั่ง Backend พัฒนา RESTful API และทำงานกับฐานข้อมูลด้วย C# (.NET), NestJS, Express.js และ PostgreSQL จบวิทยาการคอมพิวเตอร์ เกียรตินิยมอันดับ 2 จาก มจพ.",
    mail: "ส่งอีเมล",
    portraitAlt: `ภาพถ่ายขาวดำของ${profile.nameTh}`,
  },
  drawing: {
    monthNames: [
      "ม.ค.",
      "ก.พ.",
      "มี.ค.",
      "เม.ย.",
      "พ.ค.",
      "มิ.ย.",
      "ก.ค.",
      "ส.ค.",
      "ก.ย.",
      "ต.ค.",
      "พ.ย.",
      "ธ.ค.",
    ],
    orgs: { skyfrog: "Skyfrog", unixdev: "ยูนิกซ์เดฟ" },
    description:
      "ภาพวาดลายเส้นแสดงช่วงเวลาทำงานเป็นรายเดือน ตั้งแต่ ม.ค. 2024 ถึง ธ.ค. 2026 " +
      "มิ.ย. ถึง ธ.ค. 2024 ตำแหน่ง Software Developer ที่ Skyfrog ทำทั้งงาน Frontend และ Backend " +
      "ก.พ. 2025 ถึง ส.ค. 2026 ตำแหน่ง Frontend Developer ที่ยูนิกซ์เดฟ",
    worked: (months, years) => `${months} เดือน, ${years}`,
    medium: {
      light: "TypeScript และ SVG บนผนังสีขาว",
      dark: "TypeScript และ SVG บนผนังสีดำ",
    },
    unit: "หนึ่งช่องคือหนึ่งเดือน",
    legend: { vertical: "งาน Frontend", horizontal: "งาน Backend" },
  },
  jobs: [
    {
      org: "บริษัท ยูนิกซ์เดฟ จำกัด",
      logo: logos.unixdev,
      logoDark: logos.unixdevDark,
      role: "Frontend Developer",
      details: [
        `งานประจำ ${nowrap("พ.ค. 2025 – ส.ค. 2026")}`,
        `ฝึกงาน ${nowrap("ก.พ. 2025 – เม.ย. 2025")}`,
        "รวม 1 ปี 7 เดือน",
        "กรุงเทพมหานคร",
      ],
      stack: stacks.unixdev,
      works: [
        {
          title: "พัฒนาเว็บไซต์ให้ลูกค้า",
          body: "พัฒนาเว็บไซต์และเว็บแอปพลิเคชันด้วย React.js, Next.js และ TypeScript มากกว่า 15 โปรเจกต์ ในรูปแบบ Software House ที่ต้องส่งมอบงานให้ลูกค้าหลายรายตามกำหนดเวลา โดยรับผิดชอบตั้งแต่แปลงดีไซน์จาก Figma จนถึงเชื่อมต่อ API ให้ใช้งานได้จริง",
        },
        {
          title: "ดูแลระบบบน Production",
          body: "รับผิดชอบและซัพพอร์ตเว็บไซต์ฝั่ง Frontend ที่ใช้งานจริง ตั้งแต่ติดตามปัญหา วิเคราะห์หาสาเหตุ แก้ไข จนถึง Deploy เวอร์ชันใหม่ พร้อมประสานงานกับทีม Backend และ QA เพื่อให้ระบบกลับมาใช้งานได้โดยเร็ว และบันทึกสาเหตุไว้ป้องกันปัญหาเดิมเกิดซ้ำ",
        },
        {
          title: "ความปลอดภัย",
          body: "ติดตามและปิดช่องโหว่ฝั่ง Frontend เมื่อมีการประกาศช่องโหว่ใหม่ เช่น CVE ของ Next.js โดยอัปเดตเวอร์ชันและทดสอบผลกระทบก่อนขึ้น Production ทำให้เว็บไซต์ของลูกค้าปลอดภัยโดยไม่กระทบการใช้งานเดิม พร้อมสรุปความเสี่ยงและแนวทางแก้ไขให้ลูกค้าทราบ",
        },
        {
          title: "ประสิทธิภาพ",
          body: "ปรับปรุงความเร็วของเว็บไซต์ด้วย SSR/ISR, Code Splitting, Lazy Loading และ Image Optimization เพื่อให้หน้าเว็บโหลดเร็วและใช้งานได้ลื่นไหล พร้อมตรวจวัดผลด้วย Lighthouse ทั้งก่อนและหลังปรับปรุง เพื่อยืนยันว่าคะแนน Core Web Vitals ดีขึ้นอย่างเห็นได้ชัด",
        },
        {
          title: "คุณภาพโค้ด",
          body: "เขียน Unit Test ติดตาม Test Coverage และตรวจโค้ดด้วย ESLint เป็นขั้นตอนบังคับก่อน Deploy ทุกครั้ง ลดโอกาสที่ Bug จะหลุดไปถึงผู้ใช้งาน และช่วยให้ทีมแก้ไขโค้ดเดิมได้อย่างมั่นใจ ลดเวลาการทดสอบซ้ำด้วยมือลงอย่างมากในทุกรอบการส่งมอบงานให้ลูกค้าแต่ละราย",
        },
        {
          title: "AI-assisted Development",
          body: "ใช้ Claude Code, Claude Skills และ Claude CLI เป็นผู้ช่วยในการเขียนโค้ด แก้ปัญหา และรีวิวโค้ด ช่วยให้ส่งมอบงานได้เร็วขึ้นโดยยังควบคุมคุณภาพได้ รวมถึงสร้าง Workflow ที่ทีมนำไปใช้ซ้ำได้ เช่น การตรวจโค้ดและสร้างเอกสารประกอบโปรเจกต์อัตโนมัติ",
        },
      ],
    },
    {
      org: "บริษัท สกายฟร็อก จำกัด",
      logo: logos.skyfrog,
      logoDark: logos.skyfrogDark,
      role: "Software Developer",
      details: [
        `ฝึกงาน ${nowrap("มิ.ย. 2024 – ธ.ค. 2024")}`,
        "7 เดือน",
        "กรุงเทพมหานคร",
      ],
      stack: stacks.skyfrog,
      works: [
        {
          title: "Full Stack Development",
          body: "พัฒนาเว็บไซต์ครบทั้งฝั่ง Frontend และ Backend ตั้งแต่สร้างหน้าจอผู้ใช้ด้วย Ext JS ไปจนถึงเขียน Business Logic และ API ฝั่ง Server ทำให้เข้าใจการทำงานของระบบตั้งแต่ต้นจนจบ และสื่อสารกับทีมทั้งสองฝั่งตรงจุด ลดปัญหาการเชื่อมต่อหน้าจอกับ API",
        },
        {
          title: "Microservices",
          body: "พัฒนา Backend ด้วย C# (.NET 8) ในสถาปัตยกรรมแบบ Microservices ที่แยกแต่ละบริการออกจากกันอย่างอิสระ ทำให้ดูแล แก้ไข และขยายระบบได้ง่ายโดยไม่กระทบบริการอื่น พร้อมออกแบบการสื่อสารระหว่างบริการผ่าน API ให้ชัดเจนและรองรับฟีเจอร์ใหม่",
        },
        {
          title: "Backend Testing",
          body: "เขียนไฟล์ทดสอบฝั่ง Backend เพื่อตรวจสอบความถูกต้องของ Business Logic ก่อนส่งมอบ ช่วยจับข้อผิดพลาดได้ตั้งแต่ขั้นตอนพัฒนา และมั่นใจได้ว่าการแก้ไขโค้ดจะไม่ทำให้ฟีเจอร์เดิมเสียหาย ลดเวลาการทดสอบซ้ำ และทำให้ทีมปรับปรุงโค้ดได้บ่อยขึ้นอย่างปลอดภัย",
        },
        {
          title: "ฐานข้อมูล",
          body: "เขียน SQL Query บน PostgreSQL และใช้ LINQ ในการ Query ข้อมูลผ่าน ORM จากโค้ด C# ช่วยให้โค้ดอ่านง่าย ปลอดภัยจาก SQL Injection และลดความผิดพลาดจากการเขียน Query ด้วยมือ รวมถึงปรับ Query ให้ดึงเฉพาะข้อมูลที่จำเป็นเพื่อให้ระบบตอบสนองได้เร็วขึ้น",
        },
      ],
    },
  ],
  education: {
    degree: "วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์)",
    school: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
    details: ["จบการศึกษา ปี 2025", "เกียรตินิยมอันดับ 2", "เกรดเฉลี่ยสะสม 3.25"],
    thesisLabel: "ปริญญานิพนธ์",
  },
  contact: [
    { icon: "email", label: "อีเมล", ...links.email },
    {
      icon: "phone",
      label: "โทร",
      text: links.phone.text,
      href: links.phone.href,
    },
    { icon: "github", label: "GitHub", ...links.github },
    { icon: "linkedin", label: "LinkedIn", ...links.linkedin },
  ],
  footer: {
    builtWith: "สร้างด้วย Next.js, TypeScript และ Tailwind CSS",
  },
};
