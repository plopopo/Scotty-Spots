import { Reveal } from "../components/Reveal";

const cards = [
  {
    icon: "🧩",
    title: "Fragmented System",
    stat: "Only 23% adoption",
    statClass: "text-[#A31F34]",
    body: "Current reservation system is confusing and rarely used",
    iconBg: "bg-rose-100",
  },
  {
    icon: "🗺️",
    title: "Limited Coverage",
    stat: "60% of spaces not included",
    statClass: "text-blue-600",
    body: "Most study spaces aren’t even in the system",
    iconBg: "bg-blue-100",
  },
  {
    icon: "⏱",
    title: "Time Wasted",
    stat: "8+ minutes average",
    statClass: "text-amber-700",
    body: "Students spend too long finding and booking spaces",
    iconBg: "bg-amber-100",
  },
] as const;

export function ProblemSection() {
  return (
    <section id="reality" className="border-b border-line/60 bg-zinc-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-normal text-ink md:text-4xl">
            The Current Reality
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center font-sans text-lg leading-relaxed text-zinc-600">
            The existing study room system creates more problems than it solves
          </p>
        </Reveal>

        <Reveal delay={60}>
          <figure className="mx-auto mt-10 max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-line bg-zinc-900 shadow-lift">
              <div className="flex items-center gap-2 border-b border-zinc-700/80 bg-zinc-800 px-3 py-2">
                <span className="inline-flex gap-1" aria-hidden>
                  <span className="h-2 w-2 rounded-full bg-red-400/90" />
                  <span className="h-2 w-2 rounded-full bg-amber-300/90" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                </span>
                <span className="font-mono text-[10px] tracking-wide text-zinc-400">
                  Legacy room scheduling (campus web app)
                </span>
              </div>
              <div className="max-h-[min(520px,58vh)] overflow-auto bg-zinc-100">
                <img
                  src="/images/legacy-room-booking.png"
                  alt="Legacy study room booking interface: basement rooms A11 through A13 listed with capacity and power icons; horizontal timeline from 2pm to 8pm in fifteen-minute columns; most cells filled with dark red unavailable blocks and occasional green available slots."
                  className="block h-auto w-full max-w-none sm:min-w-[640px]"
                  width={1200}
                  height={700}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <figcaption className="mx-auto mt-3 max-w-3xl px-1 text-center font-sans text-sm leading-relaxed text-zinc-600">
              <strong className="text-ink">What students see today:</strong> a room list with &ldquo;Info&rdquo; links, capacity
              and outlet icons, then a wide grid of 15-minute cells—mostly red for booked, green when a slot opens. It
              answers &ldquo;is this room free then?&rdquo; but not &ldquo;where on the floor is it?&rdquo; and it often
              needs horizontal scrolling on a laptop or phone.
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <article className="h-full rounded-2xl border border-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${c.iconBg}`}
              >
                {c.icon}
              </div>
              <h3 className="mt-3 text-lg font-bold text-ink">{c.title}</h3>
              <p className={`mt-1 font-display text-2xl font-extrabold tabular-nums tracking-normal ${c.statClass}`}>
                {c.stat}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{c.body}</p>
              <footer className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-sm text-zinc-500">
                <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-cmu text-xs text-white">
                  ×
                </span>
                Current system
              </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
