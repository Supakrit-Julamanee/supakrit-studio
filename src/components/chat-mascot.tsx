// ตัวการ์ตูนของปุ่มแชต: เครื่องหมายของ studio ที่มีตาและรอยยิ้ม
// การขยับ (กะพริบตา เหลือบมอง กระโดด) อยู่ใน globals.css ที่ class mascot-*
export function ChatMascot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <ellipse
        cx="32"
        cy="60.6"
        rx="15"
        ry="2.2"
        className="mascot-shadow fill-ink opacity-15"
      />
      <g className="mascot-body">
        <path d="M11 12h42v42H11z" className="fill-mascot" />
        <path
          d="M19.5 12v42M28 12v42M36.5 12v42M45 12v42M11 20.5h42M11 46h42"
          className="fill-none stroke-white/30"
        />
        <g className="mascot-eyes">
          <circle cx="24.5" cy="31" r="6" className="fill-white" />
          <circle cx="39.5" cy="31" r="6" className="fill-white" />
          <g className="mascot-pupils">
            <circle cx="25.5" cy="32" r="2.7" className="fill-black" />
            <circle cx="40.5" cy="32" r="2.7" className="fill-black" />
          </g>
        </g>
        <path
          d="M26 42.5q6 5 12 0"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="fill-none stroke-white"
        />
      </g>
    </svg>
  );
}
