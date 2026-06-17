"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ServicesGrid from "@/components/ServicesGrid";

export default function Services() {
  return (
    <PageTransition>
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-16 pb-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 dark:bg-accent-dark/5 rounded-full blur-[100px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col items-center text-center gap-4 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border dark:border-border-dark bg-card dark:bg-card-dark">
            <span className="w-2 h-2 rounded-full bg-accent dark:text-accent-dark animate-pulse-soft" />
            <span className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-dark">
              Expertise
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text dark:text-text-dark tracking-tight leading-[1.05]">
            Our Services
          </h1>
          <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl leading-relaxed">
            We provide end-to-end digital solutions to help businesses and
            individuals grow, innovate, and succeed. Our focus is on functional
            elegance and technical mastery.
          </p>
          <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark mt-2">
            <Link
              href="/"
              className="hover:text-accent dark:hover:text-accent-dark transition-colors"
            >
              Home
            </Link>
            <ArrowRight size={14} />
            <span className="font-semibold text-text dark:text-text-dark">
              Services
            </span>
          </div>
        </motion.div>
      </section>

      <ServicesGrid />
    </PageTransition>
  );
}
