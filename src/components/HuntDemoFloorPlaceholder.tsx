/** Non-Floor-4 demo: abstract plate + legend (no claim to real geometry). */
export function HuntDemoFloorPlaceholder({ floorLabel }: { floorLabel: string }) {
  return (
    <div className="rounded-xl border border-zinc-300/90 bg-[#eef0f3] p-3 shadow-inner">
      <svg viewBox="0 0 200 200" className="block h-auto w-full text-ink" aria-hidden>
        <rect x="8" y="8" width="184" height="184" rx="6" fill="#e8eaed" stroke="#9ca3af" strokeWidth="1.5" />
        <rect x="88" y="20" width="24" height="160" rx="2" fill="#d4d4d8" stroke="#a1a1aa" />
        <text x="100" y="104" textAnchor="middle" className="fill-zinc-500" fontSize="6" transform="rotate(-90 100 100)">
          corridor
        </text>
        <rect x="20" y="32" width="56" height="48" rx="4" fill="#86efac" stroke="#16a34a" strokeWidth="0.8" />
        <rect x="20" y="92" width="56" height="40" rx="4" fill="#fca5a5" stroke="#dc2626" strokeWidth="0.8" />
        <rect x="20" y="144" width="56" height="44" rx="4" fill="#86efac" stroke="#16a34a" strokeWidth="0.8" />
        <rect x="124" y="36" width="64" height="36" rx="4" fill="#86efac" stroke="#16a34a" strokeWidth="0.8" />
        <rect x="124" y="84" width="64" height="36" rx="4" fill="#86efac" stroke="#16a34a" strokeWidth="0.8" />
        <rect x="124" y="132" width="64" height="36" rx="4" fill="#fca5a5" stroke="#dc2626" strokeWidth="0.8" />
        <text x="100" y="196" textAnchor="middle" className="fill-zinc-500" fontSize="7" style={{ fontFamily: "system-ui" }}>
          Abstract zones, not {floorLabel} geometry
        </text>
      </svg>
      <p className="mb-0 mt-2 text-center font-sans text-[9px] leading-snug text-zinc-600">
        The interactive demo uses the detailed plate on <strong>Floor 4</strong> only. Other floors would load the real
        building floor plan in production.
      </p>
    </div>
  );
}
