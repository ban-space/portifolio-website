"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Upcoming Project",
    description:
      "Project details will be published soon. Stay tuned for something great.",
    tags: ["TBD", "TBD", "TBD"],
    gradient: "from-primary-container/40 to-secondary-container/40",
  },
  {
    title: "Upcoming Project",
    description:
      "Project details will be published soon. Stay tuned for something great.",
    tags: ["TBD", "TBD", "TBD"],
    gradient: "from-primary-fixed/40 to-tertiary-container/40",
  },
  {
    title: "Upcoming Project",
    description:
      "Project details will be published soon. Stay tuned for something great.",
    tags: ["TBD", "TBD", "TBD"],
    gradient: "from-secondary/30 to-primary-container/30",
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

export default function Projects() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex justify-between items-end mb-8 border-b border-border-light dark:border-border-dark pb-4"
      >
        <h2 className="font-bold text-card-title md:text-[32px] text-on-surface dark:text-surface-bright tracking-tight">
          Featured Projects
        </h2>
        <Link
          href="https://github.com/ban-space"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary dark:text-primary-fixed text-body-sm font-semibold flex items-center gap-1 hover:text-primary-container dark:hover:text-primary-fixed-dim transition-colors"
        >
          View All Projects <ExternalLink size={14} />
        </Link>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl overflow-hidden flex flex-col group hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300"
          >
            <div
              className={`h-[200px] flex items-center justify-center relative bg-gradient-to-br ${project.gradient}`}
            >
              <span className="absolute top-4 left-4 bg-primary-fixed text-primary dark:bg-primary-container dark:text-on-primary text-label-caps text-[10px] px-2.5 py-1 rounded-full uppercase font-bold tracking-wider">
                Coming Soon
              </span>
              <Code2Icon className="text-outline-variant/50 dark:text-border-dark/50 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-[20px] text-on-surface dark:text-surface-bright mb-2">
                {project.title}
              </h3>
              <p className="text-body-sm text-text-secondary-light dark:text-text-secondary-dark mb-6 flex-1">
                {project.description}
              </p>
              <div className="flex justify-between items-center mt-auto border-t border-border-light dark:border-border-dark pt-4">
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface dark:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark text-[10px] px-2 py-1 rounded border border-border-light dark:border-border-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 text-outline dark:text-text-secondary-dark">
                  <a
                    href="https://github.com/ban-space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary dark:hover:text-primary-fixed transition-colors"
                    aria-label="GitHub"
                  >
                    <Code2 size={18} />
                  </a>
                  <button
                    className="hover:text-primary dark:hover:text-primary-fixed transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Code2Icon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
