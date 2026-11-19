"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

interface CalculatorProps {
  onOpenTrial: () => void;
}

export function ProfitLeakageCalculator({ onOpenTrial }: CalculatorProps) {
  const [projectCount, setProjectCount] = useState<number>(6);
  const [avgContractLakhs, setAvgContractLakhs] = useState<number>(45);
  const [targetMarginPct, setTargetMarginPct] = useState<number>(35);

  // Math Calculations
  const annualTurnoverLakhs = projectCount * avgContractLakhs;
  const targetProfitLakhs = (annualTurnoverLakhs * targetMarginPct) / 100;
  
  // Benchmark Leakage:
  // 4.2% on unbilled vendor materials/freight/deliveries
  // 3.6% on unrecorded labor wages, unplanned site delays, untracked change orders
  const materialLeakageLakhs = (annualTurnoverLakhs * 0.042);
  const laborLeakageLakhs = (annualTurnoverLakhs * 0.036);
  const totalLeakageLakhs = materialLeakageLakhs + laborLeakageLakhs;
  
  const realizedMarginPct = targetMarginPct - ((totalLeakageLakhs / annualTurnoverLakhs) * 100);
  const recoveredProfitLakhs = totalLeakageLakhs * 0.88; // Vertex recovers ~88% of leakage

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-[#0d0d11] relative overflow-hidden text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            How much money slips through the cracks?
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Small expenses on site add up fast: extra plywood, worker overtime, and client changes that were never billed. Move the sliders to see what it costs your studio each year.
          </p>
        </div>

        {/* The Calculator Monolith */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column (7 cols) */}
          <Card className="lg:col-span-7 bg-[#121217] rounded-3xl p-6 sm:p-8 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <CardContent className="p-0 space-y-8">
              {/* Slider 1: Active Projects */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-sm font-bold text-white">
                    Active Turnkey Projects Per Year
                  </Label>
                  <Badge variant="outline" className="text-sm font-bold text-white font-mono px-3 py-1 bg-white/10 border-white/10">
                    {projectCount} Projects
                  </Badge>
                </div>
                <Slider
                  min={2}
                  max={25}
                  step={1}
                  value={[projectCount]}
                  onValueChange={(val) => {
                    const next = Array.isArray(val) ? val[0] : val;
                    if (typeof next === "number") setProjectCount(next);
                  }}
                  className="py-2"
                />
                <div className="flex justify-between text-xs text-neutral-400 font-medium">
                  <span>2 projects (Boutique)</span>
                  <span>10 projects</span>
                  <span>25+ projects (Scale)</span>
                </div>
              </div>

              {/* Slider 2: Average Contract Value */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-sm font-bold text-white">
                    Average Contract Value Per Residence
                  </Label>
                  <Badge variant="outline" className="text-sm font-bold text-white font-mono px-3 py-1 bg-white/10 border-white/10">
                    ₹{avgContractLakhs} Lakhs
                  </Badge>
                </div>
                <Slider
                  min={15}
                  max={150}
                  step={5}
                  value={[avgContractLakhs]}
                  onValueChange={(val) => {
                    const next = Array.isArray(val) ? val[0] : val;
                    if (typeof next === "number") setAvgContractLakhs(next);
                  }}
                  className="py-2"
                />
                <div className="flex justify-between text-xs text-neutral-400 font-medium">
                  <span>₹15 Lakhs (2 BHK)</span>
                  <span>₹60 Lakhs (Premium 3/4 BHK)</span>
                  <span>₹1.50 Cr+ (Luxury Villa)</span>
                </div>
              </div>

              {/* Slider 3: Quoted Gross Margin Target */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-sm font-bold text-white">
                    Target Quoted Margin %
                  </Label>
                  <Badge variant="outline" className="text-sm font-bold text-white font-mono px-3 py-1 bg-white/10 border-white/10">
                    {targetMarginPct}%
                  </Badge>
                </div>
                <Slider
                  min={25}
                  max={50}
                  step={1}
                  value={[targetMarginPct]}
                  onValueChange={(val) => {
                    const next = Array.isArray(val) ? val[0] : val;
                    if (typeof next === "number") setTargetMarginPct(next);
                  }}
                  className="py-2"
                />
                <div className="flex justify-between text-xs text-neutral-400 font-medium">
                  <span>25% Target</span>
                  <span>35% (Industry Standard)</span>
                  <span>50% (High-End Luxe)</span>
                </div>
              </div>
            </CardContent>

            {/* Quick Summary Box */}
            <div className="mt-8 p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-semibold text-neutral-400">Annual Turnkey Volume:</span>
              <span className="font-bold text-white font-mono text-sm sm:text-base">
                ₹{annualTurnoverLakhs.toFixed(1)} Lakhs ({ (annualTurnoverLakhs / 100).toFixed(2) } Cr)
              </span>
            </div>
          </Card>

          {/* Results Monolith Column (5 cols) */}
          <Card className="lg:col-span-5 bg-[#15151c] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_24px_64px_rgba(0,0,0,0.6)] relative overflow-hidden border-white/10">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="text-xs font-bold text-neutral-400 border-white/10 bg-white/5">
                  Estimated Loss
                </Badge>
              </div>

              {/* The Big Leak Number */}
              <div className="mb-6">
                <span className="text-xs text-neutral-400 block mb-1">
                  Estimated money lost each year:
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono tabular-nums">
                  ₹{totalLeakageLakhs.toFixed(2)} Lakhs
                </div>
                <div className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Your profit drops from <strong className="text-white">{targetMarginPct}%</strong> down to <strong className="text-rose-400">{realizedMarginPct.toFixed(1)}%</strong>.
                </div>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                <div className="flex justify-between items-center text-neutral-300">
                  <span>Unbilled materials & transport:</span>
                  <span className="font-mono font-semibold text-white">
                    -₹{materialLeakageLakhs.toFixed(2)}L
                  </span>
                </div>
                <div className="flex justify-between items-center text-neutral-300">
                  <span>Unrecorded wages & extra work:</span>
                  <span className="font-mono font-semibold text-white">
                    -₹{laborLeakageLakhs.toFixed(2)}L
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between text-emerald-400">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-emerald-400" />
                    <span className="font-bold">What you can save with Vertex:</span>
                  </div>
                  <span className="font-mono font-extrabold text-base text-emerald-300">
                    +₹{recoveredProfitLakhs.toFixed(2)}L
                  </span>
                </div>
              </div>
            </CardContent>

            {/* CTA inside calculator */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <Button
                size="lg"
                onClick={onOpenTrial}
                className="w-full h-12 rounded-full bg-white text-black font-bold text-xs sm:text-sm hover:bg-neutral-200 shadow-lg group"
              >
                <span>Protect Your Profit: Start Free</span>
                <ArrowRight data-icon="inline-end" className="group-hover:translate-x-0.5 transition-transform duration-150" />
              </Button>
              <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-400 mt-3 text-center">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                <span>Simple 30-day money-back guarantee</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
