"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import type { ChatText } from "@/content/types";
import { Icon } from "./icon";

type Turn = { role: "user" | "assistant"; content: string };
type ErrorCode = keyof ChatText["errors"];

// ตรงกับขีดจำกัดใน src/app/api/chat/route.ts
const MAX_QUESTION_CHARS = 500;

export function ChatPanel({
  id,
  t,
  open,
  onClose,
}: {
  id: string;
  t: ChatText;
  open: boolean;
  onClose: () => void;
}) {
  const [turns, setTurns] = useState<Turn[]>([]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<ErrorCode | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLDivElement>(null);

  // เปิดแผงแล้วพร้อมพิมพ์ทันที และปิดได้ด้วย Escape
  useEffect(() => {
    if (!open) return;
    input.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // เลื่อนลงไปที่ข้อความล่าสุด
  useEffect(() => {
    list.current?.scrollTo({ top: list.current.scrollHeight });
  }, [turns, pending, error]);

  async function ask(question: string) {
    const text = question.trim();
    if (!text || pending) return;

    const next: Turn[] = [...turns, { role: "user", content: text }];
    setTurns(next);
    setDraft("");
    setError(null);
    setPending(true);
    // คำถามตัวอย่างหายไปหลังกด จึงย้ายโฟกัสมาที่ช่องพิมพ์ ไม่ให้โฟกัสหลุดออกจากแผง
    input.current?.focus();

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = (await response.json()) as {
        reply?: string;
        error?: string;
      };
      if (response.ok && data.reply) {
        setTurns([...next, { role: "assistant", content: data.reply }]);
      } else {
        setError(
          data.error && data.error in t.errors
            ? (data.error as ErrorCode)
            : "unavailable",
        );
      }
    } catch {
      setError("unavailable");
    } finally {
      setPending(false);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void ask(draft);
  }

  return (
    <section
      id={id}
      role="dialog"
      aria-label={t.title}
      hidden={!open}
      className="fixed inset-x-0 bottom-0 z-20 flex h-[min(34rem,85dvh)] flex-col border-t border-ink bg-wall sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[24rem] sm:border"
    >
      <header className="flex items-center justify-between gap-4 border-b border-pencil py-3 pl-4 pr-3">
        <h2 className="text-label font-semibold">{t.title}</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label={t.close}
          title={t.close}
          className="cursor-pointer p-2 transition-colors hover:text-klein"
        >
          <Icon name="close" className="size-4" />
        </button>
      </header>

      <div
        ref={list}
        aria-live="polite"
        className="flex-1 space-y-4 overflow-y-auto p-4 text-label"
      >
        <p className="text-graphite">{t.hint}</p>

        {/* คำถามตัวอย่าง แสดงก่อนเริ่มคุยเท่านั้น */}
        {turns.length === 0 && (
          <ul className="flex flex-wrap gap-2">
            {t.suggestions.map((question) => (
              <li key={question}>
                <button
                  type="button"
                  onClick={() => void ask(question)}
                  className="cursor-pointer border border-pencil px-3 py-1.5 text-left transition-colors hover:border-klein hover:text-klein"
                >
                  {question}
                </button>
              </li>
            ))}
          </ul>
        )}

        {turns.map(({ role, content }, index) =>
          role === "user" ? (
            <p
              key={index}
              className="ml-auto w-fit max-w-[85%] whitespace-pre-wrap bg-ink px-3 py-2 text-wall [overflow-wrap:anywhere]"
            >
              <span className="sr-only">{t.you}: </span>
              {content}
            </p>
          ) : (
            <p
              key={index}
              className="max-w-[92%] whitespace-pre-wrap [overflow-wrap:anywhere]"
            >
              <span className="sr-only">{t.assistant}: </span>
              {content}
            </p>
          ),
        )}

        {pending && <p className="text-graphite">{t.thinking}</p>}
        {error && (
          <p role="alert" className="border-l border-ink pl-3">
            {t.errors[error]}
          </p>
        )}
      </div>

      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 border-t border-pencil p-3"
      >
        {/* ขนาด 17 px: iOS จะไม่ซูมหน้าเมื่อแตะช่องพิมพ์ */}
        <input
          ref={input}
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          maxLength={MAX_QUESTION_CHARS}
          placeholder={t.placeholder}
          aria-label={t.placeholder}
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent px-1 py-2 text-body placeholder:text-graphite focus-visible:outline-offset-0"
        />
        <button
          type="submit"
          disabled={pending || draft.trim() === ""}
          aria-label={t.send}
          title={t.send}
          className="flex size-10 shrink-0 cursor-pointer items-center justify-center bg-ink text-wall transition-colors hover:bg-klein disabled:cursor-default disabled:opacity-40 disabled:hover:bg-ink"
        >
          <Icon name="send" className="size-4" />
        </button>
      </form>
    </section>
  );
}
