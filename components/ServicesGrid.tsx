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
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-accent via-accent-dark to-accent opacity-0 group-hover:opacity-20 blur-md rounded-2xl transition-opacity duration-500" />
              <div className="relative bg-card dark:bg-card-dark rounded-2xl border border-border dark:border-border-dark p-8 flex flex-col gap-4 z-10 shadow-sm group-hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-surface dark:bg-surface-dark flex items-center justify-center text-accent dark:text-accent-dark group-hover:bg-accent group-hover:text-white dark:group-hover:bg-accent-dark dark:group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-text dark:text-text-dark">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark flex-1">
                  {service.description}
                </p>
                <div className="flex items-center text-accent dark:text-accent-dark text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
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
