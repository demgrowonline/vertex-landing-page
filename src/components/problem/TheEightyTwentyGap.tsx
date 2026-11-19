"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TheEightyTwentyGap() {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-white relative overflow-hidden text-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight mb-4">
            Why good interior studios still lose money.
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
            You don&apos;t lose money drawing 3D renders in the office. You lose it on the dusty site floor when nobody writes down what was actually spent.
          </p>
        </div>

        {/* The Two Halves: 20% vs 80% Comparison Monolith */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* The 20%: Conventional Software */}
          <Card className="rounded-3xl p-6 sm:p-8 border-neutral-200/80 bg-[#fafafa] flex flex-col justify-between shadow-xs">
            <CardContent className="p-0 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-neutral-500">
                    In The Office
                  </span>
                  <Badge variant="outline" className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-200/60 text-neutral-700 border-neutral-300">
                    Spreadsheet Quotes
                  </Badge>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-3">
                  Estimating in Excel
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mb-6 leading-relaxed">
                  Excel looks neat on a screen, but a spreadsheet cannot run a noisy construction site.
                </p>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600">
                    <XCircle className="size-4 text-neutral-400 shrink-0 mt-0.5" />
                    <span>Prices in old sheets are out of date before you send the quote.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600">
                    <XCircle className="size-4 text-neutral-400 shrink-0 mt-0.5" />
                    <span>Quotes take days to calculate, slowing down new clients.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600">
                    <XCircle className="size-4 text-neutral-400 shrink-0 mt-0.5" />
                    <span>Once the contract is signed, the spreadsheet is forgotten in a folder.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600">
                    <XCircle className="size-4 text-neutral-400 shrink-0 mt-0.5" />
                    <span>Zero live connection to what suppliers and workers actually charge.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 text-xs text-neutral-500 flex items-center justify-between">
                <span>Expected profit: 35%</span>
                <span className="text-rose-600 font-semibold font-mono">Actual profit: drops under 20%</span>
              </div>
            </CardContent>
          </Card>

          {/* The 80%: Where Vertex OS Dominates */}
          <Card className="rounded-3xl p-6 sm:p-8 border-neutral-800 bg-neutral-950 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
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

              <div className="mt-8 pt-6 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
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
