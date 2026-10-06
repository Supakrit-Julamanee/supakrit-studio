"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { ChatText } from "@/content/types";
import { Icon } from "./icon";

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
        title={t.open}
        hidden={open}
        className="fixed bottom-5 right-5 z-20 flex size-12 cursor-pointer items-center justify-center bg-ink text-wall transition-colors hover:bg-klein"
      >
        <Icon name="chat" className="size-5" />
      </button>
    </>
  );
}
