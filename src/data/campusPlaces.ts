/**
 * CMU main campus: building anchors (WGS84), aligned to OpenStreetMap building centroids
 * (Nominatim) so pins sit on the actual footprints on the basemap.
 *
 * Tepper: main Tepper School building on Forbes. Hunt: 4909 Frew St library amenity.
 * Gates: Gates and Hillman Centers. Sorrells: Wean Hall (Sorrells Engineering Library).
 */
export const CAMPUS_PLACES = [
  { id: "tepper", label: "Tepper", lat: 40.44517, lng: -79.94527 },
  { id: "hunt", label: "Hunt Library", lat: 40.44111, lng: -79.94374 },
  { id: "gates", label: "Gates / GHC", lat: 40.44357, lng: -79.94452 },
  { id: "sorrells", label: "Sorrells", lat: 40.44267, lng: -79.94569 },
] as const;

export type CampusBuildingId = (typeof CAMPUS_PLACES)[number]["id"];
