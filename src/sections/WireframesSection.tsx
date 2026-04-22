import { Reveal } from "../components/Reveal";

export function WireframesSection() {
  return (
    <section id="wireframes" className="border-t border-line/40 bg-zinc-50/50 py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-normal text-ink">Wireframe sketches</h2>
          <p className="mx-auto mt-2 text-center font-sans leading-relaxed text-zinc-600">
            Full ASCII layouts in{" "}
            <a href="/WIREFRAMES.md" className="font-medium text-cmu hover:underline">
              WIREFRAMES.md
            </a>
            . Philosophy in{" "}
            <a href="/SCOTTY_SPOTS_DESIGN_PLAN.md" className="font-medium text-cmu hover:underline">
              SCOTTY_SPOTS_DESIGN_PLAN.md
            </a>
            .
          </p>
        </Reveal>
        <Reveal delay={80}>
          <details className="mt-8 rounded-xl border border-line bg-white px-4 shadow-sm open:shadow-md transition-shadow">
            <summary className="cursor-pointer py-3 font-bold text-ink">Hero &amp; problem cards (excerpt)</summary>
            <pre className="mb-4 overflow-x-auto rounded-lg bg-zinc-50 p-3 font-mono text-[11px] leading-relaxed text-ink">
              {`╔════════════════════════════════════════════════════════════════╗
║  [Frustrated]     /     [Clean app · QR · ✓ Reserved]          ║
╚════════════════════════════════════════════════════════════════╝`}
            </pre>
          </details>
          <details className="mt-2 rounded-xl border border-line bg-white px-4 shadow-sm open:shadow-md transition-shadow">
            <summary className="cursor-pointer py-3 font-bold text-ink">Interactive phone (excerpt)</summary>
            <pre className="mb-4 overflow-x-auto rounded-lg bg-zinc-50 p-3 font-mono text-[11px] text-ink">
              MEET SCOTTY SPOTS — QR Scan · Live Updates · Visual Map · Coverage
            </pre>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
