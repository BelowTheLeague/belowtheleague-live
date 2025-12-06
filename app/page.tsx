// app/page.tsx

type LiveGame = {
  id: number;
  home: string;
  homeShort: string;
  away: string;
  awayShort: string;
  minute: string;
  score: string;
  stadium: string;
};

type Fixture = {
  id: number;
  home: string;
  away: string;
  stadium: string;
  time: string;
  koIn: string;
};

const liveGames: LiveGame[] = [
  {
    id: 1,
    home: "Maldon & Tiptree",
    homeShort: "MT",
    away: "Tilbury",
    awayShort: "TIL",
    minute: "72'",
    score: "2–1",
    stadium: "Park Drive",
  },
  {
    id: 2,
    home: "Grays Athletic",
    homeShort: "GA",
    away: "Felixstowe",
    awayShort: "FEL",
    minute: "HT",
    score: "1–1",
    stadium: "Rush Green",
  },
  {
    id: 3,
    home: "Wroxham",
    homeShort: "WRX",
    away: "Gorleston",
    awayShort: "GOR",
    minute: "15'",
    score: "0–0",
    stadium: "Trafford Park",
  },
];

const fixtures: Fixture[] = [
  {
    id: 1,
    home: "Heybridge Swifts",
    away: "New Salamis",
    stadium: "Scraley Road",
    time: "15:00",
    koIn: "45'",
  },
  {
    id: 2,
    home: "Wroxham",
    away: "Gorleston",
    stadium: "Trafford Park",
    time: "15:00",
    koIn: "45'",
  },
  {
    id: 3,
    home: "AFC Sudbury",
    away: "Bury Town",
    stadium: "King's Marsh",
    time: "17:30",
    koIn: "165'",
  },
];

// For now, mock total games to drive featured logic.
// Later this can come from real data length.
const totalGames = 8; // change to test 5 or fewer vs 6 or more

export default function HomePage() {
  const featuredCount = totalGames >= 6 ? 2 : 1;
  const featuredGames = liveGames.slice(0, featuredCount);

  return (
    <div className="min-h-screen flex flex-col bg-[#05060B] text-white">
      {/* TOP BAR */}
      <header className="sticky top-0 z-20 bg-[#05060B]/95 border-b border-zinc-800">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-[#F15A29] flex items-center justify-center">
              <span className="text-[11px] font-bold tracking-[0.18em]">
                BTL
              </span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-400">
                BelowTheLeague
              </p>
              <p className="text-[15px] font-semibold">
                Isthmian North · Live
              </p>
              <p className="text-[11px] text-zinc-400">
                Non league. Told properly.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-700 font-semibold">
              Step 4
            </span>
            <span className="text-[10px] text-zinc-500">
              Match centre · V1
            </span>
          </div>
        </div>

        {/* SIMPLE FILTERS */}
        <div className="max-w-md mx-auto px-4 pb-3 flex items-center gap-2 text-[11px]">
          <button className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 font-medium">
            Live
          </button>
          <button className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
            Today
          </button>
          <button className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
            Fixtures
          </button>
          <button className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
            My club
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-md mx-auto w-full px-4 pt-4 pb-20 space-y-6">
        {/* LIVE RIGHT NOW */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-zinc-300">
              Live right now
            </h2>
            <span className="text-[11px] text-emerald-400 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Demo feed
            </span>
          </div>

          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            {liveGames.map((game) => (
              <article
                key={game.id}
                className="min-w-[48%] max-w-[260px] rounded-2xl bg-zinc-900 border border-zinc-800 p-2.5 flex flex-col gap-2"
              >
                {/* minute + score row */}
                <div className="flex items-center justify-between text-[11px]">
                  <span className="px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-200">
                    {game.minute}
                  </span>
                  <span className="text-sm font-semibold">{game.score}</span>
                </div>

                {/* teams row */}
                <div className="flex items-center justify-between">
                  {/* home */}
                  <div className="flex items-center gap-1.5">
                    <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-[9px] font-semibold">
                      {game.homeShort}
                    </div>
                    <span className="text-[11px] text-zinc-100">
                      {game.home}
                    </span>
                  </div>
                  {/* away */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-zinc-100">
                      {game.away}
                    </span>
                    <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-[9px] font-semibold">
                      {game.awayShort}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {/* NOTE: min-w-[48%] on each card means max ~2 visible at once on mobile */}
        </section>

        {/* FEATURED GAMES */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-zinc-300">
              Featured games
            </h2>
            <span className="text-[11px] text-zinc-400">
              Based on total fixtures
            </span>
          </div>

          <div className="space-y-2.5">
            {featuredGames.map((game) => (
              <article
                key={game.id}
                className="rounded-2xl bg-zinc-900 border border-zinc-800 p-3.5 flex flex-col gap-3"
              >
                {/* stadium top centre */}
                <div className="flex items-center justify-center">
                  <span className="text-[11px] text-zinc-400">
                    {game.stadium}
                  </span>
                </div>

                {/* body: home | score/time | away */}
                <div className="flex items-center justify-between">
                  {/* home */}
                  <div className="flex items-center gap-1.5">
                    <div className="h-7 w-7 rounded-full bg-zinc-800 flex items-center justify-center text-[9px] font-semibold">
                      {game.homeShort}
                    </div>
                    <span className="text-[12px] font-semibold">
                      {game.home}
                    </span>
                  </div>

                  {/* centre: score + minute */}
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="text-[18px] font-bold">
                      {game.score}
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      {game.minute}
                    </span>
                  </div>

                  {/* away */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[12px] font-semibold text-right">
                      {game.away}
                    </span>
                    <div className="h-7 w-7 rounded-full bg-zinc-800 flex items-center justify-center text-[9px] font-semibold">
                      {game.awayShort}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* LIVE REPORT / VIDIPRINTER */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-zinc-300">
              Live report
            </h2>
            <span className="text-[11px] text-zinc-400">Vidiprinter demo</span>
          </div>

          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-3 space-y-1.5 text-[11px]">
            {/* minute + title same line */}
            <div className="flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-200 min-w-[42px] text-center">
                72&apos;
              </span>
              <div className="flex-1">
                <p className="text-zinc-100">
                  GOAL · Maldon &amp; Tiptree 2–1 Tilbury.
                </p>
                <p className="text-zinc-300">
                  Bonne heads in from a corner at the near post.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-100 min-w-[42px] text-center">
                68&apos;
              </span>
              <div className="flex-1">
                <p className="text-zinc-200">
                  Substitution · Tilbury swap Jones for Smith.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-100 min-w-[42px] text-center">
                HT
              </span>
              <div className="flex-1">
                <p className="text-zinc-300">
                  Grays Athletic 1–1 Felixstowe. All square at the break.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-100 min-w-[42px] text-center">
                15:00
              </span>
              <div className="flex-1">
                <p className="text-zinc-400">
                  Real kick off times and events will appear here once the BTL
                  data feed is live.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TODAY'S FIXTURES */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-zinc-300">
              Today&apos;s fixtures
            </h2>
          </div>

          <div className="space-y-1.5 text-[12px]">
            {fixtures.map((fx) => (
              <div
                key={fx.id}
                className="rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2.5 flex flex-col gap-1"
              >
                {/* Home v Away | Stadium | 3pm (Minutes Till Kick Off) */}
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    {fx.home}{" "}
                    <span className="font-normal text-zinc-400">v</span>{" "}
                    {fx.away}
                  </span>
                  <span className="text-[11px] text-zinc-200">{fx.time}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-zinc-400">
                  <span>{fx.stadium}</span>
                  <span>KO in {fx.koIn}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BTL BRAND BLOCK */}
        <section className="rounded-2xl bg-zinc-900 border border-zinc-800 px-3.5 py-3 flex items-center justify-between text-[11px]">
          <div className="max-w-[70%]">
            <p className="font-semibold text-zinc-100">
              Built by BelowTheLeague
            </p>
            <p className="text-[11px] text-zinc-400">
              Non league like never before. Stories, stats and live data for
              clubs the big platforms ignore.
            </p>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-zinc-950 border border-zinc-700 text-[10px]">
            Beta match centre
          </span>
        </section>
      </main>

      {/* BOTTOM NAV */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/95 border-t border-zinc-800">
        <div className="max-w-md mx-auto flex items-center justify-between px-4 py-2 text-[11px]">
          <button className="flex flex-col items-center gap-0.5 text-orange-400">
            <span>Live</span>
            <span className="h-0.5 w-6 rounded-full bg-orange-400" />
          </button>
          <button className="flex flex-col items-center gap-0.5 text-zinc-400">
            <span>Fixtures</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-zinc-400">
            <span>Results</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-zinc-400">
            <span>League</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-zinc-400">
            <span>Teams</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
