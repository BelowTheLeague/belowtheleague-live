import LiveNowStrip, { LiveMatch } from "@/components/LiveNowStrip";

const demoMatches: LiveMatch[] = [
  {
    id: "1",
    competition: "AFCON 2025",
    home: { name: "Morocco", badgeUrl: "/badges/morocco.png" },
    away: { name: "Ivory Coast", badgeUrl: "/badges/ivory-coast.png" },
    homeScore: 2,
    awayScore: 1,
    minute: 67,
    status: "LIVE",
  },
  {
    id: "2",
    competition: "Isthmian North",
    home: { name: "Maldon & Tiptree", badgeUrl: "/badges/maldon.png" },
    away: { name: "Heybridge Swifts", badgeUrl: "/badges/heybridge.png" },
    homeScore: 0,
    awayScore: 0,
    minute: 12,
    status: "LIVE",
  },
  {
    id: "3",
    competition: "National League South",
    home: { name: "Chelmsford City", badgeUrl: "/badges/chelmsford.png" },
    away: { name: "Dartford", badgeUrl: "/badges/dartford.png" },
    homeScore: 1,
    awayScore: 3,
    minute: null,
    status: "FT",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header – you can replace with your real header */}
      <header className="border-b border-[#1F1F1F] bg-[#050505]">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-sm font-bold tracking-[0.18em] uppercase text-[#F4F4F4]">
            BelowTheLeague Live
          </h1>
          <span className="text-[11px] text-[#C5C5C5]">
            AFCON Live Hub
          </span>
        </div>
      </header>

      {/* Live Strip */}
      <LiveNowStrip matches={demoMatches} />

      {/* Placeholder for rest of the page */}
      <section className="mx-auto max-w-6xl px-4 py-8 text-sm text-[#C5C5C5]">
        Other sections coming soon (Featured Games, Vidiprinter, Fixtures…)
      </section>
    </main>
  );
}
