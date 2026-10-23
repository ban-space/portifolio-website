"use client";

import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";

function openEmailDraft(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const subject = String(formData.get("subject") ?? "");
  const message = String(formData.get("message") ?? "");
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  window.location.href = `mailto:banspace21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const contactMethods = [
  { icon: Mail, label: "Email", value: "banspace21@gmail.com", href: "mailto:banspace21@gmail.com" },
  { icon: Phone, label: "Phone", value: "0927789173", href: "tel:0927789173" },
  { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia" },
  { icon: Send, label: "Telegram", value: "@ban_devs", href: "https://t.me/ban_devs", external: true },
];

export default function Contact() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Say hello"
        title="Contact Me"
        description="Let's work together or just say hello!"
        currentPage="Contact"
        variant="contact"
      />

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-8 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-stretch">
          <motion.aside
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.42, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative overflow-hidden rounded-[1.6rem] border border-border dark:border-border-dark bg-card/80 dark:bg-card-dark/85 p-6 md:p-8 shadow-sm lg:col-span-4"
          >
            <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border border-accent/10 dark:border-accent-dark/10" aria-hidden="true" />
            <div className="relative z-10">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[.15em] text-accent dark:text-accent-dark">Contact details</p>
              <h2 className="text-xl font-semibold text-text dark:text-text-dark tracking-tight">Let&apos;s connect</h2>
              <div className="mt-7 flex flex-col gap-6">
                {contactMethods.map(({ icon: Icon, label, value, href, external }) => (
                  <div key={label} className="flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/10 dark:border-accent-dark/15 bg-gradient-to-br from-accent/12 to-coral/10 text-accent dark:text-accent-dark">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <span className="block text-[9px] font-bold uppercase tracking-[.14em] text-text-secondary dark:text-text-secondary-dark">{label}</span>
                      {href ? (
                        <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="mt-1 block break-all text-sm font-semibold text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark transition-colors">{value}</a>
                      ) : (
                        <span className="mt-1 block text-sm font-semibold text-text dark:text-text-dark">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-2 rounded-xl border border-border dark:border-border-dark bg-bg/80 dark:bg-bg-dark/70 px-4 py-3 text-xs text-text-secondary dark:text-text-secondary-dark">
                <Sparkles size={15} className="shrink-0 text-coral" aria-hidden="true" />
                <span>Find me on Telegram at @ban_devs</span>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.42, delay: 0.06, ease: [0.25, 0.4, 0.25, 1] }}
            className="rounded-[1.6rem] border border-border dark:border-border-dark bg-card/85 dark:bg-card-dark/90 p-5 md:p-8 lg:p-10 shadow-sm lg:col-span-8"
          >
            <div className="mb-6">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[.15em] text-accent dark:text-accent-dark">Send a message</p>
              <h2 className="text-xl font-semibold text-text dark:text-text-dark tracking-tight">Tell me what you&apos;re building</h2>
            </div>
            <form onSubmit={openEmailDraft} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input id="name" name="name" type="text" placeholder="Your Name" required autoComplete="name" className="w-full rounded-xl border border-border dark:border-border-dark bg-bg dark:bg-bg-dark px-4 py-3.5 text-sm text-text dark:text-text-dark placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark transition-all focus:border-accent dark:focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent/15 dark:focus:ring-accent-dark/15" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input id="email" name="email" type="email" placeholder="Your Email" required autoComplete="email" className="w-full rounded-xl border border-border dark:border-border-dark bg-bg dark:bg-bg-dark px-4 py-3.5 text-sm text-text dark:text-text-dark placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark transition-all focus:border-accent dark:focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent/15 dark:focus:ring-accent-dark/15" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Subject" required className="w-full rounded-xl border border-border dark:border-border-dark bg-bg dark:bg-bg-dark px-4 py-3.5 text-sm text-text dark:text-text-dark placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark transition-all focus:border-accent dark:focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent/15 dark:focus:ring-accent-dark/15" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea id="message" name="message" placeholder="Your Message" rows={6} required className="w-full resize-y rounded-xl border border-border dark:border-border-dark bg-bg dark:bg-bg-dark px-4 py-3.5 text-sm text-text dark:text-text-dark placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark transition-all focus:border-accent dark:focus:border-accent-dark focus:outline-none focus:ring-2 focus:ring-accent/15 dark:focus:ring-accent-dark/15" />
              </div>
              <div>
                <button type="submit" className="group inline-flex min-h-12 w-full md:w-auto items-center justify-center gap-3 rounded-full bg-accent dark:bg-accent-dark px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 dark:text-text-dark">
                  Open Email Draft
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20"><ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></span>
                </button>
                <p className="mt-3 text-xs text-text-secondary dark:text-text-secondary-dark">
                  Your email app opens with the message ready for you to review and send.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
