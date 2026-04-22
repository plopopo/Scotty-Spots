import { useCallback, useState } from "react";
import { CampusCoverageMap } from "../components/CampusCoverageMap";
import { Reveal } from "../components/Reveal";
import { DEMO_SPACES_AVAILABLE, formatDemoSpacesAvailable } from "../data/demoBuildingAvailability";
import type { CampusBuildingId } from "../data/campusPlaces";

const copy: Record<CampusBuildingId, string> = {
  tepper:
    "Tepper School of Business: course-aware release windows for breakout and team rooms; study spaces fold into the same live map as the rest of campus.",
  hunt: "Hunt Library: the largest cluster of tables, group rooms, and quiet floors on the network—ideal anchor for adoption.",
  gates:
    "Gates Center / GHC: dense study carrels and collaboration zones near CS coursework; real-time availability keeps traffic predictable.",
  sorrells:
    "Sorrells Engineering Library: high-use tables and group areas off the Schenley lawn side—surfaced with the same QR + floor-plan experience.",
};

export function CoverageSection() {
  const [caption, setCaption] = useState(
    "Tap a marker on the CMU map for how Scotty Spots expands coverage at that location."
  );

  const onPlaceSelect = useCallback((id: CampusBuildingId) => {
    const n = DEMO_SPACES_AVAILABLE[id];
    setCaption(`${copy[id]} Sample availability on the map: ${formatDemoSpacesAvailable(n)} (illustrative).`);
  }, []);

  return (
    <section
      id="coverage"
      className="border-b border-line/60 bg-gradient-to-b from-white via-zinc-50/30 to-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-normal text-ink md:text-4xl">
            Every corner of campus covered
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center font-sans text-lg leading-relaxed text-zinc-600">
            Tepper, Hunt Library, Gates / GHC, and Sorrells on a real map of the CMU core—where we prioritize rollout so live
            availability matches where students already cluster (scaling toward 350+ spaces across campus over time).
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-10 max-w-4xl rounded-[20px] border border-line bg-[#eef0f3] p-4 shadow-inner md:p-8">
            <CampusCoverageMap onPlaceSelect={onPlaceSelect} />
            <p
              key={caption}
              className="mb-0 mt-4 animate-fade-up text-center font-sans text-sm leading-relaxed text-zinc-600 motion-reduce:animate-none md:mt-5"
            >
              {caption}
            </p>
            <p className="mb-0 mt-2 text-center font-sans text-xs text-zinc-500">
              Map © OpenStreetMap contributors · building pins are approximate for illustration.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
