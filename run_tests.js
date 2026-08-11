const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const htmlContent = fs.readFileSync('murdoku-studio.html', 'utf8');

const dom = new JSDOM(htmlContent, { runScripts: "dangerously" });
const window = dom.window;

// Define a function inside the DOM context that does the automated tests
window.eval(`
  function runAutomatedTests() {
    let success = true;
    let errs = [];

    try {
      console.log("Test 1: Mappa Casuale");
      document.getElementById("genMap").click();
      if(!window.state.map) throw new Error("Map not generated");
      console.log("Mappa ok!");

      console.log("Test 2: AutoFill & Clues - Easy");
      document.getElementById("diff").value = "easy";
      document.getElementById("autoFill").click();
      if(!window.state.clues || window.state.clues.length === 0) throw new Error("No clues generated for easy");
      console.log("Clues easy ok, total: " + window.state.clues.length);

      console.log("Test 3: AutoFill & Clues - Expert");
      document.getElementById("genMap").click(); // reset map
      document.getElementById("diff").value = "expert";
      document.getElementById("autoFill").click();
      if(!window.state.clues || window.state.clues.length === 0) throw new Error("No clues generated for expert");
      console.log("Clues expert ok, total: " + window.state.clues.length);
      
      // Let's do it 5 times for expert to ensure robustness of advanced clues
      for(let i=0; i<5; i++) {
        document.getElementById("genMap").click();
        document.getElementById("autoFill").click();
      }
      console.log("Robustness 5 loops passed.");
      
      // Test 4: Undo 
      document.getElementById("undoBtn").click();
      console.log("Undo success");
      
    } catch(e) {
      success = false;
      errs.push(e.message || e.toString());
      console.error(e);
    }
    return { success, errs };
  }
`);

const result = window.runAutomatedTests();
if(result.success) {
    console.log("All JSDOM tests passed!");
} else {
    console.error("TESTS FAILED:", result.errs);
    process.exit(1);
}
