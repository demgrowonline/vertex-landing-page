"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#141419] border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.8)] overflow-hidden text-neutral-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cohort Access / 14-Day Free Studio Pass</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Claim Your Studio Pass + White-Glove Migration
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Zero credit card required. Free Excel/WhatsApp data import included.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-neutral-300 block mb-1">
                    Studio / Firm Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Verma Living Studio"
                    value={formData.studioName}
                    onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white text-xs"
                  />
                </div>
                <div>
                  <label className="font-semibold text-neutral-300 block mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aakash Verma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-neutral-300 block mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="aakash@verma.design"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white text-xs"
                  />
                </div>
                <div>
                  <label className="font-semibold text-neutral-300 block mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98450 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-neutral-300 block mb-1">
                  Active Turnkey Projects Per Year
                </label>
                <select
                  value={formData.projectScale}
                  onChange={(e) => setFormData({ ...formData, projectScale: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white text-xs bg-[#1a1a22]"
                >
                  <option>1 to 3 Turnkey Residences (Boutique)</option>
                  <option>4 to 8 Active Residences (Growing Studio)</option>
                  <option>9 to 15 Turnkey Residences (Scale Studio)</option>
                  <option>16+ Projects (Enterprise / High Volume)</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-neutral-300 block mb-1">
                  Primary Margin Goal
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white text-xs bg-[#1a1a22]"
                >
                  <option>Stop unbilled site material and labor wage leakage</option>
                  <option>Cut quotation time from 5 days to 15 minutes</option>
                  <option>Ditch chaotic WhatsApp voice notes and multiple Excel sheets</option>
                  <option>Real-time P&L visibility on active site cashflow</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-press w-full py-3.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm hover:bg-neutral-200 shadow-md flex items-center justify-center gap-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 active:scale-[0.98]"
                >
                  <span>Activate 14-Day Free Studio Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 text-center pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Protected by our 5× ROI Margin Recovery Guarantee</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 sm:p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Studio Pass Reserved for {formData.studioName || "Your Studio"}!
            </h3>
            <p className="text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
              We have generated your sandbox workspace credentials and sent them to{" "}
              <strong className="text-white">{formData.email}</strong>.
            </p>
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
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
            >
              Back to Vertex OS
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
