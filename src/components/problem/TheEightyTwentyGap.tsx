"use client";

import React from "react";
import { CheckCircle2, XCircle, ShieldAlert } from "lucide-react";

export function TheEightyTwentyGap() {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-[#09090b] relative overflow-hidden text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 mb-4">
            <ShieldAlert className="w-3.5 h-3.5 text-neutral-400" />
            <span>The Turnkey Reality Check</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            The 80/20 Trap: Why interior studios stay exhausted despite full order books.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Every software company tries to sell you another 3D rendering engine or basic invoice PDF generator. But your business doesn't die in the design studio, it dies on the dusty construction site.
          </p>
        </div>

        {/* The Two Halves: 20% vs 80% Comparison Monolith */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* The 20%: Conventional Software */}
          <div className="rounded-3xl p-6 sm:p-8 border border-white/10 bg-[#121217] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-neutral-400">
                  The Initial 20%
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-300 border border-white/10">
                  Saturated and Commoditized
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Design and 3D Quoting
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
                Tools like AutoCAD, SketchUp, and basic spreadsheets make pretty renders and theoretical estimates. But the estimate is just ink on paper.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400">
                  <XCircle className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>Static Excel sheets disconnected from real timber and hardware market rates.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400">
                  <XCircle className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>Quotes take 3 to 5 days of manual calculation, leading to lost client momentum.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400">
                  <XCircle className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>Once the client signs the contract, the spreadsheet is abandoned in a folder.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400">
                  <XCircle className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>Zero live connection to actual supplier invoices or site labor attendance.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-neutral-400 flex items-center justify-between">
              <span>Result: Theoretical 40% margin</span>
              <span className="text-rose-400 font-semibold font-mono">Prone to 15-20% leakage</span>
            </div>
          </div>

          {/* The 80%: Where Vertex OS Dominates */}
          <div className="rounded-3xl p-6 sm:p-8 border border-white/20 bg-[#181822] text-white flex flex-col justify-between shadow-[0_24px_64px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-neutral-400">
                  The Remaining 80%
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Where Profit Is Won or Lost
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                On-Site Turnkey Execution
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
                80+ micro-purchase orders, labor wage disbursements, site freight, and change requests. This is where Vertex OS acts as your automated financial command center.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Sub-10s mobile logger: site supervisors record timber, paint, and labor in 3 taps.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Deterministic supplier benchmark catalogs with real regional rates.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Continuous variance detection: immediately alerts when carpentry costs exceed cap.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Live client variation billing: 1-click approvals sent directly via WhatsApp.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-neutral-400 flex items-center justify-between">
              <span>Result: Realized 38% net margin</span>
              <span className="text-emerald-400 font-semibold font-mono">Zero on-site leakage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
