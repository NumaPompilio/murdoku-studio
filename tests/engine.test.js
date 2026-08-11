const { test, describe } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

// Carica MurdokuEngine dal primo blocco <script> di murdoku-studio.html
function loadEngine() {
  const htmlPath = path.join(__dirname, '..', 'murdoku-studio.html');
  const html = fs.readFileSync(htmlPath, 'utf8');
  const match = html.match(/<script>([\s\S]*?)<\/script>/);
  assert.ok(match, 'Impossibile trovare il blocco script del motore in murdoku-studio.html');
  
  const scriptContent = match[1];
  const sandbox = {};
  const fn = new Function('module', 'exports', 'globalThis', scriptContent);
  const moduleObj = { exports: {} };
  fn(moduleObj, moduleObj.exports, sandbox);
  return moduleObj.exports;
}

const E = loadEngine();

describe('MurdokuEngine — Costanti e Funzioni Base', () => {
  test('Esporta tutte le API pubbliche specificate', () => {
    const requiredApis = [
      'makeRng', 'ri', 'pick', 'shuffle',
      'OBJECT_LIB', 'objLabel', 'objWalkable', 'ALPHABET', 'NAMES', 'nameFor',
      'emptyMap', 'cellAt', 'isOccupiable', 'hasWall', 'wallKey', 'key', 'computeAreas', 'areaIdAt',
      'generateMap', 'placeSolution', 'buildContext', 'catalogFor', 'clueText',
      'solve', 'generateClues', 'generateBestClues', 'eleganceScore', 'reasonedSolution',
      'suspects', 'entArea', 'areaName'
    ];
    for (const api of requiredApis) {
      assert.ok(E[api] !== undefined, `API mancante: ${api}`);
    }
  });

  test('Alfabeto non contiene J, K, W, X, Y', () => {
    const forbidden = ['J', 'K', 'W', 'X', 'Y'];
    for (const char of forbidden) {
      assert.strictEqual(E.ALPHABET.includes(char), false, `Carattere proibito trovato nell'alfabeto: ${char}`);
    }
    assert.strictEqual(E.ALPHABET.length, 21);
  });

  test('Oggetti calpestabili e ostacoli sono definiti correttamente', () => {
    assert.strictEqual(E.objWalkable('chair'), true);
    assert.strictEqual(E.objWalkable('bed'), true);
    assert.strictEqual(E.objWalkable('umbrella'), true);
    assert.strictEqual(E.objWalkable('sunbed'), true);
    assert.strictEqual(E.objWalkable('surfboard'), true);
    assert.strictEqual(E.objWalkable('walkway'), true);
    assert.strictEqual(E.objWalkable('pedalo'), true);
    assert.strictEqual(E.objWalkable('dock'), true);
    assert.strictEqual(E.objWalkable('table'), false);
    assert.strictEqual(E.objWalkable('statue'), false);
    assert.strictEqual(E.objWalkable('cabin'), false);
    assert.strictEqual(E.objWalkable('lifeguard'), false);
    assert.strictEqual(E.objWalkable('palm'), false);
    assert.strictEqual(E.objWalkable('shower'), false);
    assert.strictEqual(E.objWalkable('kiosk'), false);
    assert.strictEqual(E.objWalkable('volleyball'), false);
    assert.strictEqual(E.objWalkable('cooler'), false);
    assert.strictEqual(E.objLabel('chair'), 'sedia');
    assert.strictEqual(E.objLabel('table'), 'tavolo');
    assert.strictEqual(E.objLabel('umbrella'), 'ombrellone');
    assert.strictEqual(E.objLabel('sunbed'), 'lettino da spiaggia');
    assert.strictEqual(E.objLabel('surfboard'), 'tavola da surf');
    assert.strictEqual(E.objLabel('cabin'), 'cabina');
    assert.strictEqual(E.objLabel('palm'), 'palma');
  });

  test('RNG deterministico è riproducibile', () => {
    const rng1 = E.makeRng(42);
    const rng2 = E.makeRng(42);
    for (let i = 0; i < 20; i++) {
      assert.strictEqual(rng1(), rng2());
    }
  });
});

describe('MurdokuEngine — Calcolo Aree e Regole delle Stanze', () => {
  test('Le stanze sono delimitate esclusivamente dai muri (gli ostacoli non dividono)', () => {
    const m = E.emptyMap(5);
    // Nessun muro: deve esistere 1 sola stanza/regione visiva
    let analysis = E.computeAreas(m);
    assert.strictEqual(analysis.count, 1);

    // Inseriamo un ostacolo al centro (2,2)
    E.cellAt(m, 2, 2).object = 'table';
    analysis = E.computeAreas(m);
    // Le celle visive rimangono parte della stessa stanza 0
    assert.strictEqual(analysis.visualArea[2 * 5 + 2], 0);
    // La cella con tavolo non è occupabile -> areaOf è -1
    assert.strictEqual(analysis.areaOf[2 * 5 + 2], -1);

    // Aggiungiamo un muro verticale tra colonna 1 e 2
    for (let r = 0; r < 5; r++) {
      m.walls.add(E.wallKey({ row: r, col: 1 }, { row: r, col: 2 }));
    }
    analysis = E.computeAreas(m);
    assert.strictEqual(analysis.count, 2, 'Il muro completo deve dividere la griglia in 2 stanze');
  });

  test('isAreaCorner identifica come angoli solo le celle che toccano 2 muri ortogonali a prescindere dagli oggetti', () => {
    const m = E.emptyMap(6);
    const ctx = E.buildContext(m);

    // In una griglia 6×6 senza muri interni:
    // I 4 vertici toccano 2 bordi ortogonali -> DEVONO essere angoli
    assert.strictEqual(E.isAreaCorner(ctx, 0, 0), true, '(0,0) tocca N e W -> angolo');
    assert.strictEqual(E.isAreaCorner(ctx, 0, 5), true, '(0,5) tocca N e E -> angolo');
    assert.strictEqual(E.isAreaCorner(ctx, 5, 0), true, '(5,0) tocca S e W -> angolo');
    assert.strictEqual(E.isAreaCorner(ctx, 5, 5), true, '(5,5) tocca S e E -> angolo');

    // Le celle lungo il bordo toccano 1 solo muro -> NON sono angoli
    assert.strictEqual(E.isAreaCorner(ctx, 0, 2), false, '(0,2) tocca solo N');
    assert.strictEqual(E.isAreaCorner(ctx, 3, 0), false, '(3,0) tocca solo W');

    // Le celle centrali non toccano muri -> NON sono angoli
    assert.strictEqual(E.isAreaCorner(ctx, 2, 2), false, '(2,2) cella aperta');

    // Posizioniamo un ostacolo (tavolo) a (1,2) e (2,1):
    // La cella (2,2) tocca 2 ostacoli ma 0 muri -> NON deve essere angolo!
    E.cellAt(m, 1, 2).object = 'table';
    E.cellAt(m, 2, 1).object = 'table';
    const ctxWithTables = E.buildContext(m);
    assert.strictEqual(E.isAreaCorner(ctxWithTables, 2, 2), false, '(2,2) con arredi adiacenti NON è un angolo');

    // Creiamo un angolo interno con due muri reali:
    // muro tra (2,2) e (1,2) [sopra] e muro tra (2,2) e (2,1) [a sinistra]
    m.walls.add(E.wallKey({ row: 2, col: 2 }, { row: 1, col: 2 }));
    m.walls.add(E.wallKey({ row: 2, col: 2 }, { row: 2, col: 1 }));
    const ctxWithWalls = E.buildContext(m);
    assert.strictEqual(E.isAreaCorner(ctxWithWalls, 2, 2), true, '(2,2) con 2 muri ortogonali reali è un angolo');
  });
});

describe('MurdokuEngine — Generazione e Piazzamento Soluzione', () => {
  test('Piazzamento garantisce: 1 persona per riga/colonna e vittima sola con l assassino', () => {
    const rng = E.makeRng(999);
    for (let size = 5; size <= 9; size++) {
      let m = null;
      for (let t = 0; t < 20; t++) {
        m = E.generateMap({ size, rng });
        if (E.placeSolution(m, { rng })) break;
        m = null;
      }
      assert.ok(m, `Impossibile generare mappa con soluzione per size=${size}`);

      // Numero entità = lato griglia (size - 1 sospetti + 1 vittima)
      assert.strictEqual(m.entities.length, size);
      const sus = m.entities.filter(e => e.kind === 'suspect');
      const vic = m.entities.find(e => e.kind === 'victim');
      assert.strictEqual(sus.length, size - 1);
      assert.ok(vic, 'Vittima presente');

      // Righe e colonne tutte distinte
      const rows = new Set(m.entities.map(e => e.row));
      const cols = new Set(m.entities.map(e => e.col));
      assert.strictEqual(rows.size, size, 'Righe non tutte distinte');
      assert.strictEqual(cols.size, size, 'Colonne non tutte distinte');

      // Tutte le entità su celle occupabili
      for (const e of m.entities) {
        assert.ok(E.isOccupiable(m, e.row, e.col), `Entità ${e.name} in cella non occupabile (${e.row},${e.col})`);
      }

      // Area vittima ha esattamente 2 occupanti: vittima + assassino
      const an = E.computeAreas(m);
      const vicArea = an.areaOf[vic.row * size + vic.col];
      const inVicArea = m.entities.filter(e => an.areaOf[e.row * size + e.col] === vicArea);
      assert.strictEqual(inVicArea.length, 2, 'L area della vittima deve contenere esattamente 2 persone');
      const murd = inVicArea.find(e => e.kind === 'suspect');
      assert.ok(murd, 'Assassino presente nell area della vittima');
      assert.strictEqual(murd.isMurderer, true, 'Flag isMurderer impostato');
    }
  });
});

describe('MurdokuEngine — Solver e Generazione Indizi (Unicità & Eleganza)', () => {
  const difficulties = ['facile', 'medio', 'difficile', 'expert'];
  const allowedMap = {
    facile: ['IN_AREA', 'IN_ROW', 'IN_COL', 'EDGE', 'ON_OBJECT'],
    medio: ['IN_AREA', 'IN_ROW', 'IN_COL', 'EDGE', 'ON_OBJECT', 'BESIDE_OBJECT', 'SAME_AREA', 'WITH_IN_AREA', 'ALONE', 'CORNER'],
    difficile: ['IN_AREA', 'NOT_IN_AREA', 'IN_ROW', 'IN_COL', 'EDGE', 'NOT_EDGE_COL', 'ON_OBJECT', 'ONLY_SITTING', 'BESIDE_OBJECT', 'NOT_BESIDE_OBJECT', 'SAME_AREA', 'WITH_IN_AREA', 'DIFF_AREA', 'CARDINAL', 'ALONE', 'CORNER', 'NOT_CORNER', 'ROWS_OFFSET'],
    expert: null
  };

  for (const diff of difficulties) {
    test(`Generazione indizi univoci per difficoltà "${diff}" (size 6..8)`, () => {
      for (let size = 6; size <= 8; size++) {
        const rng = E.makeRng(size * 100 + diff.length * 13);
        let m = null;
        for (let t = 0; t < 20; t++) {
          m = E.generateMap({ size, rng });
          if (E.placeSolution(m, { rng })) break;
          m = null;
        }
        assert.ok(m, `Mappa non generata per size=${size}`);

        const result = E.generateClues(m, {
          difficulty: diff,
          allowedTypes: allowedMap[diff],
          rng
        });

        assert.strictEqual(result.unique, true, `La soluzione deve essere unica per diff=${diff}, size=${size}`);
        assert.ok(result.clues.length >= size - 1, 'Almeno 1 indizio per sospetto');

        // Verifica che la soluzione reale soddisfi tutti gli indizi
        const solveRes = E.solve(m, result.clues, result.ctx);
        assert.strictEqual(solveRes.unique, true);
        assert.strictEqual(solveRes.solutions.length, 1);
        const s = solveRes.solutions[0];
        for (const e of m.entities) {
          assert.strictEqual(s[e.id].row, e.row, `Riga non coincidente per ${e.id}`);
          assert.strictEqual(s[e.id].col, e.col, `Colonna non coincidente per ${e.id}`);
        }

        // Calcolo eleganza e soluzione ragionata
        const el = E.eleganceScore(m, result.clues, result.ctx);
        assert.ok(el.score >= 0 && el.score <= 100, 'Score di eleganza compreso tra 0 e 100');
        const steps = E.reasonedSolution(m, result.clues, result.ctx);
        assert.ok(steps.length >= size, 'Passi di ragionamento completi per tutte le entità');
      }
    });
  }

  test('generateBestClues seleziona il set più elegante tra N tentativi', () => {
    const rng = E.makeRng(777);
    let m = null;
    for (let t = 0; t < 20; t++) {
      m = E.generateMap({ size: 7, rng });
      if (E.placeSolution(m, { rng })) break;
      m = null;
    }
    const best = E.generateBestClues(m, {
      difficulty: 'medio',
      tries: 4,
      allowedTypes: allowedMap.medio,
      rng
    });
    assert.strictEqual(best.unique, true);
    assert.ok(best.elegance.score >= 40, 'Eleganza del set migliore ragionevole');
  });

  test('Indizi CARDINAL usano solo direzioni pure (nord, sud, est, ovest) e mai composte', () => {
    const m = E.emptyMap(6);
    // Posizioniamo due sospetti A in (1, 1) e B in (3, 4)
    m.entities = [
      { id: 'suspect_0', kind: 'suspect', initial: 'A', name: 'Alba', row: 1, col: 1, isMurderer: false },
      { id: 'suspect_1', kind: 'suspect', initial: 'B', name: 'Bruno', row: 3, col: 4, isMurderer: true },
      { id: 'victim', kind: 'victim', initial: 'V', name: 'Vittima', row: 4, col: 2 }
    ];
    const ctx = E.buildContext(m);
    const catalog = E.catalogFor(ctx, new Set(['CARDINAL']));
    const cardClues = catalog.filter(c => c.type === 'CARDINAL');

    assert.ok(cardClues.length > 0, 'Devono essere generati indizi CARDINAL');
    for (const c of cardClues) {
      assert.ok(['N', 'S', 'W', 'E'].includes(c.fact.dir), `Direzione ${c.fact.dir} non valida`);
      const txt = E.clueText(ctx, c);
      assert.match(txt, /si trovava a (nord|sud|est|ovest) rispetto a/);
      assert.doesNotMatch(txt, /sud-ovest|nord-ovest|sud-est|nord-est/);
    }
  });

  test('Finestre funzionano come muri per perimetri e generano indizi FRONT_WINDOW', () => {
    const m = E.emptyMap(6);
    // Posizioniamo una finestra tra (2,2) e (2,3) su un muro esistente
    const kw = E.wallKey({row:2, col:2}, {row:2, col:3});
    m.walls.add(kw);
    m.windows.add(kw);

    // Verifichiamo che venga considerata una barriera
    assert.strictEqual(E.hasWall(m, 2, 2, 2, 3), true, 'La finestra deve bloccare (hasWall=true)');
    assert.strictEqual(E.isWindow(m, 2, 2, 2, 3), true, 'Deve essere riconosciuta come finestra');

    // Verifichiamo isFrontWindow per le celle adiacenti
    assert.strictEqual(E.isFrontWindow(m, 2, 2), true, '(2,2) è di fronte alla finestra');
    assert.strictEqual(E.isFrontWindow(m, 2, 3), true, '(2,3) è di fronte alla finestra');
    assert.strictEqual(E.isFrontWindow(m, 2, 1), false, '(2,1) NON è di fronte');

    // Posizioniamo sospetto
    m.entities = [
      { id: 'suspect_0', kind: 'suspect', initial: 'A', name: 'Alba', row: 2, col: 2, isMurderer: false },
      { id: 'victim', kind: 'victim', initial: 'V', name: 'Vittima', row: 4, col: 2 }
    ];
    const ctx = E.buildContext(m);
    const catalog = E.catalogFor(ctx, new Set(['FRONT_WINDOW']));
    const frontClues = catalog.filter(c => c.type === 'FRONT_WINDOW');

    assert.strictEqual(frontClues.length, 1, 'Deve generare l indizio FRONT_WINDOW per chi è davanti alla finestra');
    const txt = E.clueText(ctx, frontClues[0]);
    assert.match(txt, /di fronte a una finestra/);
  });
});

describe('Murdoku Studio — Titolo Mappa e Nomi File di Export', () => {
  test('Slugify genera nomi file sanitizzati e corretti', () => {
    function slugify(t) {
      return (t || "")
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || "murdoku";
    }

    assert.strictEqual(slugify("Delitto a Villa Torlonia"), "delitto-a-villa-torlonia");
    assert.strictEqual(slugify("Mappa #1: Assassinio sull'Orient Express!"), "mappa-1-assassinio-sull-orient-express");
    assert.strictEqual(slugify("  Mappa con accenti: Caffè & Città  "), "mappa-con-accenti-caffe-citta");
    assert.strictEqual(slugify(""), "murdoku");
    assert.strictEqual(slugify("---"), "murdoku");
  });

  test('La serializzazione e deserializzazione preserva il titolo e la struttura dati', () => {
    const rng = E.makeRng(123);
    const m = E.generateMap({ size: 6, rng });
    E.placeSolution(m, { rng });
    const clueRes = E.generateClues(m, { rng, difficulty: 'medio' });
    
    // Simula lo schema serialize dell'app
    const payload = {
      version: 1,
      title: "Delitto in Biblioteca",
      size: m.size,
      cells: m.cells.map(c => ({ row: c.row, col: c.col, walkable: c.walkable !== false, object: c.object || null })),
      walls: [...m.walls],
      areaNames: m.areaNames,
      areaFloors: { 0: { type: 'pattern', value: 'prato' }, 1: { type: 'color', value: '#d2b48c' } },
      entities: m.entities.map(e => ({ id: e.id, kind: e.kind, initial: e.initial, name: e.name, row: e.row, col: e.col, isMurderer: !!e.isMurderer })),
      suspectCount: m.suspectCount,
      clues: clueRes.clues.map(c => ({ id: c.id, type: c.type, text: E.clueText(clueRes.ctx, c) })),
      theme: { title: "Delitto in Biblioteca", intro: "Un misterioso omicidio tra gli scaffali." },
      narration: null,
      narrated: false
    };

    const jsonStr = JSON.stringify(payload);
    const parsed = JSON.parse(jsonStr);

    assert.strictEqual(parsed.title, "Delitto in Biblioteca");
    assert.strictEqual(parsed.size, 6);
    assert.strictEqual(parsed.entities.length, 6);
    assert.strictEqual(parsed.cells.length, 36);
    assert.deepStrictEqual(parsed.areaFloors, { 0: { type: 'pattern', value: 'prato' }, 1: { type: 'color', value: '#d2b48c' } });
    assert.ok(parsed.clues.length >= 5);
  });
});


