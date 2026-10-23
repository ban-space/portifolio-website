import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ParallaxElement from "./ParallaxElement";
import ScrollSideReveal from "./ScrollSideReveal";
import styles from "./PageHeader.module.css";

type PageVariant = "about" | "services" | "blog" | "course" | "contact";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  currentPage: string;
  variant: PageVariant;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  currentPage,
  variant,
}: PageHeaderProps) {
  return (
    <section className={styles.header} aria-labelledby="page-heading">
      <div className={styles.layout} data-variant={variant}>
        <ScrollSideReveal className={styles.copy} direction="left">
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            {eyebrow}
          </p>
          <h1 className={styles.title} id="page-heading">{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ArrowRight size={13} aria-hidden="true" />
            <span aria-current="page">{currentPage}</span>
          </nav>
        </ScrollSideReveal>

        <ScrollSideReveal className={styles.visual} direction="right" ariaHidden>
          <ParallaxElement className="pointer-events-none absolute inset-0 grid place-items-center" distance={144}>
            <div className={styles.orbit} />
            <div className={styles.orbitInner} />
          </ParallaxElement>
          <ParallaxElement className="pointer-events-none absolute inset-0 grid place-items-center" distance={112}>
            <div className={styles.sphere} />
          </ParallaxElement>
          <ParallaxElement className="pointer-events-none absolute inset-0" distance={80}>
            <span className={styles.sphereDot} />
          </ParallaxElement>
          <span className={styles.visualMark}>BT&nbsp; / &nbsp;01</span>
        </ScrollSideReveal>
      </div>
    </section>
  );
}
