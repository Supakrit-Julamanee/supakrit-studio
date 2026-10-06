"use client";

import { useEffect, useRef, useState } from "react";
import { MAX_QUESTION_CHARS, type Turn } from "@/content/chat-protocol";
import type { ChatText } from "@/content/types";
import { Icon } from "./icon";

type ErrorCode = keyof ChatText["errors"];

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
  const frame = useRef<HTMLDivElement>(null);
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

  // ความสูงของรายการเปลี่ยน (แป้นพิมพ์เปิดหรือปิด หมุนจอ เปิดแผงอีกครั้ง) แล้วข้อความล่าสุดต้องยังอยู่ในสายตา
  useEffect(() => {
    const element = list.current;
    if (!element) return;
    const observer = new ResizeObserver(() =>
      element.scrollTo({ top: element.scrollHeight }),
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // แป้นพิมพ์บนจอมี 2 แบบ แบบแรกเบราว์เซอร์ย่อพื้นที่ของหน้าให้เอง (Chrome บน Android ตาม siteViewport
  // ใน site-metadata.ts) กรอบของแผงซึ่งเต็มจอด้วย CSS จะย่อตามโดยไม่ต้องใช้โค้ดนี้
  // แบบที่สองแป้นพิมพ์ทับหน้าโดยพื้นที่ที่ position: fixed ยึดอยู่ไม่ย่อ (Safari บน iOS) ช่องพิมพ์จึงถูกบัง
  // กรณีนั้นอ่านส่วนที่มองเห็นจริงจาก visual viewport แล้วบอกกรอบว่าถูกบังด้านบนและด้านล่างเท่าไร
  useEffect(() => {
    const viewport = window.visualViewport;
    const element = frame.current;
    if (!open || !viewport || !element) return;

    const fit = () => {
      // ตอนผู้ชมซูมหน้า ไม่นับว่ามีอะไรบัง
      const zoomed = viewport.scale > 1.01;
      const top = zoomed ? 0 : viewport.offsetTop;
      const bottom = zoomed
        ? 0
        : element.getBoundingClientRect().height - top - viewport.height;
      // ต่างกันไม่ถึง 1 px เป็นเศษจากการปัดค่า ไม่ใช่ส่วนที่ถูกบัง
      element.style.setProperty("--covered-top", `${top < 1 ? 0 : top}px`);
      element.style.setProperty(
        "--covered-bottom",
        `${bottom < 1 ? 0 : bottom}px`,
      );
    };
    fit();
    viewport.addEventListener("resize", fit);
    viewport.addEventListener("scroll", fit);
    window.addEventListener("resize", fit);
    return () => {
      viewport.removeEventListener("resize", fit);
      viewport.removeEventListener("scroll", fit);
      window.removeEventListener("resize", fit);
    };
  }, [open]);

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

  return (
    // กรอบเต็มจอ หักส่วนที่แป้นพิมพ์บังออกด้วย padding ตัวกรอบเองไม่รับการแตะหรือคลิก
    // จอแคบกว่า 640 px แผงเต็มกรอบ คือเต็มจอ จอที่กว้างกว่าแผงเป็นกล่องชิดมุมขวาล่างของกรอบ
    <div
      ref={frame}
      className="pointer-events-none fixed inset-0 z-20 flex items-end justify-end pt-[var(--covered-top,0px)] pb-[var(--covered-bottom,0px)]"
    >
      <section
        id={id}
        role="dialog"
        aria-label={t.title}
        hidden={!open}
        className="pointer-events-auto flex h-full max-h-full w-full flex-col border-ink bg-wall sm:m-5 sm:h-[min(34rem,85dvh)] sm:max-h-[calc(100%-2.5rem)] sm:w-[24rem] sm:border"
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
          className="flex-1 space-y-4 overflow-y-auto overscroll-contain p-4 text-label"
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

          {/* คำถามของผู้ชมอยู่ชิดขวาบนพื้นสีหมึก คำตอบอยู่ชิดซ้ายเป็นตัวหนังสือล้วน */}
          {turns.map(({ role, content }, index) => (
            <p
              key={index}
              className={`whitespace-pre-wrap wrap-anywhere ${
                role === "user"
                  ? "ml-auto w-fit max-w-[85%] bg-ink px-3 py-2 text-wall"
                  : "max-w-[92%]"
              }`}
            >
              <span className="sr-only">{t.speakers[role]}: </span>
              {content}
            </p>
          ))}

          {pending && <p className="text-graphite">{t.thinking}</p>}
          {error && (
            <p role="alert" className="border-l border-ink pl-3">
              {t.errors[error]}
            </p>
          )}
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            void ask(draft);
          }}
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
    </div>
  );
}
