const svgCode = `<svg\n  width="768"\n  height="260"\n  viewBox="0 0 768 260"\n  xmlns="http://www.w3.org/2000/svg"\n>`;

let raw = svgCode;
let actualS = 30;
let cx = 15;
let cy = 15;
let op = 1;

let injectStr = `x="${cx-actualS/2}" y="${cy-actualS/2}" width="${actualS}" height="${actualS}" opacity="${op}" pointer-events="none" `;
raw = raw.replace(/<svg\s+/, `<svg ${injectStr}`);

console.log("OLD REGEX RESULT:");
console.log(raw);

raw = svgCode;
raw = raw.replace(/<svg[^>]*>/, (match) => {
    let clean = match.replace(/\b(width|height|x|y|opacity)="[^"]*"/g, "");
    return clean.replace(/<svg\s*/, `<svg x="${cx-actualS/2}" y="${cy-actualS/2}" width="${actualS}" height="${actualS}" opacity="${op}" pointer-events="none" `);
});

console.log("NEW REGEX RESULT:");
console.log(raw);
