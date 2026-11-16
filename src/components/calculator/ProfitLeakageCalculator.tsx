"use client";

import React, { useState } from "react";
import { ArrowRight, Calculator, AlertTriangle, ShieldCheck, Sparkles } from "lucide-react";

interface CalculatorProps {
  onOpenTrial: () => void;
}

export function ProfitLeakageCalculator({ onOpenTrial }: CalculatorProps) {
  const [projectCount, setProjectCount] = useState<number>(6);
  const [avgContractLakhs, setAvgContractLakhs] = useState<number>(45);
  const [targetMarginPct, setTargetMarginPct] = useState<number>(35);

  // Math Calculations
  const annualTurnoverLakhs = projectCount * avgContractLakhs;
  const targetProfitLakhs = (annualTurnoverLakhs * targetMarginPct) / 100;
  
  // Benchmark Leakage:
  // 4.2% on unbilled vendor materials/freight/deliveries
  // 3.6% on unrecorded labor wages, unplanned site delays, untracked change orders
  const materialLeakageLakhs = (annualTurnoverLakhs * 0.042);
  const laborLeakageLakhs = (annualTurnoverLakhs * 0.036);
  const totalLeakageLakhs = materialLeakageLakhs + laborLeakageLakhs;
  
  const realizedMarginPct = targetMarginPct - ((totalLeakageLakhs / annualTurnoverLakhs) * 100);
  const recoveredProfitLakhs = totalLeakageLakhs * 0.88; // Vertex recovers ~88% of leakage

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-[#F5F5F7] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 text-[11px] font-semibold text-neutral-800 uppercase tracking-wider mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Profit Leakage Audit</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111113] leading-tight mb-4">
            How much profit is quietly leaking from your sites?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Move the sliders to match your studio's project volume. Based on verified audits of 140+ Indian turnkey interior firms, here is the exact financial bleed caused by unrecorded site expenses and delayed billing.
          </p>
        </div>

        {/* The Calculator Monolith */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div className="space-y-8">
              {/* Slider 1: Active Projects */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-neutral-800">
                    Active Turnkey Projects Per Year
                  </label>
                  <span className="text-sm font-bold text-black font-mono px-3 py-1 bg-neutral-100 rounded-lg">
                    {projectCount} Projects
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  step="1"
                  value={projectCount}
                  onChange={(e) => setProjectCount(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 mt-1 font-medium">
                  <span>2 projects (Boutique)</span>
                  <span>10 projects</span>
                  <span>25+ projects (Scale)</span>
                </div>
              </div>

              {/* Slider 2: Average Contract Value */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-neutral-800">
                    Average Contract Value Per Residence
                  </label>
                  <span className="text-sm font-bold text-black font-mono px-3 py-1 bg-neutral-100 rounded-lg">
                    ₹{avgContractLakhs} Lakhs
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="150"
                  step="5"
                  value={avgContractLakhs}
                  onChange={(e) => setAvgContractLakhs(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 mt-1 font-medium">
                  <span>₹15 Lakhs (2 BHK)</span>
                  <span>₹60 Lakhs (Premium 3/4 BHK)</span>
                  <span>₹1.50 Cr+ (Luxury Villa)</span>
                </div>
              </div>

              {/* Slider 3: Quoted Gross Margin Target */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-neutral-800">
                    Target Quoted Margin %
                  </label>
                  <span className="text-sm font-bold text-black font-mono px-3 py-1 bg-neutral-100 rounded-lg">
                    {targetMarginPct}%
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="50"
                  step="1"
                  value={targetMarginPct}
                  onChange={(e) => setTargetMarginPct(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 mt-1 font-medium">
                  <span>25% Target</span>
                  <span>35% (Industry Standard)</span>
                  <span>50% (High-End Luxe)</span>
                </div>
              </div>
            </div>

            {/* Quick Summary Box */}
            <div className="mt-8 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-semibold text-neutral-600">Annual Turnkey Volume:</span>
              <span className="font-bold text-black font-mono text-sm sm:text-base">
                ₹{annualTurnoverLakhs.toFixed(1)} Lakhs ({ (annualTurnoverLakhs / 100).toFixed(2) } Cr)
              </span>
            </div>
          </div>

          {/* Results Monolith Column (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                  Financial Diagnosis
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-400 bg-rose-950/60 border border-rose-800/50 px-2.5 py-0.5 rounded-full">
                  <AlertTriangle className="w-3 h-3" />
                  <span>Hidden Margin Bleed</span>
                </span>
              </div>

              {/* The Big Leak Number */}
              <div className="mb-6">
                <span className="text-xs text-neutral-400 block mb-1">
                  Estimated Annual On-Site Leakage:
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono tabular-nums">
                  ₹{totalLeakageLakhs.toFixed(2)} Lakhs
                </div>
                <div className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Your realized margin drops from <strong className="text-white">{targetMarginPct}%</strong> down to <strong className="text-rose-400">{realizedMarginPct.toFixed(1)}%</strong>.
                </div>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 pt-4 border-t border-neutral-800 text-xs">
                <div className="flex justify-between items-center text-neutral-300">
                  <span>Unbilled Timber & Material Invoices:</span>
                  <span className="font-mono font-semibold text-white">
                    -₹{materialLeakageLakhs.toFixed(2)}L
                  </span>
                </div>
                <div className="flex justify-between items-center text-neutral-300">
                  <span>Untracked Cash Wages & Scope Drift:</span>
                  <span className="font-mono font-semibold text-white">
                    -₹{laborLeakageLakhs.toFixed(2)}L
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-emerald-400">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold">Recoverable with Vertex OS:</span>
                  </div>
                  <span className="font-mono font-extrabold text-base text-emerald-300">
                    +₹{recoveredProfitLakhs.toFixed(2)}L
                  </span>
                </div>
              </div>
            </div>

            {/* CTA inside calculator */}
            <div className="mt-8 pt-6 border-t border-neutral-800">
              <button
                onClick={onOpenTrial}
                className="btn-press w-full py-3.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm hover:bg-neutral-100 flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>Protect the ₹{recoveredProfitLakhs.toFixed(1)}L — Start Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-400 mt-3 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Backed by our 5× ROI Margin Recovery Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
