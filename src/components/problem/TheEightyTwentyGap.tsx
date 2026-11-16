"use client";

import React from "react";
import { AlertCircle, CheckCircle2, XCircle, ArrowRight, ShieldAlert, Cpu } from "lucide-react";

export function TheEightyTwentyGap() {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 text-[11px] font-semibold text-neutral-800 uppercase tracking-wider mb-4">
            <ShieldAlert className="w-3.5 h-3.5 text-neutral-600" />
            <span>The Turnkey Reality Check</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111113] leading-tight mb-4">
            The 80/20 Trap: Why interior studios stay exhausted despite full order books.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Every software company tries to sell you another 3D rendering engine or basic invoice PDF generator. But your business doesn't die in the design studio—it dies on the dusty construction site.
          </p>
        </div>

        {/* The Two Halves: 20% vs 80% Comparison Monolith */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* The 20%: Conventional Software */}
          <div className="rounded-3xl p-6 sm:p-8 border border-neutral-200 bg-neutral-50/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  The Initial 20%
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-200 text-neutral-700">
                  Saturated & Commoditized
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
                Design & 3D Quoting
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
                Tools like AutoCAD, SketchUp, and basic spreadsheets make pretty renders and theoretical estimates. But the estimate is just ink on paper.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600">
                  <XCircle className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>Static Excel sheets disconnected from real timber & hardware market rates.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600">
                  <XCircle className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>Quotes take 3-5 days of manual calculation, leading to lost client momentum.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600">
                  <XCircle className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>Once the client signs the contract, the spreadsheet is abandoned in a Dropbox folder.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600">
                  <XCircle className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>Zero live connection to actual supplier invoices or site labor attendance.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 text-xs text-neutral-400 flex items-center justify-between">
              <span>Result: Theoretical 40% margin</span>
              <span className="text-rose-500 font-semibold font-mono">Prone to 15-20% leakage</span>
            </div>
          </div>

          {/* The 80%: Where Vertex OS Dominates */}
          <div className="rounded-3xl p-6 sm:p-8 border border-neutral-900 bg-neutral-950 text-white flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  The Remaining 80%
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
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
                  <span><strong className="text-white">Seamless Proposal-to-Project:</strong> Accepted quote automatically creates the active execution workspace with imported BOQ.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Sub-10s Mobile Logging:</strong> Supervisors log timber yards, hardware, and labor wages in real-time from their phone.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Live Net Margin Health:</strong> Instantly see if your 38% margin is holding before the project finishes, not after.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Milestone Cashflow Protection:</strong> Know your exact net cash position against client advances and pending receivables.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
              <span>Vertex OS Output: Realized 36–42% margin</span>
              <span className="text-emerald-400 font-bold font-mono">100% Margin Protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
