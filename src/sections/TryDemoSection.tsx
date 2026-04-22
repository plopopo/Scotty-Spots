import { useCallback, useMemo, useState } from "react";
import { PhoneFloorPlan, INITIAL_PLACED_SPOTS, type PlacedSpot } from "../components/PhoneFloorPlan";
import { Reveal } from "../components/Reveal";

type Screen = "home" | "qr" | "map" | "success";

export function TryDemoSection() {
  const [screen, setScreen] = useState<Screen>("home");
  const [spots, setSpots] = useState<PlacedSpot[]>(() => INITIAL_PLACED_SPOTS.map((s) => ({ ...s })));
  const [successMsg, setSuccessMsg] = useState("Enjoy your session.");

  const freeCount = useMemo(() => spots.filter((s) => s.free).length, [spots]);

  const open = useCallback((s: Screen) => {
    setScreen(s);
  }, []);

  const resetDemo = useCallback(() => {
    setSpots(INITIAL_PLACED_SPOTS.map((x) => ({ ...x })));
    setScreen("home");
  }, []);

  const pickSpot = (spot: PlacedSpot) => {
    if (!spot.free) return;
    setSuccessMsg(`${spot.label} is yours. Others see it as busy.`);
    setSpots((prev) => prev.map((p) => (p.id === spot.id ? { ...p, free: false } : p)));
    setScreen("success");
  };

  const tileHighlight: Exclude<Screen, "success"> = screen === "success" ? "map" : screen;

  const tiles: { id: Screen; title: string; sub: string; icon: string; ring: string }[] = [
    { id: "home", title: "Home Screen", sub: "Quick access to all features", icon: "🏠", ring: "border-cmu/50 bg-rose-50/80" },
    { id: "qr", title: "QR Scanner", sub: "Scan to instantly reserve", icon: "▣", ring: "border-blue-500/50 bg-blue-50/80" },
    { id: "map", title: "Space Map", sub: "Browse all available spaces", icon: "📍", ring: "border-amber-400/70 bg-amber-50/90" },
  ];

  return (
    <section
      id="demo"
      className="border-b border-line/60 bg-gradient-to-b from-[#ececef] via-zinc-100/80 to-[#ececef] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-normal text-ink md:text-4xl">
            Try It Yourself
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center font-sans text-lg leading-relaxed text-zinc-600">
            Experience the Scotty Spots interface with our interactive demo
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[320px_1fr] lg:items-start">
          <Reveal delay={80}>
            <div>
            <h3 className="mb-4 font-display text-xl font-bold tracking-normal text-ink">Explore the Features</h3>
            {tiles.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => open(t.id)}
                className={`mb-3 flex w-full items-center gap-3 rounded-2xl border bg-white p-4 text-left shadow-sm transition duration-200 hover:scale-[1.01] hover:shadow-card active:scale-[0.99] ${
                  tileHighlight === t.id ? `${t.ring} ring-2 ring-offset-2 ring-offset-[#ececef]` : "border-line"
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-xl">
                  {t.icon}
                </span>
                <span>
                  <strong className="block font-sans text-ink">{t.title}</strong>
                  <small className="font-sans text-zinc-500">{t.sub}</small>
                </span>
              </button>
            ))}
            <div className="mt-4 rounded-xl border border-white/60 bg-white/70 p-4 text-sm text-zinc-700 shadow-sm backdrop-blur-sm">
              <strong>💡 Pro Tip</strong>
              <p className="mb-0 mt-1 font-sans leading-relaxed text-zinc-600">
                Click different sections to navigate the app. Try Simulate Scan or tap an available table or room on the floor plan.
              </p>
            </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
          <div className="flex justify-center">
            <div className="w-[min(300px,90vw)] rounded-[2.6rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-2.5 shadow-2xl transition duration-500 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.45)]">
              <div className="mx-auto mb-2 h-5 w-24 rounded-b-xl bg-zinc-900" />
              <div className="relative flex min-h-[560px] flex-col overflow-hidden rounded-[2rem] bg-soft">
                <div className="flex shrink-0 items-center justify-between border-b border-line bg-white/95 px-3.5 py-2 text-[10px] font-bold">
                  <span>9:41</span>
                  <span className="tracking-widest text-[8px] text-ink">●●●●</span>
                  <span>100%</span>
                </div>

                <div className="relative flex min-h-0 flex-1 flex-col">
                  {screen === "home" && (
                    <div
                      key="home"
                      className="animate-fade-up motion-reduce:animate-none flex flex-1 flex-col px-4 pb-4 pt-3"
                    >
                      <h4 className="m-0 font-sans text-xl font-bold leading-tight tracking-normal text-ink sm:text-2xl">
                        Scotty Spots
                      </h4>
                      <p className="mb-4 mt-1 font-sans text-sm leading-normal text-zinc-500">
                        Find your perfect study space
                      </p>
                      <button
                        type="button"
                        onClick={() => open("qr")}
                        className="mb-2 flex w-full items-center gap-3 rounded-2xl border-0 bg-cmu px-4 py-3 text-left font-sans text-white shadow-md transition hover:brightness-110 active:scale-[0.98]"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 font-bold">
                          ▣
                        </span>
                        <span>
                          <strong className="block">Scan QR Code</strong>
                          <small className="opacity-90">Quick reserve</small>
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => open("map")}
                        className="flex w-full items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-left font-sans transition hover:border-cmu/30 active:scale-[0.98]"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">📍</span>
                        <span>
                          <strong className="block text-ink">Browse Spaces</strong>
                          <small className="text-zinc-500">View all locations</small>
                        </span>
                      </button>
                    </div>
                  )}

                  {screen === "qr" && (
                    <div
                      key="qr"
                      className="animate-fade-up motion-reduce:animate-none flex flex-1 flex-col bg-[#1a1d21] px-4 pb-3 pt-6 text-center text-zinc-100"
                    >
                      <div className="relative mx-auto mb-4 h-[180px] w-[180px] border-2 border-white/20">
                        <span className="absolute -left-1 -top-1 block h-7 w-7 border-l-[3px] border-t-[3px] border-cmu" />
                        <span className="absolute -bottom-1 -right-1 block h-7 w-7 border-b-[3px] border-r-[3px] border-cmu" />
                        <div
                          className="absolute inset-[18px] rounded bg-white"
                          style={{
                            backgroundImage:
                              "linear-gradient(#111 50%, transparent 50%), linear-gradient(90deg, #111 50%, transparent 50%)",
                            backgroundSize: "16px 16px",
                          }}
                        />
                      </div>
                      <p className="m-0 font-sans text-base font-bold">Point at QR Code</p>
                      <p className="mb-6 mt-1 font-sans text-xs text-zinc-400">Align code within frame</p>
                      <button
                        type="button"
                        onClick={() => open("map")}
                        className="mt-auto w-full rounded-2xl border-0 bg-cmu py-3 font-sans font-bold text-white transition hover:brightness-110"
                      >
                        Simulate Scan
                      </button>
                    </div>
                  )}

                  {screen === "map" && (
                    <div
                      key="map"
                      className="animate-fade-up motion-reduce:animate-none flex min-h-0 flex-1 flex-col px-3 pb-2 pt-2"
                    >
                      <div className="mb-3 flex gap-2">
                        <button
                          type="button"
                          onClick={() => open("home")}
                          className="border-0 bg-transparent text-lg text-cmu"
                          aria-label="Back"
                        >
                          ←
                        </button>
                        <div>
                          <p className="m-0 font-sans text-sm font-extrabold leading-snug text-ink">
                            Hunt Library — 3rd Floor
                          </p>
                          <p className="m-0 font-sans text-xs text-zinc-500">
                            <span className="font-semibold tabular-nums text-cmu">{freeCount}</span> spaces available
                          </p>
                        </div>
                      </div>
                      <div className="min-h-0 flex-1 overflow-hidden">
                        <PhoneFloorPlan spots={spots} onPick={pickSpot} />
                      </div>
                      <div className="mt-2 flex shrink-0 justify-center gap-4 rounded-lg bg-ink px-3 py-2 text-[10px] text-white">
                        <span>
                          <i className="mr-1 inline-block h-2.5 w-2.5 rounded-sm bg-emerald-500" /> Available
                        </span>
                        <span>
                          <i className="mr-1 inline-block h-2.5 w-2.5 rounded-sm bg-cmu" /> Occupied
                        </span>
                      </div>
                      <nav className="mt-auto flex justify-around border-t border-line bg-white/95 py-2 text-[10px] text-zinc-500">
                        <span className="text-center">
                          🏠<br />
                          Home
                        </span>
                        <span className="text-center font-bold text-cmu">
                          🔍<br />
                          Browse
                        </span>
                        <span className="text-center">
                          👤<br />
                          Profile
                        </span>
                      </nav>
                    </div>
                  )}

                  {screen === "success" && (
                    <div
                      key="success"
                      className="animate-fade-up motion-reduce:animate-none flex flex-1 flex-col items-center justify-center gap-2 px-6 py-10 text-center"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl font-bold text-white">
                        ✓
                      </div>
                      <h4 className="m-0 font-display text-xl font-bold tracking-normal text-ink">Booked!</h4>
                      <p className="font-sans text-sm leading-relaxed text-zinc-600">{successMsg}</p>
                      <button
                        type="button"
                        onClick={resetDemo}
                        className="mt-4 rounded-2xl border border-line bg-white px-6 py-2 font-sans text-sm font-semibold text-ink transition hover:bg-zinc-50"
                      >
                        Done
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-white/20" />
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
