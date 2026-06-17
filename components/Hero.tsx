"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, GitBranch, Globe, Play, Send, Code, Bot } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden"
    >
      <motion.div style={{ y: bgY, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-accent/8 to-transparent rounded-full blur-[80px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-[60px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-gradient-to-r from-accent/4 to-transparent rounded-full blur-[50px]" />
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="z-10"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-accent dark:text-accent-dark text-sm font-semibold mb-4 tracking-wide"
            >
              Hello, I&apos;m <span className="font-bold">Biniyam Gebreslassie</span>
            </motion.p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text dark:text-text-dark tracking-tight leading-[1.05] mb-5">
              Designing, Building, and Teaching the Future of{" "}
              <span className="text-accent dark:text-accent-dark relative">
                Technology
                <span className="absolute -inset-1 bg-accent/10 dark:bg-accent-dark/10 blur-xl rounded-lg -z-10" />
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-text-secondary dark:text-text-secondary-dark max-w-lg leading-relaxed mb-8"
            >
              Ban-Tech delivers cutting-edge technology solutions that drive
              business growth, innovation, and efficiency.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-accent dark:bg-accent-dark text-white text-sm font-semibold py-3 px-6 rounded-xl hover:brightness-110 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 duration-200"
              >
                Get In Touch
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button className="group inline-flex items-center gap-2 border border-border dark:border-border-dark text-text dark:text-text-dark text-sm font-semibold py-3 px-6 rounded-xl hover:bg-surface dark:hover:bg-surface-dark hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-sm">
                Download CV
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-5 mt-10 text-text-secondary dark:text-text-secondary-dark"
            >
              {[
                { href: "https://github.com/ban-space", icon: GitBranch, label: "GitHub" },
                { href: "https://www.linkedin.com/in/ban-tech", icon: Globe, label: "LinkedIn" },
                { href: "https://youtube.com/@ban_tech", icon: Play, label: "YouTube" },
                { href: "https://t.me/ban_devs", icon: Send, label: "Telegram" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm hover:text-accent dark:hover:text-accent-dark transition-colors"
                >
                  <Icon size={16} className="group-hover:scale-110 transition-transform" />
                  <span>{label}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            className="relative flex justify-center lg:justify-end z-10"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-end justify-center">
              <Image
                src="/hero.png"
                alt="Biniyam Gebreslassie"
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, 420px"
              />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[18%] left-[-16px] md:left-[-32px] bg-card/80 dark:bg-card-dark/80 backdrop-blur-xl rounded-xl p-3 pr-4 flex items-center gap-3 shadow-lg border border-border dark:border-border-dark"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent-dark/10 dark:to-accent-dark/5 flex items-center justify-center text-accent dark:text-accent-dark">
                  <Code size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text dark:text-text-dark leading-tight">
                    Full Stack
                  </p>
                  <p className="text-[11px] text-text-secondary dark:text-text-secondary-dark leading-tight">
                    Developer
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[28%] right-[-8px] md:right-[-24px] bg-card/80 dark:bg-card-dark/80 backdrop-blur-xl rounded-xl p-3 pr-4 flex items-center gap-3 shadow-lg border border-border dark:border-border-dark"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent-dark/10 dark:to-accent-dark/5 flex items-center justify-center text-accent dark:text-accent-dark">
                  <Bot size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text dark:text-text-dark leading-tight">
                    AI Engineer
                  </p>
                  <p className="text-[11px] text-text-secondary dark:text-text-secondary-dark leading-tight">
                    &amp; Instructor
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
