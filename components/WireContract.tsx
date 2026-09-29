import styles from "./WireContract.module.css";

const rules = [
  "Ids are UUID v4; a resend with the same id is ignored, never re-run.",
  "camelCase on the wire, timestamps in RFC 3339 UTC.",
  "Unknown fields are rejected — no silent extensions.",
  "256 KiB per message, checked before the message is parsed.",
  "sentAt is informational; the relay's receivedAt is authoritative.",
  "The relay reads only the envelope. The payload is the endpoints' business.",
];

// Illustrative values. The real shape lives in deskaway-protocol/schemas.
const example = `{
  "id": "0b8e6c1e-5a4f-4d0e-9a57-2f4c1b7d9e10",
  "type": "approval-response",
  "envelopeVersion": 1,
  "session": "5d2f0a3c-8e71-4b6a-a1d2-9c3e4f5a6b7c",
  "to": "desktop",
  "runId": "a41c7e02-3b5d-4f68-9e1a-7c2d8b9f0e13",
  "traceId": "4bf92f3577b34da6a3ce929d0e0e4736",
  "sentAt": "2026-09-29T08:14:03Z",
  "payload": {
    "approvalId": "c7e1b9a0-2d4f-4e3a-8b6c-1f0a9d8e7c65",
    "decision": "approve"
  },
  "relay": {
    "from": "phone",
    "receivedAt": "2026-09-29T08:14:03.412Z",
    "sequence": 412
  }
}`;

export function WireContract() {
  return (
    <section className="section section-rule" aria-labelledby="wire-title">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className="eyebrow">The wire contract</p>
            <h2 id="wire-title" className="section-title">
              Four languages agree on one set of schemas.
            </h2>
            <p className="lede">
              Every message is JSON Schema in <code className="code-inline">deskaway-protocol</code>.
              TypeScript and Python types are generated; C# and Kotlin types are validated against the
              same golden fixtures, so a drift fails CI instead of a live session.
            </p>
            <ul className={styles.rules}>
              {rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>

          <figure className={styles.code}>
            <figcaption className={styles.codeHead}>
              <span>envelope-outbound.v1</span>
              <span>relay → desktop</span>
            </figcaption>
            <pre>
              <code>{example}</code>
            </pre>
          </figure>
        </div>
      </div>
    </section>
  );
}
