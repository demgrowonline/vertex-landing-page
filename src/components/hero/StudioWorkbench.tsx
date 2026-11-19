"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Smartphone,
  Receipt,
  Plus,
  CheckCircle2,
  ShieldCheck,
  Send,
  FileText,
  Search,
  Check,
  BedDouble,
  Sofa,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface StudioWorkbenchProps {
  onOpenTrial?: () => void;
}

type TabType = "showcase" | "client-view" | "site-tracking";
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
  const [activeTab, setActiveTab] = useState<TabType>("showcase");
  const [selectedTier, setSelectedTier] = useState<TierType>("signature");
  const [activeCategory, setActiveCategory] = useState<string>("All");
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
      vendor: "Metro Paints Depot",
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

  const categories = ["All", "Master Suite", "Living Room", "Modular Kitchen", "Finishes"];

  return (
    <div id="workbench" className="relative mx-auto max-w-5xl text-left">
      
      {/* Floating Mobbin-style Notification Status Pill */}
      <div className="flex justify-center -mb-5 relative z-20">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-medium shadow-xl border border-neutral-800">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {clientApproved
                ? "Quote #VX-4029 signed & approved by client"
                : quoteSent
                ? "Quote #VX-4029 delivered to Mr. Singhania on WhatsApp"
                : "AI Quote #VX-4029 ready · 4 mins from site voice notes"}
            </span>
          </span>
          <button
            onClick={() => setActiveTab(activeTab === "client-view" ? "showcase" : "client-view")}
            className="px-2.5 py-1 rounded-full bg-white text-neutral-950 font-semibold text-[11px] hover:bg-neutral-200 transition-colors"
          >
            {activeTab === "client-view" ? "Edit Quote" : "Client View"}
          </button>
        </div>
      </div>

      {/* Main Mobbin-Style Frame Container */}
      <div className="rounded-3xl bg-[#f4f4f6] border border-neutral-200/80 p-4 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-neutral-900">
        
        {/* Frame Top Navigation & Category Taxonomies */}
        <div className="pt-4 pb-5 border-b border-neutral-200/60 flex flex-wrap items-center justify-between gap-3">
          
          {/* Mode Switcher Tabs */}
          <div className="inline-flex items-center p-1 bg-white rounded-full border border-neutral-200/80 shadow-xs text-xs font-medium">
            <button
              onClick={() => setActiveTab("showcase")}
              className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                activeTab === "showcase"
                  ? "bg-black text-white shadow-xs"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Quote Studio</span>
            </button>
            <button
              onClick={() => setActiveTab("client-view")}
              className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                activeTab === "client-view"
                  ? "bg-black text-white shadow-xs"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Client Proposal</span>
            </button>
            <button
              onClick={() => setActiveTab("site-tracking")}
              className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                activeTab === "site-tracking"
                  ? "bg-black text-white shadow-xs"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              <Receipt className="w-3.5 h-3.5" />
              <span>Site Ledger</span>
            </button>
          </div>

          {/* Tier Switcher (Essential, Signature, Luxury) */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-neutral-200/80 text-xs font-medium">
            {(["essential", "signature", "architectural"] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-3 py-1 rounded-full capitalize transition-all ${
                  selectedTier === tier
                    ? "bg-neutral-100 text-black font-semibold shadow-xs"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                {tier === "signature" ? "Signature Tier" : tier}
              </button>
            ))}
          </div>

        </div>

        {/* Categories Bar (Just like Mobbin's filter row) */}
        {activeTab === "showcase" && (
          <div className="py-3 flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? "bg-neutral-900 text-white font-medium"
                      : "bg-white/80 text-neutral-600 hover:bg-white hover:text-black border border-neutral-200/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200/80 text-neutral-400 text-xs">
              <Search className="w-3.5 h-3.5" />
              <span>CenturyPly, Hettich, Saint-Gobain</span>
            </div>
          </div>
        )}

        {/* VIEW 1: Mobbin-Style 3-Card Visual Grid */}
        {activeTab === "showcase" && (
          <div className="pt-2 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Card 1: Master Bedroom */}
              <div className="bg-white rounded-2xl border border-neutral-200/80 p-3 shadow-xs hover:shadow-md transition-all group">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-3 bg-neutral-100">
                  <Image
                    src="/assets/master_bedroom.jpg"
                    alt="Master Bedroom Suite"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-white font-semibold text-[11px]">
                      {selectedTier === "essential" ? "₹84,000" : selectedTier === "signature" ? "₹1,20,400" : "₹1,76,000"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800 shrink-0 mt-0.5">
                    <BedDouble className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-semibold text-neutral-950 truncate">
                      Master Bedroom Suite
                    </h4>
                    <p className="text-[11px] text-neutral-500 leading-snug line-clamp-2 mt-0.5">
                      {selectedTier === "essential"
                        ? "IS 303 MR Plywood · 0.8mm Matte Laminate · Ebco channels"
                        : selectedTier === "signature"
                        ? "CenturyPly Club Prime (IS 710) · 1mm Acrylic · Hettich Quadro"
                        : "Natural Teak Veneer · PU Matt · Blum Servo-Drive"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Living Room */}
              <div className="bg-white rounded-2xl border border-neutral-200/80 p-3 shadow-xs hover:shadow-md transition-all group">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-3 bg-neutral-100">
                  <Image
                    src="/assets/living_room.jpg"
                    alt="Living and Dining Room"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-white font-semibold text-[11px]">
                      {selectedTier === "essential" ? "₹1,42,000" : selectedTier === "signature" ? "₹1,94,250" : "₹2,65,000"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800 shrink-0 mt-0.5">
                    <Sofa className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-semibold text-neutral-950 truncate">
                      Drawing &amp; Dining Hall
                    </h4>
                    <p className="text-[11px] text-neutral-500 leading-snug line-clamp-2 mt-0.5">
                      Italian Botticino polish · Saint-Gobain Gyproc false ceiling · Concealed warm LED profiles
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Modular Kitchen */}
              <div className="bg-white rounded-2xl border border-neutral-200/80 p-3 shadow-xs hover:shadow-md transition-all group">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-3 bg-neutral-100">
                  <Image
                    src="/assets/modular_kitchen.jpg"
                    alt="Modular Kitchen"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-white font-semibold text-[11px]">
                      {selectedTier === "essential" ? "₹2,10,000" : selectedTier === "signature" ? "₹2,85,000" : "₹4,20,000"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800 shrink-0 mt-0.5">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-semibold text-neutral-950 truncate">
                      Modular Island Kitchen
                    </h4>
                    <p className="text-[11px] text-neutral-500 leading-snug line-clamp-2 mt-0.5">
                      BWR Marine core · Acrylic high-gloss · 6 soft-close tandem drawers · 10-Yr warranty
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Summary Bar inside the Frame */}
            <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-black font-bold text-sm">
                  ₹
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold tracking-tight text-neutral-950">
                      ₹{currentTierData.contract.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      +{currentTierData.pct} Studio Profit
                    </span>
                  </div>
                  <span className="text-xs text-neutral-400">
                    The Grand Penthouse 402 · 3,450 sq.ft Turnkey Quote
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setActiveTab("client-view")}
                  className="rounded-full text-xs font-medium border-neutral-200 hover:bg-neutral-100 text-neutral-800"
                >
                  <span>Preview Client View</span>
                </Button>

                <Button
                  size="sm"
                  onClick={handleSendQuote}
                  className="rounded-full text-xs font-medium bg-black text-white hover:bg-neutral-800 shadow-xs px-4"
                >
                  {quoteSent ? (
                    <>
                      <Check data-icon="inline-start" className="text-emerald-400" />
                      <span>Sent on WhatsApp!</span>
                    </>
                  ) : (
                    <>
                      <Send data-icon="inline-start" />
                      <span>Send to Client</span>
                    </>
                  )}
                </Button>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: Client Proposal View (What Client Receives) */}
        {activeTab === "client-view" && (
          <div className="pt-2 space-y-4">
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 sm:p-6 shadow-xs">
              
              <div className="flex flex-wrap items-center justify-between border-b border-neutral-100 pb-4 mb-4 gap-3">
                <div>
                  <span className="text-xs uppercase font-medium tracking-wider text-neutral-400 block">
                    Client Proposal
                  </span>
                  <h3 className="text-lg font-bold text-neutral-950">
                    The Grand Penthouse 402 · Alipore Residences
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Prepared for Mr. Vikram Singhania · Valid for 14 days
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-400 block">Total Investment</span>
                  <span className="text-2xl font-bold text-neutral-950">
                    ₹{currentTierData.contract.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Milestone Schedule */}
              <div className="mb-5">
                <span className="text-xs font-semibold text-neutral-700 block mb-2">
                  Verified Payment Milestones
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/60">
                    <span className="text-neutral-500 block">1. Advance (40%)</span>
                    <span className="font-bold text-neutral-900 mt-1 block">
                      ₹{(currentTierData.contract * 0.4).toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-medium">At signing</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/60">
                    <span className="text-neutral-500 block">2. Carpentry (30%)</span>
                    <span className="font-bold text-neutral-900 mt-1 block">
                      ₹{(currentTierData.contract * 0.3).toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-neutral-400">Carcase erect</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/60">
                    <span className="text-neutral-500 block">3. Finishes (20%)</span>
                    <span className="font-bold text-neutral-900 mt-1 block">
                      ₹{(currentTierData.contract * 0.2).toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-neutral-400">Paint & glass</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/60">
                    <span className="text-neutral-500 block">4. Handover (10%)</span>
                    <span className="font-bold text-neutral-900 mt-1 block">
                      ₹{(currentTierData.contract * 0.1).toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-neutral-400">Key handover</span>
                  </div>
                </div>
              </div>

              {/* 1-Tap Client Approval Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-neutral-100">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Includes 10-year warranty certificate on CenturyPly & Hettich.</span>
                </div>

                <Button
                  onClick={() => {
                    setClientApproved(true);
                    setTimeout(() => setActiveTab("site-tracking"), 900);
                  }}
                  className={`w-full sm:w-auto rounded-full font-medium text-xs px-5 h-9 ${
                    clientApproved
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-black text-white hover:bg-neutral-800"
                  }`}
                >
                  {clientApproved ? (
                    <>
                      <Check data-icon="inline-start" />
                      <span>Client Approved & Signed!</span>
                    </>
                  ) : (
                    <span>Approve & Sign Quote (Client 1-Tap)</span>
                  )}
                </Button>
              </div>

            </div>
          </div>
        )}

        {/* VIEW 3: Site Ledger & Project Tracking */}
        {activeTab === "site-tracking" && (
          <div className="pt-2 space-y-4">
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-xs">
              
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-neutral-100 mb-3">
                <div>
                  <h4 className="text-sm font-semibold text-neutral-950">
                    Site Expense Ledger (Protecting Quoted Margin)
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Track daily plywood bills and carpenter muster rolls to ensure the {marginPercentage}% margin stays protected.
                  </p>
                </div>

                <Button
                  onClick={handleSimulateLog}
                  disabled={hasLoggedExtra}
                  size="xs"
                  className={`rounded-full ${
                    hasLoggedExtra
                      ? "bg-neutral-100 text-neutral-400"
                      : "bg-black text-white hover:bg-neutral-800"
                  }`}
                >
                  <Plus data-icon="inline-start" />
                  <span>{hasLoggedExtra ? "Bill Added" : "+ Log Site Slip"}</span>
                </Button>
              </div>

              {/* Transactions List */}
              <div className="divide-y divide-neutral-100 text-xs">
                {items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="py-2.5 flex items-center justify-between hover:bg-neutral-50 px-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                        <Receipt className="w-3.5 h-3.5" />
                      </div>
                      <div className="truncate">
                        <span className="font-medium text-neutral-900 block truncate">
                          {item.title}
                        </span>
                        <span className="text-neutral-400 text-[11px]">
                          {item.vendor} · {item.trade}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0 pl-3">
                      <span className="font-semibold text-neutral-900 block tabular-nums">
                        ₹{item.amount.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[11px] text-emerald-600 flex items-center justify-end gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified {item.timeAgo}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slip details preview */}
              {selectedItem && (
                <div className="mt-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-between text-xs text-neutral-600">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Audit Voucher: {selectedItem.slipNumber} · Verified by {selectedItem.verifiedBy}</span>
                  </div>
                  <Badge variant="outline" className="text-[10px] bg-white text-neutral-700 border-neutral-200">
                    Tax Invoice Verified
                  </Badge>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}