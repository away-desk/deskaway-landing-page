// Every outbound link on the page lives here. The page is static: nothing on it
// calls the relay or any other DeskAway service.

export const GITHUB_ORG = "https://github.com/away-desk";

export const downloads = {
  desktop: {
    href: `${GITHUB_ORG}/deskaway-desktop/releases/latest`,
    label: "Download desktop app",
    platform: "Windows",
    detail: "MSIX installer · signed · auto-updates",
  },
  mobile: {
    href: `${GITHUB_ORG}/deskaway-android/releases/latest`,
    label: "Download mobile app",
    platform: "Android",
    detail: "APK · install directly in V1",
  },
} as const;

export const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#safety", label: "Safety" },
  { href: "#architecture", label: "How it's built" },
  { href: "#build-log", label: "Build log" },
] as const;
