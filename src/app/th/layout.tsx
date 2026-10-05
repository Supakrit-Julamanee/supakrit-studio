import { ThemeScript } from "@/components/theme-script";
import { siteMetadata } from "../site-metadata";
import { fontVariables } from "./fonts";
import "../globals.css";

export const metadata = siteMetadata("th");

export default function RootLayout({ children }: LayoutProps<"/th">) {
  return (
    // suppressHydrationWarning: ThemeScript อาจใส่ data-theme ก่อน React เริ่มทำงาน
    <html
      lang="th"
      data-theme="light"
      className={`${fontVariables} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
