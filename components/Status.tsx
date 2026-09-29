import type { ReactNode } from "react";
import { AlertIcon, CheckIcon, DashIcon, HalfIcon } from "./icons";
import styles from "./Status.module.css";

// The only place status colours are applied. Every state is shown with an icon
// and a word as well as a colour (color-theme.md, rule 3).

export type StatusKind = "done" | "partial" | "failed" | "idle" | "progress";

const icons: Record<StatusKind, ReactNode> = {
  done: <CheckIcon />,
  partial: <HalfIcon />,
  failed: <AlertIcon />,
  idle: <DashIcon />,
  progress: <span className={styles.pulse} />,
};

export function Status({ kind, children }: { kind: StatusKind; children: ReactNode }) {
  return (
    <span className={`${styles.status} ${styles[kind]}`}>
      {icons[kind]}
      <span>{children}</span>
    </span>
  );
}
