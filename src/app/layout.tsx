import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Vertex OS — The Operating System for Interior Design & Turnkey Execution",
  description: "Protect your 38% margins. Eliminate unbilled site micro-expenses and runaway contractor labor. 5-minute voice-to-quote, sub-10s site expense logging, and live project P&L.",
  keywords: [
    "interior design software",
    "turnkey interior project management",
    "interior quotation software",
    "interior contractor expense tracker",
    "interior design p&l",
    "interior studio operating system",
    "voice takeoff interior boq",
  ],
  authors: [{ name: "Vertex OS" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-[#FBFBFD] text-[#111113] selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
