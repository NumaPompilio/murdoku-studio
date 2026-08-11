import re
import json
import os

with open("murdoku-studio.html", "r", encoding="utf-8") as f:
    html = f.read()

def extract_dict(var_name):
    match = re.search(f'const {var_name} = ({{.*?}});', html, re.DOTALL)
    if not match: return None
    code = match.group(1)
    # clean up JS syntax to be JSON parsable, or just execute via JS.
    return code

with open("extract.js", "w", encoding="utf-8") as f:
    f.write(f"""
const fs = require('fs');
const html = fs.readFileSync('murdoku-studio.html', 'utf-8');

function extract(regex) {{
  const match = html.match(regex);
  return match ? match[1] : null;
}}

let OBJECT_LIB, OBJ_ART, OBJ_SYMBOL, OBJ_CATEGORIES;
eval("OBJECT_LIB = " + extract(/const OBJECT_LIB = (\\{{[\\s\\S]*?\\}});/));
eval("OBJ_ART = " + extract(/const OBJ_ART = (\\{{[\\s\\S]*?\\}});/));
eval("OBJ_SYMBOL = " + extract(/const OBJ_SYMBOL = (\\{{[\\s\\S]*?\\n\\};)/).replace(/;$/, ''));
eval("OBJ_CATEGORIES = " + extract(/const OBJ_CATEGORIES = (\\{{[\\s\\S]*?\\n\\};)/).replace(/;$/, ''));

const result = [];
for (const id in OBJECT_LIB) {{
  const obj = OBJECT_LIB[id];
  const cats = [];
  for (const catId in OBJ_CATEGORIES) {{
    if (OBJ_CATEGORIES[catId].list && OBJ_CATEGORIES[catId].list.includes(id)) {{
      cats.push(catId);
    }}
  }}
  
  result.push({{
    id: id,
    label: obj.label,
    article: OBJ_ART[id] || "un",
    symbol: OBJ_SYMBOL[id] || id,
    walkable: obj.walkable,
    categories: cats,
    render: {{
      type: "TODO",
      scale: 1,
      svgCode: ""
    }}
  }});
}}

fs.mkdirSync('assets', {{ recursive: true }});
fs.writeFileSync('assets/objects.md', '```json\\n' + JSON.stringify(result, null, 2) + '\\n```\\n');
""")

os.system("node extract.js")
