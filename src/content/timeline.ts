// ข้อมูลของภาพวาดในส่วนแรกของหน้า: หนึ่งช่องคือหนึ่งเดือน
// เส้นตั้ง = งาน Frontend, เส้นนอน = งาน Backend
import { orgs, type OrgId } from "./shared";

export const strokes = ["vertical", "horizontal"] as const;

export type Stroke = (typeof strokes)[number];

type Period = {
  from: [year: number, month: number];
  to: [year: number, month: number];
  org: OrgId;
  strokes: Stroke[];
};

const periods: Period[] = [
  {
    from: [2024, 6],
    to: [2024, 12],
    org: "skyfrog",
    strokes: ["vertical", "horizontal"],
  },
  { from: [2025, 2], to: [2026, 8], org: "unixdev", strokes: ["vertical"] },
];

export const years = [2024, 2025, 2026];

// ช่วงปีบนป้ายผลงานของภาพวาด
export const yearRange = `${years[0]}–${years.at(-1)}`;

// ข้อความของภาพวาดที่ต่างกันตามภาษา
export type TimelineLabels = {
  // 12 ชื่อ เริ่มที่ ม.ค.
  monthNames: string[];
  // ชื่อสั้นของบริษัท
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

export function buildMonths(labels: TimelineLabels): Month[] {
  let order = 0;
  return years.flatMap((year) =>
    labels.monthNames.map((name, index) => {
      const at = serial(year, index + 1);
      const period = periods.find(
        (p) => at >= serial(...p.from) && at <= serial(...p.to),
      );
      const title = `${name} ${year}`;
      return {
        year,
        month: index,
        label: period
          ? `${title}: ${labels.orgs[period.org]}, ${orgs[period.org].role}`
          : title,
        strokes: period?.strokes ?? [],
        order: period ? order++ : null,
      };
    }),
  );
}

export const countWorked = (months: Month[]) =>
  months.filter((m) => m.strokes.length > 0).length;
