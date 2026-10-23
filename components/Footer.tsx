import Link from "next/link";
import { Hexagon, Mail, Phone, MapPin, Send, GitBranch, Briefcase, Play } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/ban-space", icon: GitBranch, label: "GitHub" },
  { href: "https://www.linkedin.com/in/ban-tech", icon: Briefcase, label: "LinkedIn" },
  { href: "https://youtube.com/@ban_tech", icon: Play, label: "YouTube" },
  { href: "https://t.me/ban_devs", icon: Send, label: "Telegram" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/course", label: "Course" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-border-dark bg-card/70 dark:bg-card-dark/80 backdrop-blur-xl">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-2.5 w-fit" aria-label="Ban-Tech home">
              <span className="grid w-9 h-9 place-items-center rounded-xl bg-accent/10 dark:bg-accent-dark/10">
                <Hexagon size={20} className="text-accent dark:text-accent-dark" fill="currentColor" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold text-text dark:text-text-dark tracking-tight">Ban-Tech</span>
            </Link>
            <p className="text-sm text-text-secondary dark:text-text-secondary-dark max-w-[270px] leading-relaxed">
              Designing, Building, and Teaching the Future of Technology
            </p>
            <nav className="flex gap-2 mt-1" aria-label="Social links">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark hover:bg-surface dark:hover:bg-surface-dark transition-all"
                  aria-label={label}
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-[11px] font-bold text-text dark:text-text-dark mb-4 uppercase tracking-[.16em]">Quick Links</h2>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-bold text-text dark:text-text-dark mb-4 uppercase tracking-[.16em]">Contact Info</h2>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-text-secondary-dark">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent dark:text-accent-dark" aria-hidden="true" />
                <a href="mailto:banspace21@gmail.com" className="hover:text-accent dark:hover:text-accent-dark transition-colors">banspace21@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-text-secondary-dark">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent dark:text-accent-dark" aria-hidden="true" />
                <a href="tel:0927789173" className="hover:text-accent dark:hover:text-accent-dark transition-colors">0927789173</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-text-secondary-dark">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent dark:text-accent-dark" aria-hidden="true" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-text-secondary-dark">
                <Send size={16} className="mt-0.5 shrink-0 text-accent dark:text-accent-dark" aria-hidden="true" />
                <a href="https://t.me/ban_devs" target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-accent-dark transition-colors">@ban_devs</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-11 pt-6 border-t border-border dark:border-border-dark flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-text-secondary dark:text-text-secondary-dark">
            &copy; {new Date().getFullYear()} Ban-Tech. All rights reserved.
          </p>
          <span className="text-[9px] font-semibold uppercase tracking-[.16em] text-text-secondary/70 dark:text-text-secondary-dark/70">Designing · Building · Teaching</span>
        </div>
      </div>
    </footer>
  );
}
