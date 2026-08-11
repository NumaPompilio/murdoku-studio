const fs = require('fs');
const html = fs.readFileSync('/Users/mnuzzo/Documents/Antigravity IDE Projects/Murkodu Editor/murdoku-studio.html', 'utf8');

// just extract the whole script tag content and mock the DOM
const match = html.match(/<script>([\s\S]*?)<\/script>/);
if (match) {
  const scriptContent = match[1];
  
  const mockEnv = `
    const window = {
      addEventListener: () => {},
      localStorage: { getItem: () => null, setItem: () => {} },
      confirm: () => true
    };
    const document = {
      getElementById: (id) => ({ addEventListener: () => {}, style: {}, classList: {toggle:()=>{}, remove:()=>{}, add:()=>{}}, setAttribute: () => {}, parentNode: {insertBefore:()=>{}}, value: '' }),
      querySelectorAll: () => [],
      querySelector: () => ({ addEventListener: () => {} }),
      body: { insertAdjacentHTML: () => {} },
      createElement: () => ({ style: {}, classList: {add:()=>{}} })
    };
    const $ = document.getElementById;
    const $$ = document.querySelectorAll;
    let state = { map: null };
    
    function renderBoard() {}
    function renderPalette() {}
    function render() {}
    function updateFloorUI() {}
    function autosave() {}
    function setBoardStatus() {}
    function setVerdict() {}
    function invalidateClues() {}
    function updateSavedCount() {}
    function renderClues() {}
    function renderSteps() {}
    
    ${scriptContent}
    
    return window.MurdokuEngine;
  `;
  
  try {
    const factory = new Function('global', mockEnv);
    const E = factory(global);
    
    console.log("Engine loaded:", !!E);
    const m = E.loadPredefinedMap("sorelle");
    console.log("Map loaded:", m ? m.mapTitle : "null");
  } catch(e) {
    console.error("RUNTIME ERROR:", e);
  }
} else {
  console.log("Regex match failed");
}
