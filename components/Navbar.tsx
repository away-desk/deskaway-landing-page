import Image from "next/image";
import { downloads, navLinks } from "@/content/site";
import { CtaButton } from "./CtaButton";
import { DesktopIcon, MenuIcon, PhoneIcon } from "./icons";
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

        <CtaButton href="#download" label="Download" size="sm" className={styles.cta} />

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
            <div className={styles.sheetActions}>
              <CtaButton
                href={downloads.desktop.href}
                label={downloads.desktop.label}
                meta={downloads.desktop.meta}
                icon={<DesktopIcon />}
              />
              <CtaButton
                href={downloads.mobile.href}
                label={downloads.mobile.label}
                meta={downloads.mobile.meta}
                icon={<PhoneIcon />}
                variant="secondary"
              />
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
