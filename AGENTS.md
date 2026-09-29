<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — deskaway-landing-page

The public landing page for DeskAway. Static: it never calls the relay or any
other DeskAway service. Content mirrors the two plan files one level up
(`../DeskAway-V1-Implementation-Plan (1).md`, `../DeskAway-V1-Repo-Structure.md`);
when they change, change them first and then `content/` here.

## Rule: colours come from `color-theme.md`

`../color-theme.md` (in the `DeskAway` folder that holds all the repos) is the
only reference for colour. Its values are declared once, as tokens in
`app/globals.css`; everything else reads `var(--color-*)`.

- Never write a hex, `rgb()` or named colour in a component or module. Need a
  new shade? Derive it from existing tokens with `color-mix()` in
  `globals.css`.
- Dark is the main theme. Light follows `prefers-color-scheme`. A section can
  pin a theme with `data-theme="dark"` / `"light"` (the hero does, because its
  photo is dark).
- Green, amber and red are status colours. They mean done, partial and
  irreversible — never decoration, buttons, links or accents. Always show a
  word or icon next to them; use the `Status` component, which does both.
- No blue, indigo or teal anywhere.

## Rule: Wallpoet is the font

Wallpoet (loaded with `next/font/google` in `app/layout.tsx`) is the DeskAway
typeface, exposed as `--font-display`. Use it for headings, the wordmark,
buttons, labels and numbers. Long body copy uses `--font-body` and code uses
`--font-code`, because a stencil face is hard to read at paragraph length.
Never name a font family in a component — use the tokens.

## Rule: relative sizes only

No `px` for font sizes, heights, widths, spacing or radii. Use `rem`, `em`,
`%`, `vw`/`svh` or `clamp()`, preferably through the tokens in
`app/globals.css` (`--text-*`, `--space-*`, `--radius-*`, `--hairline`). Font
sizes that should scale with the viewport use `clamp()`.

## Conventions

- One component per section in `components/`, styled by its own
  `.module.css`. Shared classes (`.container`, `.button`, `.eyebrow`, ...) live
  in `globals.css`.
- Facts mirrored from the plan files (build days, repos, decisions, numbers)
  live in `content/`, so they are updated in one place. All outbound links are
  in `content/site.ts`. Section-specific copy can stay in its component.
- Every call to action is a `CtaButton` (`components/CtaButton.tsx`): primary
  for the one next step, secondary for the alternative. Don't hand-style a
  link to look like a button.
- Respect `prefers-reduced-motion`; "in progress" is shown by a pulse, not a
  colour.

## Rule: ask before touching GitHub

Ask before any `git push`, PR, or writing `gh` command, and show the exact
command first. Local commits need no approval. Once `main` exists on the
remote, changes go branch → PR, never straight to `main`.
