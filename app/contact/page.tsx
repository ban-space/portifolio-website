"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function Contact() {
  return (
    <PageTransition>
      <div className="max-w-container-max mx-auto px-gutter pt-12 pb-section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-section-heading font-bold text-on-surface dark:text-surface-bright mb-4">
            Contact Me
          </h1>
          <div className="flex items-center gap-2 text-body-sm text-on-surface-variant dark:text-text-secondary-dark">
            <Link
              href="/"
              className="hover:text-primary dark:hover:text-primary-fixed transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-on-surface dark:text-surface-bright font-semibold">
              Contact
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            <p className="text-body-base text-on-surface-variant dark:text-text-secondary-dark">
              Let&apos;s work together or just say hello!
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high dark:bg-surface-container-high text-primary dark:text-primary-fixed shrink-0">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-body-sm text-on-surface-variant dark:text-text-secondary-dark mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:banspace21@gmail.com"
                    className="text-body-base font-semibold text-on-surface dark:text-surface-bright hover:text-primary dark:hover:text-primary-fixed transition-colors"
                  >
                    banspace21@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high dark:bg-surface-container-high text-primary dark:text-primary-fixed shrink-0">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-body-sm text-on-surface-variant dark:text-text-secondary-dark mb-1">
                    Phone
                  </span>
                  <a
                    href="tel:0927789173"
                    className="text-body-base font-semibold text-on-surface dark:text-surface-bright hover:text-primary dark:hover:text-primary-fixed transition-colors"
                  >
                    0927789173
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high dark:bg-surface-container-high text-primary dark:text-primary-fixed shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-body-sm text-on-surface-variant dark:text-text-secondary-dark mb-1">
                    Location
                  </span>
                  <span className="text-body-base font-semibold text-on-surface dark:text-surface-bright">
                    Addis Ababa, Ethiopia
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high dark:bg-surface-container-high text-primary dark:text-primary-fixed shrink-0">
                  <Send size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-body-sm text-on-surface-variant dark:text-text-secondary-dark mb-1">
                    Telegram
                  </span>
                  <a
                    href="https://t.me/ban_devs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-base font-semibold text-on-surface dark:text-surface-bright hover:text-primary dark:hover:text-primary-fixed transition-colors"
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
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-8 bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-8 lg:p-10"
          >
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-container-lowest dark:bg-surface-dark text-body-base text-on-surface dark:text-surface-bright placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-fixed focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-container-lowest dark:bg-surface-dark text-body-base text-on-surface dark:text-surface-bright placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-fixed focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-container-lowest dark:bg-surface-dark text-body-base text-on-surface dark:text-surface-bright placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-fixed focus:border-transparent transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-container-lowest dark:bg-surface-dark text-body-base text-on-surface dark:text-surface-bright placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-fixed focus:border-transparent transition-all resize-y"
                />
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  className="group w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-primary-container to-blue-400 text-on-primary text-body-base font-semibold hover:brightness-110 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
