"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroMonolith } from "@/components/hero/HeroMonolith";
import { ProfitLeakageCalculator } from "@/components/calculator/ProfitLeakageCalculator";
import { TheEightyTwentyGap } from "@/components/problem/TheEightyTwentyGap";
import { DistinctiveEngines } from "@/components/capabilities/DistinctiveEngines";
import { ComparisonMatrix } from "@/components/comparison/ComparisonMatrix";
import { SocialProofAndCases } from "@/components/social-proof/SocialProofAndCases";
import { GrandSlamOffer } from "@/components/offer/GrandSlamOffer";
import { TargetedFaq } from "@/components/faq/TargetedFaq";
import { FinalCtaMonolith } from "@/components/cta/FinalCtaMonolith";
import { Footer } from "@/components/footer/Footer";
import { StudioTrialModal } from "@/components/modals/StudioTrialModal";

export default function HomePage() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-white selection:text-black">
      {/* 01: Frosted Pill Navigation */}
      <Navbar onOpenTrial={() => setTrialModalOpen(true)} />

      {/* Main Narrative Composition */}
      <main>
        {/* 02: Monolith Hero & Interactive Command Center */}
        <HeroMonolith onOpenTrial={() => setTrialModalOpen(true)} />

        {/* 03: Interactive Profit Leakage Calculator (The Math) */}
        <ProfitLeakageCalculator onOpenTrial={() => setTrialModalOpen(true)} />

        {/* 04: The 80/20 Problem: Why Generic Software Fails On Site */}
        <TheEightyTwentyGap />

        {/* 05: Core Architecture: The 4 Distinctive Engines */}
        <DistinctiveEngines />

        {/* 06: Honest Comparison Matrix (Vertex OS vs Spreadsheets vs ERPs) */}
        <ComparisonMatrix />

        {/* 07: Verified Studio Proof & Case Studies */}
        <SocialProofAndCases />

        {/* 08: The Grand Slam Offer & 100% Margin Recovery Guarantee */}
        <GrandSlamOffer onOpenTrial={() => setTrialModalOpen(true)} />

        {/* 09: Objection-Annihilation FAQ */}
        <TargetedFaq />

        {/* 10: Final Conversion Monolith */}
        <FinalCtaMonolith onOpenTrial={() => setTrialModalOpen(true)} />
      </main>

      {/* 11: Minimalist Apple/Mobbin Frosted Footer */}
      <Footer />

      {/* Interactive Modal */}
      <StudioTrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />
    </div>
  );
}
