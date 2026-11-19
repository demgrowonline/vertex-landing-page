"use client";

import React from "react";
import {
  ShieldCheck,
  Gift,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface OfferProps {
  onOpenTrial: () => void;
}

export function GrandSlamOffer({ onOpenTrial }: OfferProps) {
  return (
    <section id="guarantee" className="py-20 sm:py-28 bg-white relative overflow-hidden text-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight mb-4">
            Try it on your next project with zero risk.
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
            We help you set up your price lists, train your site team in 10 minutes, and give you 30 days to test it live on site.
          </p>
        </div>

        {/* The Offer Monolith Box */}
        <Card className="rounded-3xl bg-neutral-950 text-white p-6 sm:p-12 shadow-[0_24px_64px_rgba(0,0,0,0.15)] relative overflow-hidden border-neutral-800 gap-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Core + Value Stack Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* The Deliverables Stack (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Everything included with your trial
                </h3>
              </div>

              {/* Stack Item 1: Core Platform */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">
                      1. Complete Site & Profit Software
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Voice quotes on site, mobile expense logging for workers, live profit tracking, and WhatsApp change orders.
                  </p>
                </div>
              </div>

              {/* Stack Item 2: Bonus 1 */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">
                      2. Free Setup & Data Migration
                    </span>
                    <Badge variant="outline" className="text-xs font-mono text-emerald-400 border-emerald-500/30 bg-emerald-500/10">Included Free</Badge>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Send us your Excel sheets, WhatsApp notes, or vendor price lists. We set up your entire studio workspace within 24 hours.
                  </p>
                </div>
              </div>

              {/* Stack Item 3: Bonus 2 */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">
                      3. Ready Material Price Lists
                    </span>
                    <Badge variant="outline" className="text-xs font-mono text-emerald-400 border-emerald-500/30 bg-emerald-500/10">Included Free</Badge>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Current market rates for CenturyPly, Greenply, Hettich, Ebco, Blum, Saint-Gobain, and Asian Paints.
                  </p>
                </div>
              </div>

              {/* Stack Item 4: Bonus 3 */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">
                      4. 2-Minute Worker Guide
                    </span>
                    <Badge variant="outline" className="text-xs font-mono text-emerald-400 border-emerald-500/30 bg-emerald-500/10">Included Free</Badge>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Short videos in plain Hindi & English showing site supervisors how to photograph bills and daily wages in seconds.
                  </p>
                </div>
              </div>
            </div>

            {/* The 100% Margin Recovery Guarantee (5 cols) */}
            <Card className="lg:col-span-5 bg-white text-neutral-950 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-transparent">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>

                <Badge variant="outline" className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2 border-neutral-300">
                  Our Guarantee
                </Badge>
                <h4 className="text-xl sm:text-2xl font-extrabold text-neutral-950 leading-tight mb-3">
                  If it doesn't save you money, you don't pay.
                </h4>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  Test Vertex OS on your active sites for 30 days.
                </p>

                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-semibold bg-neutral-100 p-3.5 rounded-xl border border-neutral-200">
                  If you don't save more money in caught expenses and unbilled client work than the software costs, we refund 100% of your fee immediately. No questions asked.
                </p>

                <div className="mt-4 space-y-2 text-xs text-neutral-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>No locked-in contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>Cancel or pause anytime with 1 click</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>Keep all your project records</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <Button
                  size="lg"
                  onClick={onOpenTrial}
                  className="w-full h-12 rounded-full bg-black text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 shadow-md group"
                >
                  <span>Start Free 14-Day Trial</span>
                  <ArrowRight data-icon="inline-end" className="group-hover:translate-x-0.5 transition-transform duration-150" />
                </Button>
                <span className="text-xs text-neutral-500 text-center block mt-2">
                  No credit card required
                </span>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
}
