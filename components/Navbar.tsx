"use client";

import { useEffect, useRef, useState } from "react";
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreMenuFocusRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!restoreMenuFocusRef.current) return;
    restoreMenuFocusRef.current = false;
    menuButtonRef.current?.focus();
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-5 sm:px-6 lg:px-10 transition-all duration-500 ${
          scrolled
            ? "bg-bg/80 dark:bg-bg-dark/80 backdrop-blur-2xl border-b border-border dark:border-border-dark shadow-xs"
            : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Ban-Tech home">
          <motion.span
            className="grid w-9 h-9 place-items-center rounded-xl bg-accent/10 dark:bg-accent-dark/10"
            whileHover={{ rotate: 12, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <Hexagon size={20} className="text-accent dark:text-accent-dark" fill="currentColor" aria-hidden="true" />
          </motion.span>
          <span className="text-lg font-bold text-text dark:text-text-dark tracking-tight">
            Ban-Tech
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 rounded-full border border-border dark:border-border-dark bg-card/70 dark:bg-card-dark/70 p-1 backdrop-blur-xl">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-[12px] font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-text-secondary dark:text-text-secondary-dark hover:text-text dark:hover:text-text-dark hover:bg-surface/70 dark:hover:bg-surface-dark/70"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-accent dark:bg-accent-dark"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-text dark:text-text-dark hover:bg-surface dark:hover:bg-surface-dark transition-colors"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-panel"
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 cursor-default bg-black/55 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />
            <motion.div
              ref={panelRef}
              id="mobile-navigation-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[51] w-[min(86vw,340px)] bg-card dark:bg-card-dark border-l border-border dark:border-border-dark shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 pt-5 pb-3">
                <span className="text-sm font-semibold text-text dark:text-text-dark">Ban-Tech</span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeMobileMenu}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-text dark:text-text-dark hover:bg-surface dark:hover:bg-surface-dark transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4 pt-4">
                {navLinks.map((link, i) => {
                  const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.035, duration: 0.24 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => {
                          restoreMenuFocusRef.current = true;
                          setMobileOpen(false);
                          if (link.href === pathname) {
                            window.requestAnimationFrame(() => {
                              restoreMenuFocusRef.current = false;
                              menuButtonRef.current?.focus();
                            });
                          }
                        }}
                        aria-current={isActive ? "page" : undefined}
                        className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                          isActive
                            ? "bg-accent/10 text-accent dark:text-accent-dark"
                            : "text-text dark:text-text-dark hover:bg-surface dark:hover:bg-surface-dark"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
