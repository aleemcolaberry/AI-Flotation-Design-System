/* Compiled from app/src/start.jsx by app/build.js (Babel 7.29.0, preset react). Edit the .jsx, then rebuild. */
// Start view — design-system landing: what it is, how to use it, Claude Code integration
function AflStart({ b, setView, copied, copyText }) {
  const L = b.modes.light;
  const heading = aflStack(b.fonts.heading),body = aflStack(b.fonts.body);
  const tile = { background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '10px' };
  const mono = { fontFamily: "'IBM Plex Mono',ui-monospace,monospace" };
  const darkBtn = { fontFamily: 'inherit', fontSize: '12.5px', fontWeight: 600, padding: '8px 14px', minHeight: '38px', borderRadius: '8px', border: '1px solid #1A1D21', background: '#1A1D21', color: '#FFFFFF', cursor: 'pointer' };
  const jump = (label, view) => /*#__PURE__*/React.createElement("button", { key: label, style: { fontFamily: 'inherit', fontSize: '12.5px', fontWeight: 600, padding: '7px 14px', borderRadius: '999px', border: '1px solid ' + L.accent, background: L.accentSoft, color: L.accent, cursor: 'pointer' }, onClick: () => setView(view) }, label);
  const step = (n, t) => /*#__PURE__*/React.createElement("div", { key: n, style: { display: 'flex', gap: '10px', fontSize: '13px', lineHeight: 1.55, color: '#3A3F46' } }, /*#__PURE__*/React.createElement("span", { style: { fontWeight: 700, color: L.accent } }, n), /*#__PURE__*/React.createElement("span", null, t));
  return /*#__PURE__*/React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '18px' } }, /*#__PURE__*/
  React.createElement("div", { style: { background: L.bg, border: '1px solid ' + L.line, borderRadius: '14px', padding: 'clamp(28px,5vw,48px)', fontFamily: body, color: L.fg, animation: 'dcIn-a 210ms cubic-bezier(0.16,0,0,1) both' } }, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' } }, /*#__PURE__*/
  React.createElement("span", { style: aflMask(b.mark, 52, L.accent) }), /*#__PURE__*/
  React.createElement("span", { style: { fontFamily: heading, fontWeight: 700, fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-0.01em' } }, "AI Flotation design system")
  ), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '16px', lineHeight: 1.55, color: L.fgMuted, maxWidth: '640px', margin: '14px 0 20px' } }, "Workflow intake to delivered system. One token set, two directions \u2014 ", /*#__PURE__*/React.createElement("strong", { style: { color: '#BA430E' } }, "Forge"), " (Space Grotesk + Archivo, rust, 2px) and ", /*#__PURE__*/React.createElement("strong", { style: { color: '#0E6E63' } }, "Harbor"), " (Manrope, teal, 6px) \u2014 each in light and dark, every AA pair guaranteed. Tokens are data; everything downstream is generated."), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
  jump('Explore the specimen', 'specimen'), jump('Logo kit', 'logos'), jump('Contrast audit', 'audit'), jump('Tokens as JSON', 'tokens'), jump('Use it', 'kit')
  )
  ), /*#__PURE__*/
  React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '14px' } }, /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '14.5px', fontWeight: 600 } }, "For developers"),
  step('1', /*#__PURE__*/React.createElement("span", null, "Link ", /*#__PURE__*/React.createElement("span", { style: mono }, "styles.css"), " \u2014 it pulls every token, font and ", /*#__PURE__*/React.createElement("span", { style: mono }, ".b-*"), " component class.")),
  step('2', /*#__PURE__*/React.createElement("span", null, "Dark mode: ", /*#__PURE__*/React.createElement("span", { style: mono }, "data-theme=\"dark\""), " on ", /*#__PURE__*/React.createElement("span", { style: mono }, "<html>"), ". Harbor direction: ", /*#__PURE__*/React.createElement("span", { style: mono }, "data-variant=\"harbor\""), ".")),
  step('3', /*#__PURE__*/React.createElement("span", null, "Reference semantic tokens (", /*#__PURE__*/React.createElement("span", { style: mono }, "--bg"), ", ", /*#__PURE__*/React.createElement("span", { style: mono }, "--accent"), ", \u2026), never raw hex. Motion via ", /*#__PURE__*/React.createElement("span", { style: mono }, "--motion-*"), " / ", /*#__PURE__*/React.createElement("span", { style: mono }, "--ease-*"), "."))
  ), /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '14.5px', fontWeight: 600 } }, "For designers"),
  step('1', /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", { style: mono }, "README.md"), " holds voice, visual foundations and iconography rules.")),
  step('2', 'One filled primary action per view; accent marks only that action and the active state.'),
  step('3', 'Sentence case, no emoji. Copy is confident, spare, concrete — times, counts, deliverables.')
  ), /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '14.5px', fontWeight: 600 } }, "For Claude Code"),
  step('1', /*#__PURE__*/React.createElement("span", null, "Download this project and drop the folder into your repo \u2014 ", /*#__PURE__*/React.createElement("span", { style: mono }, "SKILL.md"), " makes it an agent skill (", /*#__PURE__*/React.createElement("span", { style: mono }, "ai-flotation-design"), ").")),
  step('2', /*#__PURE__*/React.createElement("span", null, "Or paste the prompt block into any session:")), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("button", { style: darkBtn, onClick: () => copyText('startPrompt', AFL_PROMPT) }, copied === 'startPrompt' ? 'Copied ✓' : 'Copy Claude prompt')),
  step('3', /*#__PURE__*/React.createElement("span", null, "The ", /*#__PURE__*/React.createElement("span", { style: mono }, ".b-*"), " classes in ", /*#__PURE__*/React.createElement("span", { style: mono }, "base/components.css"), " are the complete component contract; ", /*#__PURE__*/React.createElement("span", { style: mono }, "ui_kits/starter/"), " shows them composed into a screen."))
  )
  ), /*#__PURE__*/
  React.createElement("div", { style: tile }, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '14.5px', fontWeight: 600 } }, "What's in the folder"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))', gap: '4px 24px', fontSize: '13px', lineHeight: 1.8, color: '#3A3F46' } }, /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("span", { style: mono }, "styles.css"), " \u2014 single import, @imports all tokens"), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("span", { style: mono }, "tokens/"), " \u2014 colors, type, spacing, motion, fonts"), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("span", { style: mono }, "base/"), " \u2014 element resets + .b-* component classes"), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("span", { style: mono }, "app/"), " \u2014 this explorer (React, pre-compiled; sources in app/src/)"), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("span", { style: mono }, "assets/"), " \u2014 the float-over-waterline mark (3 colorways + PNG) \xB7 self-hosted fonts"), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("span", { style: mono }, "ui_kits/starter/"), " \u2014 a build-tracker screen composed from the .b-* classes"), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("span", { style: mono }, "emails/"), " \u2014 send-ready transactional email"), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("span", { style: mono }, "exports/"), " \u2014 measured contrast ratios \xB7 ", /*#__PURE__*/React.createElement("span", { style: mono }, "README.md"), " \xB7 ", /*#__PURE__*/React.createElement("span", { style: mono }, "SKILL.md"))
  )
  )
  );
}
Object.assign(window, { AflStart });
