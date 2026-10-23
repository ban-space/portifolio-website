"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  Cpu,
  Handshake,
  GraduationCap,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ParallaxElement from "@/components/ParallaxElement";

const services = [
  { icon: Globe, title: "Web Development", description: "Modern responsive and high-performance websites and web applications" },
  { icon: Smartphone, title: "Mobile Development", description: "Cross-platform mobile apps for Android and iOS with great performance" },
  { icon: Palette, title: "UI/UX Design", description: "Beautiful user-centered designs that enhance user experience" },
  { icon: Cpu, title: "AI Solutions", description: "Smart AI solutions and automation to boost efficiency and growth" },
  { icon: Handshake, title: "Software Consulting", description: "Expert guidance on architecture strategy and digital transformation" },
  { icon: GraduationCap, title: "Programming Mentorship", description: "One-on-one mentorship to help you grow and achieve your goals" },
];

interface ServicesGridProps {
  showHeading?: boolean;
}

export default function ServicesGrid({ showHeading = true }: ServicesGridProps) {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-24">
      {showHeading && <SectionHeading title="Our Services" subtitle="We provide end-to-end digital solutions to help businesses and individuals grow, innovate, and succeed." />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.42, delay: index * 0.06, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-border dark:border-border-dark bg-card/85 dark:bg-card-dark/90 p-6 md:p-7 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
            >
              <span className="absolute right-5 top-5 text-[9px] font-bold tracking-[.14em] text-text-secondary/50 dark:text-text-secondary-dark/50">0{index + 1}</span>
              <ParallaxElement className="pointer-events-none absolute -right-12 -top-12" distance={15}>
                <div className="h-36 w-36 rounded-full bg-accent/[0.04] dark:bg-accent-dark/[0.06] transition-transform duration-500 group-hover:scale-125" />
              </ParallaxElement>
              <div className="relative z-10 flex h-full flex-col gap-4">
                <span className="grid w-12 h-12 place-items-center rounded-[1rem] border border-accent/10 dark:border-accent-dark/15 bg-gradient-to-br from-accent/12 to-coral/10 text-accent dark:text-accent-dark transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-text dark:text-text-dark tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark flex-1 leading-relaxed">
                  {service.description}
                </p>
                <span className="h-px w-10 bg-gradient-to-r from-accent to-coral transition-all duration-300 group-hover:w-16" aria-hidden="true" />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
