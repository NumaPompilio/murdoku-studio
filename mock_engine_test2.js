const fs = require('fs');

const html = fs.readFileSync('/Users/mnuzzo/Documents/Antigravity IDE Projects/Murkodu Editor/murdoku-studio.html', 'utf8');

const match = html.match(/<script>([\s\S]*?)<\/script>/);
if (match) {
  const code = match[1];
  
  // mock browser env minimally
  const mockEnv = `
    const window = {
      addEventListener: () => {},
      localStorage: { getItem: () => null, setItem: () => {} },
      confirm: () => true
    };
    const document = {
      getElementById: () => ({ addEventListener: () => {}, style: {}, classList: {toggle:()=>{}, remove:()=>{}, add:()=>{}}, setAttribute: () => {}, parentNode: {insertBefore:()=>{}} }),
      querySelectorAll: () => [],
      querySelector: () => ({ addEventListener: () => {} }),
      body: { insertAdjacentHTML: () => {} },
      createElement: () => ({ style: {}, classList: {add:()=>{}} })
    };
    const $ = () => document.getElementById();
    const $$ = () => [];
    let state = { map: null };
    
    // override UI functions
    function renderBoard() {}
    function renderPalette() {}
    function render() {}
    function updateFloorUI() {}
    function autosave() {}
    
    ${code}
    
    return { E: window.MurdokuEngine };
  `;
  
  try {
    const factory = new Function('global', mockEnv);
    const { E } = factory(global);
    
    console.log("Engine loaded.");
    const m = E.loadPredefinedMap("sorelle");
    console.log("Map loaded:", m ? m.mapTitle : "null");
  } catch(e) {
    console.error("RUNTIME ERROR:", e);
  }
} else {
  console.log("Could not find script tag");
}
