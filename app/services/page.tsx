"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ServicesGrid from "@/components/ServicesGrid";

export default function Services() {
  return (
    <PageTransition>
      <div className="max-w-container-max mx-auto px-gutter pt-12 pb-section-padding">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high dark:bg-surface-dark border border-border-light dark:border-border-dark">
              <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-fixed animate-pulse" />
              <span className="text-label-caps text-primary dark:text-primary-fixed uppercase tracking-wider">
                Expertise
              </span>
            </div>
            <h1 className="text-hero-display-mobile md:text-hero-display font-bold text-on-surface dark:text-surface-bright">
              Our Services
            </h1>
            <p className="text-body-base text-on-surface-variant dark:text-text-secondary-dark max-w-2xl leading-relaxed">
              We provide end-to-end digital solutions to help businesses and
              individuals grow, innovate, and succeed. Our focus is on
              functional elegance and technical mastery.
            </p>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="flex items-center justify-center gap-2 text-body-sm text-text-secondary-light dark:text-text-secondary-dark mb-16"
        >
          <Link
            href="/"
            className="hover:text-primary dark:hover:text-primary-fixed transition-colors"
          >
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="font-semibold text-on-surface dark:text-surface-bright">
            Services
          </span>
        </motion.div>

        <ServicesGrid />
      </div>
    </PageTransition>
  );
}
