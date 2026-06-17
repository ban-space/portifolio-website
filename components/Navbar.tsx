"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Hexagon, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/course", label: "Course" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center justify-between px-6 lg:px-10 transition-all duration-300 ${
          scrolled
            ? "bg-bg/80 dark:bg-bg-dark/80 backdrop-blur-xl border-b border-border dark:border-border-dark"
            : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <Hexagon
            size={28}
            className="text-accent dark:text-accent-dark"
            fill="currentColor"
          />
          <span className="text-xl font-bold text-text dark:text-text-dark">
            Ban-Tech
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-accent dark:text-accent-dark"
                    : "text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-text dark:text-text-dark hover:bg-surface dark:hover:bg-surface-dark transition-colors"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-card dark:bg-card-dark border-l border-border dark:border-border-dark shadow-xl"
            >
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-text dark:text-text-dark hover:bg-surface dark:hover:bg-surface-dark transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="flex flex-col gap-6 px-8 mt-4">
                {navLinks.map((link, i) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`text-lg font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-accent dark:text-accent-dark"
                            : "text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
