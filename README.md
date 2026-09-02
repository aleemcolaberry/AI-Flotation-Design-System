# AI Flotation Design System

**Workflow intake to delivered system.** AI Flotation LLC is an AI consulting shop — a client books a scoping call, the team maps the workflow and names the bottleneck, then ships an automated system. The brand sells competence, not inspiration.

One token set, two directions, both in light and dark:

| | Forge (default) | Harbor |
|---|---|---|
| Type | Space Grotesk (headings) + Archivo (body) | Manrope throughout |
| Accent | Rust `#BA430E` | Teal `#0E6E63` |
| Radius | 2px controls / 6px cards | 6px controls / 10px cards |
| Shadow | Near-flat, sharp | Softer |
| Opt in | `:root` default | `data-variant="harbor"` on `<html>` |

Every color pair (`fg`-on-`bg`, `fg`-on-`bg-elevated`, `fg-muted`-on-`bg`, `accent-contrast`-on-`accent`, `accent`-on-`bg`) is WCAG 2.1 AA in **both** directions and **both** modes — see the Contrast audit tab in the live kit for measured ratios.

Extracted from the **Multi-Brand Tokens** Claude Design project (five brands; AI Flotation split out on its own here).

---

## Quickstart — developers

Link one file. It pulls in fonts, every design token, and the `.b-*` component classes:

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
- **Motion runs on tokens, never hand-picked durations** — `var(--motion-fast|base|slow)` with `var(--ease|--ease-enter|--ease-exit)`. `.b-enter` / `.b-pop` give you the standard 5px-rise-and-fade entrance; `.b-skeleton` is the loading shimmer. `prefers-reduced-motion` collapses all of it automatically (see `tokens/motion.css`).
- **Touch targets ≥ 44px** — already baked into `.b-btn` / `.b-input` via `var(--touch-target)`.

### Handing this to an AI pair-programmer

Paste this into a Claude Code / Cursor / Copilot session before asking it to build a screen:

> Using the AI Flotation design system: link `styles.css` (CSS variables + `.b-*` components; dark mode via `data-theme="dark"` on `<html>`; Harbor direction via `data-variant="harbor"`). Fonts: Space Grotesk headings + Archivo body (Forge) or Manrope (Harbor), from Google Fonts. Reference semantic tokens (`--bg`, `--fg`, `--accent`, ...), never raw hex. One filled primary action per view; 44px touch targets; AA contrast is guaranteed by the tokens. Motion: `--motion-fast/base/slow` with `--ease-*` curves (`.b-enter`, `.b-pop`, `.b-skeleton` ready-made); respect `prefers-reduced-motion`. Voice: confident, spare, concrete; sells competence, not inspiration. Build: [describe what you want].

---

## Quickstart — designers

Open **`index.html`** in a browser (clone the repo and double-click it, or serve the folder locally — it's fully self-contained, no build step). It's both the live specimen and the documentation:

| Tab | What it's for |
|---|---|
| **Start here** | Orientation — this same overview, plus jump links |
| **Specimen** | Every token rendered as type, color, spacing and component swatches |
| **Logos** | The mark in both directions, both modes, plus scale tests |
| **Login** | A worked example screen — form, buttons, states |
| **Directions** | Forge vs. Harbor side by side, for a lineup comparison |
| **Contrast audit** | Every AA pair with its measured ratio, light and dark |
| **Tokens** | The full token set as copy-ready JSON |
| **Kit** | Copy-to-clipboard buttons for every CSS/token file below |
| **Email** | The transactional email template, rendered |
| **UX laws** | The ten usability heuristics this system deliberately encodes, each tied to a concrete rule (Fitts's Law → 44px targets, Hick's Law → one primary button, etc.) |

Flip **Direction** (Forge/Harbor) and **mode** (light/dark) from the tab controls to see everything recompute live — nothing is hand-tuned per combination, it all derives from the same token set.

### Content voice

Confident, spare, concrete — sells competence, not inspiration.

- Short declarative sentences. No exclamation marks, no hype adjectives, no filler.
- Concrete specifics over abstractions: *"30 minutes, Thursday 2:00 CT. We will map the workflow and name the bottleneck."* — times, counts, deliverables, not adjectives.
- "We" for the company, "you" for the client.
- Sentence case everywhere — headings, buttons, badges. Never Title Case or ALL CAPS (badges may use caps only as a 12px label style).
- Button labels are verbs: *"See prep notes"*, *"Book a scoping call"*.
- Headlines state facts or outcomes, not slogans: *"Scoping call booked"*, not *"Unlock your workflow's potential"*.
- No emoji, no decorative punctuation.

### Iconography

There is no icon system — no icon font, no SVG set, no emoji, anywhere. The only mark is the logo. Communicate with text, color, and the badge/alert components; unicode glyphs (`·`, `→`, `×`) can serve as functional affordances. If an icon set becomes unavoidable, Lucide at 1.5px stroke is the closest neutral match to the brand's geometry — treat it as a substitution, not brand canon, and flag it as such.

**Logo:** the "float over waterline" mark — a circle above two rounded rules (`assets/ai-flotation-mark.svg`). Lockup is mark + "AI Flotation" wordmark set in the heading font, 700 weight. Never redraw or distort the geometry; recolor only through the token system (`currentColor` via a CSS mask, as `index.html` does for the header lockup).

---

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

`--accent-hover` and `--accent-press` are computed with `color-mix()` (toward black in light mode, white in dark) rather than hand-picked — see `tokens/colors.css`.

### Typography

Scale is 16px × 1.3 in both directions: **13 · 16 · 21 · 27 · 35 · 46** (`--fs-caption` → `--fs-h1`). Body line-height 1.55, headings 1.2, heading weight 700.

### Spacing, radius, shape

4px base steps: `--space-1` through `--space-16` = 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64. Page padding is fluid: `clamp(16px, 4vw, 32px)`. Breakpoints: 640 / 768 / 1024 / 1280. Touch targets ≥ 44px always. Radius is 2px (Forge) / 6px (Harbor) on controls, +4px on cards; badges are the one pill shape (999px).

### Motion

`--motion-fast` 80ms (hover, press, toggles) · `--motion-base` 140ms (menus, toasts, accordions) · `--motion-slow` 210ms (modals, view changes). Standard easing `cubic-bezier(0.3,0,0,1)`, enter `(0.16,0,0,1)`, exit `(0.4,0,1,1)` — exits always run at `fast` with the exit curve. Never hand-pick a duration; use the tokens.

### `.b-*` components

| Class | What it is |
|---|---|
| `.b-btn`, `.b-btn--secondary`, `.b-btn--ghost`, `.b-btn--danger` | Buttons — one filled primary per view, everything else secondary/ghost |
| `.b-field`, `.b-input`, `.b-input--error`, `.b-help`, `.b-error-text` | Form field, label, help/error text |
| `.b-card` | Elevated surface — hairline border, small shadow, radius+4 |
| `.b-badge` | Pill label |
| `.b-alert`, `.b-alert--success/--warning/--danger` | Status banners |
| `.b-enter`, `.b-pop`, `.b-skeleton` | Motion — entrance and loading states |

---

## File structure

```
index.html            the token explorer + docs — open this first
styles.css             global entry point (@imports only) — link this in your own project
tokens/
  fonts.css             Google Fonts @import (Space Grotesk, Archivo, Manrope — OFL, no binaries)
  colors.css             Forge/Harbor × light/dark custom properties
  typography.css         font stacks + type scale
  spacing.css             space/radius/shadow/breakpoint tokens
  motion.css               durations, easings, .b-enter/.b-pop/.b-skeleton
base/
  base.css               body/heading/link element styles
  components.css          the .b-* component classes
assets/
  ai-flotation-mark.svg  the "float over waterline" mark
emails/
  ai-flotation.html      the transactional email template, send-ready
```

### Not included in this export

The source **Multi-Brand Tokens** Claude Design project also defines React component wrappers (`components/core/` — Button, Field, Input, Card, Badge, Alert, Skeleton mirroring the `.b-*` classes above), foundation specimen cards (`guidelines/cards/`), and two full UI-kit screens (`ui_kits/marketing/` a landing page, `ui_kits/portal/` a client intake portal). Those weren't part of this single-brand export — the CSS/token layer above and the `index.html` demo are complete and canonical; the rest can be pulled in from the source project on request.

---

## Support

`support@aiflotation.com`
