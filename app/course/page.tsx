"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, BarChart, Play, Code2, Layers3, Smartphone } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import ParallaxElement from "@/components/ParallaxElement";

export default function Course() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Learning"
        title="Courses"
        description="Practical courses designed to help you learn and build real-world skills"
        currentPage="Course"
        variant="course"
      />

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-7 md:py-10" aria-label="Featured course">
        <motion.article
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
          className="overflow-hidden rounded-[1.7rem] border border-border dark:border-border-dark bg-card/85 dark:bg-card-dark/90 shadow-sm hover:shadow-lg transition-shadow"
        >
          <div className="relative flex h-52 items-center justify-center overflow-hidden md:h-64" aria-hidden="true">
            <ParallaxElement className="pointer-events-none absolute -inset-x-8 -inset-y-28 bg-gradient-to-br from-blue-800 via-blue-600 to-cyan-400" distance={112} />
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:22px_22px]" />
            <ParallaxElement className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" distance={76}>
              <div className="h-36 w-36 rotate-12 rounded-[35%] border border-white/70 bg-white/20 shadow-[inset_-14px_-16px_25px_rgba(12,22,65,.24),inset_10px_10px_20px_rgba(255,255,255,.5),0_20px_38px_rgba(9,20,50,.22)] backdrop-blur-sm md:h-44 md:w-44" />
            </ParallaxElement>
            <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/55 bg-white/20 text-white shadow-lg backdrop-blur-md">
              <Code2 size={31} aria-hidden="true" />
            </div>
            <span className="absolute top-5 right-5 rounded-full border border-white/55 bg-emerald-500/90 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[.13em] text-white shadow-sm">Live on YouTube</span>
          </div>
          <div className="grid gap-7 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-9">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[.15em] text-accent dark:text-accent-dark">Featured course</p>
              <h2 className="text-2xl md:text-3xl font-bold text-text dark:text-text-dark mb-3 tracking-tight">C++ Programming for University Students</h2>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-5 max-w-2xl leading-relaxed">A structured video course taking students from C++ fundamentals to object-oriented programming mastery</p>
              <div className="flex flex-wrap gap-2">
                {["C++", "University Level", "YouTube", "Free", "Ongoing"].map((tag) => (
                  <span key={tag} className="rounded-full border border-border dark:border-border-dark bg-surface dark:bg-surface-dark px-3 py-1.5 text-[10px] font-semibold text-text-secondary dark:text-text-secondary-dark">{tag}</span>
                ))}
              </div>
            </div>
            <a
              href="https://youtube.com/@ban_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent dark:bg-accent-dark px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 dark:text-text-dark"
            >
              <Play size={17} aria-hidden="true" />
              Watch on YouTube
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </motion.article>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-8 md:py-14" aria-label="Upcoming courses">
        <div className="mb-7">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[.15em] text-accent dark:text-accent-dark">In development</p>
          <h2 className="text-2xl md:text-3xl font-bold text-text dark:text-text-dark tracking-tight">Upcoming Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {[
            { title: "Full-Stack Web Development Bootcamp", subtitle: "React, Node.js, TypeScript, PostgreSQL", icon: Layers3, art: "from-orange-500 via-rose-500 to-violet-600" },
            { title: "Mobile App Development Bootcamp", subtitle: "Cross-platform iOS and Android development", icon: Smartphone, art: "from-teal-500 via-emerald-400 to-lime-200" },
          ].map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.article
                key={course.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="overflow-hidden rounded-[1.5rem] border border-border dark:border-border-dark bg-card/85 dark:bg-card-dark/90 shadow-sm"
              >
                <div className="relative flex h-44 items-center justify-center overflow-hidden" aria-hidden="true">
                  <ParallaxElement className={`pointer-events-none absolute -inset-x-8 -inset-y-24 bg-gradient-to-br ${course.art}`} distance={88} />
                  <ParallaxElement className="pointer-events-none absolute" distance={64}>
                    <div className="h-28 w-28 rotate-12 rounded-[35%] border border-white/70 bg-white/20 shadow-[inset_-10px_-12px_22px_rgba(19,26,44,.22),inset_8px_7px_16px_rgba(255,255,255,.5),0_18px_30px_rgba(14,20,45,.18)] backdrop-blur-sm" />
                  </ParallaxElement>
                  <div className="relative grid h-12 w-12 place-items-center rounded-xl border border-white/55 bg-white/20 text-white shadow-lg backdrop-blur-md"><Icon size={24} aria-hidden="true" /></div>
                  <span className="absolute top-4 right-4 rounded-full border border-white/50 bg-black/15 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.12em] text-white backdrop-blur-sm">Coming Soon</span>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-xl font-semibold text-text dark:text-text-dark mb-2 tracking-tight">{course.title}</h3>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-5 leading-relaxed">{course.subtitle}</p>
                  <div className="flex flex-wrap items-center gap-4 mb-5 text-xs text-text-secondary dark:text-text-secondary-dark">
                    <span className="inline-flex items-center gap-1.5"><Clock size={15} aria-hidden="true" />Flexible</span>
                    <span className="inline-flex items-center gap-1.5"><BarChart size={15} aria-hidden="true" />All Levels</span>
                  </div>
                  <button type="button" disabled aria-disabled="true" className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-border dark:border-border-dark bg-surface/70 dark:bg-surface-dark/70 py-3 text-sm font-semibold text-text-secondary/70 dark:text-text-secondary-dark/70">
                    Notify Me <ArrowRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
}
