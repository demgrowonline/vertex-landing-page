"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { StudioWorkbench } from "./StudioWorkbench";

interface HeroMonolithProps {
  onOpenTrial: () => void;
}

export function HeroMonolith({ onOpenTrial }: HeroMonolithProps) {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-white">
      {/* Subtle structural surface */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-neutral-50 to-transparent pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-sm text-xs font-medium text-neutral-800">
            <span className="flex h-2 w-2 rounded-full bg-neutral-950" />
            <span className="font-semibold text-neutral-950">Built for Turnkey Interior Studios</span>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-600">Stop 15 to 20% on-site profit leakage</span>
          </div>
        </div>

        {/* The Hormozi Hook Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-neutral-950 leading-[1.05] mb-6">
            Protect every point of your 38% margin.{" "}
            <span className="text-neutral-500 font-medium block sm:inline">
              Stop site financial leakage cold.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Designing and 3D quoting is only the initial 20%. The remaining 80% happens on site, where timber bills, cash wages, and forgotten scope changes quietly bleed your profit to zero.{" "}
            <strong className="text-neutral-950 font-semibold">Vertex OS unifies the entire execution lifecycle.</strong>
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
          <button
            onClick={onOpenTrial}
            className="btn-press w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-950 text-white text-sm font-semibold hover:bg-neutral-800 shadow-md flex items-center justify-center gap-2 group transition-colors duration-150 transition-transform duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            <span>Start 14-Day Free Studio Pass</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150 motion-reduce:transition-none" />
          </button>
          <a
            href="#calculator"
            className="btn-press w-full sm:w-auto px-7 py-3.5 rounded-full bg-white border border-neutral-200 text-neutral-800 text-sm font-semibold hover:bg-neutral-50 hover:border-neutral-300 transition-colors duration-150 transition-transform duration-150 motion-reduce:transition-none flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 active:scale-[0.98] whitespace-nowrap"
          >
            <span>Calculate Studio Margin Recovery</span>
          </a>
        </div>

        {/* Trust Proof Micro-Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-neutral-600 mb-14 text-center">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-neutral-950" />
            <span>140+ Turnkey Studios Active</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-neutral-950" />
            <span>₹42 Cr+ Budgets Safeguarded</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-neutral-950" />
            <span>Free White-Glove Excel Migration</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-neutral-950" />
            <span>100% Margin Recovery Guarantee</span>
          </div>
        </div>

        {/* Anti-Slop Studio Workbench Showcase */}
        <StudioWorkbench onOpenTrial={onOpenTrial} />
      </div>
    </section>
  );
}
