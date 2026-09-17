# AI Flotation Design System

`brandId: ai-flotation` — the design system for **AI Flotation LLC**, an AI consulting shop: **workflow intake to delivered system.** A client books a scoping call, the team maps the workflow and names the bottleneck, then ships an automated system. The brand sells competence, not inspiration. Support: support@aiflotation.com.

One token set, two directions, both in light and dark:

| | Forge (default) | Harbor |
|---|---|---|
| Type | Space Grotesk (headings) + Archivo (body) | Manrope throughout |
| Accent | Rust `#BA430E` | Teal `#0E6E63` |
| Radius | 2px controls / 6px cards | 6px controls / 10px cards |
| Shadow | Near-flat, sharp | Softer |
| Opt in | `:root` default (`ai-flotation-a`) | `data-variant="harbor"` on `<html>` (`ai-flotation-b`) |

Every color pair (`fg`-on-`bg`, `fg`-on-`bg-elevated`, `fg-muted`-on-`bg`, `accent-contrast`-on-`accent`, `accent`-on-`bg`) is WCAG 2.1 AA in **both** directions and **both** modes — measured ratios in `exports/ai-flotation.payload.json` and live on the Contrast audit tab.

## Source

Implemented from the **AI Flotation Design System** Claude Design project (https://claude.ai/design/p/f6e2372d-e01f-4c16-8e6e-e055e205d790?file=AI+Flotation+Design+System.html), the AI-Flotation-only extraction of the multi-brand token project "Multi-Brand Tokens". The sibling brands (Colaberry Enterprise, Colaberry Training, Refactored, CPN) are deliberately excluded. Token values are copied verbatim; the JSON source of truth is preserved under `tokens/ai-flotation.json`.

This folder is the unbundled form of that project's single-file export (last synced from the export dated 2026-09-17, which introduced the Hull mark): the same page, split back into linkable CSS, JS, SVG and font files so it can be consumed by other projects and diffed in git. No build step anywhere — open `index.html` in a browser. It mirrors the layout of the sibling **Colaberry Enterprise Design System** repo.

---

## Quickstart — developers

Link one file. It pulls in the self-hosted fonts, every design token, base element styles and the `.b-*` component classes:

```html
<link rel="stylesheet" href="styles.css">
```

```html
<html data-theme="dark" data-variant="harbor">
  <!-- dark mode + Harbor direction; omit either attribute for light mode / Forge -->
```

```html
<button class="b-btn">Book a scoping call</button>
<button class="b-btn b-btn--secondary">See prep notes</button>

<div class="b-field">
  <label for="company">Company</label>
  <input id="company" class="b-input" placeholder="Bayside Logistics">
  <span class="b-help">30 minutes, no deck.</span>
</div>

<div class="b-card">
  <span class="b-badge">Build</span>
  <h3>Workflow intake to delivered system</h3>
  <p>We map the workflow, fix the bottleneck, and hand you a running system.</p>
</div>

<div class="b-alert b-alert--success"><strong>Delivered.</strong> Invoice OCR pipeline is live.</div>
```

Rules that keep it consistent:

- **Reference semantic tokens, never raw hex** — `var(--bg)`, `var(--fg)`, `var(--accent)`, etc. Direction and mode both resolve through the same custom properties, so component code never branches on which one is active.
- **One filled primary action per view.** The accent marks only that action and the active state; everything else is `.b-btn--secondary` or `.b-btn--ghost`.
- **Pick one direction per surface** — never mix Forge and Harbor in a view.
- **Motion runs on tokens, never hand-picked durations** — `var(--motion-fast|base|slow)` with `var(--ease|--ease-enter|--ease-exit)`. `.b-enter` / `.b-pop` give you the standard 5px-rise-and-fade entrance; `.b-skeleton` is the loading shimmer. `prefers-reduced-motion` collapses all of it automatically (see `tokens/motion.css`).
- **Touch targets ≥ 44px** — already baked into `.b-btn` / `.b-input` via `var(--touch-target)`.

### Handing this to an AI pair-programmer

Drop the folder into your repo — `SKILL.md` makes it an agent skill (`ai-flotation-design`). Or paste this into a Claude Code / Cursor / Copilot session before asking it to build a screen:

> Using the AI Flotation design system: link `styles.css` (CSS variables + `.b-*` components; dark mode via `data-theme="dark"` on `<html>`; Harbor direction via `data-variant="harbor"`). Fonts: Space Grotesk headings + Archivo body (Forge) or Manrope (Harbor), self-hosted via `tokens/fonts.css`. Reference semantic tokens (`--bg`, `--fg`, `--accent`, ...), never raw hex. One filled primary action per view; 44px touch targets; AA contrast is guaranteed by the tokens. Motion: `--motion-fast/base/slow` with `--ease-*` curves (`.b-enter`, `.b-pop`, `.b-skeleton` ready-made); respect `prefers-reduced-motion`. Voice: confident, spare, concrete; sells competence, not inspiration. Build: [describe what you want].

---

## Quickstart — designers

Open **`index.html`** in a browser (clone the repo and double-click it, or serve the folder locally — no build step). It's both the live specimen and the documentation:

| Tab | What it's for |
|---|---|
| **Start here** | Orientation — this same overview, plus jump links |
| **Specimen** | Every token rendered as type, color, spacing and component swatches, light and dark side by side |
| **Logos** | The mark in both directions, both modes, plus lockups, app icon and favicon scale tests |
| **Login** | A worked example screen — form, buttons, states |
| **Directions** | Forge vs. Harbor side by side, for a lineup comparison |
| **Contrast audit** | Every AA pair with its measured ratio, light and dark |
| **Tokens** | The full token set as copy-ready JSON (the same data as `tokens/ai-flotation.json`) |
| **Kit** | Copy-to-clipboard buttons for the CSS files and this guide, the Claude prompt block, links to the starter screen |
| **Email** | The transactional email template, rendered |
| **UX laws** | The ten usability heuristics this system deliberately encodes, each tied to a concrete rule (Fitts's Law → 44px targets, Hick's Law → one primary button, etc.) |

Flip **Direction** (Forge/Harbor) and **mode** (light/dark) from the tab controls to see everything recompute live — nothing is hand-tuned per combination, it all derives from the same token set.

The Kit tab's copy buttons read the files over `fetch()`, which browsers block on `file://`; from a double-clicked `index.html` they open the file instead. Serve the folder (`npx serve .`, `python -m http.server`) to get the one-click copy.

## Content fundamentals

Voice: **confident, spare, concrete — sells competence, not inspiration.**

- Short declarative sentences. No exclamation marks, no hype adjectives, no filler.
- Concrete specifics over abstractions: *"30 minutes, Thursday 2:00 CT. We will map the workflow and name the bottleneck."* — times, counts, deliverables, not adjectives.
- "We" for the company, "you" for the client.
- Sentence case everywhere — headings, buttons, badges. Never Title Case or ALL CAPS (badges may use caps only as a 12px label style).
- Button labels are verbs: *"See prep notes"*, *"Book a scoping call"*.
- Headlines state facts or outcomes, not slogans: *"Scoping call booked"*, not *"Unlock your workflow's potential"*.
- No emoji, no decorative punctuation. Body copy stays under about two lines per block; the layout carries the rest.
- **Destructive flows** end in a calm confirm modal (Cancel left of the confirming action), never a browser alert.

## Visual foundations

- **Color:** one accent per direction (Forge rust / Harbor teal) doing all the work. Warm paper-grey page (`--bg`), white elevated surfaces (`--bg-elevated`), near-black warm ink (`--fg`). `--accent-soft` is the only tint — hover washes, badges, selected states. Semantic green / gold / red reserved for status. Full dark mode via `data-theme="dark"` on `<html>`; `--accent-hover` (88% mix) and `--accent-press` (78% mix) derive automatically via `color-mix()` — toward black in light mode, toward white in dark (`tokens/colors.css`).
- **Type:** Forge pairs Space Grotesk (headings, 700) with Archivo (body 400/500/600); Harbor is all Manrope. Scale 16px × 1.3 in both directions: **13 · 16 · 21 · 27 · 35 · 46** (`--fs-caption` → `--fs-h1`). Body line-height 1.55, headings 1.2. Display type may `clamp()` between the h1/h2 steps in fluid layouts.
- **Spacing:** 4px base steps — `--space-1` through `--space-16` = 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64. Page padding `clamp(16px, 4vw, 32px)`. Breakpoints 640 / 768 / 1024 / 1280. Grids use `minmax(min(Npx,100%),1fr)`. Touch targets ≥ 44px always.
- **Shape:** Forge is sharp — 2px radius on controls, 6px on cards (`calc(var(--radius) + 4px)`); Harbor rounds to 6px / 10px. Badges are the one pill (999px).
- **Elevation:** a single hairline-and-shadow system — 1px `--line` border plus one small shadow (`0 1px 2px rgba(20,18,16,0.30)` Forge; `0 1px 3px rgba(10,20,18,0.18)` Harbor). No layered or inner shadows, no glows.
- **Cards:** elevated white surface, hairline border, small shadow, radius +4, `20px 22px` padding.
- **Backgrounds:** flat token colors only. No images, gradients (except the skeleton shimmer), textures, patterns or illustration. No blur or transparency effects; overlays use `color-mix` washes.
- **Motion:** "Decisive — crisp, immediate, no flourish." `--motion-fast` 80ms (hover / press / toggles) · `--motion-base` 140ms (menus / toasts / accordions) · `--motion-slow` 210ms (modals / view changes). Standard easing `cubic-bezier(0.3,0,0,1)`, enter `(0.16,0,0,1)`, exit `(0.4,0,1,1)`; exits always run at `fast` with the exit curve. Enter = 5px rise + fade; press scales to 0.99 at 40ms. Never hand-pick a duration.
- **Hover:** filled controls darken (`--accent-hover`); quiet controls wash with `--accent-soft`. **Focus:** 3px soft accent ring (`--focus-ring`), `:focus-visible` only; inputs get accent border + `--accent-soft` ring.
- **Imagery:** none in the source. No photography direction exists — leave image slots out rather than inventing.

## Iconography

The kit defines **no icon system** — no icon font, no SVG set, no emoji, anywhere. Alerts are text-first (bold colored lead-in instead of an icon); buttons are text-only. Communicate with text, color, and the badge/alert components; unicode glyphs (`·`, `→`, `×`) can serve as functional affordances. If an icon set becomes unavoidable, Lucide at 1.5px stroke is the closest neutral match to the brand's geometry — treat it as a **substitution, not brand canon**, and flag it as such.

**Logo:** the **Hull** mark (brainstorm option 6e, selected) — a solid vessel carrying a circular float above it: this is what floats, this is what we carry. Two fills, both from tokens: hull in `--fg`, float in `--accent`. Lockup is mark + "AI Flotation" wordmark set in the heading font, 700 weight. Minimum 16px. Never redraw or distort the geometry; recolor only through the token system.

- `assets/ai-flotation-mark.svg` — light mode: ink hull `#1A1917` + rust float `#BA430E`; the file the Claude Design project exported (carries its C2PA content-credential manifest).
- `assets/ai-flotation-mark-dark.svg` — dark mode: `#EDEAE6` hull + `#F0813C` float, for `data-theme="dark"`.
- `assets/ai-flotation-mark-white.svg` — single-tone white, for accent tiles and photo grounds.
- `assets/ai-flotation-mark-mono.svg` — single-tone `currentColor`, for print, stamps and anywhere it must inherit.
- `assets/ai-flotation-mark-512.png`, `-dark-512.png`, `-white-512.png` — 512px rasters of the three colorways.
- `assets/ai-flotation-mark-email-52.png` — 26px @2x for email headers.
- `assets/app-icon-512.png`, `assets/favicon.svg` — the app-icon recipe: accent tile, 22% corner radius, white mark at 58%.

In React the explorer draws it with the `AflMark` component (`app/src/data.jsx`: `hull` and `float` props, both hex); in plain HTML the starter screen inlines the two paths with `fill="var(--fg)"` / `fill="var(--accent)"` so one markup serves both directions and both modes. Lockup rules: clearspace ½ mark height on all sides; minimums mark 16px, horizontal lockup 120px wide; colors from tokens only (hull in fg, float in accent; fg for mono; accentContrast on accent tiles); never stretch, rotate or add effects.

## Components

Inventory is exactly the `.b-*` set the source stylesheet defines (`base/components.css`) — nothing invented:

| Class | What it is |
|---|---|
| `.b-btn`, `.b-btn--secondary`, `.b-btn--ghost`, `.b-btn--danger` | Buttons — one filled primary per view, everything else secondary/ghost; 44px min, press-scale 0.99 |
| `.b-field`, `.b-input`, `.b-input--error`, `.b-help`, `.b-error-text` | Form field, label, help/error text |
| `.b-card` | Elevated surface — hairline border, small shadow, radius +4 |
| `.b-badge` | Pill label |
| `.b-alert`, `.b-alert--success/--warning/--danger` | Status banners, text-first |
| `.b-enter`, `.b-pop`, `.b-skeleton` | Motion — entrance and loading states |

Patterns shown in the Specimen tab (tabs, breadcrumbs, pager, chips, switch, select, table, toast, tooltip, modal, avatars, progress, accordion) are explorer compositions built from the tokens; they live in `app/src/specimen.jsx` and are a starting point, not part of the shipped contract.

## Rules (from the kit)

1. Reference semantic tokens (`--bg`, `--accent`, …), never raw hex.
2. One filled primary action per view; accent marks only the primary action + active state.
3. One direction per surface — never mix Forge and Harbor in a view.
4. Touch targets ≥ 44px; `--fg-muted` is the lightest text on `--bg`.
5. Motion only via `--motion-*` / `--ease-*` tokens.
6. Support `data-theme="dark"` (and `data-variant="harbor"` if the surface is Harbor).
7. Voice: confident, spare, concrete; sentence case, no emoji.

## Token reference

### Color — Forge

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#F7F6F4` | `#121110` |
| `--bg-elevated` | `#FFFFFF` | `#1C1A18` |
| `--fg` | `#1A1917` | `#EDEAE6` |
| `--fg-muted` | `#56524B` | `#ADA79E` |
| `--accent` | `#BA430E` | `#F0813C` |
| `--accent-contrast` | `#FFFFFF` | `#221206` |
| `--accent-soft` | `#FBE4D5` | `#3A2313` |
| `--line` | `#DEDAD3` | `#35322E` |
| `--success` | `#1F7A3D` | `#57BE7C` |
| `--warning` | `#8F6400` | `#DFA83E` |
| `--danger` | `#BB3131` | `#F0736B` |

### Color — Harbor (`data-variant="harbor"`)

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#F6F8F7` | `#0E1413` |
| `--bg-elevated` | `#FFFFFF` | `#17201E` |
| `--fg` | `#14201D` | `#E9EFED` |
| `--fg-muted` | `#4C5B57` | `#A2B1AC` |
| `--accent` | `#0E6E63` | `#46C2AF` |
| `--accent-contrast` | `#FFFFFF` | `#062B25` |
| `--accent-soft` | `#D8EEE9` | `#123B35` |
| `--line` | `#D6DEDB` | `#2C3936` |
| `--success` / `--warning` / `--danger` | same as Forge | same as Forge |

---

## Index

- `index.html` — **interactive explorer / landing page**: start here, specimen (both modes), logos, login, directions, contrast audit, tokens JSON, kit, email, UX laws
- `styles.css` — entry point (imports everything below)
- `tokens/` — `fonts.css` (self-hosted Space Grotesk, Archivo, Manrope), `colors.css` (Forge/Harbor × light/dark), `typography.css`, `spacing.css` (spacing + radius + shadow + breakpoints), `motion.css`, `ai-flotation.json` (the token source of truth as data — both variants)
- `base/` — `base.css` (body/headings/links), `components.css` (the `.b-*` classes, verbatim from the kit)
- `app/` — the explorer page only (not part of the system — consumers link `styles.css`, not these): `explorer.css` (page chrome + the explorer's own IBM Plex UI fonts), `data.js` / `specimen.js` / `views.js` / `panels.js` / `start.js` / `app.js` (pre-compiled), `src/*.jsx` (the sources, verbatim from the export apart from file paths), `build.js` (recompile after editing a source), `vendor/` (React 18.3.1 UMD)
- `assets/` — the Hull mark in four SVG colorways, the PNG set (512px × 3, email 52px, app icon), `favicon.svg`; `assets/fonts/` — woff2 subsets for the three brand faces and the explorer's IBM Plex
- `exports/ai-flotation.payload.json` — measured contrast ratios for both directions and both modes, email button hex and the token summary
- `emails/ai-flotation.html` — transactional email skeleton (table-based, inline styles, `{{placeholders}}`)
- `ui_kits/starter/` — starter screen: client build tracker (nav, KPIs, builds table, intake form, direction + dark-mode toggles)
- `SKILL.md` — agent skill entry point

## Caveats

- **Fonts:** Space Grotesk, Archivo and Manrope (all SIL OFL) are self-hosted from `assets/fonts/` as the subsetted variable-font files the export shipped; one file per unicode subset serves every weight. `tokens/fonts.css` has the one-line Google Fonts swap if you would rather not ship binaries. IBM Plex Sans / Mono are only the explorer's UI chrome and are not brand fonts.
- **The explorer is a React page** (React 18 UMD, JSX pre-compiled to plain JS) so it runs from a double-click with no tooling. Edit `app/src/*.jsx`, then `npm install --no-save @babel/standalone && node app/build.js` to recompile.
- **The starter screen is a composition**, not a recreation — the source project contained tokens, components, specimen and an email, but no product screens. Tokens / components / voice are ground truth; the build-tracker layout is illustrative.
- **Not in this export:** the source project's React primitives (`components/core/`, including its `Mark` component), `guidelines/cards/`, the `ui_kits/marketing/` and `ui_kits/portal/` screens, and the `Logo Brainstorm.html` exploration record did not ship in the single-file export; the `.b-*` CSS is the complete component contract here, and the explorer's `AflMark` is the logo component. The mark colorways and PNGs the guide names were regenerated here from the exported SVG's geometry.
- **Email divergence:** an earlier draft of `emails/ai-flotation.html` used a dark band header and a purple (`#5646C6`) button inherited from an older payload. This repo's contract is the one the Email tab renders — white header, mark + wordmark, 3px accent rule, rust `#BA430E` button; treat this folder as canonical.
- **Re-syncing from Claude Design:** the share link is the source of truth. To re-import, download the single-file HTML export and unbundle it into this layout (the `__bundler/manifest` script tag holds every file gzip+base64; the `__bundler/template` tag holds the page), keeping token CSS byte-identical.
