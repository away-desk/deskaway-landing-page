import type { ReactNode } from "react";
import { ArrowIcon, DownloadIcon } from "./icons";
import styles from "./CtaButton.module.css";

// The one button used for every call to action on the page. Primary is solid,
// secondary is a quiet outline; both share shape, rhythm and motion.

type Props = {
  href: string;
  label: string;
  meta?: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  trailing?: "download" | "arrow" | "none";
  className?: string;
};

export function CtaButton({
  href,
  label,
  meta,
  icon,
  variant = "primary",
  size = "md",
  trailing = "download",
  className = "",
}: Props) {
  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>
        <span className={styles.label}>{label}</span>
        {meta && <span className={styles.meta}>{meta}</span>}
      </span>
      {trailing !== "none" && (
        <span className={`${styles.trailing} ${styles[trailing]}`} aria-hidden="true">
          {trailing === "download" ? <DownloadIcon /> : <ArrowIcon />}
        </span>
      )}
    </a>
  );
}
