"use client";

import React from "react";
import { ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F5F5F7] text-neutral-600 border-t border-neutral-200/80 pt-16 pb-12 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand & Description (2 cols) */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs tracking-tighter">
                VX
              </div>
              <span className="text-sm font-semibold tracking-tight text-neutral-900">
                Vertex<span className="text-neutral-400 font-normal">OS</span>
              </span>
            </div>
            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
              The unified operating system for interior architecture & turnkey design-build firms. Unifying 5-minute voice takeoff directly into on-site expense tracking and real-time net P&L command.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-medium text-neutral-600 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational · Supabase RLS Enforced</span>
            </div>
          </div>

          {/* Navigation Column 1: Platform */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-900 block mb-3">
              Capabilities
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#capabilities" className="hover:text-black transition-colors">
                  5-Min Voice Takeoff
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-black transition-colors">
                  Sub-10s Mobile Logger
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-black transition-colors">
                  3-Tier Proposal Matrix
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-black transition-colors">
                  Live Net Margin Guard
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-black transition-colors">
                  Client CRM & Billing
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Studio Intelligence */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-900 block mb-3">
              Intelligence
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#calculator" className="hover:text-black transition-colors">
                  Profit Leakage Calculator
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-black transition-colors">
                  The 80/20 Problem
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-black transition-colors">
                  Vertex vs. Spreadsheets
                </a>
              </li>
              <li>
                <a href="#proof" className="hover:text-black transition-colors">
                  Studio Case Studies
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-black transition-colors">
                  Objection FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Trust & Security */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-900 block mb-3">
              Trust & Guarantees
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#guarantee" className="hover:text-black transition-colors">
                  5× ROI Margin Guarantee
                </a>
              </li>
              <li>
                <a href="#guarantee" className="hover:text-black transition-colors">
                  White-Glove Migration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Multi-Tenant Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Hairline & Legal Bar */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Vertex OS SaaS Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with architectural restraint for high-performing interior studios.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
