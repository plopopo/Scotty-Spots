import { useCallback, useState } from "react";
import { HuntDemoFloorPlaceholder } from "../components/HuntDemoFloorPlaceholder";
import { HuntFloor4Plan } from "../components/HuntFloor4Plan";
import { PhoneCampusMap } from "../components/PhoneCampusMap";
import { QrCodeGraphic } from "../components/QrCodeGraphic";
import { Reveal } from "../components/Reveal";
import { DEMO_SPACES_AVAILABLE, formatDemoSpacesAvailable } from "../data/demoBuildingAvailability";
import type { CampusBuildingId } from "../data/campusPlaces";

type DemoScreen = "hub" | "nudge" | "huntFloors" | "huntCheckin" | "qr" | "success";

const FLOORS = ["Floor 4", "Floor 3", "Floor 2", "Floor 1", "Basement"] as const;
type DemoFloor = (typeof FLOORS)[number];
type SideTileId = "hub" | "qr" | "huntFlow";

export function TryDemoSection() {
  const [screen, setScreen] = useState<DemoScreen>("hub");
  const [nudgeBuilding, setNudgeBuilding] = useState<CampusBuildingId | null>(null);
  const [demoFloor, setDemoFloor] = useState<DemoFloor>("Floor 4");
  const [selectedRoom, setSelectedRoom] = useState<number | null>(2);
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  const seatLabel =
    selectedTable !== null ? `Table ${selectedTable}` : selectedRoom !== null ? `Room ${selectedRoom}` : "—";

  const resetDemo = useCallback(() => {
    setScreen("hub");
    setNudgeBuilding(null);
    setDemoFloor("Floor 4");
    setSelectedRoom(2);
    setSelectedTable(null);
  }, []);

  const goHub = useCallback(() => {
    setNudgeBuilding(null);
    setScreen("hub");
  }, []);

  const onBuildingFromMap = useCallback((id: CampusBuildingId) => {
    if (id === "hunt") {
      setNudgeBuilding(null);
      setScreen("huntFloors");
      return;
    }
    setNudgeBuilding(id);
    setScreen("nudge");
  }, []);

  const openScreen = useCallback((s: DemoScreen) => {
    setNudgeBuilding(null);
    setScreen(s);
  }, []);

  const submitCheckin = useCallback(() => {
    setScreen("success");
  }, []);

  const sideTileActive = useCallback(
    (id: SideTileId) => {
      if (id === "hub") return screen === "hub" || screen === "nudge";
      if (id === "qr") return screen === "qr";
      return screen === "huntFloors" || screen === "huntCheckin" || screen === "success";
    },
    [screen],
  );

  const tiles: { id: SideTileId; title: string; sub: string; icon: string; ring: string }[] = [
    { id: "hub", title: "Campus map", sub: "Zoom, pan, tap a building", icon: "🗺️", ring: "border-cmu/50 bg-rose-50/80" },
    { id: "qr", title: "QR scan", sub: "Point at a table or door code", icon: "▣", ring: "border-blue-500/50 bg-blue-50/80" },
    {
      id: "huntFlow",
      title: "Hunt Library",
      sub: "Pick a floor, then check in at a table or room",
      icon: "📋",
      ring: "border-amber-400/70 bg-amber-50/90",
    },
  ];

  const nudgeLabel: Record<CampusBuildingId, string> = {
    tepper: "Tepper School of Business",
    hunt: "Hunt Library",
    gates: "Gates / GHC",
    sorrells: "Sorrells",
  };

  return (
    <section
      id="demo"
      className="border-b border-line/60 bg-gradient-to-b from-[#ececef] via-zinc-100/80 to-[#ececef] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-normal text-ink md:text-4xl">
            Try it yourself
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center font-sans text-lg leading-relaxed text-zinc-600">
            Interactive prototype aligned with the wireframes: the home hub is a real campus map (tap Hunt for the floor
            list, then any floor). The detailed table/room plate is a demo for Floor 4 only; other floors use a placeholder.
            Use the tiles to open QR or the Hunt flow without skipping the floor picker.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[320px_1fr] lg:items-start">
          <Reveal delay={80}>
            <div>
              <h3 className="mb-4 font-display text-xl font-bold tracking-normal text-ink">Explore the prototype</h3>
              {tiles.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    if (t.id === "huntFlow") {
                      setNudgeBuilding(null);
                      setScreen("huntFloors");
                      return;
                    }
                    openScreen(t.id);
                  }}
                  className={`mb-3 flex w-full items-center gap-3 rounded-2xl border bg-white p-4 text-left shadow-sm transition duration-200 hover:scale-[1.01] hover:shadow-card active:scale-[0.99] ${
                    sideTileActive(t.id) ? `${t.ring} ring-2 ring-offset-2 ring-offset-[#ececef]` : "border-line"
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
                <strong>💡 Tip</strong>
                <p className="mb-0 mt-1 font-sans leading-relaxed text-zinc-600">
                  On the map, scroll or pinch inside the frame to zoom. Tap <strong>Hunt Library</strong> for the full
                  floor-picker → check-in path. Other buildings open a short note with a shortcut into Hunt.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="flex justify-center">
              <div className="w-[min(300px,90vw)] rounded-[2.6rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-2.5 shadow-2xl transition duration-500 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.45)]">
                <div className="mx-auto mb-2 h-5 w-24 rounded-b-xl bg-zinc-900" />
                <div className="relative flex min-h-[580px] flex-col overflow-hidden rounded-[2rem] bg-white">
                  <div className="flex shrink-0 items-center justify-between border-b border-line bg-white/95 px-3.5 py-2 text-[10px] font-bold">
                    <span>9:41</span>
                    <span className="tracking-widest text-[8px] text-ink">●●●●</span>
                    <span>100%</span>
                  </div>

                  <div className="relative flex min-h-0 flex-1 flex-col bg-soft">
                    {screen === "hub" && (
                      <div
                        key="hub"
                        className="animate-fade-up motion-reduce:animate-none flex min-h-0 flex-1 flex-col px-3 pb-3 pt-2"
                      >
                        <p className="m-0 text-center font-display text-[11px] font-extrabold tracking-wide text-cmu">
                          SCOTTY&apos;S SPOTS
                        </p>
                        <p className="mb-1 mt-0.5 text-center font-sans text-[10px] text-zinc-500">
                          Pick a building on the map
                        </p>
                        <PhoneCampusMap onBuildingSelect={onBuildingFromMap} />
                        <button
                          type="button"
                          onClick={() => openScreen("qr")}
                          className="mt-2 w-full rounded-xl border border-line bg-white py-2 font-sans text-[11px] font-semibold text-ink transition hover:bg-zinc-50"
                        >
                          Scan QR instead →
                        </button>
                      </div>
                    )}

                    {screen === "nudge" && nudgeBuilding && (
                      <div
                        key="nudge"
                        className="animate-fade-up motion-reduce:animate-none flex flex-1 flex-col justify-center gap-3 px-4 py-6 text-center"
                      >
                        <p className="m-0 font-display text-lg font-bold text-ink">{nudgeLabel[nudgeBuilding]}</p>
                        <p className="m-0 font-sans text-xs font-semibold text-emerald-800">
                          {formatDemoSpacesAvailable(DEMO_SPACES_AVAILABLE[nudgeBuilding])} (demo)
                        </p>
                        <p className="m-0 font-sans text-sm leading-relaxed text-zinc-600">
                          This walkthrough follows <strong>Hunt Library</strong>—floor picker and check-in wireframes—so
                          you can see tables, rooms, and timing in one flow.
                        </p>
                        <div className="mt-2 flex flex-col gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setNudgeBuilding(null);
                              setScreen("huntFloors");
                            }}
                            className="rounded-2xl border-0 bg-cmu py-2.5 font-sans text-sm font-bold text-white"
                          >
                            Continue with Hunt Library
                          </button>
                          <button
                            type="button"
                            onClick={goHub}
                            className="rounded-2xl border border-line bg-white py-2.5 font-sans text-sm font-semibold text-ink"
                          >
                            Back to map
                          </button>
                        </div>
                      </div>
                    )}

                    {screen === "huntFloors" && (
                      <div
                        key="floors"
                        className="animate-fade-up motion-reduce:animate-none flex flex-1 flex-col px-4 pb-4 pt-4"
                      >
                        <button
                          type="button"
                          onClick={goHub}
                          className="mb-2 w-fit border-0 bg-transparent text-left text-lg text-cmu"
                          aria-label="Back"
                        >
                          ←
                        </button>
                        <p className="m-0 text-center font-display text-sm font-extrabold text-cmu">Hunt Library</p>
                        <p className="mb-1 mt-1 text-center font-display text-xl font-extrabold text-cmu">
                          Select the floor
                        </p>
                        <p className="mb-4 mt-0 text-center font-sans text-[10px] font-semibold leading-snug text-emerald-800">
                          {formatDemoSpacesAvailable(DEMO_SPACES_AVAILABLE.hunt)} in this building (demo snapshot)
                        </p>
                        <div className="flex flex-1 flex-col gap-2">
                          {FLOORS.map((label) => (
                            <button
                              key={label}
                              type="button"
                              onClick={() => {
                                setDemoFloor(label);
                                setSelectedTable(null);
                                setSelectedRoom(2);
                                setScreen("huntCheckin");
                              }}
                              className={`rounded-2xl border-0 py-3 font-sans text-sm font-bold text-white shadow-md transition hover:brightness-110 active:scale-[0.99] ${
                                demoFloor === label
                                  ? "bg-[#6b2d2d] ring-2 ring-amber-300/90 ring-offset-2 ring-offset-white"
                                  : "bg-[#6b2d2d]"
                              }`}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {screen === "huntCheckin" && (
                      <div
                        key="checkin"
                        className="animate-fade-up motion-reduce:animate-none flex min-h-0 flex-1 flex-col overflow-y-auto px-2 pb-2 pt-1"
                      >
                        <div className="mb-1 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setScreen("huntFloors")}
                            className="border-0 bg-transparent text-lg text-cmu"
                            aria-label="Back"
                          >
                            ←
                          </button>
                        </div>
                        <p className="m-0 text-center font-display text-[11px] font-extrabold text-cmu">Hunt Library</p>
                        <p className="m-0 text-center font-display text-xl font-extrabold text-cmu">{demoFloor}</p>

                        {demoFloor === "Floor 4" ? (
                          <HuntFloor4Plan
                            selectedRoom={selectedRoom}
                            selectedTable={selectedTable}
                            onSelectRoom={(r) => {
                              setSelectedRoom(r);
                              setSelectedTable(null);
                            }}
                            onSelectTable={(t) => {
                              setSelectedTable(t);
                              setSelectedRoom(null);
                            }}
                          />
                        ) : (
                          <HuntDemoFloorPlaceholder floorLabel={demoFloor} />
                        )}
                        <p className="mb-0 mt-1 text-center font-sans text-[9px] leading-snug text-zinc-500">
                          {demoFloor === "Floor 4"
                            ? "Illustrative layout (walls, corridor, open tables, east study rooms)—not an official Hunt floor plan."
                            : "Placeholder plate for this floor; green/red show how availability would read in the app."}
                        </p>

                        <div className="mt-2 flex flex-1 flex-col rounded-xl border border-rose-100 bg-rose-50/90 p-3">
                          <p className="m-0 font-display text-base font-extrabold text-cmu">Check In</p>
                          <div className="mt-2 flex items-center justify-between gap-2">
                            <span className="font-sans text-[10px] font-semibold text-zinc-700">Room / Table</span>
                            <span className="rounded-full bg-[#6b2d2d] px-3 py-1 font-sans text-[10px] font-bold text-white">
                              {seatLabel}
                            </span>
                          </div>
                          <div className="mt-2 flex items-center justify-between gap-2">
                            <span className="font-sans text-[10px] font-semibold text-zinc-700">Start</span>
                            <span className="rounded-full bg-[#6b2d2d] px-3 py-1 font-mono text-[10px] font-bold text-white">
                              14:00
                            </span>
                          </div>
                          <div className="mt-1 flex items-center justify-between gap-2">
                            <span className="font-sans text-[10px] font-semibold text-zinc-700">End</span>
                            <span className="rounded-full bg-[#6b2d2d] px-3 py-1 font-mono text-[10px] font-bold text-white">
                              17:00
                            </span>
                          </div>
                          <p className="mt-1 font-sans text-[9px] font-medium text-cmu">You can book for max 3 hours.</p>
                          <button
                            type="button"
                            onClick={submitCheckin}
                            className="mt-auto w-full rounded-2xl border-0 bg-[#4a2c2c] py-2.5 font-sans text-sm font-bold text-white shadow-md transition hover:brightness-110"
                          >
                            Submit
                          </button>
                        </div>
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
                          <div className="absolute inset-[18px] overflow-hidden rounded bg-white p-1.5 shadow-inner">
                            <QrCodeGraphic className="h-full w-full" title="Demo QR code" />
                          </div>
                        </div>
                        <p className="m-0 font-sans text-base font-bold">Point at QR Code</p>
                        <p className="mb-6 mt-1 font-sans text-xs text-zinc-400">Align code within frame</p>
                        <button
                          type="button"
                          onClick={() => {
                            setNudgeBuilding(null);
                            setScreen("huntFloors");
                          }}
                          className="mt-auto w-full rounded-2xl border-0 bg-cmu py-3 font-sans font-bold text-white transition hover:brightness-110"
                        >
                          Simulate scan → Hunt floors
                        </button>
                      </div>
                    )}

                    {screen === "success" && (
                      <div
                        key="success"
                        className="animate-fade-up motion-reduce:animate-none flex flex-1 flex-col items-center justify-center gap-2 px-5 py-8 text-center"
                      >
                        <p className="m-0 font-display text-lg font-extrabold text-cmu">Checked In Successfully.</p>
                        <p className="m-0 font-sans text-sm font-semibold text-[#4a3028]">
                          Hunt Library — {demoFloor}
                        </p>
                        <p className="m-0 font-display text-2xl font-extrabold text-[#4a3028]">{seatLabel}</p>
                        <p className="m-0 font-mono text-lg font-bold text-[#4a3028]">14:00 ~ 17:00</p>
                        <p className="m-0 font-sans text-sm font-semibold text-cmu">You can now use the seat!</p>
                        <p className="mt-2 max-w-[240px] font-sans text-[10px] leading-relaxed text-[#8f5a5a]">
                          If you would like to extend your booking, please check in again one hour before your time
                          expires.
                        </p>
                        <p className="m-0 max-w-[240px] font-sans text-[10px] leading-relaxed text-[#8f5a5a]">
                          You can scan the QR code at your seat or open the app to renew your reservation.
                        </p>
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
