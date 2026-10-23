"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Braces, Cpu, Compass } from "lucide-react";
import ParallaxElement from "./ParallaxElement";
import ScrollSideReveal from "./ScrollSideReveal";

const posts = [
  {
    title: "Mastering C++ for Beginners",
    excerpt: "A comprehensive guide to starting your journey in C++ programming.",
    category: "C++",
    date: "May 15, 2024",
    readTime: "10 min read",
    icon: Braces,
    art: "from-[#1f3fa4] via-[#315de8] to-[#8dd6e4]",
  },
  {
    title: "The Future of Artificial Intelligence",
    excerpt: "Exploring how AI is transforming industries and what developers need to know.",
    category: "AI",
    date: "May 12, 2024",
    readTime: "8 min read",
    icon: Cpu,
    art: "from-[#40206f] via-[#8c59db] to-[#e8a0d8]",
  },
  {
    title: "Career Roadmap for Software Engineers",
    excerpt: "Practical tips and strategies to advance your tech career.",
    category: "Career",
    date: "May 10, 2024",
    readTime: "6 min read",
    icon: Compass,
    art: "from-[#df7047] via-[#edaa53] to-[#f5e39c]",
  },
];

export default function BlogPreview() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-24">
      <ScrollSideReveal direction="left" className="mb-8 md:mb-10">
        <div className="flex justify-between items-end gap-6">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-accent dark:text-accent-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
            Writing
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text dark:text-text-dark tracking-tight leading-[1.04]">
            Latest Blog Posts
          </h2>
          <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-2">Insights and tutorials on technology</p>
        </div>
        <Link
          href="/blog"
          className="group hidden sm:inline-flex text-sm font-semibold text-accent dark:text-accent-dark items-center gap-2"
        >
          View All Posts
          <span className="grid w-8 h-8 place-items-center rounded-full border border-accent/20 dark:border-accent-dark/20 transition-all group-hover:bg-accent group-hover:text-white dark:group-hover:bg-accent-dark dark:group-hover:text-text-dark">
            <ArrowRight size={14} aria-hidden="true" />
          </span>
        </Link>
        </div>
      </ScrollSideReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {posts.map((post, index) => {
          const Icon = post.icon;
          return (
            <ScrollSideReveal key={post.title} direction={index % 2 === 0 ? "left" : "right"} className="h-full">
            <motion.article
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="h-full overflow-hidden rounded-[1.5rem] border border-border dark:border-border-dark bg-card/85 dark:bg-card-dark/90 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative flex h-44 items-center justify-center overflow-hidden" aria-hidden="true">
                <ParallaxElement className={`pointer-events-none absolute inset-x-0 -inset-y-20 bg-gradient-to-br ${post.art}`} distance={120} />
                <ParallaxElement className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:20px_20px]" distance={72} />
                <ParallaxElement className="pointer-events-none absolute" distance={88}>
                  <div className="h-28 w-28 rounded-full border border-white/70 bg-white/20 shadow-[inset_-10px_-12px_22px_rgba(19,26,44,.22),inset_8px_7px_16px_rgba(255,255,255,.5),0_18px_30px_rgba(14,20,45,.18)] backdrop-blur-sm transition-transform duration-500 group-hover:scale-110" />
                </ParallaxElement>
                <div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-white/50 bg-white/20 text-white shadow-lg backdrop-blur-md">
                  <Icon size={23} aria-hidden="true" />
                </div>
                <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-black/15 px-3 py-1 text-[9px] font-semibold uppercase tracking-[.14em] text-white backdrop-blur-sm">{post.category}</span>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold text-text dark:text-text-dark mb-2 tracking-tight leading-snug">{post.title}</h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-5 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-[11px] text-text-secondary dark:text-text-secondary-dark mt-auto pt-3 border-t border-border dark:border-border-dark">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.article>
            </ScrollSideReveal>
          );
        })}
      </div>
      <Link href="/blog" className="group sm:hidden mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent dark:text-accent-dark">
        View All Posts <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </section>
  );
}
