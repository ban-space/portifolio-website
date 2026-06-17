"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Puzzle, Lightbulb, BookOpen } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

const traits = [
  {
    icon: Puzzle,
    title: "Problem Solver",
    description:
      "I love solving complex problems with simple and effective solutions",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinker",
    description:
      "Turning ideas into functional and meaningful products through intuitive user interfaces",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learner",
    description:
      "Always learning and exploring new technologies to stay at the forefront of the tech landscape",
  },
];

const timeline = [
  {
    period: "Early Years",
    title: "Hardware Exploration",
    description:
      "Started tinkering with hardware components in school, developing a deep fascination for how physical electronics operate and communicate.",
  },
  {
    period: "High School",
    title: "Technology Competitions",
    description:
      "Represented my school in international hardware and robotics competitions across different countries, gaining practical experience and global exposure.",
  },
  {
    period: "Transition",
    title: "Software Discovery and Self Learning",
    description:
      "Driven by curiosity about the software controlling the hardware, I pivoted my focus. I began teaching myself programming languages and software architecture from scratch.",
  },
  {
    period: "Present",
    title: "University Journey and Ban-Tech",
    description:
      "Currently pursuing Software Engineering at Bahir Dar University while building Ban-Tech to deliver digital solutions and share knowledge through educational content.",
  },
];

export default function About() {
  return (
    <PageTransition>
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border dark:border-border-dark bg-card dark:bg-card-dark">
            <span className="w-2 h-2 rounded-full bg-accent dark:text-accent-dark animate-pulse-soft" />
            <span className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-dark">
              About
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text dark:text-text-dark tracking-tight">
            About Me
          </h1>
          <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark">
            <Link
              href="/"
              className="hover:text-accent dark:hover:text-accent-dark transition-colors"
            >
              Home
            </Link>
            <ArrowRight size={14} />
            <span className="font-semibold text-text dark:text-text-dark">
              About
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[3/4] max-w-[380px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent rounded-2xl" />
              <Image
                src="/about.png"
                alt="Biniyam Gebreslassie"
                fill
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-4 tracking-tight leading-[1.1]">
                Founder of Ban-Tech
              </h2>
              <div className="text-base text-text-secondary dark:text-text-secondary-dark space-y-4 leading-relaxed">
                <p>
                  I am Biniyam Gebreselassie, the founder of Ban-Tech. My
                  passion for technology started in childhood when I worked with
                  hardware in school and competed in different countries.
                  Curious about how software works under the hardware, I began
                  teaching myself everything from the ground up. Today I build
                  digital solutions, create content, and teach technology to
                  help others grow.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "University", value: "Bahir Dar University" },
                { label: "Degree", value: "Third Year Software Engineering" },
                { label: "Focus", value: "Building, Teaching and Innovating" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl border border-border dark:border-border-dark bg-card dark:bg-card-dark shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-dark">
                    {item.label}
                  </span>
                  <p className="text-sm font-semibold text-text dark:text-text-dark mt-1 leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {traits.map((trait, i) => {
            const Icon = trait.icon;
            return (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-8 rounded-2xl border border-border dark:border-border-dark bg-card dark:bg-card-dark hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent-dark/10 dark:to-accent-dark/5 flex items-center justify-center text-accent dark:text-accent-dark group-hover:bg-accent dark:group-hover:bg-accent-dark group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-text dark:text-text-dark mt-4 mb-2 tracking-tight">
                  {trait.title}
                </h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                  {trait.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="max-w-[800px] mx-auto px-6 lg:px-10 pb-20">
        <SectionHeading title="My Journey" centered />
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border dark:bg-border-dark -translate-x-1/2" />
          {timeline.map((item, i) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="group grid grid-cols-[2.5rem_1fr] gap-x-4 pb-10 last:pb-0"
            >
              <div className="flex justify-center">
                <div className="w-5 h-5 rounded-full bg-transparent border-2 border-accent dark:border-accent-dark z-10 shadow-sm group-hover:bg-accent dark:group-hover:bg-accent-dark group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.35)] transition-all duration-300 ease-out" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-dark">
                  {item.period}
                </span>
                <h3 className="text-lg font-semibold text-text dark:text-text-dark mt-1 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-3 bg-card dark:bg-card-dark p-5 rounded-xl border border-border dark:border-border-dark leading-relaxed shadow-sm group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300 ease-out">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
