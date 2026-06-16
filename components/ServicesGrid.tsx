"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  PenTool,
  Bot,
  Handshake,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
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
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Beautiful user-centered designs that enhance user experience",
  },
  {
    icon: Bot,
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ServicesGrid() {
  return (
    <section>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group relative h-full rounded-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-primary-container to-primary opacity-0 group-hover:opacity-25 blur-md rounded-2xl transition-opacity duration-500" />
              <div className="relative h-full bg-card-light dark:bg-card-dark rounded-2xl border border-border-light dark:border-border-dark p-8 flex flex-col gap-5 z-10 shadow-sm group-hover:shadow-xl transition-shadow duration-500 overflow-hidden">
                <div className="w-14 h-14 rounded-xl bg-surface-container dark:bg-surface-container-high flex items-center justify-center group-hover:bg-primary dark:group-hover:bg-primary-container group-hover:text-on-primary dark:group-hover:text-on-primary transition-colors duration-300">
                  <Icon
                    size={28}
                    className="text-primary dark:text-primary-fixed group-hover:text-on-primary dark:group-hover:text-on-primary transition-colors duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-card-title text-on-surface dark:text-surface-bright mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body-base text-text-secondary-light dark:text-text-secondary-dark">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center text-primary dark:text-primary-fixed text-body-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More{" "}
                  <ArrowRight
                    size={16}
                    className="ml-1 group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
