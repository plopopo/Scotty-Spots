import { Reveal } from "../components/Reveal";

const organizational = [
  "App-driven sourcing of availability reduces time lost wandering between floors and buildings.",
  "Utilization patterns (popular zones, times of day) can inform future study-space investments and operations.",
  "Integrating classrooms and tables (not only formal study rooms) expands the usable network of spaces the institution can reason about.",
  "Over time, broader adoption improves the fidelity of “what is free now” for everyone on the network.",
];

const societal = [
  "Lowers day-to-day friction and stress associated with finding a seat in a high-workload environment.",
  "Surfaces lesser-known locations, easing crowding in a few iconic spots and spreading load across campus.",
  "Visual maps lower the barrier for students who do not yet know building layouts and support fairer access to space.",
  "Long-term vision: restructure how the campus discovers and shares study capacity, not only incremental UI tweaks.",
];

const signals = [
  { title: "Time & stress", desc: "Fewer dead-end walks; clearer next step when a favorite area is full." },
  { title: "Equity of access", desc: "Same live map for newcomers and veterans; less insider knowledge required." },
  { title: "Campus learning loop", desc: "Occupancy-informed planning for renovations, hours, and space mix." },
] as const;

export function ImpactSection() {
  return (
    <section id="impact" className="border-b border-line/60 bg-ink py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-normal text-white md:text-4xl">
            Expected impact
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center font-sans text-lg leading-relaxed text-zinc-300">
            Organizational and societal outcomes we expect if Scotty Spots is adopted, summarized from our social-impact and
            solution writeups.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal delay={40}>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
              <h3 className="font-display text-xl font-bold tracking-normal text-white">Organizational</h3>
              <ul className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-zinc-300">
                {organizational.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
              <h3 className="font-display text-xl font-bold tracking-normal text-white">Societal (student experience)</h3>
              <ul className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-zinc-300">
                {societal.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cmu" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {signals.map((s, i) => (
            <Reveal key={s.title} delay={120 + i * 50}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition duration-300 hover:border-white/20 hover:bg-white/10">
                <h4 className="font-display text-base font-bold tracking-normal text-amber-200">{s.title}</h4>
                <p className="mb-0 mt-2 font-sans text-sm leading-relaxed text-zinc-400">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <blockquote className="mx-auto mt-12 max-w-2xl border-l-4 border-cmu pl-5 font-display text-lg font-medium italic leading-snug tracking-normal text-zinc-100 md:text-xl">
            “We expect the solution to resolve student frustration and time inefficiencies from wandering, and over time, to
            restructure how people find study spots campus-wide through app-driven information.”
            <cite className="mt-3 block font-sans text-sm not-italic text-zinc-500">
              Paraphrased from our expected-impact writeup
            </cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
