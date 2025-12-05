import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BelowTheLeague Live",
  description:
    "Live scores, vidiprinter, fixtures, results and league table for Step 4 Isthmian North.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-btl-dark text-white flex justify-center">
        {/* Constrain to mobile-ish width */}
        <div className="w-full max-w-md">{children}</div>
      </body>
    </html>
  );
}
