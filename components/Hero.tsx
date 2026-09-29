import Image from "next/image";
import { downloads } from "@/content/site";
import { CtaButton } from "./CtaButton";
import { DesktopIcon, PhoneIcon } from "./icons";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    // The photo is always dark, so the hero keeps the dark tokens in both themes.
    <section id="top" className={styles.hero} data-theme="dark">
      <Image
        src="/hero-background.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className={styles.backdrop}
      />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <p className="eyebrow">DeskAway V1 · Windows + Android</p>

        <h1 className={styles.title}>
          Leave your desk.
          <br />
          Not your work.
        </h1>

        <p className={styles.subtitle}>
          DeskAway lets an agent carry out tasks on your Windows laptop while you&rsquo;re away — and
          brings every step that can&rsquo;t be undone to your phone first.
        </p>

        <div className={styles.actions}>
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

        <p className={styles.note}>Nothing irreversible runs without your tap.</p>
      </div>

      <a href="#how-it-works" className={styles.scrollCue}>
        How it works
      </a>
    </section>
  );
}
