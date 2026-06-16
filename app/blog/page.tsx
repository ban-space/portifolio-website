"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Search, ArrowRight } from "lucide-react";
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
    category: "C++",
    tags: ["C++", "Beginners"],
    title: "Mastering C++ for Beginners",
    excerpt:
      "A comprehensive, step-by-step guide to starting your journey in C++ programming. Learn the fundamentals, object-oriented concepts, and memory management.",
    author: "Biniyam Gebreslassie",
    date: "May 15, 2024",
    readTime: "10 min read",
    gradient: "from-primary-container/90 to-tertiary-container/90",
    featured: true,
  },
  {
    category: "AI",
    title: "The Future of Artificial Intelligence",
    excerpt:
      "Exploring how AI is transforming industries and what developers need to know to stay ahead.",
    date: "May 12, 2024",
    readTime: "8 min read",
    gradient: "from-secondary-container/80 to-primary-fixed/80",
    featured: false,
  },
  {
    category: "Career",
    title: "Career Roadmap for Software Engineers",
    excerpt:
      "Practical tips and strategies to advance your tech career from junior to senior roles.",
    date: "May 10, 2024",
    readTime: "6 min read",
    gradient: "from-primary/70 to-tertiary-container/70",
    featured: false,
  },
  {
    category: "Web Development",
    title: "Building Modern Web Apps with Next.js",
    excerpt:
      "A deep dive into building high-performance web applications using the latest frameworks.",
    date: "May 8, 2024",
    readTime: "12 min read",
    gradient: "from-tertiary-container/80 to-primary-container/80",
    featured: false,
  },
  {
    category: "Tips",
    title: "Top 10 Productivity Tips for Developers",
    excerpt:
      "Boost your productivity with these practical tips for developers at any level.",
    date: "May 5, 2024",
    readTime: "5 min read",
    gradient: "from-primary-container/70 to-secondary/70",
    featured: false,
  },
  {
    category: "University",
    title: "Surviving and Thriving in Computer Science",
    excerpt:
      "Essential advice for university students pursuing a degree in computer science or related fields.",
    date: "May 3, 2024",
    readTime: "7 min read",
    gradient: "from-primary/60 to-tertiary-container/60",
    featured: false,
  },
];

export default function Blog() {
  return (
    <PageTransition>
      <div className="max-w-container-max mx-auto px-gutter pt-12 pb-section-padding">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4 text-body-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark">
            <Link
              href="/"
              className="hover:text-primary dark:hover:text-primary-fixed transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-primary dark:text-primary-fixed">Blog</span>
          </div>
          <h1 className="text-section-heading md:text-hero-display font-bold text-on-surface dark:text-surface-bright mb-4">
            Blog
          </h1>
          <p className="text-body-base text-text-secondary-light dark:text-text-secondary-dark max-w-2xl">
            Insights, tutorials, and ideas about technology and growth. Explore
            technical deep dives, career advice, and industry trends.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mb-16 space-y-6"
        >
          <div className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-outline dark:text-text-secondary-dark"
            />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark focus:ring-2 focus:ring-primary dark:focus:ring-primary-fixed focus:border-primary dark:focus:border-primary-fixed focus:outline-none transition-all shadow-sm text-body-sm placeholder:text-outline-variant dark:placeholder:text-text-secondary-dark text-on-surface dark:text-surface-bright"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full border text-label-caps transition-all ${
                  cat === "All"
                    ? "bg-gradient-to-r from-primary to-[#60A5FA] text-on-primary border-transparent shadow-sm"
                    : "border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark hover:bg-surface-container dark:hover:bg-surface-container-high text-on-surface-variant dark:text-outline-variant"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {posts.map((post, index) =>
            index === 0 ? (
              <motion.article
                key={post.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                className="md:col-span-8 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-[24px] overflow-hidden group relative flex flex-col h-[480px] hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${post.gradient} z-10 p-8 flex flex-col justify-end`}
                >
                  <div className="flex gap-2 mb-4">
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-label-caps text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-section-heading font-bold text-white mb-3 group-hover:text-primary-fixed transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-body-base text-white/90 mb-6 max-w-xl line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-semibold">
                        BG
                      </div>
                      <div>
                        <p className="text-body-sm font-semibold text-white">
                          Biniyam Gebreslassie
                        </p>
                        <p className="text-xs text-white/70">
                          {post.date} &bull; {post.readTime}
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                    >
                      Read Article{" "}
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:24px_24px]" />
              </motion.article>
            ) : (
              <motion.article
                key={post.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                className={`bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-[24px] overflow-hidden group flex flex-col p-6 relative hover:shadow-lg transition-shadow duration-300 ${
                  index <= 2 ? "md:col-span-4 md:h-[230px]" : "md:col-span-3 md:h-[260px]"
                }`}
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary dark:text-primary-fixed"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-surface-container dark:bg-surface-container-high rounded-full text-label-caps text-primary dark:text-primary-fixed">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-semibold text-card-title text-on-surface dark:text-surface-bright mb-2 group-hover:text-primary dark:group-hover:text-primary-fixed transition-colors">
                  {post.title}
                </h3>
                <p className="text-body-sm text-text-secondary-light dark:text-text-secondary-dark line-clamp-2 mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                    {post.date}
                  </p>
                  <ArrowRight
                    size={16}
                    className="text-primary dark:text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0"
                  />
                </div>
              </motion.article>
            )
          )}
        </motion.section>
      </div>
    </PageTransition>
  );
}
