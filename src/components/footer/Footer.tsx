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
      title: "features",
      links: [
        { label: "Voice Quotes", href: "#capabilities" },
        { label: "Mobile Site Logger", href: "#capabilities" },
        { label: "Live Profit Guard", href: "#capabilities" },
        { label: "Price Tiers", href: "#capabilities" },
      ],
      cta: {
        label: "start free.",
        href: "#guarantee",
        onClick: handleConsultation,
      },
    },
    {
      title: "overview",
      links: [
        { label: "Profit Calculator", href: "#calculator" },
        { label: "Why Studios Lose Money", href: "#problem" },
        { label: "Vertex vs Spreadsheets", href: "#comparison" },
        { label: "Pricing Plans", href: "/pricing" },
      ],
      cta: {
        label: "calculator.",
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
    <div className="w-full relative overflow-hidden bg-[#09090b]">
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
          label: "get practical site tips and margin guides",
          placeholder: "founder@yourstudio.com",
        }}
        status={{
          label: "available for new projects",
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
        credit="Software for interior design & turnkey contracting"
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
