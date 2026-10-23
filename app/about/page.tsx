"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Puzzle, Lightbulb, BookOpen, Sparkles } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";

const traits = [
  {
    icon: Puzzle,
    title: "Problem Solver",
    description: "I love solving complex problems with simple and effective solutions",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinker",
    description: "Turning ideas into functional and meaningful products through intuitive user interfaces",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learner",
    description: "Always learning and exploring new technologies to stay at the forefront of the tech landscape",
  },
];

const timeline = [
  {
    period: "Early Years",
    title: "Hardware Exploration",
    description: "Started tinkering with hardware components in school, developing a deep fascination for how physical electronics operate and communicate.",
  },
  {
    period: "High School",
    title: "Technology Competitions",
    description: "Represented my school in international hardware and robotics competitions across different countries, gaining practical experience and global exposure.",
  },
  {
    period: "Transition",
    title: "Software Discovery and Self Learning",
    description: "Driven by curiosity about the software controlling the hardware, I pivoted my focus. I began teaching myself programming languages and software architecture from scratch.",
  },
  {
    period: "Present",
    title: "University Journey and Ban-Tech",
    description: "Currently pursuing Software Engineering at Bahir Dar University while building Ban-Tech to deliver digital solutions and share knowledge through educational content.",
  },
];

export default function About() {
  return (
    <PageTransition>
      <PageHeader eyebrow="About" title="About Me" currentPage="About" variant="about" />

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-accent/15 via-transparent to-coral/12 blur-2xl" aria-hidden="true" />
            <div className="relative mx-auto aspect-[4/4.6] w-full max-w-[400px] overflow-hidden rounded-[1.8rem] border border-border dark:border-border-dark bg-gradient-to-br from-surface to-card dark:from-surface-dark dark:to-card-dark shadow-lg">
              <div className="absolute right-7 top-7 h-24 w-24 rounded-full border border-accent/20 dark:border-accent-dark/20" aria-hidden="true" />
              <Image
                src="/about.png"
                alt="Biniyam Gebreslassie"
                fill
                className="object-contain object-bottom drop-shadow-xl"
                sizes="(max-width: 768px) 90vw, 400px"
              />
              <div className="absolute bottom-4 left-4 grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-card/80 text-coral shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-card-dark/80">
                <Sparkles size={17} aria-hidden="true" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-7 flex flex-col gap-7"
          >
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-accent dark:text-accent-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
                Founder of Ban-Tech
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-4 tracking-tight leading-[1.06]">From Hardware to Software</h2>
              <p className="text-base text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                I am Biniyam Gebreselassie, the founder of Ban-Tech. My passion for technology started in childhood when I worked with hardware in school and competed in different countries. Curious about how software works under the hardware, I began teaching myself everything from the ground up. Today I build digital solutions, create content, and teach technology to help others grow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "University", value: "Bahir Dar University" },
                { label: "Degree", value: "Third Year Software Engineering" },
                { label: "Focus", value: "Building, Teaching and Innovating" },
              ].map((item, index) => (
                <div key={item.label} className="relative overflow-hidden rounded-2xl border border-border dark:border-border-dark bg-card/85 dark:bg-card-dark/85 p-4 shadow-sm">
                  <span className={`absolute left-0 top-0 h-1 w-full ${index === 1 ? "bg-coral" : "bg-accent dark:bg-accent-dark"}`} aria-hidden="true" />
                  <span className="text-[9px] font-bold uppercase tracking-[.14em] text-accent dark:text-accent-dark">{item.label}</span>
                  <p className="mt-2 text-sm font-semibold leading-snug text-text dark:text-text-dark">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {traits.map((trait, index) => {
            const Icon = trait.icon;
            return (
              <motion.article
                key={trait.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.42, delay: index * 0.07, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-[1.5rem] border border-border dark:border-border-dark bg-card/85 dark:bg-card-dark/90 p-6 md:p-7 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <span className="grid w-12 h-12 place-items-center rounded-[1rem] bg-gradient-to-br from-accent/12 to-coral/12 text-accent dark:text-accent-dark transition-transform group-hover:-rotate-6 group-hover:scale-105">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold text-text dark:text-text-dark mt-5 mb-2 tracking-tight">{trait.title}</h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark leading-relaxed">{trait.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="max-w-[880px] mx-auto px-6 lg:px-10 py-10 md:py-20">
        <SectionHeading title="My Journey" centered />
        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px -translate-x-1/2 bg-gradient-to-b from-coral via-accent/60 to-transparent dark:via-accent-dark/60" aria-hidden="true" />
          {timeline.map((item, index) => (
            <motion.article
              key={item.period}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.42, delay: index * 0.07, ease: [0.25, 0.4, 0.25, 1] }}
              className="group grid grid-cols-[2.5rem_1fr] gap-x-4 pb-8 last:pb-0"
            >
              <div className="flex justify-center pt-1">
                <span className="relative z-10 h-3.5 w-3.5 rounded-full border-[3px] border-card bg-accent shadow-[0_0_0_1px_var(--color-accent)] dark:border-bg-dark dark:bg-accent-dark dark:shadow-[0_0_0_1px_var(--color-accent-dark)]" aria-hidden="true" />
              </div>
              <div className="rounded-[1.35rem] border border-border dark:border-border-dark bg-card/75 dark:bg-card-dark/80 p-5 md:p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
                <span className="text-[10px] font-bold uppercase tracking-[.15em] text-accent dark:text-accent-dark">{item.period}</span>
                <h3 className="text-lg font-semibold text-text dark:text-text-dark mt-1 tracking-tight">{item.title}</h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-3 leading-relaxed">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
