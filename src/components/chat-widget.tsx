"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { ChatText } from "@/content/types";
import { ChatMascot } from "./chat-mascot";

// โค้ดของแผงแชตโหลดครั้งแรกที่กดเปิดเท่านั้น หน้าเว็บตอนโหลดจึงมีแค่ปุ่มนี้
const ChatPanel = dynamic(
  () => import("./chat-panel").then((module) => module.ChatPanel),
  { ssr: false },
);

const PANEL_ID = "chat-panel";

export function ChatWidget({ t }: { t: ChatText }) {
  const [open, setOpen] = useState(false);
  // เมื่อเปิดแล้วแผงยังอยู่ในหน้าแม้จะปิด เพื่อไม่ให้ข้อความที่คุยไว้หาย
  const [loaded, setLoaded] = useState(false);
  const launcher = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  // ปิดแผงแล้วคืนโฟกัสให้ปุ่มเปิด
  useEffect(() => {
    if (wasOpen.current && !open) launcher.current?.focus();
    wasOpen.current = open;
  }, [open]);

  return (
    <>
      {loaded && (
        <ChatPanel
          id={PANEL_ID}
          t={t}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
      {/* ที่ว่างท้ายหน้า ให้ปุ่มที่ลอยอยู่ไม่ทับข้อความของ footer เมื่อเลื่อนลงสุด */}
      <div aria-hidden="true" className="h-12" />
      <button
        ref={launcher}
        type="button"
        onClick={() => {
          setLoaded(true);
          setOpen(true);
        }}
        aria-label={t.open}
        aria-expanded={open}
        aria-controls={PANEL_ID}
        hidden={open}
        className="group fixed bottom-3 right-3 z-20 size-16 cursor-pointer"
      >
        {/* ป้ายชื่อ แสดงเมื่อชี้เมาส์หรือโฟกัสด้วยแป้นพิมพ์ */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-ink px-2.5 py-1 text-label text-wall opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          {t.open}
        </span>
        <ChatMascot className="size-16 origin-[50%_90%] overflow-visible transition-transform duration-200 group-hover:scale-110 motion-reduce:transition-none" />
      </button>
    </>
  );
}
