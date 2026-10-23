import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        <div className={styles.copy}>
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
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.orbit} />
          <div className={styles.orbitInner} />
          <div className={styles.sphere} />
          <span className={styles.sphereDot} />
          <span className={styles.visualMark}>BT&nbsp; / &nbsp;01</span>
        </div>
      </div>
    </section>
  );
}
