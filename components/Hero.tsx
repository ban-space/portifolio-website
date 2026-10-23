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
  Download,
  GitBranch,
  Globe,
  Play,
  Send,
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
  const codeLift = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 72],
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
              sizes="(max-width: 700px) 124vw, 114vw"
              className={styles.artwork}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.devWindow}
          style={{ y: codeLift }}
          aria-hidden="true"
        >
          <div className={styles.devTopbar}>
            <span className={styles.devDots}>
              <i />
              <i />
              <i />
            </span>
            <span className={styles.devFilename}>src/builder.tsx</span>
            <span className={styles.devLanguage}>TSX</span>
          </div>
          <pre className={styles.devCode}>
            <code>
              <span className={styles.codeLine}>
                <span className={styles.tokenKeyword}>const</span>{" "}
                <span className={styles.tokenVariable}>builder</span> = {"{"}
              </span>
              <span className={`${styles.codeLine} ${styles.codeIndent}`}>
                <span className={styles.tokenProperty}>focus</span>: {" "}
                <span className={styles.tokenString}>&quot;software&quot;</span>,
              </span>
              <span className={`${styles.codeLine} ${styles.codeIndent}`}>
                <span className={styles.tokenProperty}>mission</span>: {" "}
                <span className={styles.tokenString}>&quot;solve problems&quot;</span>,
              </span>
              <span className={`${styles.codeLine} ${styles.codeIndent}`}>
                <span className={styles.tokenProperty}>ships</span>: {" "}
                <span className={styles.tokenBoolean}>true</span>,
              </span>
              <span className={styles.codeLine}>{"};"}</span>
            </code>
          </pre>
          <div className={styles.devFooter}>
            <span><span className={styles.devPrompt}>›</span> pnpm dev</span>
            <span className={styles.devBranch}>main</span>
          </div>
        </motion.div>

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
              <button
                type="button"
                className={styles.secondaryAction}
                disabled
                aria-disabled="true"
                title="CV document unavailable"
              >
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

        <div className={styles.bottomCaption} aria-hidden="true">
          <span>FORM FOLLOWS FEELING</span>
          <span>SCROLL TO SEE WHAT&apos;S NEXT <ArrowDownRight size={13} /></span>
        </div>
      </div>
    </section>
  );
}
