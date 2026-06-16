"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Puzzle, Lightbulb, BookOpen } from "lucide-react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function AboutPreview() {
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
          About Me
        </h2>
        <Link
          href="/about"
          className="text-primary dark:text-primary-fixed text-body-sm font-semibold flex items-center gap-1 hover:text-primary-container dark:hover:text-primary-fixed-dim transition-colors"
        >
          Learn More <ArrowRight size={14} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-full max-w-[400px] mx-auto aspect-[3/4]">
            <div className="absolute inset-0 bg-gradient-to-tr from-surface-dim/50 to-surface-bright/50 dark:from-surface-dark/30 dark:to-bg-dark/30 rounded-[40px]" />
            <Image
              src="/about.png"
              alt="Biniyam Gebreslassie"
              fill
              className="object-contain drop-shadow-xl"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-[28px] font-bold text-on-surface dark:text-surface-bright">
              Founder of Ban-Tech
            </h3>
            <div className="text-body-base text-text-secondary-light dark:text-text-secondary-dark flex flex-col gap-4">
              <p>
                I am Biniyam Gebreselassie, the founder of Ban-Tech. My passion
                for technology started in childhood when I worked with hardware
                in school and competed in different countries.
              </p>
              <p>
                Curious about how software works under the hardware, I began
                teaching myself everything from the ground up. Today I build
                digital solutions, create content, and teach technology to help
                others grow.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            <div className="p-5 rounded-card border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark hover:shadow-sm transition-shadow duration-300 flex flex-col gap-2">
              <span className="text-label-caps text-primary dark:text-primary-fixed uppercase tracking-wider">
                University
              </span>
              <span className="text-body-base font-semibold text-on-surface dark:text-surface-bright">
                Bahir Dar University
              </span>
            </div>
            <div className="p-5 rounded-card border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark hover:shadow-sm transition-shadow duration-300 flex flex-col gap-2">
              <span className="text-label-caps text-primary dark:text-primary-fixed uppercase tracking-wider">
                Degree
              </span>
              <span className="text-body-base font-semibold text-on-surface dark:text-surface-bright">
                Third Year Software Engineering
              </span>
            </div>
            <div className="p-5 rounded-card border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark hover:shadow-sm transition-shadow duration-300 flex flex-col gap-2">
              <span className="text-label-caps text-primary dark:text-primary-fixed uppercase tracking-wider">
                Focus
              </span>
              <span className="text-body-base font-semibold text-on-surface dark:text-surface-bright">
                Building, Teaching and Innovating
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
      >
        {traits.map((trait) => {
          const Icon = trait.icon;
          return (
            <motion.div
              key={trait.title}
              variants={itemVariants}
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
      </motion.div>
    </section>
  );
}
