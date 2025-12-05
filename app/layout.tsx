// app/page.tsx

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-10 bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-3 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/70">
              BelowTheLeague
            </p>
            <h1 className="text-lg font-semibold leading-tight">
              Isthmian North Live
            </h1>
          </div>
          <span className="text-[11px] px-2 py-1 rounded-full bg-black/20 border border-black/20">
            Step 4
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 px-4 pt-4 pb-20 space-y-4">
        {/* Live scores section */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-zinc-200">
              Live scores
            </h2>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/30">
              Live demo
            </span>
          </div>

          {/* Example live matches */}
          <div className="space-y-2">
            {/* Match card */}
            <article className="bg-white text-black rounded-xl p-3 shadow flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold">Maldon &amp; Tiptree</span>
                  <span className="text-[11px] text-zinc-500">Park Drive</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold">2</span>
                  <span className="text-xs text-zinc-500">–</span>
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-semibold">Tilbury</span>
                  <span className="text-[11px] text-zinc-500">72&apos;</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-zinc-600 mt-1">
                <span>68&apos; Bonne, 23&apos; Sears</span>
                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 border border-green-500/30">
                  Live
                </span>
              </div>
            </article>

            <article className="bg-white text-black rounded-xl p-3 shadow flex flex-col gap-1.5 opacity-70">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold">Grays Athletic</span>
                  <span className="text-[11px] text-zinc-500">Rush Green</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold">1</span>
                  <span className="text-xs text-zinc-500">–</span>
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-semibold">Felixstowe</span>
                  <span className="text-[11px] text-zinc-500">HT</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-zinc-600 mt-1">
                <span>42&apos; Smith · 19&apos; OG</span>
                <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-300">
                  Half-time
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* Vidiprinter / live report */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-zinc-200">
              Live report
            </h2>
            <span className="text-[11px] text-zinc-400">
              Vidiprinter mode
            </span>
          </div>

          <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3 space-y-1.5 text-[11px]">
            <div className="flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 min-w-[40px] text-center">
                72&apos;
              </span>
              <p className="text-zinc-200">
                GOAL! Maldon &amp; Tiptree 2–1 Tilbury – Bonne heads home from a corner.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 min-w-[40px] text-center">
                68&apos;
              </span>
              <p className="text-zinc-300">
                Substitution for Tilbury – Jones replaced by Smith.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 min-w-[40px] text-center">
                HT
              </span>
              <p className="text-zinc-400">
                Grays Athletic 1–1 Felixstowe – all square at the break.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 min-w-[40px] text-center">
                15:00
              </span>
              <p className="text-zinc-500">
                Kick-off times and match events will appear here live as we plug in data.
              </p>
            </div>
          </div>
        </section>

        {/* Today’s fixtures */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-zinc-200">
              Today&apos;s fixtures
            </h2>
            <button className="text-[11px] text-orange-400">
              View full list
            </button>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[12px] bg-zinc-900/60 border border-zinc-800 rounded-lg px-3 py-2">
              <div className="flex flex-col">
                <span className="font-medium">Heybridge Swifts vs New Salamis</span>
                <span className="text-[11px] text-zinc-400">Scraley Road</span>
              </div>
              <span className="text-[11px] text-zinc-300">15:00</span>
            </div>

            <div className="flex items-center justify-between text-[12px] bg-zinc-900/60 border border-zinc-800 rounded-lg px-3 py-2">
              <div className="flex flex-col">
                <span className="font-medium">Wroxham vs Gorleston</span>
                <span className="text-[11px] text-zinc-400">Trafford Park</span>
              </div>
              <span className="text-[11px] text-zinc-300">15:00</span>
            </div>

            <div className="flex items-center justify-between text-[12px] bg-zinc-900/60 border border-zinc-800 rounded-lg px-3 py-2">
              <div className="flex flex-col">
                <span className="font-medium">AFC Sudbury vs Bury Town</span>
                <span className="text-[11px] text-zinc-400">King&apos;s Marsh</span>
              </div>
              <span className="text-[11px] text-zinc-300">17:30</span>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom nav */}
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
