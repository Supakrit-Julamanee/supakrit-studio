import type { CSSProperties } from "react";
import { years, type Month, type Stroke } from "@/content/timeline";

const CELL = 100;

const round = (n: number) => Math.round(n * 100) / 100;

// เส้นขนานหนึ่งชุดในช่องสี่เหลี่ยมขนาด size ที่มุมซ้ายบนอยู่ที่ (x, y)
function hatchPath(
  stroke: Stroke,
  x: number,
  y: number,
  size = CELL,
  lines = 10,
): string {
  const gap = size / lines;
  const d: string[] = [];
  for (let i = 0; i < lines; i++) {
    const at = (i + 0.5) * gap;
    d.push(
      stroke === "vertical"
        ? `M${round(x + at)} ${y}v${size}`
        : `M${x} ${round(y + at)}h${size}`,
    );
  }
  return d.join("");
}

function gridPath(cols: number, rows: number): string {
  const width = cols * CELL;
  const height = rows * CELL;
  const d = [`M0 0h${width}v${height}h${-width}z`];
  for (let col = 1; col < cols; col++) d.push(`M${col * CELL} 0v${height}`);
  for (let row = 1; row < rows; row++) d.push(`M0 ${row * CELL}h${width}`);
  return d.join("");
}

function Sheet({
  cells,
  cols,
  className = "",
}: {
  cells: Month[];
  cols: number;
  className?: string;
}) {
  const rows = Math.ceil(cells.length / cols);

  return (
    <svg
      viewBox={`0 0 ${cols * CELL} ${rows * CELL}`}
      fill="none"
      className={`block h-auto w-full overflow-visible ${className}`}
    >
      <path
        d={gridPath(cols, rows)}
        className="stroke-pencil"
        vectorEffect="non-scaling-stroke"
      />
      {cells.map((cell, index) => {
        const x = (index % cols) * CELL;
        const y = Math.floor(index / cols) * CELL;
        const order = { "--order": cell.order ?? 0 } as CSSProperties;

        return (
          <g key={`${cell.year}-${cell.month}`}>
            <title>{cell.label}</title>
            <rect x={x} y={y} width={CELL} height={CELL} fill="transparent" />
            {cell.strokes.map((stroke) => (
              <path
                key={stroke}
                d={hatchPath(stroke, x, y)}
                className="drawing-hatch stroke-ink"
                vectorEffect="non-scaling-stroke"
                style={order}
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export function HatchSwatch({ stroke }: { stroke: Stroke }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="size-4 shrink-0 overflow-visible"
      aria-hidden="true"
    >
      <rect width="16" height="16" className="stroke-pencil" />
      <path d={hatchPath(stroke, 0, 0, 16, 4)} className="stroke-ink" />
    </svg>
  );
}

export function MonthDrawing({
  months,
  monthNames,
  description,
}: {
  months: Month[];
  monthNames: string[];
  description: string;
}) {
  return (
    <>
      <p className="sr-only">{description}</p>

      {/* จอกว้าง: 12 เดือนต่อแถว หนึ่งแถวต่อหนึ่งปี */}
      <div
        className="hidden text-label text-graphite sm:grid sm:grid-cols-[2.5rem_1fr] sm:gap-x-3"
        aria-hidden="true"
      >
        <ol className="col-start-2 grid grid-cols-12 pb-2">
          {monthNames.map((name) => (
            <li key={name} className="text-center">
              {name}
            </li>
          ))}
        </ol>
        <ol className="col-start-1 grid auto-rows-fr">
          {years.map((year) => (
            <li key={year} className="self-center">
              {year}
            </li>
          ))}
        </ol>
        <Sheet cells={months} cols={12} className="col-start-2" />
      </div>

      {/* จอแคบ: 6 เดือนต่อแถว แยกเป็นรายปี */}
      <div className="space-y-5 sm:hidden" aria-hidden="true">
        {years.map((year) => (
          <div key={year}>
            <p className="pb-1.5 text-label text-graphite">{year}</p>
            <Sheet cells={months.filter((m) => m.year === year)} cols={6} />
          </div>
        ))}
      </div>
    </>
  );
}
