import { IBM_Plex_Sans_Thai_Looped } from "next/font/google";

// หน้าอังกฤษไม่มีอักษรไทยที่มองเห็น จึง preload เฉพาะ subset latin
const plexLooped = IBM_Plex_Sans_Thai_Looped({
  variable: "--font-plex-looped",
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export const fontVariables = plexLooped.variable;
