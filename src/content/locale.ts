export type Locale = "en" | "th";

export const defaultLocale: Locale = "en";

// ภาษาอังกฤษเป็นค่าเริ่มต้น อยู่ที่รากของเว็บ ภาษาไทยอยู่ที่ /th
export const localePath: Record<Locale, string> = {
  en: "/",
  th: "/th",
};
