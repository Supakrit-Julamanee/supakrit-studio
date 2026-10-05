// ทำงานใน <head> ก่อนเบราว์เซอร์วาดหน้า: ถ้าผู้ชมเคยกดเลือกโหมดมืดไว้ ให้ใส่ data-theme="dark" ทันที
// หน้าจึงไม่กะพริบเป็นโหมดสว่างก่อนตอนโหลด คีย์ "theme" ตรงกับที่ theme-toggle.tsx บันทึก
// ไม่อ่านค่าโหมดมืดของระบบ ผู้ชมที่ไม่เคยกดปุ่มจะเห็นโหมดสว่างเสมอ
const script = `(function(){try{if(localStorage.getItem("theme")==="dark")document.documentElement.setAttribute("data-theme","dark")}catch(e){}})()`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
