"use client";

import React from "react";
import { Star, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SocialProofAndCases() {
  const caseStudies = [
    {
      studio: "Verma Architecture & Living",
      location: "Kolkata, South City & Alipore",
      founder: "Aakash Verma, Principal Architect",
      projectType: "Turnkey Residences",
      image: "/assets/living_room.jpg",
      quote:
        "We used to plan for 35% profit on paper and end up with barely 20% at handover. Between unbilled timber, freight charges, and daily carpenter cash, we were losing money on every site. Vertex paid for itself on our very first project.",
      stats: [
        { label: "First Project Result", value: "Zero Unbilled Work", sub: "All site costs captured" },
        { label: "Target Profit", value: "100% Protected", sub: "No handover surprise" },
      ],
    },
    {
      studio: "Apex Turnkey Designs",
      location: "Mumbai & Pune, Luxury Homes",
      founder: "Vikramaditya Sengupta, Managing Director",
      projectType: "Turnkey Villa Projects",
      image: "/assets/master_bedroom.jpg",
      quote:
        "Quoting a 4-bedroom home used to take my team nearly a week in Excel. With Vertex, I walk the bare flat with the homeowner, speak the details into my phone, and have a clear quote ready before dinner.",
      stats: [
        { label: "Quoting Speed", value: "Same Day", sub: "Down from 5 days in Excel" },
        { label: "Client Quotes", value: "3 Price Options", sub: "Better client decisions" },
      ],
    },
    {
      studio: "Atelier Form & Space",
      location: "Bangalore, Indiranagar & Whitefield",
      founder: "Pooja Radhakrishnan, Studio Lead",
      projectType: "Turnkey Apartments",
      image: "/assets/modular_kitchen.jpg",
      quote:
        "My worry was that our site supervisors wouldn't use it. But it's just snapping a photo of the paper slip. All four supervisors used it from day one, and we haven't lost a single bill in six months.",
      stats: [
        { label: "Site Team", value: "All 4 Active", sub: "Used daily on site phone" },
        { label: "Lost Slips", value: "Zero", sub: "Over past 6 months" },
      ],
    },
  ];

  return (
    <section id="proof" className="py-20 sm:py-28 bg-[#0d0d11] relative overflow-hidden text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            What studio owners say.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            From interior designers and turnkey contractors who stopped losing money on site.
          </p>
        </div>

        {/* Real Studio Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {caseStudies.map((cs, idx) => (
            <Card
              key={idx}
              className="rounded-3xl bg-[#131319] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-colors duration-200 p-0 gap-0"
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
                    <Badge variant="outline" className="text-xs font-semibold ml-1.5 text-neutral-300 border-white/10 bg-white/5">
                      Verified Firm
                    </Badge>
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
