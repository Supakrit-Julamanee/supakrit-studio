import type { ReactNode } from "react";
import type { Locale } from "@/content/locale";

// ทำงานใน <head> ก่อนเบราว์เซอร์วาดหน้า: ถ้าผู้ชมเคยกดเลือกโหมดมืดไว้ ให้ใส่ data-theme="dark" ทันที
// หน้าจึงไม่กะพริบเป็นโหมดสว่างก่อนตอนโหลด คีย์ "theme" ตรงกับที่ theme-toggle.tsx บันทึก
// ไม่อ่านค่าโหมดมืดของระบบ ผู้ชมที่ไม่เคยกดปุ่มจะเห็นโหมดสว่างเสมอ
const themeScript = `(function(){try{if(localStorage.getItem("theme")==="dark")document.documentElement.setAttribute("data-theme","dark")}catch(e){}})()`;

// โครง <html> ที่ root layout ของทุกภาษาใช้ร่วมกัน
export function SiteDocument({
  locale,
  fontVariable,
  children,
}: {
  locale: Locale;
  fontVariable: string;
  children: ReactNode;
}) {
  return (
    // suppressHydrationWarning: themeScript อาจใส่ data-theme ก่อน React เริ่มทำงาน
    <html
      lang={locale}
      data-theme="light"
      className={`${fontVariable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
