"use client";

import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Building2 } from "lucide-react";

interface FinalCtaProps {
  onOpenTrial: () => void;
}

export function FinalCtaMonolith({ onOpenTrial }: FinalCtaProps) {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-[32px] bg-black text-white p-8 sm:p-16 relative overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.35)] border border-neutral-800 text-center">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-80 bg-gradient-to-b from-neutral-700/30 to-transparent blur-3xl pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-emerald-400 mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Protect Your Studio's Hard-Earned Profit</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-[1.1] mb-6">
            Stop leaving 15% of every turnkey residence on the construction site.
          </h2>

          <p className="text-sm sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Every day you wait is another unbilled timber invoice, another lost labor slip, and another client scope drift you absorb out of pocket. Experience complete turnkey control in under 24 hours.
          </p>

          {/* Big Action CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenTrial}
              className="btn-press w-full sm:w-auto px-9 py-4 rounded-full bg-white text-black text-sm sm:text-base font-bold hover:bg-neutral-100 shadow-[0_4px_30px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 transition-all"
            >
              <span>Claim Free 14-Day Studio Pass</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenTrial}
              className="btn-press w-full sm:w-auto px-7 py-4 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 text-sm font-semibold hover:bg-neutral-800 hover:text-white transition-all"
            >
              <span>Schedule 1-on-1 Studio Walkthrough</span>
            </button>
          </div>

          {/* Reassurance Micro-List */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-medium text-neutral-400 pt-6 border-t border-neutral-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Free 24-Hr White-Glove Migration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Margin Recovery Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Cancel Anytime with 1 Click</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
