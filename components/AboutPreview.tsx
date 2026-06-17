"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-full aspect-[3/4] max-w-[400px] mx-auto lg:mx-0">
            <Image
              src="/about.png"
              alt="Biniyam Gebreslassie"
              fill
              className="object-contain drop-shadow-lg"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text dark:text-text-dark tracking-tight">
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
            className="inline-flex items-center gap-2 text-accent dark:text-accent-dark text-sm font-semibold hover:brightness-110 transition-all mt-2"
          >
            Learn More About Me <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
