import type { CampusBuildingId } from "./campusPlaces";

/** Illustrative live counts for the demo only (not tied to real occupancy). */
export const DEMO_SPACES_AVAILABLE: Record<CampusBuildingId, number> = {
  hunt: 47,
  sorrells: 18,
  tepper: 23,
  gates: 31,
};

export function formatDemoSpacesAvailable(count: number): string {
  if (count === 1) return "1 space available";
  return `${count} spaces available`;
}

/** Short line for map pin badges (keeps labels readable when zoomed out). */
export function formatDemoSpacesShort(count: number): string {
  if (count === 1) return "1 open";
  return `${count} open`;
}
