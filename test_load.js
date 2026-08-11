const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const html = fs.readFileSync('/Users/mnuzzo/Documents/Antigravity IDE Projects/Murkodu Editor/murdoku-studio.html', 'utf-8');
const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("error", (err) => { console.error("Error:", err); });
virtualConsole.on("jsdomError", (err) => { console.error("JSDOM Error:", err); });
virtualConsole.on("log", (msg) => { console.log("Log:", msg); });
const dom = new JSDOM(html, { runScripts: "dangerously", virtualConsole });
setTimeout(() => {
  try {
    const document = dom.window.document;
    console.log("Generating map...");
    document.getElementById("genMap").click();
    console.log("Generating clues...");
    document.getElementById("genClues").click();
    console.log("Clicking Playtester button...");
    document.getElementById("aiLevelDesignerPlaytest").click();
    console.log("Done. Modal display:", document.getElementById("mdModal").style.display);
  } catch (e) {
    console.error("Exception during interaction:", e);
  }
  process.exit(0);
}, 1000);
