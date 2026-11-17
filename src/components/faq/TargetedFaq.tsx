"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";

export function TargetedFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "My on-site supervisors and mistris are not tech-savvy. Will they actually use this?",
      a: "Yes. This was our primary engineering constraint. Site supervisors will never use bloated desktop software with 15 form fields. Vertex OS runs seamlessly in any smartphone mobile browser without installing anything. Logging a timber bill or labor wage takes 3 taps: Select Category, Enter Amount, Snap Receipt Photo. Average time: under 8 seconds. It also includes our 3-minute video walkthrough in plain Hindi and English.",
    },
    {
      q: "We run our studio on Excel and WhatsApp today. How painful is the migration?",
      a: "Completely painless. Every studio receives our complimentary White-Glove Migration Concierge. You do not need to spend your weekend retyping spreadsheets. Simply upload your existing Excel price lists, client folders, and vendor contacts. Our engineering team cleans, formats, and seeds your entire studio workspace within 24 hours.",
    },
    {
      q: "Is our vendor pricing, trade wage rates, and profit margin data strictly confidential?",
      a: "100% confidential. Vertex OS enforces strict multi-tenant isolation via Supabase PostgreSQL and Row-Level Security (RLS). Your supplier discounts, labor wage agreements, client quotation rates, and profit margins are encrypted and accessible exclusively to authenticated members of your studio workspace. No other studio or platform user can ever view your data.",
    },
    {
      q: "Does the AI ever 'hallucinate' or guess material rates?",
      a: "Never. In Vertex OS, the AI only handles voice transcription and entity structuring (via Groq Whisper). All mathematical calculations: unit conversions, square footage multipliers, GST calculations, and package totals, are executed by deterministic server code. The AI never invents rates; it strictly matches your spoken specifications to your approved studio catalog and verified supplier benchmarks.",
    },
    {
      q: "What is the 5× ROI Margin Recovery Guarantee?",
      a: "Run Vertex OS on your active turnkey projects for 30 days. If you don't recover at least 5× the cost of your subscription in prevented unbilled timber invoices, caught contractor change orders, and verified labor slips, simply notify us. We will refund 100% of your subscription payment immediately with zero friction. You keep all your clean exported data.",
    },
    {
      q: "Can we export all our project and financial records if we ever decide to leave?",
      a: "Yes. You maintain 100% data ownership. You can export complete project P&L summaries, itemized site expense ledgers, client quotation line items, and vendor lists to standard Excel and CSV formats at any time with a single click.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0d0d11] relative overflow-hidden text-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-neutral-300" />
            <span>Objection Annihilation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Direct, transparent answers to the questions every serious interior studio founder asks before switching.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#131319] border border-white/10 overflow-hidden shadow-lg transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-950"
                >
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-white text-black" : "bg-white/10 text-neutral-300"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/10 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-[#15151e] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">
                Have a unique studio workflow or custom ERP requirement?
              </span>
              <span className="text-xs text-neutral-400">
                Speak directly with our engineering founders. We customize schemas for multi-city turnkey operations.
              </span>
            </div>
          </div>
          <a
            href="mailto:contact@vertexos.com"
            className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            Ask Founder Team
          </a>
        </div>
      </div>
    </section>
  );
}
