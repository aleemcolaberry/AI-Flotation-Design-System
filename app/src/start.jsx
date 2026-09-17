// Start view — design-system landing: what it is, how to use it, Claude Code integration
function AflStart({ b, setView, copied, copyText }) {
  const L = b.modes.light;
  const heading = aflStack(b.fonts.heading), body = aflStack(b.fonts.body);
  const tile = { background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '10px' };
  const mono = { fontFamily: "'IBM Plex Mono',ui-monospace,monospace" };
  const darkBtn = { fontFamily: 'inherit', fontSize: '12.5px', fontWeight: 600, padding: '8px 14px', minHeight: '38px', borderRadius: '8px', border: '1px solid #1A1D21', background: '#1A1D21', color: '#FFFFFF', cursor: 'pointer' };
  const jump = (label, view) => <button key={label} style={{ fontFamily: 'inherit', fontSize: '12.5px', fontWeight: 600, padding: '7px 14px', borderRadius: '999px', border: '1px solid ' + L.accent, background: L.accentSoft, color: L.accent, cursor: 'pointer' }} onClick={() => setView(view)}>{label}</button>;
  const step = (n, t) => <div key={n} style={{ display: 'flex', gap: '10px', fontSize: '13px', lineHeight: 1.55, color: '#3A3F46' }}><span style={{ fontWeight: 700, color: L.accent }}>{n}</span><span>{t}</span></div>;
  return <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
    <div style={{ background: L.bg, border: '1px solid ' + L.line, borderRadius: '14px', padding: 'clamp(28px,5vw,48px)', fontFamily: body, color: L.fg, animation: 'dcIn-a 210ms cubic-bezier(0.16,0,0,1) both' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
        <AflMark size={52} hull={L.fg} float={L.accent}/>
        <span style={{ fontFamily: heading, fontWeight: 700, fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-0.01em' }}>AI Flotation design system</span>
      </div>
      <div style={{ fontSize: '16px', lineHeight: 1.55, color: L.fgMuted, maxWidth: '640px', margin: '14px 0 20px' }}>Workflow intake to delivered system. One token set, two directions — <strong style={{ color: '#BA430E' }}>Forge</strong> (Space Grotesk + Archivo, rust, 2px) and <strong style={{ color: '#0E6E63' }}>Harbor</strong> (Manrope, teal, 6px) — each in light and dark, every AA pair guaranteed. Tokens are data; everything downstream is generated.</div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {jump('Explore the specimen', 'specimen')}{jump('Logo kit', 'logos')}{jump('Contrast audit', 'audit')}{jump('Tokens as JSON', 'tokens')}{jump('Use it', 'kit')}
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '14px' }}>
      <div style={tile}>
        <div style={{ fontSize: '14.5px', fontWeight: 600 }}>For developers</div>
        {step('1', <span>Link <span style={mono}>styles.css</span> — it pulls every token, font and <span style={mono}>.b-*</span> component class.</span>)}
        {step('2', <span>Dark mode: <span style={mono}>data-theme="dark"</span> on <span style={mono}>&lt;html&gt;</span>. Harbor direction: <span style={mono}>data-variant="harbor"</span>.</span>)}
        {step('3', <span>Reference semantic tokens (<span style={mono}>--bg</span>, <span style={mono}>--accent</span>, …), never raw hex. Motion via <span style={mono}>--motion-*</span> / <span style={mono}>--ease-*</span>.</span>)}
      </div>
      <div style={tile}>
        <div style={{ fontSize: '14.5px', fontWeight: 600 }}>For designers</div>
        {step('1', <span><span style={mono}>README.md</span> holds voice, visual foundations and iconography rules.</span>)}
        {step('2', 'One filled primary action per view; accent marks only that action and the active state.')}
        {step('3', 'Sentence case, no emoji. Copy is confident, spare, concrete — times, counts, deliverables.')}
      </div>
      <div style={tile}>
        <div style={{ fontSize: '14.5px', fontWeight: 600 }}>For Claude Code</div>
        {step('1', <span>Download this project and drop the folder into your repo — <span style={mono}>SKILL.md</span> makes it an agent skill (<span style={mono}>ai-flotation-design</span>).</span>)}
        {step('2', <span>Or paste the prompt block into any session:</span>)}
        <div><button style={darkBtn} onClick={() => copyText('startPrompt', AFL_PROMPT)}>{copied === 'startPrompt' ? 'Copied ✓' : 'Copy Claude prompt'}</button></div>
        {step('3', <span>The <span style={mono}>.b-*</span> classes in <span style={mono}>base/components.css</span> are the complete component contract; <span style={mono}>ui_kits/starter/</span> shows them composed into a screen.</span>)}
      </div>
    </div>
    <div style={tile}>
      <div style={{ fontSize: '14.5px', fontWeight: 600 }}>What's in the folder</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))', gap: '4px 24px', fontSize: '13px', lineHeight: 1.8, color: '#3A3F46' }}>
        <div><span style={mono}>styles.css</span> — single import, @imports all tokens</div>
        <div><span style={mono}>tokens/</span> — colors, type, spacing, motion, fonts</div>
        <div><span style={mono}>base/</span> — element resets + .b-* component classes</div>
        <div><span style={mono}>app/</span> — this explorer (React, pre-compiled; sources in app/src/)</div>
        <div><span style={mono}>assets/</span> — the hull mark (4 SVG colorways, PNG set, favicon) · self-hosted fonts</div>
        <div><span style={mono}>ui_kits/starter/</span> — a build-tracker screen composed from the .b-* classes</div>
        <div><span style={mono}>emails/</span> — send-ready transactional email</div>
        <div><span style={mono}>exports/</span> — measured contrast ratios · <span style={mono}>README.md</span> · <span style={mono}>SKILL.md</span></div>
      </div>
    </div>
  </div>;
}
Object.assign(window, { AflStart });
