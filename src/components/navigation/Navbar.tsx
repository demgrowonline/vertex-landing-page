"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenTrial: () => void;
}

export function Navbar({ onOpenTrial }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <nav
          className={`flex items-center justify-between px-5 sm:px-7 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "glass-nav shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
              : "bg-[#0d0d10]/90 backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Brand Mark */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-black font-extrabold text-xs tracking-tighter shadow-sm group-hover:scale-105 transition-transform duration-200">
              <span>VX</span>
            </div>
            <span className="text-sm font-bold tracking-tight text-white">
              Vertex<span className="text-neutral-400 font-normal">OS</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 text-xs font-semibold text-neutral-300">
            <a
              href="#capabilities"
              className="hover:text-white transition-colors duration-150 whitespace-nowrap"
            >
              Capabilities
            </a>
            <a
              href="#calculator"
              className="hover:text-white transition-colors duration-150 flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>The Math</span>
              <span className="text-[10px] bg-white/10 text-neutral-200 px-1.5 py-0.5 rounded-full font-mono font-bold border border-white/10">
                ROI
              </span>
            </a>
            <a
              href="#comparison"
              className="hover:text-white transition-colors duration-150 whitespace-nowrap"
            >
              Comparison
            </a>
            <a
              href="#proof"
              className="hover:text-white transition-colors duration-150 whitespace-nowrap"
            >
              Studio Proof
            </a>
            <a
              href="#guarantee"
              className="hover:text-white transition-colors duration-150 whitespace-nowrap"
            >
              Guarantee
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors duration-150 whitespace-nowrap"
            >
              FAQ
            </a>
          </div>

          {/* Single High-Converting CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenTrial}
              className="btn-press inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-bold bg-white text-black hover:bg-neutral-200 shadow-[0_2px_16px_rgba(255,255,255,0.15)] transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 active:scale-[0.98]"
            >
              <span>Get Studio Pass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/10 text-neutral-300 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 rounded-3xl bg-[#0e0e12]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4 text-sm font-semibold text-neutral-200">
              <a
                href="#capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/10 hover:text-white transition-colors"
              >
                Capabilities
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/10 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>Profit Leakage Calculator</span>
                <span className="text-xs bg-white/10 text-neutral-200 px-2 py-0.5 rounded-full font-mono">
                  ROI
                </span>
              </a>
              <a
                href="#comparison"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/10 hover:text-white transition-colors"
              >
                Vertex vs. Alternatives
              </a>
              <a
                href="#proof"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/10 hover:text-white transition-colors"
              >
                Verified Case Studies
              </a>
              <a
                href="#guarantee"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/10 hover:text-white transition-colors"
              >
                5× ROI Guarantee
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/10 hover:text-white transition-colors"
              >
                FAQ
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrial();
                }}
                className="w-full mt-2 py-3 rounded-full text-center text-xs font-bold bg-white text-black hover:bg-neutral-200 shadow-md transition-colors"
              >
                Start 14-Day Free Studio Pass
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
