"use client";

import React from "react";
import { Check, X, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ComparisonMatrix() {
  const features = [
    {
      category: "Quoting",
      name: "Quoting speed",
      vertex: "Minutes using your voice on site",
      sheets: "3 to 5 days of manual typing",
      legacy: "2 to 3 days of complex forms",
      highlight: true,
    },
    {
      category: "Quoting",
      name: "Multiple price options",
      vertex: "Automatic (Essential, Signature, Luxury)",
      sheets: "Duplicate sheets and rebuild formulas",
      legacy: "Single quote only",
      highlight: false,
    },
    {
      category: "Quoting",
      name: "Material price lists",
      vertex: "Included (CenturyPly, Hettich, Asian Paints)",
      sheets: "Outdated manual price lists",
      legacy: "Generic overseas templates",
      highlight: false,
    },
    {
      category: "Site Execution",
      name: "Logging a site bill",
      vertex: "Take a photo in 5 seconds",
      sheets: "Stuffed in pockets or entered on Sundays",
      legacy: "3 minutes with 15 required form fields",
      highlight: true,
    },
    {
      category: "Site Execution",
      name: "Ease for site workers",
      vertex: "Simple on any phone, zero training",
      sheets: "Workers avoid Excel and send voice notes",
      legacy: "Too complicated for site workers",
      highlight: true,
    },
    {
      category: "Financial Control",
      name: "Knowing your exact profit",
      vertex: "Live with every single bill",
      sheets: "Guessing until final handover",
      legacy: "Requires a dedicated accountant",
      highlight: true,
    },
    {
      category: "Financial Control",
      name: "Client advance tracking",
      vertex: "Auto-reconciles against site expenses",
      sheets: "Frequent confusion and missing receipts",
      legacy: "Expensive extra billing module",
      highlight: false,
    },
    {
      category: "Setup",
      name: "Setup time",
      vertex: "1 day (We import your data for free)",
      sheets: "Ongoing manual work",
      legacy: "Weeks or months of onboarding",
      highlight: false,
    },
    {
      category: "Guarantee",
      name: "Risk & Guarantee",
      vertex: "30-day money-back guarantee",
      sheets: "Silent ongoing profit loss",
      legacy: "Expensive locked-in annual contracts",
      highlight: true,
    },
  ];

  return (
    <section id="comparison" className="py-20 sm:py-28 bg-white relative overflow-hidden text-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight mb-4">
            How Vertex compares.
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
            Why interior studios switch away from manual spreadsheets and complex enterprise software.
          </p>
        </div>

        {/* The Comparison Table Container with shadcn Table */}
        <Card className="border-neutral-200/80 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.04)] bg-white p-0 gap-0">
          <Table className="min-w-[720px]">
            <TableHeader className="bg-neutral-50 border-b border-neutral-200/80">
              <TableRow className="border-b border-neutral-200/80 hover:bg-transparent">
                <TableHead className="p-4 sm:p-5 text-xs font-bold text-neutral-500 w-1/4">
                  Capability
                </TableHead>
                <TableHead className="p-4 sm:p-5 text-xs font-bold text-neutral-950 w-1/3 bg-neutral-100/80 border-x border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span>Vertex OS</span>
                    <Badge className="bg-black text-white hover:bg-black text-[11px] font-semibold">
                      Purpose-built
                    </Badge>
                  </div>
                </TableHead>
                <TableHead className="p-4 sm:p-5 text-xs font-bold text-neutral-500 w-1/4">
                  Spreadsheets + WhatsApp
                </TableHead>
                <TableHead className="p-4 sm:p-5 text-xs font-bold text-neutral-500 w-1/4">
                  Generic Construction ERPs
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-neutral-100 text-xs sm:text-sm">
              {features.map((feat, idx) => (
                <TableRow
                  key={idx}
                  className={`border-b border-neutral-100 hover:bg-neutral-50/70 transition-colors duration-150 ${
                    feat.highlight ? "bg-neutral-50/40" : ""
                  }`}
                >
                  <TableCell className="p-4 sm:p-5 font-semibold text-neutral-900">
                    <div>{feat.name}</div>
                    <span className="text-xs font-normal text-neutral-400">
                      {feat.category}
                    </span>
                  </TableCell>
                  <TableCell className="p-4 sm:p-5 font-bold text-neutral-950 bg-neutral-50/60 border-x border-neutral-200">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat.vertex}</span>
                    </div>
                  </TableCell>
                  <TableCell className="p-4 sm:p-5 text-neutral-500">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{feat.sheets}</span>
                    </div>
                  </TableCell>
                  <TableCell className="p-4 sm:p-5 text-neutral-400">
                    <div className="flex items-start gap-2">
                      <Minus className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{feat.legacy}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
}
