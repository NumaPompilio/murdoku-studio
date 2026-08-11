const fs = require('fs');

let content = fs.readFileSync('/Users/mnuzzo/Documents/Antigravity IDE Projects/Murkodu Editor/murdoku-studio.html', 'utf8');

const unaryInjection = `
      // IN_COL_OR
      if (allow("IN_COL_OR")) {
        const otherCols = [];
        for(let c=0; c<sz; c++) if(c!==e.col) otherCols.push(c);
        if(otherCols.length > 0) {
          const c2 = e.col < sz - 1 ? e.col + 1 : e.col - 1;
          const minC = Math.min(e.col, c2), maxC = Math.max(e.col, c2);
          out.push(clue("IN_COL_OR", e, { col1: minC, col2: maxC }, "posizione", 2,
            () => \`\${e.name} si trova nella \${minC+1}ª o nella \${maxC+1}ª colonna.\`,
            ctx => ctx.occCells.filter(o => o.col === minC || o.col === maxC)));
        }
      }
      // ON_OBJECT_OR
      if (allow("ON_OBJECT_OR") && cell.object && objWalkable(cell.object)) {
        const k1 = cell.object;
        const otherObjs = Object.keys(ctx.objCells).filter(k => k !== k1 && objWalkable(k));
        if(otherObjs.length > 0) {
          const k2 = otherObjs[0];
          out.push(clue("ON_OBJECT_OR", e, { obj1: k1, obj2: k2 }, "oggetto", 3,
            () => \`\${e.name} si trova su \${withArticle(k1)} o su \${withArticle(k2)}.\`,
            ctx => ctx.occCells.filter(o => { const ob = cellAt(ctx.map, o.row, o.col).object; return ob === k1 || ob === k2; })));
        }
      }
      // BESIDE_OBJECT_OR
      if (allow("BESIDE_OBJECT_OR")) {
        const kinds = besideKinds(ctx, e.row, e.col);
        if (kinds.length > 0) {
          const k1 = kinds[0];
          const otherObjs = Object.keys(ctx.objCells).filter(k => k !== k1);
          if (otherObjs.length > 0) {
            const k2 = otherObjs[0];
            out.push(clue("BESIDE_OBJECT_OR", e, { obj1: k1, obj2: k2 }, "oggetto", 3,
              () => \`\${e.name} si trova accanto a \${withArticle(k1)} o a \${withArticle(k2)}.\`,
              ctx => ctx.occCells.filter(o => {
                const bk = besideKinds(ctx, o.row, o.col);
                return bk.includes(k1) || bk.includes(k2);
              })));
          }
        }
      }
      // TRAIT_ON_OBJECT_IN_AREA
      if (allow("TRAIT_ON_OBJECT_IN_AREA")) {
        const mates = sus.filter(s => s.id !== e.id && entArea(ctx, s) === eArea);
        for(const m of mates) {
          const mc = cellAt(ctx.map, m.row, m.col);
          if(mc.object && objWalkable(mc.object) && m.gender) {
            const tr = m.gender === "M" ? "un uomo" : "una donna";
            out.push(clue("TRAIT_ON_OBJECT_IN_AREA", e, { trait: m.gender, obj: mc.object }, "relazione", 4,
              () => \`Nella sua area c'è \${tr} su \${withArticle(mc.object)}.\`,
              null));
          }
        }
      }
      // SOMEONE_OFFSET_ON
      if (allow("SOMEONE_OFFSET_ON")) {
        const dirs = [
          { d: "N", dr: 1, dc: 0, lbl: "nord" }, { d: "S", dr: -1, dc: 0, lbl: "sud" },
          { d: "E", dr: 0, dc: -1, lbl: "est" }, { d: "W", dr: 0, dc: 1, lbl: "ovest" }
        ];
        for(const dir of dirs) {
          for(let dist=1; dist<=3; dist++) {
            const r = e.row + dir.dr*dist, c = e.col + dir.dc*dist;
            if(inBounds(ctx.map, r, c)) {
              const tgt = sus.find(s => s.row === r && s.col === c);
              if(tgt) {
                const tc = cellAt(ctx.map, tgt.row, tgt.col);
                if(tc.object && objWalkable(tc.object)) {
                  const asse = dir.dr === 0 ? "colonne" : "righe";
                  const asseStr = dist===1 ? asse.slice(0,-1) : asse;
                  out.push(clue("SOMEONE_OFFSET_ON", e, { dist, dir: dir.d, obj: tc.object }, "posizione", 4,
                    () => \`Esattamente \${dist} \${asseStr} a \${dir.lbl} di \${e.name}, qualcuno si trova su \${withArticle(tc.object)}.\`,
                    null));
                }
              }
            }
          }
        }
      }

      // ----- RELAZIONI BINARIE (soggetto e, riferimento other) -----
`;

const binaryInjection = `
        // COLS_OFFSET
        if (allow("COLS_OFFSET")) {
          const d = o.col - e.col;
          if (Math.abs(d) >= 1) {
            const dir = d > 0 ? "est" : "ovest";
            out.push(clue("COLS_OFFSET", e, { targetId: o.id, colsWest: d }, "relazione", 3,
              () => \`\${e.name} si trova esattamente \${Math.abs(d)} \${Math.abs(d) === 1 ? "colonna" : "colonne"} a \${dir} di \${o.name}.\`,
              null, o.id));
          }
        }
        
        // ALONE_WITH_PERSON
        if (allow("ALONE_WITH_PERSON") && entArea(ctx, e) === entArea(ctx, o)) {
          const mates = sus.filter(s => s.id !== e.id && entArea(ctx, s) === entArea(ctx, e));
          if (mates.length === 1 && mates[0].id === o.id) {
            out.push(clue("ALONE_WITH_PERSON", e, { targetId: o.id }, "relazione", 3,
              () => \`\${e.name} è da \${e.gender==="M"?"solo":"sola"} nella sua area con \${o.name}.\`, null, o.id));
          }
        }
`;

content = content.replace('      // ----- RELAZIONI BINARIE (soggetto e, riferimento other) -----', unaryInjection);

// For binary injection, insert before the end of the binary for loop
const binaryEnd = `      }
    }

    // ----- VINCOLI GLOBALI (expert) -----`;
content = content.replace(binaryEnd, binaryInjection + binaryEnd);

// Fix gender in ALONE and ALONE_WITH_TRAIT
content = content.replace('() => `${e.name} è da sola nella sua area.`, null));', '() => `${e.name} è da ${e.gender==="M"?"solo":"sola"} nella sua area.`, null));');
content = content.replace('() => `${e.name} si trova da sola nella sua area con ${tName}.`, null));', '() => `${e.name} si trova da ${e.gender==="M"?"solo":"sola"} nella sua area con ${tName}.`, null));');


// Update allowedForDifficulty
const allowedEasy = `  if(d==="easy") return ["IN_AREA","IN_ROW","IN_COL","EDGE","ON_OBJECT","BESIDE_OBJECT","ALONE","ONLY_ON_OBJECT"];`;
const allowedMedium = `  if(d==="medium") return ["IN_AREA","IN_ROW","IN_COL","EDGE","ON_OBJECT","BESIDE_OBJECT","ALONE","ONLY_ON_OBJECT","SAME_AREA","WITH_IN_AREA","CORNER","FRONT_WINDOW"];`;
const allowedHard = `  if(d==="hard") return ["IN_AREA","NOT_IN_AREA","IN_ROW","IN_COL","EDGE","NOT_EDGE_COL","ON_OBJECT","ONLY_ON_OBJECT","BESIDE_OBJECT","NOT_BESIDE_OBJECT","SAME_AREA","WITH_IN_AREA","DIFF_AREA","CARDINAL","ALONE","ALONE_WITH_TRAIT","ALONE_WITH_PERSON","CORNER","NOT_CORNER","ROWS_OFFSET","COLS_OFFSET","FRONT_WINDOW","OBJECT_DIR","IN_COL_OR","ON_OBJECT_OR","BESIDE_OBJECT_OR"];`;
const allowedExpert = `  return ["IN_AREA","NOT_IN_AREA","IN_ROW","IN_COL","EDGE","NOT_EDGE_COL","ON_OBJECT","ONLY_ON_OBJECT","BESIDE_OBJECT","NOT_BESIDE_OBJECT","SAME_AREA","WITH_IN_AREA","DIFF_AREA","CARDINAL","ALONE","ALONE_WITH_TRAIT","ALONE_WITH_PERSON","CORNER","NOT_CORNER","ROWS_OFFSET","COLS_OFFSET","FRONT_WINDOW","OBJECT_DIR","IN_COL_OR","ON_OBJECT_OR","BESIDE_OBJECT_OR","SOMEONE_OFFSET_ON","TRAIT_ON_OBJECT_IN_AREA","INDIRECT","EMPTY_ROWS","EMPTY_COLS","AREA_MIN_PEOPLE","AREA_PARITY"];`;

content = content.replace(/  if\(d==="easy"\) return \[.*\];/g, allowedEasy);
content = content.replace(/  if\(d==="medium"\) return \[.*\];/g, allowedMedium);
content = content.replace(/  if\(d==="hard"\) return \[.*\];/g, allowedHard);
content = content.replace(/  return \["IN_AREA".*\];/g, allowedExpert);

fs.writeFileSync('/Users/mnuzzo/Documents/Antigravity IDE Projects/Murkodu Editor/murdoku-studio.html', content);
console.log("murdoku-studio.html updated");

