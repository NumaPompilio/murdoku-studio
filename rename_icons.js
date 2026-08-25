const fs = require('fs');
const path = require('path');

const catalogs = ['catalogs/Catalogo 1/object.json', 'catalogs/catalogo2/object.json'];
const labelToId = {};

for (const c of catalogs) {
  if (fs.existsSync(c)) {
    const data = JSON.parse(fs.readFileSync(c, 'utf8'));
    for (const obj of data) {
      if (obj.label && obj.id) {
        labelToId[obj.label] = obj.id;
        // In case there's an issue with apostrophe, also store normalized
        labelToId[obj.label.replace(/’/g, "'")] = obj.id;
        labelToId[obj.label.replace(/'/g, "’")] = obj.id;
      }
    }
  }
}

const sets = ['icons/set 1', 'icons/set 2'];
for (const set of sets) {
  if (!fs.existsSync(set)) continue;
  const files = fs.readdirSync(set);
  for (const file of files) {
    if (!file.endsWith('.png')) continue;
    const label = file.replace(/\.png$/, '');
    let newName = null;
    if (labelToId[label]) {
      newName = labelToId[label] + '.png';
    } else {
      // Find fallback case-insensitive matching
      for (const k of Object.keys(labelToId)) {
        if (k.toLowerCase() === label.toLowerCase()) {
           newName = labelToId[k] + '.png';
           break;
        }
      }
    }

    if (newName && newName !== file) {
      fs.renameSync(path.join(set, file), path.join(set, newName));
      console.log(`Renamed [${set}]: ${file} -> ${newName}`);
    } else if (!newName) {
      console.log(`WARNING [${set}]: Could not find ID for ${file}`);
    }
  }
}
