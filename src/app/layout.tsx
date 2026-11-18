import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  title: "Vertex OS — The Operating System for Interior Design & Turnkey Execution",
  description: "Protect your project profit. Eliminate unbilled site micro-expenses and runaway contractor labor. Quick quotes, mobile site expense logging, and live project profit tracking.",
  keywords: [
    "interior design software",
    "turnkey interior project management",
    "interior quotation software",
    "interior contractor expense tracker",
    "interior design profit",
    "interior studio operating system",
    "site expense logger",
  ],
  authors: [{ name: "Vertex OS" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth dark",
        geistSans.variable,
        geistMono.variable
      )}
    >
      <body className="antialiased min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
