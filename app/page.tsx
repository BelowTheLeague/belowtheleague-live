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
  {
    id: "2",
    competition: "Isthmian North",
    home: { name: "Grays Athletic", badgeUrl: "/badges/grays.png" },
    away: { name: "Bowers & Pitsea", badgeUrl: "/badges/bowers.png" },
    homeScore: 0,
    awayScore: 0,
    minute: 12,
    status: "LIVE",
  },
  {
    id: "3",
    competition: "Isthmian North",
    home: { name: "New Salamis", badgeUrl: "/badges/new-salamis.png" },
    away: { name: "Brentwood Town", badgeUrl: "/badges/brentwood.png" },
    homeScore: 1,
    awayScore: 3,
    minute: null,
    status: "FT",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Live Strip – now pure Step 4 Non League */}
      <LiveNowStrip matches={demoMatches} />

      {/* Placeholder for the rest of the page */}
      <section className="mx-auto max-w-6xl px-4 py-8 text-sm text-[#C5C5C5]">
        Featured Games, Vidiprinter & Fixtures will sit here next.
      </section>
    </main>
  );
}
