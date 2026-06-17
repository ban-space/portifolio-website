"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function Contact() {
  return (
    <PageTransition>
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-12 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text dark:text-text-dark tracking-tight mb-4">
            Contact Me
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
              Contact
            </span>
          </div>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            <p className="text-base text-text-secondary dark:text-text-secondary-dark">
              Let&apos;s work together or just say hello!
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface dark:bg-surface-dark flex items-center justify-center text-accent dark:text-accent-dark shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs text-text-secondary dark:text-text-secondary-dark font-medium">Email</span>
                  <a
                    href="mailto:banspace21@gmail.com"
                    className="block text-sm font-semibold text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                  >
                    banspace21@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface dark:bg-surface-dark flex items-center justify-center text-accent dark:text-accent-dark shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs text-text-secondary dark:text-text-secondary-dark font-medium">Phone</span>
                  <a
                    href="tel:0927789173"
                    className="block text-sm font-semibold text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                  >
                    0927789173
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface dark:bg-surface-dark flex items-center justify-center text-accent dark:text-accent-dark shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs text-text-secondary dark:text-text-secondary-dark font-medium">Location</span>
                  <span className="block text-sm font-semibold text-text dark:text-text-dark">
                    Addis Ababa, Ethiopia
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface dark:bg-surface-dark flex items-center justify-center text-accent dark:text-accent-dark shrink-0">
                  <Send size={20} />
                </div>
                <div>
                  <span className="text-xs text-text-secondary dark:text-text-secondary-dark font-medium">Telegram</span>
                  <a
                    href="https://t.me/ban_devs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-semibold text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
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
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-8 bg-card dark:bg-card-dark rounded-2xl border border-border dark:border-border-dark p-8 lg:p-10 shadow-sm"
          >
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="w-full md:w-auto px-8 py-3 rounded-xl bg-accent dark:bg-accent-dark text-white text-sm font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  Send Message
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
