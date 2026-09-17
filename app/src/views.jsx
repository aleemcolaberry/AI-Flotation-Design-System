// Logos, Login, Email views — ported from source, ai-flotation paths only
function AflLogos({ b, swap }) {
  const L = b.modes.light, D = b.modes.dark;
  const heading = aflStack(b.fonts.heading);
  const mo = b.motion;
  const A = n => n + (swap % 2 ? '-b' : '-a');
  const src = b.mark;
  const mk = (size, hull, float) => <AflMark size={size} hull={hull} float={float ?? hull}/>;
  const word = color => ({ fontFamily: heading, fontWeight: 700, fontSize: '20px', letterSpacing: '-0.01em', lineHeight: 1.2, color, maxWidth: '190px', textWrap: 'balance' });
  const stageBase = { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '140px', borderRadius: (b.radius + 2) + 'px', padding: '20px' };
  const tile = { background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '10px', '--dc-dist': mo.enterDistance, animation: A('dcIn') + ' ' + mo.duration.slow + ' ' + mo.easing.enter + ' both' };
  const tileTitle = { fontSize: '11px', letterSpacing: '0.09em', textTransform: 'uppercase', color: '#8A919B', fontWeight: 600 };
  const tileMeta = { fontSize: '12px', color: '#5C6470', fontFamily: 'ui-monospace, monospace' };
  const stage = { ...stageBase, background: L.bg, border: '1px solid ' + L.line, flex: 1 };
  const files = ['assets/ai-flotation-mark.svg', 'assets/ai-flotation-mark-dark.svg', 'assets/ai-flotation-mark-white.svg', 'assets/ai-flotation-mark-mono.svg'];
  return <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
      <span style={{ fontSize: '10.5px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', flexShrink: 0, background: '#FCF1DD', color: '#8A5A00' }}>Hull mark · selected 6e</span>
      <span style={{ fontSize: '12.5px', color: '#5C6470', maxWidth: '640px' }}>A solid hull carrying the accent float above the water: this is what floats, this is what we carry. Two fills, reads at 16px.</span>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '14px' }}>
      <div style={tile}><div style={tileTitle}>Mark</div><div style={stage}>{mk(72, L.fg, L.accent)}</div><div style={tileMeta}>{src} · min 16px</div></div>
      <div style={tile}><div style={tileTitle}>Horizontal lockup</div><div style={stage}><span style={{ display: 'inline-flex', alignItems: 'center', gap: '14px' }}>{mk(44, L.fg, L.accent)}<span style={word(L.fg)}>{b.name}</span></span></div><div style={tileMeta}>Min width 120px · clearspace ½ mark height</div></div>
      <div style={tile}><div style={tileTitle}>Vertical lockup</div><div style={stage}><span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>{mk(72, L.fg, L.accent)}<span style={{ ...word(L.fg), textAlign: 'center', maxWidth: '210px' }}>{b.name}</span></span></div><div style={tileMeta}>Centered contexts — badges, splash, certificates</div></div>
      <div style={tile}><div style={tileTitle}>App icon</div><div style={stage}><span style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '16px' }}>
        {[84, 48, 26].map(s => <span key={s} style={{ width: s + 'px', height: s + 'px', borderRadius: Math.round(s * 0.22) + 'px', background: L.accent, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{mk(Math.round(s * 0.58), L.accentContrast)}</span>)}
      </span></div><div style={tileMeta}>Accent tile, 22% corner radius, accentContrast mark</div></div>
      <div style={tile}><div style={tileTitle}>Favicon</div><div style={stage}><span style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '22px' }}>
        {[32, 24, 16].map(s => <span key={s} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>{mk(s, L.fg, L.accent)}<span style={{ fontSize: '10.5px', color: '#8A919B', fontFamily: 'ui-monospace, monospace' }}>{s}px</span></span>)}
      </span></div><div style={tileMeta}>Same SVG, token-colored — still reads at 16px</div></div>
      <div style={tile}><div style={tileTitle}>On dark</div><div style={{ ...stageBase, background: D.bg, border: '1px solid ' + D.line, flex: 1 }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: '14px' }}>{mk(44, D.fg, D.accent)}<span style={word(D.fg)}>{b.name}</span></span></div><div style={tileMeta}>{'Dark-mode accent ' + D.accent.toUpperCase() + ' on ' + D.bg.toUpperCase()}</div></div>
      <div style={tile}><div style={tileTitle}>Monochrome</div><div style={stage}><span style={{ display: 'inline-flex', alignItems: 'center', gap: '14px' }}>{mk(44, L.fg)}<span style={word(L.fg)}>{b.name}</span></span></div><div style={tileMeta}>Single-color contexts — print, stamp, embossing</div></div>
      <div style={tile}><div style={tileTitle}>Usage</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', lineHeight: 1.55, color: '#3A3F46' }}>
          <div>Clearspace: ½ mark height on all sides; never crowd the lockup.</div>
          <div>Minimums: mark 16px, horizontal lockup 120px wide.</div>
          <div>Colors come from tokens only — hull in fg, float in accent; fg for mono; accentContrast on accent tiles. Never stretch, rotate or add effects.</div>
          <div style={tileTitle}>Files</div>
          {files.map(p => <div key={p} style={{ fontSize: '12px', fontFamily: 'ui-monospace, monospace', color: '#5C6470', background: '#F6F7F8', border: '1px solid #E4E6E9', borderRadius: '6px', padding: '5px 10px', overflowWrap: 'anywhere' }}>{p}</div>)}
        </div>
      </div>
    </div>
  </div>;
}
function AflLoginPanel({ b, mode, swap }) {
  const m = b.modes[mode];
  const heading = aflStack(b.fonts.heading), body = aflStack(b.fonts.body);
  const base = b.typeScale.base, k = b.typeScale.ratio, h2 = Math.round(base * k * k);
  const mo = b.motion, copy = AFL_LOGIN;
  const A = n => n + (swap % 2 ? '-b' : '-a');
  const tr = props => props.map(pp => pp + ' ' + mo.duration.fast + ' ' + mo.easing.standard).join(', ');
  const input = { fontFamily: body, fontSize: (base - 1) + 'px', padding: '11px 12px', minHeight: '44px', borderRadius: b.radius + 'px', border: '1px solid ' + m.line, background: m.bgElevated, color: m.fg, outline: 'none', width: '100%', boxSizing: 'border-box', transition: tr(['border-color', 'box-shadow']) };
  const btn = { fontFamily: body, fontWeight: 600, fontSize: (base - 1) + 'px', minHeight: '44px', borderRadius: b.radius + 'px', border: '1px solid transparent', cursor: 'pointer', width: '100%', boxSizing: 'border-box', transition: tr(['background', 'transform', 'filter', 'border-color', 'color']) };
  const label = { fontSize: (base - 2) + 'px', fontWeight: 600 };
  const link = { color: m.accent, fontWeight: 600, fontSize: (base - 2) + 'px', cursor: 'pointer' };
  const P = 'lgn-' + b.variant + '-' + mode;
  const hovCss = '.' + P + ' .hP:hover{filter:brightness(' + (mode === 'light' ? '0.92' : '1.12') + ');transform:translateY(-1px)}.' + P + ' .hP:active,.' + P + ' .hS:active{transform:scale(' + mo.pressScale + ')}.' + P + ' .hS:hover{border-color:' + m.accent + ' !important;color:' + m.accent + ' !important}';
  return <div className={P} style={{ flex: '1 1 400px', minWidth: 'min(360px, 100%)', maxWidth: '600px', background: m.bg, border: '1px solid ' + m.line, borderRadius: '14px', padding: 'clamp(26px, 4vw, 46px) clamp(16px, 3vw, 28px) clamp(18px, 3vw, 26px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px', fontFamily: body, fontSize: base + 'px', color: m.fg, boxSizing: 'border-box', '--dc-dist': mo.enterDistance, animation: A('dcIn') + ' ' + mo.duration.slow + ' ' + mo.easing.enter + ' both', animationDelay: mode === 'dark' ? '70ms' : '0ms' }}>
    <style>{hovCss}</style>
    <div style={{ alignSelf: 'flex-start', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: m.fgMuted, border: '1px solid ' + m.line, borderRadius: '999px', padding: '3px 10px' }}>{mode === 'light' ? 'Light' : 'Dark'}</div>
    <div style={{ width: '100%', maxWidth: '400px', background: m.bgElevated, border: '1px solid ' + m.line, borderRadius: (b.radius + 6) + 'px', boxShadow: b.shadow, padding: '30px 26px', display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box', animation: A('dcPop') + ' ' + mo.duration.slow + ' ' + mo.easing.enter + ' both' }}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0 2px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}><AflMark size={26} hull={m.fg} float={m.accent}/><span style={{ fontFamily: heading, fontWeight: 700, fontSize: '19px', color: m.fg }}>{b.name}</span></span>
      </div>
      <div style={{ fontFamily: heading, fontWeight: 700, fontSize: h2 + 'px', lineHeight: 1.2, textAlign: 'center', marginTop: '4px' }}>{copy.title}</div>
      <div style={{ fontSize: (base - 1) + 'px', color: m.fgMuted, textAlign: 'center', lineHeight: 1.5, marginTop: '-12px' }}>{copy.sub}</div>
      <button className="hS" style={{ ...btn, background: m.bgElevated, color: m.fg, border: '1px solid ' + m.line }}>{copy.sso}</button>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ flex: 1, height: '1px', background: m.line }}></span><span style={{ fontSize: '12px', color: m.fgMuted }}>or</span><span style={{ flex: 1, height: '1px', background: m.line }}></span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={label}>{copy.email}</label>
        <input style={input} defaultValue={copy.emailValue}/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '10px' }}><label style={label}>Password</label><span style={link}>Forgot password?</span></div>
        <input type="password" style={input} defaultValue="secretpass"/>
      </div>
      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: (base - 2) + 'px', cursor: 'pointer' }}><input type="checkbox" defaultChecked style={{ width: '20px', height: '20px', accentColor: m.accent, cursor: 'pointer', margin: 0, flexShrink: 0 }}/><span>{copy.remember}</span></label>
      <button className="hP" style={{ ...btn, background: m.accent, color: m.accentContrast, boxShadow: b.shadow }}>{copy.cta}</button>
      <div style={{ fontSize: (base - 2) + 'px', color: m.fgMuted, textAlign: 'center', marginTop: '2px' }}>{copy.alt} <span style={link}>{copy.altLink}</span></div>
    </div>
    <div style={{ fontSize: '12px', color: m.fgMuted, textAlign: 'center' }}>{copy.foot}</div>
  </div>;
}
function AflLogin({ b, swap }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'stretch' }}>
      {['light', 'dark'].map(mode => <AflLoginPanel key={b.id + mode + swap} b={b} mode={mode} swap={swap}/>)}
    </div>
    <div style={{ fontSize: '12.5px', color: '#5C6470', maxWidth: '680px' }}>Same recipe every time — card on bg, 44px controls, one filled action, brand header — restyled entirely by the direction's tokens. The card enters with the brand's own pop curve; copy follows the brand voice.</div>
  </div>;
}
function AflEmail({ b }) {
  const m = b.modes.light;
  const sys = "'Helvetica Neue', Arial, sans-serif";
  const info = AFL_EMAIL;
  return <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
    <div style={{ background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '8px', overflow: 'hidden', flex: '1 1 380px', minWidth: 'min(380px, 100%)', maxWidth: '600px', fontFamily: sys, color: '#1A1A1A' }}>
      <div style={{ padding: '18px 32px', background: '#FFFFFF', borderBottom: '3px solid ' + m.accent }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}><span style={{ display: 'inline-block', width: '26px', height: '26px', backgroundImage: 'url(' + b.mark + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></span><span style={{ fontWeight: 700, fontSize: '19px', color: '#1A1A1A' }}>{b.name}</span></span>
      </div>
      <div style={{ padding: '28px 32px' }}>
        <div style={{ fontSize: '21px', fontWeight: 700, lineHeight: 1.3 }}>{info.title}</div>
        <div style={{ fontSize: '15px', lineHeight: 1.6, color: '#4A4A4A', margin: '10px 0 22px' }}>{info.body}</div>
        <a style={{ display: 'inline-block', background: m.accent, color: m.accentContrast, padding: '13px 26px', borderRadius: b.radius + 'px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', cursor: 'pointer' }}>{info.cta}</a>
      </div>
      <div style={{ padding: '16px 32px 20px', background: '#F6F6F6', color: '#6B6B6B', fontSize: '12px', lineHeight: 1.5, borderTop: '1px solid #E4E4E3' }}>
        <div style={{ fontWeight: 700 }}>{info.entity}</div>
        <div style={{ marginTop: '4px' }}>[Mailing address — confirm sending entity] · <span style={{ textDecoration: 'underline' }}>Unsubscribe</span></div>
      </div>
    </div>
    <div style={{ flex: '1 1 300px', minWidth: 'min(300px,100%)', maxWidth: '440px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', lineHeight: 1.55 }}>
      <div style={{ background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '14px 18px' }}><span style={{ fontWeight: 600 }}>Header choice</span><br/>{info.note}</div>
      <div style={{ background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '14px 18px' }}><span style={{ fontWeight: 600 }}>email.buttonHex</span>&nbsp; <span style={{ fontFamily: "'IBM Plex Mono',monospace" }}>{m.accent.toUpperCase()}</span></div>
      <div style={{ background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '14px 18px' }}><span style={{ fontWeight: 600 }}>Production rules</span><br/>Table-based HTML, every style inline, no web fonts (system stack shown here), PNG logo ≤ 48px, max-width 600px, colors chosen to survive Gmail and Outlook dark-mode inversion — no white logo on transparent.</div>
      <div style={{ background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '10px', padding: '14px 18px' }}><span style={{ fontWeight: 600 }}>Send-ready file</span><br/>The production table-based version lives at <span style={{ fontFamily: "'IBM Plex Mono',monospace" }}>emails/ai-flotation.html</span> — <a href="emails/ai-flotation.html" target="_blank">open it ↗</a>. Support: support@aiflotation.com.</div>
    </div>
  </div>;
}
Object.assign(window, { AflLogos, AflLogin, AflLoginPanel, AflEmail });
