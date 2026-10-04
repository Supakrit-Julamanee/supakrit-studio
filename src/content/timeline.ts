// ข้อมูลของภาพวาดในส่วนแรกของหน้า: หนึ่งช่องคือหนึ่งเดือน
// เส้นตั้ง = งาน Frontend, เส้นนอน = งาน Backend

export type Stroke = "vertical" | "horizontal";

type Period = {
  from: [year: number, month: number];
  to: [year: number, month: number];
  org: string;
  role: string;
  strokes: Stroke[];
};

const periods: Period[] = [
  {
    from: [2024, 6],
    to: [2024, 12],
    org: "Skyfrog",
    role: "Software Developer",
    strokes: ["vertical", "horizontal"],
  },
  {
    from: [2025, 2],
    to: [2026, 8],
    org: "ยูนิกซ์เดฟ",
    role: "Frontend Developer",
    strokes: ["vertical"],
  },
];

// เดือนแรกที่ว่างรับงาน แสดงเป็นช่องสีน้ำเงิน ใส่ null เมื่อไม่ได้เปิดรับงาน
const availableFrom = null as [year: number, month: number] | null;

export const years = [2024, 2025, 2026];

export const monthNames = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "เม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค.",
];

export type Month = {
  year: number;
  // 0 = ม.ค.
  month: number;
  label: string;
  strokes: Stroke[];
  open: boolean;
  // ลำดับที่ถูกวาดตอนโหลดหน้า นับเฉพาะช่องที่มีเส้นหรือสี
  order: number | null;
};

const serial = (year: number, month: number) => year * 12 + month;

function buildMonths(): Month[] {
  let order = 0;
  return years.flatMap((year) =>
    monthNames.map((name, index) => {
      const at = serial(year, index + 1);
      const period = periods.find(
        (p) => at >= serial(...p.from) && at <= serial(...p.to),
      );
      const open = availableFrom !== null && at === serial(...availableFrom);
      const title = `${name} ${year}`;
      return {
        year,
        month: index,
        label: period
          ? `${title}: ${period.org}, ${period.role}`
          : open
            ? `${title}: ว่างรับงาน`
            : title,
        strokes: period?.strokes ?? [],
        open,
        order: period || open ? order++ : null,
      };
    }),
  );
}

export const months = buildMonths();

export const workedMonths = months.filter((m) => m.strokes.length > 0).length;

export const availableSince = availableFrom
  ? `${monthNames[availableFrom[1] - 1]} ${availableFrom[0]}`
  : null;
