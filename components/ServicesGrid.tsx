"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  Cpu,
  Handshake,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern responsive and high-performance websites and web applications",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps for Android and iOS with great performance",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful user-centered designs that enhance user experience",
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    description:
      "Smart AI solutions and automation to boost efficiency and growth",
  },
  {
    icon: Handshake,
    title: "Software Consulting",
    description:
      "Expert guidance on architecture strategy and digital transformation",
  },
  {
    icon: GraduationCap,
    title: "Programming Mentorship",
    description:
      "One-on-one mentorship to help you grow and achieve your goals",
  },
];

export default function ServicesGrid() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0 dark:from-accent-dark/0 dark:via-accent-dark/5 dark:to-accent-dark/0 opacity-0 group-hover:opacity-100 blur-xl rounded-2xl transition-opacity duration-500" />
              <div className="relative bg-card dark:bg-card-dark rounded-2xl border border-border dark:border-border-dark p-7 flex flex-col gap-3.5 z-10 shadow-sm group-hover:shadow-md group-hover:border-accent/20 dark:group-hover:border-accent-dark/20 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent-dark/10 dark:to-accent-dark/5 flex items-center justify-center text-accent dark:text-accent-dark group-hover:bg-accent group-hover:text-white dark:group-hover:bg-accent-dark dark:group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text dark:text-text-dark tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark flex-1 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-accent dark:text-accent-dark text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  Learn More{" "}
                  <ArrowRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
