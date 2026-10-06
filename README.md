# supakrit studio

Landing page พอร์ตโฟลิโอของ Supakrit Julamanee สร้างด้วย Next.js (App Router), TypeScript และ Tailwind CSS มี 2 ภาษา (อังกฤษและไทย) มีโหมดสว่างกับโหมดมืด และมีแชตบอทที่ตอบจากเนื้อหาของหน้า

เว็บจริง: [supakrit-studio.vercel.app](https://supakrit-studio.vercel.app)

รายละเอียดทั้งหมดของเว็บ (tech stack, style, ข้อมูลบนหน้า) อยู่ใน [WEBSITE.md](WEBSITE.md)

## เริ่มใช้งาน

ต้องมี Node.js 22.1 ขึ้นไป และ pnpm

```bash
pnpm install
pnpm dev
```

เปิด [http://localhost:3000](http://localhost:3000)

คำสั่งอื่น: `pnpm build` สร้างเวอร์ชัน production, `pnpm start` รันเวอร์ชันที่ build แล้ว, `pnpm lint` ตรวจโค้ด

## แก้ไขเนื้อหา

เว็บมี 2 ภาษา คืออังกฤษที่ `/` และไทยที่ `/th` เนื้อหาทั้งหมดอยู่ใน `src/content/` แยกจากหน้าตา

- `en.ts` และ `th.ts` ข้อความของแต่ละภาษา: ข้อความแนะนำตัว ประสบการณ์ การศึกษา และป้ายกำกับ แก้ข้อความต้องแก้ทั้งสองไฟล์
- `shared.ts` ข้อมูลที่เหมือนกันทุกภาษา: ชื่อ ลิงก์ติดต่อ ลำดับส่วนของหน้า ข้อมูลบริษัท (โลโก้ ตำแหน่ง stack) และรายการทักษะ
- `timeline.ts` ช่วงเวลาทำงานที่ใช้วาดภาพลายเส้นในส่วนแรกของหน้า (หนึ่งช่องคือหนึ่งเดือน) เมื่อได้งานใหม่ให้เพิ่มช่วงเวลาใน `periods`

วิธีแก้ไขแต่ละเรื่องอยู่ใน WEBSITE.md ข้อ 7

## แชตบอท

แชตบอทตอบคำถามจากเนื้อหาของหน้าเว็บด้วย Gemini API ปุ่มแชตจะแสดงเมื่อมี API key ตอน build เท่านั้น

1. สร้าง API key ที่ [Google AI Studio](https://aistudio.google.com/apikey)
2. สร้างไฟล์ `.env.local` ที่รากโปรเจกต์ แล้วใส่ `GEMINI_API_KEY=...`
3. บน Vercel ให้เพิ่ม `GEMINI_API_KEY` ใน Environment Variables แล้ว deploy ใหม่

รายละเอียดและขีดจำกัดอยู่ใน WEBSITE.md ข้อ 2.7

## Deploy

เว็บอยู่บน Vercel และยังไม่ได้เชื่อมกับ repo บน GitHub การ push จึงไม่ deploy ให้เอง ต้องรันคำสั่งนี้จากโฟลเดอร์โปรเจกต์

```bash
pnpm dlx vercel@latest deploy --prod --yes
```

## โครงสร้าง

- `src/app/` หน้าและ layout ของแต่ละภาษา (`(en)/` คือ `/`, `th/` คือ `/th`), โครง `<html>` ที่ใช้ร่วมกัน (`site-document.tsx`), metadata (`site-metadata.ts`), สีและขนาดตัวอักษร (`globals.css`) และ API ของแชตบอท (`api/chat/route.ts`)
- `src/components/` ส่วนต่าง ๆ ของหน้า เรียงกันใน `site-page.tsx` ภาพลายเส้นอยู่ที่ `month-drawing.tsx`
- `src/content/` ข้อความและข้อมูลทั้งหมดของเว็บ
- `src/assets/` ภาพโปรไฟล์และโลโก้
