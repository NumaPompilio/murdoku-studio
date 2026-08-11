const fs = require('fs');

const html = fs.readFileSync('/Users/mnuzzo/Documents/Antigravity IDE Projects/Murkodu Editor/murdoku-studio.html', 'utf8');

// We will extract the IIFE content of window.MurdokuEngine and evaluate it in node
const match = html.match(/window\.MurdokuEngine = \(function\(global\)\{([\s\S]*?)\}\)\(window\);/);
if (match) {
  const engineBody = match[1];
  
  // Create a mock environment
  const mockEnv = `
    const Math = global.Math;
    const Set = global.Set;
    const Array = global.Array;
    const Object = global.Object;
    ${engineBody}
    return { loadPredefinedMap, emptyMap, computeAreas, PREDEFINED_MAPS };
  `;
  
  try {
    const engineFactory = new Function('global', mockEnv);
    const E = engineFactory(global);
    
    console.log("Engine loaded.");
    const m = E.loadPredefinedMap("sorelle");
    console.log("Map loaded:", m ? m.mapTitle : "null");
  } catch(e) {
    console.error("RUNTIME ERROR:", e);
  }
} else {
  console.log("Could not find MurdokuEngine definition");
}
