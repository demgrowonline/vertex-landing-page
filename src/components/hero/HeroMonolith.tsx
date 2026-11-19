"use client";

import React from "react";
import {
  ArrowRight,
  Sparkles,
  Mic,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StudioWorkbench } from "./StudioWorkbench";

interface HeroMonolithProps {
  onOpenTrial: () => void;
}

export function HeroMonolith({ onOpenTrial }: HeroMonolithProps) {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-white text-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Mobbin-style Headline with Embedded Micro-Pills */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-neutral-950 leading-[1.08] mb-6">
            Where interior studios{" "}
            <span className="inline-flex items-center align-middle px-2.5 py-1 mx-1 rounded-full bg-neutral-100 border border-neutral-200/90 text-sm sm:text-base font-normal shadow-xs">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-900 mr-1.5" />
              <span className="text-xs font-semibold text-neutral-800">AI</span>
            </span>{" "}
            and designers{" "}
            <span className="inline-flex items-center align-middle px-2.5 py-1 mx-1 rounded-full bg-neutral-100 border border-neutral-200/90 text-sm sm:text-base font-normal shadow-xs">
              <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-900 mr-1.5" />
              <span className="text-xs font-semibold text-neutral-800">Voice</span>
            </span>{" "}
            create quotes{" "}
            <span className="inline-flex items-center align-middle px-2.5 py-1 mx-1 rounded-full bg-neutral-100 border border-neutral-200/90 text-sm sm:text-base font-normal shadow-xs">
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-900 mr-1.5" />
              <span className="text-xs font-semibold text-neutral-800">Send</span>
            </span>{" "}
            that win.
          </h1>

          {/* Minimalist Subhead */}
          <p className="text-base sm:text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed mb-8 font-normal">
            The design &amp; quotation studio for interior designers and turnkey firms.
            <br className="hidden sm:inline" />
            Turn site walkthroughs into approved client proposals in 5 minutes.
          </p>
        </div>

        {/* Minimalist Pill CTA Buttons (Mobbin Style) */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <Button
            size="lg"
            onClick={onOpenTrial}
            className="h-11 px-7 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 shadow-xs transition-all"
          >
            Join for free
          </Button>
          <Button
            size="lg"
            variant="ghost"
            render={<a href="#workbench" />}
            className="h-11 px-5 rounded-full bg-neutral-100 text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-all flex items-center gap-1.5"
          >
            <span>See sample quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobbin-Style Product Showcase Frame */}
        <StudioWorkbench onOpenTrial={onOpenTrial} />

        {/* Monochromatic Social Proof Logos (Mobbin Style) */}
        <div className="mt-16 pt-8 border-t border-neutral-100 text-center">
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-6">
            Trusted by teams and designers at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-neutral-700 opacity-60">
            <span className="text-base sm:text-lg font-serif font-bold tracking-tight">Studio Lotus</span>
            <span className="text-base sm:text-lg font-mono font-medium">Pentagram</span>
            <span className="text-base sm:text-lg font-bold tracking-tighter">airbnb</span>
            <span className="text-base sm:text-lg font-semibold tracking-tight">Spotify</span>
            <span className="text-base sm:text-lg font-serif italic">Morphogenesis</span>
          </div>
        </div>

      </div>
    </section>
  );
}