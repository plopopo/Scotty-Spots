import { Reveal } from "../components/Reveal";

const theories = [
  {
    name: "Network effects",
    overview: "The value of a system increases as more users adopt it.",
    application:
      "Scotty Spots depends on participation: each honest check-in or checkout improves the live map for everyone. We expect adoption friction because scanning or booking is an extra step versus \"just walking around.\" The app stays simple (mobile-first, minimal flows) so early adopters still get a benefit, and as routines form, the map becomes more complete and trustworthy across buildings.",
  },
  {
    name: "Task-technology fit (TTF)",
    overview: "Technology improves performance when it aligns with the tasks people actually perform.",
    application:
      "Student tasks include finding a seat under time pressure, understanding where a room sits on a floor, and knowing what is free between classes. Scotty Spots maps those tasks to real-time availability, streamlined reservation, visual navigation, and a wider set of bookable locations (tables and classrooms, not only group study rooms). That strengthens fit compared to generic list UIs that optimize for administration, not discovery.",
  },
] as const;

export function SocialTheorySection() {
  return (
    <section id="theory" className="border-b border-line/60 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-normal text-ink md:text-4xl">
            Social impact theories
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center font-sans text-lg leading-relaxed text-zinc-600">
            How established IS and social-informatics lenses explain both the opportunity and the design choices behind Scotty Spots.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {theories.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <article className="h-full rounded-2xl border border-line bg-white p-6 shadow-card md:p-8">
                <h3 className="font-display text-xl font-bold tracking-normal text-ink">{t.name}</h3>
                <p className="mt-2 font-sans text-sm font-semibold text-cmu">Theory overview</p>
                <p className="mt-1 font-sans text-sm leading-relaxed text-zinc-700">{t.overview}</p>
                <p className="mt-4 font-sans text-sm font-semibold text-ink">Application to our solution</p>
                <p className="mt-1 font-sans text-sm leading-relaxed text-zinc-600">{t.application}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
