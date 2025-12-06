"use client";

import React, { useState } from "react";

const socialClasses =
  "flex h-7 w-7 items-center justify-center rounded-full border border-[#E6332A] text-[#E6332A] text-[11px] font-semibold hover:bg-[#E6332A] hover:text-[#F4F4F4] transition-colors";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP STRIP – SOCIAL ICONS */}
      <header className="border-b border-[#E0E0E0] bg-[#F4F4F4]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E6332A]">
            BelowTheLeague
          </span>

          <nav className="flex items-center gap-2.5">
            {/* Facebook */}
            <a
              href="https://facebook.com/belowtheleague"
              target="_blank"
              rel="noreferrer"
              aria-label="BelowTheLeague on Facebook"
              className={socialClasses}
            >
              f
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/belowtheleague"
              target="_blank"
              rel="noreferrer"
              aria-label="BelowTheLeague on Instagram"
              className={socialClasses}
            >
              ig
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/belowtheleague"
              target="_blank"
              rel="noreferrer"
              aria-label="BelowTheLeague on X"
              className={socialClasses}
            >
              x
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@belowtheleague"
              target="_blank"
              rel="noreferrer"
              aria-label="BelowTheLeague on YouTube"
              className={socialClasses}
            >
              yt
            </a>

            {/* WhatsApp – could later be a channel / linktree */}
            <a
              href="#"
              aria-label="BelowTheLeague on WhatsApp"
              className={socialClasses}
            >
              wa
            </a>
          </nav>
        </div>
      </header>

      {/* SECOND ROW – BTL LOGO + MENU */}
      <div className="border-b border-[#1F1F1F] bg-[#E6332A] text-[#F4F4F4]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Left – logo block */}
          <div className="flex items-center gap-3">
            {/* Logo holder – favicon style BTL letters */}
            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[#FCE5E3]/40 bg-[#E6332A] shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.24em]">
                BTL
              </span>
            </div>

            {/* Text info */}
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] leading-none">
                Live Match Centre
              </span>
              <span className="mt-1 text-xs opacity-90">
                Isthmian North • Step 4 Non League
              </span>
            </div>
          </div>

          {/* Right – Menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 rounded-full border border-[#FCE5E3]/40 bg-[#FCE5E3]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] hover:bg-[#FCE5E3]/20 transition-colors"
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

      {/* FULL SCREEN MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm">
          <div className="mx-auto flex h-full max-w-6xl flex-col px-4 py-5 text-[#F4F4F4]">
            {/* Top row of overlay */}
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#F4F4F4]/40">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.24em]">
                    BTL
                  </span>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                  BelowTheLeague
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-[#F4F4F4]/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] hover:bg-[#F4F4F4]/10 transition-colors"
              >
                Close
              </button>
            </div>

            {/* Menu links */}
            <nav className="flex flex-1 flex-col justify-center gap-4 text-2xl font-semibold">
              <a href="#" className="hover:text-[#E6332A] transition-colors">
                Live Match Centre
              </a>
              <a href="#" className="hover:text-[#E6332A] transition-colors">
                Fixtures & Results
              </a>
              <a href="#" className="hover:text-[#E6332A] transition-colors">
                Non League News
              </a>
              <a href="#" className="hover:text-[#E6332A] transition-colors">
                Clubs & Creators
              </a>
              <a href="#" className="hover:text-[#E6332A] transition-colors">
                About BelowTheLeague
              </a>
            </nav>

            <div className="mt-10 text-[11px] text-[#BBBBBB]">
              Step 4 Non League • Isthmian North • Built by BelowTheLeague
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
