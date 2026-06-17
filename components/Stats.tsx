"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { School, Users, Code, Briefcase } from "lucide-react";

const statsData = [
  { icon: School, value: 3, suffix: "+", label: "Years Learning Technology" },
  { icon: Users, value: 500, suffix: "+", label: "Students Reached" },
  { icon: Code, value: 10, suffix: "+", label: "Technologies Mastered" },
  { icon: Briefcase, value: 5, suffix: "+", label: "Professional Services" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const displayValue = isInView ? end : 0;

  return (
    <span ref={ref} className="text-2xl md:text-3xl font-bold text-text dark:text-text-dark">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-2xl p-5 md:p-6 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-surface dark:bg-surface-dark text-accent dark:text-accent-dark rounded-xl p-3 shrink-0">
                <Icon size={24} />
              </div>
              <div>
                <Counter end={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark leading-snug mt-1">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
