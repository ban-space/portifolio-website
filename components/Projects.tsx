"use client";

import { motion } from "framer-motion";
import { GitBranch, ExternalLink, ArrowUpRight } from "lucide-react";
import ParallaxElement from "./ParallaxElement";
import ScrollSideReveal from "./ScrollSideReveal";

const projects = [
  {
    title: "Upcoming Project",
    description: "Project details will be published soon. Stay tuned for something great.",
    art: "from-indigo-500 via-blue-500 to-cyan-300",
    shape: "rounded-full rotate-12",
  },
  {
    title: "Upcoming Project",
    description: "Project details will be published soon. Stay tuned for something great.",
    art: "from-orange-400 via-rose-500 to-violet-600",
    shape: "rounded-[32%] -rotate-12",
  },
  {
    title: "Upcoming Project",
    description: "Project details will be published soon. Stay tuned for something great.",
    art: "from-lime-300 via-emerald-500 to-blue-600",
    shape: "rounded-[42%] rotate-45",
  },
];

export default function Projects() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-24">
      <div className="flex justify-between items-end gap-6 mb-8 md:mb-10">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-accent dark:text-accent-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
            Selected work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text dark:text-text-dark tracking-tight leading-[1.04]">
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
          className="group hidden sm:inline-flex text-sm font-semibold text-accent dark:text-accent-dark items-center gap-2 hover:brightness-110 transition-all"
        >
          View All Projects
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {projects.map((project, index) => (
          <ScrollSideReveal
            key={`${project.title}-${index}`}
            direction={index % 2 === 0 ? "left" : "right"}
            className="h-full"
          >
          <motion.article
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="h-full overflow-hidden rounded-[1.5rem] border border-border dark:border-border-dark bg-card dark:bg-card-dark shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-[190px] overflow-hidden" aria-hidden="true">
              <ParallaxElement className={`pointer-events-none absolute inset-x-0 -inset-y-20 bg-gradient-to-br ${project.art}`} distance={120} />
              <ParallaxElement className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:22px_22px]" distance={72} />
              <ParallaxElement className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" distance={144}>
                <div className={`h-28 w-28 border border-white/70 bg-white/25 shadow-[inset_-12px_-14px_24px_rgba(12,22,65,.2),inset_10px_10px_20px_rgba(255,255,255,.45),0_20px_35px_rgba(9,20,50,.22)] backdrop-blur-sm ${project.shape}`} />
              </ParallaxElement>
              <ParallaxElement className="pointer-events-none absolute left-[18%] top-[24%]" distance={92}>
                <div className="h-8 w-8 rounded-full border border-white/70 bg-white/50 shadow-lg backdrop-blur-sm" />
              </ParallaxElement>
              <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-black/15 px-3 py-1 text-[9px] font-bold uppercase tracking-[.14em] text-white backdrop-blur-sm">
                Coming Soon
              </span>
              <span className="absolute bottom-4 right-4 text-[10px] font-semibold tracking-[.18em] text-white/85">0{index + 1}</span>
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-lg font-bold text-text dark:text-text-dark mb-2 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-5 leading-relaxed">
                {project.description}
              </p>
              <div className="flex justify-between items-center border-t border-border dark:border-border-dark pt-4">
                <span className="bg-surface dark:bg-surface-dark text-text-secondary dark:text-text-secondary-dark text-[10px] px-2.5 py-1 rounded-full border border-border dark:border-border-dark font-semibold uppercase tracking-[.1em]">
                  TBD
                </span>
                <a
                  href="https://github.com/ban-space"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Ban-Tech on GitHub"
                  className="grid w-9 h-9 place-items-center rounded-full text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark hover:bg-surface dark:hover:bg-surface-dark transition-colors"
                >
                  <GitBranch size={17} aria-hidden="true" />
                  <span className="sr-only">Ban-Tech GitHub</span>
                </a>
              </div>
            </div>
          </motion.article>
          </ScrollSideReveal>
        ))}
      </div>
      <a
        href="https://github.com/ban-space"
        target="_blank"
        rel="noopener noreferrer"
        className="group sm:hidden mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent dark:text-accent-dark"
      >
        View All Projects <ExternalLink size={15} aria-hidden="true" />
      </a>
    </section>
  );
}
