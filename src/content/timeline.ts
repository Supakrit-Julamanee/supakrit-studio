// ข้อมูลของภาพวาดในส่วนแรกของหน้า: หนึ่งช่องคือหนึ่งเดือน
// เส้นตั้ง = งาน Frontend, เส้นนอน = งาน Backend

export type Stroke = "vertical" | "horizontal";

type OrgId = "skyfrog" | "unixdev";

type Period = {
  from: [year: number, month: number];
  to: [year: number, month: number];
  org: OrgId;
  role: string;
  strokes: Stroke[];
};

const periods: Period[] = [
  {
    from: [2024, 6],
    to: [2024, 12],
    org: "skyfrog",
    role: "Software Developer",
    strokes: ["vertical", "horizontal"],
  },
  {
    from: [2025, 2],
    to: [2026, 8],
    org: "unixdev",
    role: "Frontend Developer",
    strokes: ["vertical"],
  },
];

export const years = [2024, 2025, 2026];

// ข้อความของภาพวาดที่ต่างกันตามภาษา
export type TimelineLabels = {
  // 12 ชื่อ เริ่มที่ ม.ค.
  monthNames: string[];
  orgs: Record<OrgId, string>;
};

export type Month = {
  year: number;
  // 0 = ม.ค.
  month: number;
  label: string;
  strokes: Stroke[];
  // ลำดับที่ถูกวาดตอนโหลดหน้า นับเฉพาะช่องที่มีเส้น
  order: number | null;
};

const serial = (year: number, month: number) => year * 12 + month;

export function buildMonths({ monthNames, orgs }: TimelineLabels): Month[] {
  let order = 0;
  return years.flatMap((year) =>
    monthNames.map((name, index) => {
      const at = serial(year, index + 1);
      const period = periods.find(
        (p) => at >= serial(...p.from) && at <= serial(...p.to),
      );
      const title = `${name} ${year}`;
      return {
        year,
        month: index,
        label: period
          ? `${title}: ${orgs[period.org]}, ${period.role}`
          : title,
        strokes: period?.strokes ?? [],
        order: period ? order++ : null,
      };
    }),
  );
}

export const countWorked = (months: Month[]) =>
  months.filter((m) => m.strokes.length > 0).length;
