# supakrit studio

Landing page พอร์ตโฟลิโอของ Supakrit Julamanee สร้างด้วย Next.js (App Router), TypeScript และ Tailwind CSS

รายละเอียดทั้งหมดของเว็บ (tech stack, style, ข้อมูลบนหน้า) อยู่ใน [WEBSITE.md](WEBSITE.md)

## เริ่มใช้งาน

```bash
pnpm install
pnpm dev
```

เปิด [http://localhost:3000](http://localhost:3000)

คำสั่งอื่น: `pnpm build` สร้างเวอร์ชัน production, `pnpm start` รันเวอร์ชันที่ build แล้ว, `pnpm lint` ตรวจโค้ด

## แก้ไขเนื้อหา

เนื้อหาทั้งหมดแยกจากหน้าตา แก้ที่ไฟล์เดียวแล้วหน้าเว็บเปลี่ยนตาม

- `src/content/profile.ts` ชื่อ ข้อความแนะนำตัว ประสบการณ์ ทักษะ การศึกษา และช่องทางติดต่อ
- `src/content/timeline.ts` ช่วงเวลาทำงานที่ใช้วาดภาพลายเส้นในส่วนแรกของหน้า (หนึ่งช่องคือหนึ่งเดือน) เมื่อได้งานใหม่ให้เพิ่มช่วงเวลาใน `periods` (ถ้าต้องการแสดงช่องสีน้ำเงินว่าว่างรับงาน ให้ใส่ปีและเดือนใน `availableFrom`)

## โครงสร้าง

- `src/app/` layout, หน้าหลัก, สีและขนาดตัวอักษร (`globals.css`)
- `src/components/` ส่วนต่าง ๆ ของหน้า ภาพลายเส้นอยู่ที่ `month-drawing.tsx`
