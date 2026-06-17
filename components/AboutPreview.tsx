"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative"
        >
          <div className="relative w-full aspect-[3/4] max-w-[380px] mx-auto lg:mx-0">
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
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text dark:text-text-dark tracking-tight leading-[1.1]">
            About Ban-Tech
          </h2>
          <div className="text-base text-text-secondary dark:text-text-secondary-dark space-y-4 leading-relaxed">
            <p>
              I am Biniyam Gebreselassie, the founder of Ban-Tech. My passion
              for technology started in childhood when I worked with hardware in
              school and competed in different countries.
            </p>
            <p>
              Curious about how software works under the hardware, I began
              teaching myself everything from the ground up.
            </p>
            <p>
              Today I build digital solutions, create content, and teach
              technology to help others grow.
            </p>
          </div>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-accent dark:text-accent-dark text-sm font-semibold hover:brightness-110 transition-all mt-2"
          >
            Learn More About Me
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
