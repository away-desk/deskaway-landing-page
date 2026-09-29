import { Status, type StatusKind } from "./Status";
import styles from "./SessionPreview.module.css";

// A static illustration of the phone during the Phase 4 exit task. Not live data.

const items: { label: string; detail: string; kind: StatusKind; state: string }[] = [
  { label: "Create a virtual environment", detail: "python -m venv .venv", kind: "done", state: "Done" },
  { label: "Upgrade pip", detail: "exit 0 · 3.1 s", kind: "done", state: "Done" },
  {
    label: "Install requirements.txt",
    detail: "12 of 14 installed · 2 need a compiler",
    kind: "partial",
    state: "Partial",
  },
  { label: "Run the test suite", detail: "pytest -q", kind: "progress", state: "Running" },
  { label: "Write a summary", detail: "Waiting on the item above", kind: "idle", state: "Not started" },
];

export function SessionPreview() {
  return (
    <figure className={styles.device} aria-label="Illustration: a DeskAway session on the phone">
      <div className={styles.screen}>
        <header className={styles.header}>
          <div>
            <p className={styles.kicker}>Task · my-api</p>
            <p className={styles.task}>Install the packages in requirements.txt</p>
          </div>
          <Status kind="done">Connected</Status>
        </header>

        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.label} className={styles.item}>
              <div>
                <p className={styles.itemLabel}>{item.label}</p>
                <p className={styles.itemDetail}>{item.detail}</p>
              </div>
              <Status kind={item.kind}>{item.state}</Status>
            </li>
          ))}
        </ul>

        <div className={styles.approval} role="group" aria-label="Approval request">
          <div className={styles.approvalHead}>
            <Status kind="failed">Tier 3 · Irreversible</Status>
            <span className={styles.clock}>58:12 left</span>
          </div>
          <p className={styles.approvalWhy}>Remove the old environment before retrying the two failed packages.</p>
          <code className={styles.command}>Remove-Item -Recurse .\.venv-old</code>
          <p className={styles.cwd}>in C:\dev\my-api</p>
          <div className={styles.actions}>
            <span className={`${styles.action} ${styles.approve}`}>Approve</span>
            <span className={styles.action}>Skip</span>
            <span className={styles.action}>Other…</span>
          </div>
        </div>
      </div>
      <figcaption className={styles.caption}>
        Colour appears only when something needs you — and always with a word beside it.
      </figcaption>
    </figure>
  );
}
