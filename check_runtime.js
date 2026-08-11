const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('/Users/mnuzzo/Documents/Antigravity IDE Projects/Murkodu Editor/murdoku-studio.html', 'utf8');

const dom = new JSDOM(html);
const window = dom.window;
const document = window.document;

// evaluate scripts
const scriptTags = document.querySelectorAll('script');
for (const script of scriptTags) {
  if (script.textContent) {
    try {
      window.eval(script.textContent);
    } catch(e) {
      console.error("Error evaluating script:", e);
    }
  }
}

try {
  const m = window.MurdokuEngine.loadPredefinedMap("sorelle");
  if (m) {
    console.log("Map loaded successfully:", m.mapTitle);
  } else {
    console.log("Map returned null");
  }
} catch(e) {
  console.error("Error loading map:", e);
}
