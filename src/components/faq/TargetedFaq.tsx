"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function TargetedFaq() {
  const faqs = [
    {
      id: "faq-1",
      q: "Will our site mistris and supervisors actually use this?",
      a: "Yes. It runs on any phone browser without installing anything. All your supervisor has to do is tap three times: choose category, type the amount, and take a photo of the bill. It takes 5 seconds. We also include a 2-minute video in plain Hindi and English showing them exactly what to do.",
    },
    {
      id: "faq-2",
      q: "We run our studio on Excel and WhatsApp today. How do we switch?",
      a: "It is completely free and hands-off for you. Send us your current spreadsheets, WhatsApp price notes, or vendor contacts. Our team cleans and sets up your entire studio workspace within 24 hours at no charge.",
    },
    {
      id: "faq-3",
      q: "Is our pricing, labor rates, and profit data private?",
      a: "Yes, 100% private. Your supplier discounts, worker wages, client rates, and profit margins are encrypted and strictly locked to your studio. Nobody outside your team can ever view your records.",
    },
    {
      id: "faq-4",
      q: "Does the AI ever guess or make up material prices?",
      a: "Never. The AI only transcribes what you speak into your phone. Every single price, formula, and tax total comes strictly from the price list you approved. The computer never invents rates.",
    },
    {
      id: "faq-5",
      q: "What is your 30-day money-back guarantee?",
      a: "Try Vertex on your active sites for 30 days. If it doesn't help you catch unbilled expenses and protect your profit, let us know. We will refund 100% of your fee immediately. No questions asked.",
    },
    {
      id: "faq-6",
      q: "Can we export our data if we ever decide to leave?",
      a: "Yes, anytime with 1 click. You own all your data. You can download your complete project budgets, site bills, client quotes, and supplier lists to standard Excel or CSV files whenever you want.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#fafafa] relative overflow-hidden text-neutral-900 border-t border-b border-neutral-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
            Direct, honest answers to the questions interior studio owners ask before switching.
          </p>
        </div>

        {/* FAQ Accordion List with shadcn primitives */}
        <Accordion defaultValue={["faq-1"]} className="gap-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-2xl bg-white border border-neutral-200/80 overflow-hidden shadow-xs px-5 sm:px-6 py-1 data-open:border-neutral-400 transition-colors"
            >
              <AccordionTrigger className="text-sm sm:text-base font-semibold text-neutral-950 tracking-tight hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1 pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <span className="text-xs font-bold text-neutral-950 block">
                Have a question about your studio setup?
              </span>
              <span className="text-xs text-neutral-500">
                Chat directly with our team. We&apos;ll show you how Vertex fits your active projects.
              </span>
            </div>
          </div>
          <Button
            size="sm"
            render={
              <a
                href="https://wa.me/917980817657?text=Hi%20Vertex%20OS%20team,%20I%20have%20a%20question%20about%20Vertex%20OS!"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="rounded-full bg-black text-white font-semibold text-xs hover:bg-neutral-800"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
