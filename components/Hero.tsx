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
  const badge1Y = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const badge2Y = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      ref={ref}
      className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden"
    >
      <motion.div
        style={{
          y: bgY as any,
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        className="absolute top-20 right-[-200px] w-[800px] h-[800px] rounded-full pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="z-10"
          >
            <p className="text-accent dark:text-accent-dark text-sm font-semibold mb-3 tracking-wide">
              Hello, I&apos;m <span className="font-bold">Biniyam Gebreslassie</span>
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-text dark:text-text-dark tracking-tight leading-[1.1] mb-4">
              Designing, Building, and Teaching the Future of{" "}
              <span className="text-accent dark:text-accent-dark">Technology</span>
            </h1>
            <p className="text-base text-text-secondary dark:text-text-secondary-dark max-w-lg leading-relaxed mb-6">
              Ban-Tech delivers cutting-edge technology solutions that drive
              business growth, innovation, and efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent dark:bg-accent-dark text-white text-sm font-semibold py-3 px-6 rounded-xl hover:brightness-110 transition-all shadow-sm border border-white/20"
              >
                Get In Touch
                <ArrowRight size={16} />
              </Link>
              <button className="inline-flex items-center gap-2 border border-border dark:border-border-dark text-text dark:text-text-dark text-sm font-semibold py-3 px-6 rounded-xl hover:bg-surface dark:hover:bg-surface-dark transition-all">
                Download CV
                <Download size={16} />
              </button>
            </div>
            <div className="flex gap-5 mt-8 text-text-secondary dark:text-text-secondary-dark">
              <a
                href="https://github.com/ban-space"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent dark:hover:text-accent-dark transition-colors flex items-center gap-1.5 text-sm"
              >
                <GitBranch size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ban-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent dark:hover:text-accent-dark transition-colors flex items-center gap-1.5 text-sm"
              >
                <Globe size={18} /> LinkedIn
              </a>
              <a
                href="https://youtube.com/@ban_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent dark:hover:text-accent-dark transition-colors flex items-center gap-1.5 text-sm"
              >
                <Play size={18} /> YouTube
              </a>
              <a
                href="https://t.me/ban_devs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent dark:hover:text-accent-dark transition-colors flex items-center gap-1.5 text-sm"
              >
                <Send size={18} /> Telegram
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end z-10"
          >
            <div className="relative w-full max-w-[450px] aspect-[4/5] flex items-end justify-center">
              <Image
                src="/hero.png"
                alt="Biniyam Gebreslassie"
                fill
                priority
                className="object-contain object-bottom drop-shadow-xl"
                sizes="(max-width: 768px) 100vw, 450px"
              />

              <motion.div
                style={{ y: badge1Y }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[20%] left-[-20px] md:left-[-40px] bg-card/90 dark:bg-card-dark/90 backdrop-blur-sm rounded-xl p-3.5 flex items-center gap-3 shadow-lg border border-border dark:border-border-dark"
              >
                <div className="w-10 h-10 rounded-lg bg-surface dark:bg-surface-dark flex items-center justify-center text-accent dark:text-accent-dark">
                  <Code size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text dark:text-text-dark leading-tight">
                    Full Stack
                  </p>
                  <p className="text-xs text-text-secondary dark:text-text-secondary-dark leading-tight">
                    Developer
                  </p>
                </div>
              </motion.div>

              <motion.div
                style={{ y: badge2Y }}
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[30%] right-[-10px] md:right-[-30px] bg-card/90 dark:bg-card-dark/90 backdrop-blur-sm rounded-xl p-3.5 flex items-center gap-3 shadow-lg border border-border dark:border-border-dark"
              >
                <div className="w-10 h-10 rounded-lg bg-surface dark:bg-surface-dark flex items-center justify-center text-accent dark:text-accent-dark">
                  <Bot size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text dark:text-text-dark leading-tight">
                    AI Engineer
                  </p>
                  <p className="text-xs text-text-secondary dark:text-text-secondary-dark leading-tight">
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
