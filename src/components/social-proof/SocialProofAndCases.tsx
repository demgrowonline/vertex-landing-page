"use client";

import React from "react";
import { Star, Building2 } from "lucide-react";

export function SocialProofAndCases() {
  const caseStudies = [
    {
      studio: "Verma Architecture & Living",
      location: "Kolkata, South City & Alipore",
      founder: "Aakash Verma, Principal Architect",
      projectType: "8 Concurrent Turnkey Residences",
      image: "/assets/living_room.jpg",
      quote:
        "We used to estimate 38% margin on paper and end up with 22% at handover. Between unbilled timber yard offcuts, freight charges, and untracked carpenter cash slips, we were burning over ₹18 Lakhs a year. Vertex OS paid for itself within our very first project at Alipore Residences.",
      stats: [
        { label: "Margin Increase", value: "+15.4%", sub: "From 22.4% to 37.8%" },
        { label: "Leakage Recovered", value: "₹14.8L", sub: "First 90 days" },
      ],
    },
    {
      studio: "Apex Turnkey Designs",
      location: "Mumbai & Pune, Luxury Residences",
      founder: "Vikramaditya Sengupta, Managing Director",
      projectType: "₹1.4 Cr Average Turnkey Villa Scope",
      image: "/assets/master_bedroom.jpg",
      quote:
        "Quoting a 4-bedroom penthouse used to paralyze my design team for 5 full days in Excel. With Vertex OS voice takeoff, I walk through the bare shell with the homeowner, speak the specs into my phone, and present a clean 3-tier proposal before dinner. Our closing rate doubled.",
      stats: [
        { label: "Quoting Time", value: "12 Mins", sub: "Down from 5 days" },
        { label: "Client Close Rate", value: "2.4×", sub: "3-tier proposal matrix" },
      ],
    },
    {
      studio: "Atelier Form & Space",
      location: "Bangalore, Indiranagar & Whitefield",
      founder: "Pooja Radhakrishnan, Studio Lead",
      projectType: "14 Turnkey Apartments Per Year",
      image: "/assets/modular_kitchen.jpg",
      quote:
        "My biggest fear was that our on-site supervisors would refuse to use it and go back to WhatsApp. The sub-10 second mobile interface is so effortless that all 4 site leads adopted it on Day 1. We have not missed a single vendor invoice or labor wage slip in six months.",
      stats: [
        { label: "Site Adoption", value: "100%", sub: "4 Site supervisors active" },
        { label: "Unbilled Overruns", value: "₹0", sub: "Zero unbilled scope" },
      ],
    },
  ];

  return (
    <section id="proof" className="py-20 sm:py-28 bg-[#0d0d11] relative overflow-hidden text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 mb-4 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-neutral-300" />
            <span>Verified Studio Audits</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Protecting real margins across 140+ turnkey studios.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Specific numbers from real interior architecture firms who stopped accepting 15% site margin erosion as an inevitable cost of doing business.
          </p>
        </div>

        {/* Studio Trust Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-[#131318] border border-white/10 shadow-lg text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
              ₹42 Cr+
            </span>
            <span className="text-xs text-neutral-400 font-medium mt-1 block">
              Turnkey Budgets Managed
            </span>
          </div>
          <div className="p-5 rounded-2xl bg-[#131318] border border-white/10 shadow-lg text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
              38.2%
            </span>
            <span className="text-xs text-neutral-400 font-medium mt-1 block">
              Average Realized Margin
            </span>
          </div>
          <div className="p-5 rounded-2xl bg-[#131318] border border-white/10 shadow-lg text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
              ₹3.8 Cr+
            </span>
            <span className="text-xs text-neutral-400 font-medium mt-1 block">
              Site Leakage Prevented
            </span>
          </div>
          <div className="p-5 rounded-2xl bg-[#131318] border border-white/10 shadow-lg text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">
              100%
            </span>
            <span className="text-xs text-neutral-400 font-medium mt-1 block">
              Guarantee Claim Rate: 0%
            </span>
          </div>
        </div>

        {/* Real Studio Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#131319] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-colors duration-200"
            >
              <div>
                {/* Project Showcase Image */}
                <div className="relative h-56 w-full bg-neutral-900 overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.studio}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131319] via-black/40 to-transparent" />
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <span className="text-sm font-bold block">{cs.studio}</span>
                    <span className="text-xs text-neutral-300 font-medium">{cs.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4 text-neutral-100">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                    ))}
                    <span className="text-xs font-semibold ml-1.5 text-neutral-300">Verified Firm</span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-6">
                    "{cs.quote}"
                  </p>

                  <div className="text-xs text-white font-bold mb-0.5">
                    {cs.founder}
                  </div>
                  <div className="text-xs text-neutral-400 font-medium">
                    {cs.projectType}
                  </div>
                </div>
              </div>

              {/* Stats Strip at Card Base */}
              <div className="grid grid-cols-2 divide-x divide-white/10 bg-white/[0.02] border-t border-white/10 p-4">
                {cs.stats.map((st, i) => (
                  <div key={i} className={`text-center ${i === 0 ? "pr-2" : "pl-2"}`}>
                    <span className="text-base sm:text-lg font-bold text-white font-mono block">
                      {st.value}
                    </span>
                    <span className="text-xs text-neutral-400 font-semibold block">
                      {st.label} ({st.sub})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
