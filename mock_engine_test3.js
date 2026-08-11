const fs = require('fs');
const html = fs.readFileSync('/Users/mnuzzo/Documents/Antigravity IDE Projects/Murkodu Editor/murdoku-studio.html', 'utf8');

const match = html.match(/window\.MurdokuEngine = \(function\(global\)\{([\s\S]*?)\}\)\(window\);/);
if (match) {
  const engineBody = match[1];
  try {
    const factory = new Function('global', `
      const Math = global.Math;
      const Set = global.Set;
      const Array = global.Array;
      const Object = global.Object;
      const console = global.console;
      ${engineBody}
      return { emptyMap, loadPredefinedMap, computeAreas };
    `);
    
    const E = factory(global);
    console.log("Engine initialized.");
    
    const m = E.loadPredefinedMap("sorelle");
    console.log("Map loaded:", m ? m.mapTitle : "null");
  } catch(e) {
    console.error("RUNTIME ERROR:", e);
  }
} else {
  console.log("Regex match failed");
}
