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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className="font-bold text-section-heading text-on-surface dark:text-surface-bright tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-body-base text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
