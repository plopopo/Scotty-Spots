import { useCallback, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { DEMO_SPACES_AVAILABLE, formatDemoSpacesAvailable, formatDemoSpacesShort } from "../data/demoBuildingAvailability";
import { CAMPUS_PLACES, type CampusBuildingId } from "../data/campusPlaces";

function pinIcon(label: string, shortAvail: string) {
  return L.divIcon({
    className: "cmu-leaflet-pin",
    html: `<div style="display:flex;flex-direction:column;align-items:center;gap:1px;pointer-events:auto">
      <span style="width:14px;height:14px;background:#C41230;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.35)"></span>
      <span style="font:700 10px/1.1 system-ui,sans-serif;color:#2C3539;white-space:nowrap;text-shadow:0 0 4px #fff,0 0 4px #fff">${label}</span>
      <span style="font:600 9px/1.1 system-ui,sans-serif;color:#166534;white-space:nowrap;text-shadow:0 0 3px #fff,0 0 3px #fff">${shortAvail}</span>
    </div>`,
    iconSize: [100, 38],
    iconAnchor: [50, 19],
  });
}

type Props = {
  onPlaceSelect: (id: CampusBuildingId) => void;
};

export function CampusCoverageMap({ onPlaceSelect }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  const onSelect = useCallback(
    (id: string) => {
      onPlaceSelect(id as CampusBuildingId);
    },
    [onPlaceSelect]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el || mapInstance.current) return;

    const map = L.map(el, {
      scrollWheelZoom: false,
      attributionControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const bounds = L.latLngBounds(CAMPUS_PLACES.map((p) => [p.lat, p.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [36, 36], maxZoom: 16 });

    for (const p of CAMPUS_PLACES) {
      const n = DEMO_SPACES_AVAILABLE[p.id];
      const m = L.marker([p.lat, p.lng], {
        icon: pinIcon(p.label, formatDemoSpacesShort(n)),
      }).addTo(map);
      m.on("click", () => onSelect(p.id));
      m.bindTooltip(`${p.label}: ${formatDemoSpacesAvailable(n)}`, { direction: "top", offset: [0, -12] });
    }

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, [onSelect]);

  return (
    <div
      ref={containerRef}
      className="relative z-0 h-[min(380px,52vh)] min-h-[260px] w-full overflow-hidden rounded-2xl border border-line shadow-inner"
      role="application"
      aria-label="Map of Carnegie Mellon main campus with Tepper, Hunt Library, Gates Center, and Sorrells marked. Tap a marker for details."
    />
  );
}
