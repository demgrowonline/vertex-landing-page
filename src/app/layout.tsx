import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090b",
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
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
