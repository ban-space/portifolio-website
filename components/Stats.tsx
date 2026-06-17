"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
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
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    const unsub = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return unsub;
  }, [springValue]);

  return (
    <span ref={ref} className="text-2xl md:text-3xl font-bold text-text dark:text-text-dark tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-2xl p-5 md:p-6 flex items-start gap-4 transition-shadow duration-300 shadow-sm hover:shadow-md"
            >
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent-dark/10 dark:to-accent-dark/5 text-accent dark:text-accent-dark rounded-xl p-2.5 shrink-0">
                <Icon size={22} />
              </div>
              <div>
                <Counter end={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark leading-snug mt-0.5">
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
