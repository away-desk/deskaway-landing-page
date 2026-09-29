import { numbers } from "@/content/system";
import styles from "./EngineeringIntro.module.css";

export function EngineeringIntro() {
  return (
    <section id="architecture" className={styles.band} aria-labelledby="engineering-title">
      <div className="container">
        <p className="eyebrow">For engineers</p>
        <h2 id="engineering-title" className={styles.title}>
          How it&rsquo;s built
        </h2>
        <p className="lede">
          Seven repositories, four languages, one wire contract, and fifty build days. What follows
          is the shape of the system and the decisions behind it.
        </p>

        <dl className={styles.numbers}>
          {numbers.map((item) => (
            <div key={item.label} className={styles.number}>
              <dt className={styles.label}>{item.label}</dt>
              <dd className={styles.value}>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
