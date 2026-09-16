/* Compiled from app/src/specimen.jsx by app/build.js (Babel 7.29.0, preset react). Edit the .jsx, then rebuild. */
// Specimen view — full component specimen per mode, ported from source makePanel
function AflPanel({ b, mode, demo, setDemo, copied, copyText, swap }) {
  const m = b.modes[mode],copy = AFL_COPY;
  const heading = aflStack(b.fonts.heading),body = aflStack(b.fonts.body);
  const hw = 700;
  const base = b.typeScale.base,k = b.typeScale.ratio;
  const h1 = Math.round(base * k * k * k),h2 = Math.round(base * k * k),h3 = Math.round(base * k),sm = Math.round(base * 0.82);
  const mo = b.motion;
  const A = (n) => n + (swap % 2 ? '-b' : '-a');
  const tr = (props) => props.map((pp) => pp + ' ' + mo.duration.fast + ' ' + mo.easing.standard).join(', ');
  const shimmer = { background: 'linear-gradient(90deg, ' + m.line + ' 30%, ' + m.bgElevated + ' 50%, ' + m.line + ' 70%)', backgroundSize: '200% 100%', animation: 'dcShimmer 1.5s linear infinite' };
  const btn = { fontFamily: body, fontWeight: 600, fontSize: base - 1 + 'px', padding: '10px 18px', minHeight: '44px', borderRadius: b.radius + 'px', border: '1px solid transparent', cursor: 'pointer', lineHeight: 1.2, transition: tr(['background', 'transform', 'box-shadow', 'filter', 'border-color', 'color']) };
  const input = { fontFamily: body, fontSize: base - 1 + 'px', padding: '11px 12px', minHeight: '44px', borderRadius: b.radius + 'px', border: '1px solid ' + m.line, background: m.bgElevated, color: m.fg, outline: 'none', width: '100%', boxSizing: 'border-box', transition: tr(['border-color', 'box-shadow']) };
  const swKeys = ['bg', 'bgElevated', 'fg', 'fgMuted', 'accent', 'accentContrast', 'accentSoft', 'line', 'success', 'warning', 'danger'];
  const softBadge = (c) => ({ display: 'inline-flex', alignItems: 'center', gap: '6px', background: aflRgba(c, mode === 'light' ? 0.10 : 0.16), color: c, fontSize: '12px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', border: '1px solid ' + aflRgba(c, 0.35) });
  const sec = { fontSize: '11px', letterSpacing: '0.09em', textTransform: 'uppercase', color: m.fgMuted, margin: '26px 0 10px', fontFamily: body };
  const d = demo,setD = (patch) => setDemo({ ...demo, ...patch });
  const P = 'pnl-' + b.variant + '-' + mode;
  const hovCss = '.' + P + ' .hP:hover{filter:brightness(' + (mode === 'light' ? '0.92' : '1.12') + ');transform:translateY(-1px)}' +
  '.' + P + ' .hP:active,.' + P + ' .hS:active,.' + P + ' .hG:active,.' + P + ' .hD:active{transform:scale(' + mo.pressScale + ')}' +
  '.' + P + ' .hS:hover{border-color:' + m.accent + ' !important;color:' + m.accent + ' !important}' +
  '.' + P + ' .hG:hover{background:' + m.accentSoft + '}' +
  '.' + P + ' .hD:hover{background:' + aflRgba(m.danger, 0.08) + '}' +
  '.' + P + ' .hO:hover{background:' + m.accentSoft + '}';
  const label = { fontSize: base - 2 + 'px', fontWeight: 600 };
  const ctrlRow = { display: 'flex', alignItems: 'center', gap: '10px', fontSize: base - 1 + 'px', minHeight: '44px', cursor: 'pointer' };
  const checkStyle = { width: '20px', height: '20px', accentColor: m.accent, cursor: 'pointer', margin: 0, flexShrink: 0 };
  const motionRows = [['fast', mo.duration.fast, 'hover · press · toggles'], ['base', mo.duration.base, 'menus · accordions'], ['slow', mo.duration.slow, 'modals · views']];
  const crumbs = [['Home', 0], ['/', 1], ['Programs', 0], ['/', 1], [copy.crumb, 2]];
  const alerts = [['Saved', copy.helpText, m.success], ['Heads up', copy.errMsg, m.warning], ['Failed', 'The last submission did not go through.', m.danger]];
  const ramp = [['Display', h1, 1], ['Heading', h2, 1], ['Subheading', h3, 1], ['Body', base, 0], ['Caption', sm, 0]];
  return /*#__PURE__*/React.createElement("div", { className: P, style: { flex: '1 1 470px', minWidth: 'min(430px, 100%)', maxWidth: '640px', background: m.bg, border: '1px solid ' + m.line, borderRadius: '14px', padding: 'clamp(16px, 4vw, 28px)', color: m.fg, fontFamily: body, fontSize: base + 'px', '--dc-dist': mo.enterDistance, animation: A('dcIn') + ' ' + mo.duration.slow + ' ' + mo.easing.enter + ' both', animationDelay: mode === 'dark' ? '70ms' : '0ms' } }, /*#__PURE__*/
  React.createElement("style", null, hovCss), /*#__PURE__*/
  React.createElement("div", { style: { display: 'inline-block', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: m.fgMuted, border: '1px solid ' + m.line, borderRadius: '999px', padding: '3px 10px', marginBottom: '10px' } }, mode === 'light' ? 'Light' : 'Dark'), /*#__PURE__*/
  React.createElement("div", { style: { ...sec, margin: '10px 0 10px' } }, "Nav"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', flexWrap: 'wrap', rowGap: '10px', alignItems: 'center', gap: '16px', background: m.bgElevated, border: '1px solid ' + m.line, borderRadius: b.radius + 2 + 'px', padding: '12px 16px', boxShadow: b.shadow } }, /*#__PURE__*/
  React.createElement("span", { style: { display: 'inline-flex', alignItems: 'center', gap: '10px' } }, /*#__PURE__*/React.createElement("span", { style: aflMask(b.mark, 26, m.accent) }), /*#__PURE__*/React.createElement("span", { style: { fontFamily: heading, fontWeight: hw, fontSize: '17px', color: m.fg } }, b.name)), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '18px', alignItems: 'center', marginLeft: 'auto' } }, /*#__PURE__*/
  React.createElement("span", { style: { fontSize: base - 2 + 'px', color: m.accent, fontWeight: 600, cursor: 'pointer', padding: '12px 4px' } }, "Programs"), /*#__PURE__*/
  React.createElement("span", { style: { fontSize: base - 2 + 'px', color: m.fgMuted, cursor: 'pointer', padding: '12px 4px' } }, "Outcomes"), /*#__PURE__*/
  React.createElement("span", { style: { fontSize: base - 2 + 'px', color: m.fgMuted, cursor: 'pointer', padding: '12px 4px' } }, "About"), /*#__PURE__*/
  React.createElement("button", { className: "hP", style: { ...btn, background: m.accent, color: m.accentContrast, padding: '8px 14px', fontSize: base - 2 + 'px' } }, copy.cta)
  )
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Buttons"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' } }, /*#__PURE__*/
  React.createElement("button", { className: "hP", style: { ...btn, background: m.accent, color: m.accentContrast, boxShadow: b.shadow } }, copy.cta), /*#__PURE__*/
  React.createElement("button", { className: "hS", style: { ...btn, background: m.bgElevated, color: m.fg, border: '1px solid ' + m.line } }, "Secondary"), /*#__PURE__*/
  React.createElement("button", { className: "hG", style: { ...btn, background: 'transparent', color: m.accent } }, "Ghost"), /*#__PURE__*/
  React.createElement("button", { className: "hD", style: { ...btn, background: 'transparent', color: m.danger, border: '1px solid ' + m.danger } }, "Delete")
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Motion"), /*#__PURE__*/
  React.createElement("div", { style: { background: m.bgElevated, border: '1px solid ' + m.line, borderRadius: b.radius + 2 + 'px', padding: '14px 16px', maxWidth: '430px' } }, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' } }, /*#__PURE__*/
  React.createElement("span", { style: { fontSize: base - 2 + 'px', fontWeight: 600 } }, mo.personality), /*#__PURE__*/
  React.createElement("button", { className: "hG", style: { fontFamily: body, fontSize: base - 3 + 'px', fontWeight: 600, padding: '8px 14px', minHeight: '44px', borderRadius: b.radius + 'px', border: '1px solid ' + m.line, background: 'transparent', color: m.accent, cursor: 'pointer', transition: tr(['background', 'transform', 'border-color']) }, onClick: () => setD({ motionPos: !d.motionPos }) }, "Replay")
  ),
  motionRows.map(([lb, dur, use]) => /*#__PURE__*/React.createElement("div", { key: lb, style: { display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' } }, /*#__PURE__*/
  React.createElement("span", { style: { fontSize: base - 3 + 'px', fontWeight: 700, width: '36px', color: m.fgMuted, textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0 } }, lb), /*#__PURE__*/
  React.createElement("span", { style: { position: 'relative', flex: '0 0 110px', height: '20px', borderRadius: '999px', background: m.accentSoft, display: 'inline-block' } }, /*#__PURE__*/React.createElement("span", { style: { position: 'absolute', top: '3px', left: d.motionPos ? 'calc(100% - 17px)' : '3px', width: '14px', height: '14px', borderRadius: '50%', background: m.accent, transition: 'left ' + dur + ' ' + mo.easing.enter } })), /*#__PURE__*/
  React.createElement("span", { style: { fontSize: base - 4 + 'px', color: m.fgMuted, fontFamily: 'ui-monospace, monospace' } }, dur + ' — ' + use)
  )), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '11px', color: m.fgMuted, fontFamily: 'ui-monospace, monospace', marginTop: '12px', overflowWrap: 'anywhere' } }, 'standard ' + mo.easing.standard + ' · enter ' + mo.easing.enter + ' · press scale ' + mo.pressScale)
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Tabs"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '22px', borderBottom: '1px solid ' + m.line } }, /*#__PURE__*/
  React.createElement("span", { style: { fontSize: base - 1 + 'px', color: m.accent, fontWeight: 600, padding: '13px 2px 11px', borderBottom: '2px solid ' + m.accent, cursor: 'pointer' } }, "Overview"), /*#__PURE__*/
  React.createElement("span", { style: { fontSize: base - 1 + 'px', color: m.fgMuted, padding: '13px 2px', cursor: 'pointer' } }, "Curriculum"), /*#__PURE__*/
  React.createElement("span", { style: { fontSize: base - 1 + 'px', color: m.fgMuted, padding: '13px 2px', cursor: 'pointer' } }, "Pricing")
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Wayfinding"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '14px' } }, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' } },
  crumbs.map(([lb, kind], i) => /*#__PURE__*/React.createElement("span", { key: i, style: kind === 1 ? { color: m.fgMuted, opacity: 0.5 } : kind === 2 ? { color: m.fg, fontWeight: 600, fontSize: base - 2 + 'px' } : { color: m.fgMuted, fontSize: base - 2 + 'px', cursor: 'pointer' } }, lb))
  ), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' } },
  ['‹', 1, 2, 3, '›'].map((v, i) => /*#__PURE__*/React.createElement("button", { key: i, onClick: typeof v === 'number' ? () => setD({ page: v }) : undefined, style: { transition: tr(['background', 'border-color', 'color']), minWidth: '44px', minHeight: '44px', borderRadius: b.radius + 'px', border: '1px solid ' + (v === d.page ? m.accent : m.line), background: v === d.page ? m.accent : m.bgElevated, color: v === d.page ? m.accentContrast : m.fg, fontFamily: body, fontWeight: 600, fontSize: base - 2 + 'px', cursor: 'pointer' } }, String(v)))
  )
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Badges & chips"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
  [[copy.badgeText, m.accent], ['Success', m.success], ['Warning', m.warning], ['Danger', m.danger]].map(([lb, c]) => /*#__PURE__*/React.createElement("span", { key: lb, style: softBadge(c) }, lb))
  ), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '10px' } },
  copy.chips.map((lb) => /*#__PURE__*/React.createElement("span", { key: lb, style: { display: 'inline-flex', alignItems: 'center', gap: '7px', background: m.bgElevated, border: '1px solid ' + m.line, color: m.fg, fontSize: '12.5px', fontWeight: 600, padding: '6px 12px', borderRadius: '999px' } }, lb, /*#__PURE__*/React.createElement("span", { style: { color: m.fgMuted, cursor: 'pointer', fontSize: '14px', lineHeight: 1 } }, "\xD7")))
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Form group"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '340px' } }, /*#__PURE__*/
  React.createElement("label", { style: label }, copy.inputLabel), /*#__PURE__*/
  React.createElement("input", { style: { ...input, border: '1px solid ' + m.accent, boxShadow: '0 0 0 3px ' + m.accentSoft }, defaultValue: copy.inputValue }), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: base - 3 + 'px', color: m.fgMuted } }, copy.helpText)
  ), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '340px', marginTop: '14px' } }, /*#__PURE__*/
  React.createElement("label", { style: label }, copy.errLabel), /*#__PURE__*/
  React.createElement("input", { style: { ...input, border: '1px solid ' + m.danger }, defaultValue: copy.errValue }), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: base - 3 + 'px', color: m.danger } }, copy.errMsg)
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Controls"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '360px' } }, /*#__PURE__*/
  React.createElement("label", { style: ctrlRow }, /*#__PURE__*/React.createElement("input", { type: "checkbox", checked: d.check, onChange: () => setD({ check: !d.check }), style: checkStyle }), /*#__PURE__*/React.createElement("span", null, copy.checkLabel)), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '18px', flexWrap: 'wrap' } },
  copy.radios.map((lb, i) => /*#__PURE__*/React.createElement("label", { key: lb, style: ctrlRow }, /*#__PURE__*/React.createElement("input", { type: "radio", checked: d.radio === i, onChange: () => setD({ radio: i }), style: checkStyle }), /*#__PURE__*/React.createElement("span", null, lb)))
  ), /*#__PURE__*/
  React.createElement("div", { style: ctrlRow, onClick: () => setD({ sw: !d.sw }) }, /*#__PURE__*/
  React.createElement("span", { style: { width: '46px', height: '26px', borderRadius: '999px', background: d.sw ? m.accent : m.line, position: 'relative', transition: 'background ' + mo.duration.fast + ' ' + mo.easing.standard, flexShrink: 0, display: 'inline-block' } }, /*#__PURE__*/React.createElement("span", { style: { position: 'absolute', top: '3px', left: d.sw ? '23px' : '3px', width: '20px', height: '20px', borderRadius: '50%', background: m.bgElevated, boxShadow: '0 1px 2px rgba(0,0,0,0.3)', transition: 'left ' + mo.duration.base + ' ' + mo.easing.enter } })), /*#__PURE__*/
  React.createElement("span", null, copy.swLabel)
  ), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("div", { style: label }, copy.sliderLabel, " \xB7 ", d.slider), /*#__PURE__*/
  React.createElement("input", { type: "range", min: "0", max: "100", value: d.slider, onChange: (e) => setD({ slider: +e.target.value }), style: { width: '100%', maxWidth: '280px', accentColor: m.accent, minHeight: '44px', margin: 0, cursor: 'pointer', display: 'block' } })
  ), /*#__PURE__*/
  React.createElement("div", { style: { position: 'relative' } }, /*#__PURE__*/
  React.createElement("div", { style: label }, copy.selectLabel), /*#__PURE__*/
  React.createElement("div", { style: { fontFamily: body, fontSize: base - 1 + 'px', padding: '11px 12px', minHeight: '44px', boxSizing: 'border-box', borderRadius: b.radius + 'px', border: '1px solid ' + m.line, background: m.bgElevated, color: m.fg, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', cursor: 'pointer', marginTop: '6px' }, onClick: () => setD({ selOpen: !d.selOpen }) }, /*#__PURE__*/
  React.createElement("span", null, copy.rows[Math.min(d.sel, copy.rows.length - 1)][0]), /*#__PURE__*/React.createElement("span", { style: { color: m.fgMuted, transform: d.selOpen ? 'rotate(180deg)' : 'none', transition: 'transform ' + mo.duration.base + ' ' + mo.easing.standard } }, "\u25BE")
  ),
  d.selOpen && /*#__PURE__*/React.createElement("div", { style: { position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, zIndex: 5, background: m.bgElevated, border: '1px solid ' + m.line, borderRadius: b.radius + 'px', boxShadow: b.shadow, overflow: 'hidden', animation: 'dcMenu ' + mo.duration.base + ' ' + mo.easing.enter + ' both' } },
  copy.rows.map((r, i) => /*#__PURE__*/React.createElement("div", { key: r[0], className: "hO", style: { padding: '11px 12px', fontSize: base - 1 + 'px', cursor: 'pointer', color: m.fg }, onClick: () => setD({ sel: i, selOpen: false }) }, r[0]))
  )
  )
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Table"), /*#__PURE__*/
  React.createElement("div", { style: { background: m.bgElevated, border: '1px solid ' + m.line, borderRadius: b.radius + 2 + 'px', overflow: 'hidden' } }, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '12px', padding: '10px 16px', fontSize: base - 3 + 'px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: m.fgMuted, background: m.bg } }, /*#__PURE__*/React.createElement("span", { style: { flex: 2 } }, "Name"), /*#__PURE__*/React.createElement("span", { style: { flex: 1 } }, "Status"), /*#__PURE__*/React.createElement("span", { style: { flex: 1, textAlign: 'right' } }, "Value")),
  copy.rows.map(([name, status, value], i) => /*#__PURE__*/React.createElement("div", { key: name, style: { display: 'flex', gap: '12px', alignItems: 'center', padding: '11px 16px', fontSize: base - 2 + 'px', borderTop: '1px solid ' + m.line } }, /*#__PURE__*/
  React.createElement("span", { style: { flex: 2 } }, name), /*#__PURE__*/React.createElement("span", { style: { flex: 1 } }, /*#__PURE__*/React.createElement("span", { style: softBadge([m.success, m.warning, m.accent][i] || m.accent) }, status)), /*#__PURE__*/React.createElement("span", { style: { flex: 1, textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: m.fgMuted } }, value)
  ))
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Alerts"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '420px' } },
  alerts.map(([tt, bd, c]) => /*#__PURE__*/React.createElement("div", { key: tt, style: { display: 'flex', gap: '10px', alignItems: 'flex-start', background: aflRgba(c, mode === 'light' ? 0.08 : 0.14), border: '1px solid ' + aflRgba(c, 0.4), borderRadius: b.radius + 'px', padding: '10px 14px', fontSize: base - 2 + 'px' } }, /*#__PURE__*/
  React.createElement("span", { style: { width: '9px', height: '9px', borderRadius: '50%', background: c, display: 'inline-block', marginTop: '5px', flexShrink: 0 } }), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/React.createElement("span", { style: { fontWeight: 700, color: c } }, tt), " ", /*#__PURE__*/React.createElement("span", { style: { color: m.fg } }, bd))
  ))
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Toast & tooltip"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '18px', alignItems: 'flex-end', flexWrap: 'wrap' } }, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '10px', alignItems: 'center', background: m.bgElevated, border: '1px solid ' + m.line, borderRadius: b.radius + 'px', boxShadow: b.shadow, padding: '10px 16px', minWidth: '260px', fontSize: base - 2 + 'px', animation: A('dcPop') + ' ' + mo.duration.slow + ' ' + mo.easing.enter + ' both' } }, /*#__PURE__*/
  React.createElement("span", { style: { width: '9px', height: '9px', borderRadius: '50%', background: m.success, flexShrink: 0 } }), /*#__PURE__*/React.createElement("span", { style: { flex: 1 } }, copy.toastMsg), /*#__PURE__*/React.createElement("button", { style: { background: 'transparent', border: 'none', color: m.accent, fontWeight: 700, cursor: 'pointer', fontFamily: body, fontSize: base - 2 + 'px', padding: '8px' } }, copy.toastAction)
  ), /*#__PURE__*/
  React.createElement("div", { style: { position: 'relative', display: 'inline-block', marginTop: '30px' } }, /*#__PURE__*/
  React.createElement("span", { style: { position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)', background: m.fg, color: m.bg, fontSize: '12px', fontWeight: 500, padding: '6px 10px', borderRadius: '6px', whiteSpace: 'nowrap' } }, copy.tipText), /*#__PURE__*/
  React.createElement("button", { className: "hS", style: { ...btn, background: m.bgElevated, color: m.fg, border: '1px solid ' + m.line } }, "Share")
  )
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Card"), /*#__PURE__*/
  React.createElement("div", { style: { background: m.bgElevated, border: '1px solid ' + m.line, borderRadius: b.radius + 4 + 'px', boxShadow: b.shadow, padding: '20px 22px', maxWidth: '380px' } }, /*#__PURE__*/
  React.createElement("span", { style: { display: 'inline-block', background: m.accentSoft, color: m.accent, fontSize: '12px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px' } }, copy.badgeText), /*#__PURE__*/
  React.createElement("div", { style: { fontFamily: heading, fontSize: h3 + 'px', fontWeight: hw, marginTop: '12px', lineHeight: 1.25 } }, copy.cardTitleText), /*#__PURE__*/
  React.createElement("div", { style: { color: m.fgMuted, fontSize: base - 1 + 'px', lineHeight: 1.55, margin: '8px 0 16px' } }, copy.cardBodyText), /*#__PURE__*/
  React.createElement("button", { className: "hP", style: { ...btn, background: m.accent, color: m.accentContrast, padding: '8px 14px', fontSize: base - 2 + 'px' } }, copy.cardCta)
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Modal"), /*#__PURE__*/
  React.createElement("div", { style: { background: 'rgba(0,0,0,0.45)', borderRadius: b.radius + 4 + 'px', padding: '26px', display: 'flex', justifyContent: 'center' } }, /*#__PURE__*/
  React.createElement("div", { style: { background: m.bgElevated, borderRadius: b.radius + 4 + 'px', boxShadow: b.shadow, padding: '20px 22px', maxWidth: '360px', color: m.fg, animation: A('dcPop') + ' ' + mo.duration.slow + ' ' + mo.easing.enter + ' both' } }, /*#__PURE__*/
  React.createElement("div", { style: { fontFamily: heading, fontSize: h3 + 'px', fontWeight: hw, lineHeight: 1.25 } }, copy.modalTitle), /*#__PURE__*/
  React.createElement("div", { style: { color: m.fgMuted, fontSize: base - 1 + 'px', lineHeight: 1.55, margin: '8px 0 16px' } }, copy.modalBody), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '10px', justifyContent: 'flex-end' } }, /*#__PURE__*/
  React.createElement("button", { className: "hS", style: { ...btn, background: m.bgElevated, color: m.fg, border: '1px solid ' + m.line } }, "Cancel"), /*#__PURE__*/
  React.createElement("button", { className: "hP", style: { ...btn, background: m.accent, color: m.accentContrast, boxShadow: b.shadow } }, copy.modalCta)
  )
  )
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Data display"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '420px' } }, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
  ['LM', 'DK', 'RS'].map((ini, i) => /*#__PURE__*/React.createElement("span", { key: ini, style: { width: '40px', height: '40px', borderRadius: '50%', background: m.accentSoft, color: m.accent, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', border: '2px solid ' + m.bgElevated, marginLeft: i ? '-10px' : '0', fontFamily: body, position: 'relative' } }, ini)), /*#__PURE__*/
  React.createElement("span", { style: { width: '40px', height: '40px', borderRadius: '50%', background: m.bgElevated, color: m.fgMuted, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px', border: '2px solid ' + m.line, marginLeft: '-10px', fontFamily: body } }, "+4")
  ), /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' } }, /*#__PURE__*/React.createElement("span", { style: label }, copy.progLabel), /*#__PURE__*/React.createElement("span", { style: { fontSize: base - 3 + 'px', color: m.fgMuted, fontVariantNumeric: 'tabular-nums' } }, "64%")), /*#__PURE__*/
  React.createElement("div", { style: { height: '8px', borderRadius: '999px', background: m.accentSoft, overflow: 'hidden' } }, /*#__PURE__*/React.createElement("div", { style: { width: '64%', height: '100%', background: m.accent, borderRadius: '999px', transformOrigin: 'left', animation: A('dcFill') + ' ' + mo.duration.slow + ' ' + mo.easing.enter + ' both', animationDelay: '120ms' } }))
  ), /*#__PURE__*/
  React.createElement("div", { style: { border: '1px solid ' + m.line, borderRadius: b.radius + 2 + 'px', background: m.bgElevated, overflow: 'hidden' } },
  copy.faq.map((qa, i) => /*#__PURE__*/React.createElement("div", { key: i }, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', padding: '13px 16px', fontWeight: 600, fontSize: base - 1 + 'px', cursor: 'pointer', minHeight: '44px', boxSizing: 'border-box', borderTop: i ? '1px solid ' + m.line : 'none' }, onClick: () => setD({ acc: d.acc === i ? -1 : i }) }, /*#__PURE__*/React.createElement("span", null, qa[0]), /*#__PURE__*/React.createElement("span", { style: { color: m.fgMuted, transform: d.acc === i ? 'rotate(180deg)' : 'none', transition: 'transform ' + mo.duration.base + ' ' + mo.easing.standard } }, "\u25BE")),
  d.acc === i && /*#__PURE__*/React.createElement("div", { style: { padding: '0 16px 14px', color: m.fgMuted, fontSize: base - 1 + 'px', lineHeight: 1.55, animation: 'dcMenu ' + mo.duration.base + ' ' + mo.easing.enter + ' both' } }, qa[1])
  ))
  ), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '12px', alignItems: 'center' } }, /*#__PURE__*/
  React.createElement("span", { style: { width: '40px', height: '40px', borderRadius: '50%', opacity: 0.7, flexShrink: 0, display: 'inline-block', ...shimmer } }), /*#__PURE__*/
  React.createElement("span", { style: { display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 } }, /*#__PURE__*/React.createElement("span", { style: { height: '12px', borderRadius: '6px', opacity: 0.7, width: '70%', display: 'inline-block', ...shimmer } }), /*#__PURE__*/React.createElement("span", { style: { height: '12px', borderRadius: '6px', opacity: 0.7, width: '45%', display: 'inline-block', ...shimmer } }))
  )
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Palette"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(92px,1fr))', gap: '10px' } },
  swKeys.map((key) => /*#__PURE__*/React.createElement("div", { key: key }, /*#__PURE__*/
  React.createElement("div", { style: { height: '42px', borderRadius: '8px', background: m[key], border: '1px solid ' + m.line, cursor: 'pointer' }, onClick: () => copyText(mode + key, m[key].toUpperCase()), title: "Click to copy" }), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '11.5px', fontWeight: 600, marginTop: '6px' } }, key), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '11px', color: m.fgMuted, fontFamily: 'ui-monospace, monospace' } }, copied === mode + key ? 'copied ✓' : m[key].toUpperCase())
  ))
  ), /*#__PURE__*/
  React.createElement("div", { style: sec }, "Type"), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '10px' } },
  ramp.map(([lb, size, isH]) => /*#__PURE__*/React.createElement("div", { key: lb }, /*#__PURE__*/
  React.createElement("div", { style: { fontFamily: isH ? heading : body, fontSize: size + 'px', fontWeight: isH ? hw : 400, lineHeight: 1.25 } }, copy.sample), /*#__PURE__*/
  React.createElement("div", { style: { fontSize: '11px', color: m.fgMuted, fontFamily: 'ui-monospace, monospace', marginTop: '2px' } }, lb + ' · ' + size + 'px')
  ))
  )
  );
}
function AflSpecimen({ b, demo, setDemo, copied, copyText, swap }) {
  const metaItems = [
  ['Heading', b.fonts.heading], ['Body', b.fonts.body], ['Licence', b.fonts.license],
  ['Scale', b.typeScale.base + 'px × ' + b.typeScale.ratio], ['Radius', b.radius + 'px'], ['Shadow', b.shadow],
  ['Motion', b.motion.duration.fast + ' / ' + b.motion.duration.base + ' / ' + b.motion.duration.slow],
  ['Touch target', '≥ 44px'], ['Layout', 'Fluid — clamp() + min()']];

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' } },
  metaItems.map(([k, v]) => /*#__PURE__*/React.createElement("div", { key: k, style: { background: '#FFFFFF', border: '1px solid #D9DBDF', borderRadius: '8px', padding: '6px 12px', fontSize: '12px' } }, /*#__PURE__*/React.createElement("span", { style: { color: '#5C6470' } }, k), "\xA0 ", /*#__PURE__*/React.createElement("span", { style: { fontWeight: 600 } }, v)))
  ), /*#__PURE__*/
  React.createElement("div", { style: { display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-start' } },
  ['light', 'dark'].map((mode) => /*#__PURE__*/React.createElement(AflPanel, { key: b.id + mode + swap, b: b, mode: mode, demo: demo, setDemo: setDemo, copied: copied, copyText: copyText, swap: swap }))
  )
  );
}
Object.assign(window, { AflPanel, AflSpecimen });
