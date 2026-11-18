"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TheEightyTwentyGap() {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-[#09090b] relative overflow-hidden text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Why good interior studios still lose money.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            You don't lose money drawing 3D renders in the office. You lose it on the dusty site floor when nobody writes down what was actually spent.
          </p>
        </div>

        {/* The Two Halves: 20% vs 80% Comparison Monolith */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* The 20%: Conventional Software */}
          <Card className="rounded-3xl p-6 sm:p-8 border-white/10 bg-[#121217] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <CardContent className="p-0 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-neutral-400">
                    In The Office
                  </span>
                  <Badge variant="outline" className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-300 border-white/10">
                    Spreadsheet Quotes
                  </Badge>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Estimating in Excel
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
                  Excel looks neat on a screen, but a spreadsheet cannot run a noisy construction site.
                </p>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400">
                    <XCircle className="size-4 text-neutral-500 shrink-0 mt-0.5" />
                    <span>Prices in old sheets are out of date before you send the quote.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400">
                    <XCircle className="size-4 text-neutral-500 shrink-0 mt-0.5" />
                    <span>Quotes take days to calculate, slowing down new clients.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400">
                    <XCircle className="size-4 text-neutral-500 shrink-0 mt-0.5" />
                    <span>Once the contract is signed, the spreadsheet is forgotten in a folder.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400">
                    <XCircle className="size-4 text-neutral-500 shrink-0 mt-0.5" />
                    <span>Zero live connection to what suppliers and workers actually charge.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-neutral-400 flex items-center justify-between">
                <span>Expected profit: 35%</span>
                <span className="text-rose-400 font-semibold font-mono">Actual profit: drops under 20%</span>
              </div>
            </CardContent>
          </Card>

          {/* The 80%: Where Vertex OS Dominates */}
          <Card className="rounded-3xl p-6 sm:p-8 border-white/20 bg-[#181822] text-white flex flex-col justify-between shadow-[0_24px_64px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <CardContent className="p-0 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-neutral-400">
                    On The Site
                  </span>
                  <Badge className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20">
                    Where Money Is Made
                  </Badge>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Site Control with Vertex OS
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
                  Track every purchase order, daily wage slip, and extra client request right from your phone.
                </p>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Supervisors snap photos of paper slips in seconds. No typing needed.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Current supplier prices for timber, hardware, paint, and labor.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Instant alert when carpentry or electrical work goes over budget.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Send extra client requests to WhatsApp for 1-click approval.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-neutral-400 flex items-center justify-between">
                <span>Expected profit: 35%</span>
                <span className="text-emerald-400 font-semibold font-mono">Actual profit: protected to handover</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
