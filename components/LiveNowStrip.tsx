import React from "react";
import Image from "next/image";

type Team = {
  name: string;
  badgeUrl: string;
};

type LiveMatch = {
  id: string;
  competition?: string;
  home: Team;
  away: Team;
  homeScore: number;
  awayScore: number;
  minute: number | null; // null for FT / pre-KO
  status: "LIVE" | "HT" | "FT" | "NS"; // NS = not started
};

interface LiveNowStripProps {
  matches: LiveMatch[];
}

const formatMinute = (minute: number | null, status: LiveMatch["status"]) => {
  if (status === "FT") return "FT";
  if (status === "HT") return "HT";
  if (status === "NS") return "KO";
  if (minute == null) return "—";
  return `${minute}’`;
};

const LiveNowStrip: React.FC<LiveNowStripProps> = ({ matches }) => {
  if (!matches || matches.length === 0) return null;

  return (
    <section className="w-full bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <div className="mx-auto max-w-6xl px-4 py-3">
        {/* Header */}
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-[#E6332A]" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F4F4F4]">
              Live Right Now
            </h2>
          </div>
          <span className="text-[11px] font-medium text-[#C5C5C5]">
            {matches.length} match{matches.length !== 1 ? "es" : ""} live
          </span>
        </div>

        {/* Scroll container */}
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#3A3A3A]">
          {matches.map((match) => {
            const minuteLabel = formatMinute(match.minute, match.status);
            const isLive = match.status === "LIVE";

            return (
              <article
                key={match.id}
                className="snap-start flex-none w-full sm:w-1/2 rounded-xl bg-gradient-to-br from-[#151515] to-[#050505] border border-[#262626] shadow-[0_8px_18px_rgba(0,0,0,0.55)] px-3 py-2.5 hover:border-[#E6332A]/60 transition-colors"
              >
                {/* Top row: competition + LIVE pill */}
                <header className="mb-2 flex items-center justify-between gap-2">
                  <span className="truncate text-[10px] font-medium uppercase tracking-[0.16em] text-[#C5C5C5]">
                    {match.competition || "Non League"}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {isLive && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#E6332A] px-2 py-[2px] text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        Live
                      </span>
                    )}
                    <span className="rounded-full bg-[#1C1C1C] px-2 py-[2px] text-[10px] font-semibold text-[#F4F4F4]">
                      {minuteLabel}
                    </span>
                  </div>
                </header>

                {/* Middle row: teams + score */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                  {/* Home */}
                  <div className="flex items-center gap-2 truncate">
                    <div className="relative h-7 w-7 overflow-hidden rounded-full bg-[#111111]">
                      <Image
                        src={match.home.badgeUrl}
                        alt={match.home.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <span className="truncate text-xs font-semibold text-[#F4F4F4]">
                      {match.home.name}
                    </span>
                  </div>

                  {/* Score */}
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[22px] leading-none font-extrabold text-[#F4F4F4]">
                      {match.homeScore}
                      <span className="mx-1 text-[16px] text-[#C5C5C5]">–</span>
                      {match.awayScore}
                    </span>
                    <span className="mt-[2px] text-[9px] font-medium uppercase tracking-[0.18em] text-[#8A8A8A]">
                      Full Score
                    </span>
                  </div>

                  {/* Away */}
                  <div className="flex items-center justify-end gap-2 truncate">
                    <span className="truncate text-xs font-semibold text-[#F4F4F4] text-right">
                      {match.away.name}
                    </span>
                    <div className="relative h-7 w-7 overflow-hidden rounded-full bg-[#111111]">
                      <Image
                        src={match.away.badgeUrl}
                        alt={match.away.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export type { LiveMatch };
export default LiveNowStrip;
