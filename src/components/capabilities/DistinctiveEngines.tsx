"use client";

import React, { useState } from "react";
import {
  Mic,
  Receipt,
  TrendingUp,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function DistinctiveEngines() {
  const [activeEngine, setActiveEngine] = useState<number>(0);

  const engines = [
    {
      id: "voice-takeoff",
      number: "01",
      badge: "Fast Quotes",
      title: "Voice Quotes on Site",
      highlight: "Walk through the bare flat, speak into your phone, and have a finished quote ready in minutes.",
      description:
        "Speak your observations while inspecting the site. Vertex automatically turns your spoken notes into a clean estimate with current material rates.",
      metric: "Ready in Minutes",
      metricSub: "Instead of days of typing in Excel",
      features: [
        "Turns spoken site notes into a clean, itemized estimate",
        "Creates 3 clear budget options: Essential, Signature, and Luxury",
        "Includes real supplier prices for CenturyPly, Hettich, Asian Paints, and hardware",
        "Zero broken formulas or calculation mistakes",
      ],
      uiPreview: {
        type: "voice",
        transcript: "Master bedroom 14 by 12, need 8-foot sliding wardrobe in Century BWR with 1mm Royale Touche acrylic finish, Hettich soft-close channels, false ceiling with Saint-Gobain gypsum and warm white cove light.",
        output: [
          { room: "Master Bedroom", item: "Sliding Wardrobe (8x7 ft)", tier: "Signature", spec: "CenturyPly BWR IS 710 + Hettich Soft-Close", rate: "₹2,150/sq.ft", total: "₹1,20,400" },
          { room: "Master Bedroom", item: "Cove False Ceiling", tier: "Signature", spec: "Saint-Gobain Gyproc + Profile Lighting", rate: "₹115/sq.ft", total: "₹19,320" },
        ],
      },
    },
    {
      id: "mobile-expense",
      number: "02",
      badge: "Easy for Site",
      title: "Quick Mobile Site Logger",
      highlight: "Simple enough that on-site supervisors actually use it every single day.",
      description:
        "Site supervisors don't want complicated apps. Vertex runs on any phone browser in 3 simple taps: select category, enter amount, and take a photo of the bill.",
      metric: "5 Seconds",
      metricSub: "To photograph and log any site bill",
      features: [
        "1-tap receipt photo with automatic amount reading",
        "Tracks vendor bills, daily carpenter wages, and transport",
        "Assigns costs directly to the right room and item",
        "Keeps a clear ledger of site cash advances",
      ],
      uiPreview: {
        type: "expense",
        items: [
          { vendor: "Bhagwati Timber Yard", trade: "Materials", note: "19mm Calibrated Marine Ply (14 sheets)", cost: "₹44,800", speed: "Logged in 6s" },
          { vendor: "Munna Painter Team", trade: "Labor Wages", note: "Lambi Putty 1st Coat Labor (4 workers)", cost: "₹12,000", speed: "Logged in 8s" },
          { vendor: "Shree Ganesh Freight", trade: "Logistics", note: "High-rise lift and manual unloading charge", cost: "₹3,500", speed: "Logged in 5s" },
        ],
      },
    },
    {
      id: "margin-guard",
      number: "03",
      badge: "Profit Guard",
      title: "Live Daily Profit",
      highlight: "Know your exact profit today, not two months after handover.",
      description:
        "Vertex compares your contract price against actual site bills and client payments in real time. If materials or labor costs drift beyond your target, you are alerted immediately.",
      metric: "Real Profit",
      metricSub: "Updated with every site bill and wage slip",
      features: [
        "Clear status indicators: healthy, warning, or over budget",
        "Live cash position: client advances vs site money spent",
        "Alerts you before any trade or room exceeds its budget",
        "Clean financial summaries for your accountant",
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
      badge: "Zero Retyping",
      title: "1-Click Project Setup",
      highlight: "One click turns an approved quote into an active site budget.",
      description:
        "The moment your client signs off and pays the advance, 1 click creates the active project workspace, automatically setting up the material budget, checklists, and payment milestones.",
      metric: "Zero Retyping",
      metricSub: "From quotation straight into site execution",
      features: [
        "No copying numbers between different spreadsheets or files",
        "Seeds approved rooms, quantities, and budgets directly to the site",
        "Generates clean specification sheets for the client",
        "Locks the agreed budget so extra client requests are billed properly",
      ],
      uiPreview: {
        type: "conversion",
        steps: [
          { title: "Client Signs Off on Signature Tier", status: "Completed", time: "10:30 AM" },
          { title: "Advance Payment Verified (₹12.5 Lakhs)", status: "Completed", time: "10:32 AM" },
          { title: "Active Project Created: Alipore Penthouse", status: "Active Now", time: "Instant" },
          { title: "BOQ and Budget Caps Seeded across 6 Rooms", status: "Synced", time: "Instant" },
        ],
      },
    },
  ];

  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#0d0d11] relative overflow-hidden text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Built for how sites actually run.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            No complicated software. No training courses. Just simple tools your team will actually use every day.
          </p>
        </div>

        {/* Engine Switcher Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {engines.map((eng, idx) => (
            <button
              key={eng.id}
              onClick={() => setActiveEngine(idx)}
              className={`btn-press text-left p-4 sm:p-5 rounded-2xl border transition-colors duration-150 flex flex-col justify-between min-h-[108px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 active:scale-[0.98] ${
                activeEngine === idx
                  ? "bg-white text-black border-white shadow-xl"
                  : "bg-[#131318] text-neutral-300 border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`text-xs font-mono font-bold ${
                      activeEngine === idx ? "text-neutral-600" : "text-neutral-400"
                    }`}
                  >
                    ENGINE {eng.number}
                  </span>
                  {activeEngine === idx && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  )}
                </div>
                <div className="text-xs sm:text-sm font-bold tracking-tight line-clamp-2">
                  {eng.title}
                </div>
              </div>
              <div
                className={`text-xs font-medium mt-3 pt-2 border-t ${
                  activeEngine === idx
                    ? "border-neutral-200 text-neutral-700"
                    : "border-white/10 text-neutral-400"
                }`}
              >
                {eng.badge}
              </div>
            </button>
          ))}
        </div>

        {/* The Active Engine Showcase Monolith */}
        <Card className="rounded-3xl bg-[#121217] border-white/10 p-6 sm:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Narrative & Specifics (6 cols) */}
              <div className="lg:col-span-6 space-y-5">
                <Badge variant="outline" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border-white/10 text-xs font-semibold text-neutral-300">
                  <span>ENGINE {engines[activeEngine].number}</span>
                  <span className="text-neutral-500">/</span>
                  <span>{engines[activeEngine].badge}</span>
                </Badge>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
                {engines[activeEngine].title}
              </h3>

              <p className="text-sm font-semibold text-neutral-200 leading-relaxed">
                {engines[activeEngine].highlight}
              </p>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {engines[activeEngine].description}
              </p>

              {/* The Key Metric Callout */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                    {engines[activeEngine].metric}
                  </span>
                  <span className="text-xs text-neutral-400 block">
                    {engines[activeEngine].metricSub}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2 pt-2">
                {engines[activeEngine].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Component Proof (6 cols) */}
            <div className="lg:col-span-6 bg-[#171720] rounded-2xl p-5 border border-white/10">
              {/* Type: Voice Preview */}
              {engines[activeEngine].uiPreview.type === "voice" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#111116] border border-white/10 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300 mb-2">
                      <Mic className="w-3.5 h-3.5 text-rose-400" />
                      <span>Live Site Dictation Audio Input</span>
                    </div>
                    <p className="text-xs text-neutral-300 italic bg-white/[0.02] p-3 rounded-lg border border-white/5 font-serif">
                      "{engines[activeEngine].uiPreview.transcript}"
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#111116] border border-white/10 shadow-sm">
                    <div className="flex items-center justify-between text-xs font-semibold text-neutral-300 mb-3">
                      <span>Generated 3-Tier Line Items and BOQ</span>
                      <span className="text-emerald-400 font-mono text-xs">Groq Whisper 2.1s</span>
                    </div>
                    <div className="space-y-2">
                      {engines[activeEngine].uiPreview.output?.map((out, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-white/[0.03] text-xs flex justify-between items-center border border-white/5">
                          <div>
                            <span className="font-semibold text-white block">{out.item}</span>
                            <span className="text-xs text-neutral-400">{out.spec}</span>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-white font-mono block">{out.total}</span>
                            <span className="text-xs text-neutral-400">{out.rate}</span>
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
                  <div className="text-xs font-semibold text-neutral-300 mb-2 flex items-center justify-between">
                    <span>Recent Micro-Expenses Logged On Site</span>
                    <span className="text-xs text-emerald-400 font-medium">3-Tap Mobile UI</span>
                  </div>
                  {engines[activeEngine].uiPreview.items?.map((it, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#111116] border border-white/10 shadow-sm flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-neutral-300">
                          <Receipt className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-semibold text-white block">{it.vendor}</span>
                          <span className="text-xs text-neutral-400">{it.note}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold font-mono text-white block">{it.cost}</span>
                        <span className="text-xs text-emerald-400 font-semibold">{it.speed}</span>
                      </div>
                    </div>
                  ))}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs flex items-center justify-between">
                    <span>Supervisor Mobile Experience</span>
                    <span className="text-emerald-400 font-mono text-xs">Zero Training Required</span>
                  </div>
                </div>
              )}

              {/* Type: P&L Preview */}
              {engines[activeEngine].uiPreview.type === "pnl" && (
                <div className="space-y-4">
                  <div className="text-xs font-semibold text-neutral-300 mb-2">
                    Live Real-Time P&L Summary (Alipore Penthouse)
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {engines[activeEngine].uiPreview.stats?.map((st, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-[#111116] border border-white/10 shadow-sm">
                        <span className="text-xs text-neutral-400 font-medium block mb-1">{st.label}</span>
                        <span className="text-base font-bold text-white font-mono block">{st.value}</span>
                        <span className="text-xs text-emerald-400 font-semibold mt-1 block">{st.change}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Margin status: <strong className="text-emerald-200">Thriving</strong>. All labor and supplier invoices within budget.</span>
                  </div>
                </div>
              )}

              {/* Type: Conversion Preview */}
              {engines[activeEngine].uiPreview.type === "conversion" && (
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-neutral-300 mb-2">
                    Proposal Conversion Audit
                  </div>
                  <div className="space-y-2">
                    {engines[activeEngine].uiPreview.steps?.map((stp, i) => (
                      <div key={i} className="p-3 rounded-xl bg-[#111116] border border-white/10 shadow-sm flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold">
                            {i + 1}
                          </div>
                          <span className="font-medium text-neutral-200">{stp.title}</span>
                        </div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-neutral-300 border border-white/10">
                          {stp.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-neutral-300 text-xs text-center">
                    Verified transaction: project linked cleanly with zero duplicate entries.
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </section>
  );
}
