const fs = require('fs');
const path = require('path');

const colors = [
  "#F4F0E6", "#EDD4C4", "#EFCA9D", "#E8AD7A", "#DF9669", "#CB784A", "#FBE4A8", 
  "#EAD17A", "#C8B75F", "#A5C87C", "#7AA966", "#549152", "#C4E7E7", "#8FCED5", 
  "#5BA4B5", "#418099", "#395F83", "#293C5F", "#DCD1FF", "#BFA4EC", "#A27DD5", 
  "#7550BA", "#563695", "#361F63", "#F2B3B7", "#DB7676", "#CB4D4D", "#A83636", 
  "#742020", "#410D0D", "#EAEAEA", "#C6C6C6", "#949494", "#646464", "#3A3A3A", 
  "#1A1A1A"
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

const dirPath = path.join(__dirname, 'maps', 'saved');

if (!fs.existsSync(dirPath)) {
  console.log(`Directory ${dirPath} non trovata.`);
  process.exit(0);
}

const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(dirPath, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let fileModified = false;

  // Sostituisci il testo "[Stile: pattern=...]" con un colore
  content = content.replace(/\[Stile:\s*pattern=[^\]]+\]/g, (match) => {
    fileModified = true;
    return `[Stile: color=${getRandomColor()}]`;
  });

  // Estrai il payload JSON
  const match = content.match(/<!-- MURDOKU_STATE_B64: (.+) -->/);
  if (match) {
    const b64 = match[1];
    try {
      const jsonStr = Buffer.from(b64, 'base64').toString('utf8');
      const state = JSON.parse(jsonStr);
      let jsonModified = false;

      if (state.areaFloors) {
        for (const [aid, floor] of Object.entries(state.areaFloors)) {
          if (floor.type === 'pattern') {
            floor.type = 'color';
            floor.value = getRandomColor();
            jsonModified = true;
          }
        }
      }

      if (jsonModified) {
        fileModified = true;
        const newJsonStr = JSON.stringify(state);
        const newB64 = Buffer.from(newJsonStr, 'utf8').toString('base64');
        content = content.replace(b64, newB64);
      }
    } catch (e) {
      console.error(`Errore nel parsing del JSON nel file ${file}:`, e.message);
    }
  }

  if (fileModified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Aggiornato file: ${file}`);
    updatedCount++;
  }
}

console.log(`\nAggiornamento completato. File modificati: ${updatedCount}`);
