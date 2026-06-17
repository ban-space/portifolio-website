"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function Contact() {
  return (
    <PageTransition>
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="flex items-center gap-2 mb-4 text-sm text-text-secondary dark:text-text-secondary-dark">
            <Link
              href="/"
              className="hover:text-accent dark:hover:text-accent-dark transition-colors"
            >
              Home
            </Link>
            <ArrowRight size={14} />
            <span className="font-semibold text-text dark:text-text-dark">
              Contact
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text dark:text-text-dark tracking-tight leading-[1.05] mb-4">
            Contact Me
          </h1>
          <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary-dark max-w-xl">
            Let&apos;s work together or just say hello!
          </p>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent-dark/10 dark:to-accent-dark/5 flex items-center justify-center text-accent dark:text-accent-dark shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-xs text-text-secondary dark:text-text-secondary-dark font-medium uppercase tracking-wider">Email</span>
                  <a
                    href="mailto:banspace21@gmail.com"
                    className="block text-sm font-semibold text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors mt-0.5"
                  >
                    banspace21@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent-dark/10 dark:to-accent-dark/5 flex items-center justify-center text-accent dark:text-accent-dark shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-xs text-text-secondary dark:text-text-secondary-dark font-medium uppercase tracking-wider">Phone</span>
                  <a
                    href="tel:0927789173"
                    className="block text-sm font-semibold text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors mt-0.5"
                  >
                    0927789173
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent-dark/10 dark:to-accent-dark/5 flex items-center justify-center text-accent dark:text-accent-dark shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs text-text-secondary dark:text-text-secondary-dark font-medium uppercase tracking-wider">Location</span>
                  <span className="block text-sm font-semibold text-text dark:text-text-dark mt-0.5">
                    Addis Ababa, Ethiopia
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent-dark/10 dark:to-accent-dark/5 flex items-center justify-center text-accent dark:text-accent-dark shrink-0">
                  <Send size={18} />
                </div>
                <div>
                  <span className="text-xs text-text-secondary dark:text-text-secondary-dark font-medium uppercase tracking-wider">Telegram</span>
                  <a
                    href="https://t.me/ban_devs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-semibold text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors mt-0.5"
                  >
                    @ban_devs
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-8 bg-card dark:bg-card-dark rounded-2xl border border-border dark:border-border-dark p-8 lg:p-10 shadow-sm"
          >
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-border dark:border-border-dark bg-bg dark:bg-bg-dark text-sm text-text dark:text-text-dark placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl border border-border dark:border-border-dark bg-bg dark:bg-bg-dark text-sm text-text dark:text-text-dark placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl border border-border dark:border-border-dark bg-bg dark:bg-bg-dark text-sm text-text dark:text-text-dark placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-border dark:border-border-dark bg-bg dark:bg-bg-dark text-sm text-text dark:text-text-dark placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark transition-all resize-y"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="group w-full md:w-auto px-8 py-3 rounded-xl bg-accent dark:bg-accent-dark text-white text-sm font-semibold hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Send Message
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
