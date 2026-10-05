// เครื่องหมายของ studio: หนึ่งช่องของภาพวาดรายเดือน เส้นตั้งซ้อนเส้นนอน คืองานครบทั้งสองฝั่ง
// รูปเดียวกับ favicon ใน src/app/icon.svg ถ้าแก้ต้องแก้ทั้งสองที่ สีคงที่ทั้งโหมดสว่างและมืด
export function StudioMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={className}>
      <path d="M0 0h20v20H0z" className="fill-brand" />
      <path
        d="M2 0h1v20H2zM7 0h1v20H7zM12 0h1v20h-1zM17 0h1v20h-1zM0 2h20v1H0zM0 7h20v1H0zM0 12h20v1H0zM0 17h20v1H0z"
        className="fill-white"
      />
    </svg>
  );
}
