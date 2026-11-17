"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Receipt,
  FileSpreadsheet,
  Plus,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send,
  FileText,
  DollarSign,
  Package,
} from "lucide-react";

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
      <div className="rounded-2xl bg-white border border-neutral-200/90 shadow-sm overflow-hidden text-neutral-900">
        
        {/* Authentic Studio Header Chrome */}
        <div className="px-5 py-3.5 bg-neutral-50/90 border-b border-neutral-200/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-neutral-900 text-white">
              Studio OS
            </span>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-800">
              <span className="font-semibold text-neutral-950">The Grand Penthouse 402</span>
              <span className="text-neutral-400">/</span>
              <span className="text-neutral-600">3,450 sq ft turnkey</span>
              <span className="text-neutral-400">/</span>
              <span className="text-neutral-500">Alipore Residences</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 font-medium border border-neutral-200/60">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-700" />
              <span>{marginPercentage}% margin protected</span>
            </span>
            <span className="hidden sm:inline-block text-neutral-500">
              Contract PRJ-4029-WB
            </span>
          </div>
        </div>

        {/* Primary Financial Telemetry Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-neutral-200/80 border-b border-neutral-200/80 bg-neutral-50/40">
          
          <div className="p-4 sm:p-5">
            <span className="text-xs font-medium text-neutral-500 block mb-1">
              Quoted contract
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 tabular-nums">
                ₹54,20,000
              </span>
              <span className="text-xs text-neutral-700 font-semibold bg-neutral-200/70 px-1.5 py-0.5 rounded">
                +₹3.2L variation
              </span>
            </div>
            <span className="text-xs text-neutral-500 block mt-1">
              4 bedrooms and modular kitchen
            </span>
          </div>

          <div className="p-4 sm:p-5">
            <span className="text-xs font-medium text-neutral-500 block mb-1">
              Incurred site costs
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 tabular-nums">
                ₹{totalIncurred.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-neutral-500 tabular-nums">
                {((totalIncurred / contractValue) * 100).toFixed(1)}% burn
              </span>
            </div>
            <span className="text-xs text-neutral-500 block mt-1">
              Materials, trade wages and freight
            </span>
          </div>

          <div className="p-4 sm:p-5 bg-neutral-950 text-white">
            <span className="text-xs font-medium text-neutral-400 block mb-1">
              Live net margin
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white tabular-nums">
                +₹{netMargin.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-emerald-400 font-semibold">
                {marginPercentage}%
              </span>
            </div>
            <span className="text-xs text-neutral-400 block mt-1">
              Target was 35.0%, zero leakage
            </span>
          </div>

          <div className="p-4 sm:p-5">
            <span className="text-xs font-medium text-neutral-500 block mb-1">
              Client receivables
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 tabular-nums">
                ₹43,36,000
              </span>
              <span className="text-xs text-neutral-700 font-semibold bg-neutral-200/70 px-1.5 py-0.5 rounded">
                Cleared
              </span>
            </div>
            <span className="text-xs text-neutral-500 block mt-1">
              Milestone 3 cleared via RTGS
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between px-5 pt-2 border-b border-neutral-200/80 bg-white">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab("ledger")}
              className={`pb-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 active:scale-[0.99] ${
                activeTab === "ledger"
                  ? "border-neutral-950 text-neutral-950"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              <Receipt className="w-3.5 h-3.5" />
              <span>Live Site Expense Ledger</span>
            </button>

            <button
              onClick={() => setActiveTab("boq")}
              className={`pb-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 active:scale-[0.99] ${
                activeTab === "boq"
                  ? "border-neutral-950 text-neutral-950"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>BOQ Variance Radar</span>
            </button>

            <button
              onClick={() => setActiveTab("matrix")}
              className={`pb-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 active:scale-[0.99] ${
                activeTab === "matrix"
                  ? "border-neutral-950 text-neutral-950"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>3-Tier Material Matrix</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-500 pb-2">
            <span>Direct supervisor capture</span>
          </div>
        </div>

        {/* Tab Content Panes */}
        <div className="p-5 sm:p-6 bg-white min-h-[320px]">
          
          {/* TAB 1: Live Site Expense Ledger */}
          {activeTab === "ledger" && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-1">
                <div>
                  <h4 className="text-sm font-semibold text-neutral-950">
                    Live Site Micro-Expenses
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Logged in under 10 seconds from site mobile. Auto-reconciled with procurement vouchers.
                  </p>
                </div>

                <button
                  onClick={handleSimulateLog}
                  disabled={hasLoggedExtra}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors duration-150 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${
                    hasLoggedExtra
                      ? "bg-neutral-100 text-neutral-400"
                      : "bg-neutral-950 text-white hover:bg-neutral-800"
                  }`}
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{hasLoggedExtra ? "Voucher Auto-Logged" : "Simulate WhatsApp Photo Log"}</span>
                </button>
              </div>

              {/* Transactions List */}
              <div className="border border-neutral-200/80 rounded-xl overflow-hidden divide-y divide-neutral-100">
                {items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="p-3.5 sm:px-4 sm:py-3 flex items-center justify-between text-xs hover:bg-neutral-50/80 transition-colors duration-150 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                        <Receipt className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <span className="font-semibold text-neutral-950 block truncate">
                          {item.title}
                        </span>
                        <span className="text-neutral-500 text-xs">
                          {item.vendor} · {item.trade}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0 pl-3">
                      <span className="font-bold text-neutral-950 block tabular-nums text-sm">
                        ₹{item.amount.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-neutral-500 flex items-center justify-end gap-1">
                        <CheckCircle2 className="w-3 h-3 text-neutral-700" />
                        <span>Verified {item.timeAgo}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Slip Verification Drawer */}
              {selectedItem && (
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-neutral-700" />
                    <span className="font-semibold text-neutral-900">
                      Active audit voucher: {selectedItem.slipNumber}
                    </span>
                    <span className="text-neutral-400">/</span>
                    <span className="text-neutral-600">
                      Signed off by {selectedItem.verifiedBy}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-neutral-700">
                    <span className="px-2 py-0.5 rounded bg-white border border-neutral-200 text-xs">
                      Tax invoice verified
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white border border-neutral-200 text-xs">
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
                <h4 className="text-sm font-semibold text-neutral-950">
                  Site-to-BOQ Variance Radar
                </h4>
                <p className="text-xs text-neutral-500">
                  Where contractor profits quietly disappear: unrecorded material overrun and untracked client requests.
                </p>
              </div>

              <div className="border border-neutral-200/80 rounded-xl overflow-hidden divide-y divide-neutral-100">
                <div className="p-3.5 bg-neutral-50/50 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-neutral-950 block">
                      Italian Botticino Marble (Master Bath Vanity & Flooring)
                    </span>
                    <span className="text-neutral-500">
                      BOQ estimate: 240 sq ft @ ₹420 (₹1,00,800) | Actual site draw: 268 sq ft (₹1,12,560)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-amber-700 block tabular-nums">
                      +₹11,760 overage
                    </span>
                    <span className="text-xs text-neutral-600">
                      Dry-cut waste accounted
                    </span>
                  </div>
                </div>

                <div className="p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-neutral-950 block">
                      Saint-Gobain Gypsum False Ceiling Framing (Drawing Hall)
                    </span>
                    <span className="text-neutral-500">
                      BOQ estimate: 1,850 sq ft (₹1,94,250) | Actual site draw: 1,810 sq ft (₹1,90,050)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-700 block tabular-nums">
                      -₹4,200 saved
                    </span>
                    <span className="text-xs text-neutral-600">
                      Reconciled and closed
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-neutral-50/50 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-neutral-950 block">
                      Client Scope Modification: Natural Teak Veneer Wall Panelling
                    </span>
                    <span className="text-neutral-500">
                      Requested on site during client walkthrough on Tuesday. Unscheduled labor and premium veneer.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-neutral-950 tabular-nums">
                      +₹36,000 variation
                    </span>
                    <button
                      onClick={onOpenTrial}
                      className="px-2.5 py-1 rounded bg-neutral-950 text-white font-medium hover:bg-neutral-800 transition-colors duration-150 flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      <Send className="w-3 h-3" />
                      <span className="whitespace-nowrap">Send Approval</span>
                    </button>
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
                  <h4 className="text-sm font-semibold text-neutral-950">
                    Good, Better, Best Quotation Matrix
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Eliminates fee bargaining by letting clients choose between clear material tiers instead of shaving your margin.
                  </p>
                </div>

                <div className="inline-flex p-1 bg-neutral-100 rounded-lg border border-neutral-200/80">
                  {(["essential", "signature", "architectural"] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setSelectedTier(tier)}
                      className={`px-3 py-1 text-xs font-semibold rounded-md capitalize transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 active:scale-[0.98] ${
                        selectedTier === tier
                          ? "bg-white text-neutral-950 shadow-sm"
                          : "text-neutral-600 hover:text-neutral-950"
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
                      ? "border-neutral-950 bg-neutral-50 shadow-sm"
                      : "border-neutral-200/80 bg-white"
                  }`}
                >
                  <span className="text-xs font-medium text-neutral-500 block mb-1">
                    Tier 1: Essential Line
                  </span>
                  <div className="text-xl font-bold text-neutral-950 my-1 tabular-nums">
                    ₹38,50,000
                  </div>
                  <p className="text-xs text-neutral-600 mb-3">
                    Commercial MR Plywood, 0.8mm Matte Laminates, Ebco hardware.
                  </p>
                  <ul className="text-xs space-y-1.5 text-neutral-600">
                    <li>• IS 303 MR grade plywood</li>
                    <li>• 5-year hardware replacement warranty</li>
                    <li>• Studio margin: 32.0%</li>
                  </ul>
                </div>

                <div
                  className={`p-4 rounded-xl border transition-colors duration-150 ${
                    selectedTier === "signature"
                      ? "border-neutral-950 bg-neutral-950 text-white shadow-sm"
                      : "border-neutral-200/80 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-xs font-medium block ${
                        selectedTier === "signature" ? "text-neutral-400" : "text-neutral-500"
                      }`}
                    >
                      Tier 2: Signature Line
                    </span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-1.5 py-0.5 rounded font-medium">
                      Active Contract
                    </span>
                  </div>
                  <div
                    className={`text-xl font-bold my-1 tabular-nums ${
                      selectedTier === "signature" ? "text-white" : "text-neutral-950"
                    }`}
                  >
                    ₹54,20,000
                  </div>
                  <p
                    className={`text-xs mb-3 ${
                      selectedTier === "signature" ? "text-neutral-300" : "text-neutral-600"
                    }`}
                  >
                    Century BWR Marine Ply, Royale Touche 1mm Acrylic, Hettich Sensys.
                  </p>
                  <ul
                    className={`text-xs space-y-1.5 ${
                      selectedTier === "signature" ? "text-neutral-300" : "text-neutral-600"
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
                      ? "border-neutral-950 bg-neutral-50 shadow-sm"
                      : "border-neutral-200/80 bg-white"
                  }`}
                >
                  <span className="text-xs font-medium text-neutral-500 block mb-1">
                    Tier 3: Architectural Reserve
                  </span>
                  <div className="text-xl font-bold text-neutral-950 my-1 tabular-nums">
                    ₹76,80,000
                  </div>
                  <p className="text-xs text-neutral-600 mb-3">
                    Natural Teak Veneer, PU Matt Polycoat, Blum Aventos servo-drive.
                  </p>
                  <ul className="text-xs space-y-1.5 text-neutral-600">
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
