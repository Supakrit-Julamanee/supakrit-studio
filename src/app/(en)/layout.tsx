import { IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import { SiteDocument } from "../site-document";
import { siteMetadata } from "../site-metadata";
import "../globals.css";

// หน้าอังกฤษไม่มีอักษรไทยที่มองเห็น จึง preload เฉพาะ subset latin
const font = IBM_Plex_Sans_Thai_Looped({
  variable: "--font-plex-looped",
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export const metadata = siteMetadata("en");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <SiteDocument locale="en" fontVariable={font.variable}>
      {children}
    </SiteDocument>
  );
}
