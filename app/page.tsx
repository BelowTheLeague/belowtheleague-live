// app/page.tsx

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#03040A] text-white">
      {/* TOP BAR / BRAND HERO */}
      <header className="sticky top-0 z-20 bg-gradient-to-r from-[#F15A29] via-orange-500 to-amber-400 shadow-lg shadow-black/40">
        <div className="max-w-md mx-auto px-4 pt-3 pb-3">
          <div className="flex items-center justify-between gap-3">
            {/* BTL badge + wordmark */}
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-2xl bg-black/15 border border-white/35 flex items-center justify-center">
                <span className="text-[11px] font-bold tracking-[0.22em]">
                  BTL
                </span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-black/60">
                  BelowTheLeague
                </p>
                <h1 className="text-[17px] font-semibold leading-tight">
                  Isthmian North · Match Centre
                </h1>
                <p className="text-[11px] text-black/75">
                  Non league. Told properly.
                </p>
              </div>
            </div>

            {/* Right side pills */}
            <div className="flex flex-col items-end gap-1">
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-black/18 border border-black/25 font-semibold">
                Step 4
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/12 border border-black/20 text-black/80">
                Live centre · BTL V1
              </span>
            </div>
          </div>

          {/* quick filters */}
          <div className="mt-3 flex items-center gap-2 text-[11px]">
            <button className="px-3 py-1 rounded-full bg-black/18 border border-black/35 font-medium">
              All games
            </button>
            <button className="px-3 py-1 rounded-full bg-red-500/18 border border-red-500/60 text-red-100">
              Live · 2
            </button>
            <button className="px-3 py-1 rounded-full bg-black/12 border border-black/25 text-black/80">
              Today
            </button>
            <button className="px-3 py-1 rounded-full bg-black/12 border border-black/25 text-black/80">
              My club
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-md mx-auto w-full px-4 pt-3 pb-20 space-y-6">
        {/* LIVE STRIP */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-zinc-300">
              Live right now
            </h2>
            <span className="text-[11px] text-emerald-400 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Matchday demo
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {/* strip card 1 */}
            <article className="min-w-[190px] rounded-2xl bg-zinc-900/80 border border-zinc-700/70 p-2.5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-1">
                <p className="text-[11px] font-semibold">
                  Maldon &amp; Tiptree
                </p>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
                  72&apos;
                </span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="font-semibold">2</span>
                <span className="text-[11px] text-zinc-400">v</span>
                <span className="font-semibold">1</span>
              </div>
              <p className="text-[10px] text-zinc-400 truncate">
                Bonne 68&apos;, Sears 23&apos; · Tilbury 41&apos;
              </p>
            </article>

            {/* strip card 2 */}
            <article className="min-w-[190px] rounded-2xl bg-zinc-900/60 border border-zinc-700/60 p-2.5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-1">
                <p className="text-[11px] font-semibold">Grays Athletic</p>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-100/5 text-zinc-200 border border-zinc-500/40">
                  HT
                </span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="font-semibold">1</span>
                <span className="text-[11px] text-zinc-400">v</span>
                <span className="font-semibold">1</span>
              </div>
              <p className="text-[10px] text-zinc-400 truncate">
                Smith 42&apos; · Felixstowe OG 19&apos;
              </p>
            </article>

            {/* strip card 3 */}
            <article className="min-w-[190px] rounded-2xl bg-zinc-900/40 border border-zinc-800 p-2.5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-1">
                <p className="text-[11px] font-semibold">Wroxham</p>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/40">
                  15:00
                </span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="font-semibold text-zinc-300">
                  vs Gorleston
                </span>
              </div>
              <p className="text-[10px] text-zinc-500 truncate">
                Trafford Park · KO 15:00
              </p>
            </article>
          </div>
        </section>

        {/* FEATURED LIVE MATCHES */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-zinc-300">
              Featured games
            </h2>
            <span className="text-[11px] text-zinc-400">
              Match centre view coming soon
            </span>
          </div>

          <div className="space-y-2.5">
            {/* main match card */}
            <article className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-3.5 shadow-lg shadow-black/40">
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-[11px] text-zinc-400">Park Drive</p>
                  <p className="text-sm font-semibold">
                    Maldon &amp; Tiptree vs Tilbury
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Isthmian North · Matchday 18
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1 text-[19px] leading-none">
                    <span className="font-bold">2</span>
                    <span className="text-[12px] text-zinc-500">–</span>
                    <span className="font-bold">1</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/40">
                    72&apos; · Second half
                  </span>
                </div>
              </div>
              <div className="mt-2 border-t border-zinc-800 pt-2 flex items-center justify-between text-[11px] text-zinc-300">
                <span>Bonne 68&apos;, Sears 23&apos; · Tilbury 41&apos;</span>
                <span className="text-emerald-400 font-medium">LIVE</span>
              </div>
            </article>

            {/* secondary match */}
            <article className="rounded-2xl bg-zinc-950 border border-zinc-800 p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-zinc-400">Rush Green</p>
                  <p className="text-sm font-semibold">
                    Grays Athletic vs Felixstowe
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1 text-[17px] leading-none">
                    <span className="font-semibold">1</span>
                    <span className="text-[11px] text-zinc-500">–</span>
                    <span className="font-semibold">1</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-100/5 text-zinc-100 border border-zinc-500/40">
                    Half-time
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-zinc-400">
                <span>Smith 42&apos; · OG 19&apos;</span>
                <span>HT · Matchday 18</span>
              </div>
            </article>
          </div>
        </section>

        {/* VIDIPRINTER */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[12px] font-semibold tracking-[0.16em] uppercase text-zinc-300">
              Live report · Vidiprinter
            </h2>
            <span className="text-[11px] text-zinc-400">Auto scroll coming soon</span>
          </div>

          <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-3 space-y-1.5 text-[11px]">
            <div className="flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-200 min-w-[42px] text-center">
                72&apos;
              </span>
              <p className="text-zinc-100">
                GOAL · Maldon &amp; Tiptree 2–1 Tilbury. Bonne heads in from a corner.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-100 min-w-[42px] text-center">
                68&apos;
              </span>
              <p className="text-zinc-200">
                Substitution for Tilbury. Jones replaced by Smith.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-100 min-w-[42px] text-center">
                HT
              </span>
              <p className="text-zinc-300">
                Grays Athletic 1–1 Felixstowe. Level at the break.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-100 min-w-[42px] text-center">
                15:00
              </span>
              <p className="text-zinc-400">
                Kick off times and real events will appear here once the BTL data feed is wired in.
              </p>
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
            {[
              {
                home: "Heybridge Swifts",
                away: "New Salamis",
                ground: "Scraley Road",
                time: "15:00",
              },
              {
                home: "Wroxham",
                away: "Gorleston",
                ground: "Trafford Park",
                time: "15:00",
              },
              {
                home: "AFC Sudbury",
                away: "Bury Town",
                ground: "King's Marsh",
                time: "17:30",
              },
            ].map((fx, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2.5"
              >
                <div className="flex flex-col">
                  <span className="font-medium">
                    {fx.home}{" "}
                    <span className="font-normal text-zinc-400">vs</span>{" "}
                    {fx.away}
                  </span>
                  <span className="text-[11px] text-zinc-500">{fx.ground}</span>
                </div>
                <span className="text-[11px] text-zinc-200">{fx.time}</span>
              </div>
            ))}
          </div>
        </section>

        {/* BTL BRAND FOOTER CARD */}
        <section className="rounded-2xl bg-gradient-to-r from-[#F15A29]/18 via-zinc-900 to-zinc-950 border border-zinc-800 px-3.5 py-3 flex items-center justify-between text-[11px]">
          <div className="max-w-[70%]">
            <p className="font-semibold text-zinc-100">
              Built by BelowTheLeague
            </p>
            <p className="text-[11px] text-zinc-400">
              Non league like never before. Stories, stats and live data for clubs
              the big platforms ignore.
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="px-2 py-0.5 rounded-full bg-black/40 border border-zinc-600 text-[10px]">
              Beta match centre
            </span>
            <span className="text-[10px] text-zinc-400">
              Follow @BelowTheLeague
            </span>
          </div>
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
