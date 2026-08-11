const fs = require('fs');
const html = fs.readFileSync('murdoku-studio.html', 'utf-8');

function extractBlock(startMarker, endMarker) {
    const start = html.indexOf(startMarker);
    const end = html.indexOf(endMarker, start);
    return html.substring(start + startMarker.length, end).trim();
}

const libContent = extractBlock('const OBJECT_LIB = {', '  };');
const artContent = extractBlock('const OBJ_ART = {', '  };');
const symContent = extractBlock('const OBJ_SYMBOL = {', '};');
const catContent = extractBlock('const OBJ_CATEGORIES = {', '};');

const libObj = {};
for (const line of libContent.split('\n')) {
    const m = line.match(/^\s*([a-zA-Z0-9_]+)\s*:\s*\{\s*label:\s*"([^"]+)",\s*walkable:\s*(true|false)\s*\}/);
    if (m) libObj[m[1]] = { label: m[2], walkable: m[3] === 'true' };
}

const artObj = {};
const artMatches = artContent.matchAll(/([a-zA-Z0-9_]+)\s*:\s*"([^"]+)"/g);
for (const m of artMatches) {
    artObj[m[1]] = m[2];
}

const symObj = {};
const symMatches = symContent.matchAll(/([a-zA-Z0-9_]+)\s*:\s*'([^']+)'/g);
for (const m of symMatches) {
    symObj[m[1]] = m[2];
}

const catObj = {};
// We parse the raw JS object
try {
  eval("catObj.data = {" + catContent + "};");
} catch(e) {}

const result = [];
for (const id in libObj) {
    const obj = libObj[id];
    const cats = [];
    if (catObj.data) {
        for (const catId in catObj.data) {
            if (catObj.data[catId].list && catObj.data[catId].list.includes(id)) {
                cats.push(catId);
            }
        }
    }
    
    result.push({
        id: id,
        label: obj.label,
        article: artObj[id] || "un",
        symbol: symObj[id] || id,
        walkable: obj.walkable,
        categories: cats,
        render: {
            type: "svg", 
            scale: 1,
            svgCode: ""
        }
    });
}

fs.writeFileSync('assets/objects.md', '```json\n' + JSON.stringify(result, null, 2) + '\n```\n');
console.log("Success");
