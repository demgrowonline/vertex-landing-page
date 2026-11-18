"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Receipt,
  FileSpreadsheet,
  Plus,
  CheckCircle2,
  ShieldCheck,
  Send,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface StudioWorkbenchProps {
  onOpenTrial?: () => void;
}

type TabType = "ledger" | "boq" | "matrix";
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
  const [activeTab, setActiveTab] = useState<TabType>("ledger");
  const [selectedTier, setSelectedTier] = useState<TierType>("signature");
  const [selectedItem, setSelectedItem] = useState<LedgerItem | null>(null);

  // Initial expenses
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

  // Dynamic calculations
  const totalIncurred = items.reduce((sum, item) => sum + item.amount, 3300000);
  const contractValue = 5420000;
  const netMargin = contractValue - totalIncurred;
  const marginPercentage = ((netMargin / contractValue) * 100).toFixed(1);

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

  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Workbench Container */}
      <div className="rounded-2xl bg-[#0f0f13] border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.6)] overflow-hidden text-neutral-100">
        
        {/* Authentic Studio Header Chrome */}
        <div className="px-5 py-3.5 bg-[#14141a]/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-white text-black">
              Studio OS
            </span>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-200">
              <span className="font-semibold text-white">The Grand Penthouse 402</span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-400">3,450 sq ft turnkey</span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-400">Alipore Residences</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <Badge variant="outline" className="gap-1.5 px-2.5 py-1 rounded-md bg-white/5 text-neutral-200 font-medium border-white/10">
              <ShieldCheck className="size-3.5 text-emerald-400" />
              <span>{marginPercentage}% margin protected</span>
            </Badge>
            <span className="hidden sm:inline-block text-neutral-400">
              Contract PRJ-4029-WB
            </span>
          </div>
        </div>

        {/* Primary Financial Telemetry Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10 border-b border-white/10 bg-[#121217]">
          
          <div className="p-4 sm:p-5">
            <span className="text-xs font-medium text-neutral-400 block mb-1">
              Total project price
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white tabular-nums">
                ₹54,20,000
              </span>
              <Badge variant="outline" className="text-xs text-neutral-300 font-semibold bg-white/10 border-white/10">
                +₹3.2L extra work
              </Badge>
            </div>
            <span className="text-xs text-neutral-400 block mt-1">
              4-BHK penthouse project
            </span>
          </div>

          <div className="p-4 sm:p-5">
            <span className="text-xs font-medium text-neutral-400 block mb-1">
              Money spent on site
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white tabular-nums">
                ₹{totalIncurred.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-neutral-400 tabular-nums">
                {((totalIncurred / contractValue) * 100).toFixed(1)}% of budget
              </span>
            </div>
            <span className="text-xs text-neutral-400 block mt-1">
              Materials, daily wages, transport
            </span>
          </div>

          <div className="p-4 sm:p-5 bg-white text-neutral-950">
            <span className="text-xs font-medium text-neutral-600 block mb-1">
              Current profit
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-black tabular-nums">
                +₹{netMargin.toLocaleString("en-IN")}
              </span>
              <Badge className="text-xs text-emerald-700 font-bold bg-emerald-100 hover:bg-emerald-100">
                {marginPercentage}%
              </Badge>
            </div>
            <span className="text-xs text-neutral-600 block mt-1">
              Target profit was 35%
            </span>
          </div>

          <div className="p-4 sm:p-5">
            <span className="text-xs font-medium text-neutral-400 block mb-1">
              Paid by client
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white tabular-nums">
                ₹43,36,000
              </span>
              <Badge variant="outline" className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 border-emerald-500/20">
                Received
              </Badge>
            </div>
            <span className="text-xs text-neutral-400 block mt-1">
              Milestone 3 cleared
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between px-5 pt-2 border-b border-white/10 bg-[#0f0f13]">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab("ledger")}
              className={`pb-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-950 active:scale-[0.99] ${
                activeTab === "ledger"
                  ? "border-white text-white"
                  : "border-transparent text-neutral-400 hover:text-white"
              }`}
            >
              <Receipt className="w-3.5 h-3.5" />
              <span>Live Site Expenses</span>
            </button>

            <button
              onClick={() => setActiveTab("boq")}
              className={`pb-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-950 active:scale-[0.99] ${
                activeTab === "boq"
                  ? "border-white text-white"
                  : "border-transparent text-neutral-400 hover:text-white"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Budget vs Actual</span>
            </button>

            <button
              onClick={() => setActiveTab("matrix")}
              className={`pb-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-950 active:scale-[0.99] ${
                activeTab === "matrix"
                  ? "border-white text-white"
                  : "border-transparent text-neutral-400 hover:text-white"
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Material Price Tiers</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400 pb-2">
            <span>Updated live from site phone</span>
          </div>
        </div>

        {/* Tab Content Panes */}
        <div className="p-5 sm:p-6 bg-[#0f0f13] min-h-[320px]">
          
          {/* TAB 1: Live Site Expense Ledger */}
          {activeTab === "ledger" && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-1">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Site bills & daily wages
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Logged in seconds from the site phone. Added instantly to project expenses.
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

          {/* TAB 2: BOQ Variance Radar */}
          {activeTab === "boq" && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Site-to-BOQ Variance Radar
                </h4>
                <p className="text-xs text-neutral-400">
                  Where contractor profits quietly disappear: unrecorded material overrun and untracked client requests.
                </p>
              </div>

              <div className="border border-white/10 rounded-xl overflow-hidden divide-y divide-white/10">
                <div className="p-3.5 bg-white/[0.02] flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-white block">
                      Italian Botticino Marble (Master Bath Vanity & Flooring)
                    </span>
                    <span className="text-neutral-400">
                      BOQ estimate: 240 sq ft @ ₹420 (₹1,00,800) | Actual site draw: 268 sq ft (₹1,12,560)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-amber-400 block tabular-nums">
                      +₹11,760 overage
                    </span>
                    <span className="text-xs text-neutral-400">
                      Dry-cut waste accounted
                    </span>
                  </div>
                </div>

                <div className="p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-white block">
                      Saint-Gobain Gypsum False Ceiling Framing (Drawing Hall)
                    </span>
                    <span className="text-neutral-400">
                      BOQ estimate: 1,850 sq ft (₹1,94,250) | Actual site draw: 1,810 sq ft (₹1,90,050)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-400 block tabular-nums">
                      -₹4,200 saved
                    </span>
                    <span className="text-xs text-neutral-400">
                      Reconciled and closed
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-white/[0.02] flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-white block">
                      Client Scope Modification: Natural Teak Veneer Wall Panelling
                    </span>
                    <span className="text-neutral-400">
                      Requested on site during client walkthrough on Tuesday. Unscheduled labor and premium veneer.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white tabular-nums">
                      +₹36,000 variation
                    </span>
                    <Button
                      size="xs"
                      onClick={onOpenTrial}
                      className="bg-white text-black hover:bg-neutral-200"
                    >
                      <Send data-icon="inline-start" />
                      <span>Send Approval</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 3-Tier Material Matrix */}
          {activeTab === "matrix" && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Good, Better, Best Quotation Matrix
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Eliminates fee bargaining by letting clients choose between clear material tiers instead of shaving your margin.
                  </p>
                </div>

                <div className="inline-flex p-1 bg-white/5 rounded-lg border border-white/10">
                  {(["essential", "signature", "architectural"] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setSelectedTier(tier)}
                      className={`px-3 py-1 text-xs font-semibold rounded-md capitalize transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-950 active:scale-[0.98] ${
                        selectedTier === tier
                          ? "bg-white text-black shadow-sm"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {tier === "signature" ? "Signature Line" : tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tiers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                
                <div
                  className={`p-4 rounded-xl border transition-colors duration-150 ${
                    selectedTier === "essential"
                      ? "border-white bg-white/10 shadow-sm"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <span className="text-xs font-medium text-neutral-400 block mb-1">
                    Tier 1: Essential Line
                  </span>
                  <div className="text-xl font-bold text-white my-1 tabular-nums">
                    ₹38,50,000
                  </div>
                  <p className="text-xs text-neutral-300 mb-3">
                    Commercial MR Plywood, 0.8mm Matte Laminates, Ebco hardware.
                  </p>
                  <ul className="text-xs space-y-1.5 text-neutral-400">
                    <li>• IS 303 MR grade plywood</li>
                    <li>• 5-year hardware replacement warranty</li>
                    <li>• Studio margin: 32.0%</li>
                  </ul>
                </div>

                <div
                  className={`p-4 rounded-xl border transition-colors duration-150 ${
                    selectedTier === "signature"
                      ? "border-white bg-white text-black shadow-xl"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-xs font-medium block ${
                        selectedTier === "signature" ? "text-neutral-700" : "text-neutral-400"
                      }`}
                    >
                      Tier 2: Signature Line
                    </span>
                    <Badge className="text-xs bg-emerald-500/20 text-emerald-800 border-emerald-500/30 hover:bg-emerald-500/20 font-bold">
                      Active Contract
                    </Badge>
                  </div>
                  <div
                    className={`text-xl font-bold my-1 tabular-nums ${
                      selectedTier === "signature" ? "text-black" : "text-white"
                    }`}
                  >
                    ₹54,20,000
                  </div>
                  <p
                    className={`text-xs mb-3 ${
                      selectedTier === "signature" ? "text-neutral-700" : "text-neutral-300"
                    }`}
                  >
                    Century BWR Marine Ply, Royale Touche 1mm Acrylic, Hettich Sensys.
                  </p>
                  <ul
                    className={`text-xs space-y-1.5 ${
                      selectedTier === "signature" ? "text-neutral-800" : "text-neutral-400"
                    }`}
                  >
                    <li>• Century BWR Marine Core (IS 710)</li>
                    <li>• Hettich Quadro soft-close drawer runners</li>
                    <li>• Studio margin: 38.0% protected</li>
                  </ul>
                </div>

                <div
                  className={`p-4 rounded-xl border transition-colors duration-150 ${
                    selectedTier === "architectural"
                      ? "border-white bg-white/10 shadow-sm"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <span className="text-xs font-medium text-neutral-400 block mb-1">
                    Tier 3: Architectural Reserve
                  </span>
                  <div className="text-xl font-bold text-white my-1 tabular-nums">
                    ₹76,80,000
                  </div>
                  <p className="text-xs text-neutral-300 mb-3">
                    Natural Teak Veneer, PU Matt Polycoat, Blum Aventos servo-drive.
                  </p>
                  <ul className="text-xs space-y-1.5 text-neutral-400">
                    <li>• Hand-matched architectural veneer</li>
                    <li>• Blum motorized lift-up hardware</li>
                    <li>• Studio margin: 44.0%</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
