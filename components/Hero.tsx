"use client";

import { useRef, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Bot,
  Code,
  Download,
  GitBranch,
  Globe,
  Play,
  Send,
  Sparkles,
} from "lucide-react";
import styles from "./Hero.module.css";

const socialLinks = [
  { href: "https://github.com/ban-space", icon: GitBranch, label: "GitHub" },
  { href: "https://www.linkedin.com/in/ban-tech", icon: Globe, label: "LinkedIn" },
  { href: "https://youtube.com/@ban_tech", icon: Play, label: "YouTube" },
  { href: "https://t.me/ban_devs", icon: Send, label: "Telegram" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const pointerX = useSpring(useMotionValue(0), {
    stiffness: 72,
    damping: 24,
    mass: 0.7,
  });
  const pointerY = useSpring(useMotionValue(0), {
    stiffness: 72,
    damping: 24,
    mass: 0.7,
  });
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 1.27],
  );
  const imageLift = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 78],
  );
  const imageX = useTransform(pointerX, [-1, 1], [13, -13]);
  const imageY = useTransform(pointerY, [-1, 1], [10, -10]);

  function moveArtwork(event: PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;

    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  }

  function resetArtwork() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      ref={sectionRef}
      className={styles.hero}
      aria-labelledby="portfolio-hero-title"
      onPointerMove={moveArtwork}
      onPointerLeave={resetArtwork}
    >
      <div className={styles.stage}>
        <div className={styles.sceneGrid} aria-hidden="true" />
        <div className={styles.sceneIndex} aria-hidden="true">
          <span>CREATIVE TECHNOLOGY</span>
          <span>01 / 01</span>
        </div>

        <motion.div
          className={styles.imageZoom}
          style={{ scale: imageScale, y: imageLift }}
          aria-hidden="true"
        >
          <motion.div className={styles.imageDrift} style={{ x: imageX, y: imageY }}>
            <Image
              src="/hero-art.webp"
              alt="Abstract 3D sculpture of cobalt glass ribbons, polished chrome, and bright citrus-colored orbs"
              fill
              preload
              sizes="(max-width: 700px) 110vw, 74vw"
              className={styles.artwork}
            />
          </motion.div>
        </motion.div>

        <div className={styles.orbitNote} aria-hidden="true">
          <Sparkles size={20} strokeWidth={1.7} />
          <span>IDEAS IN<br />ANOTHER LIGHT</span>
        </div>

        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            HELLO, I&apos;M BINIYAM GEBRESLASSIE
          </p>

          <h1 className={styles.headline} id="portfolio-hero-title">
            Designing.<br />
            Building.<br />
            And teaching the<br />
            <em>future of technology.</em>
          </h1>

          <div className={styles.lowerCopy}>
            <p className={styles.description}>
              Ban-Tech delivers cutting-edge technology solutions that drive
              business growth, innovation, and efficiency.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryAction}>
                Get in touch
                <span className={styles.actionIcon}>
                  <ArrowRight size={17} aria-hidden="true" />
                </span>
              </Link>
              <button type="button" className={styles.secondaryAction}>
                Download CV
                <Download size={16} aria-hidden="true" />
              </button>
            </div>

            <nav className={styles.socialLinks} aria-label="Social links">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <Icon size={15} aria-hidden="true" />
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <motion.div
          className={`${styles.skillCard} ${styles.developerCard}`}
          animate={reduceMotion ? { y: 0 } : { y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
        >
          <span className={styles.skillIcon}><Code size={18} aria-hidden="true" /></span>
          <span><strong>Full Stack</strong><small>Developer</small></span>
        </motion.div>

        <motion.div
          className={`${styles.skillCard} ${styles.aiCard}`}
          animate={reduceMotion ? { y: 0 } : { y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
        >
          <span className={styles.skillIcon}><Bot size={18} aria-hidden="true" /></span>
          <span><strong>AI Engineer</strong><small>&amp; Instructor</small></span>
        </motion.div>

        <div className={styles.bottomCaption} aria-hidden="true">
          <span>FORM FOLLOWS FEELING</span>
          <span>SCROLL TO SEE WHAT&apos;S NEXT <ArrowDownRight size={13} /></span>
        </div>
      </div>
    </section>
  );
}
