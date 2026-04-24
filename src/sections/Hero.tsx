import { QrCodeGraphic } from "../components/QrCodeGraphic";

/** Real legacy booking UI (cropped); pairs with full figure in #reality. */
function LegacySystemSnippet() {
  return (
    <div className="flex flex-col gap-2">
      <p className="m-0 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">Legacy campus booking</p>
      <div className="relative overflow-hidden rounded-lg border border-zinc-300/90 bg-zinc-900 shadow-inner">
        <img
          src="/images/legacy-room-booking.png"
          alt="Legacy room scheduler: basement rooms as rows and red or green fifteen-minute booking blocks across the afternoon."
          className="h-[92px] w-full object-cover object-left-top"
          width={560}
          height={320}
          loading="lazy"
          decoding="async"
        />
        <p className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-rose-50 via-rose-50/85 to-transparent px-2 pb-1.5 pt-7 text-center text-[9px] font-semibold leading-tight text-zinc-600">
          Grid + scroll · not the real floor
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] px-4 pb-16 pt-6 md:px-6">
      <div className="pointer-events-none absolute inset-0 bg-hero-stripes opacity-95" aria-hidden />
      <div className="relative mx-auto w-full max-w-5xl">
        <div className="relative mx-auto mb-10 min-h-[300px] md:mb-12 md:h-[min(340px,40vw)] md:max-w-none">
          {/* Problem card: gentle float; text not rotated */}
          <div
            className="md:animate-float-slow motion-reduce:!animate-none md:absolute md:left-0 md:top-[10%] md:z-[1] md:w-[58%] md:max-w-[280px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative mx-auto w-[min(100%,280px)] rounded-2xl border-2 border-cmu/35 bg-rose-50 p-4 pb-10 shadow-card md:rotate-[-3deg]">
              <LegacySystemSnippet />
              <div className="mt-2 flex flex-col gap-1.5">
                <span className="block h-1.5 w-[88%] rounded bg-zinc-200/90" />
                <span className="block h-1.5 w-[62%] rounded bg-zinc-200/90" />
              </div>
              <div className="absolute bottom-2 left-3 right-3 flex h-7 items-center justify-end rounded-md bg-zinc-200 pr-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cmu text-xs leading-none text-white">
                  ×
                </span>
              </div>
            </div>
          </div>

          {/* Solution card */}
          <div className="md:animate-float-slow-alt motion-reduce:!animate-none md:absolute md:right-0 md:top-0 md:z-[2] md:w-[62%] md:max-w-[320px]">
            <div className="relative mx-auto mt-4 w-[min(100%,300px)] rounded-2xl border border-line bg-white p-4 shadow-lift md:mt-0 md:rotate-[2deg]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-lg">
                  📍
                </div>
                <div className="min-w-0">
                  <p className="m-0 font-display text-xs font-bold leading-tight tracking-normal text-zinc-500">
                    Scotty Spots
                  </p>
                  <p className="m-0 font-sans text-base font-bold leading-snug text-ink">Hunt Library, 3rd floor</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-gradient-to-br from-sky-100 to-pink-100 px-3 py-5 text-center">
                <div className="mx-auto h-14 w-14 overflow-hidden rounded-lg border border-white/80 bg-white p-0.5 shadow-inner">
                  <QrCodeGraphic className="h-full w-full" />
                </div>
                <p className="mb-0 mt-2 text-xs leading-normal text-zinc-500">Scan to reserve</p>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-2.5 font-sans text-sm font-bold text-white">
                <span>✓</span> Reserved!
              </div>
            </div>
          </div>
        </div>

        <p className="mb-3 font-display text-2xl font-extrabold leading-tight tracking-normal text-ink sm:text-3xl">
          Scotty <span className="text-cmu">Spots</span>
        </p>
        <h1 className="max-w-[34rem] font-sans text-2xl font-semibold leading-snug tracking-normal text-ink text-pretty sm:text-3xl sm:leading-snug md:text-4xl md:leading-[1.3]">
          Finding a study space shouldn&apos;t feel like{" "}
          <span className="font-semibold text-maroon">solving a puzzle</span>
        </h1>
        <a
          href="#reality"
          className="mx-auto mt-8 flex w-max flex-col items-center gap-0.5 font-sans text-sm font-semibold text-zinc-500 no-underline transition hover:text-cmu"
        >
          Discover the Solution
          <span className="animate-bounce text-xl motion-reduce:animate-none">⌄</span>
        </a>
      </div>
    </section>
  );
}
