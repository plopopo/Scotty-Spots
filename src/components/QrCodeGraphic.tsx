import { useMemo } from "react";

/** Simplified 21×21 “QR-like” module grid: finder patterns + timing + pseudo-random data. */
const S = 21;

function inFinder(x: number, y: number) {
  return (x < 7 && y < 7) || (x >= 14 && y < 7) || (x < 7 && y >= 14);
}

function Finder({ ox, oy }: { ox: number; oy: number }) {
  return (
    <g transform={`translate(${ox},${oy})`}>
      <rect width={7} height={7} fill="#0a0a0a" />
      <rect x={1} y={1} width={5} height={5} fill="#ffffff" />
      <rect x={2} y={2} width={3} height={3} fill="#0a0a0a" />
    </g>
  );
}

type Props = {
  className?: string;
  /** Accessible label; use empty string to mark decorative only */
  title?: string;
};

export function QrCodeGraphic({ className = "h-full w-full", title }: Props) {
  const dataRects = useMemo(() => {
    const rects: JSX.Element[] = [];
    for (let y = 0; y < S; y++) {
      for (let x = 0; x < S; x++) {
        if (inFinder(x, y)) continue;
        if (y === 6 && x >= 8 && x <= 12) {
          rects.push(
            <rect key={`h${x}-${y}`} x={x} y={y} width={1} height={1} fill={x % 2 === 0 ? "#0a0a0a" : "#ffffff"} />
          );
          continue;
        }
        if (x === 6 && y >= 8 && y <= 12) {
          rects.push(
            <rect key={`v${x}-${y}`} x={x} y={y} width={1} height={1} fill={y % 2 === 0 ? "#0a0a0a" : "#ffffff"} />
          );
          continue;
        }
        const h = (x * 17 + y * 31 + x * y) % 11;
        if (h < 4) {
          rects.push(<rect key={`d${x}-${y}`} x={x} y={y} width={1} height={1} fill="#0a0a0a" />);
        }
      }
    }
    return rects;
  }, []);

  const a11y = title ? { role: "img" as const, "aria-label": title } : { "aria-hidden": true as const };

  return (
    <svg viewBox={`0 0 ${S} ${S}`} className={className} {...a11y}>
      <rect width={S} height={S} fill="#ffffff" />
      {dataRects}
      <Finder ox={0} oy={0} />
      <Finder ox={14} oy={0} />
      <Finder ox={0} oy={14} />
    </svg>
  );
}
