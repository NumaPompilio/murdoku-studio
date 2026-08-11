const fs = require('fs');

const html = fs.readFileSync('murdoku-studio.html', 'utf-8');

const libMatch = html.indexOf('const OBJECT_LIB = {');
const libEnd = html.indexOf('  };', libMatch);
const objLibCode = html.substring(libMatch, libEnd + 4).replace('const OBJECT_LIB = ', '');

const artMatch = html.indexOf('const OBJ_ART = {');
const artEnd = html.indexOf('  };', artMatch);
const objArtCode = html.substring(artMatch, artEnd + 4).replace('const OBJ_ART = ', '');

const symMatch = html.indexOf('const OBJ_SYMBOL = {');
const symEnd = html.indexOf('\n};', symMatch);
const objSymCode = html.substring(symMatch, symEnd + 3).replace('const OBJ_SYMBOL = ', '');

const catMatch = html.indexOf('const OBJ_CATEGORIES = {');
const catEnd = html.indexOf('\n};', catMatch);
const objCatCode = html.substring(catMatch, catEnd + 3).replace('const OBJ_CATEGORIES = ', '');

let OBJECT_LIB, OBJ_ART, OBJ_SYMBOL, OBJ_CATEGORIES;
eval("OBJECT_LIB = " + objLibCode);
eval("OBJ_ART = " + objArtCode);
eval("OBJ_SYMBOL = " + objSymCode);
eval("OBJ_CATEGORIES = " + objCatCode);

const result = [];
for (const id in OBJECT_LIB) {
  const obj = OBJECT_LIB[id];
  const cats = [];
  for (const catId in OBJ_CATEGORIES) {
    if (OBJ_CATEGORIES[catId].list && OBJ_CATEGORIES[catId].list.includes(id)) {
      cats.push(catId);
    }
  }
  
  result.push({
    id: id,
    label: obj.label,
    article: OBJ_ART[id] || "un",
    symbol: OBJ_SYMBOL[id] || id,
    walkable: obj.walkable,
    categories: cats,
    render: {
      type: "TODO",
      scale: 1,
      svgCode: ""
    }
  });
}

fs.mkdirSync('assets', { recursive: true });
fs.writeFileSync('assets/objects.md', '```json\n' + JSON.stringify(result, null, 2) + '\n```\n');
console.log("Done");
