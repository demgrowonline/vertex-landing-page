"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StudioTrialModal({ isOpen, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studioName: "",
    fullName: "",
    email: "",
    phone: "",
    projectScale: "4-8 Active Residences",
    primaryGoal: "Stop site material & labor leakage",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg rounded-3xl bg-[#141419] border-white/10 text-neutral-100 p-6 sm:p-8">
        {!submitted ? (
          <div>
            <DialogHeader className="mb-6 text-left">
              <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Start your 14-day free trial
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-neutral-400 mt-1">
                No credit card needed. We'll help you set up your existing projects.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="studioName" className="font-semibold text-neutral-300">
                    Studio / Firm Name
                  </Label>
                  <Input
                    id="studioName"
                    type="text"
                    required
                    placeholder="e.g. Verma Living Studio"
                    value={formData.studioName}
                    onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                    className="border-white/10 bg-white/[0.04] text-white placeholder:text-neutral-500 rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="fullName" className="font-semibold text-neutral-300">
                    Your Full Name
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. Aakash Verma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="border-white/10 bg-white/[0.04] text-white placeholder:text-neutral-500 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="font-semibold text-neutral-300">
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="aakash@verma.design"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-white/10 bg-white/[0.04] text-white placeholder:text-neutral-500 rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="font-semibold text-neutral-300">
                    WhatsApp / Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 98450 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-white/10 bg-white/[0.04] text-white placeholder:text-neutral-500 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="projectScale" className="font-semibold text-neutral-300">
                  Active Turnkey Projects Per Year
                </Label>
                <select
                  id="projectScale"
                  value={formData.projectScale}
                  onChange={(e) => setFormData({ ...formData, projectScale: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white text-xs bg-[#1a1a22]"
                >
                  <option>1 to 3 Turnkey Residences (Boutique)</option>
                  <option>4 to 8 Active Residences (Growing Studio)</option>
                  <option>9 to 15 Turnkey Residences (Scale Studio)</option>
                  <option>16+ Projects (Enterprise / High Volume)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="primaryGoal" className="font-semibold text-neutral-300">
                  Primary Margin Goal
                </Label>
                <select
                  id="primaryGoal"
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white text-xs bg-[#1a1a22]"
                >
                  <option>Stop unbilled site material and labor wage leakage</option>
                  <option>Cut quotation time from 5 days to 15 minutes</option>
                  <option>Ditch chaotic WhatsApp voice notes and multiple Excel sheets</option>
                  <option>Real-time P&L visibility on active site cashflow</option>
                </select>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-11 rounded-full bg-white text-black font-bold text-xs sm:text-sm hover:bg-neutral-200 shadow-md group"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight data-icon="inline-end" className="group-hover:translate-x-0.5 transition-transform duration-150" />
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 text-center pt-2">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                <span>No credit card required · Cancel anytime</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="size-8" />
            </div>
            <DialogTitle className="text-2xl font-bold text-white">
              Studio Pass Reserved for {formData.studioName || "Your Studio"}!
            </DialogTitle>
            <DialogDescription className="text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
              We have generated your sandbox workspace credentials and sent them to{" "}
              <strong className="text-white">{formData.email}</strong>.
            </DialogDescription>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-neutral-300 text-left space-y-2">
              <div className="font-semibold text-white">Next Steps:</div>
              <div className="flex items-start gap-2">
                <span>1.</span>
                <span>Check your inbox for 1-click workspace login link.</span>
              </div>
              <div className="flex items-start gap-2">
                <span>2.</span>
                <span>Our migration concierge will message your WhatsApp ({formData.phone}) to format and import your Excel price lists.</span>
              </div>
            </div>
            <Button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200"
            >
              Back to Vertex OS
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
