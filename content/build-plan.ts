// Mirrors ../DeskAway-V1-Implementation-Plan (1).md. If the plan changes, change it
// there first, then here.

export type BuildDay = { day: number; title: string; repo: string };

export type Phase = {
  number: number;
  name: string;
  exit: string;
  days: BuildDay[];
};

export const phases: Phase[] = [
  {
    number: 1,
    name: "The line",
    exit: "A laptop holds an authenticated socket, survives a five-minute cut, and resumes without re-running anything.",
    days: [
      { day: 1, title: "Repos, CI, external orders", repo: "all seven" },
      { day: 2, title: "The envelope", repo: "protocol" },
      { day: 3, title: "Codegen", repo: "protocol" },
      { day: 4, title: "Relay skeleton", repo: "relay" },
      { day: 5, title: "Auth and first migrations", repo: "relay" },
      { day: 6, title: "The socket", repo: "relay" },
      { day: 7, title: "Desktop scaffold and dial-out", repo: "desktop" },
      { day: 8, title: "Heartbeat and degradation", repo: "relay · desktop" },
      { day: 9, title: "Reconnect, resume, dead-man", repo: "relay · desktop" },
      { day: 10, title: "Integration and buffer", repo: "relay" },
    ],
  },
  {
    number: 2,
    name: "Identity and consent",
    exit: "Pair a real phone to a real laptop by comparing codes, then revoke and watch the channel die.",
    days: [
      { day: 11, title: "Pairing schemas", repo: "protocol" },
      { day: 12, title: "Device keys", repo: "desktop · relay" },
      { day: 13, title: "The six-character code", repo: "relay" },
      { day: 14, title: "Session claims and eviction", repo: "relay" },
      { day: 15, title: "Android scaffold", repo: "android" },
      { day: 16, title: "Android channel", repo: "android" },
      { day: 17, title: "The pairing screen", repo: "android" },
      { day: 18, title: "Push notifications", repo: "relay · android" },
      { day: 19, title: "Revocation and audit", repo: "relay · android" },
      { day: 20, title: "Integration and buffer", repo: "relay · desktop" },
    ],
  },
  {
    number: 3,
    name: "Execution and the journal",
    exit: "Type a command on the phone, watch output stream, start and kill a dev server, read the journal back.",
    days: [
      { day: 21, title: "Command and replay schemas", repo: "protocol" },
      { day: 22, title: "The command runner", repo: "desktop" },
      { day: 23, title: "Process trees and background work", repo: "desktop" },
      { day: 24, title: "Recording and S3", repo: "relay" },
      { day: 25, title: "The journal", repo: "relay" },
      { day: 26, title: "Lock strong replay", repo: "relay · protocol" },
      { day: 27, title: "Task entry and live output", repo: "android" },
      { day: 28, title: "Stop controls", repo: "android · desktop" },
      { day: 29, title: "Durability and scope", repo: "desktop" },
      { day: 30, title: "Integration and buffer", repo: "all" },
    ],
  },
  {
    number: 4,
    name: "The agent loop",
    exit: "“Install the packages in requirements.txt” runs end to end, unattended, with a Tier-3 approval and a PARTIAL outcome.",
    days: [
      { day: 31, title: "Task, checklist and approval schemas", repo: "protocol" },
      { day: 32, title: "Agent service and the seam", repo: "agent" },
      { day: 33, title: "Planning", repo: "agent" },
      { day: 34, title: "Stepping and parsing", repo: "agent" },
      { day: 35, title: "The deterministic gate", repo: "agent" },
      { day: 36, title: "Checklist in the relay", repo: "relay · android" },
      { day: 37, title: "The approval queue", repo: "relay · android" },
      { day: 38, title: "Others, and the redirect", repo: "agent · relay" },
      { day: 39, title: "Pause and resume", repo: "desktop · relay" },
      { day: 40, title: "Integration and buffer", repo: "all" },
    ],
  },
  {
    number: 5,
    name: "Ship it",
    exit: "Deployed across multiple relay tasks, traced end to end, replayable, installer signed.",
    days: [
      { day: 41, title: "Terraform foundations", repo: "infra" },
      { day: 42, title: "Compute and data modules", repo: "infra" },
      { day: 43, title: "Secrets, storage, DNS", repo: "infra" },
      { day: 44, title: "The Redis bus", repo: "relay" },
      { day: 45, title: "First real deployment", repo: "all" },
      { day: 46, title: "Observability", repo: "relay · agent · infra" },
      { day: 47, title: "The installer", repo: "desktop" },
      { day: 48, title: "Hardening", repo: "all" },
      { day: 49, title: "Evals", repo: "agent" },
      { day: 50, title: "Prod and documentation", repo: "infra · docs" },
    ],
  },
];

export const checkpoints = [
  { day: 10, check: "The line survives a five-minute cut and resumes without re-running." },
  { day: 26, check: "Session state reconstructs from the journal alone." },
  { day: 40, check: "One real task, unattended, with an approval and a PARTIAL." },
  { day: 44, check: "Two relay tasks route correctly through Redis." },
] as const;
