// Recompile app/src/*.jsx → app/*.js.
// The shipped .js files are already compiled, so this only matters after editing a source.
// One dependency, installed ad hoc:   npm install --no-save @babel/standalone   then   node app/build.js
const fs = require('fs');
const path = require('path');
let Babel;
try { Babel = require('@babel/standalone'); }
catch (e) { console.error('Babel is not installed. Run:  npm install --no-save @babel/standalone'); process.exit(1); }
const dir = path.join(__dirname, 'src');
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.jsx'))) {
  const code = fs.readFileSync(path.join(dir, f), 'utf8');
  const out = Babel.transform(code, { presets: ['react'], filename: f, retainLines: true, comments: true }).code;
  const n = f.replace(/\.jsx$/, '');
  fs.writeFileSync(path.join(__dirname, n + '.js'), '/* Compiled from app/src/' + f + ' by app/build.js (Babel ' + Babel.version + ', preset react). Edit the .jsx, then rebuild. */\n' + out + '\n');
  console.log('compiled app/' + n + '.js');
}
