import { QrCodeGraphic } from "../components/QrCodeGraphic";
import { Reveal } from "../components/Reveal";

const steps = [
  {
    title: "Scan",
    label: "Step 1",
    body: "Unique QR on each table (Hunt, Sorrells) or at room doors; sign in with AndrewID, pick duration, and mark occupied. Rooms across Hunt, Sorrells, Gates, and Tepper can also be booked in-app before you arrive.",
    visual: "scan" as const,
  },
  {
    title: "View",
    label: "Step 2",
    body: "Choose a building and floor to open a 2D floor plan: green modules are available, red are occupied.",
    visual: "map" as const,
  },
  {
    title: "Reserve",
    label: "Step 3",
    body: "Confirm in one tap so peers see the seat flip to busy in real time; check out when you leave so the map stays correct for the next student.",
    visual: "success" as const,
  },
];

function StepVisual({ kind }: { kind: "scan" | "map" | "success" }) {
  if (kind === "scan") {
    return (
      <div className="flex items-end justify-center gap-6 py-2 md:gap-8">
        <div className="relative shrink-0">
          <div className="h-4 w-[72px] rounded-t bg-cmu" />
          <div className="absolute left-2 top-full h-10 w-2 rounded-b bg-ink" />
          <div className="absolute right-2 top-full h-10 w-2 rounded-b bg-ink" />
        </div>
        <div className="h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-white p-1 shadow-inner">
          <QrCodeGraphic className="h-full w-full" />
        </div>
      </div>
    );
  }
  if (kind === "map") {
    return (
      <div className="mx-auto grid max-w-[220px] grid-cols-3 gap-2 py-1">
        {["g", "r", "g", "r", "g", "g"].map((c, i) => (
          <div
            key={i}
            className={`aspect-square rounded-xl border-2 ${
              c === "g"
                ? "border-emerald-500 bg-emerald-50 shadow-sm"
                : "border-rose-300 bg-rose-50 shadow-sm"
            }`}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="flex justify-center py-1">
      <div className="w-full max-w-[240px] space-y-2 rounded-2xl bg-emerald-500 px-5 py-6 text-center text-white shadow-lg">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white text-xl font-bold">
          ✓
        </div>
        <p className="m-0 font-sans text-lg font-bold">Success!</p>
        <p className="m-0 font-sans text-sm opacity-95">Table 3B reserved</p>
        <p className="m-0 font-sans text-xs opacity-90">Hunt Library · 3rd floor</p>
      </div>
    </div>
  );
}

export function HowSection() {
  return (
    <section id="how" className="border-b border-line/60 bg-gradient-to-b from-white via-zinc-50/40 to-white py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold tracking-normal text-ink md:text-4xl">
            Information systems solution
          </h2>
          <p className="mt-3 font-sans text-lg leading-relaxed text-zinc-600">
            QR-grounded check-in for tables and rooms, plus live 2D floor plans (green available, red occupied), replacing
            list-only tools that hide where space actually sits on a floor.
          </p>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 max-w-4xl space-y-6 px-4">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 80}>
            <article
              className={`group relative overflow-hidden rounded-3xl border border-line/90 border-l-4 border-l-cmu bg-white p-6 shadow-card transition duration-300 hover:border-cmu/40 hover:shadow-lift md:p-8 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              } flex flex-col gap-8 md:flex-row md:items-stretch`}
            >
              <div className="relative flex min-w-0 flex-1 flex-col justify-center">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cmu font-display text-sm font-bold text-white shadow-md">
                    {i + 1}
                  </span>
                  <div>
                    <p className="m-0 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-cmu">
                      {step.label}
                    </p>
                    <h3 className="m-0 font-display text-2xl font-bold tracking-normal text-ink md:text-3xl">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="m-0 max-w-prose font-sans text-base leading-relaxed text-zinc-600">{step.body}</p>
              </div>

              <div className="flex min-h-[160px] min-w-0 flex-1 items-center justify-center rounded-2xl border border-line/60 bg-gradient-to-br from-zinc-50 to-white p-6 shadow-inner transition duration-500 group-hover:from-white group-hover:to-sky-50/30 md:max-w-md md:flex-none md:basis-[42%]">
                <div className="w-full transition duration-500 group-hover:scale-[1.02] motion-reduce:group-hover:scale-100">
                  <StepVisual kind={step.visual} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
