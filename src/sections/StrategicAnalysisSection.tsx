import { Fragment } from "react";
import { Reveal } from "../components/Reveal";

const VALUE_CHAIN = [
  { k: "Students", v: "Scan / browse / reserve / release" },
  { k: "Scotty Spots", v: "Maps, auth, rules, notifications" },
  { k: "Campus data", v: "Scheduling, rooms, (future) sensors" },
  { k: "Operations", v: "Utilization analytics & planning" },
] as const;

export function StrategicAnalysisSection() {
  return (
    <section id="strategy" className="border-b border-line/60 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-normal text-ink md:text-4xl">
            Strategic analysis
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center font-sans text-lg leading-relaxed text-zinc-600">
            How Scotty Spots connects to CMU&apos;s operations, student experience, and longer-term campus strategy,
            grounded in our solution writeup.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Operational efficiency",
              body: "For University Facilities, granular usage data shows which areas are busiest and when, which supports renovation budgets, staffing, and energy decisions. Expanding beyond group study rooms to tables and classrooms unlocks more usable capacity from the same footprint.",
              tag: "Value creation",
            },
            {
              title: "Student value & equity",
              body: "At a high-rigor institution, searching for a seat adds stress. A reliable, seconds-fast path to an open spot supports wellness and satisfaction. A visual map gives every student, especially newcomers, the same mental model of where space actually is, not just a vague room name.",
              tag: "Stakeholders",
            },
            {
              title: "Scalability & versatility",
              body: "Future filters (outlets, whiteboards, quiet zones) deepen fit. The same pattern can extend to dining seating, makerspaces, or parking as a step toward a unified \"smart campus\" experience anchored in real-time occupancy.",
              tag: "Growth path",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <article className="h-full rounded-2xl border border-line bg-zinc-50/80 p-6 shadow-card transition duration-300 hover:border-cmu/20 hover:shadow-lift md:p-7">
                <p className="m-0 font-sans text-xs font-bold uppercase tracking-wide text-cmu">{c.tag}</p>
                <h3 className="mt-2 font-display text-xl font-bold tracking-normal text-ink">{c.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-zinc-600">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-14 max-w-4xl">
            <h3 className="text-center font-display text-2xl font-bold tracking-normal text-ink">
              Value chain (information flow)
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-center font-sans text-sm leading-relaxed text-zinc-600">
              Our information system links people, places, and institutional data so decisions happen on a shared, live picture instead of a disconnected list.
            </p>
            <div className="mt-8 flex flex-col items-center gap-1 rounded-2xl border border-line bg-soft p-6 md:flex-row md:flex-wrap md:justify-center md:gap-0 md:p-8">
              {VALUE_CHAIN.flatMap((step, idx) => {
                const box = (
                  <div
                    key={step.k}
                    className="w-full max-w-sm flex-1 rounded-xl border border-line/80 bg-white/90 px-4 py-3 text-center md:max-w-[11rem] md:py-4"
                  >
                    <span className="font-display text-sm font-extrabold text-cmu">{step.k}</span>
                    <span className="mt-1 block font-sans text-xs leading-snug text-zinc-600">{step.v}</span>
                  </div>
                );
                if (idx >= VALUE_CHAIN.length - 1) return [box];
                const sep = (
                  <Fragment key={`${step.k}-sep`}>
                    <span className="py-1 font-mono text-cmu md:hidden" aria-hidden>
                      ↓
                    </span>
                    <span className="hidden px-2 font-mono text-lg text-cmu md:inline" aria-hidden>
                      →
                    </span>
                  </Fragment>
                );
                return [box, sep];
              })}
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-xs text-zinc-500">
              Arrows implied: student actions update availability for peers; aggregated patterns feed facilities and campus planning.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-cmu/20 bg-rose-50/40 p-6 md:p-8">
            <h3 className="font-display text-xl font-bold tracking-normal text-ink">Competitive positioning</h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-zinc-700">
              CMU&apos;s incumbent tools center on <strong className="font-semibold text-ink">lists and coarse room types</strong>, often
              mobile-unfriendly, with limited coverage of tables and classrooms. Scotty Spots differentiates through{" "}
              <strong className="font-semibold text-ink">visual floor context</strong>,{" "}
              <strong className="font-semibold text-ink">QR-grounded check-in</strong> at the actual seat or door, and{" "}
              <strong className="font-semibold text-ink">real-time availability</strong> designed for quick, low-friction
              decisions, positioning the product as the &quot;where is it free{" "}
              <span className="whitespace-nowrap font-semibold text-cmu">right now</span>?&quot; layer above traditional scheduling grids.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
