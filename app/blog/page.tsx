"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Star, Braces, Cpu, Compass, ArrowUpRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import ParallaxElement from "@/components/ParallaxElement";

const categories = ["All", "C++", "AI", "Web Development", "Career", "Tips", "University"];

const posts = [
  {
    title: "Mastering C++ for Beginners",
    excerpt: "A comprehensive, step-by-step guide to starting your journey in C++ programming. Learn the fundamentals, object-oriented concepts, and memory management.",
    category: "C++",
    date: "May 15, 2024",
    readTime: "10 min read",
    author: "Biniyam Gebreslassie",
    rating: 5,
    icon: Braces,
    art: "from-indigo-700 via-blue-600 to-cyan-400",
  },
  {
    title: "The Future of Artificial Intelligence",
    excerpt: "Exploring how AI is transforming industries and what developers need to know to stay ahead in the coming decade.",
    category: "AI",
    date: "May 12, 2024",
    readTime: "8 min read",
    author: "Biniyam Gebreslassie",
    rating: 4,
    icon: Cpu,
    art: "from-violet-800 via-purple-600 to-pink-400",
  },
  {
    title: "Career Roadmap for Software Engineers",
    excerpt: "Practical tips and strategies to advance your tech career from junior to senior roles and beyond.",
    category: "Career",
    date: "May 10, 2024",
    readTime: "6 min read",
    author: "Biniyam Gebreslassie",
    rating: 5,
    icon: Compass,
    art: "from-orange-500 via-amber-400 to-yellow-200",
  },
];

function Rating({ value }: { value: number }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={12} className={index < value ? "fill-amber-400 text-amber-400" : "fill-transparent text-current/35"} aria-hidden="true" />
      ))}
    </span>
  );
}

export default function Blog() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesQuery = !normalizedQuery || `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Journal"
        title="Blog"
        description="Insights, tutorials, and ideas about technology and growth"
        currentPage="Blog"
        variant="blog"
      />

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-8 md:py-12" aria-label="Find articles">
        <div className="flex flex-col gap-5 rounded-[1.5rem] border border-border dark:border-border-dark bg-card/75 dark:bg-card-dark/75 p-5 md:p-6 shadow-sm">
          <label htmlFor="article-search" className="sr-only">Search articles</label>
          <div className="relative max-w-xl">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary dark:text-text-secondary-dark" aria-hidden="true" />
            <input
              id="article-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-xl border border-border dark:border-border-dark bg-bg dark:bg-bg-dark pl-12 pr-4 py-3 text-sm text-text dark:text-text-dark placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark shadow-sm transition-all focus:border-accent dark:focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent/20 dark:focus:ring-accent-dark/20"
            />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
            {categories.map((category) => {
              const selected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[.12em] transition-all ${
                    selected
                      ? "border-accent bg-accent text-white shadow-md shadow-accent/20 dark:border-accent-dark dark:bg-accent-dark dark:text-text-dark"
                      : "border-border dark:border-border-dark bg-bg/80 dark:bg-bg-dark/60 text-text-secondary dark:text-text-secondary-dark hover:border-accent/35 dark:hover:border-accent-dark/35 hover:text-text dark:hover:text-text-dark"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-text-secondary dark:text-text-secondary-dark" aria-live="polite">
            {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-16 md:pb-24" aria-label="Articles">
        {featuredPost ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            <motion.article
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
              className={`relative flex min-h-[430px] flex-col justify-end overflow-hidden rounded-[1.7rem] bg-gradient-to-br ${featuredPost.art} p-6 md:col-span-8 md:p-9`}
            >
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:24px_24px]" aria-hidden="true" />
              <ParallaxElement className="absolute right-[10%] top-[10%] grid h-40 w-40 place-items-center rounded-full border border-white/60 bg-white/20 shadow-[inset_-14px_-18px_30px_rgba(12,22,65,.24),inset_10px_10px_22px_rgba(255,255,255,.5),0_25px_48px_rgba(9,20,50,.24)] backdrop-blur-sm md:h-52 md:w-52" distance={24}>
                {(() => { const Icon = featuredPost.icon; return <Icon size={58} className="text-white/90" aria-hidden="true" />; })()}
              </ParallaxElement>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" aria-hidden="true" />
              <div className="relative z-10 max-w-2xl">
                <div className="mb-4 flex gap-2">
                  <span className="rounded-full border border-white/35 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[.12em] text-white backdrop-blur-sm">{featuredPost.category}</span>
                  {featuredPost.category === "C++" && <span className="rounded-full border border-white/35 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[.12em] text-white backdrop-blur-sm">Beginners</span>}
                </div>
                <h2 className="mb-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">{featuredPost.title}</h2>
                <p className="mb-6 max-w-xl text-sm leading-relaxed text-white/85">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between gap-4 border-t border-white/25 pt-4">
                  <div>
                    <p className="text-sm font-semibold text-white">{featuredPost.author}</p>
                    <p className="text-xs text-white/70">{featuredPost.date} &bull; {featuredPost.readTime}</p>
                  </div>
                  <Rating value={featuredPost.rating} />
                </div>
              </div>
            </motion.article>

            <div className="grid grid-cols-1 gap-4 md:col-span-4">
              {remainingPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, delay: index * 0.06, ease: [0.25, 0.4, 0.25, 1] }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-border dark:border-border-dark bg-card/85 dark:bg-card-dark/90 p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${post.art} opacity-15 blur-sm transition-transform duration-500 group-hover:scale-125`} aria-hidden="true" />
                  <span className="relative inline-flex rounded-full bg-accent/10 dark:bg-accent-dark/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[.13em] text-accent dark:text-accent-dark">{post.category}</span>
                  <h3 className="relative mt-4 text-lg font-semibold leading-snug tracking-tight text-text dark:text-text-dark">{post.title}</h3>
                  <p className="relative mt-2 line-clamp-2 text-xs leading-relaxed text-text-secondary dark:text-text-secondary-dark">{post.excerpt}</p>
                  <div className="relative mt-4 flex items-center justify-between border-t border-border dark:border-border-dark pt-3">
                    <span className="text-[10px] text-text-secondary dark:text-text-secondary-dark">{post.date} &bull; {post.readTime}</span>
                    <Rating value={post.rating} />
                  </div>
                </motion.article>
              ))}
            </div>

            {activeCategory === "All" && !query.trim() && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 md:col-span-12">
              {filteredPosts.map((post, index) => {
                const Icon = post.icon;
                return (
                  <motion.article
                    key={`detail-${post.title}`}
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="overflow-hidden rounded-[1.5rem] border border-border dark:border-border-dark bg-card/85 dark:bg-card-dark/90 shadow-sm"
                  >
                    <div className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${post.art}`} aria-hidden="true">
                      <div className="absolute h-24 w-24 rounded-full border border-white/70 bg-white/20 shadow-[inset_-10px_-12px_22px_rgba(19,26,44,.22),inset_8px_7px_16px_rgba(255,255,255,.5),0_18px_30px_rgba(14,20,45,.18)] backdrop-blur-sm" />
                      <Icon size={25} className="relative text-white" aria-hidden="true" />
                      <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-black/15 px-3 py-1 text-[9px] font-bold uppercase tracking-[.13em] text-white">{post.category}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold leading-snug text-text dark:text-text-dark">{post.title}</h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-text-secondary dark:text-text-secondary-dark">{post.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between text-[10px] text-text-secondary dark:text-text-secondary-dark">
                        <span>{post.date}</span><span>{post.readTime}</span>
                      </div>
                      <div className="mt-3 flex items-center justify-between border-t border-border dark:border-border-dark pt-3">
                        <Rating value={post.rating} />
                        <button type="button" disabled aria-disabled="true" className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-border dark:border-border-dark bg-surface/70 dark:bg-surface-dark/70 px-3 py-1.5 text-[10px] font-semibold text-text-secondary/70 dark:text-text-secondary-dark/70">
                          Enroll Now <ArrowUpRight size={12} aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-[1.5rem] border border-dashed border-border dark:border-border-dark bg-card/60 dark:bg-card-dark/50 px-6 py-16 text-center">
            <Search size={25} className="mx-auto text-accent dark:text-accent-dark" aria-hidden="true" />
            <p className="mt-4 text-lg font-semibold text-text dark:text-text-dark">No articles found</p>
            <p className="mt-2 text-sm text-text-secondary dark:text-text-secondary-dark">Try another search or category.</p>
          </div>
        )}
      </section>
    </PageTransition>
  );
}
