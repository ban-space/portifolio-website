"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CoursePreview() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex justify-between items-end mb-8 border-b border-border dark:border-border-dark pb-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark tracking-tight">
          Featured Courses
        </h2>
        <Link
          href="/course"
          className="text-sm font-semibold text-accent dark:text-accent-dark flex items-center gap-1 hover:brightness-110 transition-all"
        >
          View All Courses <ArrowRight size={14} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "C++ Programming for University Students",
            description:
              "A structured video course from C++ fundamentals to OOP mastery.",
            badge: "Free",
            badgeColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800",
          },
          {
            title: "Full-Stack Web Development Bootcamp",
            description:
              "React, Node.js, TypeScript, PostgreSQL - coming soon.",
            badge: "Coming Soon",
            badgeColor: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
          },
          {
            title: "Mobile App Development Bootcamp",
            description:
              "Cross-platform iOS and Android development - coming soon.",
            badge: "Coming Soon",
            badgeColor: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
          },
        ].map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-accent/10 via-accent/5 to-accent-dark/10 dark:from-accent-dark/10 dark:via-accent-dark/5 flex items-center justify-center relative">
              <span
                className={`absolute top-4 right-4 text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border ${course.badgeColor}`}
              >
                {course.badge}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-text dark:text-text-dark mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-6 flex-1">
                {course.description}
              </p>
              <button className="w-full py-2.5 rounded-xl bg-accent dark:bg-accent-dark text-white text-sm font-semibold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-sm">
                {i === 0 ? "Watch on YouTube" : "Notify Me"}
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
