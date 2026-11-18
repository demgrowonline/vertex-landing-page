"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";

export function TargetedFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Will our site mistris and supervisors actually use this?",
      a: "Yes. It runs on any phone browser without installing anything. All your supervisor has to do is tap three times: choose category, type the amount, and take a photo of the bill. It takes 5 seconds. We also include a 2-minute video in plain Hindi and English showing them exactly what to do.",
    },
    {
      q: "We run our studio on Excel and WhatsApp today. How do we switch?",
      a: "It is completely free and hands-off for you. Send us your current spreadsheets, WhatsApp price notes, or vendor contacts. Our team cleans and sets up your entire studio workspace within 24 hours at no charge.",
    },
    {
      q: "Is our pricing, labor rates, and profit data private?",
      a: "Yes, 100% private. Your supplier discounts, worker wages, client rates, and profit margins are encrypted and strictly locked to your studio. Nobody outside your team can ever view your records.",
    },
    {
      q: "Does the AI ever guess or make up material prices?",
      a: "Never. The AI only transcribes what you speak into your phone. Every single price, formula, and tax total comes strictly from the price list you approved. The computer never invents rates.",
    },
    {
      q: "What is your 30-day money-back guarantee?",
      a: "Try Vertex on your active sites for 30 days. If it doesn't help you catch unbilled expenses and protect your profit, let us know. We will refund 100% of your fee immediately. No questions asked.",
    },
    {
      q: "Can we export our data if we ever decide to leave?",
      a: "Yes, anytime with 1 click. You own all your data. You can download your complete project budgets, site bills, client quotes, and supplier lists to standard Excel or CSV files whenever you want.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0d0d11] relative overflow-hidden text-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Direct, honest answers to the questions interior studio owners ask before switching.
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
                Have a question about your studio setup?
              </span>
              <span className="text-xs text-neutral-400">
                Chat directly with our team. We'll show you how Vertex fits your active projects.
              </span>
            </div>
          </div>
          <a
            href="https://wa.me/917980817657?text=Hi%20Vertex%20OS%20team,%20I%20have%20a%20question%20about%20Vertex%20OS!"
            className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
