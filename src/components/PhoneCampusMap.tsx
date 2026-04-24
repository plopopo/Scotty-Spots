import { useCallback, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { DEMO_SPACES_AVAILABLE, formatDemoSpacesAvailable, formatDemoSpacesShort } from "../data/demoBuildingAvailability";
import { CAMPUS_PLACES, type CampusBuildingId } from "../data/campusPlaces";

function pinIcon(label: string, shortAvail: string) {
  return L.divIcon({
    className: "cmu-leaflet-pin",
    html: `<div style="display:flex;flex-direction:column;align-items:center;gap:1px;pointer-events:auto">
      <span style="width:13px;height:13px;background:#C41230;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.35)"></span>
      <span style="font:700 9px/1.1 system-ui,sans-serif;color:#2C3539;white-space:nowrap;text-shadow:0 0 4px #fff,0 0 4px #fff">${label}</span>
      <span style="font:600 8px/1.1 system-ui,sans-serif;color:#166534;white-space:nowrap;text-shadow:0 0 3px #fff,0 0 3px #fff">${shortAvail}</span>
    </div>`,
    iconSize: [96, 36],
    iconAnchor: [48, 18],
  });
}

type Props = {
  onBuildingSelect: (id: CampusBuildingId) => void;
};

/** Compact OSM map for the phone shell; zoom and pan enabled (wheel inside map). */
export function PhoneCampusMap({ onBuildingSelect }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  const onPick = useCallback(
    (id: string) => {
      onBuildingSelect(id as CampusBuildingId);
    },
    [onBuildingSelect]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el || mapRef.current) return;

    const map = L.map(el, {
      scrollWheelZoom: true,
      attributionControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '<span style="font-size:9px">&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a></span>',
    }).addTo(map);

    const bounds = L.latLngBounds(CAMPUS_PLACES.map((p) => [p.lat, p.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [28, 28], maxZoom: 16 });

    for (const p of CAMPUS_PLACES) {
      const n = DEMO_SPACES_AVAILABLE[p.id];
      const m = L.marker([p.lat, p.lng], {
        icon: pinIcon(p.label, formatDemoSpacesShort(n)),
      }).addTo(map);
      m.on("click", () => onPick(p.id));
      m.bindTooltip(`${p.label}: ${formatDemoSpacesAvailable(n)} (tap)`, {
        direction: "top",
        offset: [0, -10],
      });
    }

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [onPick]);

  return (
    <div
      ref={containerRef}
      className="relative z-0 min-h-[200px] w-full flex-1 overflow-hidden rounded-xl border border-cmu/20 bg-zinc-100"
      role="application"
      aria-label="Campus map: pinch or scroll inside the map to zoom; tap a building marker."
    />
  );
}
