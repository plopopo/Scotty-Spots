/**
 * Stylized Hunt Library–style floor plate: perimeter walls, corridor core,
 * open reading tables, and east-wing study rooms (not an official floor plan).
 */
type Props = {
  selectedRoom: number | null;
  selectedTable: number | null;
  onSelectRoom: (room: number) => void;
  onSelectTable: (table: number) => void;
};

/** Demo occupancy — green = available, red = occupied */
const OCCUPIED_TABLES = new Set([4, 11, 18]);
const OCCUPIED_ROOMS = new Set([4]);

/** Table center positions (x, y) in SVG space — open floor west of corridor */
const TABLE_SPOTS: { n: number; x: number; y: number }[] = [
  { n: 1, x: 22, y: 28 },
  { n: 2, x: 38, y: 28 },
  { n: 3, x: 54, y: 28 },
  { n: 4, x: 22, y: 44 },
  { n: 5, x: 38, y: 44 },
  { n: 6, x: 54, y: 44 },
  { n: 7, x: 22, y: 60 },
  { n: 8, x: 38, y: 60 },
  { n: 9, x: 54, y: 60 },
  { n: 10, x: 22, y: 76 },
  { n: 11, x: 38, y: 76 },
  { n: 12, x: 54, y: 76 },
  { n: 13, x: 22, y: 96 },
  { n: 14, x: 38, y: 96 },
  { n: 15, x: 54, y: 96 },
  { n: 16, x: 22, y: 112 },
  { n: 17, x: 38, y: 112 },
  { n: 18, x: 54, y: 112 },
  { n: 19, x: 22, y: 132 },
  { n: 20, x: 38, y: 132 },
  { n: 21, x: 54, y: 132 },
  { n: 22, x: 30, y: 150 },
];

const ROOMS = [
  { id: 1, x: 118, y: 22, w: 72, h: 42 },
  { id: 2, x: 118, y: 70, w: 72, h: 42 },
  { id: 3, x: 118, y: 118, w: 72, h: 42 },
  { id: 4, x: 118, y: 166, w: 72, h: 42 },
] as const;

export function HuntFloor4Plan({ selectedRoom, selectedTable, onSelectRoom, onSelectTable }: Props) {
  return (
    <div className="rounded-xl border border-zinc-300/90 bg-[#dfe2e6] p-1.5 shadow-inner">
      <svg viewBox="0 0 200 220" className="block h-auto w-full text-ink" aria-label="Floor 4 floor plan, illustrative">
        <defs>
          <pattern id="huntFloorTile" width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M 6 0 L 0 0 0 6" fill="none" className="stroke-zinc-300/80" strokeWidth="0.35" />
          </pattern>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="0.8" floodOpacity="0.2" />
          </filter>
        </defs>

        <rect x="0" y="0" width="200" height="220" fill="url(#huntFloorTile)" />

        {/* Outer shell */}
        <rect
          x="6"
          y="8"
          width="188"
          height="204"
          rx="3"
          fill="#eceef0"
          stroke="#9ca3af"
          strokeWidth="2"
          filter="url(#softShadow)"
        />

        {/* Window / north wall strip */}
        <rect x="10" y="11" width="100" height="5" rx="1" className="fill-sky-100/90 stroke-sky-200" strokeWidth="0.4" />
        <line x1="14" y1="13" x2="106" y2="13" className="stroke-sky-300/60" strokeWidth="0.6" strokeDasharray="3 2" />

        {/* Corridor (vertical spine) */}
        <rect x="76" y="20" width="28" height="186" rx="1.5" className="fill-zinc-100 stroke-zinc-300" strokeWidth="0.8" />
        <text
          x="90"
          y="118"
          className="fill-zinc-400"
          fontSize="5"
          textAnchor="middle"
          transform="rotate(-90 90 118)"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          corridor
        </text>

        {/* Stairs / core */}
        <rect x="80" y="24" width="20" height="14" rx="1" className="fill-zinc-300 stroke-zinc-400" strokeWidth="0.5" />
        <path d="M 84 28 h 12 M 84 32 h 12 M 84 36 h 12" className="stroke-zinc-500" strokeWidth="0.6" />

        {/* Quiet zone label */}
        <text x="38" y="24" textAnchor="middle" className="fill-zinc-500" fontSize="5" style={{ fontFamily: "system-ui" }}>
          open tables
        </text>

        {/* West: table clusters */}
        {TABLE_SPOTS.map(({ n, x, y }) => {
          const occ = OCCUPIED_TABLES.has(n);
          const sel = selectedTable === n;
          return (
            <g key={n}>
              <rect
                x={x - 6}
                y={y - 5}
                width="12"
                height="10"
                rx="1.2"
                role={occ ? undefined : "button"}
                tabIndex={occ ? undefined : 0}
                className={`transition-colors ${
                  occ
                    ? "cursor-not-allowed fill-red-500/85 stroke-red-800/80"
                    : sel
                      ? "cursor-pointer fill-emerald-400 stroke-amber-400 hover:fill-emerald-300"
                      : "cursor-pointer fill-emerald-600/95 stroke-emerald-900/40 hover:fill-emerald-500"
                }`}
                strokeWidth={sel ? 1.2 : 0.6}
                onClick={() => {
                  if (!occ) onSelectTable(n);
                }}
                onKeyDown={(e) => {
                  if (occ) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectTable(n);
                  }
                }}
              />
              <text
                x={x}
                y={y + 2.5}
                textAnchor="middle"
                className="pointer-events-none fill-white font-bold"
                fontSize="5.5"
                style={{ fontFamily: "system-ui" }}
              >
                {n}
              </text>
            </g>
          );
        })}

        {/* East wing: study rooms */}
        <text
          x="154"
          y="18"
          textAnchor="middle"
          className="fill-zinc-500"
          fontSize="5"
          style={{ fontFamily: "system-ui" }}
        >
          study rooms
        </text>
        {ROOMS.map((rm) => {
          const occ = OCCUPIED_ROOMS.has(rm.id);
          const sel = selectedRoom === rm.id && selectedTable === null;
          return (
            <g key={rm.id}>
              <rect
                x={rm.x}
                y={rm.y}
                width={rm.w}
                height={rm.h}
                rx="2"
                role={occ ? undefined : "button"}
                tabIndex={occ ? undefined : 0}
                className={`${
                  occ
                    ? "cursor-not-allowed fill-red-500/85 stroke-red-900/50"
                    : sel
                      ? "cursor-pointer fill-emerald-500 stroke-amber-300 hover:fill-emerald-400"
                      : "cursor-pointer fill-emerald-600/95 stroke-emerald-900/35 hover:fill-emerald-500"
                }`}
                strokeWidth={sel ? 1.5 : 0.8}
                onClick={() => {
                  if (!occ) onSelectRoom(rm.id);
                }}
                onKeyDown={(e) => {
                  if (occ) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectRoom(rm.id);
                  }
                }}
              />
              <text
                x={rm.x + rm.w / 2}
                y={rm.y + rm.h / 2 + 2}
                textAnchor="middle"
                className="pointer-events-none fill-white font-bold"
                fontSize="8"
                style={{ fontFamily: "system-ui" }}
              >
                Room {rm.id}
              </text>
            </g>
          );
        })}

        {/* South entrance hint */}
        <path d="M 88 206 h 24" className="stroke-zinc-400" strokeWidth="1.2" strokeLinecap="round" />
        <text x="100" y="216" textAnchor="middle" className="fill-zinc-500" fontSize="4.5" style={{ fontFamily: "system-ui" }}>
          elevators / stairs
        </text>
      </svg>
      <p className="mb-0 mt-1.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-center font-sans text-[8px] text-zinc-600">
        <span className="inline-flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-sm bg-emerald-600" aria-hidden />
          Available
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-sm bg-red-500" aria-hidden />
          Occupied
        </span>
      </p>
    </div>
  );
}
