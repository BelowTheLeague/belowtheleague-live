// app/page.tsx

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-4 pt-6 pb-20">
      {/* Header */}
      <header className="mb-4">
        <p className="text-xs uppercase tracking-wide text-orange-500">
          BelowTheLeague · V1
        </p>
        <h1 className="text-2xl font-semibold mt-1">
          Step 4 Isthmian North Live
        </h1>
        <p className="text-sm text-zinc-300 mt-1">
          Mobile-first match centre for non league. Live scores, vidiprinter,
          fixtures and league table.
        </p>
      </header>

      {/* Live scores card */}
      <section className="bg-white text-black rounded-xl p-3 mb-3 shadow">
        <p className="text-xs font-semibold text-orange-500 mb-1">
          Live Scores
        </p>
        <p className="text-sm text-zinc-700">
          No fixtures configured yet. Once we plug in data, you&apos;ll see
          today&apos;s Isthmian North games updating in real time here.
        </p>
      </section>

      {/* Vidiprinter card */}
      <section className="bg-white text-black rounded-xl p-3 mb-3 shadow">
        <p className="text-xs font-semibold text-orange-500 mb-1">
          Live Report (Vidiprinter)
        </p>
        <p className="text-sm text-zinc-700">
          Goals, cards, kick-off, half-time and full-time. Every key moment will
          scroll through this feed as it happens.
        </p>
      </section>

      {/* Today&apos;s fixtures card */}
      <section className="bg-white text-black rounded-xl p-3 mb-3 shadow">
        <p className="text-xs font-semibold text-orange-500 mb-1">
          Today&apos;s fixtures
        </p>
        <p className="text-sm text-zinc-700">
          Soon this will show the next matchday in Step 4 Isthmian North, with
          kick-off times and quick links into each match centre.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-6 text-xs text-zinc-400">
        Built for mobile. Powered by BelowTheLeague. V1 shell live – data
        wiring next.
      </footer>
    </main>
  );
}
