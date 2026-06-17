"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BlogPreview() {
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
            Latest Blog Posts
          </h2>
          <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-2">
            Insights and tutorials on technology
          </p>
        </div>
        <Link
          href="/blog"
          className="group text-sm font-semibold text-accent dark:text-accent-dark flex items-center gap-1.5 hover:brightness-110 transition-all"
        >
          View All Posts
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Mastering C++ for Beginners",
            excerpt:
              "A comprehensive guide to starting your journey in C++ programming.",
            category: "C++",
            date: "May 15, 2024",
            readTime: "10 min read",
          },
          {
            title: "The Future of Artificial Intelligence",
            excerpt:
              "Exploring how AI is transforming industries and what developers need to know.",
            category: "AI",
            date: "May 12, 2024",
            readTime: "8 min read",
          },
          {
            title: "Career Roadmap for Software Engineers",
            excerpt:
              "Practical tips and strategies to advance your tech career.",
            category: "Career",
            date: "May 10, 2024",
            readTime: "6 min read",
          },
        ].map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            <div className="h-44 bg-gradient-to-br from-accent/[0.06] via-accent/[0.03] to-accent-dark/[0.06] dark:from-accent-dark/[0.06] dark:via-accent-dark/[0.03] flex items-center justify-center relative">
              <span className="absolute top-4 left-4 bg-accent/10 text-accent dark:text-accent-dark text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-text dark:text-text-dark mb-2 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-4 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-text-secondary dark:text-text-secondary-dark mt-auto pt-3 border-t border-border dark:border-border-dark">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
