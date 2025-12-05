// app/layout.tsx

import "./globals.css"; // ⬅ REQUIRED: This loads Tailwind + your global styles
import React from "react";

export const metadata = {
  title: "BelowTheLeague Live",
  description: "Live scores, match centre, fixtures, results and league info for Step 4 Isthmian North.",
};

// Required root layout wrapper for all app routes
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
