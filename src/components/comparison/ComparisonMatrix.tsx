"use client";

import React from "react";
import { Check, X, Minus, Scale } from "lucide-react";

export function ComparisonMatrix() {
  const features = [
    {
      category: "Quoting and Estimation",
      name: "Turnkey Quoting Speed",
      vertex: "5 minutes (via Voice Dictation)",
      sheets: "3 to 5 days of manual calculation",
      legacy: "2 to 3 days (complex desktop forms)",
      highlight: true,
    },
    {
      category: "Quoting and Estimation",
      name: "Standardized 3-Tier Proposals",
      vertex: "Instant 3-Tier Matrix (Essential / Signature / Luxe)",
      sheets: "Requires duplicating entire sheets and formulas",
      legacy: "Single estimate only; multiple quotes clunky",
      highlight: false,
    },
    {
      category: "Quoting and Estimation",
      name: "Pre-Loaded Indian Material Rates",
      vertex: "Included (CenturyPly, Hettich, Asian Paints)",
      sheets: "Outdated manual price lists",
      legacy: "US/Western pricing templates",
      highlight: false,
    },
    {
      category: "On-Site Execution",
      name: "Site Expense Logging Time",
      vertex: "< 10 seconds (3-tap mobile browser)",
      sheets: "Delayed until Sunday night (or lost)",
      legacy: "2 to 3 minutes (15 required fields)",
      highlight: true,
    },
    {
      category: "On-Site Execution",
      name: "Site Supervisor Adoption Rate",
      vertex: "99% (Zero training required)",
      sheets: "0% (Supervisors use WhatsApp voice notes)",
      legacy: "Refused by site workers due to complexity",
      highlight: true,
    },
    {
      category: "Financial Control",
      name: "Live Net Margin and P&L",
      vertex: "Real-time updates after every site receipt",
      sheets: "Post-mortem audit 2 months after handover",
      legacy: "Requires dedicated full-time accountant",
      highlight: true,
    },
    {
      category: "Financial Control",
      name: "Client Milestone Advance Reconciliation",
      vertex: "Automated debit from site cash pool",
      sheets: "Frequent balance discrepancies",
      legacy: "Separate billing module add-on",
      highlight: false,
    },
    {
      category: "Setup and Onboarding",
      name: "Migration and Setup Time",
      vertex: "24 Hours (Free White-Glove Migration)",
      sheets: "Perpetual chaos",
      legacy: "3 to 6 months enterprise onboarding",
      highlight: false,
    },
    {
      category: "Financial Guarantee",
      name: "Margin Recovery Guarantee",
      vertex: "5× ROI Margin Recovery Guarantee",
      sheets: "Costs ₹15L to ₹25L annually in site leakage",
      legacy: "Non-refundable annual lock-in ($10K+)",
      highlight: true,
    },
  ];

  return (
    <section id="comparison" className="py-20 sm:py-28 bg-[#09090b] relative overflow-hidden text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 mb-4">
            <Scale className="w-3.5 h-3.5 text-neutral-400" />
            <span>Honest Evaluation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Vertex OS vs. The Alternatives.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Why 140+ interior studios abandoned Excel spreadsheets and rejected $10,000 legacy construction software in favor of Vertex OS.
          </p>
        </div>

        {/* The Comparison Table Container */}
        <div className="border border-white/10 rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.6)] bg-[#121217]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-white/10 bg-[#16161c]">
                  <th className="p-4 sm:p-5 text-xs font-bold text-neutral-400 w-1/4">
                    Capability
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-bold text-white w-1/3 bg-white/10 border-x border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span>Vertex OS</span>
                      <span className="text-xs bg-white text-black px-2 py-0.5 rounded-full font-bold">
                        Purpose-built
                      </span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-bold text-neutral-400 w-1/4">
                    Spreadsheets + WhatsApp
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-bold text-neutral-400 w-1/4">
                    Generic Construction ERPs
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                {features.map((feat, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-white/[0.04] transition-colors duration-150 ${
                      feat.highlight ? "bg-white/[0.02]" : ""
                    }`}
                  >
                    <td className="p-4 sm:p-5 font-semibold text-neutral-200">
                      <div>{feat.name}</div>
                      <span className="text-xs font-normal text-neutral-500">
                        {feat.category}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 font-bold text-white bg-white/[0.04] border-x border-white/10">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat.vertex}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-neutral-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{feat.sheets}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-neutral-400">
                      <div className="flex items-start gap-2">
                        <Minus className="w-4 h-4 text-neutral-600 shrink-0 mt-0.5" />
                        <span>{feat.legacy}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
