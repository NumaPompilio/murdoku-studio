const fs = require('fs');
const html = fs.readFileSync('/Users/mnuzzo/Documents/Antigravity IDE Projects/Murkodu Editor/murdoku-studio.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
  try {
    const code = scriptMatch[1];
    // Create a new Function to parse for syntax errors
    new Function(code);
    console.log("No syntax errors found.");
  } catch (e) {
    console.error("SYNTAX ERROR:", e);
  }
} else {
  console.log("No script tag found.");
}
