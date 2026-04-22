import { useEffect, useRef, useState } from "react";
import { Reveal } from "../components/Reveal";

function useCountUp(target: number, active: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    setV(0);
    const start = performance.now();
    const dur = 1200;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - (1 - t) * (1 - t);
      setV(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return v;
}

export function ImpactSection() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVis(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const n85 = useCountUp(85, vis);
  const n10 = useCountUp(10, vis);
  const n400 = useCountUp(400, vis);

  return (
    <section ref={ref} id="impact" className="border-b border-line/60 bg-ink py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-normal text-white md:text-4xl">
            Expected impact
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Reveal delay={60}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:border-white/20 hover:bg-white/10">
              <span className="font-display text-4xl font-extrabold tabular-nums tracking-normal text-amber-300">
                {n85}
              </span>
              %
              <p className="mb-0 mt-2 font-sans text-sm opacity-85">Adoption projected</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:border-white/20 hover:bg-white/10">
              <span className="font-display text-4xl font-extrabold tabular-nums tracking-normal text-amber-300">
                {n10}
              </span>{" "}
              <span className="font-sans text-lg">min</span>
              <p className="mb-0 mt-2 font-sans text-sm opacity-85">Time saved / week</p>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:border-white/20 hover:bg-white/10">
              <span className="font-display text-4xl font-extrabold tabular-nums tracking-normal text-amber-300">
                {n400}
              </span>
              +
              <p className="mb-0 mt-2 font-sans text-sm opacity-85">Spaces accessible</p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <blockquote className="mx-auto mt-12 max-w-2xl border-l-4 border-cmu pl-5 font-display text-xl font-medium italic leading-snug tracking-normal text-zinc-100">
            “This changed how I find study spots completely. No more awkward wandering!”
            <cite className="mt-3 block font-sans text-sm not-italic text-zinc-400">
              — Student tester (WIREFRAMES.md)
            </cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
