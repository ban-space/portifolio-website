"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

type Direction = "left" | "right";

interface ScrollSideRevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  ariaHidden?: boolean;
}

export default function ScrollSideReveal({
  children,
  className,
  direction = "left",
  distance = 72,
  ariaHidden = false,
}: ScrollSideRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 58%"],
  });
  const startX = direction === "left" ? -distance : distance;
  const rawX = useTransform(scrollYProgress, [0, 1], [startX, 0]);
  const x = useSpring(rawX, { stiffness: 140, damping: 28, mass: 0.45 });

  return (
    <motion.div
      ref={ref}
      className={className}
      aria-hidden={ariaHidden ? true : undefined}
      style={{ x: reduceMotion ? 0 : x }}
    >
      {children}
    </motion.div>
  );
}
