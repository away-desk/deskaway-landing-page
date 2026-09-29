# deskaway-landing-page

The public landing page for DeskAway, at deskaway.dev.

It does two jobs on one page: a plain explanation of the product at the top,
and a "How it's built" section underneath for engineers — architecture, the
wire contract, the seven repos, locked decisions and the 50-day build log.

The page is static. It does not call the relay or any other DeskAway service;
the two download buttons link to the GitHub releases of `deskaway-desktop`
and `deskaway-android`.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

Next.js 16 (App Router), React 19, TypeScript, CSS Modules. Tailwind is
imported only for its reset.

## Where things live

```
app/
  layout.tsx        root layout, Wallpoet via next/font
  page.tsx          section order
  globals.css       every design token, plus shared classes
  icon.png          favicon (the logo)
components/         one component per section, each with its own .module.css
content/
  site.ts           every outbound link, including the two download URLs
  build-plan.ts     the 50 days, mirrored from the implementation plan
  system.ts         repos, decisions, numbers, request path
public/
  logo.png          navbar and footer
  hero-background.png
```

Design rules — colours, font, sizes — are in [AGENTS.md](AGENTS.md).
