import Link from "next/link";
import { Hexagon, Mail, Phone, MapPin, Send, GitBranch, Briefcase, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-border-dark bg-card dark:bg-card-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <Hexagon
                size={24}
                className="text-accent dark:text-accent-dark"
                fill="currentColor"
              />
              <span className="text-lg font-bold text-text dark:text-text-dark tracking-tight">
                Ban-Tech
              </span>
            </div>
            <p className="text-sm text-text-secondary dark:text-text-secondary-dark max-w-[250px] leading-relaxed">
              Designing, Building, and Teaching the Future of Technology
            </p>
            <div className="flex gap-3 mt-1">
              {[
                { href: "https://github.com/ban-space", icon: GitBranch, label: "GitHub" },
                { href: "https://www.linkedin.com/in/ban-tech", icon: Briefcase, label: "LinkedIn" },
                { href: "https://youtube.com/@ban_tech", icon: Play, label: "YouTube" },
                { href: "https://t.me/ban_devs", icon: Send, label: "Telegram" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark hover:bg-surface dark:hover:bg-surface-dark transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text dark:text-text-dark mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
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
                    className="text-sm text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text dark:text-text-dark mb-4 uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-text-secondary-dark">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent dark:text-accent-dark" />
                <span>banspace21@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-text-secondary-dark">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent dark:text-accent-dark" />
                <span>0927789173</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-text-secondary-dark">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent dark:text-accent-dark" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-text-secondary-dark">
                <Send size={16} className="mt-0.5 shrink-0 text-accent dark:text-accent-dark" />
                <span>@ban_devs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border dark:border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
            &copy; 2024 Ban-Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
