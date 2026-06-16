"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Code, Briefcase, Play, Send } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const badgeY = useTransform(scrollY, [0, 500], [0, -20]);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 right-[-200px] w-[800px] h-[800px] rounded-full pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(255,255,255,0) 70%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-container-max mx-auto px-gutter relative z-10">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-primary dark:text-primary-fixed text-body-base font-semibold mb-2 tracking-wide">
              Hello, I&apos;m{" "}
              <span className="font-bold">Biniyam Gebreslassie</span>
            </p>
            <h1 className="font-bold text-hero-display-mobile md:text-hero-display text-on-surface dark:text-surface-bright mb-4 tracking-tight">
              Designing, Building, and Teaching the Future of{" "}
              <span className="text-primary-container dark:text-primary-fixed">
                Technology
              </span>
            </h1>
            <p className="text-body-base text-text-secondary-light dark:text-text-secondary-dark max-w-lg leading-relaxed">
              Ban-Tech delivers cutting-edge technology solutions that drive
              business growth, innovation, and efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-container to-[#60A5FA] text-on-primary font-semibold py-3 px-6 rounded-2xl shadow-sm hover:brightness-105 transition-all border border-white/20"
            >
              Get In Touch
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <button className="inline-flex items-center gap-2 bg-transparent border border-outline-variant dark:border-border-dark text-on-surface dark:text-surface-bright font-semibold py-3 px-6 rounded-2xl hover:bg-surface-container dark:hover:bg-surface-container-high transition-all">
              Download CV
              <Download size={16} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 mt-6 text-text-secondary-light dark:text-text-secondary-dark text-body-sm"
          >
            <a
              href="https://github.com/ban-space"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-primary-fixed transition-colors flex items-center gap-1.5"
            >
              <Code size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ban-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-primary-fixed transition-colors flex items-center gap-1.5"
            >
              <Briefcase size={18} /> LinkedIn
            </a>
            <a
              href="https://youtube.com/@ban_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-primary-fixed transition-colors flex items-center gap-1.5"
            >
              <Play size={18} /> YouTube
            </a>
            <a
              href="https://t.me/ban_devs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-primary-fixed transition-colors flex items-center gap-1.5"
            >
              <Send size={18} /> Telegram
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[500px] aspect-[4/5] flex items-end justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-surface-dim/50 to-surface-bright/50 dark:from-surface-dark/30 dark:to-bg-dark/30 rounded-[40px]" />

            <Image
              src="/hero.png"
              alt="Biniyam Gebreslassie - Ban-Tech Founder"
              fill
              priority
              className="object-contain object-bottom scale-110 drop-shadow-xl"
              sizes="(max-width: 768px) 100vw, 500px"
            />

            <motion.div
              style={{ y: badgeY }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[20%] left-[-20px] md:left-[-40px] bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 shadow-lg border border-border-light dark:border-border-dark z-20"
            >
              <div className="bg-surface-container dark:bg-surface-container-high rounded-lg p-2 text-primary dark:text-primary-fixed">
                <Code size={20} />
              </div>
              <div>
                <p className="text-body-sm font-semibold text-on-surface dark:text-surface-bright leading-tight">
                  Full Stack
                </p>
                <p className="text-body-sm text-text-secondary-light dark:text-text-secondary-dark leading-tight">
                  Developer
                </p>
              </div>
            </motion.div>

            <motion.div
              style={{ y: badgeY }}
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[30%] right-[-10px] md:right-[-30px] bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 shadow-lg border border-border-light dark:border-border-dark z-20"
            >
              <div className="bg-surface-container dark:bg-surface-container-high rounded-lg p-2 text-primary dark:text-primary-fixed">
                <Briefcase size={20} />
              </div>
              <div>
                <p className="text-body-sm font-semibold text-on-surface dark:text-surface-bright leading-tight">
                  AI Engineer
                </p>
                <p className="text-body-sm text-text-secondary-light dark:text-text-secondary-dark leading-tight">
                  &amp; Instructor
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
