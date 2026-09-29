import styles from "./Safety.module.css";

const guarantees = [
  {
    title: "Irreversible steps wait for you",
    text: "The gate is a rule table, not a model’s judgement. The same command is classified the same way every time, and a confidence score never decides anything.",
  },
  {
    title: "Stop always works",
    text: "Session stop kills the run and every background process it started. The laptop enforces it locally, so it works even if the server can’t be reached.",
  },
  {
    title: "Honest about the connection",
    text: "A heartbeat every seven seconds. One missed beat reads Degraded; 35 seconds reads Lost. Past that, the laptop refuses anything irreversible until you’re back.",
  },
  {
    title: "Nothing runs twice",
    text: "Every message carries its own id. A reconnect in the middle of a long command resumes where it left off instead of starting it again.",
  },
  {
    title: "Kept to one folder",
    text: "Every command declares where it runs. Anything outside the folder you chose is refused before it starts, and no shell state carries from one command to the next.",
  },
  {
    title: "Pauses rather than guesses",
    text: "Leave an approval for an hour and the session pauses. On resume it re-checks your files and branch and tells you what moved in the meantime.",
  },
];

export function Safety() {
  return (
    <section id="safety" className="section section-rule">
      <div className="container">
        <p className="eyebrow">Safety</p>
        <h2 className="section-title">Built so that nothing surprises you.</h2>
        <p className="lede">
          An agent that can run commands on your machine is only useful if you can trust what it
          won&rsquo;t do. These are properties of the system, not settings.
        </p>

        <ul className={styles.grid}>
          {guarantees.map((item) => (
            <li key={item.title} className={styles.card}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
