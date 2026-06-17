"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Star } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const categories = [
  "All",
  "C++",
  "AI",
  "Web Development",
  "Career",
  "Tips",
  "University",
];

const posts = [
  {
    title: "Mastering C++ for Beginners",
    excerpt:
      "A comprehensive, step-by-step guide to starting your journey in C++ programming. Learn the fundamentals, object-oriented concepts, and memory management.",
    category: "C++",
    date: "May 15, 2024",
    readTime: "10 min read",
    author: "Biniyam Gebreslassie",
    rating: 5,
  },
  {
    title: "The Future of Artificial Intelligence",
    excerpt:
      "Exploring how AI is transforming industries and what developers need to know to stay ahead in the coming decade.",
    category: "AI",
    date: "May 12, 2024",
    readTime: "8 min read",
    author: "Biniyam Gebreslassie",
    rating: 4,
  },
  {
    title: "Career Roadmap for Software Engineers",
    excerpt:
      "Practical tips and strategies to advance your tech career from junior to senior roles and beyond.",
    category: "Career",
    date: "May 10, 2024",
    readTime: "6 min read",
    author: "Biniyam Gebreslassie",
    rating: 5,
  },
];

export default function Blog() {
  return (
    <PageTransition>
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-4 text-sm text-text-secondary dark:text-text-secondary-dark">
            <Link
              href="/"
              className="hover:text-accent dark:hover:text-accent-dark transition-colors"
            >
              Home
            </Link>
            <ArrowRight size={14} />
            <span className="font-semibold text-accent dark:text-accent-dark">
              Blog
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text dark:text-text-dark tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-base text-text-secondary dark:text-text-secondary-dark max-w-2xl">
            Insights, tutorials, and ideas about technology and growth
          </p>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary dark:text-text-secondary-dark"
            />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-border dark:border-border-dark bg-card dark:bg-card-dark focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:outline-none transition-all text-sm text-text dark:text-text-dark placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${
                  cat === "All"
                    ? "bg-accent dark:bg-accent-dark text-white border-accent dark:border-accent-dark"
                    : "border-border dark:border-border-dark bg-card dark:bg-card-dark text-text-secondary dark:text-text-secondary-dark hover:bg-surface dark:hover:bg-surface-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-8 rounded-2xl overflow-hidden group relative flex flex-col h-[480px] bg-gradient-to-br from-accent/80 to-accent-dark/80"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:24px_24px]" />
            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                  C++
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                  Beginners
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Mastering C++ for Beginners
              </h2>
              <p className="text-sm text-white/90 mb-6 max-w-xl line-clamp-2">
                A comprehensive, step-by-step guide to starting your journey in
                C++ programming. Learn the fundamentals, object-oriented
                concepts, and memory management.
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/20">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Biniyam Gebreslassie
                  </p>
                  <p className="text-xs text-white/70">
                    May 15, 2024 &bull; 10 min read
                  </p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-white fill-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          <div className="md:col-span-4 flex flex-col gap-6">
            {posts.slice(1, 3).map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                  ease: "easeOut",
                }}
                className="flex-1 rounded-2xl border border-border dark:border-border-dark bg-card dark:bg-card-dark p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-surface dark:bg-surface-dark rounded-full text-xs font-semibold text-accent dark:text-accent-dark">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text dark:text-text-dark mb-2 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-xs text-text-secondary dark:text-text-secondary-dark">
                    {post.date}
                  </p>
                  <div className="flex gap-1">
                    {Array.from({ length: post.rating }).map((_, ri) => (
                      <Star
                        key={ri}
                        size={12}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-border dark:border-border-dark bg-card dark:bg-card-dark overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-40 bg-gradient-to-br from-accent/10 via-accent/5 to-accent-dark/10 flex items-center justify-center relative">
                <span className="absolute top-4 left-4 px-3 py-1 bg-accent/10 text-accent dark:text-accent-dark rounded-full text-[10px] font-semibold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-text dark:text-text-dark mb-2 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-text-secondary dark:text-text-secondary-dark mb-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-text-secondary dark:text-text-secondary-dark mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: post.rating }).map((_, ri) => (
                      <Star
                        key={ri}
                        size={12}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <button className="px-4 py-1.5 rounded-lg bg-accent dark:bg-accent-dark text-white text-xs font-semibold hover:brightness-110 transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
