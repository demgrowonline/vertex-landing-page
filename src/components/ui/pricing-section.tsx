"use client";

import React, { useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server } from "lucide-react";
import { motion } from "motion/react";

export interface PricingPlan {
  name: string;
  description: string;
  price: number;
  yearlyPrice: number;
  buttonText: string;
  buttonVariant: "outline" | "default";
  popular?: boolean;
  features: { text: string; icon: React.ReactNode }[];
  includes: string[];
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Starter Studio",
    description:
      "For boutique studios running 1 to 4 active sites.",
    price: 49,
    yearlyPrice: 39,
    buttonText: "Start free trial",
    buttonVariant: "outline",
    features: [
      { text: "Up to 4 active sites", icon: <Briefcase size={18} /> },
      { text: "Mobile bill & wage logger", icon: <Database size={18} /> },
      { text: "Voice quotes on site", icon: <Server size={18} /> },
    ],
    includes: [
      "Starter includes:",
      "Unlimited quotes and room budgets",
      "Photo receipt scanning",
      "Live project profit tracking",
      "Team logins for supervisors",
    ],
  },
  {
    name: "Growth Studio",
    description:
      "For growing studios that want complete site cost and profit control.",
    price: 129,
    yearlyPrice: 99,
    buttonText: "Start free trial",
    buttonVariant: "default",
    popular: true,
    features: [
      { text: "Unlimited active sites", icon: <Briefcase size={18} /> },
      { text: "Budget overrun alerts", icon: <Database size={18} /> },
      { text: "WhatsApp 1-click client approvals", icon: <Server size={18} /> },
    ],
    includes: [
      "Everything in Starter, plus:",
      "Free project setup & data import",
      "Ready material price lists",
      "Contractor cash advance tracking",
      "30-day money-back guarantee",
    ],
  },
  {
    name: "Enterprise Turnkey",
    description:
      "For large design-build firms with multiple branches and dedicated project teams.",
    price: 299,
    yearlyPrice: 249,
    buttonText: "Contact team",
    buttonVariant: "outline",
    features: [
      { text: "Multi-branch entity support", icon: <Briefcase size={18} /> },
      { text: "Unlimited team logins", icon: <Database size={18} /> },
      { text: "Accounting & ERP integration", icon: <Server size={18} /> },
    ],
    includes: [
      "Everything in Growth, plus:",
      "Custom rate catalogs for your city",
      "Dedicated account manager",
      "Custom permissions per role",
      "Direct phone & WhatsApp support",
    ],
  },
];

interface PricingSwitchProps {
  onSwitch: (value: string) => void;
}

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-20 mx-auto flex w-fit rounded-full bg-[#121217] border border-white/10 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={`relative z-10 w-fit sm:h-11 h-9 rounded-full sm:px-6 px-4 py-1 text-xs sm:text-sm font-semibold transition-colors ${
            selected === "0"
              ? "text-black"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-11 h-9 w-full rounded-full bg-white shadow-md"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={`relative z-10 w-fit sm:h-11 h-9 flex-shrink-0 rounded-full sm:px-6 px-4 py-1 text-xs sm:text-sm font-semibold transition-colors ${
            selected === "1"
              ? "text-black"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-11 h-9 w-full rounded-full bg-white shadow-md"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold">
              Save ~20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

interface PricingSectionProps {
  plans?: PricingPlan[];
  onOpenTrial?: () => void;
}

export default function PricingSection({
  plans = defaultPlans,
  onOpenTrial,
}: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
    hidden: {
      filter: "blur(6px)",
      y: -10,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="px-4 pt-28 pb-20 sm:pt-36 sm:pb-28 min-h-screen mx-auto relative bg-[#09090b] text-neutral-100 overflow-hidden"
      ref={pricingRef}
    >
      {/* Subtle radial atmosphere */}
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-96 pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(32, 108, 232, 0.15) 0%, transparent 70%)`,
        }}
      />

      <div className="text-center mb-8 max-w-3xl mx-auto">
        <TimelineContent
          as="h1"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight"
        >
          Simple, honest pricing.
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-sm sm:text-base text-neutral-400 sm:w-[70%] w-[90%] mx-auto leading-relaxed"
        >
          Start with a 14-day free trial on your next site. No credit card required. Upgrade, downgrade, or cancel anytime.
        </TimelineContent>
      </div>

      <TimelineContent
        as="div"
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="mb-10"
      >
        <PricingSwitch onSwitch={togglePricingPeriod} />
      </TimelineContent>

      <div className="grid md:grid-cols-3 max-w-7xl gap-6 py-4 mx-auto items-stretch">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={5 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="flex flex-col"
          >
            <Card
              className={`relative flex flex-col justify-between h-full rounded-3xl transition-all duration-200 ${
                plan.popular
                  ? "ring-2 ring-blue-500 bg-[#121626] border-blue-500/40 text-white shadow-[0_24px_64px_rgba(32,108,232,0.25)]"
                  : "bg-[#121217] border-white/10 text-white shadow-xl hover:border-white/20"
              }`}
            >
              <CardHeader className="text-left p-6 sm:p-7">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <Badge className="bg-blue-500 text-white hover:bg-blue-500 text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed min-h-[36px]">
                  {plan.description}
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tabular-nums">
                    $
                    <NumberFlow
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-4xl sm:text-5xl font-extrabold"
                    />
                  </span>
                  <span className="text-neutral-400 ml-1 text-xs sm:text-sm font-medium">
                    /{isYearly ? "mo, billed yearly" : "month"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="p-6 sm:p-7 pt-0 flex flex-col justify-between flex-1">
                <div>
                  <Button
                    size="lg"
                    onClick={onOpenTrial}
                    className={`w-full mb-6 h-12 rounded-xl font-bold text-sm ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30 border border-blue-400/40"
                        : "bg-white text-black hover:bg-neutral-200 shadow-md"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>

                  <ul className="space-y-3 py-4 text-xs font-medium text-neutral-300 border-t border-white/10">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <span className="text-blue-400 shrink-0">
                          {feature.icon}
                        </span>
                        <span className="text-neutral-200">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/10 mt-4">
                  <h4 className="font-semibold text-xs text-neutral-300">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2.5 text-xs text-neutral-400">
                        <span className="h-5 w-5 rounded-full bg-blue-500/10 border border-blue-500/30 grid place-content-center shrink-0">
                          <CheckCheck className="h-3 w-3 text-blue-400" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
