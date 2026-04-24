import type { KeyboardEvent } from "react";
import { useId } from "react";

export type Spot = { id: string; label: string; free: boolean };

export type PlacedSpot = Spot & {
  shortLabel: string;
  /** viewBox 0-100 x 0-92 coordinates */
  x: number;
  y: number;
  w: number;
  h: number;
  kind: "table" | "room";
};

/** Hunt Library 3rd floor: simplified layout; open tables west of corridor, study rooms east. */
export const INITIAL_PLACED_SPOTS: PlacedSpot[] = [
  { id: "3b", label: "3B Table", shortLabel: "3B", free: true, kind: "table", x: 7, y: 14, w: 30, h: 12 },
  { id: "3c", label: "3C Table", shortLabel: "3C", free: false, kind: "table", x: 7, y: 28, w: 30, h: 12 },
  { id: "3d", label: "3D Table", shortLabel: "3D", free: true, kind: "table", x: 7, y: 42, w: 30, h: 12 },
  { id: "r1", label: "R1 Study Room", shortLabel: "R1", free: true, kind: "room", x: 50, y: 12, w: 42, h: 17 },
  { id: "r2", label: "R2 Study Room", shortLabel: "R2", free: false, kind: "room", x: 50, y: 31, w: 42, h: 17 },
  { id: "r3", label: "R3 Study Room", shortLabel: "R3", free: true, kind: "room", x: 50, y: 50, w: 42, h: 17 },
];

type Props = {
  spots: PlacedSpot[];
  onPick: (spot: PlacedSpot) => void;
};

const VB = { w: 100, h: 92 };

export function PhoneFloorPlan({ spots, onPick }: Props) {
  const gridPatternId = `fp-grid-${useId().replace(/:/g, "")}`;

  return (
    <div className="relative w-full select-none rounded-xl border border-zinc-200/80 bg-zinc-100 shadow-inner">
      <svg
        viewBox={`0 0 ${VB.w} ${VB.h}`}
        className="block h-[min(220px,48vw)] w-full text-ink"
        aria-label="Floor plan, Hunt Library third floor"
      >
        <defs>
          <pattern id={gridPatternId} width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M 4 0 L 0 0 0 4" fill="none" className="stroke-zinc-200" strokeWidth="0.15" />
          </pattern>
        </defs>
        <rect width={VB.w} height={VB.h} fill={`url(#${gridPatternId})`} className="opacity-70" />

        {/* Shell + reading zone */}
        <path
          fill="#fafafa"
          stroke="#c4c4c8"
          strokeWidth="0.85"
          strokeLinejoin="round"
          d="M 4 6 h 92 v 72 H 58 V 84 H 42 V 78 H 4 Z"
        />
        <line x1="4" y1="6" x2="96" y2="6" className="stroke-zinc-400" strokeWidth="0.45" strokeDasharray="1.5 1.2" />

        {/* Corridor */}
        <rect x="40" y="10" width="6" height="64" rx="0.8" className="fill-zinc-200/90 stroke-zinc-300" strokeWidth="0.25" />
        <text x="43" y="44" className="fill-zinc-500" fontSize="3" textAnchor="middle" transform="rotate(-90 43 44)">
          corridor
        </text>

        <text x="22" y="11.5" className="fill-zinc-500" fontSize="2.8" textAnchor="middle">
          open tables
        </text>
        <text x="71" y="11.5" className="fill-zinc-500" fontSize="2.8" textAnchor="middle">
          study rooms
        </text>

        <path d="M 42 78 A 6 6 0 0 1 48 84" fill="none" className="stroke-zinc-400" strokeWidth="0.35" />

        {spots.map((s) => (
          <FloorSpace key={s.id} spot={s} onPick={onPick} />
        ))}
      </svg>
    </div>
  );
}

function FloorSpace({ spot: s, onPick }: { spot: PlacedSpot; onPick: (s: PlacedSpot) => void }) {
  const free = s.free;
  const fill = free ? "#ecfdf5" : "#fff1f2";
  const stroke = free ? "#10b981" : "#fda4af";
  const textFill = free ? "#065f46" : "#9f1239";
  const subFill = free ? "#047857" : "#be123c";

  const handleClick = () => {
    if (free) onPick(s);
  };

  const handleKey = (e: KeyboardEvent<SVGGElement>) => {
    if (!free) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onPick(s);
    }
  };

  const a11y = {
    role: "button" as const,
    tabIndex: free ? (0 as const) : (-1 as const),
    "aria-disabled": !free,
    "aria-label": `${s.label}, ${free ? "available, tap to reserve" : "occupied"}`,
    style: { cursor: free ? ("pointer" as const) : ("not-allowed" as const) },
    onClick: handleClick,
    onKeyDown: handleKey,
  };

  if (s.kind === "room") {
    return (
      <g {...a11y}>
        <rect x={s.x} y={s.y} width={s.w} height={s.h} rx="1.8" fill={fill} stroke={stroke} strokeWidth="0.65" />
        <line
          x1={s.x + s.w * 0.35}
          y1={s.y + s.h}
          x2={s.x + s.w * 0.65}
          y2={s.y + s.h}
          stroke={stroke}
          strokeWidth="0.9"
        />
        <text
          x={s.x + s.w / 2}
          y={s.y + s.h / 2 - 3.2}
          textAnchor="middle"
          className="font-sans"
          fontSize="2.2"
          fill={subFill}
          style={{ pointerEvents: "none" }}
        >
          room
        </text>
        <text
          x={s.x + s.w / 2}
          y={s.y + s.h / 2 + 1.2}
          textAnchor="middle"
          className="font-sans font-bold"
          fontSize="4.2"
          fill={textFill}
          style={{ pointerEvents: "none" }}
        >
          {s.shortLabel}
        </text>
      </g>
    );
  }

  const cx = s.x + s.w / 2;
  const cy = s.y + s.h / 2;
  const rw = s.w * 0.42;
  const rh = s.h * 0.28;

  return (
    <g {...a11y}>
      <ellipse cx={cx} cy={s.y + 2.2} rx="1.4" ry="1.1" className={free ? "fill-emerald-300/80" : "fill-rose-200"} />
      <ellipse cx={cx} cy={s.y + s.h - 2.2} rx="1.4" ry="1.1" className={free ? "fill-emerald-300/80" : "fill-rose-200"} />
      <ellipse cx={s.x + 2.4} cy={cy} rx="1.1" ry="1.4" className={free ? "fill-emerald-300/80" : "fill-rose-200"} />
      <ellipse cx={s.x + s.w - 2.4} cy={cy} rx="1.1" ry="1.4" className={free ? "fill-emerald-300/80" : "fill-rose-200"} />
      <rect
        x={cx - rw / 2}
        y={cy - rh / 2}
        width={rw}
        height={rh}
        rx="1.2"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.55"
      />
      <text
        x={cx}
        y={cy + 1.5}
        textAnchor="middle"
        className="font-sans font-bold"
        fontSize="3.8"
        fill={textFill}
        style={{ pointerEvents: "none" }}
      >
        {s.shortLabel}
      </text>
    </g>
  );
}
