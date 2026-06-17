"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BarChart, Play } from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function Course() {
  return (
    <PageTransition>
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-16 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-text-secondary dark:text-text-secondary-dark">
            <Link
              href="/"
              className="hover:text-accent dark:hover:text-accent-dark transition-colors"
            >
              Home
            </Link>
            <ArrowRight size={14} />
            <span className="font-semibold text-text dark:text-text-dark">
              Course
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text dark:text-text-dark tracking-tight leading-[1.05] mb-4">
            Courses
          </h1>
          <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary-dark max-w-[600px] mx-auto">
            Practical courses designed to help you learn and build real-world
            skills
          </p>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="rounded-2xl border border-border dark:border-border-dark bg-card dark:bg-card-dark overflow-hidden group hover:shadow-lg transition-all duration-300"
        >
          <div className="h-56 bg-gradient-to-br from-accent/[0.08] via-accent/[0.04] to-accent-dark/[0.08] relative flex items-center justify-center">
            <span className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Live on YouTube
            </span>
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-3 tracking-tight">
              C++ Programming for University Students
            </h2>
            <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-4 max-w-2xl leading-relaxed">
              A structured video course taking students from C++ fundamentals to
              object-oriented programming mastery
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["C++", "University Level", "YouTube", "Free", "Ongoing"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-surface dark:bg-surface-dark text-text-secondary dark:text-text-secondary-dark border border-border dark:border-border-dark"
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
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent dark:bg-accent-dark text-white text-sm font-semibold hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-md"
            >
              <Play size={18} />
              Watch on YouTube
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Full-Stack Web Development Bootcamp",
              subtitle: "React, Node.js, TypeScript, PostgreSQL",
              badge: "Coming Soon",
            },
            {
              title: "Mobile App Development Bootcamp",
              subtitle: "Cross-platform iOS and Android development",
              badge: "Coming Soon",
            },
          ].map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="rounded-2xl border border-border dark:border-border-dark bg-card dark:bg-card-dark overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="h-48 bg-gradient-to-br from-accent/[0.08] via-accent/[0.04] to-accent-dark/[0.08] relative flex items-center justify-center">
                <span className="absolute top-4 right-4 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-200 dark:border-amber-800">
                  {course.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text dark:text-text-dark mb-2 tracking-tight">
                  {course.title}
                </h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-6 leading-relaxed">
                  {course.subtitle}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-text-secondary dark:text-text-secondary-dark">
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} />
                    <span>Flexible</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BarChart size={16} />
                    <span>All Levels</span>
                  </div>
                </div>
                <button className="group w-full py-3 rounded-xl bg-accent dark:bg-accent-dark text-white text-sm font-semibold flex items-center justify-center gap-2 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-sm">
                  Notify Me
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
