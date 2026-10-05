import { IBM_Plex_Sans_Thai_Looped } from "next/font/google";

const plexLooped = IBM_Plex_Sans_Thai_Looped({
  variable: "--font-plex-looped",
  weight: ["300", "400", "600"],
  subsets: ["thai", "latin"],
});

export const fontVariables = plexLooped.variable;
