"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Smartphone,
  Receipt,
  Plus,
  CheckCircle2,
  ShieldCheck,
  Send,
  FileText,
  Mic,
  ArrowRight,
  Share2,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface StudioWorkbenchProps {
  onOpenTrial?: () => void;
}

type TabType = "ai-quote" | "client-view" | "site-tracking";
type TierType = "essential" | "signature" | "architectural";

interface LedgerItem {
  id: string;
  vendor: string;
  title: string;
  trade: string;
  amount: number;
  timeAgo: string;
  slipNumber: string;
  verifiedBy: string;
}

export function StudioWorkbench({ onOpenTrial }: StudioWorkbenchProps) {
  const [activeTab, setActiveTab] = useState<TabType>("ai-quote");
  const [selectedTier, setSelectedTier] = useState<TierType>("signature");
  const [selectedItem, setSelectedItem] = useState<LedgerItem | null>(null);
  const [quoteSent, setQuoteSent] = useState(false);
  const [clientApproved, setClientApproved] = useState(false);

  // Initial site expenses for project tracking
  const [items, setItems] = useState<LedgerItem[]>([
    {
      id: "exp-101",
      vendor: "Bhagwati Timber Depot",
      title: "CenturyPly 19mm Club Prime BWR (28 sheets)",
      trade: "Carpentry",
      amount: 89600,
      timeAgo: "18 minutes ago",
      slipNumber: "SLIP-4029-088",
      verifiedBy: "Subhash (Site Eng.)",
    },
    {
      id: "exp-102",
      vendor: "Ramesh Mistry Crew",
      title: "Master Carpentry Weekly Wage (Week 4 muster roll)",
      trade: "Labor wages",
      amount: 42000,
      timeAgo: "2 hours ago",
      slipNumber: "SLIP-4029-087",
      verifiedBy: "Subhash (Site Eng.)",
    },
    {
      id: "exp-103",
      vendor: "National Hardware Hub",
      title: "Hettich Sensys 110-degree Soft-Close Hinges (64 pcs)",
      trade: "Hardware",
      amount: 18400,
      timeAgo: "4 hours ago",
      slipNumber: "SLIP-4029-086",
      verifiedBy: "Subhash (Site Eng.)",
    },
    {
      id: "exp-104",
      vendor: "Jai Maa Heavy Logistics",
      title: "High-Rise Balcony Crane Lift and Transit Clearance",
      trade: "Site freight",
      amount: 8500,
      timeAgo: "Yesterday",
      slipNumber: "SLIP-4029-085",
      verifiedBy: "Subhash (Site Eng.)",
    },
  ]);

  const [hasLoggedExtra, setHasLoggedExtra] = useState(false);

  // Dynamic calculations based on selected tier
  const tierValues = {
    essential: { contract: 3850000, margin: 1232000, pct: "32.0%" },
    signature: { contract: 5420000, margin: 1963200, pct: "36.2%" },
    architectural: { contract: 7680000, margin: 3379200, pct: "44.0%" },
  };

  const currentTierData = tierValues[selectedTier];
  const totalIncurred = items.reduce((sum, item) => sum + item.amount, 3300000);
  const netMargin = currentTierData.contract - totalIncurred;
  const marginPercentage = ((netMargin / currentTierData.contract) * 100).toFixed(1);

  const handleSimulateLog = () => {
    if (hasLoggedExtra) return;
    const newItem: LedgerItem = {
      id: "exp-105",
      vendor: "Metro Paints and Coating Depot",
      title: "Asian Paints Royale Aspira Basecoat Primer (60L)",
      trade: "Painting",
      amount: 21600,
      timeAgo: "Just now",
      slipNumber: "SLIP-4029-089",
      verifiedBy: "WhatsApp OCR Bot",
    };
    setItems([newItem, ...items]);
    setSelectedItem(newItem);
    setHasLoggedExtra(true);
  };

  const handleSendQuote = () => {
    setQuoteSent(true);
    setTimeout(() => {
      setActiveTab("client-view");
    }, 900);
  };

  return (
    <div id="workbench" className="relative mx-auto max-w-5xl">
      {/* Workbench Container */}
      <div className="rounded-2xl bg-[#0f0f13] border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.6)] overflow-hidden text-neutral-100">
        
        {/* Authentic Studio Header Chrome */}
        <div className="px-5 py-3.5 bg-[#14141a]/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-white text-black">
              Vertex Studio
            </span>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-200">
              <span className="font-semibold text-white">The Grand Penthouse 402</span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-400">3,450 sq ft turnkey</span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-400">Client: Mr. Singhania</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <Badge variant="outline" className="gap-1.5 px-2.5 py-1 rounded-md bg-white/5 text-neutral-200 font-medium border-white/10">
              <ShieldCheck className="size-3.5 text-emerald-400" />
              <span>{currentTierData.pct} target margin</span>
            </Badge>
            <span className="hidden sm:inline-block text-neutral-400">
              Proposal #VX-4029
            </span>
          </div>
        </div>

        {/* Primary Financial & Operational Telemetry Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10 border-b border-white/10 bg-[#121217]">
          
          <div className="p-4 sm:p-5">
            <span className="text-xs font-medium text-neutral-400 block mb-1">
              AI Quotation Total
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white tabular-nums">
                ₹{currentTierData.contract.toLocaleString("en-IN")}
              </span>
              <Badge variant="outline" className="text-xs text-neutral-300 font-semibold bg-white/10 border-white/10 capitalize">
                {selectedTier}
              </Badge>
            </div>
            <span className="text-xs text-neutral-400 block mt-1">
              3,450 sq.ft complete interior
            </span>
          </div>

          <div className="p-4 sm:p-5">
            <span className="text-xs font-medium text-neutral-400 block mb-1">
              AI Generation Speed
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white tabular-nums">
                4 Minutes
              </span>
              <Badge variant="outline" className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 border-emerald-500/20">
                Ready to Send
              </Badge>
            </div>
            <span className="text-xs text-neutral-400 block mt-1">
              Zero manual Excel typing
            </span>
          </div>

          <div className="p-4 sm:p-5 bg-white text-neutral-950">
            <span className="text-xs font-medium text-neutral-600 block mb-1">
              Protected Studio Margin
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-black tabular-nums">
                +₹{currentTierData.margin.toLocaleString("en-IN")}
              </span>
              <Badge className="text-xs text-emerald-700 font-bold bg-emerald-100 hover:bg-emerald-100">
                {currentTierData.pct}
              </Badge>
            </div>
            <span className="text-xs text-neutral-600 block mt-1">
              Guaranteed in quotation
            </span>
          </div>

          <div className="p-4 sm:p-5">
            <span className="text-xs font-medium text-neutral-400 block mb-1">
              Client Quotation State
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white tabular-nums">
                {clientApproved ? "Approved" : quoteSent ? "Sent to Client" : "Ready to Send"}
              </span>
              <Badge variant="outline" className={`text-xs font-semibold ${
                clientApproved
                  ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                  : quoteSent
                  ? "text-blue-400 bg-blue-500/10 border-blue-500/20"
                  : "text-neutral-300 bg-white/10 border-white/10"
              }`}>
                {clientApproved ? "Signed" : quoteSent ? "WhatsApp" : "Draft"}
              </Badge>
            </div>
            <span className="text-xs text-neutral-400 block mt-1">
              {clientApproved ? "Handover milestone active" : "Viewed 2 mins ago"}
            </span>
          </div>
        </div>

        {/* Tab Navigation with shadcn Tabs */}
        <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as TabType)}>
          <div className="flex items-center justify-between px-5 pt-2 border-b border-white/10 bg-[#0f0f13]">
            <TabsList className="bg-transparent p-0 gap-1 h-auto border-0">
              <TabsTrigger
                value="ai-quote"
                className="pb-3 px-3 text-xs font-semibold rounded-none border-b-2 border-transparent data-active:border-white data-active:text-white text-neutral-400 hover:text-white flex items-center gap-1.5 bg-transparent shadow-none"
              >
                <Sparkles className="size-3.5 text-amber-400" />
                <span>1. AI Quote Studio</span>
              </TabsTrigger>

              <TabsTrigger
                value="client-view"
                className="pb-3 px-3 text-xs font-semibold rounded-none border-b-2 border-transparent data-active:border-white data-active:text-white text-neutral-400 hover:text-white flex items-center gap-1.5 bg-transparent shadow-none"
              >
                <Smartphone className="size-3.5 text-blue-400" />
                <span>2. What Client Receives</span>
              </TabsTrigger>

              <TabsTrigger
                value="site-tracking"
                className="pb-3 px-3 text-xs font-semibold rounded-none border-b-2 border-transparent data-active:border-white data-active:text-white text-neutral-400 hover:text-white flex items-center gap-1.5 bg-transparent shadow-none"
              >
                <Receipt className="size-3.5 text-emerald-400" />
                <span>3. Project & Site Control</span>
              </TabsTrigger>
            </TabsList>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400 pb-2">
              <span>Interactive Live Demo</span>
            </div>
          </div>
        </Tabs>

        {/* Tab Content Panes */}
        <div className="p-5 sm:p-6 bg-[#0f0f13] min-h-[380px]">
          
          {/* TAB 1: AI Quote Studio */}
          {activeTab === "ai-quote" && (
            <div className="space-y-5">
              
              {/* Spoken Site Notes Transcription Box */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-white">
                      <Mic className="size-3.5 text-amber-400" />
                    </div>
                    <span className="text-xs font-semibold text-white">
                      Spoken Site Inspection Notes (Voice to Quote)
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs text-neutral-400 bg-white/5 border-white/10">
                    Transcribed in 6 seconds
                  </Badge>
                </div>
                <p className="text-xs text-neutral-300 italic font-mono bg-black/40 p-3 rounded-lg border border-white/5 leading-relaxed">
                  &ldquo;Master bedroom 14 by 12: 8-foot sliding wardrobe in Century BWR IS 710 with 1mm Royale Touche acrylic finish, Hettich Quadro soft-close channels. Living room: Italian Botticino marble polish and Saint-Gobain cove false ceiling with warm white lighting. Modular kitchen: Acrylic shutters with soft-close tandem boxes.&rdquo;
                </p>
              </div>

              {/* 3-Tier Multi-Option Switcher */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      AI Generated 3-Tier Quotation
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Clients choose a tier instead of bargaining your profit away.
                    </p>
                  </div>

                  <div className="inline-flex p-1 bg-white/5 rounded-lg border border-white/10 gap-1">
                    {(["essential", "signature", "architectural"] as const).map((tier) => (
                      <Button
                        key={tier}
                        variant="ghost"
                        size="xs"
                        onClick={() => setSelectedTier(tier)}
                        className={`capitalize font-semibold rounded-md ${
                          selectedTier === tier
                            ? "bg-white text-black hover:bg-white hover:text-black shadow-sm"
                            : "text-neutral-400 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {tier === "signature" ? "Signature Line (Recommended)" : tier}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Itemized Table of the AI Quote */}
                <div className="border border-white/10 rounded-xl overflow-hidden divide-y divide-white/10">
                  <div className="p-3 bg-white/[0.02] flex items-center justify-between text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    <span>Scope & Material Specification</span>
                    <span className="text-right">Price</span>
                  </div>

                  <div className="p-3.5 sm:px-4 sm:py-3 flex items-center justify-between text-xs hover:bg-white/[0.03] transition-colors">
                    <div className="min-w-0 pr-3">
                      <span className="font-semibold text-white block">
                        Master Bedroom: 8x7 ft Sliding Wardrobe
                      </span>
                      <span className="text-neutral-400">
                        {selectedTier === "essential"
                          ? "IS 303 MR Grade Plywood + 0.8mm Matte Laminate + Ebco Hardware"
                          : selectedTier === "signature"
                          ? "CenturyPly Club Prime BWR (IS 710) + Royale Touche 1mm Acrylic + Hettich Quadro"
                          : "Natural Teak Veneer + PU Matt Polycoat + Blum Servo-Drive"}
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-bold text-white block tabular-nums text-sm">
                        {selectedTier === "essential" ? "₹84,000" : selectedTier === "signature" ? "₹1,20,400" : "₹1,76,000"}
                      </span>
                      <span className="text-xs text-emerald-400">Includes Hardware & Fitment</span>
                    </div>
                  </div>

                  <div className="p-3.5 sm:px-4 sm:py-3 flex items-center justify-between text-xs hover:bg-white/[0.03] transition-colors">
                    <div className="min-w-0 pr-3">
                      <span className="font-semibold text-white block">
                        Drawing & Dining: Cove False Ceiling & Profiles
                      </span>
                      <span className="text-neutral-400">
                        Saint-Gobain Gyproc 12.5mm boards, concealed perimeter LED cove, primer + 2 coats Asian Paints
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-bold text-white block tabular-nums text-sm">
                        {selectedTier === "essential" ? "₹1,42,000" : selectedTier === "signature" ? "₹1,94,250" : "₹2,65,000"}
                      </span>
                      <span className="text-xs text-emerald-400">1,850 sq.ft coverage</span>
                    </div>
                  </div>

                  <div className="p-3.5 sm:px-4 sm:py-3 flex items-center justify-between text-xs hover:bg-white/[0.03] transition-colors">
                    <div className="min-w-0 pr-3">
                      <span className="font-semibold text-white block">
                        Modular Kitchen: L-Shaped Carcase & Soft-Close Drawers
                      </span>
                      <span className="text-neutral-400">
                        BWR Marine core, boiling-water-proof inner laminate, 6 soft-close tandem drawers
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-bold text-white block tabular-nums text-sm">
                        {selectedTier === "essential" ? "₹2,10,000" : selectedTier === "signature" ? "₹2,85,000" : "₹4,20,000"}
                      </span>
                      <span className="text-xs text-emerald-400">10-Year Hardware Warranty</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom 1-Click Action Bar */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  <span>Quotation generated with verified supplier rates for CenturyPly, Hettich & Asian Paints.</span>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setActiveTab("client-view")}
                    className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                  >
                    <span>Preview Client View</span>
                  </Button>

                  <Button
                    size="sm"
                    onClick={handleSendQuote}
                    className="bg-white text-black hover:bg-neutral-200 font-semibold"
                  >
                    {quoteSent ? (
                      <>
                        <Check data-icon="inline-start" className="text-emerald-600" />
                        <span>Sent via WhatsApp!</span>
                      </>
                    ) : (
                      <>
                        <Send data-icon="inline-start" />
                        <span>Send to Client on WhatsApp</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: What Client Receives (Client Proposal View) */}
          {activeTab === "client-view" && (
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    What Mr. Singhania Sees on His Phone
                  </h4>
                  <p className="text-xs text-neutral-400">
                    No ugly spreadsheets. Clients receive a clean, transparent proposal they can approve in one tap.
                  </p>
                </div>

                <Badge className="text-xs bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                  Live Client Link: vertexos.app/q/singhania-402
                </Badge>
              </div>

              {/* Client Proposal Card Simulator */}
              <div className="p-5 rounded-xl bg-[#14141c] border border-white/15 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs text-neutral-400 uppercase tracking-wider block">
                      Interior Turnkey Proposal
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      The Grand Penthouse 402
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Prepared for Mr. Vikram Singhania · Valid for 14 days
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-neutral-400 block">Total Investment</span>
                    <span className="text-2xl font-bold text-white font-mono">
                      ₹{currentTierData.contract.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Milestone Payment Transparency */}
                <div>
                  <span className="text-xs font-semibold text-neutral-300 block mb-2">
                    Payment Milestones (Tied to Verified Site Work)
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-neutral-400 block">1. Advance (40%)</span>
                      <span className="font-bold text-white mt-0.5 block">
                        ₹{(currentTierData.contract * 0.4).toLocaleString("en-IN")}
                      </span>
                      <span className="text-[10px] text-emerald-400">At signing</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-neutral-400 block">2. Carpentry (30%)</span>
                      <span className="font-bold text-white mt-0.5 block">
                        ₹{(currentTierData.contract * 0.3).toLocaleString("en-IN")}
                      </span>
                      <span className="text-[10px] text-neutral-400">Carcase erect</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-neutral-400 block">3. Finishes (20%)</span>
                      <span className="font-bold text-white mt-0.5 block">
                        ₹{(currentTierData.contract * 0.2).toLocaleString("en-IN")}
                      </span>
                      <span className="text-[10px] text-neutral-400">Paint & glass</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-neutral-400 block">4. Handover (10%)</span>
                      <span className="font-bold text-white mt-0.5 block">
                        ₹{(currentTierData.contract * 0.1).toLocaleString("en-IN")}
                      </span>
                      <span className="text-[10px] text-neutral-400">Key handover</span>
                    </div>
                  </div>
                </div>

                {/* 1-Tap Client Approval Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <ShieldCheck className="size-4 text-emerald-400" />
                    <span>Includes 10-year warranty certificate on CenturyPly & Hettich.</span>
                  </div>

                  <Button
                    onClick={() => {
                      setClientApproved(true);
                      setTimeout(() => setActiveTab("site-tracking"), 900);
                    }}
                    className={`w-full sm:w-auto font-semibold ${
                      clientApproved
                        ? "bg-emerald-500 text-white hover:bg-emerald-600"
                        : "bg-white text-black hover:bg-neutral-200"
                    }`}
                  >
                    {clientApproved ? (
                      <>
                        <Check data-icon="inline-start" />
                        <span>Client Approved & Signed!</span>
                      </>
                    ) : (
                      <>
                        <span>Approve & Sign Proposal (Client 1-Tap)</span>
                        <ArrowRight data-icon="inline-end" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Site & Project Control (Secondary Priority) */}
          {activeTab === "site-tracking" && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-1">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Site Expense Ledger (Protecting Quoted Margin)
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Once the quote is signed, log every site slip from the phone to ensure you don&apos;t leak profit.
                  </p>
                </div>

                <Button
                  onClick={handleSimulateLog}
                  disabled={hasLoggedExtra}
                  size="xs"
                  className={
                    hasLoggedExtra
                      ? "bg-white/10 text-neutral-400"
                      : "bg-white text-black hover:bg-neutral-200"
                  }
                >
                  <Plus data-icon="inline-start" />
                  <span>{hasLoggedExtra ? "Bill Added" : "+ Log a New Slip"}</span>
                </Button>
              </div>

              {/* Transactions List */}
              <div className="border border-white/10 rounded-xl overflow-hidden divide-y divide-white/10">
                {items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="p-3.5 sm:px-4 sm:py-3 flex items-center justify-between text-xs hover:bg-white/[0.04] transition-colors duration-150 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 shrink-0">
                        <Receipt className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <span className="font-semibold text-white block truncate">
                          {item.title}
                        </span>
                        <span className="text-neutral-400 text-xs">
                          {item.vendor} · {item.trade}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0 pl-3">
                      <span className="font-bold text-white block tabular-nums text-sm">
                        ₹{item.amount.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-neutral-400 flex items-center justify-end gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Verified {item.timeAgo}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Slip Verification Drawer */}
              {selectedItem && (
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold text-white">
                      Active audit voucher: {selectedItem.slipNumber}
                    </span>
                    <span className="text-neutral-600">/</span>
                    <span className="text-neutral-400">
                      Signed off by {selectedItem.verifiedBy}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-neutral-300">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-xs">
                      Tax invoice verified
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-xs">
                      100% cloud backed
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}