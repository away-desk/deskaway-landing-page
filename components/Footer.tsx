import Image from "next/image";
import { GITHUB_ORG, downloads } from "@/content/site";
import styles from "./Footer.module.css";

const columns = [
  {
    title: "Product",
    links: [
      { href: "#how-it-works", label: "How it works" },
      { href: "#safety", label: "Safety" },
      { href: downloads.desktop.href, label: "Windows app" },
      { href: downloads.mobile.href, label: "Android app" },
    ],
  },
  {
    title: "Engineering",
    links: [
      { href: "#architecture", label: "How it's built" },
      { href: "#build-log", label: "Build log" },
      { href: `${GITHUB_ORG}/deskaway-protocol`, label: "Protocol" },
      { href: `${GITHUB_ORG}/deskaway-docs`, label: "Docs and ADRs" },
    ],
  },
  {
    title: "Project",
    links: [
      { href: GITHUB_ORG, label: "GitHub" },
      { href: `${GITHUB_ORG}/deskaway-docs/blob/main/SECURITY.md`, label: "Security" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logoPlate}>
            <Image src="/logo.png" alt="" width={1350} height={1165} className={styles.logo} />
          </span>
          <p className={styles.wordmark}>DeskAway</p>
          <p className={styles.tagline}>Colour only when something needs you.</p>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title} className={styles.column}>
            <p className={styles.columnTitle}>{column.title}</p>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className={`container ${styles.base}`}>
        <p>© {new Date().getFullYear()} DeskAway</p>
        <p>V1 · supervised autonomy</p>
      </div>
    </footer>
  );
}
