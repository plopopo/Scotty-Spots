import { Reveal } from "../components/Reveal";

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
              body: "Many other aspects can be added to this app, such as a filter to find the perfect study spot (e.g. spots with power outlets, whiteboards, or “quiet areas”) This model can eventually be scaled beyond libraries to dining hall seating, makerspaces, or even parking lots, creating a more unified “Smart Campus” experience.",
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

        <Reveal delay={80}>
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-cmu/20 bg-rose-50/40 p-6 md:p-8">
            <h3 className="font-display text-xl font-bold tracking-normal text-ink">Competitive positioning</h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-zinc-700">
              CMU&apos;s current tools center on <strong className="font-semibold text-ink">lists and coarse room types</strong>, often
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
