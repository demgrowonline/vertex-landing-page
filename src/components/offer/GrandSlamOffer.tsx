"use client";

import React from "react";
import {
  ShieldCheck,
  Gift,
  ArrowRight,
  CheckCircle2,
  Lock,
  Sparkles,
  Zap,
  Users,
} from "lucide-react";

interface OfferProps {
  onOpenTrial: () => void;
}

export function GrandSlamOffer({ onOpenTrial }: OfferProps) {
  return (
    <section id="guarantee" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Scarcity Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span>Cohort Cap: 19 of 25 Studio Seats Reserved This Month</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111113] leading-tight mb-4">
            The Grand Slam Studio Offer.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            We don't offer generic software discounts. Instead, we remove every single obstacle—switching friction, team adoption, and financial risk—so your decision is a no-brainer.
          </p>
        </div>

        {/* The Offer Monolith Box */}
        <div className="rounded-3xl bg-neutral-900 text-white p-6 sm:p-12 shadow-[0_24px_64px_rgba(0,0,0,0.3)] relative overflow-hidden border border-neutral-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Core + Value Stack Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* The Deliverables Stack (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Everything Included in Your Studio Pass:
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  The Complete Turnkey OS + 3 Zero-Friction Bonuses
                </h3>
              </div>

              {/* Stack Item 1: Core Platform */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">
                      1. Full Vertex OS Studio Command Center
                    </span>
                    <span className="text-xs font-mono text-neutral-400">Core Engine</span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Multi-project command center, client CRM, 5-minute voice takeoff, 3-tier quoting, sub-10s mobile expense engine, and live net P&L tracking.
                  </p>
                </div>
              </div>

              {/* Stack Item 2: Bonus 1 */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">
                      Bonus #1: Free White-Glove Migration Concierge
                    </span>
                    <span className="text-xs font-mono text-emerald-400">₹25,000 Value · FREE</span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Send us your messy Excel spreadsheets, WhatsApp price notes, and client lists. Our engineering team cleans, formats, and seeds your studio catalog within 24 hours.
                  </p>
                </div>
              </div>

              {/* Stack Item 3: Bonus 2 */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">
                      Bonus #2: Pre-Loaded 450+ Indian Supplier Benchmarks
                    </span>
                    <span className="text-xs font-mono text-emerald-400">₹15,000 Value · FREE</span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Instant access to verified market rates across CenturyPly, Greenply, Hettich, Ebco, Blum, Saint-Gobain, and Asian Paints. Never quote outdated rates.
                  </p>
                </div>
              </div>

              {/* Stack Item 4: Bonus 3 */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">
                      Bonus #3: Site Supervisor 3-Minute Video Pack
                    </span>
                    <span className="text-xs font-mono text-emerald-400">₹8,000 Value · FREE</span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Micro-video lessons in plain Hindi & English showing site supervisors how to log bills and labor wages in under 10 seconds. 100% adoption guaranteed.
                  </p>
                </div>
              </div>
            </div>

            {/* The 100% Margin Recovery Guarantee (5 cols) */}
            <div className="lg:col-span-5 bg-white text-neutral-900 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>

                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-1">
                  The Ironclad Guarantee
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#111113] leading-tight mb-3">
                  The 5× ROI Margin Recovery Guarantee.
                </h4>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  Use Vertex OS on your active turnkey projects for 30 days.
                </p>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-semibold bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
                  If you don't recover at least <strong>5× your software cost</strong> in prevented material leakage, caught change orders, and verified labor disbursements, we will refund 100% of your fee immediately. No questions. No friction.
                </p>

                <div className="mt-4 space-y-2 text-xs text-neutral-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>Zero long-term lock-in contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>Cancel or pause anytime with 1 click</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>Keep all your clean exported Excel data</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <button
                  onClick={onOpenTrial}
                  className="btn-press w-full py-3.5 rounded-full bg-black text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Claim Studio Pass + All 3 Bonuses</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[11px] text-neutral-400 text-center block mt-2">
                  14-Day Free Access • No Credit Card Required
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
