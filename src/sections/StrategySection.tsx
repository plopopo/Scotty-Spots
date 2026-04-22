import { Reveal } from "../components/Reveal";

export function StrategySection() {
  return (
    <section
      id="strategy"
      className="border-b border-line/60 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2">
          <Reveal className="h-full md:row-span-2">
            <article className="h-full rounded-[20px] border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-lift md:p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-lg">📈</div>
            <h3 className="mt-3 font-display text-xl font-bold tracking-normal text-ink">Value Creation</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Reduces friction in the study space discovery process, increasing overall space utilization by 40%
            </p>
            <p className="mt-6 font-display text-4xl font-extrabold tabular-nums tracking-normal text-cmu">+40%</p>
            <p className="mt-1 text-xs text-zinc-500">Space utilization increase</p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-rose-100">
              <div className="h-full w-[72%] rounded-full bg-cmu" />
            </div>
          </article>
          </Reveal>

          <Reveal delay={80} className="h-full min-h-0">
            <article className="h-full rounded-[20px] border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-lift">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lg">⚡</div>
            <h3 className="mt-3 font-display text-lg font-bold tracking-normal text-ink">UX Edge</h3>
            <p className="mt-2 text-sm text-zinc-600">Visual-first interface beats traditional text-list systems.</p>
            <p className="mt-4 font-display text-4xl font-extrabold tabular-nums tracking-normal text-blue-600">3×</p>
            <p className="mt-1 text-xs text-zinc-500">Faster to use</p>
          </article>
          </Reveal>

          <Reveal delay={140} className="h-full min-h-0">
            <article className="h-full rounded-[20px] border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-lift">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-lg">◎</div>
            <h3 className="mt-3 font-display text-lg font-bold tracking-normal text-ink">Competitive Position</h3>
            <p className="mt-2 text-sm text-zinc-600">First QR-integrated campus reservation system.</p>
            <p className="mt-4 font-display text-4xl font-extrabold tabular-nums tracking-normal text-amber-700">#1</p>
            <p className="mt-1 text-xs text-zinc-500">Market innovation</p>
          </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
