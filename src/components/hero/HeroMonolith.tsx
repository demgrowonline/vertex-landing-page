"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StudioWorkbench } from "./StudioWorkbench";

interface HeroMonolithProps {
  onOpenTrial: () => void;
}

export function HeroMonolith({ onOpenTrial }: HeroMonolithProps) {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-[#09090b]">
      {/* Subtle structural dark surface */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-neutral-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AI Quotations & Site Management for Interior Studios</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Create client quotes in 5 minutes with AI.
            <span className="block text-neutral-400 font-medium mt-1">Send them over WhatsApp. Run the project smoothly.</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
            No more late nights typing Excel spreadsheets. Speak or type your site notes—our AI instantly builds a clean, itemized quotation with real material rates, ready to send straight to your client. Once approved, Vertex tracks your site bills and carpenter wages so your profit stays protected.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <Button
            size="lg"
            onClick={onOpenTrial}
            className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 shadow-[0_4px_30px_rgba(255,255,255,0.15)] group"
          >
            <span>Create Free AI Quote</span>
            <ArrowRight data-icon="inline-end" className="group-hover:translate-x-0.5 transition-transform duration-150" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<a href="#calculator" />}
            className="w-full sm:w-auto h-12 px-7 rounded-full bg-white/5 border-white/15 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/25 hover:text-white"
          >
            See Profit Calculator
          </Button>
        </div>

        {/* Trust Proof Micro-Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-neutral-400 mb-14 text-center">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-neutral-300">Ready in under 5 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-neutral-300">1-Click send via WhatsApp & PDF</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-neutral-300">Real CenturyPly & Hettich rates</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-neutral-300">Tracks site expenses & wages</span>
          </div>
        </div>

        {/* Anti-Slop Studio Workbench Showcase */}
        <StudioWorkbench onOpenTrial={onOpenTrial} />
      </div>
    </section>
  );
}
