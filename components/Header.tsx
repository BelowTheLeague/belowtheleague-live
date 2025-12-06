"use client";

import React, { useState } from "react";

const socialIconBase =
  "flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold tracking-[0.12em] uppercase";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP STRIP – SOCIAL / UTILITY (Sky-style slim bar) */}
      <header className="border-b border-[#E1E1E1] bg-[#F4F4F4]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E6332A]">
            BelowTheLeague
          </span>

          <nav className="flex items-center gap-1.5">
            {/* Facebook */}
            <a
              href="https://facebook.com/belowtheleague"
              target="_blank"
              rel="noreferrer"
              aria-label="BelowTheLeague on Facebook"
              className={`${socialIconBase} text-[#E6332A] hover:bg-[#E6332A] hover:text-[#F4F4F4] transition-colors`}
            >
              f
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/belowtheleague"
              target="_blank"
              rel="noreferrer"
              aria-label="BelowTheLeague on Instagram"
              className={`${socialIconBase} text-[#E6332A] hover:bg-[#E6332A] hover:text-[#F4F4F4] transition-colors`}
            >
              ig
            </a>

            {/* X */}
            <a
              href="https://x.com/belowtheleague"
              target="_blank"
              rel="noreferrer"
              aria-label="BelowTheLeague on X"
              className={`${socialIconBase} text-[#E6332A] hover:bg-[#E6332A] hover:text-[#F4F4F4] transition-colors`}
            >
              x
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@belowtheleague"
              target="_blank"
              rel="noreferrer"
              aria-label="BelowTheLeague on YouTube"
              className={`${socialIconBase} text-[#E6332A] hover:bg-[#E6332A] hover:text-[#F4F4F4] transition-colors`}
            >
              yt
            </a>

            {/* WhatsApp (link TBD) */}
            <a
              href="#"
              aria-label="BelowTheLeague on WhatsApp"
              className={`${socialIconBase} text-[#E6332A] hover:bg-[#E6332A] hover:text-[#F4F4F4] transition-colors`}
            >
              wa
            </a>
          </nav>
        </div>
      </header>

      {/* BRAND STRIP – LOGO + CONTEXT + MENU (BTL red, Sky-style sizing) */}
      <div className="border-b border-[#151515] bg-[#E6332A] text-[#F4F4F4] shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
          {/* Left – favicon logo + text */}
          <div className="flex items-center gap-3">
            {/* Logo token */}
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#FCE5E3]/50 bg-[#E6332A]">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em]">
                BTL
              </span>
            </div>

            {/* Context text */}
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                Live Match Centre
              </span>
              <span className="mt-[2px] text-[11px] text-[#FCE5E3]">
                Isthmian North • Step 4 Non League
              </span>
            </div>
          </div>

          {/* Right – compact menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 rounded-full border border-[#FCE5E3]/60 bg-[#FCE5E3]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] hover:bg-[#FCE5E3]/20 transition-colors"
          >
            <span className="flex flex-col gap-[3px]">
              <span className="h-[1px] w-4 bg-[#F4F4F4]" />
              <span className="h-[1px] w-4 bg-[#F4F4F4]" />
              <span className="h-[1px] w-4 bg-[#F4F4F4]" />
            </span>
            <span>Menu</span>
          </button>
        </div>
      </div>

      {/* FULL SCREEN MENU – Sky-style overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/90 backdrop-blur-sm">
          <div className="mx-auto flex h-full max-w-6xl flex-col px-4 py-4 text-[#F4F4F4]">
            {/* Top of overlay */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#F4F4F4]/40">
                  <span className="text-[9px] font-extrabold uppercase tracking-[0.22em]">
                    BTL
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                  BelowTheLeague
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-[#F4F4F4]/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] hover:bg-[#F4F4F4]/10 transition-colors"
              >
                Close
              </button>
            </div>

            {/* Main menu links */}
            <nav className="flex flex-1 flex-col justify-center gap-3 text-xl font-semibold">
              <a href="#" className="hover:text-[#E6332A] transition-colors">
                Live Match Centre
              </a>
              <a href="#" className="hover:text-[#E6332A] transition-colors">
                Fixtures &amp; Results
              </a>
              <a href="#" className="hover:text-[#E6332A] transition-colors">
                Non League News
              </a>
              <a href="#" className="hover:text-[#E6332A] transition-colors">
                Clubs &amp; Creators
              </a>
              <a href="#" className="hover:text-[#E6332A] transition-colors">
                About BelowTheLeague
              </a>
            </nav>

            <div className="mt-8 text-[10px] text-[#B9B9B9]">
              Step 4 Non League • Isthmian North • Powered by BelowTheLeague
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
