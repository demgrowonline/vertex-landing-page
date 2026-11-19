"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
              Features
            </a>
            <a
              href="#calculator"
              className="hover:text-white transition-colors duration-150 whitespace-nowrap"
            >
              Calculator
            </a>
            <a
              href="#problem"
              className="hover:text-white transition-colors duration-150 whitespace-nowrap"
            >
              Why Vertex
            </a>
            <a
              href="#comparison"
              className="hover:text-white transition-colors duration-150 whitespace-nowrap"
            >
              Comparison
            </a>
            <a
              href="/pricing"
              className="hover:text-white transition-colors duration-150 whitespace-nowrap text-blue-400 font-bold"
            >
              Pricing
            </a>
            <a
              href="#proof"
              className="hover:text-white transition-colors duration-150 whitespace-nowrap"
            >
              Reviews
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
            <Button
              onClick={onOpenTrial}
              size="sm"
              className="rounded-full text-xs font-bold bg-white text-black hover:bg-neutral-200 shadow-[0_2px_16px_rgba(255,255,255,0.15)]"
            >
              <span>Start Free</span>
              <ArrowRight data-icon="inline-end" />
            </Button>

            {/* Mobile Sheet Navigation */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="md:hidden rounded-full text-neutral-300 hover:text-white hover:bg-white/10"
                    aria-label="Toggle menu"
                  />
                }
              >
                <Menu className="size-4" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0e0e12] border-white/15 text-white p-6 w-80">
                <SheetHeader className="mb-6 text-left">
                  <SheetTitle className="text-white font-bold text-lg">
                    Vertex<span className="text-neutral-400 font-normal">OS</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 text-sm font-semibold text-neutral-200">
                  <a
                    href="#capabilities"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 border-b border-white/10 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                  <a
                    href="#calculator"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 border-b border-white/10 hover:text-white transition-colors"
                  >
                    Profit Calculator
                  </a>
                  <a
                    href="#problem"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 border-b border-white/10 hover:text-white transition-colors"
                  >
                    Why Vertex
                  </a>
                  <a
                    href="#comparison"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 border-b border-white/10 hover:text-white transition-colors"
                  >
                    Comparison
                  </a>
                  <a
                    href="/pricing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 border-b border-white/10 hover:text-white transition-colors text-blue-400 font-bold"
                  >
                    Pricing
                  </a>
                  <a
                    href="#proof"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 border-b border-white/10 hover:text-white transition-colors"
                  >
                    Reviews
                  </a>
                  <a
                    href="#faq"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 border-b border-white/10 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                  <Button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenTrial();
                    }}
                    className="w-full mt-2 rounded-full text-xs font-bold bg-white text-black hover:bg-neutral-200"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
