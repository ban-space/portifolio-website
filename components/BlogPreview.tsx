"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    category: "C++",
    title: "Mastering C++ for Beginners",
    excerpt:
      "A comprehensive step-by-step guide to starting your journey in C++ programming.",
    date: "May 15, 2024",
    readTime: "10 min read",
    gradient: "from-primary-container/80 to-tertiary-container/80",
  },
  {
    category: "AI",
    title: "The Future of Artificial Intelligence",
    excerpt:
      "Exploring how AI is transforming industries and what developers need to know.",
    date: "May 12, 2024",
    readTime: "8 min read",
    gradient: "from-secondary-container/80 to-primary-fixed/80",
  },
  {
    category: "Career",
    title: "Career Roadmap for Software Engineers",
    excerpt:
      "Practical tips and strategies to advance your tech career from junior to senior roles.",
    date: "May 10, 2024",
    readTime: "6 min read",
    gradient: "from-primary/60 to-tertiary-container/60",
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

export default function BlogPreview() {
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
          Latest Blog Posts
        </h2>
        <Link
          href="/blog"
          className="text-primary dark:text-primary-fixed text-body-sm font-semibold flex items-center gap-1 hover:text-primary-container dark:hover:text-primary-fixed-dim transition-colors"
        >
          View All Posts <ArrowRight size={14} />
        </Link>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {posts.map((post) => (
          <motion.article
            key={post.title}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className={`h-48 bg-gradient-to-br ${post.gradient} flex items-end p-6 relative`}
            >
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-label-caps text-white uppercase tracking-wider">
                {post.category}
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:24px_24px] opacity-20" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-semibold text-card-title text-on-surface dark:text-surface-bright mb-2 group-hover:text-primary dark:group-hover:text-primary-fixed transition-colors">
                {post.title}
              </h3>
              <p className="text-body-sm text-text-secondary-light dark:text-text-secondary-dark mb-4 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border-light dark:border-border-dark">
                <div className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                  {post.date} &bull; {post.readTime}
                </div>
                <ArrowRight
                  size={16}
                  className="text-primary dark:text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0"
                />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
