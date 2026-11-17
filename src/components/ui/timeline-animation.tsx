"use client";

import React from "react";
import { motion, type Variants } from "motion/react";

interface TimelineContentProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "h1" | "h2" | "h3" | "h4" | "p" | "span" | "section";
  animationNum?: number;
  timelineRef?: React.RefObject<any>;
  customVariants?: Variants;
  children: React.ReactNode;
  className?: string;
}

export function TimelineContent({
  as = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  children,
  className,
  ...props
}: TimelineContentProps) {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const variants = customVariants || defaultVariants;
  const MotionComponent = motion[as] as any;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={animationNum}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
