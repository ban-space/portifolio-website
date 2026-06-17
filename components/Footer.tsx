import Link from "next/link";
import { Hexagon, Mail, Phone, MapPin, Send, GitBranch, Briefcase, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-text dark:bg-card-dark text-card dark:text-text-dark border-t border-border dark:border-border-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Hexagon
                size={28}
                className="text-accent dark:text-accent-dark"
                fill="currentColor"
              />
              <span className="text-xl font-bold text-card dark:text-text-dark">
                Ban-Tech
              </span>
            </div>
            <p className="text-sm text-muted dark:text-text-secondary-dark max-w-[250px]">
              Designing, Building, and Teaching the Future of Technology
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/ban-space"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                aria-label="GitHub"
              >
                <GitBranch size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ban-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                aria-label="LinkedIn"
              >
                <Briefcase size={20} />
              </a>
              <a
                href="https://youtube.com/@ban_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                aria-label="YouTube"
              >
                <Play size={20} />
              </a>
              <a
                href="https://t.me/ban_devs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                aria-label="Telegram"
              >
                <Send size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold text-card dark:text-text-dark mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/blog", label: "Blog" },
                { href: "/course", label: "Course" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-card dark:text-text-dark mb-4">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-muted dark:text-text-secondary-dark">
                <Mail size={18} className="mt-0.5 shrink-0" />
                <span>banspace21@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted dark:text-text-secondary-dark">
                <Phone size={18} className="mt-0.5 shrink-0" />
                <span>0927789173</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted dark:text-text-secondary-dark">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted dark:text-text-secondary-dark">
                <Send size={18} className="mt-0.5 shrink-0" />
                <span>@ban_devs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border dark:border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted dark:text-text-secondary-dark">
            {'\u00a9'} 2024 Ban-Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
