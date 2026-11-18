"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FinalCtaProps {
  onOpenTrial: () => void;
}

export function FinalCtaMonolith({ onOpenTrial }: FinalCtaProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#09090b] relative overflow-hidden text-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Card className="rounded-[32px] bg-[#121217] text-white p-8 sm:p-16 relative overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.8)] border-white/10 text-center gap-0">
          <CardContent className="p-0">
            {/* Subtle Ambient Radial Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-80 bg-gradient-to-b from-white/10 to-transparent blur-3xl pointer-events-none" />

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-[1.1] mb-6">
              Stop leaving your profit on the site floor.
            </h2>

            <p className="text-sm sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
              Every day without site tracking is another forgotten timber bill and another labor slip paid out of your own pocket. Get complete control of your next project today.
            </p>

            {/* Big Action CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button
                size="lg"
                onClick={onOpenTrial}
                className="w-full sm:w-auto h-12 px-9 rounded-full bg-white text-black text-sm sm:text-base font-bold hover:bg-neutral-200 shadow-[0_4px_30px_rgba(255,255,255,0.25)] group"
              >
                <span>Start Free 14-Day Trial</span>
                <ArrowRight data-icon="inline-end" className="group-hover:translate-x-0.5 transition-transform duration-150" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onOpenTrial}
                className="w-full sm:w-auto h-12 px-7 rounded-full bg-white/5 border-white/15 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/25 hover:text-white"
              >
                Book a 15-Minute Demo
              </Button>
            </div>

            {/* Reassurance Micro-List */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-medium text-neutral-400 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No Credit Card Needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Free Setup in 24 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Works on Any Smartphone</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
