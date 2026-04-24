import { Reveal } from "../components/Reveal";

const MEMBERS = [
  {
    name: "Andy Xiong",
    role: "Developer",
    major: "Freshman in IS",
    contributions:
      "Built this presentation website. Assisted with brainstorming of actual product design. Also designed the website's layout and flow.",
  },
  {
    name: "Sivani Ryali",
    role: "Researcher",
    major: "Freshman in IS",
    contributions:
      "Drafted the social impact analysis and the expected impact, integrated this and the product features into the poster",
  },
  {
    name: "Jin Kim",
    role: "Designer",
    major: "Sophomore in Fine Arts",
    contributions:
      "Led visual design and wireframes: layouts and flows the team used to align before build and review.",
  },
  {
    name: "Andrea Joseph",
    role: "Researcher",
    major: "Freshman in IS and Stat/ML",
    contributions:
      "Drafted the problem statement and strategic analysis, documented the final solution, and integrated this information into the poster.  ",
  },
] as const;

const PROCESS = [
  "We met multiple times a week (in person and over messages) to stay aligned, unblock each other, and review progress.",
  "Writing split clearly: Andrea wrote the solution writeup and led drafting and polish across the written work; Sivani wrote the social-theory piece (network effects, TTF, expected impact).",
  "Jin’s design and wireframes set the visual direction; Andy shipped the interactive site so the public deliverable matched the story the PDFs told.",
  "Shared artifacts (PDFs, wireframes, this repo) stayed in sync so the website and written submissions stayed one coherent project.",
] as const;

export function TeamSection() {
  return (
    <section id="team" className="border-b border-line/60 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-normal text-ink md:text-4xl">
            Team & collaboration
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center font-sans text-lg leading-relaxed text-zinc-600">
            Split across solution writing, social-theory writing, design, and development, with frequent check-ins so PDFs,
            wireframes, and the live site stayed aligned.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERS.map((m, i) => (
            <Reveal key={m.name} delay={i * 50}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-zinc-50/90 p-5 shadow-card transition duration-300 hover:border-cmu/15 hover:shadow-lift md:p-6">
                <h3 className="font-display text-lg font-bold tracking-normal text-ink">{m.name}</h3>
                <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-wide text-cmu">{m.role}</p>
                <div className="mt-4 border-t border-line/80 pt-4">
                  <p className="m-0 font-sans text-[11px] font-bold uppercase tracking-wide text-zinc-500">Major</p>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-zinc-700">{m.major}</p>
                </div>
                <div className="mt-3 flex-1">
                  <p className="m-0 font-sans text-[11px] font-bold uppercase tracking-wide text-zinc-500">
                    What they did
                  </p>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-zinc-600">{m.contributions}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-line bg-soft p-6 md:p-8">
            <h3 className="font-display text-lg font-bold tracking-normal text-ink">Collaboration process</h3>
            <ul className="mt-4 list-inside list-disc space-y-2 font-sans text-sm leading-relaxed text-zinc-700">
              {PROCESS.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
