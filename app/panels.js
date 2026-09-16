/* Compiled from app/src/panels.jsx by app/build.js (Babel 7.29.0, preset react). Edit the .jsx, then rebuild. */
// Variants (family check), Contrast audit, Tokens JSON, Kit, UX laws views
function AflMini({ b, mode, i, swap }) {
  const m = b.modes[mode],copy = AFL_COPY;
  const heading = aflStack(b.fonts.heading),body = aflStack(b.fonts.body);
  const mo = b.motion;
  const suf = swap % 2 ? '-b' : '-a';
  return /*#__PURE__*/React.createElement("div", { style: { background: m.bg, border: '1px solid ' + m.line, borderRadius: '12px', padding: '20px', color: m.fg, fontFamily: body, boxShadow: b.shadow, '--dc-dist': mo.enterDistance, animation: 'dcIn' + suf + ' ' + mo.duration.slow + ' ' + mo.easing.enter + ' both', animationDelay: (i || 0) * 55 + 'ms' } }, /*#__PURE__*/
  React.createElement("div", { style: { fontFamily: heading, fontWeight: 700, fontSize: '19px', lineHeight: 1.2 } }, b.variantLabel), /*#__PURE__*/
  React.createElement("div", { style: { color: m.fgMuted, fontSize: '13px', margin: '6px 0 14px', lineHeight: 1.5 } }, b.fonts.heading, b.fonts.body !== b.fonts.heading ? ' + ' + b.fonts.body : '', " \xB7 radius ", b.radius, "px"), /*#__PURE__*/
  React.createElement("button", { style: { display: 'block', width: '100%', fontFamily: body, fontWeight: 600, fontSize: '13.5px', padding: '10px 14px', borderRadius: b.radius + 'px', border: 'none', cursor: 'pointer', background: m.accent, color: m.accentContrast } }, copy.cta), /*#__PURE__*/
  React.createElement("input", { style: { fontFamily: body, fontSize: '13.5px', padding: '9px 12px', borderRadius: b.radius + 'px', border: '1px solid ' + m.line, background: m.bgElevated, color: m.fg, width: '100%', boxSizing: 'border-box', marginTop: '8px', outline: 'none' }, defaultValue: copy.inputValue }), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '6px', marginTop: '14px' } },
  [m.accent, m.accentSoft, m.success, m.warning, m.danger].map((c, j) => /*#__PURE__*/React.createElement("span", { key: j, style: { width: '14px', height: '14px', borderRadius: '50%', background: c, border: '1px solid ' + m.line, display: 'inline-block' } }))
  )
  );
}
function AflVariants({ famMode, toggleFamMode, swap }) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', flexWrap: 'wrap' } }, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '14px', fontWeight: 600 } }, "Direction check \u2014 Forge and Harbor, side by side"), /*#__PURE__*/
  React.createElement("button", { style: { fontFamily: 'inherit', fontSize: '12.5px', fontWeight: 600, padding: '6px 13px', borderRadius: '8px', border: '1px solid #D9DBDF', background: '#FFFFFF', color: '#3A3F46', cursor: 'pointer' }, onClick: toggleFamMode }, famMode === 'light' ? 'Switch to dark' : 'Switch to light')
  ), /*#__PURE__*/
  React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(235px,1fr))', gap: '14px', maxWidth: '760px' } },
  AFL_BRANDS.map((b, i) => /*#__PURE__*/React.createElement(AflMini, { key: b.id + famMode + swap, b: b, mode: famMode, i: i, swap: swap }))
  ), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '12.5px', color: '#5C6470', marginTop: '14px', maxWidth: '680px' } }, "Forge and Harbor share the voice, the 16px \xD7 1.3 scale, the motion tokens and the status colors; they diverge on type, accent hue, radius and shadow. Pick one per surface \u2014 never mix directions in a view.")
  );
}
function AflAudit() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '12.5px', color: '#5C6470', marginBottom: '14px' } }, "Computed live from the token data, both directions. Targets: text pairs \u2265 4.5:1, accent on bg \u2265 3.0:1."), /*#__PURE__*/
  React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: '16px' } },
  AFL_BRANDS.map((x) => /*#__PURE__*/React.createElement("div", { key: x.id, style: { background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '16px 20px' } }, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '14px', fontWeight: 600, marginBottom: '2px' } }, x.name), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '12px', color: '#5C6470', marginBottom: '8px' } }, x.variantLabel),
  ['light', 'dark'].flatMap((mode) => {
    const m = x.modes[mode];
    return [['fg on bg', m.fg, m.bg, 4.5], ['fg on bgElevated', m.fg, m.bgElevated, 4.5], ['fgMuted on bg', m.fgMuted, m.bg, 4.5], ['accentContrast on accent', m.accentContrast, m.accent, 4.5], ['accent on bg', m.accent, m.bg, 3.0]].map(([pair, fgc, bgc, target]) => {
      const r = aflRatio(fgc, bgc),pass = r >= target;
      return /*#__PURE__*/React.createElement("div", { key: mode + pair, style: { display: 'flex', alignItems: 'center', gap: '10px', padding: '5px 0', borderTop: '1px solid #EEF0F2', fontSize: '12.5px' } }, /*#__PURE__*/
      React.createElement("span", { style: { width: '40px', color: '#5C6470' } }, mode), /*#__PURE__*/
      React.createElement("span", { style: { flex: 1 } }, pair + ' (≥ ' + target + ')'), /*#__PURE__*/
      React.createElement("span", { style: { background: bgc, color: fgc, border: '1px solid #D9DBDF', borderRadius: '5px', padding: '2px 8px', fontSize: '11px', fontWeight: 600 } }, "Aa"), /*#__PURE__*/
      React.createElement("span", { style: { fontVariantNumeric: 'tabular-nums', width: '56px', textAlign: 'right' } }, r.toFixed(2), ":1"), /*#__PURE__*/
      React.createElement("span", { style: { fontSize: '10.5px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px', background: pass ? '#E7F5EC' : '#FBE9E7', color: pass ? '#1A7F37' : '#B3261E' } }, pass ? 'AA' : 'FAIL')
      );
    });
  })
  ))
  )
  );
}
function AflTokens() {
  const json = JSON.stringify({ brandId: 'ai-flotation', variants: { a: AFL_BRANDS[0], b: AFL_BRANDS[1] } }, null, 2);
  return /*#__PURE__*/React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' } }, /*#__PURE__*/
  React.createElement("pre", { style: { background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '20px 24px', fontSize: '12.5px', lineHeight: 1.55, overflow: 'auto', margin: 0, fontFamily: "'IBM Plex Mono',ui-monospace,monospace" } }, json), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '12.5px', color: '#5C6470' } }, "Tokens as data \u2014 the same values ship as CSS custom properties in ", /*#__PURE__*/React.createElement("span", { style: { fontFamily: "'IBM Plex Mono',monospace" } }, "tokens/*.css"), " (Forge on ", /*#__PURE__*/React.createElement("span", { style: { fontFamily: "'IBM Plex Mono',monospace" } }, ":root"), ", Harbor under ", /*#__PURE__*/React.createElement("span", { style: { fontFamily: "'IBM Plex Mono',monospace" } }, "[data-variant=\"harbor\"]"), ", dark under ", /*#__PURE__*/React.createElement("span", { style: { fontFamily: "'IBM Plex Mono',monospace" } }, "[data-theme=\"dark\"]"), "). All faces are SIL OFL \u2014 no paid fonts.")
  );
}
function AflKit({ b, copied, copyText, copyFiles }) {
  const darkBtn = { fontFamily: 'inherit', fontSize: '12.5px', fontWeight: 600, padding: '8px 14px', minHeight: '38px', borderRadius: '8px', border: '1px solid #1A1D21', background: '#1A1D21', color: '#FFFFFF', cursor: 'pointer' };
  const lightBtn = { display: 'inline-flex', alignItems: 'center', fontSize: '12.5px', fontWeight: 600, padding: '8px 14px', minHeight: '38px', boxSizing: 'border-box', borderRadius: '8px', border: '1px solid #D9DBDF', background: '#FFFFFF', color: '#3A3F46', textDecoration: 'none' };
  const tile = { background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '10px' };
  const mono = { fontSize: '12px', fontFamily: "'IBM Plex Mono',ui-monospace,monospace", color: '#5C6470' };
  return /*#__PURE__*/React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' } }, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '12.5px', color: '#5C6470', maxWidth: '720px' } }, "The brand generates its complete design system from the 12 token groups \u2014 a stylesheet developers link, a guide designers read, and a prompt block AI tools consume. The selected direction applies."), /*#__PURE__*/
  React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))', gap: '14px' } }, /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '14.5px', fontWeight: 600 } }, "CSS design system \u2014 for developers"), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '13px', lineHeight: 1.55, color: '#3A3F46' } }, "Custom properties (light + dark, Forge + Harbor) plus ready ", /*#__PURE__*/React.createElement("span", { style: { fontFamily: "'IBM Plex Mono',monospace" } }, ".b-*"), " components: btn, input, field, card, badge, alert. Hover, press and focus states derive from the accent automatically."), /*#__PURE__*/
  React.createElement("div", { style: mono }, "styles.css \u2192 tokens/*.css + base/*.css"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } }, /*#__PURE__*/
  React.createElement("button", { style: darkBtn, onClick: () => copyFiles('css', ['tokens/colors.css', 'tokens/typography.css', 'tokens/spacing.css', 'tokens/motion.css', 'base/base.css', 'base/components.css']) }, copied === 'css' ? 'Copied ✓' : 'Copy CSS'), /*#__PURE__*/
  React.createElement("a", { href: "ui_kits/starter/index.html", target: "_blank", style: lightBtn }, "Starter screen \u2197"), /*#__PURE__*/
  React.createElement("a", { href: "tokens/ai-flotation.json", target: "_blank", style: lightBtn }, "Tokens JSON \u2197")
  )
  ), /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '14.5px', fontWeight: 600 } }, "Brand guide \u2014 for designers"), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '13px', lineHeight: 1.55, color: '#3A3F46' } }, "Markdown with the full token story, type and shape values, usage rules (semantic tokens only, one accent per view, 44px targets) and the brand voice."), /*#__PURE__*/
  React.createElement("div", { style: mono }, "README.md"), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("button", { style: darkBtn, onClick: () => copyFiles('md', ['README.md']) }, copied === 'md' ? 'Copied ✓' : 'Copy Markdown'))
  ), /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '14.5px', fontWeight: 600 } }, "Prompt block \u2014 for Claude / AI generation"), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '13px', lineHeight: 1.55, color: '#3A3F46' } }, "Paste this at the top of any Claude or Claude Code session to generate on-brand UI against the stylesheet. ", /*#__PURE__*/React.createElement("span", { style: { fontFamily: "'IBM Plex Mono',monospace" } }, "SKILL.md"), " makes the whole folder an agent skill."), /*#__PURE__*/
  React.createElement("div", { style: { background: '#F6F7F8', border: '1px solid #E4E6E9', borderRadius: '8px', padding: '12px 14px', fontSize: '12px', lineHeight: 1.6, fontFamily: "'IBM Plex Mono',ui-monospace,monospace", color: '#3A3F46' } }, AFL_PROMPT), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("button", { style: darkBtn, onClick: () => copyText('prompt', AFL_PROMPT) }, copied === 'prompt' ? 'Copied ✓' : 'Copy prompt'))
  ), /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '14.5px', fontWeight: 600 } }, "Generated from 12 token groups"), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '13px', lineHeight: 1.7, color: '#3A3F46' } }, "Hover + press shades (color-mix on the accent) \xB7 focus ring \xB7 six type steps from base \xD7 ratio \xB7 4px spacing scale \xB7 touch-target constant \xB7 component classes \xB7 motion custom properties (--motion-*, --ease-*, press scale) with .b-enter / .b-pop / .b-skeleton ready-made \xB7 reduced-motion guard. Change a token, regenerate, and the whole system follows \u2014 nothing is hand-tuned downstream.")
  )
  )
  );
}
function AflUx({ b }) {
  const badgeStyle = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '26px', height: '26px', borderRadius: '50%', background: b.modes.light.accentSoft, color: b.modes.light.accent, fontSize: '12.5px', fontWeight: 700, flexShrink: 0 };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '12.5px', color: '#5C6470', marginBottom: '14px', maxWidth: '680px' } }, "Ten laws of UX, and where each is built into the tokens and components. The page itself is fluid: paddings clamp, grids collapse to one column, and every control meets the 44px touch target."), /*#__PURE__*/
  React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))', gap: '14px' } },
  AFL_UX.map(([name, principle, applied], i) => /*#__PURE__*/React.createElement("div", { key: name, style: { background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '8px' } }, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '10px' } }, /*#__PURE__*/
  React.createElement("span", { style: badgeStyle }, i + 1), /*#__PURE__*/
  React.createElement("span", { style: { fontSize: '14.5px', fontWeight: 600 } }, name)
  ), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '13px', color: '#5C6470', fontStyle: 'italic' } }, principle), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8A919B', marginTop: '4px' } }, "Applied here"),
  applied.map((text) => /*#__PURE__*/React.createElement("div", { key: text, style: { fontSize: '13px', lineHeight: 1.5, display: 'flex', gap: '8px' } }, /*#__PURE__*/React.createElement("span", { style: { color: '#8A919B' } }, "\xB7"), /*#__PURE__*/React.createElement("span", null, text)))
  ))
  )
  );
}
Object.assign(window, { AflMini, AflVariants, AflAudit, AflTokens, AflKit, AflUx });
