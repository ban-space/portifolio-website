"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Code, Puzzle, Lightbulb, BookOpen } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

const educationCards = [
  {
    label: "University",
    value: "Bahir Dar University",
  },
  {
    label: "Degree",
    value: "Third Year Software Engineering",
  },
  {
    label: "Focus",
    value: "Building, Teaching and Innovating",
  },
];

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
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 500], [0, -15]);
  const watermarkY = useTransform(scrollY, [0, 500], [0, 30]);

  return (
    <PageTransition>
      <div className="max-w-container-max mx-auto px-gutter pt-12 pb-section-padding">
        <SectionHeading title="About Me" centered />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="flex items-center justify-center gap-2 text-body-sm text-text-secondary-light dark:text-text-secondary-dark mb-16"
        >
          <Link
            href="/"
            className="hover:text-primary dark:hover:text-primary-fixed transition-colors"
          >
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="font-semibold text-on-surface dark:text-surface-bright">
            About
          </span>
        </motion.div>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div
            style={{ y: portraitY }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-[450px] mx-auto aspect-[3/4]">
              <div className="absolute inset-0 bg-gradient-to-tr from-surface-dim/50 to-surface-bright/50 dark:from-surface-dark/30 dark:to-bg-dark/30 rounded-[40px]" />
              <Image
                src="/about.png"
                alt="Biniyam Gebreslassie"
                fill
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 768px) 100vw, 450px"
                priority
              />
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-section-heading font-bold text-on-surface dark:text-surface-bright">
                Founder of Ban-Tech
              </h2>
              <div className="text-body-base text-text-secondary-light dark:text-text-secondary-dark flex flex-col gap-4">
                <p>
                  I am Biniyam Gebreselassie, the founder of Ban-Tech. My
                  passion for technology started in childhood when I worked with
                  hardware in school and competed in different countries.
                </p>
                <p>
                  Curious about how software works under the hardware, I began
                  teaching myself everything from the ground up. Today I build
                  digital solutions, create content, and teach technology to
                  help others grow.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {educationCards.map((card) => (
                <div
                  key={card.label}
                  className="p-6 rounded-card border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark hover:shadow-sm transition-shadow duration-300 flex flex-col gap-2"
                >
                  <span className="text-label-caps text-primary dark:text-primary-fixed uppercase tracking-wider">
                    {card.label}
                  </span>
                  <span className="text-body-base font-semibold text-on-surface dark:text-surface-bright">
                    {card.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {traits.map((trait) => {
            const Icon = trait.icon;
            return (
              <motion.div
                key={trait.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -2, transition: { duration: 0.3 } }}
                className="group p-8 rounded-card border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark hover:shadow-sm transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-surface-container dark:bg-surface-container-high flex items-center justify-center text-primary dark:text-primary-fixed group-hover:bg-primary group-hover:text-on-primary dark:group-hover:bg-primary-container dark:group-hover:text-on-primary transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-card-title text-on-surface dark:text-surface-bright mb-2">
                    {trait.title}
                  </h3>
                  <p className="text-body-base text-text-secondary-light dark:text-text-secondary-dark">
                    {trait.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.section>

        <section className="max-w-3xl mx-auto w-full relative">
          <motion.h2
            style={{ y: watermarkY }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-section-heading font-bold text-center text-on-surface dark:text-surface-bright mb-12"
          >
            My Journey
          </motion.h2>

          <div className="relative flex flex-col gap-8 py-4">
            <div className="absolute top-0 bottom-0 left-6 w-[2px] bg-border-light dark:bg-border-dark z-0" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="relative pl-16 flex flex-col gap-2 group"
              >
                <div className="absolute left-[18px] top-1 w-4 h-4 rounded-full bg-card-light dark:bg-card-dark border-2 border-primary dark:border-primary-fixed z-10 group-hover:bg-primary dark:group-hover:bg-primary-fixed transition-colors duration-300 shadow-[0_0_0_4px_#F8FAFC] dark:shadow-[0_0_0_4px_#0B1120]" />
                <span className="text-label-caps text-primary dark:text-primary-fixed uppercase tracking-wider">
                  {item.period}
                </span>
                <h3 className="font-semibold text-card-title text-on-surface dark:text-surface-bright">
                  {item.title}
                </h3>
                <p className="text-body-base text-text-secondary-light dark:text-text-secondary-dark bg-card-light dark:bg-card-dark p-6 rounded-card border border-border-light dark:border-border-dark shadow-sm mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
