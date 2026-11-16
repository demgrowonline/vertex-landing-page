"use client";

import React, { useState } from "react";
import {
  Mic,
  Receipt,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Layers,
  Clock,
  ShieldCheck,
  Smartphone,
  Cpu,
  Database,
  Building,
} from "lucide-react";

export function DistinctiveEngines() {
  const [activeEngine, setActiveEngine] = useState<number>(0);

  const engines = [
    {
      id: "voice-takeoff",
      number: "01",
      badge: "Speed Advantage",
      title: "5-Minute Voice-to-Quote Takeoff",
      highlight: "From spoken site walk-through to complete 3-tier client proposal before you reach your car.",
      description:
        "Speak your observations into your phone while inspecting the bare flat. Groq Whisper AI transcribes and structures your spoken requirements directly into room assemblies, finishes, quantities, and line items.",
      metric: "95% Reduction in Quoting Time",
      metricSub: "From 4 days in Excel to 5 minutes on-site",
      features: [
        "Turns spoken Hindi/English site notes into structured BOQs",
        "Auto-generates 3 standardized tiers: Essential, Signature, Bespoke Luxe",
        "Deterministic pricing mapped to verified supplier benchmarks (CenturyPly, Hettich, Asian Paints)",
        "Zero manual formula errors or broken spreadsheet cells",
      ],
      uiPreview: {
        type: "voice",
        transcript: "Master bedroom 14 by 12, need 8-foot sliding wardrobe in Century BWR with 1mm Royalé Touche acrylic finish, Hettich soft-close channels, false ceiling with Saint-Gobain gypsum and warm white cove light.",
        output: [
          { room: "Master Bedroom", item: "Sliding Wardrobe (8x7 ft)", tier: "Signature", spec: "CenturyPly BWR IS 710 + Hettich Soft-Close", rate: "₹2,150/sq.ft", total: "₹1,20,400" },
          { room: "Master Bedroom", item: "Cove False Ceiling", tier: "Signature", spec: "Saint-Gobain Gyproc + Profile Lighting", rate: "₹115/sq.ft", total: "₹19,320" },
        ],
      },
    },
    {
      id: "mobile-expense",
      number: "02",
      badge: "Site Adoption",
      title: "Sub-10-Second Mobile Site Logger",
      highlight: "The only site logger simple enough that on-site supervisors actually use it every single day.",
      description:
        "Construction and interior supervisors will never adopt complex desktop software. Vertex OS runs instantly on any smartphone browser with 3 simple taps: Category, Amount, Vendor Receipt. Done in 8 seconds.",
      metric: "< 10 Seconds",
      metricSub: "Average time to record a site expense on mobile",
      features: [
        "1-tap receipt capture with camera OCR",
        "Categorizes Vendor Materials, Trade Wages, and Site Logistics",
        "Directly assigns costs to specific rooms and contract line items",
        "Automatically debits from client site cash advances",
      ],
      uiPreview: {
        type: "expense",
        items: [
          { vendor: "Bhagwati Timber Yard", trade: "Materials", note: "19mm Calibrated Marine Ply (14 sheets)", cost: "₹44,800", speed: "Logged in 6s" },
          { vendor: "Munna Painter Team", trade: "Labor Wages", note: "Lambi Putty 1st Coat Labor (4 workers)", cost: "₹12,000", speed: "Logged in 8s" },
          { vendor: "Shree Ganesh Freight", trade: "Logistics", note: "High-rise lift & manual unloading charge", cost: "₹3,500", speed: "Logged in 5s" },
        ],
      },
    },
    {
      id: "margin-guard",
      number: "03",
      badge: "Financial Moat",
      title: "Real-Time Margin Guard & P&L",
      highlight: "Know your exact net profit on Day 14 of site execution, not 3 months after handover.",
      description:
        "Vertex OS continuously reconciles Quoted Contract Value vs. Incurred Costs vs. Collected Client Advances. If carpentry materials or labor wages drift beyond the projected margin threshold, you are alerted immediately.",
      metric: "38.4% Realized Margin",
      metricSub: "Average gross margin retained by Vertex studios",
      features: [
        "Live status indicators: Thriving (35%+), Healthy, Warning, Critical",
        "Instant cash position: Client Advances vs. Total Site Expenses Paid",
        "Automated milestone billing alerts linked to project progress",
        "Exportable P&L statements for studio accounting and tax audits",
      ],
      uiPreview: {
        type: "pnl",
        stats: [
          { label: "Approved Contract", value: "₹48,50,000", change: "+₹3.2L Rev." },
          { label: "Total Incurred Costs", value: "₹30,07,000", change: "62% Budget Used" },
          { label: "Protected Net Profit", value: "+₹18,43,000", change: "38.0% Net Margin" },
          { label: "Net Cash In Hand", value: "+₹8,43,000", change: "Positive Cashflow" },
        ],
      },
    },
    {
      id: "proposal-conversion",
      number: "04",
      badge: "Operational Bridge",
      title: "1-Click Proposal Conversion",
      highlight: "Quotation and site execution are the same business object. Zero retyping. Zero lost scope.",
      description:
        "Proposals begin unattached to any project. The moment the client signs off and pays the advance, 1 click creates the active project workspace, automatically populating the BOQ, hardware warranties, milestones, and contractor work orders.",
      metric: "100% Data Continuity",
      metricSub: "Zero double-entry between estimating and execution",
      features: [
        "Idempotent database conversion protects against duplicate projects",
        "Imports approved rooms, items, unit prices, and quantities directly into site budget",
        "Client lookbook & warranty specification sheet auto-generated",
        "Locks the financial baseline so scope revisions require explicit client sign-off",
      ],
      uiPreview: {
        type: "conversion",
        steps: [
          { title: "Client Signs Off on Signature Tier", status: "Completed", time: "10:30 AM" },
          { title: "Advance Payment Verified (₹12.5 Lakhs)", status: "Completed", time: "10:32 AM" },
          { title: "Active Project Created: Alipore Penthouse", status: "Active Now", time: "Instant" },
          { title: "BOQ & Budget Caps Seeded across 6 Rooms", status: "Synced", time: "Instant" },
        ],
      },
    },
  ];

  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#FBFBFD] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-[11px] font-semibold text-neutral-800 uppercase tracking-wider mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111113] leading-tight mb-4">
            Built for what interior studios actually need.{" "}
            <span className="text-neutral-400 font-medium block sm:inline">
              What others could never provide.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Generic CRM tools don't understand timber grades. Construction ERPs take 6 months of training and cost $10K. Vertex OS is purposefully engineered for turnkey interior design firms.
          </p>
        </div>

        {/* Engine Switcher Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {engines.map((eng, idx) => (
            <button
              key={eng.id}
              onClick={() => setActiveEngine(idx)}
              className={`btn-press text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between min-h-[108px] ${
                activeEngine === idx
                  ? "bg-black text-white border-black shadow-lg"
                  : "bg-white text-neutral-800 border-neutral-200/80 hover:border-neutral-300 hover:bg-neutral-50/60"
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`text-[11px] font-mono font-bold ${
                      activeEngine === idx ? "text-neutral-400" : "text-neutral-400"
                    }`}
                  >
                    ENGINE {eng.number}
                  </span>
                  {activeEngine === idx && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>
                <div className="text-xs sm:text-sm font-bold tracking-tight line-clamp-2">
                  {eng.title}
                </div>
              </div>
              <div
                className={`text-[11px] font-medium mt-3 pt-2 border-t ${
                  activeEngine === idx
                    ? "border-neutral-800 text-neutral-300"
                    : "border-neutral-100 text-neutral-500"
                }`}
              >
                {eng.badge}
              </div>
            </button>
          ))}
        </div>

        {/* The Active Engine Showcase Monolith */}
        <div className="rounded-3xl bg-white border border-black/5 p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Narrative & Specifics (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-[11px] font-semibold text-neutral-700">
                <span>ENGINE {engines[activeEngine].number}</span>
                <span>•</span>
                <span>{engines[activeEngine].badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 leading-snug">
                {engines[activeEngine].title}
              </h3>

              <p className="text-sm font-semibold text-neutral-800 leading-relaxed">
                {engines[activeEngine].highlight}
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {engines[activeEngine].description}
              </p>

              {/* The Key Metric Callout */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-between">
                <div>
                  <span className="text-xl sm:text-2xl font-extrabold text-black font-mono">
                    {engines[activeEngine].metric}
                  </span>
                  <span className="text-xs text-neutral-500 block">
                    {engines[activeEngine].metricSub}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2 pt-2">
                {engines[activeEngine].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700">
                    <span className="text-black font-bold mt-0.5">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Component Proof (6 cols) */}
            <div className="lg:col-span-6 bg-neutral-50/80 rounded-2xl p-5 border border-neutral-200/70">
              {/* Type: Voice Preview */}
              {engines[activeEngine].uiPreview.type === "voice" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700 mb-2">
                      <Mic className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                      <span>Live Site Dictation Audio Input</span>
                    </div>
                    <p className="text-xs text-neutral-600 italic bg-neutral-50 p-3 rounded-lg border border-neutral-100 font-serif">
                      "{engines[activeEngine].uiPreview.transcript}"
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
                    <div className="flex items-center justify-between text-xs font-semibold text-neutral-700 mb-3">
                      <span>Generated 3-Tier Line Items & BOQ</span>
                      <span className="text-emerald-600 font-mono text-[11px]">Groq Whisper 2.1s</span>
                    </div>
                    <div className="space-y-2">
                      {engines[activeEngine].uiPreview.output?.map((out, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-neutral-50 text-xs flex justify-between items-center border border-neutral-100">
                          <div>
                            <span className="font-semibold text-neutral-900 block">{out.item}</span>
                            <span className="text-[11px] text-neutral-500">{out.spec}</span>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-neutral-900 font-mono block">{out.total}</span>
                            <span className="text-[10px] text-neutral-400">{out.rate}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Type: Expense Preview */}
              {engines[activeEngine].uiPreview.type === "expense" && (
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-neutral-700 mb-2 flex items-center justify-between">
                    <span>Recent Micro-Expenses Logged On Site</span>
                    <span className="text-[11px] text-emerald-600 font-medium">● 3-Tap Mobile UI</span>
                  </div>
                  {engines[activeEngine].uiPreview.items?.map((it, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center font-bold text-neutral-700">
                          <Receipt className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-semibold text-neutral-900 block">{it.vendor}</span>
                          <span className="text-[11px] text-neutral-500">{it.note}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold font-mono text-neutral-900 block">{it.cost}</span>
                        <span className="text-[10px] text-emerald-600 font-semibold">{it.speed}</span>
                      </div>
                    </div>
                  ))}
                  <div className="p-3 rounded-xl bg-neutral-900 text-white text-xs flex items-center justify-between">
                    <span>Supervisor Mobile Experience</span>
                    <span className="text-emerald-400 font-mono text-[11px]">Zero Training Required</span>
                  </div>
                </div>
              )}

              {/* Type: P&L Preview */}
              {engines[activeEngine].uiPreview.type === "pnl" && (
                <div className="space-y-4">
                  <div className="text-xs font-semibold text-neutral-700 mb-2">
                    Live Real-Time P&L Summary (Alipore Penthouse)
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {engines[activeEngine].uiPreview.stats?.map((st, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-sm">
                        <span className="text-[11px] text-neutral-400 font-medium block mb-1">{st.label}</span>
                        <span className="text-base font-bold text-neutral-900 font-mono block">{st.value}</span>
                        <span className="text-[10px] text-emerald-600 font-semibold mt-1 block">{st.change}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Margin status: <strong>Thriving</strong>. All labor and supplier invoices within budget.</span>
                  </div>
                </div>
              )}

              {/* Type: Conversion Preview */}
              {engines[activeEngine].uiPreview.type === "conversion" && (
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-neutral-700 mb-2">
                    Proposal $\rightarrow$ Active Project Conversion Audit
                  </div>
                  <div className="space-y-2">
                    {engines[activeEngine].uiPreview.steps?.map((stp, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">
                            {i + 1}
                          </div>
                          <span className="font-medium text-neutral-800">{stp.title}</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                          {stp.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-100 text-neutral-600 text-xs text-center">
                    Idempotent transaction verified: `projectId` safely linked with zero data duplication.
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
