/* Compiled from app/src/app.jsx by app/build.js (Babel 7.29.0, preset react). Edit the .jsx, then rebuild. */
// AI Flotation design system explorer — root component. Unbundled from the Claude Design single-file export; resources resolve to files in this folder.
function AflApp() {
  const [view, setView] = React.useState(localStorage.getItem('afl-view') || 'start');
  const [variant, setVariant] = React.useState(localStorage.getItem('afl-variant') || 'a');
  const [famMode, setFamMode] = React.useState('light');
  const [swap, setSwap] = React.useState(0);
  const [copied, setCopied] = React.useState(null);
  const [demo, setDemo] = React.useState({ check: true, radio: 0, sw: true, slider: 60, selOpen: false, sel: 0, acc: 0, page: 2, motionPos: false });
  const ctRef = React.useRef(null);
  React.useEffect(() => {localStorage.setItem('afl-view', view);}, [view]);
  React.useEffect(() => {localStorage.setItem('afl-variant', variant);}, [variant]);
  const b = AFL_BRANDS.find((x) => x.variant === variant) || AFL_BRANDS[0];
  const copyText = (key, text) => {navigator.clipboard.writeText(text).then(() => {setCopied(key);clearTimeout(ctRef.current);ctRef.current = setTimeout(() => setCopied(null), 1500);});};
  // Copies the real files from this folder. fetch() needs http(s); from file:// the browser blocks it, so fall back to opening the first file.
  const copyFiles = (key, paths) => {Promise.all(paths.map((p) => fetch(p).then((r) => {if (!r.ok) throw new Error(r.status);return r.text();}))).then((parts) => copyText(key, parts.join('\n\n'))).catch(() => window.open(paths[0], '_blank'));};
  const tab = (active) => ({ fontFamily: 'inherit', fontSize: '13px', fontWeight: 600, padding: '7px 14px', borderRadius: '8px', border: '1px solid ' + (active ? '#1A1D21' : '#D9DBDF'), background: active ? '#1A1D21' : '#FFFFFF', color: active ? '#FFFFFF' : '#3A3F46', cursor: 'pointer', transition: 'background 140ms ease, color 140ms ease, border-color 140ms ease' });
  const viewTabs = [['start', 'Start here'], ['specimen', 'Specimen'], ['logos', 'Logos'], ['login', 'Login'], ['variants', 'Directions'], ['audit', 'Contrast audit'], ['tokens', 'Tokens'], ['kit', 'Kit'], ['email', 'Email'], ['ux', 'UX laws']];
  const showVariantTabs = ['specimen', 'logos', 'login', 'kit', 'email', 'ux'].includes(view);
  const variantTabs = AFL_BRANDS.map((x) => /*#__PURE__*/React.createElement("button", { key: x.id, style: { fontFamily: 'inherit', fontSize: '12.5px', fontWeight: 600, padding: '6px 13px', borderRadius: '999px', border: '1px solid ' + (x.id === b.id ? x.modes.light.accent : '#D9DBDF'), background: x.id === b.id ? x.modes.light.accentSoft : '#FFFFFF', color: x.id === b.id ? x.modes.light.accent : '#3A3F46', cursor: 'pointer' }, onClick: () => {setVariant(x.variant);setSwap((s) => s + 1);} }, x.variantLabel + ' · ' + x.fonts.heading));
  const body = view === 'start' ? /*#__PURE__*/React.createElement(AflStart, { b: b, setView: setView, copied: copied, copyText: copyText }) :
  view === 'specimen' ? /*#__PURE__*/React.createElement(AflSpecimen, { b: b, demo: demo, setDemo: setDemo, copied: copied, copyText: copyText, swap: swap }) :
  view === 'logos' ? /*#__PURE__*/React.createElement(AflLogos, { b: b, swap: swap }) :
  view === 'login' ? /*#__PURE__*/React.createElement(AflLogin, { b: b, swap: swap }) :
  view === 'variants' ? /*#__PURE__*/React.createElement(AflVariants, { famMode: famMode, toggleFamMode: () => {setFamMode(famMode === 'light' ? 'dark' : 'light');setSwap((s) => s + 1);}, swap: swap }) :
  view === 'audit' ? /*#__PURE__*/React.createElement(AflAudit, null) :
  view === 'tokens' ? /*#__PURE__*/React.createElement(AflTokens, null) :
  view === 'kit' ? /*#__PURE__*/React.createElement(AflKit, { b: b, copied: copied, copyText: copyText, copyFiles: copyFiles }) :
  view === 'email' ? /*#__PURE__*/React.createElement(AflEmail, { b: b }) : /*#__PURE__*/
  React.createElement(AflUx, { b: b });
  return /*#__PURE__*/React.createElement("div", { style: { minHeight: '100vh', fontFamily: "'IBM Plex Sans',system-ui,sans-serif", color: '#1A1D21', paddingBottom: '64px' } }, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', padding: 'clamp(12px,3vw,18px) clamp(16px,4vw,32px)', borderBottom: '1px solid #D9DBDF', background: '#FFFFFF' } }, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '12px' } }, /*#__PURE__*/
  React.createElement(AflMark, { size: 30 }), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '17px', fontWeight: 600 } }, "AI Flotation token system"), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '12.5px', color: '#5C6470', marginTop: '2px' } }, "One component library \xB7 two directions \xB7 tokens as data \xB7 per-direction motion \xB7 WCAG 2.1 AA in both modes")
  )
  ), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '6px', flexWrap: 'wrap' } },
  viewTabs.map(([id, label]) => /*#__PURE__*/React.createElement("button", { key: id, style: tab(view === id), onClick: () => setView(id) }, label))
  )
  ), /*#__PURE__*/
  React.createElement("div", { "data-screen-label": view, style: { animation: 'dcView 240ms cubic-bezier(0,0,0.2,1) both', padding: 'clamp(14px,3vw,22px) clamp(16px,4vw,32px)' }, key: view },
  showVariantTabs && /*#__PURE__*/React.createElement("div", { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' } }, variantTabs),
  body
  )
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(AflApp, null));
