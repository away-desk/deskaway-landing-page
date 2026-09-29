import { repos } from "@/content/system";
import { ExternalIcon } from "./icons";
import styles from "./Repos.module.css";

export function Repos() {
  return (
    <section className="section section-rule" aria-labelledby="repos-title">
      <div className="container">
        <p className="eyebrow">Seven repositories</p>
        <h2 id="repos-title" className="section-title">
          One component per repo. Dependencies point one way.
        </h2>
        <p className="lede">
          The protocol is the root. Relay, agent, desktop and Android each depend on it; nothing
          depends on the infrastructure, and the infrastructure depends on nothing but AWS.
        </p>

        <ul className={styles.grid}>
          {repos.map((repo, index) => (
            <li key={repo.name}>
              <a href={repo.href} className={`${styles.card} ${index === 0 ? styles.root : ""}`}>
                <span className={styles.top}>
                  <span className={styles.name}>{repo.name}</span>
                  <ExternalIcon className={styles.icon} />
                </span>
                <span className={styles.stack}>{repo.stack}</span>
                <span className={styles.role}>{repo.role}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
