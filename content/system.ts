// Engineering facts for the "How it's built" half of the page. Source:
// ../DeskAway-V1-Repo-Structure.md and ../DeskAway-V1-Implementation-Plan (1).md.

import { GITHUB_ORG } from "./site";

export const repos = [
  {
    name: "deskaway-protocol",
    stack: "JSON Schema",
    role: "The wire contract. Every message type, enum and golden fixture — the root dependency of every other repo.",
  },
  {
    name: "deskaway-relay",
    stack: "Node.js · TypeScript",
    role: "HTTP API and WebSocket broker. Holds sockets, routes messages, records runs. Contains no agent reasoning.",
  },
  {
    name: "deskaway-agent",
    stack: "Python · FastAPI",
    role: "Model gateway, planning and the reversibility gate. Stateless, and callable only by the relay.",
  },
  {
    name: "deskaway-desktop",
    stack: "C# · .NET",
    role: "The Windows host. The only component that touches a real machine — runs commands inside a declared scope.",
  },
  {
    name: "deskaway-android",
    stack: "Kotlin · Compose",
    role: "The phone: pairing, the live checklist, approvals, stop controls and the audit log.",
  },
  {
    name: "deskaway-infra",
    stack: "Terraform · AWS",
    role: "VPC, ALB, ECS Fargate, RDS, ElastiCache, S3, Secrets Manager — dev and prod.",
  },
  {
    name: "deskaway-docs",
    stack: "Markdown",
    role: "ADRs for every locked decision, the threat model, data handling and runbooks.",
  },
].map((repo) => ({ ...repo, href: `${GITHUB_ORG}/${repo.name}` }));

export const decisions = [
  {
    question: "Where the reversibility gate runs",
    answer: "On the server",
    why: "The laptop computes the same answer locally, but only to show you what is coming.",
  },
  {
    question: "Command output",
    answer: "Full log to S3, tail over the socket",
    why: "The phone stays readable; nothing is lost; recordings stay out of Postgres.",
  },
  {
    question: "Authentication",
    answer: "Self-issued JWT",
    why: "The one-phone, one-desktop rule is custom logic that lives in the relay either way.",
  },
  {
    question: "Agent state",
    answer: "Stateless",
    why: "State arrives with each call from the journal, so the agent scales horizontally.",
  },
  {
    question: "Recording retention",
    answer: "90 days, user can delete",
    why: "Enforced as S3 lifecycle rules, written into the data-handling document.",
  },
  {
    question: "Compute",
    answer: "ECS Fargate behind an ALB",
    why: "Lambda cannot hold a socket open; EKS is a cluster to run for one service.",
  },
  {
    question: "Infrastructure as code",
    answer: "Terraform",
    why: "Four languages, four toolchains. Infrastructure belongs to none of them.",
  },
] as const;

export const numbers = [
  { value: "7 s", label: "Heartbeat interval" },
  { value: "35 s", label: "Grace before LOST" },
  { value: "256 KiB", label: "Max message, checked before parsing" },
  { value: "60 min", label: "Per-approval clock" },
  { value: "30 days", label: "Pairing trust" },
  { value: "≤ 1 s", label: "Revoke to socket closed" },
] as const;

export const requestPath = [
  {
    hop: "Phone",
    text: "You tap Approve. The app sends an envelope with a fresh id and the run's trace id.",
  },
  {
    hop: "Relay · task B",
    text: "Size is checked before parsing, then the envelope and payload are validated against the schema. Anything invalid closes the socket with a named reason.",
  },
  {
    hop: "Redis bus",
    text: "The desktop's socket lives on task A. Task B publishes to the session's channel — Redis is a wire between tasks, it stores nothing.",
  },
  {
    hop: "Relay · task A",
    text: "Stamps relay.from, receivedAt and a sequence number, then delivers. The sequence is what a reconnect resumes from.",
  },
  {
    hop: "Desktop",
    text: "Deduplicates by id, checks the declared folder against scope, writes INTENT, runs a fresh PowerShell process, writes OUTCOME.",
  },
  {
    hop: "Back to the phone",
    text: "The full output goes to S3; a readable tail streams back. One trace id covers every hop.",
  },
] as const;

export const quality = [
  {
    title: "Contract tests in four languages",
    text: "The protocol's valid and invalid fixtures run through the TypeScript, Python, C# and Kotlin parsers. Drift fails CI, not production.",
  },
  {
    title: "Golden tests, network off",
    text: "Recorded model calls replay offline. Model output becomes a typed step or a hard parse failure — never a silent guess.",
  },
  {
    title: "Replayable sessions",
    text: "Model calls store their input as well as their output. Any session can be reconstructed at step N from the journal alone.",
  },
  {
    title: "Evals from real runs",
    text: "A fixed scenario set replays against the model and reports success rate, step count, cost and tier distribution.",
  },
  {
    title: "Soak-tested relay",
    text: "Many idle sockets held for hours with memory watched — the one way to find the slow leak WebSocket relays are known for.",
  },
  {
    title: "Traced end to end",
    text: "OpenTelemetry from phone to relay to agent to desktop, with alarms on churn, approval expiry and Tier-3 denials.",
  },
] as const;
