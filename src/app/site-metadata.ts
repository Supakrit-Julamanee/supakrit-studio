import type { Metadata } from "next";
import { content } from "@/content";
import { defaultLocale, localePath, type Locale } from "@/content/locale";
import { profile } from "@/content/shared";

const siteUrl = "https://supakrit-studio.vercel.app";

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
