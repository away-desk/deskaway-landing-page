import { decisions, quality } from "@/content/system";
import styles from "./Decisions.module.css";

export function Decisions() {
  return (
    <section className="section section-rule" aria-labelledby="decisions-title">
      <div className="container">
        <p className="eyebrow">Locked decisions</p>
        <h2 id="decisions-title" className="section-title">
          Settled early, written down, with the options we turned away.
        </h2>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Question</th>
                <th scope="col">Decision</th>
                <th scope="col">Why</th>
              </tr>
            </thead>
            <tbody>
              {decisions.map((row) => (
                <tr key={row.question}>
                  <th scope="row">{row.question}</th>
                  <td className={styles.answer}>{row.answer}</td>
                  <td className={styles.why}>{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className={styles.subTitle}>How we know it works</h3>
        <ul className={styles.quality}>
          {quality.map((item) => (
            <li key={item.title} className={styles.qualityItem}>
              <p className={styles.qualityTitle}>{item.title}</p>
              <p className={styles.qualityText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
