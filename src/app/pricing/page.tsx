"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import PricingSection from "@/components/ui/pricing-section";
import { Footer } from "@/components/footer/Footer";
import { StudioTrialModal } from "@/components/modals/StudioTrialModal";

export default function PricingPage() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-white selection:text-black">
      {/* 01: Frosted Pill Navigation */}
      <Navbar onOpenTrial={() => setTrialModalOpen(true)} />

      {/* Main Pricing Section */}
      <main>
        <PricingSection onOpenTrial={() => setTrialModalOpen(true)} />
      </main>

      {/* 03: Pushpin Tear Footer */}
      <Footer onOpenTrial={() => setTrialModalOpen(true)} />

      {/* Interactive Modal */}
      <StudioTrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />
    </div>
  );
}
