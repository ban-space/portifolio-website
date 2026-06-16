"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, BarChart3 } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    title: "Web Development Bootcamp",
    description:
      "Master modern web technologies from scratch. Build responsive, high-performance applications using the latest frameworks and best practices.",
    duration: "12 Weeks",
    level: "Beginner to Adv.",
    badge: "Popular",
    badgeStyle:
      "bg-primary text-on-primary dark:bg-primary-container dark:text-on-primary",
    featured: true,
  },
  {
    title: "AI Fundamentals",
    description:
      "Understand the core concepts of Artificial Intelligence and Machine Learning.",
    duration: "8 Weeks",
    level: "Intermediate",
    badge: "New",
    badgeStyle:
      "bg-surface text-on-surface dark:bg-surface-dark dark:text-surface-bright border border-border-light dark:border-border-dark",
    featured: false,
  },
  {
    title: "Mobile App Mentorship",
    description:
      "One-on-one guidance to build cross-platform mobile applications.",
    duration: "Flexible",
    level: "All Levels",
    badge: null,
    badgeStyle: "",
    featured: false,
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

export default function CoursePreview() {
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
          Popular Courses
        </h2>
        <Link
          href="/course"
          className="text-primary dark:text-primary-fixed text-body-sm font-semibold flex items-center gap-1 hover:text-primary-container dark:hover:text-primary-fixed-dim transition-colors"
        >
          View All Courses <ArrowRight size={14} />
        </Link>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {courses.map((course) => (
          <motion.div
            key={course.title}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-[20px] overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-[200px] bg-gradient-to-br from-surface-container to-surface-container-high dark:from-surface-dark dark:to-bg-dark relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.08),transparent_70%)]" />
              <div className="relative z-10 text-outline-variant/30 dark:text-border-dark/30">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              {course.badge && (
                <span
                  className={`absolute top-4 right-4 text-label-caps px-3 py-1 rounded-full uppercase tracking-wider shadow-sm ${course.badgeStyle}`}
                >
                  {course.badge}
                </span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-semibold text-card-title text-on-surface dark:text-surface-bright mb-3">
                {course.title}
              </h3>
              <p className="text-body-sm text-text-secondary-light dark:text-text-secondary-dark mb-4 flex-1">
                {course.description}
              </p>
              <div className="flex items-center gap-4 mb-4 text-text-secondary-light dark:text-text-secondary-dark text-body-sm">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <BarChart3 size={16} />
                  {course.level}
                </div>
              </div>
              <button className="w-full py-3 rounded-[14px] bg-gradient-to-r from-primary-container to-[#60A5FA] text-on-primary text-body-sm font-semibold flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                Enroll Now
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
