/* Compiled from app/src/views.jsx by app/build.js (Babel 7.29.0, preset react). Edit the .jsx, then rebuild. */
// Logos, Login, Email views — ported from source, ai-flotation paths only
function AflLogos({ b, swap }) {
  const L = b.modes.light,D = b.modes.dark;
  const heading = aflStack(b.fonts.heading);
  const mo = b.motion;
  const A = (n) => n + (swap % 2 ? '-b' : '-a');
  const src = b.mark;
  const mk = (size, hull, float) => /*#__PURE__*/React.createElement(AflMark, { size: size, hull: hull, float: float ?? hull });
  const word = (color) => ({ fontFamily: heading, fontWeight: 700, fontSize: '20px', letterSpacing: '-0.01em', lineHeight: 1.2, color, maxWidth: '190px', textWrap: 'balance' });
  const stageBase = { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '140px', borderRadius: b.radius + 2 + 'px', padding: '20px' };
  const tile = { background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '10px', '--dc-dist': mo.enterDistance, animation: A('dcIn') + ' ' + mo.duration.slow + ' ' + mo.easing.enter + ' both' };
  const tileTitle = { fontSize: '11px', letterSpacing: '0.09em', textTransform: 'uppercase', color: '#8A919B', fontWeight: 600 };
  const tileMeta = { fontSize: '12px', color: '#5C6470', fontFamily: 'ui-monospace, monospace' };
  const stage = { ...stageBase, background: L.bg, border: '1px solid ' + L.line, flex: 1 };
  const files = ['assets/ai-flotation-mark.svg', 'assets/ai-flotation-mark-dark.svg', 'assets/ai-flotation-mark-white.svg', 'assets/ai-flotation-mark-mono.svg'];
  return /*#__PURE__*/React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' } }, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' } }, /*#__PURE__*/
  React.createElement("span", { style: { fontSize: '10.5px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', flexShrink: 0, background: '#FCF1DD', color: '#8A5A00' } }, "Hull mark \xB7 selected 6e"), /*#__PURE__*/
  React.createElement("span", { style: { fontSize: '12.5px', color: '#5C6470', maxWidth: '640px' } }, "A solid hull carrying the accent float above the water: this is what floats, this is what we carry. Two fills, reads at 16px.")
  ), /*#__PURE__*/
  React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '14px' } }, /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/React.createElement("div", { style: tileTitle }, "Mark"), /*#__PURE__*/React.createElement("div", { style: stage }, mk(72, L.fg, L.accent)), /*#__PURE__*/React.createElement("div", { style: tileMeta }, src, " \xB7 min 16px")), /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/React.createElement("div", { style: tileTitle }, "Horizontal lockup"), /*#__PURE__*/React.createElement("div", { style: stage }, /*#__PURE__*/React.createElement("span", { style: { display: 'inline-flex', alignItems: 'center', gap: '14px' } }, mk(44, L.fg, L.accent), /*#__PURE__*/React.createElement("span", { style: word(L.fg) }, b.name))), /*#__PURE__*/React.createElement("div", { style: tileMeta }, "Min width 120px \xB7 clearspace \xBD mark height")), /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/React.createElement("div", { style: tileTitle }, "Vertical lockup"), /*#__PURE__*/React.createElement("div", { style: stage }, /*#__PURE__*/React.createElement("span", { style: { display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '12px' } }, mk(72, L.fg, L.accent), /*#__PURE__*/React.createElement("span", { style: { ...word(L.fg), textAlign: 'center', maxWidth: '210px' } }, b.name))), /*#__PURE__*/React.createElement("div", { style: tileMeta }, "Centered contexts \u2014 badges, splash, certificates")), /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/React.createElement("div", { style: tileTitle }, "App icon"), /*#__PURE__*/React.createElement("div", { style: stage }, /*#__PURE__*/React.createElement("span", { style: { display: 'inline-flex', alignItems: 'flex-end', gap: '16px' } },
  [84, 48, 26].map((s) => /*#__PURE__*/React.createElement("span", { key: s, style: { width: s + 'px', height: s + 'px', borderRadius: Math.round(s * 0.22) + 'px', background: L.accent, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 } }, mk(Math.round(s * 0.58), L.accentContrast)))
  )), /*#__PURE__*/React.createElement("div", { style: tileMeta }, "Accent tile, 22% corner radius, accentContrast mark")), /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/React.createElement("div", { style: tileTitle }, "Favicon"), /*#__PURE__*/React.createElement("div", { style: stage }, /*#__PURE__*/React.createElement("span", { style: { display: 'inline-flex', alignItems: 'flex-end', gap: '22px' } },
  [32, 24, 16].map((s) => /*#__PURE__*/React.createElement("span", { key: s, style: { display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px' } }, mk(s, L.fg, L.accent), /*#__PURE__*/React.createElement("span", { style: { fontSize: '10.5px', color: '#8A919B', fontFamily: 'ui-monospace, monospace' } }, s, "px")))
  )), /*#__PURE__*/React.createElement("div", { style: tileMeta }, "Same SVG, token-colored \u2014 still reads at 16px")), /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/React.createElement("div", { style: tileTitle }, "On dark"), /*#__PURE__*/React.createElement("div", { style: { ...stageBase, background: D.bg, border: '1px solid ' + D.line, flex: 1 } }, /*#__PURE__*/React.createElement("span", { style: { display: 'inline-flex', alignItems: 'center', gap: '14px' } }, mk(44, D.fg, D.accent), /*#__PURE__*/React.createElement("span", { style: word(D.fg) }, b.name))), /*#__PURE__*/React.createElement("div", { style: tileMeta }, 'Dark-mode accent ' + D.accent.toUpperCase() + ' on ' + D.bg.toUpperCase())), /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/React.createElement("div", { style: tileTitle }, "Monochrome"), /*#__PURE__*/React.createElement("div", { style: stage }, /*#__PURE__*/React.createElement("span", { style: { display: 'inline-flex', alignItems: 'center', gap: '14px' } }, mk(44, L.fg), /*#__PURE__*/React.createElement("span", { style: word(L.fg) }, b.name))), /*#__PURE__*/React.createElement("div", { style: tileMeta }, "Single-color contexts \u2014 print, stamp, embossing")), /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/React.createElement("div", { style: tileTitle }, "Usage"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', lineHeight: 1.55, color: '#3A3F46' } }, /*#__PURE__*/
  React.createElement("div", null, "Clearspace: \xBD mark height on all sides; never crowd the lockup."), /*#__PURE__*/
  React.createElement("div", null, "Minimums: mark 16px, horizontal lockup 120px wide."), /*#__PURE__*/
  React.createElement("div", null, "Colors come from tokens only \u2014 hull in fg, float in accent; fg for mono; accentContrast on accent tiles. Never stretch, rotate or add effects."), /*#__PURE__*/
  React.createElement("div", { style: tileTitle }, "Files"),
  files.map((p) => /*#__PURE__*/React.createElement("div", { key: p, style: { fontSize: '12px', fontFamily: 'ui-monospace, monospace', color: '#5C6470', background: '#F6F7F8', border: '1px solid #E4E6E9', borderRadius: '6px', padding: '5px 10px', overflowWrap: 'anywhere' } }, p))
  )
  )
  )
  );
}
function AflLoginPanel({ b, mode, swap }) {
  const m = b.modes[mode];
  const heading = aflStack(b.fonts.heading),body = aflStack(b.fonts.body);
  const base = b.typeScale.base,k = b.typeScale.ratio,h2 = Math.round(base * k * k);
  const mo = b.motion,copy = AFL_LOGIN;
  const A = (n) => n + (swap % 2 ? '-b' : '-a');
  const tr = (props) => props.map((pp) => pp + ' ' + mo.duration.fast + ' ' + mo.easing.standard).join(', ');
  const input = { fontFamily: body, fontSize: base - 1 + 'px', padding: '11px 12px', minHeight: '44px', borderRadius: b.radius + 'px', border: '1px solid ' + m.line, background: m.bgElevated, color: m.fg, outline: 'none', width: '100%', boxSizing: 'border-box', transition: tr(['border-color', 'box-shadow']) };
  const btn = { fontFamily: body, fontWeight: 600, fontSize: base - 1 + 'px', minHeight: '44px', borderRadius: b.radius + 'px', border: '1px solid transparent', cursor: 'pointer', width: '100%', boxSizing: 'border-box', transition: tr(['background', 'transform', 'filter', 'border-color', 'color']) };
  const label = { fontSize: base - 2 + 'px', fontWeight: 600 };
  const link = { color: m.accent, fontWeight: 600, fontSize: base - 2 + 'px', cursor: 'pointer' };
  const P = 'lgn-' + b.variant + '-' + mode;
  const hovCss = '.' + P + ' .hP:hover{filter:brightness(' + (mode === 'light' ? '0.92' : '1.12') + ');transform:translateY(-1px)}.' + P + ' .hP:active,.' + P + ' .hS:active{transform:scale(' + mo.pressScale + ')}.' + P + ' .hS:hover{border-color:' + m.accent + ' !important;color:' + m.accent + ' !important}';
  return /*#__PURE__*/React.createElement("div", { className: P, style: { flex: '1 1 400px', minWidth: 'min(360px, 100%)', maxWidth: '600px', background: m.bg, border: '1px solid ' + m.line, borderRadius: '14px', padding: 'clamp(26px, 4vw, 46px) clamp(16px, 3vw, 28px) clamp(18px, 3vw, 26px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px', fontFamily: body, fontSize: base + 'px', color: m.fg, boxSizing: 'border-box', '--dc-dist': mo.enterDistance, animation: A('dcIn') + ' ' + mo.duration.slow + ' ' + mo.easing.enter + ' both', animationDelay: mode === 'dark' ? '70ms' : '0ms' } }, /*#__PURE__*/
  React.createElement("style", null, hovCss), /*#__PURE__*/
  React.createElement("div", { style: { alignSelf: 'flex-start', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: m.fgMuted, border: '1px solid ' + m.line, borderRadius: '999px', padding: '3px 10px' } }, mode === 'light' ? 'Light' : 'Dark'), /*#__PURE__*/
  React.createElement("div", { style: { width: '100%', maxWidth: '400px', background: m.bgElevated, border: '1px solid ' + m.line, borderRadius: b.radius + 6 + 'px', boxShadow: b.shadow, padding: '30px 26px', display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box', animation: A('dcPop') + ' ' + mo.duration.slow + ' ' + mo.easing.enter + ' both' } }, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', justifyContent: 'center', padding: '4px 0 2px' } }, /*#__PURE__*/
  React.createElement("span", { style: { display: 'inline-flex', alignItems: 'center', gap: '10px' } }, /*#__PURE__*/React.createElement(AflMark, { size: 26, hull: m.fg, float: m.accent }), /*#__PURE__*/React.createElement("span", { style: { fontFamily: heading, fontWeight: 700, fontSize: '19px', color: m.fg } }, b.name))
  ), /*#__PURE__*/
  React.createElement("div", { style: { fontFamily: heading, fontWeight: 700, fontSize: h2 + 'px', lineHeight: 1.2, textAlign: 'center', marginTop: '4px' } }, copy.title), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: base - 1 + 'px', color: m.fgMuted, textAlign: 'center', lineHeight: 1.5, marginTop: '-12px' } }, copy.sub), /*#__PURE__*/
  React.createElement("button", { className: "hS", style: { ...btn, background: m.bgElevated, color: m.fg, border: '1px solid ' + m.line } }, copy.sso), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '10px' } }, /*#__PURE__*/React.createElement("span", { style: { flex: 1, height: '1px', background: m.line } }), /*#__PURE__*/React.createElement("span", { style: { fontSize: '12px', color: m.fgMuted } }, "or"), /*#__PURE__*/React.createElement("span", { style: { flex: 1, height: '1px', background: m.line } })), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '6px' } }, /*#__PURE__*/
  React.createElement("label", { style: label }, copy.email), /*#__PURE__*/
  React.createElement("input", { style: input, defaultValue: copy.emailValue })
  ), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '6px' } }, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '10px' } }, /*#__PURE__*/React.createElement("label", { style: label }, "Password"), /*#__PURE__*/React.createElement("span", { style: link }, "Forgot password?")), /*#__PURE__*/
  React.createElement("input", { type: "password", style: input, defaultValue: "secretpass" })
  ), /*#__PURE__*/
  React.createElement("label", { style: { display: 'flex', alignItems: 'center', gap: '10px', fontSize: base - 2 + 'px', cursor: 'pointer' } }, /*#__PURE__*/React.createElement("input", { type: "checkbox", defaultChecked: true, style: { width: '20px', height: '20px', accentColor: m.accent, cursor: 'pointer', margin: 0, flexShrink: 0 } }), /*#__PURE__*/React.createElement("span", null, copy.remember)), /*#__PURE__*/
  React.createElement("button", { className: "hP", style: { ...btn, background: m.accent, color: m.accentContrast, boxShadow: b.shadow } }, copy.cta), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: base - 2 + 'px', color: m.fgMuted, textAlign: 'center', marginTop: '2px' } }, copy.alt, " ", /*#__PURE__*/React.createElement("span", { style: link }, copy.altLink))
  ), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '12px', color: m.fgMuted, textAlign: 'center' } }, copy.foot)
  );
}
function AflLogin({ b, swap }) {
  return /*#__PURE__*/React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' } }, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'stretch' } },
  ['light', 'dark'].map((mode) => /*#__PURE__*/React.createElement(AflLoginPanel, { key: b.id + mode + swap, b: b, mode: mode, swap: swap }))
  ), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '12.5px', color: '#5C6470', maxWidth: '680px' } }, "Same recipe every time \u2014 card on bg, 44px controls, one filled action, brand header \u2014 restyled entirely by the direction's tokens. The card enters with the brand's own pop curve; copy follows the brand voice.")
  );
}
function AflEmail({ b }) {
  const m = b.modes.light;
  const sys = "'Helvetica Neue', Arial, sans-serif";
  const info = AFL_EMAIL;
  return /*#__PURE__*/React.createElement("div", { style: { display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-start' } }, /*#__PURE__*/
  React.createElement("div", { style: { background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '8px', overflow: 'hidden', flex: '1 1 380px', minWidth: 'min(380px, 100%)', maxWidth: '600px', fontFamily: sys, color: '#1A1A1A' } }, /*#__PURE__*/
  React.createElement("div", { style: { padding: '18px 32px', background: '#FFFFFF', borderBottom: '3px solid ' + m.accent } }, /*#__PURE__*/
  React.createElement("span", { style: { display: 'inline-flex', alignItems: 'center', gap: '10px' } }, /*#__PURE__*/React.createElement("span", { style: { display: 'inline-block', width: '26px', height: '26px', backgroundImage: 'url(' + b.mark + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' } }), /*#__PURE__*/React.createElement("span", { style: { fontWeight: 700, fontSize: '19px', color: '#1A1A1A' } }, b.name))
  ), /*#__PURE__*/
  React.createElement("div", { style: { padding: '28px 32px' } }, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '21px', fontWeight: 700, lineHeight: 1.3 } }, info.title), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '15px', lineHeight: 1.6, color: '#4A4A4A', margin: '10px 0 22px' } }, info.body), /*#__PURE__*/
  React.createElement("a", { style: { display: 'inline-block', background: m.accent, color: m.accentContrast, padding: '13px 26px', borderRadius: b.radius + 'px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', cursor: 'pointer' } }, info.cta)
  ), /*#__PURE__*/
  React.createElement("div", { style: { padding: '16px 32px 20px', background: '#F6F6F6', color: '#6B6B6B', fontSize: '12px', lineHeight: 1.5, borderTop: '1px solid #E4E4E3' } }, /*#__PURE__*/
  React.createElement("div", { style: { fontWeight: 700 } }, info.entity), /*#__PURE__*/
  React.createElement("div", { style: { marginTop: '4px' } }, "[Mailing address \u2014 confirm sending entity] \xB7 ", /*#__PURE__*/React.createElement("span", { style: { textDecoration: 'underline' } }, "Unsubscribe"))
  )
  ), /*#__PURE__*/
  React.createElement("div", { style: { flex: '1 1 300px', minWidth: 'min(300px,100%)', maxWidth: '440px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', lineHeight: 1.55 } }, /*#__PURE__*/
  React.createElement("div", { style: { background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '14px 18px' } }, /*#__PURE__*/React.createElement("span", { style: { fontWeight: 600 } }, "Header choice"), /*#__PURE__*/React.createElement("br", null), info.note), /*#__PURE__*/
  React.createElement("div", { style: { background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '14px 18px' } }, /*#__PURE__*/React.createElement("span", { style: { fontWeight: 600 } }, "email.buttonHex"), "\xA0 ", /*#__PURE__*/React.createElement("span", { style: { fontFamily: "'IBM Plex Mono',monospace" } }, m.accent.toUpperCase())), /*#__PURE__*/
  React.createElement("div", { style: { background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '14px 18px' } }, /*#__PURE__*/React.createElement("span", { style: { fontWeight: 600 } }, "Production rules"), /*#__PURE__*/React.createElement("br", null), "Table-based HTML, every style inline, no web fonts (system stack shown here), PNG logo \u2264 48px, max-width 600px, colors chosen to survive Gmail and Outlook dark-mode inversion \u2014 no white logo on transparent."), /*#__PURE__*/
  React.createElement("div", { style: { background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '14px 18px' } }, /*#__PURE__*/React.createElement("span", { style: { fontWeight: 600 } }, "Send-ready file"), /*#__PURE__*/React.createElement("br", null), "The production table-based version lives at ", /*#__PURE__*/React.createElement("span", { style: { fontFamily: "'IBM Plex Mono',monospace" } }, "emails/ai-flotation.html"), " \u2014 ", /*#__PURE__*/React.createElement("a", { href: "emails/ai-flotation.html", target: "_blank" }, "open it \u2197"), ". Support: support@aiflotation.com.")
  )
  );
}
Object.assign(window, { AflLogos, AflLogin, AflLoginPanel, AflEmail });
