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
              ? "glass-nav shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              : "bg-white/90 backdrop-blur-md border border-black/5"
          }`}
        >
          {/* Brand Mark */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center text-white font-bold text-xs tracking-tighter shadow-sm group-hover:scale-105 transition-transform duration-200">
              <span>VX</span>
            </div>
            <span className="text-sm font-bold tracking-tight text-[#111113]">
              Vertex<span className="text-neutral-400 font-normal">OS</span>
            </span>
          </a>

          {/* Desktop Navigation Links — Curated & Luxurious */}
          <div className="hidden md:flex items-center gap-7 text-xs font-semibold text-neutral-600">
            <a
              href="#capabilities"
              className="hover:text-black transition-colors duration-150 whitespace-nowrap"
            >
              Capabilities
            </a>
            <a
              href="#calculator"
              className="hover:text-black transition-colors duration-150 flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>The Math</span>
              <span className="text-[10px] bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded-full font-mono font-bold">
                ROI
              </span>
            </a>
            <a
              href="#comparison"
              className="hover:text-black transition-colors duration-150 whitespace-nowrap"
            >
              Comparison
            </a>
            <a
              href="#proof"
              className="hover:text-black transition-colors duration-150 whitespace-nowrap"
            >
              Studio Proof
            </a>
            <a
              href="#guarantee"
              className="hover:text-black transition-colors duration-150 whitespace-nowrap"
            >
              Guarantee
            </a>
            <a
              href="#faq"
              className="hover:text-black transition-colors duration-150 whitespace-nowrap"
            >
              FAQ
            </a>
          </div>

          {/* Single High-Converting CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenTrial}
              className="btn-press inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-bold bg-black text-white hover:bg-neutral-800 shadow-[0_2px_12px_rgba(0,0,0,0.15)] transition-all duration-150 whitespace-nowrap"
            >
              <span>Get Studio Pass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-neutral-100 text-neutral-700 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 rounded-3xl glass-nav shadow-2xl flex flex-col gap-3 text-sm font-semibold animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-neutral-100 text-neutral-800"
            >
              Capabilities & Architecture
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-neutral-100 text-neutral-800"
            >
              Profit Leakage Calculator
            </a>
            <a
              href="#problem"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-neutral-100 text-neutral-800"
            >
              The 80/20 Problem
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-neutral-100 text-neutral-800"
            >
              Vertex OS vs. Spreadsheets
            </a>
            <a
              href="#proof"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-neutral-100 text-neutral-800"
            >
              Studio Case Studies
            </a>
            <a
              href="#guarantee"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-neutral-100 text-neutral-800"
            >
              100% Margin Guarantee
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-neutral-100 text-neutral-800"
            >
              Targeted FAQ
            </a>
            <div className="pt-3 border-t border-neutral-200/60 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrial();
                }}
                className="w-full py-2.5 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <span>Get Studio Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
