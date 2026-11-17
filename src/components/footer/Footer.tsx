"use client";

import React from "react";
import PushpinTearFooter from "@/components/ui/pushpin-tear-footer";

interface FooterProps {
  onOpenTrial?: () => void;
}

export function Footer({ onOpenTrial }: FooterProps) {
  const handleConsultation = (e?: React.MouseEvent) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      const el = document.getElementById("guarantee");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const columns = [
    {
      title: "platform",
      links: [
        { label: "5-Min Voice Takeoff", href: "#capabilities" },
        { label: "Sub-10s Site Logger", href: "#capabilities" },
        { label: "BOQ Variance Radar", href: "#capabilities" },
        { label: "3-Tier Proposal Matrix", href: "#capabilities" },
      ],
      cta: {
        label: "start free.",
        href: "#guarantee",
        onClick: handleConsultation,
      },
    },
    {
      title: "intelligence",
      links: [
        { label: "Profit Leakage Math", href: "#calculator" },
        { label: "The 80/20 Problem", href: "#problem" },
        { label: "Vertex vs Spreadsheets", href: "#comparison" },
        { label: "Pricing Tiers", href: "/pricing" },
      ],
      cta: {
        label: "audit.",
        href: "#calculator",
      },
    },
  ];

  const socials = [
    {
      icon: "chat" as const,
      label: "WhatsApp Concierge",
      href: "https://wa.me/917980817657?text=Hi%20Vertex%20OS%20team,%20I%20would%20like%20to%20know%20more%20about%20Vertex%20OS!",
    },
    {
      icon: "mail" as const,
      label: "Founder Direct",
      href: "mailto:founders@vertexos.com",
    },
  ];

  const sideLinks = [
    { icon: "shield" as const, label: "privacy policy", href: "#" },
    { icon: "doc" as const, label: "terms of service", href: "#" },
  ];

  return (
    <div className="w-full mt-10 sm:mt-16 overflow-hidden">
      <PushpinTearFooter
        brand="Vertex OS"
        name="Vertex OS"
        logo={
          <div className="flex items-center gap-2.5 select-none">
            <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center font-extrabold text-xs tracking-tighter shadow-sm">
              <span>VX</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Vertex<span className="text-neutral-400 font-normal">OS</span>
            </span>
          </div>
        }
        logoHref="/"
        email="founders@vertexos.com"
        newsletter={{
          label: "get turnkey interior margin benchmarks",
          placeholder: "founder@yourstudio.com",
        }}
        status={{
          label: "open for studio VIP cohorts",
          href: "#guarantee",
          onClick: handleConsultation,
        }}
        mark="VERTEX OS / 2026"
        timeZone="Asia/Kolkata"
        timeLabel="IST"
        columns={columns}
        socials={socials}
        sideLinks={sideLinks}
        chat={{
          label: "say hi on whatsapp",
          href: "https://wa.me/917980817657?text=Hi%20Vertex%20OS%20team,%20I%20would%20like%20to%20know%20more%20about%20Vertex%20OS!",
        }}
        copyright={`© ${new Date().getFullYear()} Vertex OS SaaS Inc. All rights reserved.`}
        credit="Turnkey Operating System for Interior Design & Build"
        handle={{
          label: "vertexos.com",
          href: "/",
        }}
        sheet="#111116"
        paper="#07070a"
        sheetInk="#f4f4f5"
        paperInk="#ffffff"
      />
    </div>
  );
}
export default Footer;
