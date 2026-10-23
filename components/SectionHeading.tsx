"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
      className={`mb-8 md:mb-10 ${centered ? "text-center" : ""}`}
    >
      <p className={`mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-accent dark:text-accent-dark ${centered ? "justify-center" : ""}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
        Ban-Tech
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text dark:text-text-dark tracking-tight leading-[1.02]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
