import Header from "@/components/Header";
import LiveNowStrip, { LiveMatch } from "@/components/LiveNowStrip";

const demoMatches: LiveMatch[] = [
  {
    id: "1",
    competition: "Isthmian North",
    home: { name: "Maldon & Tiptree", badgeUrl: "/badges/maldon.png" },
    away: { name: "Heybridge Swifts", badgeUrl: "/badges/heybridge.png" },
    homeScore: 2,
    awayScore: 1,
    minute: 67,
    status: "LIVE",
  },
  // …more Step 4 games
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <LiveNowStrip matches={demoMatches} />

      <section className="mx-auto max-w-6xl px-4 py-8 text-sm text-[#C5C5C5]">
        Featured Games, Vidiprinter & Fixtures coming below.
      </section>
    </main>
  );
}
