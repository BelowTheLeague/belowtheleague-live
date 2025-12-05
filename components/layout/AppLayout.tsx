// components/layout/AppLayout.tsx
'use client';

import BottomNav from './BottomNav';
import React from 'react';

type Tab = 'live' | 'fixtures' | 'results' | 'league' | 'teams';

interface AppLayoutProps {
  activeTab: Tab;
  children: React.ReactNode;
}

export default function AppLayout({ activeTab, children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-btl-DARK text-white flex flex-col">
      {/* Main scrollable content */}
      <main className="flex-1 pb-16 max-w-md mx-auto w-full">
        {children}
      </main>

      {/* Bottom navigation fixed */}
      <BottomNav active={activeTab} />
    </div>
  );
}
