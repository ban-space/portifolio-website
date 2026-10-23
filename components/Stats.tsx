"use client";

import { motion } from "framer-motion";
import { School, Users, Code, Briefcase } from "lucide-react";
import ParallaxElement from "./ParallaxElement";

const statsData = [
  { icon: School, value: "3+", label: "Years Learning Technology" },
  { icon: Users, value: "500+", label: "Students Reached" },
  { icon: Code, value: "10+", label: "Technologies Mastered" },
  { icon: Briefcase, value: "5+", label: "Professional Services" },
];

export default function Stats() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12 md:py-16" aria-label="Ban-Tech statistics">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="relative overflow-hidden rounded-[1.35rem] border border-border dark:border-border-dark p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <ParallaxElement className="pointer-events-none absolute inset-x-0 -inset-y-12 bg-card/85 dark:bg-card-dark/90" distance={96}>
                <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-accent/18 via-coral/12 to-transparent blur-2xl" />
              </ParallaxElement>
              <div className="relative z-10">
              <span className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-accent/40 dark:via-accent-dark/40 to-transparent" aria-hidden="true" />
              <div className="flex flex-col gap-4">
                <span className="grid w-10 h-10 place-items-center rounded-xl bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <div>
                  <span className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark tabular-nums tracking-[-.06em]">{stat.value}</span>
                  <p className="mt-1 text-xs sm:text-sm text-text-secondary dark:text-text-secondary-dark leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
