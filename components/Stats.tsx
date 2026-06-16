"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { School, Users, Code2, FileText } from "lucide-react";

interface StatCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function StatCounter({ end, suffix = "", duration = 2 }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: School, value: 3, suffix: "+", label: "Years Learning Technology" },
  { icon: Users, value: 500, suffix: "+", label: "Students Reached" },
  { icon: Code2, value: 10, suffix: "+", label: "Technologies Mastered" },
  { icon: FileText, value: 5, suffix: "+", label: "Professional Services" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Stats() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="bg-surface-container dark:bg-surface-container-high text-primary dark:text-primary-fixed rounded-xl p-3 shrink-0">
              <Icon size={24} />
            </div>
            <div>
              <h3 className="font-bold text-card-title text-on-surface dark:text-surface-bright mb-1">
                <StatCounter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-body-sm text-text-secondary-light dark:text-text-secondary-dark leading-snug">
                {stat.label}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.section>
  );
}
