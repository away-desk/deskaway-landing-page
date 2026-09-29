import { checkpoints, phases } from "@/content/build-plan";
import { Status } from "./Status";
import styles from "./BuildLog.module.css";

const totalDays = phases.reduce((sum, phase) => sum + phase.days.length, 0);

export function BuildLog() {
  return (
    <section id="build-log" className="section section-rule" aria-labelledby="build-title">
      <div className="container">
        <div className={styles.head}>
          <div>
            <p className="eyebrow">Build log</p>
            <h2 id="build-title" className="section-title">
              Fifty days, five phases. The riskiest part first.
            </h2>
            <p className="lede">
              Holding a socket open reliably is harder than the agent loop, and everything depends
              on it — so it came first. The journal format was locked before any real session was
              recorded, because it can&rsquo;t be fixed afterwards.
            </p>
          </div>

          <div className={styles.summary}>
            <p className={styles.count}>
              {totalDays}
              <span>/{totalDays}</span>
            </p>
            <Status kind="done">V1 complete</Status>
          </div>
        </div>

        {/* Every day of the plan at a glance, grouped by phase. */}
        <div className={styles.strip} aria-hidden="true">
          {phases.map((phase) => (
            <div key={phase.number} className={styles.stripPhase}>
              {phase.days.map((day) => (
                <span key={day.day} className={styles.cell} title={`Day ${day.day} · ${day.title}`} />
              ))}
            </div>
          ))}
        </div>

        <div className={styles.phases}>
          {phases.map((phase) => (
            <details key={phase.number} className={styles.phase} open={phase.number === 1}>
              <summary className={styles.phaseHead}>
                <span className={styles.phaseNumber}>Phase {phase.number}</span>
                <span className={styles.phaseName}>{phase.name}</span>
                <span className={styles.phaseDays}>
                  Days {phase.days[0].day}–{phase.days[phase.days.length - 1].day}
                </span>
                <span className={styles.phaseStatus}>
                  <Status kind="done">Done</Status>
                </span>
                <span className={styles.chevron} aria-hidden="true" />
              </summary>

              <div className={styles.phaseBody}>
                <p className={styles.exit}>
                  <span>Exit condition</span>
                  {phase.exit}
                </p>
                <ol className={styles.days}>
                  {phase.days.map((day) => (
                    <li key={day.day} className={styles.day}>
                      <span className={styles.dayNumber}>{String(day.day).padStart(2, "0")}</span>
                      <span className={styles.dayTitle}>{day.title}</span>
                      <span className={styles.dayRepo}>{day.repo}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </details>
          ))}
        </div>

        <h3 className={styles.subTitle}>Four points of no return</h3>
        <ul className={styles.checkpoints}>
          {checkpoints.map((point) => (
            <li key={point.day} className={styles.checkpoint}>
              <div className={styles.checkpointTop}>
                <span className={styles.checkpointDay}>Day {point.day}</span>
                <Status kind="done">Passed</Status>
              </div>
              <p className={styles.checkpointText}>{point.check}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
