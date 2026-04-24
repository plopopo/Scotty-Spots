import { Reveal } from "../components/Reveal";

const frames = [
  {
    src: "/wireframes/Main.png",
    title: "Campus hub",
    caption:
      "Opening view: campus-wide entry. Final product uses a live map (see demo) instead of only the four building tiles shown in this early wireframe.",
  },
  {
    src: "/wireframes/Hunt - Floor Selection.png",
    title: "Floor selection (Hunt Library)",
    caption: "After choosing Hunt Library, students pick a floor (4 through basement) before opening the floor plan and check-in sheet.",
  },
  {
    src: "/wireframes/Hunt - Floor 4 Selection.png",
    title: "Floor 4: map + check-in",
    caption:
      "Tables and group rooms on a floor plan with a check-in panel: room/table, start and end time (max three hours), and submit.",
  },
  {
    src: "/wireframes/Checked-In.png",
    title: "Checked in successfully",
    caption:
      "Confirmation state: location, room, time window, reminder to extend an hour before checkout, and QR / app path to renew.",
  },
] as const;

export function WireframesSection() {
  return (
    <section id="wireframes" className="border-b border-line/60 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-normal text-ink md:text-4xl">
            Wireframes
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center font-sans text-lg leading-relaxed text-zinc-600">
            Mid-fidelity mobile flows that guided the interactive demo below. Same information architecture, but the home
            hub became a real campus map you can zoom and tap.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {frames.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <figure className="m-0 flex h-full flex-col">
                <div className="overflow-hidden rounded-2xl border border-line bg-zinc-100 shadow-card">
                  <img
                    src={encodeURI(f.src)}
                    alt={f.title}
                    className="block max-h-[min(520px,70vh)] w-full object-contain object-top"
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-3 flex flex-1 flex-col px-0.5">
                  <span className="font-display text-sm font-bold tracking-normal text-cmu">{f.title}</span>
                  <span className="mt-1 font-sans text-xs leading-relaxed text-zinc-600">{f.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
