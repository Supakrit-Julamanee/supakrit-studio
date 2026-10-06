import { IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import { SiteDocument } from "../site-document";
import { siteMetadata, siteViewport } from "../site-metadata";
import "../globals.css";

const font = IBM_Plex_Sans_Thai_Looped({
  variable: "--font-plex-looped",
  weight: ["300", "400", "600"],
  subsets: ["thai", "latin"],
});

export const metadata = siteMetadata("th");
export const viewport = siteViewport;

export default function RootLayout({ children }: LayoutProps<"/th">) {
  return (
    <SiteDocument locale="th" fontVariable={font.variable}>
      {children}
    </SiteDocument>
  );
}
