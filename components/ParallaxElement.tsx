"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface ParallaxElementProps {
  className?: string;
  children?: ReactNode;
  distance?: number;
}

export default function ParallaxElement({
  className,
  children,
  distance = 18,
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={className}
      style={{ y: reduceMotion ? 0 : y, pointerEvents: "none" }}
    >
      {children}
    </motion.div>
  );
}
