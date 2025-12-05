// components/live/LiveScreen.tsx
'use client';

export default function LiveScreen() {
  return (
    <div className="px-3 pt-4 pb-4 flex flex-col gap-4">
      <header className="mb-2">
        <h1 className="text-xl font-semibold">BelowTheLeague Live</h1>
        <p className="text-sm text-zinc-300">
          Isthmian North · Mobile-first live scores & match centre.
        </p>
      </header>

      <section className="bg-btl-CARD text-black rounded-xl p-3 shadow">
        <p className="text-xs font-semibold text-btl-PRIMARY mb-1">
          Live Scores
        </p>
        <p className="text-sm text-zinc-700">
          No fixtures configured yet. Once we wire data in, today&apos;s live Step 4 games will appear here.
        </p>
      </section>

      <section className="bg-btl-CARD text-black rounded-xl p-3 shadow">
        <p className="text-xs font-semibold text-btl-PRIMARY mb-1">
          Live Report (Vidiprinter)
        </p>
        <p className="text-sm text-zinc-700">
          Match events will scroll here in real time – goals, cards, kick-off, full-time and more.
        </p>
      </section>

      <section className="bg-btl-CARD text-black rounded-xl p-3 shadow">
        <p className="text-xs font-semibold text-btl-PRIMARY mb-1">
          Today&apos;s fixtures
        </p>
        <p className="text-sm text-zinc-700">
          Soon this will show the next Isthmian North matchday fixtures.
        </p>
      </section>
    </div>
  );
}
