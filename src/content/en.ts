import { MAX_QUESTION_CHARS } from "./chat-protocol";
import { links, nowrap, orgs, profile } from "./shared";
import type { Content } from "./types";

// แปลจากชุดภาษาไทยใน th.ts ทีละข้อ ไม่เพิ่มข้อมูลที่ภาษาไทยไม่มี
export const en: Content = {
  other: { locale: "th", label: "ไทย" },
  meta: {
    title: "Supakrit Julamanee, Full Stack Developer | supakrit studio",
    description:
      "Portfolio of Supakrit Julamanee, a Full Stack Developer with more than 2 years of web development experience in React.js, Next.js, TypeScript and C# (.NET).",
    ogLocale: "en_US",
  },
  header: {
    skip: "Skip to content",
    navLabel: "Page sections",
    theme: "Switch between light and dark mode",
    menu: "Menu",
  },
  sections: {
    experience: "Experience",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    name: profile.name,
    lead: "I work on both sides of a system, from the user’s screen to the API and the database.",
    summary:
      "More than 2 years and 2 months of web development experience. Frontend is my stronger side, built on production web applications with React.js, Next.js, TypeScript and Tailwind CSS. On the backend I build RESTful APIs and work with databases using C# (.NET), NestJS, Express.js and PostgreSQL. I hold a Computer Science degree with second-class honours from KMUTNB.",
    mail: "Send an email",
    portraitAlt: `Black-and-white photograph of ${profile.name}`,
  },
  drawing: {
    monthNames: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    orgs: { skyfrog: "Skyfrog", unixdev: "Unixdev" },
    description:
      "A line drawing of months worked, from Jan 2024 to Dec 2026. " +
      "Jun to Dec 2024: Software Developer at Skyfrog, doing both frontend and backend work. " +
      "Feb 2025 to Aug 2026: Frontend Developer at Unixdev.",
    worked: (months, years) => `${months} months, ${years}`,
    medium: {
      light: "TypeScript and SVG on a white wall",
      dark: "TypeScript and SVG on a black wall",
    },
    unit: "One square is one month",
    legend: { vertical: "Frontend work", horizontal: "Backend work" },
  },
  jobs: [
    {
      ...orgs.unixdev,
      org: "UNIXDEV Co., Ltd.",
      details: [
        `Full-time ${nowrap("May 2025 – Aug 2026")}`,
        `Internship ${nowrap("Feb 2025 – Apr 2025")}`,
        "1 year 7 months in total",
        "Bangkok",
      ],
      works: [
        {
          title: "Client websites",
          body: "Built more than 15 websites and web applications with React.js, Next.js and TypeScript at a software house that delivers to several clients on fixed deadlines. I handled each project from turning the Figma design into pages through to connecting the API so it worked for real.",
        },
        {
          title: "Production support",
          body: "Owned and supported the frontend of live websites: tracking issues, finding the root cause, fixing it and deploying the new version. I coordinated with the backend and QA teams to get systems running again quickly, and recorded each cause so the same problem would not come back.",
        },
        {
          title: "Security",
          body: "Tracked and patched frontend vulnerabilities as new ones were announced, such as Next.js CVEs, by upgrading versions and testing the impact before going to production. Client websites stayed secure without disrupting existing use, and I summarised the risk and the fix for each client.",
        },
        {
          title: "Performance",
          body: "Made websites faster with SSR/ISR, code splitting, lazy loading and image optimization so pages load quickly and feel smooth. I measured with Lighthouse before and after each change to confirm that Core Web Vitals scores clearly improved.",
        },
        {
          title: "Code quality",
          body: "Wrote unit tests, tracked test coverage and ran ESLint as required steps before every deploy. This lowered the chance of bugs reaching users, let the team change existing code with confidence, and greatly cut manual retesting in every delivery cycle for each client.",
        },
        {
          title: "AI-assisted Development",
          body: "Used Claude Code, Claude Skills and Claude CLI as an assistant for writing code, solving problems and reviewing code, which sped up delivery while keeping quality under control. I also built workflows the team can reuse, such as automated code checks and project documentation.",
        },
      ],
    },
    {
      ...orgs.skyfrog,
      org: "Skyfrog Co., Ltd.",
      details: [
        `Internship ${nowrap("Jun 2024 – Dec 2024")}`,
        "7 months",
        "Bangkok",
      ],
      works: [
        {
          title: "Full Stack Development",
          body: "Built websites on both the frontend and the backend, from user screens in Ext JS to business logic and server-side APIs. This gave me an end-to-end understanding of the system and let me communicate precisely with both teams, which reduced problems when connecting screens to APIs.",
        },
        {
          title: "Microservices",
          body: "Developed the backend in C# (.NET 8) on a microservices architecture where each service is independent, so the system is easy to maintain, change and extend without affecting other services. I also designed clear API communication between services that leaves room for new features.",
        },
        {
          title: "Backend Testing",
          body: "Wrote backend tests to verify business logic before delivery. They catch errors during development and give confidence that a code change will not break existing features, which cut retesting time and let the team improve the code more often, safely.",
        },
        {
          title: "Database",
          body: "Wrote SQL queries on PostgreSQL and used LINQ to query data through an ORM from C# code, which keeps the code readable, safe from SQL injection and less prone to hand-written query mistakes. I also tuned queries to fetch only the data needed so the system responds faster.",
        },
      ],
    },
  ],
  education: {
    degree: "Bachelor of Science (Computer Science)",
    school: "King Mongkut’s University of Technology North Bangkok",
    details: ["Graduated 2025", "Second-class honours", "GPA 3.25"],
    thesisLabel: "Thesis",
  },
  contact: [
    { icon: "email", label: "Email", ...links.email },
    {
      icon: "phone",
      label: "Phone",
      text: links.phone.textIntl,
      href: links.phone.href,
    },
    { icon: "github", label: "GitHub", ...links.github },
    { icon: "linkedin", label: "LinkedIn", ...links.linkedin },
  ],
  footer: {
    builtWith: "Built with Next.js, TypeScript and Tailwind CSS",
  },
  chat: {
    open: "Ask about Supakrit",
    title: "Ask about Supakrit",
    close: "Close",
    hint: "An AI answers using only what is on this page, and it can still get things wrong. Please don\u2019t type personal information.",
    placeholder: "Type a question",
    send: "Send",
    thinking: "Answering\u2026",
    speakers: { user: "You", assistant: "Assistant" },
    suggestions: [
      "What does he work with?",
      "Where has he worked?",
      "How do I contact him?",
    ],
    errors: {
      rate_limited: "Too many questions right now. Try again in a minute.",
      too_long: `That question is too long. Keep it under ${MAX_QUESTION_CHARS} characters.`,
      unavailable:
        "The assistant can\u2019t answer right now. You can email Supakrit from the contact section instead.",
    },
  },
};
