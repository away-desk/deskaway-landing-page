import { SessionPreview } from "./SessionPreview";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    title: "Pair once",
    text: "Your laptop shows a six-character code and your phone shows the same one. Compare them and approve. Trust lasts 30 days, and revoking it from the phone closes the live connection within a second.",
  },
  {
    title: "Describe the task",
    text: "Type what you need from your phone. The agent drafts a checklist and sends it to you before anything runs, with its assumptions about your machine written out in plain words.",
  },
  {
    title: "Approve what matters",
    text: "Every command is classified by how reversible it is. Safe steps run. Anything that can’t be undone waits for you — with the exact command, the folder it runs in, and why.",
  },
  {
    title: "Come back to a record",
    text: "Each step is written down before it runs and again after. Partial results are called partial. You see what happened, not a summary of what should have.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">Your laptop does the work. Your phone keeps the say.</h2>
          <p className="lede">
            DeskAway pairs a Windows laptop with an Android phone. Start a task from anywhere; the
            laptop carries it out inside one folder you chose, and asks before anything it
            can&rsquo;t take back.
          </p>

          <ol className={styles.steps}>
            {steps.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.previewColumn}>
          <SessionPreview />
        </div>
      </div>
    </section>
  );
}
