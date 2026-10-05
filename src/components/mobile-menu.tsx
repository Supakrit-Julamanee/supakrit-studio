"use client";

import { useEffect, useId, useState } from "react";
import { Icon } from "./icon";

// เมนูของจอแคบกว่า 768 px: ปุ่ม hamburger เปิดแผงลิงก์ใต้แถบบน
// แผงปิดเมื่อกดลิงก์ กดปุ่มซ้ำ หรือกด Escape
export function MobileMenu({
  label,
  navLabel,
  items,
}: {
  label: string;
  navLabel: string;
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={id}
        aria-label={label}
        title={label}
        className="-m-2.5 block cursor-pointer p-2.5 transition-colors hover:text-klein"
      >
        <Icon name={open ? "close" : "menu"} className="size-5" />
      </button>
      {open && (
        <nav
          id={id}
          aria-label={navLabel}
          className="absolute inset-x-0 top-full border-b border-pencil bg-wall"
        >
          <ul className="shell py-3">
            {items.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-list font-light transition-colors hover:text-klein"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
