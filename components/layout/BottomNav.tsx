// components/layout/BottomNav.tsx
'use client';

import Link from 'next/link';

type Tab = 'live' | 'fixtures' | 'results' | 'league' | 'teams';

interface BottomNavProps {
  active: Tab;
}

const items: { key: Tab; label: string; href: string }[] = [
  { key: 'live',      label: 'Live',      href: '/' },
  { key: 'fixtures',  label: 'Fixtures',  href: '/fixtures' },
  { key: 'results',   label: 'Results',   href: '/results' },
  { key: 'league',    label: 'League',    href: '/league' },
  { key: 'teams',     label: 'Teams',     href: '/teams' },
];

export default function BottomNav({ active }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-black/90 backdrop-blur-sm">
      <div className="max-w-md mx-auto flex items-center justify-between px-4 py-2 text-xs">
        {items.map((item) => {
          const isActive = item.key === active;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-1 ${
                isActive ? 'text-btl-PRIMARY font-semibold' : 'text-zinc-300'
              }`}
            >
              <span>{item.label}</span>
              {isActive && <span className="h-0.5 w-6 rounded-full bg-btl-PRIMARY" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
