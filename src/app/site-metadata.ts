import type { Metadata, Viewport } from "next";
import { content } from "@/content";
import { defaultLocale, localePath, type Locale } from "@/content/locale";
import { profile } from "@/content/shared";

const siteUrl = "https://supakrit-studio.vercel.app";

// แป้นพิมพ์บนจอเปิดแล้วให้ Chrome บน Android ย่อพื้นที่ของหน้าตาม แผงแชตที่เต็มจอจึงย่อตาม
// หัวข้ออยู่ที่เดิมและช่องพิมพ์อยู่เหนือแป้นพิมพ์ เบราว์เซอร์ที่ไม่รู้จักค่านี้ (เช่น in-app browser) ข้ามไปเอง
export const siteViewport: Viewport = { interactiveWidget: "resizes-content" };

export function siteMetadata(locale: Locale): Metadata {
  const { title, description, ogLocale } = content[locale].meta;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    // บอกเครื่องมือค้นหาว่าสองหน้านี้เป็นเนื้อหาเดียวกันคนละภาษา
    alternates: {
      canonical: localePath[locale],
      languages: { ...localePath, "x-default": localePath[defaultLocale] },
    },
    openGraph: {
      title,
      description,
      url: localePath[locale],
      siteName: profile.studio,
      locale: ogLocale,
      type: "website",
    },
  };
}
