import Image from "next/image";
import { downloads, navLinks } from "@/content/site";
import { DownloadIcon, MenuIcon } from "./icons";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.bar}>
      <nav className={`container ${styles.inner}`} aria-label="Main">
        <a href="#top" className={styles.brand} aria-label="DeskAway home">
          <span className={styles.logoPlate}>
            <Image src="/logo.png" alt="" width={1350} height={1165} className={styles.logo} preload />
          </span>
          <span className={styles.wordmark}>DeskAway</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#download" className={`button button-primary ${styles.cta}`}>
          <DownloadIcon />
          Download
        </a>

        {/* No-JS mobile menu. */}
        <details className={styles.menu}>
          <summary aria-label="Open menu">
            <MenuIcon />
          </summary>
          <div className={styles.sheet}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href={downloads.desktop.href} className="button button-primary">
              {downloads.desktop.label}
            </a>
            <a href={downloads.mobile.href} className="button button-secondary">
              {downloads.mobile.label}
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
