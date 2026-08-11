# Murdoku Studio — Specifica implementativa dettagliata

> Blueprint per rigenerare l'applicazione con le medesime funzionalità e la
> medesima GUI. Le costanti sono riportate **testualmente** perché i valori
> esatti contano. Tutto ciò che segue descrive la versione attuale del progetto
> (`murdoku-studio.html`).

---

## 0. Vincoli architetturali (obbligatori)

- **Un unico file `murdoku-studio.html`**, apribile con doppio clic, **offline**,
  **senza CDN e senza librerie di terze parti**. Tutte le icone sono **SVG inline**.
- Due `<script>`: (1) **motore logico** puro (nessun DOM), esposto come
  `window.MurdokuEngine` *e* come `module.exports` per i test Node; (2) **UI** che
  usa il motore. Nel file finale il motore è incorporato.
- **PDF via `window.print()`** con CSS `@page` A4 (mai jsPDF).
- Persistenza: **autosave in `localStorage`** (chiave `murdoku:autosave`).
- **Nessun `confirm()`**: le conferme distruttive usano un doppio clic sul pulsante.
- Lati griglia supportati **5–10** (default 8).

---

## 1. Costanti del motore (valori esatti)

```js
// Direzioni ortogonali N,S,W,E
const DIRS = [[-1,0],[1,0],[0,-1],[0,1]];

// Alfabeto iniziali (niente J,K,W,X,Y)
const ALPHABET = "ABCDEFGHILMNOPQRSTUVZ".split("");

// Libreria oggetti: label italiana + walkable (calpestabile = occupabile)
const OBJECT_LIB = {
  chair:{label:"sedia",walkable:true}, rug:{label:"tappeto",walkable:true},
  carpet:{label:"tappeto",walkable:true}, // alias retro-compatibile
  bed:{label:"letto",walkable:true}, boat:{label:"barca",walkable:true},
  car:{label:"auto",walkable:true}, mattress:{label:"materassino",walkable:true},
  towel:{label:"telo da mare",walkable:true},
  table:{label:"tavolo",walkable:false}, bookcase:{label:"libreria",walkable:false},
  shelf:{label:"scaffale",walkable:false}, tv:{label:"TV",walkable:false},
  plant:{label:"pianta",walkable:false}, tree:{label:"albero",walkable:false},
  flowers:{label:"fiori",walkable:false}, statue:{label:"statua",walkable:false},
  boulder:{label:"masso",walkable:false}, scoglio:{label:"scoglio",walkable:false},
  boa:{label:"boa",walkable:false},
};

// Articoli per "su/accanto a <oggetto>"
const OBJ_ART = {
  chair:"una", carpet:"un", rug:"un", bed:"un", boat:"una", car:"un'",
  mattress:"un", towel:"un", table:"un", bookcase:"una", shelf:"uno",
  tv:"una", plant:"una", tree:"un", flowers:"dei", statue:"una",
  boulder:"un", scoglio:"uno", boa:"una",
};
// withArticle(k) = OBJ_ART[k] + (art==="un'"?"":" ") + label   → es. "un'auto", "dei fiori"

// Oggetti usati in generazione
const WALKABLE_OBJS = ["chair","rug","bed","mattress","towel"];
const BLOCK_OBJS = ["table","bookcase","shelf","tv","plant","tree","flowers",
                    "statue","boulder","scoglio","boa"];

// Nomi tematici delle aree (mescolati alla generazione)
const THEME_NAMES = ["Salotto","Cucina","Camera","Studio","Ingresso","Veranda",
  "Soffitta","Cantina","Bagno","Corridoio","Sala","Terrazzo","Giardino","Serra",
  "Officina","Deposito","Atrio","Loggia","Portico","Galleria"];

// Nomi persone per iniziale (≥6 per lettera), nameFor(i,rng?) sceglie da NAMES[ALPHABET[i]]
const NAMES = {
  A:["Agnese","Aldo","Anna","Arturo","Alba","Amelia"],
  B:["Bianca","Bruno","Beatrice","Biagio","Bianca","Bruna"],
  C:["Carla","Carlo","Chiara","Cesare","Cinzia","Corrado"],
  D:["Dario","Delia","Diego","Diana","Davide","Dora"],
  E:["Elena","Enzo","Emma","Ettore","Elsa","Elio"],
  F:["Fabio","Flavia","Franco","Fiora","Furio","Fosca"],
  G:["Gaia","Gino","Giulia","Guido","Greta","Gigi"],
  H:["Hilde","Hugo","Helga","Hiro","Hana","Hektor"],
  I:["Ilaria","Igor","Ida","Iacopo","Iole","Ivo"],
  L:["Luca","Lidia","Lorenzo","Livia","Lauro","Lena"],
  M:["Marta","Marco","Mira","Mauro","Milena","Michele"],
  N:["Nadia","Nino","Nora","Neri","Nella","Nico"],
  O:["Olga","Orazio","Ornella","Otello","Oriana","Osvaldo"],
  P:["Paola","Piero","Petra","Pietro","Pia","Pino"],
  Q:["Quirino","Quinta","Quinto","Quilla","Quirina","Quarto"],
  R:["Rita","Renzo","Rosa","Remo","Rina","Rocco"],
  S:["Sara","Sergio","Silvia","Saul","Stella","Siro"],
  T:["Teresa","Tullio","Tina","Tazio","Tosca","Tino"],
  U:["Ugo","Ursula","Uberto","Ulla","Umberto","Uma"],
  V:["Vanessa","Vera","Vito","Viola","Vasco","Velia"],
  Z:["Zara","Zeno","Zita","Zaccaria","Zoe","Zelda"],
};
```

**RNG deterministico:** `mulberry32(seed)` (32‑bit). Helper: `ri(rng,n)=⌊rng()·n⌋`,
`pick`, `shuffle` (Fisher–Yates con `rng`). `makeRng(seed)`.

---

## 2. Modello dati

```
cell   = { row, col, walkable:boolean, object?:kind }
map    = { size, cells:cell[](row-major), walls:Set<"r,c|r,c">,
           entities:entity[], suspectCount:int, areaNames:{ [areaId]:string },
           victimAreaId? }
entity = { id, kind:"suspect"|"victim", initial, name, row, col, isMurderer? }
clue   = { id:"c<n>", type, subjectId|null, subjectName?, targetId?,
           fact:{...}, category, diff:int, scope:"subject"|"global",
           _text:(ctx)=>string, _cand?:(ctx)=>cell[] }
ctx    = { map, analysis, byId:{id:entity}, size, occCells:[{row,col}],
           objCells:{ kind:[{row,col}] } }
```

Funzioni base: `key(r,c)="r,c"`; `wallKey(a,b)` = coppia ordinata `"r,c|r,c"`;
`cellAt`, `inBounds`, `hasWall`; **`isOccupiable(m,r,c) = cell.walkable && (!object ||
objWalkable(object))`**; `emptyMap(size)` (tutte walkable, no muri).

Il testo dell'indizio è prodotto **dinamicamente** da `_text(ctx)` (usa i nomi
correnti di persone/aree): la rinomina si propaga da sola al testo canonico.

---

## 3. Aree/stanze — `computeAreas(m)` (REGOLA CENTRALE)

Una **stanza** è una regione di celle connesse **attraversando qualunque cella**
(ostacoli e celle bloccate incluse) e bloccata **solo dai muri**. Algoritmo:

1. `region[cella] = -1`. Per ogni cella non ancora assegnata, BFS/flood‑fill che
   attraversa i vicini ortogonali **se e solo se non c'è muro** tra le due celle
   (nessun controllo di occupabilità). Assegna un `id` incrementale.
2. `areaOf[cella]` = id di regione per le celle **occupabili**, **−1** per
   ostacoli/bloccate.
3. `visualArea[cella]` = id di regione per **ogni** cella (colore + "accanto").
4. Ritorna `{ areaOf, visualArea, areas, count, region }`.

> Gli oggetti‑ostacolo e le celle bloccate **non dividono** le stanze: solo i muri.

Helper: `areaIdAt(analysis,m,r,c)=analysis.visualArea[...]`; `areaName(ctx,id)=
map.areaNames[id] || "Area "+(id+1)`; `areaCells(ctx,id)` = celle occupabili con
`areaOf===id`; `entArea(ctx,e)=areaOf[e.row*size+e.col]`.

**Adiacenza "accanto":** `beside(r,c,r2,c2)` = distanza di Manhattan 1, nessun muro,
**stessa `visualArea`**. **`besideKinds(r,c)`** = tipi di oggetto nelle celle
adiacenti (stessa area, no muro).

**Angolo d'area `isAreaCorner(r,c)`:** contando i vicini occupabili della stessa
area senza muro, è angolo se ha **≤1** vicino, oppure **esattamente 2** disposti a
L (una direzione verticale + una orizzontale).

---

## 4. Generazione mappa — `generateMap({size,rng,areas?,suspectCount?})`

1. `nAreas = areas || max(3, min(size, 3 + ri(rng, max(1,size-2))))`.
2. **Partizione per crescita da semi:** scegli `nAreas` celle‑seme; BFS
   multi‑sorgente randomizzata (estrai a caso dalla coda, mescola le direzioni)
   assegnando l'etichetta d'area; celle residue prendono l'etichetta del primo
   vicino (fallback 0).
3. **Muri sui confini:** per ogni coppia di celle adiacenti (verso S ed E) con
   etichette diverse aggiungi il muro.
4. **Nomi aree:** `areaNames[i] = shuffle(THEME_NAMES)[i]`.
5. **Oggetti** (con `total=size²`):
   - `nWalkObj = round(total·(0.10 + rng()·0.10))` (≈10–20%),
   - `nBlockObj = round(total·(0.10 + rng()·0.12))` (≈10–22%),
   - `nBlocked  = round(total·(0.02 + rng()·0.05))` (≈2–7%).
   Tipi usati: `2+ri(rng,2)` calpestabili, `3+ri(rng,3)` ostacoli (scelti a caso).
   Riempi celle a caso: prima calpestabili, poi ostacoli, poi celle bloccate.
6. `suspectCount = suspectCount || size-1` (cap a `size-1`).

---

## 5. Piazzamento — `placeSolution(m,{rng})`

Fino a **4000 tentativi**:
1. Raggruppa le celle occupabili per area (`byArea`). `bigAreas` = aree con ≥2
   celle. Se nessuna → `null`.
2. Scegli a caso `victimArea` tra `bigAreas`; nel suo pool (mescolato) prendi la
   vittima (`pool[0]`) e l'**assassino** = primo candidato con riga **e** colonna
   diverse dalla vittima. Marca righe/colonne usate.
3. **Altri sospetti** (`need = nSusp-1`): scelti **fuori** da `victimArea` con
   righe/colonne libere, tramite **backtracking**.
4. Verifica: `victimArea` contiene **esattamente** vittima+assassino (2 occupanti).
5. Costruisci entità: ordina i sospetti per `(riga,colonna)` → iniziali `A,B,C…`,
   nomi `nameFor(i,rng)`, `isMurderer` per l'assassino; vittima `id:"victim"`,
   `initial:"V"`. Salva `m.entities`, `m.victimAreaId`. Ritorna `{entities,victimArea,analysis}`.

---

## 6. Catalogo indizi — `catalogFor(ctx, allowedTypes)`

Per ogni **sospetto** `e` (mai per la vittima) genera i candidati ammessi. Ogni
indizio ha: `type`, `subjectId`, `fact`, `category`, `diff`, `_text(ctx)` (testo
esatto sotto), `_cand(ctx)` (celle candidate, solo per gli **unari**; `null` per i
binari e per `ALONE`). Costruttori: `clue(type,subject,fact,category,diff,text,cand,targetId?)`
e `globalClue(type,fact,category,diff,text)` (`scope:"global"`). `id="c"+contatore`.

### 6.1 Unari (con `_cand` → pruning dei domini)

| type | cond. | cat | diff | testo (`_text`) | `_cand` |
|---|---|---|---|---|---|
| `IN_AREA` | sempre | area | 1 | `{name} si trovava in {areaName}.` | celle occupabili dell'area |
| `IN_ROW` | sempre | posizione | 1 | `{name} si trovava nella riga {row+1}.` | celle con quella riga |
| `IN_COL` | sempre | posizione | 1 | `{name} si trovava nella colonna {col+1}.` | celle con quella colonna |
| `EDGE` (`top`/`bottom`/`first`/`last`) | se su bordo | posizione | 1 | `…nella riga più in alto/in basso.` · `…nella prima/ultima colonna.` | celle del bordo |
| `NOT_EDGE_COL` | se col≠0 e ≠N-1 | posizione | 2 | `{name} non si trovava né nella prima né nell'ultima colonna.` | celle con col interna |
| `NOT_IN_AREA` | esiste altra area | area | 2 | `{name} non si trovava in {areaName(na)}.` | celle fuori da `na` |
| `ON_OBJECT` | su oggetto calpestabile | oggetto | 1 | `{name} si trovava su {withArticle(k)}.` | celle con oggetto `k` |
| `ONLY_SITTING` | su `chair` ed è l'unico | oggetto | 2 | `{name} era l'unica persona seduta su una sedia.` | celle con `chair` |
| `BESIDE_OBJECT` | per ogni tipo adiacente | oggetto | 1 | `{name} si trovava accanto a {withArticle(k)}.` | celle adiacenti a `k` |
| `NOT_BESIDE_OBJECT` | un tipo presente ma non adiacente a `e` | oggetto | 2 | `{name} non si trovava accanto a {withArticle(k)}.` | celle non adiacenti a `k` |
| `CORNER` | se angolo d'area | posizione | 2 | `{name} si trovava in un angolo della sua area.` | celle angolo |
| `NOT_CORNER` | se non angolo | posizione | 2 | `{name} non si trovava in un angolo della sua area.` | celle non‑angolo |

### 6.2 Relazionali (binari, `targetId=o.id`, `_cand=null` salvo indicato)

| type | cond. | diff | testo |
|---|---|---|---|
| `SAME_AREA` | stessa area di `o` | 2 | `{name} si trovava nella stessa area di {o.name}.` |
| `WITH_IN_AREA` | stessa area (`fact.areaId`) | 2 | `{name} era con {o.name} in {areaName}.` — `_cand`=celle dell'area; nel solver **restringe l'area di entrambi** |
| `DIFF_AREA` | area diversa | 3 | `{name} si trovava in un'area diversa da {o.name}.` |
| `CARDINAL` | sempre (mai stessa riga/col) | 3 | `{name} si trovava a {nord/sud}-{ovest/est} rispetto a {o.name}.` (`fact.dir`∈{NW,NE,SW,SE}) |
| `ROWS_OFFSET` | \|d\|≥1, d=o.row-e.row | 3 | `{name} si trovava esattamente {\|d\|} riga/righe a {nord se d>0/sud} di {o.name}.` (`fact.rowsNorth=d`) |
| `ALONE` | nessun altro sospetto nella sua area | 2 (relazione) | `{name} era da sola nella sua area.` |

### 6.3 Globali (expert)

| type | cond. | diff | testo | fact |
|---|---|---|---|---|
| `EMPTY_ROWS` | ≥1 riga vuota | 3 | `Ci sono esattamente {k} riga vuota/righe vuote (senza persone).` | `{k}` |
| `EMPTY_COLS` | ≥1 colonna vuota | 3 | `Ci sono esattamente {k} colonna vuota/colonne vuote (senza persone).` | `{k}` |
| `AREA_MIN_PEOPLE` | area con ≥3 persone | 3 | `In {areaName} c'erano almeno {n} persone.` | `{areaId,n}` |
| `AREA_PARITY` | area con ≥1 persona | 3 | `In {areaName} il numero di persone era pari/dispari.` | `{areaId,parity}` |

### 6.4 Difficoltà → tipi ammessi (`allowedForDifficulty`)

- **facile**: `IN_AREA, IN_ROW, IN_COL, EDGE, ON_OBJECT`.
- **medio**: facile + `BESIDE_OBJECT, SAME_AREA, WITH_IN_AREA, ALONE, CORNER`.
- **difficile**: medio + `NOT_IN_AREA, NOT_EDGE_COL, ONLY_SITTING, NOT_BESIDE_OBJECT,
  DIFF_AREA, CARDINAL, NOT_CORNER, ROWS_OFFSET`.
- **expert**: `null` = **tutti**, inclusi i globali/parità.

---

## 7. Solver — `solve(m, clues, ctxHint?, budget=250000)`

CSP a backtracking sulle sole entità, dominio iniziale = tutte le celle occupabili.

1. **Pre‑pruning unari:** per ogni indizio con `_cand`, interseca il dominio del
   soggetto con le celle candidate (cache `ctx._candCache[clue.id]`). Per
   `WITH_IN_AREA` restringi il dominio d'area **di soggetto e target**. Gli `ALONE`
   vanno in `aloneIds`; i binari in `binaryClues`; i globali in `globalClues`.
2. **Ricerca:** scegli l'entità non assegnata con **dominio minimo (MRV)**; prova
   le celle del dominio con riga/colonna non ancora usate; ad ogni assegnazione
   verifica i vincoli binari attivabili; **forward‑checking** (se un'entità resta
   senza celle → backtrack). Conta i nodi; se `nodes>budget` → `aborted=true` e
   stop.
3. **Foglia:** verifica vincoli globali, `ALONE`, e il **vincolo vittima**: l'area
   della vittima ha **esattamente 1 sospetto** e **2 occupanti** totali. Raccogli
   la soluzione; **fermati a 2** soluzioni.
4. Ritorna `{ solutions:[{id:{row,col}}], unique:boolean, aborted }`.

Test binari (`checkBinary`): `SAME_AREA/DIFF_AREA` per area; `WITH_IN_AREA` area
uguale; `CARDINAL` per segno di Δriga/Δcol; `ROWS_OFFSET` per `o.row-e.row`.

---

## 8. Generazione indizi — `generateClues(m,{difficulty,maxCluesPerCharacter=4,allowedTypes,preservedClues,rng})`

1. `catalog = catalogFor(ctx, Set(allowedTypes))`.
2. **Copertura:** garantisci ≥1 indizio per ogni sospetto (parti dai `preservedClues`).
3. **Aggiunta mirata all'unicità:** finché `solve` non è unico:
   - ottieni la seconda soluzione; scegli un indizio **vero** (soddisfatto dalla
     soluzione reale) ma **falso** sull'alternativa;
   - preferenze: (a) soggetto la cui posizione **differisce** tra le due soluzioni;
     (b) rispetta `maxCluesPerCharacter`; (c) **indizio costruttivo** anziché
     negativo debole (`DIFF_AREA`/`NOT_*`); (d) tipo non‑posizionale; (e) tipo meno
     usato;
   - se `solve` va in `aborted`, aggiungi un vincolo forte (`IN_ROW`/`IN_COL`).
4. **Minimizzazione:** rimuovi indizi **non spillati** finché resta unico e la
   copertura è preservata.
5. **Rotazione** per tipologia (varietà).
6. Ritorna `{ clues, unique, solutionsCount, ctx }`.

---

## 9. Eleganza — `eleganceScore(m,clues,ctx)` e `generateBestClues`

`reasonedSolution` (sez. 11) attacca `steps.meta = { total, singles, contras,
uniques, nClues, typeCount, catCount, suspects }`. Punteggio:

```
score = 100
score -= uniques*14           // passi risolti "per unicità" (poco spiegabili)
score -= contras*5            // per contraddizione verificata
variety = typeCount / max(1,nClues)
score += round((variety-0.4)*25)
if catCount>=3: score += 8
if catCount>=4: score += 4
perChar = nClues / max(1,suspects)
if perChar>2.2: score -= round((perChar-2.2)*10)
score = clamp(0..100)
label = score>=80?"Ottima":score>=65?"Buona":score>=45?"Discreta":"Scarsa"
```

**`generateBestClues(m,{tries=5,…})`**: genera `tries` set (RNG derivato diverso),
scarta i non unici, calcola l'eleganza, tiene il migliore; se nessuno è unico,
ripiega su una `generateClues` singola. Ritorna `{clues,ctx,unique,solutionsCount,elegance}`.

---

## 10. Validazione — `validateSolution` (UI) e pulsante Verifica

Controlli: presenza vittima e ≥1 sospetto; ogni entità su cella occupabile;
righe/colonne tutte distinte; area vittima con **esattamente 2** occupanti.
**Verifica** esegue `solve` con budget alto e riporta: unica e coerente / non unica
/ indizi non coerenti con le posizioni / verifica interrotta (griglia grande).

---

## 11. Soluzione ragionata — `reasonedSolution(m,clues,ctx)`

Risolutore **per propagazione** che spiega i passi **nell'ordine del ragionamento**:

- costruisce i domini come il solver; ciclo: scegli l'entità con dominio minimo,
  con priorità a chi è **collegato** a entità già posizionate e a chi ha indizi
  unari;
- **naked single** (dominio=1): "resta una sola cella…"; registra `kind:"single"`;
- altrimenti prova le alternative: se poche, cerca un **conflitto concreto**
  ("se X fosse in (r,c), Y resterebbe senza celle"); verifica se **tutte** le
  alternative sono impossibili col solver "appuntato" → `kind:"contra"`, altrimenti
  `kind:"unique"`;
- chiude con **la vittima** (unica riga/colonna libera) e **l'assassino** (unico
  sospetto nella sua area); nota finale sui vincoli globali se presenti;
- attacca `steps.meta` (conteggi). Ritorna un array di `{title,text}` con `.meta`.

---

## 12. GUI — struttura e comportamento

### 12.1 Tema (variabili CSS `:root`)
```
--ink:#141019; --desk:#1b1622; --panel:#221b2e; --panel2:#2b2238;
--line:#3a2f4d; --line2:#4a3d61;
--violet:#8a6bff; --violet-bright:#a98bff; --violet-dim:#5b48a8;
--evidence:#e4483d; --gold:#d8b25a; --paper:#f4efe4; --paper-line:#d9cfbb;
--text:#eee9f5; --text-dim:#b6acc7; --text-faint:#8a809c;
--ok:#4bbf83; --warn:#e0a94b; --bad:#e4483d;
--serif:"Iowan Old Style",Palatino,Georgia,serif;
--sans:system-ui,…; --mono:ui-monospace,Menlo,Consolas,monospace;
```
Estetica "fascicolo noir": pannelli scuri viola, griglia su **carta** chiara,
titoli serif.

### 12.2 Layout (3 colonne)
- **Header**: titolo "Murdoku — Studio".
- **Colonna sinistra** (`.col.left`), card:
  1. **Impostazioni** — cursore **Dimensione** `#size` (5–10, val 8); select
     **Difficoltà** `#difficulty` (facile/medio/difficile/expert); cursore **Max
     indizi per personaggio** `#maxPer` (2–6, val 4); cursore **Tentativi per «Più
     eleganti»** `#tries` (3–12, val 6). Ogni cursore ha uno `<span>` con il valore.
  2. **Strumenti mappa** — griglia `#tools` con 5 strumenti (sez. 12.4).
  3. **Palette** — `#objPickWrap` con `#palLabel`, `#objPalette`, `#palHint`
     (contenuto in base allo strumento, sez. 12.5).
  4. **AI / Narrazione** — `#aiTheme` (testo), `#aiTone` (select), pulsanti
     `#aiPrompt`, `#aiApply`, checkbox `#narrateToggle` (sez. 12.8).
  5. **Progetto** — `#clearElems`, `#clearAll` (doppio clic), hint autosave.
- **Colonna centro** (`.col.center`): `<svg id="board">` su carta + `#boardStatus`.
- **Colonna destra** (`.col.right`): **Verdetto** `#verdict`; **Fascicolo indizi**
  `#clues`; **Soluzione ragionata** `#steps`.
- **Barra azioni** (in header o sopra le colonne): pulsanti sez. 12.3.
- Due **modali**: `#mdModal` (mostra testo: prompt/config, con Copia/Scarica) e
  `#aiModal` (textarea editabile per incollare il JSON AI + "Applica"). `#toast`.

### 12.3 Barra azioni (pulsanti e id)
`#genMap` Genera mappa · `#genClues` Genera indizi · `#genBest` ✨ Più eleganti ·
`#autoFill` 🧩 Completa mappa · `#verify` Verifica · `#doPrint` Stampa PDF ·
`#genMd` 📋 Prompt LLM · `#copyCfg` 🗺️ Copia mappa · `#expJson` Esporta ·
`#impJson`/`#fileInput` Importa.

- **Genera mappa**: `generateMap` + `placeSolution` (ritenta fino a valido).
- **Genera indizi**: `generateClues` con difficoltà/maxPer/tipi correnti; mostra
  esito + eleganza; conserva gli spillati.
- **Più eleganti**: `generateBestClues` con `#tries`.
- **Completa mappa**: sulla mappa attuale (muri+oggetti) azzera i personaggi,
  `suspectCount=size-1`, `placeSolution`, poi `generateBestClues`. Se fallisce →
  messaggio "servono almeno due stanze / celle libere".
- **Verifica**, **Stampa** (sez. 12.7), **Prompt LLM**/**Copia mappa** (sez. 12.6),
  **Esporta/Importa** JSON.

### 12.4 Strumenti (`state.tool`)
`Muri` (`wall`), `Blocca cella` (`block`), `Oggetto` (`object`), **`Personaggi`**
(`character`), `Cancella` (`erase`). Selezionare uno strumento chiama
`setTool(tool)` → aggiorna classi `.active`, opacità palette (`1` per object/character,
`0.5` altrimenti), `renderPalette()`, `render()`.

- **Muri**: hitbox invisibili sugli spigoli; clic aggiunge/toglie il muro.
- **Blocca cella**: alterna `walkable`.
- **Oggetto**: posiziona/rimuove (toggle) il tipo selezionato.
- **Personaggi**: posiziona lo **specifico** personaggio selezionato (sez. 12.5).
- **Cancella (a livelli)**: 1° clic rimuove la **persona**; 2° l'**oggetto**;
  3° **sblocca** la cella.

### 12.5 Palette (`renderPalette`) — due modalità
- **Oggetti** (strumento Oggetto): griglia di icone; ogni voce mostra icona SVG,
  label, pallino verde (calpestabile) / grigio (ostacolo). Clic → seleziona +
  passa a strumento Oggetto.
- **Personaggi** (strumento Personaggi): elenca **tutti i personaggi possibili**
  della griglia = sospetti `A..(lato-1)` + **vittima**. Ogni voce: icona (cerchio
  viola con la lettera; vittima = contorno rosso tratteggiato con ✖), label,
  pallino **verde** se già posizionato. Clic → seleziona quello specifico.
  Posizionamento (`placeCharacter`): mette/**sposta** quel personaggio (identità
  fissa: "C" resta "C"); ri‑clic sulla sua cella lo rimuove; cella occupata da un
  altro → avviso. `renderPalette()` è richiamata dopo ogni modifica ai personaggi.

`recomputeEntities()` **conserva le iniziali** (identità), assegna nomi mancanti
(deterministici in manuale) e ricalcola l'assassino (unico sospetto nell'area
vittima); non riordina/rietichetta.

### 12.6 Aspetto griglia (`render`) + interazioni
- Sfondo carta; ogni **area** ha colore univoco (HSL a passo aureo su `visualArea`);
  celle bloccate scure; **muri spessi** `#2a2130` (linee) + bordo esterno; etichette
  d'area centrate; numeri riga/colonna.
- Sospetti = cerchio pieno (`#5b48a8`, assassino `#e4483d`) con iniziale bianca;
  vittima = contorno rosso tratteggiato con ✖. **Tutte le entità in un gruppo
  `opacity="0.6"`** (si vede l'oggetto sotto).
- **`pointer-events="none"`** su cerchi entità, gruppo muri, bordo, numeri, glifi
  oggetti: il clic arriva sempre alla cella (rettangolo `.cell` con `data-r,data-c`).
- Le persone possono stare **sopra** un oggetto calpestabile (entrambi visibili).
- **Rinomina area**: con strumento Muri, cliccando una cella si popola un campo per
  rinominare l'area di quella cella.

### 12.7 Stampa (`doPrint`) — 2 pagine A4 (CSS `@page`)
Pagina 1 **Enigma**: titolo caso, sottotitolo/intro, mappa **senza persone**,
indizi raggruppati per personaggio + globali. Pagina 2 **Soluzione**: mappa **con
persone**, ragionamento. Colori d'area unici. Se la **Narrazione AI** è attiva,
usa titolo/intro/indizi/ragionamento **narrati** (sez. 12.8).

### 12.8 AI / Narrazione (flusso paste‑back, offline‑safe)
Principio: il **motore** è l'unica fonte di verità; l'AI **traduce** solo il
linguaggio; tutto **degrada** al testo canonico.

- **`#aiPrompt` (📝 Prompt abbellimento)** → `openMdModal` con un prompt che fornisce
  tema/tono, personaggi (iniziale→nome), aree (id→nome), **indizi con testo
  originale**, **passi della soluzione**, e chiede **solo JSON**:
  ```json
  { "caseTitle":"…","intro":"…",
    "characters":{"A":"Nome",…,"victim":"Nome"},
    "areas":{"0":"Nome",…},
    "clues":{"c12":"riscrittura",…},
    "solution":["passo 0",…] }
  ```
  Regole nel prompt: non cambiare i fatti; **numeri come cifre**; nomi coerenti;
  solo JSON.
- **`#aiApply` (📥 Applica risposta AI)** → `#aiModal` (textarea); "Applica"
  chiama `applyAiJson(text)`:
  1. **Nomi** (caso/personaggi/aree) applicati direttamente (etichette, la logica
     non cambia; il testo canonico li adotta);
  2. per ogni **indizio riscritto** → **`checkReferents(clue,text,ctx)`**: il testo
     deve contenere i nomi (soggetto, eventuale target), il nome dell'area (se
     `fact.areaId`), la label dell'oggetto (se `fact.objectKind`) e **ogni numero**
     (`row+1`,`col+1`,`|rowsNorth|`,`k`,`n`) **come cifra**. Se passa → ✓ e si usa;
     altrimenti → **fallback** al canonico, marcato ⚠︎;
  3. **soluzione narrata** applicata solo se l'array ha **lo stesso numero di passi**.
  Salva `state.narration`, attiva `state.narrated`.
- **`#narrateToggle`** commuta indizi/soluzione/stampa tra **Logico** e **Narrato**.
- La generazione di nuovi indizi azzera la narrazione (id non più validi).

### 12.9 Export/Prompt testuali
- **`#genMd` (Prompt LLM)**: prompt che chiede a un LLM di **verificare** la bontà
  della soluzione ragionata (regole + mappa + indizi + soluzione + chiave).
- **`#copyCfg` (Copia mappa)**: descrizione Markdown della **configurazione**
  (aree con celle, muri espliciti come coppie, oggetti con griglia+legenda+celle
  bloccate, personaggi). Non richiede indizi.
- Entrambi usano `#mdModal` con **Copia negli appunti** e **Scarica .md**.

### 12.10 Verdetto e Fascicolo indizi
- **Verdetto**: stato (`ok`/`warn`/`bad`) con esito unicità, assassino e riga
  **Eleganza X/100 (etichetta) · N dirette, N per contraddizione, N per unicità**.
- **Fascicolo indizi**: raggruppato per personaggio (badge iniziale, assassino in
  rosso) + "Vincoli globali"; ogni riga: numero, testo (canonico o narrato, con ✓/⚠︎),
  categoria, **📌 spilla** (conserva alla rigenerazione) e **✕ rimuovi**.

---

## 13. Import/Export e persistenza
- **JSON** (`serialize`/`deserialize`): dimensione, celle (`walkable`,`object`),
  muri, `areaNames`, entità (con identità e nomi), indizi come `{id,type,text}`.
- **Autosave** in `localStorage` ad ogni modifica; `restore()` all'avvio (in
  `try/catch`, fallback alla mappa d'esempio).

---

## 14. Criteri di accettazione (invarianti)
1. Ogni puzzle generato/completato ha **soluzione unica** verificata dal solver.
2. Le stanze dipendono **solo dai muri**; ostacoli/celle bloccate non le dividono.
3. Entità = **lato griglia** (N−1 sospetti + vittima **forzata**); vittima **sola
   con l'assassino**.
4. La soluzione ragionata è nell'**ordine** del ragionamento.
5. La **Narrazione AI** non altera mai la logica: indizi non conformi ricadono sul
   canonico; l'unicità è sempre verificata sui **testi canonici**.
6. App **offline**, in **un unico file**, senza CDN.

---

## 15. API pubblica del motore (`window.MurdokuEngine`)
`makeRng, ri, pick, shuffle · OBJECT_LIB, objLabel, objWalkable, ALPHABET, NAMES,
nameFor · emptyMap, cellAt, isOccupiable, hasWall, wallKey, key, computeAreas,
areaIdAt · generateMap, placeSolution, buildContext, catalogFor, clueText ·
solve, generateClues, generateBestClues, eleganceScore, reasonedSolution ·
suspects, entArea, areaName`.

---

## 16. Collaudo consigliato (Node headless)
- Generare 40–50 puzzle per lati 5–8 e verificarne **unicità** con `solve`
  (budget alto); idem lati 7–10 con difficoltà expert.
- Verificare che la **soluzione reale** soddisfi sempre tutti gli indizi.
- Verificare `eleganceScore`/`generateBestClues` (il set migliore ≥ media).
- Interfaccia con **jsdom**: generazione, personaggi, cancella a livelli, AI
  paste‑back (con un indizio manomesso → fallback), stampa.
