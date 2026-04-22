import { useState } from "react";
import { Reveal } from "../components/Reveal";

const copy: Record<string, string> = {
  tepper: "Tepper: course-aware release windows for breakout and team rooms.",
  hunt: "Hunt Library: largest cluster of tables, group rooms, and quiet floors on the network.",
  class: "Campus classrooms: intermittent availability surfaced only between scheduled sections.",
};

export function CoverageSection() {
  const [caption, setCaption] = useState("Tap a building to see how Scotty Spots expands coverage.");

  return (
    <section
      id="coverage"
      className="border-b border-line/60 bg-gradient-to-b from-white via-zinc-50/30 to-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-normal text-ink md:text-4xl">
            Every Corner of Campus Covered
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center font-sans text-lg leading-relaxed text-zinc-600">
            Access to 350+ study spaces across 15 buildings
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-10 max-w-3xl rounded-[20px] border border-line bg-[#eef0f3] p-8 shadow-inner">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-white shadow-sm">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(180,190,200,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(180,190,200,0.2) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <button
                type="button"
                onClick={() => setCaption(copy.tepper)}
                className="absolute left-[12%] top-[18%] flex flex-col items-center gap-2 bg-transparent text-center font-sans text-xs font-semibold text-ink transition hover:scale-105 active:scale-100"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-cmu bg-white shadow-card [background-image:radial-gradient(circle,#C412301.5px,transparent_2px)] [background-size:10px_10px]" />
                Tepper School
              </button>
              <button
                type="button"
                onClick={() => setCaption(copy.hunt)}
                className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 bg-transparent text-center font-sans text-xs font-semibold text-ink transition hover:scale-105 active:scale-100"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-cmu bg-cmu shadow-card [background-image:radial-gradient(circle,#fff_1.5px,transparent_2px)] [background-size:10px_10px]" />
                Hunt Library
              </button>
              <button
                type="button"
                onClick={() => setCaption(copy.class)}
                className="absolute right-[10%] top-[16%] flex flex-col items-center gap-2 bg-transparent text-center font-sans text-xs font-semibold text-ink transition hover:scale-105 active:scale-100"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-cmu bg-white shadow-card [background-image:radial-gradient(circle,#C412301.5px,transparent_2px)] [background-size:10px_10px]" />
                Campus Classrooms
              </button>
            </div>
            <p
              key={caption}
              className="mb-0 mt-5 animate-fade-up text-center font-sans text-sm leading-relaxed text-zinc-600 motion-reduce:animate-none"
            >
              {caption}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
