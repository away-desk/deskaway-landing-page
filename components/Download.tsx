import { downloads } from "@/content/site";
import { DesktopIcon, DownloadIcon, PhoneIcon } from "./icons";
import styles from "./Download.module.css";

const apps = [
  {
    ...downloads.desktop,
    icon: <DesktopIcon />,
    role: "Runs the work",
    text: "Installs on the laptop that does the work. Dials out to the relay — no ports to open, no router to configure.",
    primary: true,
  },
  {
    ...downloads.mobile,
    icon: <PhoneIcon />,
    role: "Keeps the say",
    text: "Pair it with your laptop by comparing a six-character code. Approvals arrive as notifications, even when the app is closed.",
    primary: false,
  },
];

export function Download() {
  return (
    <section id="download" className={`section ${styles.section}`} aria-labelledby="download-title">
      <div className="container">
        <p className="eyebrow">Get DeskAway</p>
        <h2 id="download-title" className="section-title">
          Two apps. One pairing. Then step away.
        </h2>

        <div className={styles.grid}>
          {apps.map((app) => (
            <article key={app.platform} className={styles.card}>
              <div className={styles.iconWrap}>{app.icon}</div>
              <p className={styles.role}>{app.role}</p>
              <h3 className={styles.platform}>DeskAway for {app.platform}</h3>
              <p className={styles.text}>{app.text}</p>
              <p className={styles.detail}>{app.detail}</p>
              <a
                href={app.href}
                className={`button ${app.primary ? "button-primary" : "button-secondary"} ${styles.button}`}
              >
                <DownloadIcon />
                {app.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
