"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface ParallaxElementProps {
  className?: string;
  children?: ReactNode;
  /** Total vertical travel from the first to the last scroll position. */
  distance?: number;
  decorative?: boolean;
}

export default function ParallaxElement({
  className,
  children,
  distance = 18,
  decorative = true,
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const halfTravel = distance / 2;
  const y = useTransform(scrollYProgress, [0, 1], [-halfTravel, halfTravel]);

  return (
    <motion.div
      ref={ref}
      aria-hidden={decorative ? true : undefined}
      className={className}
      style={{ y: reduceMotion ? 0 : y, pointerEvents: decorative ? "none" : "auto" }}
    >
      {children}
    </motion.div>
  );
}
