"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  Receipt,
  Mic,
  Layers,
  CheckCircle2,
  AlertCircle,
  Building2,
  Calendar,
  Sparkles,
  ChevronRight,
  Plus,
} from "lucide-react";

interface HeroMonolithProps {
  onOpenTrial: () => void;
}

export function HeroMonolith({ onOpenTrial }: HeroMonolithProps) {
  const [activeTab, setActiveTab] = useState<"pnl" | "quote" | "expense">("pnl");
  const [selectedTier, setSelectedTier] = useState<"essential" | "signature" | "luxury">("signature");

  // Interactive mock state for demo expense
  const [expenseList, setExpenseList] = useState([
    { id: 1, category: "Vendor Materials", title: "CenturyPly 19mm BWR — 28 Sheets", vendor: "Bhagwati Timber", amount: "₹89,600", time: "18 mins ago", status: "Verified" },
    { id: 2, category: "Trade Labor", title: "Carpentry Master Wage (Week 4)", vendor: "Ramesh Mistry (Head)", amount: "₹42,000", time: "2 hours ago", status: "Verified" },
    { id: 3, category: "Site Logistics", title: "Freight & High-Rise Crane Lift", vendor: "Jai Maa Logistics", amount: "₹8,500", time: "Yesterday", status: "Verified" },
  ]);
  const [quickAdded, setQuickAdded] = useState(false);

  const handleQuickAdd = () => {
    if (quickAdded) return;
    setExpenseList([
      { id: 4, category: "Vendor Materials", title: "Hettich Sensys Soft-Close Hinges (64 pcs)", vendor: "National Hardware Hub", amount: "₹18,400", time: "Just now", status: "Auto-Logged" },
      ...expenseList,
    ]);
    setQuickAdded(true);
  };

  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[640px] pointer-events-none -z-10">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-neutral-200/50 via-neutral-100/30 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-36 left-1/3 w-[380px] h-[280px] bg-neutral-200/40 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-[12px] font-medium text-neutral-800">
            <span className="flex h-2 w-2 rounded-full bg-black" />
            <span className="font-semibold text-black">Built for Turnkey Interior Studios</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">Stop 15-20% on-site profit leakage</span>
          </div>
        </div>

        {/* The Hormozi Hook Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-[-0.035em] text-[#111113] leading-[1.05] mb-6">
            Protect every point of your 38% margin.{" "}
            <span className="text-neutral-400 font-medium block sm:inline">
              Stop site financial leakage cold.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Designing and 3D quoting is only the initial 20%. The remaining 80% happens on-site—where timber bills, cash wages, and forgotten scope changes quietly bleed your profit to zero.{" "}
            <strong className="text-neutral-900 font-semibold">Vertex OS unifies the entire lifecycle.</strong>
          </p>
        </div>

        {/* Primary Action Buttons & Reassurance Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
          <button
            onClick={onOpenTrial}
            className="btn-press w-full sm:w-auto px-8 py-3.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-neutral-800 shadow-[0_4px_24px_rgba(0,0,0,0.2)] flex items-center justify-center gap-2 group transition-all"
          >
            <span>Start 14-Day Free Studio Pass</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <a
            href="#calculator"
            className="btn-press w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/90 border border-neutral-200 text-neutral-800 text-sm font-semibold hover:bg-neutral-50 hover:border-neutral-300 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Calculate Your Studio's Leakage</span>
            <span className="text-xs text-neutral-400">→</span>
          </a>
        </div>

        {/* Trust Proof Micro-Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-neutral-500 mb-14 text-center">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-black" />
            <span>140+ Turnkey Studios Active</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-black" />
            <span>₹42 Cr+ Budgets Safeguarded</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-black" />
            <span>Free White-Glove Excel Migration</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-black" />
            <span>100% Margin Recovery Guarantee</span>
          </div>
        </div>

        {/* =========================================================================
            THE GLASSMORPHIC COMMAND CENTER MONOLITH
            Interactive, authentic, high-density SaaS interface showcase
           ========================================================================= */}
        <div className="relative mx-auto max-w-5xl rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-neutral-300/40 via-neutral-200/20 to-neutral-200/50 backdrop-blur-2xl border border-white/60 shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
          {/* Main App Container */}
          <div className="rounded-[22px] bg-[#FFFFFF] border border-black/5 overflow-hidden shadow-sm">
            {/* Window Top Chrome */}
            <div className="px-5 py-3.5 bg-neutral-50/90 border-b border-neutral-200/70 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-neutral-300" />
                  <div className="w-3 h-3 rounded-full bg-neutral-300" />
                  <div className="w-3 h-3 rounded-full bg-neutral-300" />
                </div>
                <div className="h-4 w-px bg-neutral-200 mx-2" />
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                  <Building2 className="w-3.5 h-3.5 text-neutral-500" />
                  <span>The Grand Penthouse 402</span>
                  <span className="text-[11px] font-normal text-neutral-400">· 3,450 sq.ft · Alipore Residences</span>
                </div>
              </div>

              {/* Status Pill & Live Indicator */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70 text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Health: Thriving (36.2% Margin)</span>
                </span>
                <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-400">
                  ID: PRJ-4029-WB
                </span>
              </div>
            </div>

            {/* Financial Metrics Monolith Ribbon */}
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-neutral-100 border-b border-neutral-100 bg-[#FCFCFD]">
              <div className="p-4 sm:p-5">
                <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 block mb-1">
                  Quoted Contract
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#111113] tabular-nums">
                    ₹54,20,000
                  </span>
                  <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-1 rounded">
                    +₹3.2L Rev.
                  </span>
                </div>
                <span className="text-[11px] text-neutral-400 block mt-1">4 Bedrooms + Modular Kitchen</span>
              </div>

              <div className="p-4 sm:p-5">
                <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 block mb-1">
                  Total Incurred Costs
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#111113] tabular-nums">
                    ₹34,56,800
                  </span>
                  <span className="text-[11px] text-neutral-500 font-mono">63.7% Burn</span>
                </div>
                <span className="text-[11px] text-neutral-400 block mt-1">Materials, Labor, Site Freight</span>
              </div>

              <div className="p-4 sm:p-5 bg-neutral-900 text-white">
                <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 block mb-1">
                  Live Net Margin
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-white tabular-nums">
                    +₹19,63,200
                  </span>
                  <span className="text-[11px] text-emerald-400 font-bold">
                    36.2%
                  </span>
                </div>
                <span className="text-[11px] text-neutral-400 block mt-1">Target was 35.0% · Zero Leakage</span>
              </div>

              <div className="p-4 sm:p-5">
                <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 block mb-1">
                  Client Receivables
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#111113] tabular-nums">
                    ₹43,36,000
                  </span>
                  <span className="text-[11px] text-emerald-600 font-semibold">Cash +₹8.8L</span>
                </div>
                <span className="text-[11px] text-neutral-400 block mt-1">Milestone 3 Cleared</span>
              </div>
            </div>

            {/* Interactive Workspace Navigation Tabs */}
            <div className="flex items-center justify-between px-5 pt-3 border-b border-neutral-100 bg-white">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("pnl")}
                  className={`btn-press pb-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-all ${
                    activeTab === "pnl"
                      ? "border-black text-black"
                      : "border-transparent text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Real-Time P&L & Expenses</span>
                </button>
                <button
                  onClick={() => setActiveTab("quote")}
                  className={`btn-press pb-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-all ${
                    activeTab === "quote"
                      ? "border-black text-black"
                      : "border-transparent text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>3-Tier Quotation Matrix</span>
                </button>
                <button
                  onClick={() => setActiveTab("expense")}
                  className={`btn-press pb-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-all ${
                    activeTab === "expense"
                      ? "border-black text-black"
                      : "border-transparent text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  <Receipt className="w-3.5 h-3.5" />
                  <span>Sub-10s Site Logger</span>
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-1 text-[11px] text-neutral-400 font-medium pb-2">
                <span>Interactive Preview Mode</span>
              </div>
            </div>

            {/* Workspace Interactive Views */}
            <div className="p-5 sm:p-6 bg-white min-h-[300px]">
              {/* TAB 1: P&L and Live Expense Stream */}
              {activeTab === "pnl" && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  {/* Category Breakdown Progress */}
                  <div>
                    <div className="flex justify-between text-xs font-medium text-neutral-600 mb-2">
                      <span>Expense Distribution by Trade</span>
                      <span className="font-mono text-neutral-400">Total: ₹34,56,800</span>
                    </div>
                    <div className="h-3 w-full bg-neutral-100 rounded-full overflow-hidden flex">
                      <div style={{ width: "52%" }} className="bg-black" title="Vendor Materials (52%)" />
                      <div style={{ width: "32%" }} className="bg-neutral-600" title="Trade Labor Wages (32%)" />
                      <div style={{ width: "16%" }} className="bg-neutral-300" title="Site Logistics & Freight (16%)" />
                    </div>
                    <div className="flex items-center gap-4 text-[11px] text-neutral-500 mt-2 font-medium">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-black" />
                        Vendor Materials (₹17.9L)
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-neutral-600" />
                        Trade Wages (₹11.0L)
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-neutral-300" />
                        Logistics & Freight (₹5.5L)
                      </span>
                    </div>
                  </div>

                  {/* Live Transaction Ledger Table */}
                  <div className="border border-neutral-200/70 rounded-2xl overflow-hidden">
                    <div className="px-4 py-2.5 bg-neutral-50/80 border-b border-neutral-200/70 flex items-center justify-between">
                      <span className="text-xs font-semibold text-neutral-700">
                        Live Site Micro-Expenses (Logged via Mobile)
                      </span>
                      <button
                        onClick={handleQuickAdd}
                        disabled={quickAdded}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
                          quickAdded
                            ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                            : "bg-black text-white hover:bg-neutral-800"
                        }`}
                      >
                        <Plus className="w-3 h-3" />
                        <span>{quickAdded ? "New Invoice Added" : "Simulate 1-Tap Site Log"}</span>
                      </button>
                    </div>
                    <div className="divide-y divide-neutral-100">
                      {expenseList.map((item) => (
                        <div
                          key={item.id}
                          className="px-4 py-3 flex items-center justify-between text-xs hover:bg-neutral-50/60 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 font-bold">
                              <Receipt className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <span className="font-semibold text-neutral-900 block">{item.title}</span>
                              <span className="text-neutral-400 text-[11px]">
                                {item.category} · {item.vendor}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-neutral-900 block font-mono tabular-nums">
                              {item.amount}
                            </span>
                            <span className="text-[11px] text-emerald-600 font-medium">
                              ● {item.status} · {item.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: 3-Tier Quotation Matrix */}
              {activeTab === "quote" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900">
                        Room-by-Room 3-Tier Assembly Engine
                      </h4>
                      <p className="text-xs text-neutral-500">
                        Give clients 3 choices instead of 3 rounds of discount bargaining.
                      </p>
                    </div>
                    {/* Tier Switcher */}
                    <div className="inline-flex p-1 bg-neutral-100 rounded-full border border-neutral-200">
                      {(["essential", "signature", "luxury"] as const).map((tier) => (
                        <button
                          key={tier}
                          onClick={() => setSelectedTier(tier)}
                          className={`btn-press px-3 py-1 text-xs font-semibold rounded-full capitalize transition-all ${
                            selectedTier === tier
                              ? "bg-black text-white shadow-sm"
                              : "text-neutral-600 hover:text-black"
                          }`}
                        >
                          {tier === "signature" ? "Signature ★" : tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tier Comparison Card */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                    <div
                      className={`p-4 rounded-2xl border transition-all ${
                        selectedTier === "essential"
                          ? "border-black bg-neutral-50 shadow-sm"
                          : "border-neutral-200 bg-white"
                      }`}
                    >
                      <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
                        Tier 1 · Essential
                      </span>
                      <div className="text-xl font-bold text-neutral-900 my-1 font-mono">
                        ₹38,50,000
                      </div>
                      <p className="text-xs text-neutral-500 mb-3">
                        Commercial MR Plywood + 0.8mm Matte Laminates + Ebco Hardware.
                      </p>
                      <ul className="text-xs space-y-1.5 text-neutral-600">
                        <li>✓ 100% IS 303 MR Grade Ply</li>
                        <li>✓ 5-Year Hardware Warranty</li>
                        <li>✓ Target Margin: 32%</li>
                      </ul>
                    </div>

                    <div
                      className={`p-4 rounded-2xl border relative transition-all ${
                        selectedTier === "signature"
                          ? "border-black bg-neutral-900 text-white shadow-md"
                          : "border-neutral-200 bg-white"
                      }`}
                    >
                      <div className="absolute -top-2.5 right-4 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        RECOMMENDED
                      </div>
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider block ${
                          selectedTier === "signature" ? "text-neutral-300" : "text-neutral-500"
                        }`}
                      >
                        Tier 2 · Signature
                      </span>
                      <div
                        className={`text-xl font-bold my-1 font-mono ${
                          selectedTier === "signature" ? "text-white" : "text-neutral-900"
                        }`}
                      >
                        ₹54,20,000
                      </div>
                      <p
                        className={`text-xs mb-3 ${
                          selectedTier === "signature" ? "text-neutral-300" : "text-neutral-500"
                        }`}
                      >
                        Century BWR Marine Ply + Royalé Touche 1mm Acrylic + Hettich Sensys.
                      </p>
                      <ul
                        className={`text-xs space-y-1.5 ${
                          selectedTier === "signature" ? "text-neutral-300" : "text-neutral-600"
                        }`}
                      >
                        <li>✓ Century BWR Marine Core (IS 710)</li>
                        <li>✓ Hettich Quadro Soft-Close</li>
                        <li>✓ Target Margin: 38% (Protected)</li>
                      </ul>
                    </div>

                    <div
                      className={`p-4 rounded-2xl border transition-all ${
                        selectedTier === "luxury"
                          ? "border-black bg-neutral-50 shadow-sm"
                          : "border-neutral-200 bg-white"
                      }`}
                    >
                      <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
                        Tier 3 · Bespoke Luxe
                      </span>
                      <div className="text-xl font-bold text-neutral-900 my-1 font-mono">
                        ₹76,80,000
                      </div>
                      <p className="text-xs text-neutral-500 mb-3">
                        Natural Teak Veneer + PU Matt Polycoat + Blum Aventos Servo-Drive.
                      </p>
                      <ul className="text-xs space-y-1.5 text-neutral-600">
                        <li>✓ Hand-Matched Architectural Veneer</li>
                        <li>✓ Blum Motorized Lift-Up Fittings</li>
                        <li>✓ Target Margin: 44%</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: Sub-10s Site Expense Logger */}
              {activeTab === "expense" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-in fade-in duration-200">
                  <div className="p-4 rounded-2xl border border-neutral-200 bg-neutral-50/50">
                    <span className="text-xs font-semibold text-neutral-800 block mb-1">
                      Designed for Site Supervisors on the Go
                    </span>
                    <p className="text-xs text-neutral-500 mb-4">
                      No complex forms. Works on mobile browser. 3 taps to record a timber bill or labor cash disbursement.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <label className="text-[11px] font-semibold text-neutral-600 block mb-1">
                          Category
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          <button className="py-1.5 px-2 text-xs font-semibold rounded-lg bg-black text-white text-center">
                            Materials
                          </button>
                          <button className="py-1.5 px-2 text-xs font-medium rounded-lg bg-white border border-neutral-200 text-neutral-700 text-center">
                            Labor Wages
                          </button>
                          <button className="py-1.5 px-2 text-xs font-medium rounded-lg bg-white border border-neutral-200 text-neutral-700 text-center">
                            Logistics
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-neutral-600 block mb-1">
                          Amount (₹)
                        </label>
                        <input
                          type="text"
                          readOnly
                          value="₹34,500"
                          className="w-full px-3 py-2 text-sm font-bold font-mono rounded-xl bg-white border border-neutral-200 text-neutral-900"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-neutral-600 block mb-1">
                          Vendor / Store
                        </label>
                        <input
                          type="text"
                          readOnly
                          value="Calcutta Plywood & Hardware Emporium"
                          className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-neutral-200 text-neutral-700"
                        />
                      </div>

                      <button
                        onClick={handleQuickAdd}
                        className="w-full py-2.5 rounded-full bg-black text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Log Expense in 8 Seconds</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-neutral-200 bg-white flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-neutral-800 block mb-1">
                        Why Site Logging Beats Excel Every Single Time
                      </span>
                      <p className="text-xs text-neutral-500 mb-3">
                        When expenses wait for Sunday night Excel entry, 20% of bills are lost, forgotten, or misplaced in WhatsApp chats.
                      </p>
                      <div className="space-y-2.5 text-xs text-neutral-700">
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>Instant camera receipt OCR & photo backup</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>Direct assignment to project room & BOQ item</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>Automatic deduction from client cash advances</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>Live notification when cost approaches budget cap</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                      <span>Syncs directly to Supabase Ledger</span>
                      <span className="text-emerald-600 font-semibold">● 100% Cloud Synced</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
