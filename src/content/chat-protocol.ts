// สิ่งที่แผงแชตในเบราว์เซอร์และ /api/chat ต้องเห็นตรงกัน
// ไฟล์นี้ถูกโหลดในเบราว์เซอร์ด้วย จึงไม่ import ข้อมูลอื่นของเว็บ
export type Turn = { role: "user" | "assistant"; content: string };

export const MAX_QUESTION_CHARS = 500;
