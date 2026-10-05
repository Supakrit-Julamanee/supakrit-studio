"use client";

import { Icon } from "./icon";

// สลับโหมดสว่างและมืด แล้วจำค่าไว้ใน localStorage ด้วยคีย์เดียวกับ theme-script.tsx
// ค่าเริ่มต้นคือโหมดสว่าง ไม่อ่านค่าโหมดมืดของระบบ
function toggle() {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";

  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {
    // เบราว์เซอร์ที่ปิด localStorage ยังสลับโหมดได้ แต่จะไม่จำค่าเมื่อโหลดหน้าใหม่
  }
}

export function ThemeToggle({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="-m-2.5 block cursor-pointer rounded-full p-2.5 transition-colors hover:text-klein"
    >
      {/* แสดงไอคอนของโหมดที่จะเปลี่ยนไป สลับด้วย CSS จึงไม่ต้องรอ JavaScript */}
      <Icon name="moon" className="size-5 dark:hidden" />
      <Icon name="sun" className="hidden size-5 dark:block" />
    </button>
  );
}
