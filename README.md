# supakrit studio

Landing page พอร์ตโฟลิโอของ Supakrit Julamanee สร้างด้วย Next.js (App Router), TypeScript และ Tailwind CSS มี 2 ภาษา (อังกฤษและไทย) และมีโหมดสว่างกับโหมดมืด

รายละเอียดทั้งหมดของเว็บ (tech stack, style, ข้อมูลบนหน้า) อยู่ใน [WEBSITE.md](WEBSITE.md)

## เริ่มใช้งาน

```bash
pnpm install
pnpm dev
```

เปิด [http://localhost:3000](http://localhost:3000)

คำสั่งอื่น: `pnpm build` สร้างเวอร์ชัน production, `pnpm start` รันเวอร์ชันที่ build แล้ว, `pnpm lint` ตรวจโค้ด

## แก้ไขเนื้อหา

เว็บมี 2 ภาษา คืออังกฤษที่ `/` และไทยที่ `/th` เนื้อหาทั้งหมดแยกจากหน้าตา

- `src/content/en.ts` และ `src/content/th.ts` ข้อความของแต่ละภาษา: ข้อความแนะนำตัว ประสบการณ์ การศึกษา และป้ายกำกับ แก้ข้อความต้องแก้ทั้งสองไฟล์
- `src/content/shared.ts` ข้อมูลที่เหมือนกันทุกภาษา: ชื่อ ลิงก์ติดต่อ โลโก้ และรายการทักษะ
- `src/content/timeline.ts` ช่วงเวลาทำงานที่ใช้วาดภาพลายเส้นในส่วนแรกของหน้า (หนึ่งช่องคือหนึ่งเดือน) เมื่อได้งานใหม่ให้เพิ่มช่วงเวลาใน `periods`

## แชตบอท

แชตบอทตอบคำถามจากเนื้อหาของหน้าเว็บด้วย Gemini API ปุ่มแชตจะแสดงเมื่อมี API key เท่านั้น

1. สร้าง API key ที่ [Google AI Studio](https://aistudio.google.com/apikey)
2. สร้างไฟล์ `.env.local` ที่รากโปรเจกต์ แล้วใส่ `GEMINI_API_KEY=...`
3. บน Vercel ให้เพิ่ม `GEMINI_API_KEY` ใน Environment Variables แล้ว deploy ใหม่

รายละเอียดและขีดจำกัดอยู่ใน WEBSITE.md ข้อ 2.7

## โครงสร้าง

- `src/app/` layout และหน้าของแต่ละภาษา (`(en)/` คือ `/`, `th/` คือ `/th`), สีและขนาดตัวอักษร (`globals.css`)
- `src/components/` ส่วนต่าง ๆ ของหน้า ภาพลายเส้นอยู่ที่ `month-drawing.tsx`
