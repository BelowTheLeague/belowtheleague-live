// app/layout.tsx

import "./globals.css";
import React from "react";

export const metadata = {
  title: "BelowTheLeague Live",
  description: "Live scores, match centre, fixtures, results and league coverage for Step 4 Isthmian North.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
