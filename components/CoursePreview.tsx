"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code2, Smartphone } from "lucide-react";

const courses = [
  {
    title: "C++ Programming for University Students",
    description: "A structured video course from C++ fundamentals to OOP mastery.",
    badge: "Free",
    badgeColor: "text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800",
    icon: Code2,
    art: "from-blue-700 via-blue-500 to-cyan-300",
    live: true,
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    description: "React, Node.js, TypeScript, PostgreSQL - coming soon.",
    badge: "Coming Soon",
    badgeColor: "text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
    icon: BookOpen,
    art: "from-orange-500 via-rose-500 to-violet-600",
    live: false,
  },
  {
    title: "Mobile App Development Bootcamp",
    description: "Cross-platform iOS and Android development - coming soon.",
    badge: "Coming Soon",
    badgeColor: "text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
    icon: Smartphone,
    art: "from-teal-500 via-emerald-400 to-lime-200",
    live: false,
  },
];

export default function CoursePreview() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-24">
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
        className="flex justify-between items-end gap-6 mb-8 md:mb-10"
      >
        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-accent dark:text-accent-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
            Learning
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text dark:text-text-dark tracking-tight leading-[1.04]">Featured Courses</h2>
          <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-2">Learn from structured, practical content</p>
        </div>
        <Link href="/course" className="group hidden sm:inline-flex text-sm font-semibold text-accent dark:text-accent-dark items-center gap-2">
          View All Courses
          <span className="grid w-8 h-8 place-items-center rounded-full border border-accent/20 dark:border-accent-dark/20 transition-all group-hover:bg-accent group-hover:text-white dark:group-hover:bg-accent-dark dark:group-hover:text-text-dark">
            <ArrowRight size={14} aria-hidden="true" />
          </span>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {courses.map((course, index) => {
          const Icon = course.icon;
          return (
            <motion.article
              key={course.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.42, delay: index * 0.07, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="overflow-hidden rounded-[1.5rem] border border-border dark:border-border-dark bg-card/85 dark:bg-card-dark/90 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${course.art}`} aria-hidden="true">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:20px_20px]" />
                <div className="absolute h-28 w-28 rounded-[38%] border border-white/70 bg-white/20 shadow-[inset_-10px_-12px_22px_rgba(19,26,44,.22),inset_8px_7px_16px_rgba(255,255,255,.5),0_18px_30px_rgba(14,20,45,.18)] backdrop-blur-sm transition-transform duration-500 group-hover:rotate-12" />
                <div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-white/50 bg-white/20 text-white shadow-lg backdrop-blur-md">
                  <Icon size={23} aria-hidden="true" />
                </div>
                <span className={`absolute top-4 right-4 text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[.13em] border ${course.badgeColor}`}>{course.badge}</span>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold text-text dark:text-text-dark mb-2 leading-snug tracking-tight">{course.title}</h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-5 min-h-[44px] leading-relaxed">{course.description}</p>
                {course.live ? (
                  <a href="https://youtube.com/@ban_tech" target="_blank" rel="noopener noreferrer" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:brightness-110 dark:bg-accent-dark dark:text-text-dark">
                    Watch on YouTube <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                ) : (
                  <button type="button" disabled aria-disabled="true" className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-border dark:border-border-dark bg-surface/70 dark:bg-surface-dark/70 px-4 py-3 text-sm font-semibold text-text-secondary/70 dark:text-text-secondary-dark/70">
                    Notify Me <ArrowRight size={15} aria-hidden="true" />
                  </button>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
      <Link href="/course" className="group sm:hidden mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent dark:text-accent-dark">
        View All Courses <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </section>
  );
}
