import type { Locale } from "@/content/locale";

// ธงวงกลมของแต่ละภาษา วาดเป็น SVG ในโค้ด ไม่ใช้ไฟล์หรือลิงก์ภายนอก
// ใช้ได้หน้าละหนึ่งธง เพราะ id ของ clipPath ต้องไม่ซ้ำกันในหน้า
export function Flag({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 30 30" aria-hidden="true" className={className}>
      <clipPath id="flag-circle">
        <circle cx="15" cy="15" r="15" />
      </clipPath>
      <g clipPath="url(#flag-circle)">
        {locale === "th" ? <Thailand /> : <UnitedKingdom />}
      </g>
      {/* ขอบบาง: แถบสีขาวของธงจะไม่กลืนไปกับพื้นหลัง */}
      <circle
        cx="15"
        cy="15"
        r="14.5"
        fill="none"
        vectorEffect="non-scaling-stroke"
        className="stroke-pencil transition-colors group-hover:stroke-klein"
      />
    </svg>
  );
}

// แถบแดง ขาว น้ำเงิน ขาว แดง สัดส่วน 1:1:2:1:1
function Thailand() {
  return (
    <>
      <path d="M0 0h30v30H0z" fill="#a51931" />
      <path d="M0 5h30v20H0z" fill="#f4f5f8" />
      <path d="M0 10h30v10H0z" fill="#2d2a4a" />
    </>
  );
}

// ธงขนาด 60 × 30 ตามแบบมาตรฐาน เลื่อนให้เห็นเฉพาะสี่เหลี่ยมจัตุรัสตรงกลาง
function UnitedKingdom() {
  return (
    <g transform="translate(-15 0)">
      <clipPath id="flag-saltire">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <path d="M0 0h60v30H0z" fill="#012169" />
      <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0 0l60 30M60 0L0 30"
        clipPath="url(#flag-saltire)"
        stroke="#c8102e"
        strokeWidth="4"
      />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6" />
    </g>
  );
}
