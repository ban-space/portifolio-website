"use client";

import Link from "next/link";
import {
  Hexagon,
  Code,
  Briefcase,
  Play,
  Send,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/course", label: "Course" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/ban-space", icon: Code, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/ban-tech",
    icon: Briefcase,
    label: "LinkedIn",
  },
  {
    href: "https://youtube.com/@ban_tech",
    icon: Play,
    label: "YouTube",
  },
  { href: "https://t.me/ban_devs", icon: Send, label: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-on-surface dark:bg-surface-dark">
      <div className="max-w-container-max mx-auto px-gutter py-section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Hexagon
                size={24}
                className="text-surface dark:text-primary-fixed"
                fill="currentColor"
              />
              <span className="font-bold text-card-title text-surface dark:text-surface-bright">
                Ban-Tech
              </span>
            </div>
            <p className="text-body-sm text-surface-variant dark:text-on-surface-variant max-w-[250px]">
              Designing, Building, and Teaching the Future of Technology
            </p>
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-surface-variant dark:text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-body-base font-bold text-surface dark:text-on-surface mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-surface-variant dark:text-on-surface-variant hover:text-primary-fixed-dim transition-colors w-fit"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-body-base font-bold text-surface dark:text-on-surface mb-4">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-body-sm text-surface-variant dark:text-on-surface-variant">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <span>banspace21@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-body-sm text-surface-variant dark:text-on-surface-variant">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>0927789173</span>
              </li>
              <li className="flex items-start gap-3 text-body-sm text-surface-variant dark:text-on-surface-variant">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-start gap-3 text-body-sm text-surface-variant dark:text-on-surface-variant">
                <Send size={16} className="mt-0.5 shrink-0" />
                <span>@ban_devs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-variant/20 dark:border-border-dark/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-surface-variant dark:text-on-surface-variant">
            &copy; 2024 Ban-Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
