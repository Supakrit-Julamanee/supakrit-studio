import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // แต่ละภาษามีชุดฟอนต์ของตัวเอง (src/app/(en)/fonts.ts และ src/app/th/fonts.ts)
    // ค่านี้กัน Turbopack รวม CSS ของฟอนต์ไทยเข้าไปใน chunk ที่หน้าอังกฤษโหลดด้วย
    // ถ้าเอาออก ทั้งสองหน้าจะประกาศฟอนต์ซ้ำสองชุดและโหลดไฟล์ฟอนต์ซ้ำ
    cssChunking: { type: "graph", requestCost: 0 },
    // ฝัง CSS ไว้ใน HTML: CSS ของเว็บนี้เล็ก (ราว 5 KB หลังบีบอัด) หน้าจึงวาดได้โดยไม่ต้องรอไฟล์ CSS
    inlineCss: true,
  },
};

export default nextConfig;
