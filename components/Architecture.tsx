import { requestPath } from "@/content/system";
import styles from "./Architecture.module.css";

const nodes = {
  phone: {
    name: "Phone",
    stack: "Kotlin · Compose",
    points: ["Pairing and approvals", "Live checklist and output", "Wakes on push via FCM"],
  },
  relay: {
    name: "Relay",
    stack: "Node.js · ECS Fargate",
    points: ["Validates every envelope", "Routes across tasks via Redis", "Append-only journal"],
  },
  desktop: {
    name: "Desktop",
    stack: "C# · .NET · Windows",
    points: ["Dials out — no open ports", "Fresh process per command", "Scope, stop and pause enforced locally"],
  },
  agent: {
    name: "Agent",
    stack: "Python · FastAPI",
    points: ["Plans and steps", "Deterministic reversibility gate", "Holds the model key — nothing else does"],
  },
};

const stores = [
  { name: "Postgres", note: "accounts · devices · journal" },
  { name: "Redis", note: "pub/sub only, stores nothing" },
  { name: "S3", note: "full command output · recordings" },
  { name: "Secrets Manager", note: "model key · DB · FCM" },
  { name: "FCM", note: "approvals reach a closed app" },
];

function Node({ id }: { id: keyof typeof nodes }) {
  const node = nodes[id];
  return (
    <div className={`${styles.node} ${styles[id]}`}>
      <p className={styles.nodeName}>{node.name}</p>
      <p className={styles.nodeStack}>{node.stack}</p>
      <ul className={styles.nodePoints}>
        {node.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function Link({ area, label, vertical = false }: { area: string; label: string; vertical?: boolean }) {
  return (
    <div className={`${styles.link} ${vertical ? styles.vertical : ""} ${styles[area]}`} aria-hidden="true">
      <span className={styles.linkLabel}>{label}</span>
    </div>
  );
}

export function Architecture() {
  return (
    <section className="section" aria-labelledby="architecture-title">
      <div className="container">
        <p className="eyebrow">Architecture</p>
        <h2 id="architecture-title" className="section-title">
          A plain relay in the middle. Reasoning on one side, execution on the other.
        </h2>
        <p className="lede">
          Both devices dial out to the relay over one long-lived WebSocket each. The relay never
          reasons and the agent never executes; the desktop is the only thing that touches a
          machine.
        </p>

        <div className={styles.diagram} role="img" aria-label="Phone and desktop each hold a WebSocket to the relay. The relay calls the agent over HTTPS and uses Postgres, Redis, S3, Secrets Manager and FCM.">
          <Node id="phone" />
          <Link area="l1" label="WebSocket · TLS" />
          <Node id="relay" />
          <Link area="l2" label="WebSocket · TLS" />
          <Node id="desktop" />
          <Link area="l3" label="HTTPS · relay only" vertical />
          <Node id="agent" />
        </div>

        <ul className={styles.stores} aria-label="Managed services behind the relay">
          {stores.map((store) => (
            <li key={store.name} className={styles.store}>
              <span className={styles.storeName}>{store.name}</span>
              <span className={styles.storeNote}>{store.note}</span>
            </li>
          ))}
        </ul>

        <div className={styles.path}>
          <h3 className={styles.pathTitle}>One approval, hop by hop</h3>
          <p className={styles.pathLede}>
            The phone and the desktop can land on different relay tasks. This is the path an
            approval takes when they do.
          </p>
          <ol className={styles.hops}>
            {requestPath.map((step, index) => (
              <li key={step.hop} className={styles.hop}>
                <span className={styles.hopIndex}>{index + 1}</span>
                <div>
                  <p className={styles.hopName}>{step.hop}</p>
                  <p className={styles.hopText}>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
