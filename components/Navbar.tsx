"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Hexagon, X, Menu } from "lucide-react";
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-[80px] z-50 flex items-center justify-between px-gutter max-w-container-max mx-auto w-full transition-all duration-300 ${
          scrolled
            ? "bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark shadow-sm"
            : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <Hexagon
            size={28}
            className="text-primary dark:text-primary-fixed transition-colors"
            fill="currentColor"
          />
          <span className="font-bold text-card-title text-on-surface dark:text-surface-bright">
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
                className={`text-body-base font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-primary dark:text-primary-fixed font-bold"
                    : "text-on-surface dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 text-on-surface dark:text-surface-bright hover:bg-surface-container dark:hover:bg-surface-container-high rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[300px] bg-card-light dark:bg-card-dark border-l border-border-light dark:border-border-dark shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-border-light dark:border-border-dark">
                <span className="font-bold text-card-title text-on-surface dark:text-surface-bright">
                  Menu
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-on-surface dark:text-surface-bright hover:bg-surface-container dark:hover:bg-surface-container-high rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-2">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 rounded-xl text-body-base font-semibold transition-all ${
                        isActive
                          ? "bg-primary-fixed text-primary dark:bg-primary-container dark:text-on-primary"
                          : "text-on-surface dark:text-on-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-high"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
