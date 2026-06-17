"use client";

import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Upcoming Project",
    description:
      "Project details will be published soon. Stay tuned for something great.",
  },
  {
    title: "Upcoming Project",
    description:
      "Project details will be published soon. Stay tuned for something great.",
  },
  {
    title: "Upcoming Project",
    description:
      "Project details will be published soon. Stay tuned for something great.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

export default function Projects() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="flex justify-between items-end mb-8"
      >
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text dark:text-text-dark tracking-tight leading-[1.1]">
            Featured Projects
          </h2>
          <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-2">
            What I&apos;ve been working on
          </p>
        </div>
        <a
          href="https://github.com/ban-space"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-sm font-semibold text-accent dark:text-accent-dark flex items-center gap-1.5 hover:brightness-110 transition-all"
        >
          View All Projects
          <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-2xl overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
          >
            <div className="h-[200px] flex items-center justify-center relative bg-gradient-to-br from-accent/[0.04] via-accent/[0.08] to-accent/[0.04] dark:from-accent-dark/[0.04] dark:via-accent-dark/[0.08] dark:to-accent-dark/[0.04]">
              <span className="absolute top-4 left-4 bg-accent/10 text-accent dark:text-accent-dark text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border border-accent/20">
                Coming Soon
              </span>
              <div className="w-16 h-16 rounded-2xl bg-accent/[0.06] flex items-center justify-center">
                <GitBranch
                  size={32}
                  className="text-accent/30 dark:text-accent-dark/30"
                />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-text dark:text-text-dark mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>
              <div className="flex justify-between items-center mt-auto border-t border-border dark:border-border-dark pt-4">
                <div className="flex gap-2">
                  <span className="bg-surface dark:bg-surface-dark text-text-secondary dark:text-text-secondary-dark text-[10px] px-2 py-1 rounded border border-border dark:border-border-dark font-medium">
                    TBD
                  </span>
                </div>
                <div className="flex gap-2 text-text-secondary dark:text-text-secondary-dark">
                  <a
                    href="https://github.com/ban-space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent dark:hover:text-accent-dark transition-colors p-1"
                  >
                    <GitBranch size={18} />
                  </a>
                  <button className="hover:text-accent dark:hover:text-accent-dark transition-colors p-1">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
