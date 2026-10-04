export const profile = {
  studio: "supakrit studio",
  name: "Supakrit Julamanee",
  nameTh: "ศุภกฤต จุฬามณี",
  role: "Full Stack Developer",
  years: "2024–2026",
  lead: "ทำงานได้ครบทั้งสองฝั่งของระบบ ตั้งแต่หน้าจอผู้ใช้จนถึง API และฐานข้อมูล",
  summary:
    "ประสบการณ์พัฒนาเว็บรวมกว่า 2 ปี 2 เดือน ฝั่ง Frontend แข็งแรงจากการพัฒนาเว็บแอปพลิเคชันระดับ Production ด้วย React.js, Next.js, TypeScript และ Tailwind CSS ส่วนฝั่ง Backend พัฒนา RESTful API และทำงานกับฐานข้อมูลด้วย C# (.NET), NestJS, Express.js และ PostgreSQL จบวิทยาการคอมพิวเตอร์ เกียรตินิยมอันดับ 2 จาก มจพ.",
};

export const contact = {
  email: "supakritjulamanee@gmail.com",
  seeking: "Full Stack Developer (Hybrid)",
  links: [
    {
      label: "อีเมล",
      text: "supakritjulamanee@gmail.com",
      href: "mailto:supakritjulamanee@gmail.com",
    },
    {
      label: "โทร",
      text: "062-212-7689",
      href: "tel:+66622127689",
    },
    {
      label: "GitHub",
      text: "github.com/Supakrit-Julamanee",
      href: "https://github.com/Supakrit-Julamanee",
    },
    {
      label: "LinkedIn",
      text: "linkedin.com/in/supakrit-julamanee",
      href: "https://www.linkedin.com/in/supakrit-julamanee-6b48553b9/",
    },
  ],
};

// ช่วงเวลาไม่ถูกตัดขึ้นบรรทัดใหม่กลางคัน: ใช้เว้นวรรคแบบไม่ตัดบรรทัด
// และ word joiner หลังขีด เพราะเบราว์เซอร์ตัดบรรทัดหลังขีดได้
const nowrap = (text: string) =>
  text.replaceAll(" ", "\u00a0").replaceAll("–", "–\u2060");

export type Job = {
  org: string;
  role: string;
  // บรรทัดบนป้ายผลงาน: ช่วงเวลา ระยะเวลา สถานที่
  details: string[];
  stack: string[];
  works: { title: string; body: string }[];
};

export const jobs: Job[] = [
  {
    org: "บริษัท ยูนิกซ์เดฟ จำกัด",
    role: "Frontend Developer",
    details: [
      `งานประจำ ${nowrap("พ.ค. 2025 – ส.ค. 2026")}`,
      `ฝึกงาน ${nowrap("ก.พ. 2025 – เม.ย. 2025")}`,
      "รวม 1 ปี 7 เดือน",
      "กรุงเทพมหานคร",
    ],
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
    org: "Skyfrog",
    role: "Software Developer",
    details: [
      `ฝึกงาน ${nowrap("มิ.ย. 2024 – ธ.ค. 2024")}`,
      "7 เดือน",
      "กรุงเทพมหานคร",
    ],
    stack: [
      "C# (.NET 8)",
      "LINQ",
      "Microservices",
      "Ext JS",
      "PostgreSQL",
      "SQL",
      "Git",
    ],
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
];

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

export const education = {
  degree: "วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์)",
  school: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
  details: ["จบการศึกษา ปี 2025", "เกียรตินิยมอันดับ 2", "เกรดเฉลี่ยสะสม 3.25"],
  thesis: {
    title: "Transportation Cost Calculation System",
    stack: ["JavaScript", "C# (.NET 8)", "PostgreSQL"],
  },
};
