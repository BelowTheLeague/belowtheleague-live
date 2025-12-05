'use client';

import React from 'react';
import BottomNav from './BottomNav';

type Tab = 'live' | 'fixtures' | 'results' | 'league' | 'teams';

interface AppLayoutProps {
  activeTab: Tab;
  children: React.ReactNode;
}

export default function AppLayout({ activeTab, children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
      {/* Main content, mobile-focused width */}
      <main className="flex-1 pb-16 max-w-md mx-auto w-full">
        {children}
      </main>

      {/* Fixed bottom nav */}
      <BottomNav active={activeTab} />
    </div>
  );
}
