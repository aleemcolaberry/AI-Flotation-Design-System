---
name: ai-flotation-design
description: Use this skill to generate well-branded interfaces and assets for AI Flotation LLC (AI consulting — workflow intake to delivered system), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping in two directions (Forge, Harbor), light and dark.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files. `index.html` is an interactive explorer of the whole system (specimen in both modes and both directions, logos, login, directions side by side, contrast audit, tokens as JSON, kit, email, UX laws) — openable in any browser, no build step.

Quick start: link `styles.css` (tokens + `.b-*` component classes; dark mode via `data-theme="dark"` on `<html>`, Harbor direction via `data-variant="harbor"`; Space Grotesk, Archivo and Manrope are self-hosted through `tokens/fonts.css`), use the SVG mark colorways and the PNG in `assets/`. Reference semantic tokens (`--bg`, `--fg`, `--accent`, …), never raw hex. Keep one filled accent primary action per view, 44px touch targets, motion via `--motion-*`/`--ease-*` tokens only. Pick one direction per surface and never mix them in a view. Voice: confident, spare, concrete — sells competence, not inspiration; sentence case, no emoji, no exclamation marks.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view — `ui_kits/starter/index.html` shows the `.b-*` classes composed into a full screen. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
