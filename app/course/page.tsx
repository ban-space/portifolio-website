"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowRight, Clock, BarChart3, Bell, Play } from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function Course() {
  return (
    <PageTransition>
      <div className="max-w-container-max mx-auto px-gutter pt-12 pb-section-padding">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-[80px]"
        >
          <p className="text-body-sm text-text-secondary-light dark:text-text-secondary-dark mb-4 flex items-center justify-center gap-2">
            <Link
              href="/"
              className="hover:text-primary dark:hover:text-primary-fixed transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-on-surface dark:text-surface-bright">Course</span>
          </p>
          <h1 className="text-section-heading md:text-[48px] font-bold text-on-surface dark:text-surface-bright mb-4">
            Courses
          </h1>
          <p className="text-body-base text-text-secondary-light dark:text-text-secondary-dark max-w-[600px] mx-auto">
            Practical courses designed to help you learn and build real-world
            skills. Master modern technologies with comprehensive, hands-on
            learning paths.
          </p>
        </motion.header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-8"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-[24px] overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 h-[250px] lg:h-auto bg-gradient-to-br from-primary-container/60 to-tertiary-container/60 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                <Play size={64} className="text-white/30" />
                <span className="absolute top-4 left-4 bg-green-500 text-on-primary text-label-caps px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Live on YouTube
                </span>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-[24px] font-bold text-on-surface dark:text-surface-bright mb-3">
                  C++ Programming for University Students
                </h3>
                <p className="text-body-base text-text-secondary-light dark:text-text-secondary-dark mb-4">
                  A structured video course taking students from C++
                  fundamentals to object-oriented programming mastery.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["C++", "University Level", "YouTube", "Free", "Ongoing"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-label-caps px-3 py-1 rounded-full bg-surface-container dark:bg-surface-container-high text-text-secondary-light dark:text-text-secondary-dark"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
                <a
                  href="https://youtube.com/@ban_tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-[14px] bg-gradient-to-r from-primary-container to-[#60A5FA] text-on-primary text-body-sm font-semibold hover:brightness-105 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                >
                  <Play size={16} />
                  Watch on YouTube
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-[20px] overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="h-[180px] bg-gradient-to-br from-surface-container to-surface-container-high dark:from-surface-dark dark:to-bg-dark relative overflow-hidden flex items-center justify-center">
                <span className="absolute top-4 right-4 bg-primary text-on-primary dark:bg-primary-container dark:text-on-primary text-label-caps px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Coming Soon
                </span>
                <div className="text-outline-variant/30 dark:text-border-dark/30">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-card-title text-on-surface dark:text-surface-bright mb-2">
                  Full-Stack Web Development Bootcamp
                </h3>
                <p className="text-body-sm text-text-secondary-light dark:text-text-secondary-dark mb-4">
                  React, Node.js, TypeScript, PostgreSQL
                </p>
                <button className="mt-auto w-full py-3 rounded-[14px] bg-gradient-to-r from-primary-container to-[#60A5FA] text-on-primary text-body-sm font-semibold flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                  <Bell size={16} />
                  Notify Me
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.1 } },
              }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-[20px] overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="h-[180px] bg-gradient-to-br from-surface-container to-surface-container-high dark:from-surface-dark dark:to-bg-dark relative overflow-hidden flex items-center justify-center">
                <span className="absolute top-4 right-4 bg-primary text-on-primary dark:bg-primary-container dark:text-on-primary text-label-caps px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Coming Soon
                </span>
                <div className="text-outline-variant/30 dark:text-border-dark/30">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12" y2="18" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-card-title text-on-surface dark:text-surface-bright mb-2">
                  Mobile App Development Bootcamp
                </h3>
                <p className="text-body-sm text-text-secondary-light dark:text-text-secondary-dark mb-4">
                  Cross-platform iOS and Android development
                </p>
                <button className="mt-auto w-full py-3 rounded-[14px] bg-gradient-to-r from-primary-container to-[#60A5FA] text-on-primary text-body-sm font-semibold flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                  <Bell size={16} />
                  Notify Me
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
