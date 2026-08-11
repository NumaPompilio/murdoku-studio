const fs = require('fs');
const filePath = 'assets/objects.md';
let content = fs.readFileSync(filePath, 'utf-8');

const match = content.match(/```json\n([\s\S]*?)\n```/);
if (match) {
  let arr = JSON.parse(match[1]);
  arr = arr.filter(obj => obj.id === 'automobile');
  
  const newContent = '```json\n' + JSON.stringify(arr, null, 2) + '\n```\n';
  fs.writeFileSync(filePath, newContent);
  console.log("Filtered objects.md");
} else {
  console.log("Could not find JSON block");
}
