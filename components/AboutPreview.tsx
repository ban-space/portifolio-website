"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ParallaxElement from "./ParallaxElement";
import ScrollSideReveal from "./ScrollSideReveal";

export default function AboutPreview() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollSideReveal direction="left" className="relative mx-auto w-full max-w-[460px]">
          <ParallaxElement className="pointer-events-none absolute -inset-6" distance={84}>
            <div className="h-full w-full rounded-[2rem] bg-gradient-to-br from-accent/18 via-transparent to-coral/16 blur-2xl" />
          </ParallaxElement>
          <ParallaxElement className="relative aspect-[4/4.3] overflow-hidden rounded-[1.8rem] border border-border dark:border-border-dark bg-gradient-to-br from-surface to-card dark:from-surface-dark dark:to-card-dark shadow-lg" distance={112} decorative={false}>
            <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" aria-hidden="true" />
            <div className="absolute -right-7 top-10 h-24 w-24 rounded-full border border-accent/20 dark:border-accent-dark/20" aria-hidden="true" />
            <Image
              src="/about.png"
              alt="Biniyam Gebreslassie"
              fill
              className="object-contain object-bottom drop-shadow-xl"
              sizes="(max-width: 768px) 90vw, 460px"
            />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-card/80 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[.13em] text-text shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-card-dark/80 dark:text-text-dark">
              <Sparkles size={14} className="text-coral" aria-hidden="true" />
              Ban-Tech
            </div>
          </ParallaxElement>
        </ScrollSideReveal>

        <ScrollSideReveal direction="right" className="flex flex-col gap-6">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-accent dark:text-accent-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
              About
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text dark:text-text-dark tracking-tight leading-[1.04]">
              About Ban-Tech
            </h2>
          </div>
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
            className="group inline-flex items-center gap-3 text-accent dark:text-accent-dark text-sm font-semibold mt-1 w-fit"
          >
            Learn More About Me
            <span className="grid w-9 h-9 place-items-center rounded-full border border-accent/25 dark:border-accent-dark/25 transition-all group-hover:bg-accent group-hover:text-white dark:group-hover:bg-accent-dark dark:group-hover:text-text-dark group-hover:translate-x-1">
              <ArrowRight size={16} aria-hidden="true" />
            </span>
          </Link>
        </ScrollSideReveal>
      </div>
    </section>
  );
}
