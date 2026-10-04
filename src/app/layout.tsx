import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai_Looped, Trirong } from "next/font/google";
import "./globals.css";

const trirong = Trirong({
  variable: "--font-trirong",
  weight: "300",
  subsets: ["thai", "latin"],
});

// น้ำหนักปกติสำหรับ Trirong ขนาดเล็กกว่า 24px (โลโก้ ลิงก์ติดต่อ) ซึ่งเป็นอักษรละตินทั้งหมด
// จึง preload เฉพาะ subset latin
const trirongRegular = Trirong({
  variable: "--font-trirong-regular",
  weight: "400",
  subsets: ["latin"],
});

const plexLooped = IBM_Plex_Sans_Thai_Looped({
  variable: "--font-plex-looped",
  weight: ["400", "600"],
  subsets: ["thai", "latin"],
});

const title = "Supakrit Julamanee, Full Stack Developer | supakrit studio";
const description =
  "พอร์ตโฟลิโอของศุภกฤต จุฬามณี Full Stack Developer ประสบการณ์พัฒนาเว็บกว่า 2 ปี ด้วย React.js, Next.js, TypeScript และ C# (.NET)";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "supakrit studio",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${trirong.variable} ${trirongRegular.variable} ${plexLooped.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
