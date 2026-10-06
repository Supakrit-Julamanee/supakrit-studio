import { systemInstruction } from "@/content/chat-context";

// แชตบอท: รับคำถามจากหน้าเว็บ ส่งให้ Gemini พร้อมเนื้อหาของเว็บ แล้วคืนคำตอบ
// API key อยู่ฝั่ง server เท่านั้น (GEMINI_API_KEY) ไม่ถูกส่งไปที่เบราว์เซอร์

export const maxDuration = 30;

const MODEL = process.env.GEMINI_MODEL ?? "gemini-3.5-flash-lite";
// GEMINI_API_BASE ใช้ชี้ไปที่ server จำลองตอนทดสอบเท่านั้น
const API_BASE =
  process.env.GEMINI_API_BASE ?? "https://generativelanguage.googleapis.com";

const MAX_QUESTION_CHARS = 500;
const MAX_ANSWER_CHARS = 2000;
// ส่งเฉพาะข้อความล่าสุดไม่เกินจำนวนนี้ให้โมเดล
const MAX_TURNS = 8;
const PER_MINUTE = 6;
const PER_DAY = 40;

type Turn = { role: "user" | "assistant"; content: string };
type ErrorCode = "invalid" | "too_long" | "rate_limited" | "unavailable";

const fail = (error: ErrorCode, status: number) =>
  Response.json({ error }, { status });

// ตัวจำกัดจำนวนคำถามต่อ IP เก็บในหน่วยความจำของ server instance
// บน Vercel แต่ละ instance นับแยกกันและรีเซ็ตเมื่อ instance ปิด จึงกันได้แค่การยิงรัวแบบง่าย ๆ
const hits = new Map<string, number[]>();

function allowed(ip: string): boolean {
  const now = Date.now();
  const day = (hits.get(ip) ?? []).filter((at) => now - at < 86_400_000);
  const minute = day.filter((at) => now - at < 60_000);
  if (day.length >= PER_DAY || minute.length >= PER_MINUTE) {
    hits.set(ip, day);
    return false;
  }
  day.push(now);
  hits.set(ip, day);
  // กันไม่ให้ตารางโตไม่หยุด
  if (hits.size > 5000) hits.clear();
  return true;
}

function parseTurns(body: unknown): Turn[] | ErrorCode {
  const messages = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(messages) || messages.length === 0) return "invalid";

  const turns: Turn[] = [];
  for (const item of messages.slice(-MAX_TURNS)) {
    const { role, content } = (item ?? {}) as Partial<Turn>;
    if (role !== "user" && role !== "assistant") return "invalid";
    if (typeof content !== "string" || content.trim() === "") return "invalid";
    const limit = role === "user" ? MAX_QUESTION_CHARS : MAX_ANSWER_CHARS;
    if (content.length > limit) return "too_long";
    turns.push({ role, content: content.trim() });
  }
  // การสนทนาที่ส่งให้โมเดลต้องเริ่มและจบด้วยข้อความของผู้ชม
  while (turns[0]?.role === "assistant") turns.shift();
  if (turns.at(-1)?.role !== "user") return "invalid";
  return turns;
}

export async function POST(request: Request) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) return fail("unavailable", 503);

  // รับเฉพาะคำขอที่มาจากหน้าเว็บนี้เอง
  const origin = request.headers.get("origin");
  if (!origin || new URL(origin).host !== request.headers.get("host")) {
    return fail("invalid", 403);
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!allowed(ip)) return fail("rate_limited", 429);

  const turns = parseTurns(await request.json().catch(() => null));
  if (typeof turns === "string") return fail(turns, 400);

  try {
    const response = await fetch(
      `${API_BASE}/v1beta/models/${MODEL}:generateContent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": key },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemInstruction }] },
          contents: turns.map(({ role, content }) => ({
            role: role === "assistant" ? "model" : "user",
            parts: [{ text: content }],
          })),
          // maxOutputTokens นับรวม token ที่โมเดลใช้คิด จึงเผื่อไว้มากกว่าความยาวคำตอบจริง
          generationConfig: { temperature: 0.2, maxOutputTokens: 800 },
        }),
        signal: AbortSignal.timeout(20_000),
      },
    );

    // โควตาฟรีของ Gemini หมดหรือถูกจำกัดอัตราชั่วคราว
    if (response.status === 429) return fail("rate_limited", 429);
    if (!response.ok) return fail("unavailable", 502);

    const data = (await response.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    const reply = (data.candidates?.[0]?.content?.parts ?? [])
      .map((part) => part.text ?? "")
      .join("")
      .trim();
    if (!reply) return fail("unavailable", 502);

    return Response.json({ reply });
  } catch {
    // เครือข่ายล้มเหลวหรือเกินเวลา
    return fail("unavailable", 504);
  }
}
