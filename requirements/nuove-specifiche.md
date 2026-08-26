# Murdoku Studio — Nuove Specifiche e Differenze

> Questo documento tiene traccia di tutte le **nuove funzionalità**, **modifiche**, **estensioni** e **differenze** introdotte rispetto alla specifica tecnica di partenza ([`specifiche-murdoku-dettagliate.md`](./specifiche-murdoku-dettagliate.md)).
>
> **Regola di manutenzione**: Questo file viene aggiornato puntualmente a ogni modifica al codice o all'architettura, mantenendo il contenuto sempre allineato e coerente con lo stato corrente dell'applicazione.

---

## 📌 Stato Iniziale di Partenza (Baseline)

L'applicazione di partenza corrisponde fedelmente alle specifiche descritte in [`specifiche-murdoku-dettagliate.md`](./specifiche-murdoku-dettagliate.md):
- File unico standalone [`murdoku-studio.html`](../murdoku-studio.html) offline, senza dipendenze né CDN.
- Architettura a 2 script (motore puro `MurdokuEngine` compatibile sia con browser che con Node.js + GUI SVG).
- Griglia 5–10, regole di delimitazione stanze solo tramite muri, piazzamento *n-rooks* con vittima forzata e sola con l'assassino.
- Catalogo indizi unari, binari, relazionali e globali per le 4 difficoltà (`facile`, `medio`, `difficile`, `expert`).
- Risolutore CSP con forward-checking e MRV, calcolo dell'eleganza (0–100) e generazione della soluzione ragionata.
- Suite di test automatizzati per il motore in [`tests/engine.test.js`](../tests/engine.test.js).

---

## 📝 Registro delle Differenze ed Estensioni

### 1. Titolo della Mappa e Naming Convenzionale degli Export
- **Nuovo campo `#mapTitle`**: presente nella card *Fascicolo & Mappa* della colonna sinistra (con placeholder es. `"Delitto a Villa Torlonia..."`).
- **Sincronizzazione**:
  - Il titolo viene salvato in `state.mapTitle` e memorizzato nell'oggetto mappa serializzato (`title`).
  - Persistito in `localStorage` sia nell'autosave (`murdoku:autosave`) sia nella libreria mappe.
  - Sincronizzato con la narrazione AI: se l'AI risponde con `caseTitle`, il campo `#mapTitle` adotta automaticamente il titolo narrativo.
- **Propagazione dinamica ai file esportati**:
  - Creata funzione `slugify(text)` e `getExportFilename(suffix, ext)` per generare nomi file puliti (senza accenti e caratteri speciali).
  - **Export JSON (`#expJson`)**: genera `<slug-titolo>.json` (fallback `murdoku.json`).
  - **Prompt LLM Markdown (`#genMd`)**: scarica `<slug-titolo>-prompt-llm.md`.
  - **Configurazione Mappa Markdown (`#copyCfg`)**: scarica `<slug-titolo>-config-mappa.md`.
  - **Prompt Abbellimento AI (`#aiPrompt`)**: scarica `<slug-titolo>-prompt-ai.md`.
  - **Stampa PDF (`#doPrint`)**:
    - Il titolo del documento (`document.title`) viene impostato temporaneamente a `<slug-titolo>-fascicolo`, in modo tale che il browser suggerisca automaticamente il nome file corrispondente al momento del salvataggio in PDF.
    - I fogli A4 (Pagina 1 Enigma e Pagina 2 Soluzione) riportano nell'intestazione il titolo personalizzato della mappa.

### 2. Libreria Mappe Salvate (Local Library & UI)
- **Persistenza dedicata**: salvataggio su chiave `localStorage` `murdoku:saved_maps` come array di mappe archiviate.
- **Metadati memorizzati per ogni mappa**:
  - `id`: identificativo univoco (`map_<timestamp>_<rand>`).
  - `title`: titolo assegnato alla mappa.
  - `savedAt`: timestamp ISO dell'ultimo salvataggio/aggiornamento.
  - `size`: dimensione griglia (es. `8×8`).
  - `suspects`: numero di sospetti posizionati.
  - `cluesCount`: numero di indizi generati e presenti.
  - `elegance`: punteggio di eleganza (0–100) se calcolato.
  - `data`: stato completo serializzato (celle, muri, oggetti, personaggi, indizi, tema e narrazione).
- **Controlli e Interfaccia Utente**:
  - **Header & Sidebar**: pulsante `📂 Mappe (<N>)` con badge conteggio dinamico per aprire il catalogo.
  - **Pulsante `💾 Salva mappa`**: salva o aggiorna la mappa corrente nella libreria.
  - **Modale `#savedMapsModal`**:
    - Elenco interattivo di tutte le mappe salvate con anteprima dei metadati e badge `IN USO` per la mappa attiva.
    - **Pulsante `📂 Carica`**: riapre istantaneamente la mappa nella griglia ripristinando ogni elemento (compresi indizi e narrazione).
    - **Pulsante `💾 Sovrascrivi`**: aggiorna la mappa salvata selezionata con lo stato corrente dell'editor.
    - **Pulsante `🗑️ Elimina`**: rimozione sicura a doppio clic (protezione con timeout di 3 secondi, nessun popup `confirm()`).
    - **Pulsante `💾 Salva come nuova mappa`**: crea una nuova voce separata nell'archivio.

### 3. Personalizzazione Pavimenti e Pattern Grafici delle Aree
- **Modello Dati (`m.areaFloors`)**:
  - Dizionario `m.areaFloors = { [areaId]: { type: 'pattern' | 'color', value: string } }` associato all'oggetto mappa.
  - Salvato e ripristinato in `serialize()`, `deserialize()`, `murdoku:autosave` e `murdoku:saved_maps`.
  - Se un'area non ha uno stile esplicito, viene applicato il colore automatico di default basato sulla distribuzione aurea `areaColor(id)`.
- **Pattern Grafici Vettoriali (SVG Standard Inline)**:
  - Definiti nativamente nei `<defs>` SVG (senza dipendenze esterne):
    - **🪵 Pavimento (`pattern-pavimento`)**: texture parquet a listoni sfalsati in legno caldo con fughe e venature sottili per interni.
    - **🌿 Prato (`pattern-prato`)**: sfondo verde erba con fili d'erba e ciuffi stilizzati.
    - **🏜️ Terra (`pattern-terra`)**: sfondo ocra/argilla con ciottoli, zolle e linee di terreno.
    - **🌊 Mare (`pattern-mare`)**: sfondo azzurro oceanico con onde e riflessi d'acqua bianchi.
    - **🏖️ Spiaggia (`pattern-spiaggia`)**: sfondo sabbia dorata con dune ondulate e granelli.
    - **🛣️ Asfalto (`pattern-asfalto`)**: texture stradale grigio scuro con granelli di asfalto sparsi.
    - **🏁 Mattonelle (`pattern-mattonelle`)**: classico pavimento da appartamento a scacchi bianchi e neri.
    - **🧊 Ghiaccio (`pattern-ghiaccio`)**: superficie azzurro ghiaccio con riflessi e spaccature superficiali.
  - Perfetta visibilità garantita sopra le texture per oggetti calpestabili, ostacoli, lettere e glifi dei personaggi.
- **Colori per Interni e Tinte Personalizzate**:
  - Palette di tinte unite a tema arredo/interni: Parquet/Legno (`#d2b48c`), Cotto (`#e08d79`), Marmo chiaro (`#e8e4dc`), Piastrelle azzurre (`#a8d5e2`), Moquette noir (`#caa8dc`), Salvia (`#bcd4c4`).
  - Color picker HTML5 `<input type="color">` per la selezione di qualsiasi colore esadecimale.
- **Interfaccia Utente (UI)**:
  - Nuova card **Pavimento & Stile Aree** nella colonna sinistra:
    - Indicatore dell'area attiva selezionata (`#activeAreaLabel`), sincronizzato al clic su qualsiasi cella della mappa.
    - Griglia interattiva con anteprime grafiche in miniatura per i 5 pattern (Pavimento, Prato, Terra, Mare, Spiaggia).
    - Palette di campioni colore per interni e selettore colore libero.
    - Pulsante `↺ Colore predefinito dell'area` per rimuovere la personalizzazione e tornare al colore calcolato.
- **Supporto Stampa PDF**:
  - I pattern e i colori personalizzati vengono iniettati e renderizzati ad alta risoluzione anche nell'SVG per la stampa (`boardSVGForPrint`).

### 4. Estensione Oggetti Balneari e Marittimi (Calpestabili e Ostacoli)
- **Oggetti Calpestabili (`walkable: true`)**:
  - **Ombrellone (`umbrella`)**: `"un ombrellone"`, glifo SVG a spicchi bicolori e puntale (codice Markdown: `om`).
  - **Lettino da spiaggia (`sunbed`)**: `"un lettino da spiaggia"`, glifo SVG tela azzurra con cuscino e telaio (codice Markdown: `lt`).
  - **Tavola da surf / SUP (`surfboard`)**: `"una tavola da surf"`, glifo SVG tavola affusolata con striscia centrale e pinna (codice Markdown: `sb`).
  - **Passerella (`walkway`)**: `"una passerella"`, glifo SVG a doghe di legno con chiodi (codice Markdown: `ps`).
  - **Pedalò (`pedalo`)**: `"un pedalò"`, glifo SVG a doppio scafo con volante e sedute (codice Markdown: `pd`).
  - **Pontile / Molo (`dock`)**: `"un pontile"`, glifo SVG in legno con bitte d'attracco (codice Markdown: `pt`).
- **Ostacoli e Strutture da Spiaggia (`walkable: false`)**:
  - **Cabina (`cabin`)**: `"una cabina"`, glifo SVG a righe bicolori con tetto a capanna (codice Markdown: `CB`).
  - **Torretta bagnino (`lifeguard`)**: `"una torretta bagnino"`, glifo SVG con sedia di salvataggio, tettoia e salvagente (codice Markdown: `LG`).
  - **Palma (`palm`)**: `"una palma"`, glifo SVG palma tropicale con 5 fronde e noci di cocco (codice Markdown: `PM`).
  - **Doccia da spiaggia (`shower`)**: `"una doccia"`, glifo SVG pedana in legno con colonna e getti d'acqua (codice Markdown: `DC`).
  - **Chiringuito (`kiosk`)**: `"un chiringuito"`, glifo SVG bancone bar con tetto in paglia e cocktail (codice Markdown: `KS`).
  - **Rete da volley (`volleyball`)**: `"una rete da volley"`, glifo SVG pali con rete e pallone da beach volley (codice Markdown: `VL`).
  - **Borsa frigo (`cooler`)**: `"una borsa frigo"`, glifo SVG borsa termica portatile con maniglia (codice Markdown: `BF`).
- **Grammatica e Deduzione**: Tutti gli oggetti sono registrati in `OBJ_ART` e supportati nella generazione automatica di indizi logici di sovrapposizione e adiacenza.

### 5. Legenda Oggetti ed Elementi nell'Export PDF
- **Inclusione automatica nei fogli A4 stampati**:
  - Quando si attiva la stampa o l'export in PDF (`#doPrint`), la funzione `buildPrintObjectsLegend(m)` scansiona la mappa per identificare tutti gli oggetti e gli elementi speciali effettivamente utilizzati (tavolo, sedia, letto, telo da mare, ombrellone, lettino, scoglio, boa, ecc.) e le eventuali celle bloccate.
- **Rappresentazione ad alta leggibilità**:
  - Per ciascun elemento presente sulla mappa viene generata una voce nella legenda con:
    - Glifo vettoriale SVG dedicato in miniatura con sfondo chiaro e bordo di contrasto.
    - Nome dell'oggetto (es. **ombrellone**, **lettino da spiaggia**, **sedia**).
    - Tipologia di accessibilità: `(calpestabile)` vs `(ostacolo)` / `(non calpestabile)`.
- **Posizionamento**:
  - Inserita sia nel Foglio 1 (Enigma) subito sotto la griglia di gioco (per consentire al giocatore di decifrare immediatamente i simboli della mappa durante la lettura degli indizi) sia nel Foglio 2 (Soluzione).

### 6. Layout A4 di Stampa a Due Colonne (Mappa a Sinistra, Indizi a Destra)
- **Struttura a 2 Colonne (`.p-body`, `.p-left`, `.p-right`)**:
  - **Colonna Sinistra (`.p-left`)**: ospita la mappa SVG scalata in modo responsivo ad alta definizione e la relativa legenda degli elementi/oggetti utilizzati.
  - **Colonna Destra (`.p-right`)**: ospita la lista formattata degli indizi logici suddivisi per sospetto e i vincoli globali (nel Foglio 1 Enigma) e il ragionamento deduttivo passo-passo (nel Foglio 2 Soluzione).
- **Ottimizzazione dello Spazio su Foglio A4**:
  - Evita lo scorrimento verticale eccessivo e permette di avere mappa, legenda e indizi comodamente affiancati nella stessa pagina stampata o salvata in PDF.

### 7. Categorizzazione Oggetti con Menu a Tendina (UI)
- **Selettore Categoria (`#objCategory`)**:
  - Posizionato direttamente sopra la palette oggetti nella sidebar degli strumenti.
  - Permette di filtrare dinamicamente la lista degli oggetti visualizzati per evitare una palette eccessivamente lunga.
- **Categorie Disponibili**:
  - `all`: *Tutti gli oggetti*
  - `beach`: *🏖️ Spiaggia & Mare* (ombrellone, lettino, telo da mare, materassino, tavola da surf, passerella, pedalò, pontile, barca, cabina, torretta bagnino, palma, doccia, chiringuito, rete da volley, borsa frigo, scoglio, boa)
  - `house`: *🏠 Casa & Interni* (sedia, tavolo, letto, tappeto, libreria, scaffale, TV, pianta)
  - `nature`: *🌳 Natura & Esterni* (albero, palma, fiori, statua, masso, scoglio, auto)
  - `walkable`: *🟢 Solo calpestabili*
  - `obstacle`: *🔴 Solo ostacoli*
- **Sincronizzazione Dinamica**:
  - Al cambio di selezione la palette si aggiorna istantaneamente mostrando solo gli oggetti pertinenti con i relativi glifi SVG e indicatori di calpestabilità.
  - Per renderne immediatamente riconoscibile la natura, ogni oggetto nella palette presenta ora la dicitura `(c)` per oggetti calpestabili e `(nc)` per ostacoli non calpestabili, oltre a un puntino indicatore rosso per gli ostacoli.
  - Quando è attivo lo strumento "Personaggi", il menu a tendina viene nascosto automaticamente per lasciare spazio all'elenco dei sospetti.

### 8. Ridefinizione Geometrica Pura di "Angolo della Stanza" (`isAreaCorner`)
- **Differenza rispetto alla specifica iniziale**:
  - Nella specifica di partenza, un "angolo" veniva calcolato in base al conteggio dei soli vicini calpestabili/occupabili (`isOccupiable`), generando anomalie qualora oggetti non calpestabili (tavoli, statue, ecc.) fossero posizionati in mezzo alla stanza o creando falsi angoli in corridoi a fondo cieco.
- **Nuova Regola Geometrica Rigorosa**:
  - Una cella è considerata **in un angolo** se e solo se **tocca esattamente 2 muri perimetrali (o bordi della griglia) ortogonali** (uno verticale — Nord o Sud — e uno orizzontale — Ovest o Est).
  - La presenza di oggetti, arredi, mobili calpestabili o ostacoli nella cella o nelle celle adiacenti non influisce minimamente sulla qualifica di angolo.
- **Casi di esclusione espliciti**:
  - Celle lungo un singolo muro (1 solo muro).
  - Celle al centro della stanza (0 muri).
  - Corridoi o passaggi tra pareti parallele (2 muri paralleli Nord/Sud o Ovest/Est).
  - Estremità cieche di corridoi (3 muri) o stanze monocealla 1×1 (4 muri).

### 9. Riferimenti Geografici Limitati ai Punti Cardinali Puri (`CARDINAL`)
- **Differenza rispetto alla specifica iniziale**:
  - Nella specifica iniziale, il generatore di indizi `CARDINAL` produceva direzioni composte diagonali (`fact.dir` ∈ `{NW, NE, SW, SE}`) con formulazioni come `"{name} si trovava a {nord/sud}-{ovest/est} rispetto a {o.name}."` (es. *"Elio si trovava a sud-ovest rispetto a Bianca."*).
- **Nuova Regola per i Riferimenti Geografici**:
  - Le direzioni cardinali/spaziali pure (assi cartesiani) sono ora limitate a: **Nord**, **Sud**, **Destra**, **Sinistra** (`fact.dir` ∈ `{N, S, W, E}`).
  - Non vengono più generati indizi con direzioni diagonali/intercardinali (come *sud-ovest*, *nord-est*, ecc.).
- **Formulazione e Semantica degli Indizi Generati**:
  - **Asse Verticale**:
    - `N` (Nord): `"{name} si trova a nord rispetto a {o.name}."` (vincolo logico: `row(name) < row(o.name)`).
    - `S` (Sud): `"{name} si trova a sud rispetto a {o.name}."` (vincolo logico: `row(name) > row(o.name)`).
  - **Asse Orizzontale**:
    - `W` (Sinistra): `"{name} si trova a sinistra rispetto a {o.name}."` (vincolo logico: `col(name) < col(o.name)`).
    - `E` (Destra): `"{name} si trova a destra rispetto a {o.name}."` (vincolo logico: `col(name) > col(o.name)`).
- **Compatibilità con Solver e Soluzione Ragionata**:
  - `checkBinary` valuta direttamente il semipiano corrispondente (riga minore/maggiore o colonna minore/maggiore).
  - La soluzione ragionata e la narrazione integrano i vincoli cardinali puri garantendo unicità e coerenza deduttiva.

---

### 10. Adeguamento Larghezza Colonne Layout Interfaccia
- **Modifica della griglia CSS principale (`main { display: grid }`)**:
  - La larghezza della colonna di sinistra (Strumenti e Oggetti) è stata equiparata a quella di destra, portandola a `420px` (originariamente 260px) per fornire la massima simmetria e spazio per il layout della palette e la categorizzazione.
  - La larghezza della colonna di destra (Indizi e Ragionamento) è stata incrementata da `340px` a `420px` per permettere una lettura più agevole dei testi degli indizi e ridurre il ritorno a capo eccessivo.
  - La colonna centrale (Mappa) mantiene la flessibilità dinamica (`1fr`) adattandosi allo spazio rimanente.

---

### 11. Finestre e Indizi di Posizione (FRONT_WINDOW)
- **Nuovo Elemento Strutturale ("Finestra")**:
  - Le finestre possono essere posizionate **solo sopra muri già esistenti** usando lo strumento **Finestre** (`🖼️ Finestre`).
  - Quando una finestra viene rimossa, il muro strutturale sottostante non viene eliminato, rimanendo intatto. Inversamente, l'eliminazione di un muro eliminerà automaticamente anche la finestra posta su di esso.
  - A livello visivo sull'editor e nella stampa PDF, le finestre sono modellate come **profili stilizzati sovrapposti ai muri**: sono leggermente più spesse del muro e presentano un colore azzurro vetro (`#a3d1f0`) con un perimetro a contrasto che le rende un chiaro dettaglio architettonico.
- **Nuovo Indizio Unario `FRONT_WINDOW`**:
  - Introdotto l'indizio `"di fronte alla finestra"` (difficoltà **medio** e **difficile**).
  - Un sospetto è considerato "di fronte a una finestra" se la cella su cui si trova ha almeno uno dei suoi 4 lati (Nord, Sud, Est, Ovest) delimitato da una finestra.
  - Testuale finale: `"[Nome] si trovava di fronte a una finestra."`

### 12. Tratti Visivi e Fisici
- **Modello Dati**:
  - Il dizionario dei nomi (`NAMES`) include ora il genere (`M`/`F`).
  - Durante il piazzamento (`placeSolution`), ai personaggi vengono assegnati casualmente i tratti: sesso (basato sul nome), cappello (`hasHat`) e occhiali (`hasGlasses`).
- **Resa Visiva (SVG)**:
  - Sulla mappa (e per la stampa), i tratti fisici sono stati rimossi per mantenere una pulizia grafica estrema: i personaggi sono rappresentati unicamente da un cerchio colorato con la loro iniziale. I dettagli fisici restano visibili solo testualmente nel pannello sinistro e nei tooltip al passaggio del mouse.
  - La palette dei personaggi in UI mostra i tratti nel testo descrittivo.
- **Configurazione**:
  - Aggiunto in UI uno slider `Max indizi indiretti` (da 0 a 3) configurabile dall'utente.

### 13. Relazione Direzionale tra Personaggi ed Oggetti (`OBJECT_DIR`)
- **Nuova Regola di Adiacenza**:
  - Inserito il nuovo indizio `OBJECT_DIR` (difficoltà **difficile** ed **expert**).
  - Determina la posizione precisa di un sospetto rispetto a un oggetto: *"esattamente a nord"*, *"esattamente a sud"*, *"esattamente a destra"*, *"esattamente a sinistra"*.
- **Comportamento CSP**:
  - Funziona come un vincolo unario che filtra in anticipo (nel `_cand`) il dominio delle celle disponibili, cercando la presenza dell'oggetto richiesto nella cella adiacente corrispondente.

### 14. Indizi Indiretti (Mascheramento Identità)
- **Logica e Formulazione**:
  - Permette la creazione di indizi anonimizzati (es. "Una donna si trovava nella cucina" o "Una persona con il cappello era accanto al tavolo").
  - Si applica mascherando il soggetto (nome esplicito) di un normale indizio unario o binario con un tratto posseduto da quel soggetto (genere, cappello, occhiali).
- **Integrazione Architetturale**:
  - Strutturati internamente come vincoli di natura esistenziale (tipo `INDIRECT`, categoria `globale`).
  - Vengono valutati in `checkGlobalClue` che verifica che *almeno una* persona con il tratto richiesto soddisfi l'indizio base mascherato all'interno della disposizione proposta.
  - Il numero di indizi indiretti generati rispetta rigorosamente il tetto massimo impostato tramite lo slider UI (`maxIndClues`).

### 15. Dinamica "Alone with a [Tratto]" (`ALONE_WITH_TRAIT`)
- **Nuova Regola di Relazione**:
  - Inserito l'indizio `ALONE_WITH_TRAIT` (difficoltà **difficile** ed **expert**), ispirato alle meccaniche avanzate dei Murdoku originali (es. *"She was alone with a man"*).
- **Semantica**:
  - Un personaggio si trova in un'area insieme a **esattamente un'altra persona** (quindi 2 persone in totale nell'area), e quest'altra persona possiede un tratto specifico (uomo/donna, con cappello, con occhiali).
- **Comportamento CSP**:
  - Il motore scansiona la disposizione completa corrente, verifica che nella stanza ci siano esattamente 2 sospetti, e che il compagno del soggetto possieda il tratto descritto.
  - La soluzione ragionata si affida al controllo formale "per assurdo" del solver (pinning logico) qualora questo indizio diventi la chiave deduttiva, evitando di rompere la struttura unaria/binaria base.

### 16. Riallineamento Difficoltà Indizi
- **Analisi e Conformità agli Originali**:
  - In seguito a un'analisi dei puzzle originali (es. *Netflix and Kill*, *A Walk in the Park*), è emerso che gli autori originali utilizzano indizi di relazione spaziale e di unicità anche nei livelli base.
- **Modifiche Effettuate**:
  - `BESIDE_OBJECT` ("Accanto a un oggetto") è stato spostato dalla difficoltà **Medium** alla difficoltà **Easy**.
  - `ALONE` ("Da solo nella stanza") è stato spostato dalla difficoltà **Medium** alla difficoltà **Easy**.
  - `ONLY_SITTING` ("L'unica persona seduta") è stato spostato dalla difficoltà **Hard** alla difficoltà **Easy**.
  - Di conseguenza, anche il file `riepilogo_indizi.md` è stato aggiornato per riflettere questi nuovi raggruppamenti.

### 17. Aggiornamento Default UI Generazione Indizi
- **Tentativi per «Più eleganti»**: Il default è stato alzato da `6` a `12` per assicurare di base una maggiore qualità formale e logica al set di indizi, a costo di un tempo di generazione marginalmente più lungo.
- **Max indizi indiretti**: Il default è stato portato da `0` a `1` per introdurre subito la meccanica del mascheramento dei tratti nei livelli di difficoltà più avanzati (Hard/Expert) senza forzare l'utente ad attivarlo manualmente.

### 18. Dimensione Minima delle Stanze nella Mappa Casuale
- **Vincolo Dimensionale**: Durante la generazione di una nuova mappa casuale (pulsante `Nuova mappa casuale`), l'algoritmo di partizionamento BFS garantisce ora che **nessuna stanza (area) abbia una dimensione inferiore a 3 celle**. Se la mappa risulta troppo affollata per soddisfare questo requisito, l'algoritmo ridurrà dinamicamente il numero totale di stanze fino a trovare una distribuzione valida. Questo evita stanze "corridoio" di 1-2 celle in cui è impossibile disporre logicamente oggetti e sospetti.

### 19. Tooltip Oggetti in Mappa
- **Indicatore di Calpestabilità**: Il tooltip che appare al passaggio del mouse sugli oggetti in mappa mostra ora, oltre al nome dell'oggetto, anche un indicatore della sua natura fisica: `(c)` se calpestabile (es. tappeto, divano) oppure `(nc)` se non calpestabile/ostacolo (es. tavolo, statua).
### 20. Stile Narrativo Indizi e Aggiornamento Grafico
- **Tempi Verbali**: Tutti gli indizi (sia posizionali, relazionali che globali) sono stati riscritti passando sistematicamente dal tempo passato (es. "si trovava", "era", "condivideva") al **tempo presente** (es. "si trova", "è", "condivide"), rendendo la lettura più immediata e conforme allo stile dei puzzle investigativi classici.
- **Modifica Icona Ombrellone**: La resa SVG dell'ombrellone (`umbrella`) è stata riprogettata passando dalla precedente prospettiva dall'alto a una più elegante **vista laterale** (palo centrale, cupola a spicchi profilati e piccola ombra a terra).

### 21. Generalizzazione Indizio ONLY_ON_OBJECT
- **Da ONLY_SITTING a ONLY_ON_OBJECT**: L'indizio che precedentemente identificava in modo rigido l'unica persona seduta su una sedia (`ONLY_SITTING`) è stato generalizzato in `ONLY_ON_OBJECT`. Adesso l'algoritmo rileva correttamente se un personaggio è l'unica persona a trovarsi sopra a qualsiasi tipo di oggetto calpestabile presente sulla mappa (es. "è l'unica persona su un tappeto", "è l'unica persona sdraiata su un lettino"), offrendo molta più varietà logica ai livelli base e medi. Il riepilogo indizi è stato aggiornato di conseguenza.

### 22. Motore Deduttivo: Nuovi Indizi Avanzati (High / Expert)
Sono stati introdotti 5 nuovi tipi di logiche deduttive estremamente avanzate, ispirate alle mappe ufficiali `High` ed `Expert`:
- **Operatori "OR"**: `ON_OBJECT_OR`, `BESIDE_OBJECT_OR`, `IN_COL_OR` inseriscono ambiguità limitata fornendo un'alternativa ("su un tappeto o su una sedia").
- **Offset di Colonne (`COLS_OFFSET`)**: Completa la bidimensionalità affiancandosi a `ROWS_OFFSET` ("esattamente 2 colonne a sinistra di X").
- **Proiezioni Spaziali "Qualcuno" (`SOMEONE_OFFSET_ON`, `SOMEONE_OFFSET_BESIDE`)**: L'indizio proietta un vincolo spaziale in cui si asserisce la presenza anonima di un personaggio su (o accanto a) un oggetto.
- **Co-presenza Dinamica (`TRAIT_ON_OBJECT_IN_AREA`, `ALONE_WITH_PERSON`)**: Asserzioni precise sulla popolazione dell'area ("nella sua area c'è un uomo su un letto", "è da solo nella sua area con Y").

Tutti gli indizi sono stati integrati nei rispettivi insiemi di difficoltà, consentendo al motore di generare combinazioni estremamente raffinate e aderenti al design dei puzzle originali.

### 23. Avatar Vettoriali Generativi dei Personaggi
- **Ritratti Dinamici SVG**: Il motore renderizza ora dei ritratti procedurali (avatar) per ogni sospettato, utilizzando il formato vettoriale SVG puro.
- I ritratti si adattano automaticamente alle caratteristiche estratte casualmente per il personaggio:
  - **Genere**: Capelli corti per gli uomini, lunghi a caschetto per le donne.
  - **Occhiali**: Lenti tonde sovrapposte al viso se `hasGlasses` è true.
  - **Cappello**: Un cappello fedora inserito nella porzione superiore se `hasHat` è true.
  - **Colore**: La maglia indossa il colore assegnato al personaggio (rosso sangue per l'assassino, viola per gli altri).
- Gli avatar sono stati integrati con un layout Flexbox all'interno del "Fascicolo indizi" (UI laterale dell'editor) e nell'header della scheda personaggio generata in Stampa (PDF), simulando la grafica minimale e geometrica degli esempi originali.

### 24. Modulo Mappe Predefinite (Pre-caricate)
- **Modello Dati**: Aggiunta la costante `PREDEFINED_MAPS` che contiene la definizione strutturata di mappe pre-generate (attualmente "Le due sorelle" e "Casa della Nonna", entrambe 9x9). La definizione include configurazioni di stanze/aree, muri, pavimentazioni specifiche (es. `pattern=mare`, `pattern=terra` o colori a tinta unita) e posizionamento esatto degli oggetti e degli ostacoli, aderente alle specifiche dei puzzle ufficiali di riferimento.
- **Interfaccia Utente (UI)**: 
  - Inserita una nuova sezione "Mappe Predefinite" nella sidebar sinistra. 
  - Il caricamento di una mappa predefinita sfrutta un sistema di **conferma integrato nell'interfaccia** (inline) per garantire coerenza stilistica e un'esperienza utente priva dei fastidiosi popup nativi (`confirm()` o `alert()`) del browser.
  - Al clic del pulsante viene mostrato un banner di avviso contestuale con i pulsanti *Annulla* e *Sì, Carica*.
- **Comportamento**: Caricando una mappa predefinita, questa viene istanziata nell'editor senza personaggi (che devono essere aggiunti dall'utente in fase di composizione dell'enigma). Tutti i pattern grafici e le pareti vengono renderizzati automaticamente rispettando la fedeltà del design.

### 25. Oggetti Salento & Tradizione (Calpestabili e Ostacoli)
- **Nuova Categoria Tematica (`salento`)**: introdotta la categoria *☀️ Salento & Tradizione* nel selettore a tendina `#objCategory` per filtrare gli oggetti tradizionali salentini.
- **Oggetti Calpestabili (`walkable: true`)**:
  - **Scannetto (`scannetto`)**: `"uno scannetto"`, glifo SVG sgabello basso rustico in legno e corda/paglia intrecciata (codice Markdown: `sc`).
  - **Tamburello (`tamburello`)**: `"un tamburello"`, glifo SVG tamburo da pizzica con sonagli metallici e nastrini (codice Markdown: `tm`).
  - **Ape car (`apecar`)**: `"un'Ape car"`, glifo SVG tre ruote con cabina e cassone posteriore (codice Markdown: `ap`).
  - **Trattore (`trattore`)**: `"un trattore"`, glifo SVG trattore agricolo con grandi ruote posteriori e volante (codice Markdown: `tr`).
- **Ostacoli e Strutture Tradizionali (`walkable: false`)**:
  - **Pumo (`pumo`)**: `"un pumo"`, glifo SVG ceramica barocca leccese a bocciolo su piedistallo (codice Markdown: `PU`).
  - **Cassapanca (`cassapanca`)**: `"una cassapanca"`, glifo SVG baule antico in legno d'ulivo con serratura (codice Markdown: `CP`).
  - **Madia (`madia`)**: `"una madia"`, glifo SVG madia per il pane a cassa trapezoidale su gambe (codice Markdown: `MD`).
  - **Cascetta (`cascetta`)**: `"una cascetta"`, glifo SVG cassetta portafrutta in legno a listelli (codice Markdown: `CS`).
  - **Muro a secco (`murosecco`)**: `"un muro a secco"`, glifo SVG muretto a conci di pietra leccese a secco (codice Markdown: `MS`).
  - **Malota (`malota`)**: `"una malota"`, glifo SVG scarafaggio/blatta con antenne e zampe (codice Markdown: `ML`).
  - **Scrace (`scrace`)**: `"delle scrace"`, glifo SVG cespuglio di rovi e spine con more (codice Markdown: `SR`).
  - **Albero di Ulivo (`ulivo`)**: `"un albero di ulivo"`, glifo SVG ulivo secolare con tronco nodoso e chioma argentata (codice Markdown: `UL`).
  - **Muscia (`muscia`)**: `"una muscia"`, glifo SVG gatta accovacciata con coda arricciata (codice Markdown: `MC`).
  - **Faro (`faro`)**: `"un faro"`, glifo SVG torre marittima a fasce bianche e rosse con lanterna (codice Markdown: `FR`).
  - **Pajaro (`pajaro`)**: `"un pajaro"`, glifo SVG costruzione tronco-conica in pietra a secco salentina (codice Markdown: `PJ`).
  - **Luminarie (`luminarie`)**: `"delle luminarie"`, glifo SVG arco da festa patronale in legno bianco e luci multicolori (codice Markdown: `LM`).
  - **Taccaro (`taccaro`)**: `"un taccaro"`, glifo SVG ceppo di legno tondo con anelli concentrici (codice Markdown: `TC`).
- **Supporto Motore & Stampa**: Tutti i 17 nuovi elementi sono integrati in `OBJECT_LIB`, `OBJ_ART`, `OBJ_EMOJI`, `MD_CODE`, `objectGlyph` (vettoriale ad alta fedeltà sia a schermo che in stampa PDF) e nella legenda automatica degli oggetti.

### 26. Rimozione Pulsante "Prompt LLM" (`#genMd`)
- **Pulsante Obsoleto**: Il vecchio pulsante "Prompt LLM" e la sua logica di generazione testuale (`buildLLMMarkdown()`) sono stati completamente rimossi dall'interfaccia.
- **Sostituzione con AI Panel**: Le funzionalità di interazione con gli LLM sono ora demandate interamente e in modo più specializzato ai prompt del pannello laterale (Analisi Mappa, Playtester e Prompt AI: Risolutore), i quali sfruttano il formato JSON configurabile (`buildMapConfigMarkdown()`) e il Code Interpreter per test più accurati.

### 27. Hover Highlight su Griglia (Cella + Area)
- **Evidenziazione al passaggio del mouse**: quando il puntatore passa sopra una cella della griglia SVG, vengono evidenziati in tempo reale:
  - **Bordo cella**: la cella sotto il cursore riceve un bordo **bianco grassetto** (`stroke: #ffffff`, `stroke-width: 3`).
  - **Bordo area (stanza)**: l'intero perimetro della stanza/area a cui la cella appartiene viene evidenziato con un bordo **blu grassetto** (`stroke: #2196F3`, `stroke-width: 3.5`).
- **Implementazione tecnica**:
  - Aggiunto un gruppo SVG overlay `<g id="hoverOverlay">` al termine del render, che viene aggiornato senza ridisegnare l'intera griglia.
  - L'analisi delle aree (`computeAreas`) e le dimensioni della griglia vengono memorizzate in cache nello `state` (`_lastAnalysis`, `_lastCS`, `_lastP`).
  - I listener `mousemove` e `mouseleave` sull'SVG board tracciano la cella sotto il cursore e invocano `updateHoverHighlight()`.
  - Il bordo dell'area viene calcolato iterando su tutte le celle dell'area e disegnando segmenti SVG `<line>` solo sui lati confinanti con un'area diversa o il bordo della griglia.

### 28. AI Level Designer & Playtester
- **Nuova Architettura Human-in-the-loop per l'AI**:
  - L'assistente AI (LLM) non si limita più alla traduzione narrativa degli indizi, ma agisce come **Level Designer** (ottimizzando la disposizione degli arredi per favorire ancoraggi logici) e come **Playtester** (valutando il puzzle completo con indizi generati e suggerendo mutazioni).
  - La comunicazione avviene sempre tramite clipboard (nessuna API key nel client), ma il prompt richiede esplicitamente all'LLM di **utilizzare il proprio Code Interpreter**.
- **Istruzioni e Testing Autonomo via Code Interpreter**:
  - Il prompt chiede all'LLM di leggere il codice del motore Murdoku (in allegato, ad es. via upload del file HTML dell'editor) ed eseguire script di test autonomamente, chiamando `solve()` ed `eleganceScore()` per verificare l'impatto delle sue idee prima di proporle all'utente.
  - In questo modo l'AI propone solo modifiche (spostamento oggetti, sostituzione indizi) che sono *già state validate* e che non rompono il vincolo matematico dell'unicità.
- **Output Strutturato (Mutazioni ad Azione)**:
  - Se il test ha successo, l'AI restituisce un JSON contenente una `review` testuale e un array `actions` (es. `{"type": "move_object", "kind": "umbrella", "from": [3,3], "to": [4,4]}` oppure `{"type": "replace_clue", "id": "c123", "new_type": "CARDINAL", "subjectId": "s1", "targetId": "s2", "fact": {"dir": "W"}}`).
- **Integrazione UI**:
  - Aggiunti due pulsanti al pannello AI: **"Analisi Mappa"** (solo stanze e arredi) e **"Playtester"** (puzzle completo).
  - La funzione di paste-back `applyAiJson` è stata estesa con `applyLevelDesignActions(data)`. Intercetta i comandi di mutazione, manipola in autonomia la griglia (spostamento oggetti), sostituisce indizi `replace_clue`, ricalcola le entità e aggiorna l'interfaccia, mostrando un toast di successo con il riassunto della recensione.
  - La lista degli indizi nella UI espone l'ID univoco di ciascun indizio tra parentesi quadre (es. `[c123]`) per rendere più chiara la comunicazione con l'AI.

### 29. Soluzione Ragionata e Prompt AI: Risolutore
- **Rimozione Logica Statica**: Il vecchio box dedicato alla "Soluzione Ragionata" automatica (basato sul parser logico interno) è stato inizialmente nascosto dalla UI per favorire una UI più pulita. Il generatore logico `reasonedSolution()` resta intatto nel motore `E`, poiché serve per calcolare l'elegance score e per il Code Interpreter dell'AI.
- **Prompt AI: Risolutore**: Aggiunto un nuovo pulsante `🤖 Prompt AI: Risolutore` nel pannello AI. Questo prompt fornisce all'LLM la mappa, gli indizi e la soluzione, istruendolo a scrivere la *soluzione ragionata* passo dopo passo per un giocatore umano usando un linguaggio deduttivo naturale.
- **Iniezione della Soluzione AI**: Se l'utente incolla il JSON dell'AI contenente l'array `reasoning_steps`, l'editor salva i passaggi in `state.aiSolution`. 
- **Reintroduzione Dinamica in UI e PDF**:
  - Se `state.aiSolution` è popolato, l'editor rende visibile una card dedicata "Soluzione ragionata" nell'interfaccia principale, mostrando i ragionamenti spiegati dall'AI.
  - Al click sul pulsante Stampa (PDF), se la `aiSolution` è presente, essa viene impaginata e aggiunta alla fine del documento PDF stampabile, sostituendo del tutto il vecchio output algoritmico e massimizzando la chiarezza e l'immersività del fascicolo.

### 30. Modalità "Gioca" (Player Mode)
- **Nuova Sezione dell'Applicazione**: Aggiunto un interruttore (toggle) nella barra superiore per alternare tra la modalità "✏️ Editor" e la nuova modalità "🎮 Gioca". Le due modalità coesistono nella stessa pagina web ma mostrano interfacce diverse e indipendenti, nascondendosi a vicenda.
- **Importazione Mappa**: La modalità Player permette di caricare (importare) un file JSON generato in precedenza dall'Editor tramite un pulsante dedicato.
- **Layout Stile PDF**:
  - La mappa renderizzata mostra solo le stanze (colori/pattern), gli oggetti e i muri, **omettendo deliberatamente** la soluzione e i personaggi originali, presentando quindi la griglia intonsa al giocatore.
  - La legenda degli oggetti e il fascicolo degli indizi testuali vengono generati sotto la mappa in un formato pulito che rispecchia l'impostazione visiva della stampa PDF.
- **Interattività (Logica di Gioco)**:
  - **Palette Personaggi**: I sospetti e la Vittima presenti nel JSON importato vengono estratti e resi disponibili come pulsanti selezionabili all'interno di una palette (barra orizzontale) sopra la mappa.
  - **Piazzamento**: L'utente può selezionare (attivare) un personaggio dalla palette e poi cliccare su una cella vuota della griglia per piazzarlo. Il personaggio piazzato appare nitidamente in mappa e viene "spento" nella palette per evitarne il riutilizzo. Cliccando nuovamente sul personaggio in mappa lo si rimuove e si ricollega alla palette.
  - **Regole e Aiuti Visivi (Croci X)**: Quando un personaggio (inclusa la vittima) viene piazzato, tutte le altre celle libere della medesima riga e colonna vengono istantaneamente marcate con un pattern a "X" rosse incrociate (sovrapposto). Questo traduce visivamente la regola cardine del Murdoku: ogni entità occupa una riga e una colonna esclusive. Le X si aggiornano in tempo reale a ogni piazzamento/rimozione.

### 31. Funzionalità "Note" (Annotazioni su Mappa nel Player)
- **Logica di Annotazione**: In modalità Gioca, è possibile annotare potenziali sospetti all'interno delle celle (vuote o occupabili) prima del loro piazzamento definitivo.
- **Interazione Mouse Avanzata**:
  - **Singolo Clic (Nota)**: Selezionando un personaggio dalla palette e facendo un singolo clic su una cella occupabile, il personaggio viene **annotato**. È possibile inserire fino a 4 annotazioni diverse per cella.
  - **Doppio Clic (Piazzamento)**: Facendo un doppio clic rapido sulla cella, il personaggio viene piazzato in modo definitivo.
- **Comportamento Visivo e Restrizioni**:
  - Le note appaiono come piccole versioni semitrasparenti e desaturate (grigettate) dell'icona del personaggio e si collocano nei 4 angoli della cella secondo questo ordine di riempimento: 1. Alto a Sinistra, 2. Alto a Destra, 3. Basso a Destra, 4. Basso a Sinistra.
  - Lasciano scoperta la porzione centrale e gran parte del resto della cella.
  - Il piazzamento di una nota **non genera le croci "X"** lungo riga e colonna, in quanto l'annotazione rappresenta solo una deduzione parziale.
  - Quando l'utente piazza definitivamente un personaggio (tramite doppio clic su qualsiasi cella), **tutte le note di quel personaggio presenti sull'intera plancia vengono rimosse istantaneamente**, per garantire la massima pulizia deduttiva.
  - Per rimuovere manualmente una singola nota, basta farvi clic sopra direttamente all'interno della cella.
  
### 32. Strumento "X" (Cella Bloccata) nel Player
- **Icona "X" nella Palette**: Oltre ai sospetti e alla vittima, la palette personaggi del Player include sempre una speciale icona fissa raffigurante una **X rossa** ("Cella Bloccata").
- **Posizionamento Multiplo**: A differenza dei normali personaggi (che una volta posizionati scompaiono dalla palette), l'icona "X" rimane sempre disponibile e può essere posizionata contemporaneamente su infinite celle.
- **Interazione**: Si posiziona con un **doppio clic** sulla cella bersaglio (esattamente come il piazzamento di un personaggio) e si rimuove con un clic sull'icona posizionata. Anche per l'X è possibile usare il singolo clic per inserirla come "nota" provvisoria in una cella.
- **Nessuna Croce di Ricalcolo**: Essendo un blocco puntuale e non un personaggio, il posizionamento della "X" sulla griglia non genera le croci "X" di esclusione lungo l'intera riga e colonna della cella. Serve esclusivamente a segnare manualmente una cella come "impossibile".

### 33. AI Risolutore "Cieco" e Validazione della Soluzione
- **Offuscamento delle Coordinate nel Prompt**: Quando si invoca il Risolutore AI (`🤖 Prompt AI: Risolutore`), il prompt inviato non contiene più le coordinate finali (`row` e `col`) e lo status (`isMurderer`) dei personaggi. I dati vengono accuratamente offuscati per forzare l'AI a ricavare la soluzione da zero usando esclusivamente le deduzioni logiche.
- **Iniezione del Contesto Spaziale (ASCII Art)**: Per sopperire alla mancanza di vista spaziale dell'LLM (che altrimenti faticherebbe a elaborare le distanze tramite puro JSON), il prompt inietta automaticamente una planimetria visiva della mappa renderizzata in **ASCII Art** (con i muri `┃`, `━` e le celle numerate in base-1) e fornisce una mappatura esplicita delle coordinate appartenenti a ciascuna Stanza (es. `Cucina: (1,1), (1,2)`).
- **Dizionario Semantico e Catalogo Personaggi**: Il prompt include ora un **Glossario** generato dinamicamente contenente le spiegazioni ferree della tipologia esatta di indizi utilizzati (es. `ALONE_WITH_TRAIT`, `CORNER`) e un catalogo testuale esplicito dei personaggi e dei loro tratti fisici, per facilitare il ragionamento incrociato dell'AI sulle categorie senza dover decifrare il JSON grezzo.
- **Valutazione della Difficoltà e Analisi Umana**: Il prompt richiede ora all'AI di stimare la difficoltà logica della mappa per un umano ('Easy', 'Medium', 'Hard', 'Expert') in un campo `difficulty`, e di redigere una recensione dettagliata nel campo `human_evaluation` su quanto il ragionamento sia complesso, divertente o se ci siano step eccessivamente contorti/innaturali per una mente umana.
  - La difficoltà viene renderizzata come "Badge colorato" in cima alla Soluzione Ragionata.
  - La recensione testuale (`human_evaluation`) viene renderizzata in fondo alla Soluzione Ragionata in un box grigio elegante.
- **Formato di Risposta Esteso**: All'LLM viene richiesto di rispondere non solo con i `reasoning_steps`, ma anche con un array `solution` contenente le posizioni finali dedotte (su base 1, partendo da 1) per tutti i personaggi (vittima inclusa).
- **Validazione e Feedback Immediato Visivo**:
  - Incollando la risposta dell'AI nell'Editor (`#aiApply`), la funzione `applyAiJson` confronta la `solution` generata dall'AI con la vera configurazione della mappa (`state.map.entities`).
  - Viene generato uno status testuale (Successo o Fallimento) che viene ora **salvato nello stato della mappa** (`state.aiValidationMsg`) e **serializzato** in `serialize()`, sopravvivendo quindi ai ricaricamenti della pagina o al salvataggio della mappa in libreria.
  - Nella card della Soluzione Ragionata nell'Editor, subito sotto all'elenco dei passaggi deduttivi, viene ora **sempre renderizzato un box colorato (verde o rosso)** che mostra in modo persistente il verdetto della validazione, permettendo all'utente di esaminare i passaggi logici contestualmente al risultato dell'AI.

### 34. Stampa PDF Avanzata (Mappa vs Soluzione)
- Il vecchio pulsante singolo "Stampa PDF" è stato suddiviso in due opzioni distinte:
  - **`🖨 PDF Mappa`**: Genera un documento stampabile di **una sola pagina** contenente esclusivamente l'enigma da risolvere (la planimetria senza i personaggi), la legenda e l'elenco degli indizi. In questo layout, la mappa viene affiancata da un riquadro laterale esplicativo contenente le regole generali del Murdoku e un **Glossario Indizi** generato dinamicamente, che spiega ai giocatori le regole esatte esclusivamente per le tipologie di indizio utilizzate in quella specifica mappa.
  - **`🖨 PDF Mappa + Soluzione`**: Conserva il comportamento originale a **due pagine**, includendo tutto il contenuto del "PDF Mappa" nella prima pagina, e aggiungendo una seconda pagina con la "Chiave di Lettura" (personaggi visibili sulla griglia) e l'eventuale step-by-step della "Soluzione Ragionata".
- L'intestazione della pagina generata usa ora il titolo custom della mappa per comporre il nome del file (es. `nome-mappa-solo-mappa.pdf` o `nome-mappa-con-soluzione.pdf`).

### 35. Ottimizzazione Player per Mobile (v2.0)
- **Responsive Layout (CSS Media Queries):** 
  - Applicate regole specifiche estese per viewport <= 1024px (`@media (max-width: 1024px)`), abbracciando così anche i tablet in modalità verticale.
  - La Legenda Oggetti del Player (`#playerLegend`) viene nascosta per risparmiare spazio verticale e semplificare l'interfaccia su schermi piccoli e tablet.
  - **In PLAYER MODE (URL con `?mode=player`)**, l'intero banner superiore (`<header>`, contenente titolo e logo dell'applicazione) viene completamente nascosto, massimizzando lo spazio disponibile sullo schermo del dispositivo mobile per la sola interfaccia di gioco.
  - La mappa (`#playerBoardContainer`) e la palette dei personaggi sono state fissate in alto usando la proprietà CSS `position: sticky`. In questo modo, scorrendo l'interfaccia verticalmente (se lo schermo è basso), la mappa resta sempre in primissimo piano e solo la lista degli indizi scorre al di sotto di essa.
  - Il **Selettore dei Personaggi** (palette) è stato riposizionato **immediatamente al di sotto della mappa** (ordinamento flessibile a colonna inversa) coprendo l'intera larghezza della pagina. I singoli pulsanti/icone dei personaggi sono ora perfettamente fluidi e responsive (`flex: 1 1 0` con `aspect-ratio: 1`), adattandosi dinamicamente allo spazio orizzontale a disposizione.
  - La lista degli indizi (`#playerClues`) è stata riposizionata al di sotto della mappa in un contenitore a scorrimento orizzontale continuo, con i box allineati in fila (ordinati alfabeticamente).
  - Nei box degli indizi, l'icona (avatar) del personaggio viene automaticamente nascosta su mobile (`.clue-icon`), lasciando intatte unicamente l'iniziale, il nome e le caratteristiche fisiche testuali per massimizzare la leggibilità.
- **Interazioni Touch Personalizzate:**
  - Sostituzione dei tradizionali eventi mouse `click` e `dblclick` (inaffidabili su Safari/iOS per il doppio-tap-zoom) con eventi pointer/touch nativi (`touchend`) che misurano il Delta Time tra i tocchi per una fluidità ottimale.
  - **Singolo Tap:** Registra un'annotazione provvisoria (nota a margine o croce rossa X) senza alterare le preclusioni di riga e colonna.
  - **Doppio Tap:** Conferma il piazzamento definitivo del personaggio e fa scattare l'evidenziazione automatica (X rosse) su riga e colonna.

### 36. Unificazione e Semplificazione Indizi nel Player (v2.1 e v2.2)
- **Logica di Presentazione**: Nella modalità Player ("Gioca"), se un singolo personaggio possiede più indizi a lui associati, questi non vengono più elencati separatamente su più righe.
- **Concatenazione e Pulizia**: 
  - Vengono fusi in un unico paragrafo testuale collegato dalla congiunzione " e ".
  - Il nome del personaggio (che risulta ridondante essendo già indicato nell'intestazione del box) viene rimosso automaticamente all'inizio di ciascuna frase.
  - È stata rimossa la numerazione progressiva laterale (es. "1.", "2.") accanto agli indizi in quanto non necessaria per la leggibilità e l'estetica del Player.
  - Esempio di trasformazione:
    - *Indizio 1:* "Arturo si trova in un angolo della sua area."
    - *Indizio 2:* "Arturo si trova nella riga più in alto."
    - *Risultato Mostrato:* "Si trova in un angolo della sua area e si trova nella riga più in alto."

### 37. Rendering Vettoriale Overlay Player (v2.3)
- **Risoluzione Bug Allineamento su Dispositivi Mobili/Tablet**: In precedenza, le pedine piazzate (personaggi, note e bloccanti X) e le croci rosse di esclusione venivano disegnate come elementi HTML (`div`) sovrapposti. Questo causava una rottura del layout (disallineamento e scalatura errata) sui dispositivi in cui la mappa di base veniva ridimensionata tramite CSS (`width: 100%`).
- **Conversione a SVG Nativo**: Il contenitore `#playerOverlay` è stato convertito in un nodo `<svg>` a cui viene iniettato dinamicamente lo stesso `viewBox` della griglia principale. 
- Tutti gli elementi dell'overlay (croci e avatar dei personaggi) sono stati riscritti in SVG nativo (`<path>`, `<circle>`, `<text>`) permettendo così un ridimensionamento e un allineamento perfetti e fluidi a qualsiasi risoluzione.

### 38. Riorganizzazione Layout Mobile Player (v2.4)
- **Palette Personaggi in Verticale**: Per ottimizzare lo spazio di visualizzazione verticale sui dispositivi mobili, la palette con le icone selezionabili dei personaggi (compresa la X per i blocchi) non occupa più l'intera larghezza sopra la plancia di gioco.
- **Affiancamento Laterale**: La palette è stata spostata sulla sinistra della plancia di gioco, organizzata in un'unica colonna verticale (dalla A in alto fino alla X in basso). In questo modo la mappa e gli indizi scorrono più in alto sullo schermo, migliorando l'ergonomia su mobile. In modalità desktop la palette mantiene il suo raggruppamento, ma è ora perfettamente centrata rispetto alla colonna principale del tabellone.

### 39. Riduzione Spazi Indizi su Mobile (v2.5)
- **Compattamento Verticale**: Solo nella visualizzazione MOBILE della modalità Player, l'altezza complessiva dei singoli riquadri contenenti gli indizi è stata lievemente ridotta. Questo è stato ottenuto diminuendo il `padding` (margine interno) sia del box principale che delle righe di testo degli indizi, in modo da mostrare più informazioni a parità di scorrimento dello schermo.

### 40. Allineamento Verticale Palette Personaggi su Mobile (v2.6)
- **Centratura rispetto alla Plancia**: Sempre in modalità MOBILE, la colonna laterale che contiene la palette dei personaggi (dalla A alla X) è stata allineata al centro esatto dell'asse verticale rispetto alla plancia di gioco, anziché essere allineata al margine superiore. Questo garantisce un risultato visivo più bilanciato e simmetrico.

### 41. Avvio Diretto in Modalità Player da URL (v2.7, v2.10 e v2.11)
- **Logica di Accesso Diretto**: È stato aggiunto un listener `DOMContentLoaded` per interpretare i parametri della URL. Se la URL contiene l'ancora `#player` (es. `https://.../#player`) oppure il parametro in querystring `?mode=player` (es. `https://.../?mode=player`), l'applicazione simula in automatico il clic sul pulsante "Gioca" all'avvio, aprendosi direttamente nella visualizzazione Player ed omettendo l'Editor.
- **Precaricamento Mappa (v2.10)**: Aggiungendo il parametro `&map=[NOME]` (es. `?mode=player&map=123`), l'applicativo, subito dopo essersi avviato in modalità Player, invoca autonomamente la funzione di scaricamento da GitHub e pre-carica il file `.md` corrispondente nella plancia di gioco, azzerando i passaggi manuali necessari.
- **Pulizia UI Dinamica (v2.11)**: All'avvio diretto con `?mode=player`, il selettore di modalità (i pulsanti "Editor", "Gioca" e "Incolla") viene nascosto per bloccare l'interfaccia nella vista Player. Se l'utente non ha specificato una mappa, il sistema lascerà tuttavia visibile l'unico pulsante "Seleziona Mappa", permettendo di immettere il nome manualmente. Se invece il parametro `&map` è presente, anche il tasto "Seleziona Mappa" sparirà per restituire una vista completamente pulita e immersiva.

### 42. Salvataggio su Cartella Locale e Caricamento da GitHub (v2.9)
- **Logica Editor (Salvataggio Locale)**:
  - Aggiunto il pulsante `📁 Salva su Cartella "Mappe"` nella card "Salvataggio & Progetto".
  - Tramite la **File System Access API**, l'Editor chiede i permessi per accedere in scrittura a una cartella locale. La mappa viene esportata nel formato completo JSON+Testo e salvata o sovrascritta automaticamente con estensione `.md` nella cartella scelta.
- **Logica Player (Caricamento Remoto)**:
  - Rinominato il precedente pulsante "Carica / Incolla Mappa" in "Incolla Mappa" per chiarezza.
  - Aggiunto il pulsante `📁 Seleziona Mappa` accanto ad esso.
  - Al clic, un popup dedicato richiede di digitare il nome della mappa da caricare. A differenza dell'Editor (che salva in locale), il Player si comporta da Client e scarica il file **direttamente dalla cartella `Mappe Salvate` del repository GitHub ufficiale** (`NumaPompilio/murdoku-studio`), invocando la URL raw di GitHub (`raw.githubusercontent.com`).
  - In caso di errore di rete o file inesistente, verrà mostrato il messaggio "Nessuna mappa trovata". In questo modo, l'utente può scaricare le mappe ufficiali online senza dover interagire con il file system locale.

### 43. Verifica Condizione di Vittoria (v2.12)
- **Logica di Verifica Automatica**: Nel Player, ogni volta che viene aggiunto, rimosso o spostato un personaggio sulla griglia, il sistema analizza i piazzamenti. Se tutti i personaggi previsti per il caso sono stati collocati in plancia, il sistema confronta le loro posizioni con la soluzione memorizzata nella mappa (le coordinate originali degli `entities`).
- **Feedback Visivo**: Se tutte le posizioni corrispondono esattamente, viene mostrato il messaggio "BRAVO! HAI TROVATO L'ASSASSINO" con sfondo verde in calce agli indizi. Se anche un solo personaggio è in una posizione errata (ma tutti sono stati inseriti), viene mostrato il messaggio "NON HAI TROVATO L'ASSASSINO" in rosso, spronando il giocatore a correggere la sua logica.

### 44. Rinomina Pulsante Gioca (v2.13)
- **Modifica UI**: Il pulsante principale per accedere alla modalità di gioco è stato rinominato da "Gioca" a "Player" nell'intestazione dell'applicazione, per maggiore uniformità con la terminologia del progetto.

### 45. Nuova Icona Libreria Vettoriale (v2.14)
- **Asset Aggiornati**: Inserito un nodo SVG personalizzato complesso per renderizzare l'oggetto `bookcase` (libreria), in sostituzione del precedente fallback tramite emoji 📚. Il nuovo asset viene renderizzato in modo nativo su mappa alla stregua degli altri elementi vettoriali (tavolo, scogli, ecc.), scalandosi in tempo reale.

### 46. Restyling Popup "Incolla Mappa" (v2.15)
- **Modifica UI**: Il box inline adibito all'importazione manuale della mappa (attivato dal pulsante "Incolla Mappa" nel Player) è stato convertito in un vero e proprio modale fluttuante (`modal`), uniformandone l'aspetto e l'UX con il modale di "Seleziona Mappa da Cartella". Lo sfondo ora viene oscurato per far risaltare la finestra di importazione.

### 47. Nuovo Oggetto: Sant'Oronzo (v2.16)
- **Asset Aggiunti**: Introdotto l'oggetto `santoronzo` (statua di Sant'Oronzo, non calpestabile), assegnato alla categoria *Salento & Tradizione* e *Natura & Esterni*. L'asset viene renderizzato tramite un nodo SVG vettoriale altamente dettagliato con gradienti e ombre per esaltarne la tridimensionalità.

### 48. Form di Aggiunta Oggetti (v2.17)
- **Nuova Funzionalità**: Aggiunto il pulsante "➕ Aggiungi" nella sezione di selezione degli oggetti dell'Editor.
- **Interfaccia Utente**: Cliccando il pulsante si apre un modale fluttuante (stile *Importa Mappa*) che permette di compilare i dettagli di un nuovo oggetto (ID, Label, Articolo, Simbolo, Calpestabile, Categorie, Render Type, Scala, Codice SVG/Testo).
- **Integrazione File System**: Implementata la logica `requireAssetsDirectoryHandle` tramite File System Access API per autorizzare l'accesso alla cartella `assets`. Alla conferma, il sistema esegue il parsing di `objects.md`, inietta in coda il nuovo oggetto JSON (o aggiorna uno esistente se l'ID coincide) e sovrascrive il file mantenendo il formato markdown.

### 49. Sistema Ibrido di Iniezione Oggetti (v2.18)
- **Logica Architetturale**: L'applicazione adesso implementa una fusione a tempo di esecuzione tra gli oggetti hardcoded (`OBJECT_LIB`) e gli oggetti esterni su GitHub. All'apertura della pagina (`DOMContentLoaded`), il motore esegue una chiamata asincrona `fetch` verso `https://raw.githubusercontent.com/.../objects.md`.
- **Parsing e Cache Dinamica**: I dati JSON del file remoto vengono scansionati, gli oggetti vengono inseriti programmaticamente all'interno degli array nativi (`OBJECT_LIB`, `OBJ_ART`, `OBJ_SYMBOL`, `OBJ_CATEGORIES`, `OBJ_ORDER`), mentre i nodi SVG vettoriali vengono inseriti in una cache temporanea `window.DYNAMIC_SVGS`.
- **Rendering Adattivo**: La funzione vitale `objectGlyph` è stata modificata per controllare se l'oggetto da disegnare è presente nella cache dinamica. In caso positivo, esegue un'iniezione delle stringhe dimensionali e di opacità direttamente nel tag nativo `<svg>`, rendendo di fatto invisibile la differenza per la UI tra un'icona nativa ed una remota.
- **Ricaricamento Automatico**: Ultimata l'iniezione, il sistema ordina un ricaricamento forzato della UI (`renderPalette()` e `render()`) facendo apparire magicamente i nuovi oggetti tra le categorie disponibili.

### 50. Revisione Categorie Oggetti e Parsing JSON Remoto (v2.21)
- **Riorganizzazione Categorie**: Le categorie preesistenti dell'Editor sono state interamente rimosse e sostituite con 8 nuove categorie tematiche: *Casa & Interni*, *Animali*, *Esterno urbano*, *Trasporti*, *Campagna*, *Mare*, *Commerciale*, *Salento*. Tutti gli oggetti hardcoded originali e i relativi glifi vettoriali sono stati riclassificati in queste nuove sezioni mantenendo il funzionamento intatto. Rimossa anche la classificazione pregressa basata su "solo calpestabili" o "solo ostacoli".
- **Parsing Robusto del JSON Remoto**: La funzione `loadRemoteObjects()` (che recupera il file remoto `objects.md` da GitHub) è stata corretta per gestire l'estrazione degli oggetti in due modalità:
  1. Estrazione del JSON racchiuso in blocchi markdown (` ```json ... ``` `).
  2. Fallback diretto: nel caso in cui il file sia composto da codice JSON puro senza blocchi markdown (es. file .md caricato ma non formattato in markdown rigoroso), la logica decodifica comunque l'intera stringa in modo sicuro per popolare la palette, evitando l'errore precedente "Il JSON remoto non è stato trovato nel file!".
- **Mappatura Categorie Remote**: Risolto il problema per cui le stringhe testuali di categoria provenienti dal JSON remoto (es. "Casa & Interni") non venivano associate alle chiavi interne corrette (le quali includevano un'emoji, es. "🏠 Casa & Interni"). Adesso la mappatura funziona per inclusione parziale della stringa per garantire l'affidabilità totale e smistare ogni nuovo oggetto nella palette corretta.

### 51. Modale Regole del Gioco nel Player (v2.22)
- **Aggiunta Collegamento**: È stato inserito un link ("Regole del gioco") nella colonna di destra del Player, subito sopra il contenitore degli indizi. Questo link è stato progettato per scorrere insieme agli indizi anche nella visualizzazione Mobile, beneficiando del layout esistente.
- **Finestra Modale Dedicata**: Il clic sul link apre una nuova finestra modale (`#rulesModal`) che illustra in modo chiaro e conciso le regole di Murdoku per i nuovi giocatori.
- **Contenuto Informativo**: La modale include due sezioni principali:
  - *Regole Generali*: Spiega il meccanismo di riga e colonna univoca (stile Sudoku) e la regola che obbliga l'assassino a trovarsi sempre solo con la vittima.
  - *Regole degli Oggetti*: Definisce la differenza fondamentale tra oggetti calpestabili (su cui è consentito stare) e ostacoli (che non possono essere occupati), e chiarisce il concetto spaziale di "accanto a" e "sopra a" un oggetto.
  - *Come Giocare (Comandi)*: Illustra visivamente (con icone SVG personalizzate) la differenza tra il doppio clic/tap per posizionare definitivamente un personaggio e il singolo clic/tap per inserire una nota provvisoria (fino a 4 per cella).

### 52. Testo identificativo su Porte e Finestre (v2.25)
- **Etichette Testuali**: Le icone grafiche di Porte e Finestre sulla mappa ora presentano una piccola dicitura testuale di identificazione ("Porta" o "Finestra" rispettivamente) per rendere immediato il loro significato.
- **Supporto Omnipresente**: Le etichette sono visualizzate e regolate dinamicamente sia nell'Editor, sia nel Player, sia nella stampa PDF (nella quale il testo adotta una dimensione proporzionata per una resa pulita).
- **Rotazione SVG**: Se il muro contenente la porta o la finestra è verticale, il testo viene ruotato automaticamente di -90 gradi per rimanere centrato e contenuto all'interno dell'elemento di delimitazione.

### 53. Supporto nativo per icone Oggetti in formato WebP (v2.26)
- **Caricamento Esterno Immagini Raster**: L'editor è ora in grado di caricare dinamicamente immagini in formato raster ottimizzato (`.webp`) per la rappresentazione grafica degli oggetti (invece del solo SVG inline).
- **Definizione JSON**: Nei file di definizione degli oggetti (come `objects.md`), è possibile specificare nel blocco `render` la chiave `type: "webp"`. L'editor estrarrà automaticamente l'id dell'oggetto e proverà a recuperare il file d'immagine al path relativo `assets/objects_webp/{id}.webp`.
- **Risoluzione Errori e Fallback (Graceful degradation)**: Il motore di rendering SVG dell'editor (funzione `objectGlyph`) utilizza il tag `<image>` nativo accoppiato a una stringa `<text>?</text>` nascosta. In caso di errore nel caricamento dell'immagine (file mancante o errore 404), viene attivato un gestore `onerror` che nasconde il box rotto dell'immagine ed espone un punto interrogativo di fallback elegante sulla griglia e sulla palette.

### 54. Rimozione completa degli oggetti hardcoded — Sistema 100% dinamico (v3.0)
- **Motivazione architetturale**: Fino alla v2.26, le strutture dati degli oggetti erano duplicate: presenti sia nel codice HTML hardcoded sia nel file `assets/objects.md` su GitHub. Questo causava disallineamento e rendeva necessario aggiornare il codice ogni volta che si aggiungeva un nuovo oggetto.
- **Strutture dati svuotate**: Le seguenti strutture sono ora inizializzate vuote e popolate interamente da `loadRemoteObjects()` all'avvio:
  - `OBJECT_LIB` (engine): label e walkable di ogni oggetto.
  - `OBJ_ART` (engine): articolo italiano per ogni oggetto.
  - `OBJ_EMOJI`: emoji di fallback per la visualizzazione testuale.
  - `MD_CODE`: codici brevi per la mappa testuale (da campo `symbol` nel JSON; minuscolo per calpestabili, MAIUSCOLO per ostacoli).
  - `OBJ_CATEGORIES`: categorie tematiche con le relative liste di oggetti.
  - `OBJ_ORDER`: ordine di visualizzazione nella palette (rispetta l'ordine del file `objects.md`).
- **Nuovo `CATEGORY_NAME_MAP`**: Dizionario che mappa i nomi di categoria nel JSON (es. "Casa & Interni") alle chiavi interne usate in `OBJ_CATEGORIES` (es. "house"), evitando la ricerca fuzzy per inclusione stringa.
- **Aggiornamento dinamico del `<select>` categorie**: Dopo il caricamento, il selettore di categoria nella palette dell'Editor viene ricostruito dinamicamente con le categorie presenti nel file remoto.
- **Reset completo a ogni caricamento**: `OBJ_ORDER` viene azzerato e le categorie (eccetto `all`) vengono ripulite prima di ogni ciclo di caricamento, eliminando ogni residuo di dati precedenti.
- **Compatibilità**: Il caricamento avviene all'evento `DOMContentLoaded`, prima di qualsiasi interazione utente. I dati remoti sono la singola fonte di verità per tutti gli oggetti.

---

### 38. File di Configurazione Generale (`settings.md`)

- **Nuovo file**: [`settings.md`](../settings.md) nella root del progetto, introdotto come **registro centralizzato dei parametri di configurazione globale** dell'applicazione Murdoku Studio.
- **Scopo**: Ogni parametro è documentato con tipo, valore di default, scope di applicazione e descrizione del comportamento atteso. Il file funge da fonte di verità per le impostazioni lette a runtime dal codice.
- **Primo parametro introdotto — `maintenanceMode`**:
  - **Tipo**: `boolean`
  - **Default**: `false`
  - **Scope**: Esclusivamente PLAYER MODE (`?mode=player`)
  - **Comportamento**: Se `true`, al caricamento del PLAYER in modalità PLAYER MODE viene mostrata una **pagina bloccante fullscreen di manutenzione**, non bypassabile dall'utente, che comunica l'indisponibilità temporanea del servizio. La pagina blocca completamente l'accesso all'interfaccia di gioco.
  - **Non coinvolge**: la modalità Editor, né il Player avviato internamente all'applicazione (fuori dalla PLAYER MODE).
- **Implementazione tecnica** (v3.2):
  - **`APP_CONFIG`**: oggetto JavaScript costante aggiunto all'inizio del secondo `<script>` in `murdoku-studio.html`. Funge da punto unico di configurazione runtime; i valori sono modificabili direttamente nel codice senza cercare la logica.
  - **`#maintenance-overlay`**: nuovo div HTML fullscreen (`z-index: 999999`), attivato dalla classe `.active`. Visibile prima di qualsiasi altro elemento dell'app. Design coerente con il loading overlay (palette scura `#0f0f1a → #1a0f2e`, accenti oro `#e8b86d`). Contiene: logo "MURDOKU", icona 🔧 con animazione pulse, titolo, sottotitolo e badge testuale.
  - **Logica**: nel handler `DOMContentLoaded`, subito dopo aver rilevato `isPlayerMode`, se `APP_CONFIG.maintenanceMode === true` viene rimosso l'overlay di caricamento, attivato l'overlay di manutenzione, e la funzione ritorna immediatamente (`return`) bloccando il resto dell'inizializzazione (fetch objects, caricamento mappa, attivazione player).
  - **Versione**: aggiornata da `v3.1` → `v3.2`.

### 39. Salvataggio e Caricamento Mappe su Cloud GitHub (v5.1)
- **Modale Impostazioni**: Aggiunto un nuovo popup Impostazioni accessibile dall'editor (⚙️) per salvare localmente (`localStorage`) le credenziali GitHub: `Personal Access Token (PAT)`, `Owner` e `Repository Name`. Questi dati sono essenziali per interfacciarsi con le API REST di GitHub senza dipendere da alcun backend.
- **Caricamento dal Cloud (☁️ Carica dal Cloud)**: Aggiunto un pulsante nell'header dell'editor. Apre un modale che si connette alle API di GitHub (`GET /repos/{owner}/{repo}/contents/maps/saved`), recupera l'elenco dei file `.md` e ne popola la lista. Cliccando su un file, viene scaricato direttamente e deserializzato nell'editor.
- **Salvataggio sul Cloud (☁️ Salva sul Cloud)**: Aggiunto un pulsante nell'header dell'editor. Apre un modale che mostra l'elenco delle mappe esistenti (permettendo la selezione rapida per la sovrascrittura) e offre un campo testuale per inserire il nome del file. Al salvataggio, il file viene codificato in Base64 (supportando i caratteri UTF-8 tramite `TextEncoder`) e inviato via `PUT` all'API di GitHub. Se il file esiste già, l'API richiede lo `sha` precedente, il quale viene automaticamente recuperato in background.


## Estensione: Object Catalog (v6.0)
- Aggiunta una nuova sezione "Object Catalog" accessibile dallo Switcher principale (accanto a Editor e Player).
- La sezione permette di gestire i cataloghi di oggetti, letti e scritti dinamicamente su GitHub (cartella `catalogs/`).
- Ogni catalogo contiene un file `object.json` con la lista degli oggetti. Gli oggetti hanno i campi: id, label, article, symbol, walkable, categories, svgCode, description.
- Gestione delle Categorie: le categorie degli oggetti sono configurabili e salvate su GitHub in `catalogs/categories.json`.
- Interfaccia a griglia con Card per ogni oggetto, con possibilità di modifica, eliminazione e creazione di nuovi oggetti.
- Esportazione del catalogo selezionato (JSON) tramite popup dedicato con funzioni Copia e Scarica.
- Le modali rispettano la struttura e le classi standard del progetto (`.modal` e `.box`).


## Ottimizzazioni UI e Funzionalità Object Catalog (v6.1)
- Modificata la creazione di un nuovo catalogo tramite popup personalizzato (invece del prompt di sistema).
- Aggiunta funzione di Eliminazione intero Catalogo: accessibile quando un catalogo è selezionato. Elimina ricorsivamente tutti i file dal repository GitHub dopo doppia conferma digitata (`delete`).
- Ottimizzato lo spazio delle card degli oggetti nella griglia per renderle più compatte.
- Bugfix: ripristinato il pulsante di chiusura (X) nella modale Log di Sistema e corretto il nome del pulsante in 'Mostra Log'.

- Aggiunta visualizzazione in dettaglio per gli oggetti del catalogo: cliccando su una card si apre un popup contenente tutti i dettagli, l'immagine/simbolo ingrandita, e i pulsanti Elimina e Modifica.

- Persistenza stato Catalogo: se la pagina viene ricaricata mentre si è nel Catalogo (tramite hash #catalog nell URL), la vista Catalogo viene automaticamente ripristinata.

- Creazione catalogo predefinito "Catalogo 1" popolato con 111 oggetti base (ciascuno con grafica SVG auto-generata basata su emoji, categorie e caratteristiche dettagliate).


## Integrazione Catalogo Dinamico Editor e Rimozione Oggetti Hardcoded (v7.0)
- **Rimozione Aggiunta Singolo Oggetto Locale**: Rimosso il pulsante "➕ Aggiungi" dalla sezione "Strumenti Mappa" e l"intero modale associato (`addObjectModal`) con la logica `requireAssetsDirectoryHandle`. L"inserimento di oggetti nella mappa si basa ora esclusivamente sui cataloghi.
- **Rifattorizzazione Selettore Categoria (`#objCategory`)**: Il menu a tendina delle categorie degli oggetti dell"editor ora mappa i vari cataloghi disponibili caricati dinamicamente da GitHub anziché categorie fisse.
- **Caricamento Oggetti Dinamico (`loadRemoteObjects`)**: Totalmente riscritto il caricamento all"avvio:
  - Recupera la lista delle cartelle catalogo (da `catalogs/`).
  - Carica e analizza in serie tutti i file `object.json` contenuti nei vari cataloghi.
  - Genera `window.CATALOG_OBJECTS` con il dizionario dinamico di oggetti e lo inietta nei dizionari core (`OBJECT_LIB`, `MD_CODE`, `DYNAMIC_SVGS`).
- **Rendering Vettoriale Dinamico (`objectGlyph`)**: Totalmente eliminata la logica di fallback ad icone/emoji di testo e gli SVG disegnati in modo procedurale "hardcoded" nel codice.
  - La funzione usa in modo esclusivo il codice SVG fornito dal campo `svgCode` dei file `object.json`.
  - Ripulito il file eliminando ~400 righe di SVG fissi inseriti manualmente, snellendo enormemente la base di codice e permettendo all"editor di supportare nativamente qualsiasi asset definito dai cataloghi.


## Rimozione Modalità Gioca (Player Mode) (v8.0)
- **Rimozione dell'intera sezione PLAYER**: Tutte le interfacce, modali, logiche di gioco e controlli relativi alla modalità Player (Gioca) sono stati rimossi dall'applicazione.
- **Ottimizzazione del codice**: Il codice Javascript, HTML e CSS specifico del Player (inclusi overlay, stati e parser) è stato completamente rimosso. Questo riduce significativamente la dimensione del file `murdoku-studio.html` e snellisce la complessità dell'applicazione.
- **Spostamento Pulsante Catalog**: Nello switch-mode in alto a destra, il pulsante **Catalog** è stato spostato alla sinistra del pulsante **Editor**, diventando più accessibile. Il pulsante **Player** è stato rimosso.

## Ottimizzazioni Catalogo e Posizionamento Impostazioni (v8.1 - v8.3)
- **Ricaricamento Dinamico Catalogo & Oggetti (v8.1)**: Alla selezione di un catalogo dalla sezione "Strumenti Mappa", le definizioni e gli SVG vettoriali vengono riscaricati in tempo reale da GitHub e applicati immediatamente alla palette e alla mappa.
- **Spinner Modale a Tutto Schermo (v8.2)**: Inserito un overlay modale globale bloccante (`#globalSpinner`) con animazione di caricamento ("Caricamento in corso..."), impedendo interazioni durante il download asincrono dei dati del catalogo da GitHub.
- **Spostamento Pulsante Impostazioni (v8.3)**: Il pulsante delle Impostazioni (`#settingsBtn`, ⚙️) è stato spostato alla destra dello switcher di modalità in testata (`.mode-switch`), rimanendo costantemente visibile e accessibile sia nella vista **Editor** che nella vista **Catalog**.

## Integrazione Editor Grafico "Murdoku SVG Map" (v9.0)
- **Nuovo Pulsante "Graphic" nello Switcher**: Aggiunto un nuovo pulsante "🎨 Graphic" all'interno dello Switcher per alternare la vista.
- **Porting Editor SVG**: È stato integrato interamente il codice dell'editor `murdoku-svg-map.html` (HTML, CSS e JS) all'interno del file principale `murdoku-studio.html`. L'interfaccia grafica e tutte le logiche di rendering SVG, esportazione ed editing visuale della piantina sono state importate all'interno del nuovo contenitore `#graphic-view`.
- **Isolamento ID (Prefisso `svg_`)**: Per garantire un porting fedele "senza modifiche" strutturali o logiche e per evitare collisioni di variabili o ID (es. `board`, `importModal`, `toast`) con l'Editor principale, tutti gli ID e i riferimenti nel DOM importato sono stati prefissati in modo sicuro con `svg_`.
## Spinner Globale all'Avvio (v9.1)
- **Miglioramento caricamento iniziale**: L'overlay modale globale bloccante (`#globalSpinner`) con animazione di caricamento ("Caricamento in corso..."), introdotto nella versione v8.2 per il cambio catalogo, è stato esteso anche alla primissima fase di caricamento della pagina (refresh o prima apertura dell'editor).
- **Logica**: All'interno della funzione asincrona `loadRemoteObjects()`, lo spinner viene ora attivato all'inizio del fetching da GitHub e nascosto in modo sicuro nel blocco `finally`. Questo impedisce qualsiasi interazione prematura e previene il fastidioso glitch visivo ("box neri con punto interrogativo") in cui la mappa tentava di renderizzare icone vettoriali non ancora scaricate dal server, offrendo un'esperienza fluida all'utente.

## Stile Dinamico Oggetti in Mappa (v9.2)
- **Selettore Set Oggetti**: Aggiunta una nuova picklist nella card "Icone" della vista "Graphic", che permette di selezionare un set grafico specifico per personalizzare l'aspetto visivo degli oggetti direttamente sulla mappa SVG.
- **Rendering Dinamico e Fallback**:
  - Se il valore del selettore è impostato su `Nessuno (Testo)` (valore di default `null` o `""`), gli oggetti sulla mappa vengono renderizzati come box quadrati (con sfondo `#f4efe4` e bordo scuro) contenenti le prime 3 lettere in maiuscolo del nome dell'oggetto.
  - Se viene selezionato un set specifico, la mappa carica dinamicamente per ciascun oggetto posizionato il corrispondente file PNG.
- **Integrazione di Stato**: Il set scelto (`state.icons.globalSet`) viene conservato nello stato interno del graphic editor, garantendo che le preferenze visive restino coerenti durante l'uso ed esportate nella persistenza.

## Caricamento Remoto dei Set Oggetti da GitHub (v9.3)
- **Integrazione API di GitHub**: Invece di hardcodare i nomi dei set e risolverli localmente, la lista dei set di icone viene popolata dinamicamente interrogando le API di GitHub (directory `/icons`).
- **Rendering tramite Raw URL**: Le immagini degli oggetti vengono renderizzate impostando come `href` del tag `<image>` la URL raw di GitHub (`https://raw.githubusercontent.com/{owner}/{repo}/main/icons/{set}/{slug}.png`), permettendo all'applicazione di funzionare in modo totalmente slegato dal file system locale anche quando in esecuzione in un ambiente sandbox o standalone esterno.

## Modifiche alla Pulsantiera Graphic e Salvataggio su Cloud per Mappe SVG (v9.4)
- **Nuova Pulsantiera Graphic**: La barra degli strumenti della modalità Graphic è stata snellita e armonizzata con quella dell'Editor. La pulsantiera ora include i seguenti pulsanti visibili:
  - **Undo**: ridotto a sola icona vettoriale, posizionato come primo pulsante a sinistra (capace di annullare fino a 30 operazioni).
  - **Carica dal Cloud** e **Salva sul Cloud**: resi visivamente identici ai corrispondenti pulsanti dell'Editor per continuità stilistica.
  - I vecchi pulsanti per il salvataggio/caricamento locale JSON e l'importazione Murdoku sono stati rimossi dall'interfaccia principale, mantenendo intatte solo le opzioni per esportazione immagine e griglia.
- **Implementazione Salvataggio Mappe SVG sul Cloud**: Aggiunta la funzionalità logica completa per salvare le piantine (in formato JSON `murdoku-svg-map`) direttamente nel branch remoto, emulando il funzionamento dell'Editor ma indirizzando i file alla cartella specifica `Mappe generate`. Include un nuovo modale dedicato (`svg_cloudSaveModal`) che permette di sovrascrivere file esistenti o crearne di nuovi con serializzazione e Base64 encoding.

### VERSIONE 9.5 (Graphic vs Editor Sync)
- **Importa da Editor:** Aggiunto pulsante nella toolbar di Graphic per importare istantaneamente lo stato corrente dell'EDITOR.
- **Set Icone per Oggetto:** Implementata la possibilita di scegliere un set di icone specifico per ogni singolo oggetto, indipendente dal set globale.
- **Salvataggio Unificato su Cloud:** Quando si salva la mappa dal Cloud mentre si e' in GRAPHIC, il file JSON includera' anche lo stato e gli indizi dell'EDITOR, in modo che caricandolo dal cloud venga ripristinata la mappa completa.

### VERSIONE 9.6 (Miglioramenti UI Oggetti Graphic)
- **Dimensione Globale Oggetti**: Aggiunto uno slider alla sezione OGGETTI (in Graphic) per poter impostare e applicare rapidamente una dimensione comune a tutti gli oggetti presenti nella mappa SVG.
- **Visualizzazione Default Oggetti**: Modificata l'anteprima degli oggetti nella lista assegnazione. Se un oggetto non ha alcun set di icone o immagine libreria selezionati, viene ora visualizzato con un'icona quadrata che mostra le prime 2 lettere dell'ID dell'oggetto invece del precedente placeholder generico.
- **Ottimizzazione Etichette**: La label del menu a tendina "Nessuno / Eredita Globale" è stata semplificata in "nessuno".

### VERSIONE 9.7 (Bugfix e Anteprima Oggetti Graphic)
- **Anteprima Icona Set Oggetto**: Quando viene assegnato un set da GitHub ad un oggetto (oppure eredita il set globale), il box di anteprima nella lista laterale di Graphic mostra l"icona PNG effettiva corrispondente al set selezionato anziché il pulsante "+", garantendo un immediato feedback visivo corrispondente a quanto renderizzato in mappa.
- **Bugfix Rendering "nessuno"**: Corretto un difetto in cui le opzioni vuote associate al valore "nessuno" per i set venivano trattate impropriamente come set validi, forzando la visualizzazione corretta del box fallback con le prime 2 lettere in assenza di un set grafico.

### VERSIONE 9.8 (Miglioramenti UX Catalogo)
- **Pre-selezione Automatica Catalogo**: Quando si accede alla sezione CATALOGO per la prima volta e la lista dei cataloghi viene popolata, il primo catalogo disponibile viene automaticamente pre-selezionato. Questo evita che la pagina appaia vuota all'utente e garantisce che lo stato del catalogo sia sempre coerente con l'interfaccia.
- **Mantenimento dello Stato del Catalogo**: Grazie all'impostazione e ripristino automatico dello stato tramite `hash` di navigazione e il corretto bind con la vista, il catalogo caricato e visualizzato viene mantenuto attivamente in memoria anche quando si passa momentaneamente alle sezioni EDITOR o GRAPHIC e si ritorna successivamente in CATALOGO.

### VERSIONE 9.9 (Pulsante Pulisci Mappa Graphic)
- **Pulisci Mappa**: Aggiunto un nuovo pulsante `Pulisci Mappa` nella barra degli strumenti della sezione Graphic, di fianco a `Importa da Editor`. Previsto di finestra di conferma, il pulsante ripristina la mappa svuotandola completamente da muri, colori, texture e oggetti posizionati. La lista laterale degli oggetti riflette immediatamente il reset, offrendo all'utente una tela bianca su cui operare.

### VERSIONE 9.10 (Uniformazione layout EDITOR e GRAPHIC)
- **Dimensione Spalle Editor**: Uniformata la larghezza delle spalle sinistra e destra del layout dell'EDITOR a quella della modalità GRAPHIC. Il layout principale (`main`) utilizza ora una griglia con `minmax(280px, 1fr) auto minmax(280px, 1fr)` in sostituzione dei precedenti `483px` fissi, rendendo i due ambienti visivamente coerenti e responsivi alla stessa maniera.

### VERSIONE 9.11 (Uniformazione mappa EDITOR)
- **Dimensione Mappa Editor**: Applicate anche alla griglia centrale (mappa) della vista EDITOR le stesse logiche di dimensionamento previste per GRAPHIC. Il contenitore `.board-wrap` usa ora `width:calc(100vh - 140px); max-width:100%;` e l'SVG `.board` sfrutta `aspect-ratio:1 / 1`, garantendo così un perfetto allineamento tra i due ambienti per quanto riguarda l'ingombro visivo.

### VERSIONE 9.12 (Ottimizzazione UI Graphic: Oggetti e Stanze)
- **Slider Dimensione Oggetti**: Modificati i range minimi degli slider di scala (sia globali che per singolo oggetto) nella vista Graphic, portando il limite inferiore da 20% a 70% per prevenire riduzioni eccessive che renderebbero gli asset illeggibili.
- **Elenco a Due Colonne e Riordino**: Le liste assegnazione per 'Oggetti' e 'Stanze' sono state ridisegnate sfruttando CSS Grid (`1fr 1fr`) per disporre le card su due colonne, ottimizzando notevolmente lo spazio. Inoltre, gli elementi all'interno di queste liste vengono ora riordinati automaticamente in ordine alfabetico, facilitandone la ricerca.

### VERSIONE 9.13 (Drag & Drop Avanzato in Graphic)
- **Colorazione Mappa Diretta**: Aggiunto il supporto per il Drag & Drop diretto di colori (dalla palette) e di sfondi personalizzati (dalla libreria Graphic) sull'intera mappa SVG. Adesso, trascinando e rilasciando un colore su una cella qualsiasi della griglia grafica, l'editor identifica l'area logica di appartenenza (stanza) e ne applica istantaneamente il colore (o lo sfondo), in maniera del tutto equivalente a come avveniva in precedenza solo tramite trascinamento sull'elemento lista.

### VERSIONE 9.14 (Miglioramento visualizzazione placeholder SVG)
- **Fallback SVG Icone Mancanti**: Aggiunto un fallback elegante in Graphic Mode per gli oggetti. Qualora l'icona PNG per l'oggetto corrente non venisse trovata all'interno del Set selezionato, l'applicativo rileva l'errore 404 e scambia dinamicamente l'immagine rotta con un box blu contenente la sigla dell'oggetto (prime due lettere). Questa miglioria si applica sia direttamente sulla mappa SVG, sia all'anteprima della lista oggetti nella spalla destra, rendendo il rendering molto più pulito anche con cataloghi incompleti.

### VERSIONE 9.15 (Correzione offset Drag & Drop in Graphic Mode)
- **Centraggio automatico cursore**: Durante il drag di Colori, Sfondi e Icone dalla spalla destra, l'immagine fantasma trascinata viene ora forzata ad essere perfettamente centrata rispetto al cursore del mouse (tramite ). Questo previene gli sfasamenti del target durante il calcolo dell'evento drop sulla mappa, causati in precedenza dall'offset di click iniziale dell'utente all'interno dell'elemento trascinato.

### VERSIONE 9.15 (Correzione offset Drag & Drop in Graphic Mode)
- **Centraggio automatico cursore**: Durante il drag di Colori, Sfondi e Icone dalla spalla destra, l'immagine fantasma trascinata viene ora forzata ad essere perfettamente centrata rispetto al cursore del mouse (tramite setDragImage). Questo previene gli sfasamenti del target durante il calcolo dell'evento drop sulla mappa, causati in precedenza dall'offset di click iniziale dell'utente all'interno dell'elemento trascinato.

### VERSIONE 9.16 (Pulizia mappa da fallback duplicati)
- **Rimozione fallback su icone personalizzate**: Se a un oggetto sulla mappa viene assegnata un'icona personalizzata trascinandola dalla sezione ICONE (sovrascrivendo quindi l'icona del SET), il sistema ora rimuove e disattiva automaticamente il box blu (o l'immagine di SET sottostante). In questo modo l'icona personalizzata risulterà perfettamente pulita senza un riquadro blu sporgente sotto di essa.

### VERSIONE 9.17 (Ricerca profonda del target nel Drag & Drop)
- **Bypass Ostacoli Drag & Drop**: Risolto un bug causato dalle icone posizionate sulla mappa o altri elementi SVG con pointer-events attivi che bloccavano l'intercettazione della cella sottostante durante un drop. Il sistema utilizza ora document.elementsFromPoint per ispezionare tutti i livelli e trovare in profondità l'esatto hit-box della cella bersaglio (.chit), bypassando qualsiasi altro ostacolo visivo ed eliminando l'uso di fallback matematici imprecisi che causavano lo sfasamento.

### VERSIONE 9.18 (Fix Coordinate Drag & Drop Safari/iOS)
- **Bypass getScreenCTM() per hit testing in ambienti ibridi**: Modificata radicalmente la logica di calcolo del `svgUserPoint`. Browser basati su webkit come Safari possono restituire una matrice CTM del tutto sfasata quando un SVG si auto-adatta (preserveAspectRatio) all'interno di container fluidi. Questo causava una lettura falsata della posizione del mouse qualora `elementsFromPoint` non avesse trovato nulla. Le coordinate ora vengono calcolate matematicamente rispetto al `getBoundingClientRect()`, garantendo hit test infallibili per Drag & Drop e per posizionamento manuale in ogni browser.
- **Hitbox rinforzati (Safari Workaround)**: Aggiunto esplicitamente `pointer-events="all"` alle hitbox `.chit` sulla mappa. In alcuni engine grafici un `fill="transparent"` può non essere considerato sufficente a intercettare l'evento `elementsFromPoint`, impedendo il fix introdotto nella patch precedente. Questa accortezza rende la ricerca profonda della cella perfettamente affidabile in qualsiasi condizione.

### VERSIONE 9.19 (Rollback funzionalità drag & drop per i colori sulla mappa)
- **Rimozione colorazione via mappa**: A causa di persistenti difficoltà nell'elaborazione esatta dell'hit test in scenari con multipli strati interattivi su specifici device o configurazioni di browser, la funzionalità per trascinare e rilasciare colori o sfondi personalizzati *direttamente* sopra la mappa è stata temporaneamente rimossa dal codice della modalità Graphic.
- **Ritorno al workflow standard**: L'assegnazione di colori e background alle stanze resta operativa nel suo formato classico originario, ovvero trascinando i campioni desiderati sopra l'elenco testuale delle "Stanze" nella spalla di destra dell'Editor.

### VERSIONE 9.20 (Fix allineamento header in Editor)
- **Allineamento pulsantiera**: Risolto il problema del wrapping dell'header in modalità Editor. La barra dei pulsanti non va più a capo su viewport inferiori ma rimane su un'unica riga orizzontale coerente, implementando uno scrolling orizzontale se necessario e bloccando le dimensioni delle sezioni esterne.

### VERSIONE 9.21 (Dimezzamento dimensioni palette colore in Graphic)
- **Dimensione box colore**: Ridotte della metà le dimensioni dei box di colore nelle palette del modulo Graphic (sfondo, griglia e font). Modificato il layout grid a 18 colonne (precedentemente 9) per dimezzarne la larghezza mantenendo una struttura ordinata e compatta.

### VERSIONE 9.22 (Pulizia UI Graphic Editor)
- **Rimozione testi descrittivi**: Rimossi i testi di suggerimento e istruzione per il drag & drop ("Oggetti rilevati nella mappa importata...") dalle card OGGETTI e STANZE nella barra laterale destra del Graphic Editor, per rendere l'interfaccia visiva più minimalista e ordinata.

### VERSIONE 9.23 (Fix Export PNG e Rimozione SVG)
- **Risoluzione esportazione PNG**: Le immagini importate da GitHub ora vengono scaricate e convertite internamente in Data URI (Base64) prima di generare l'esportazione in PNG della mappa, risolvendo il problema delle icone e degli oggetti mancanti causato dai blocchi di sicurezza CORS sul Canvas.
- **Rimozione formato SVG**: L'opzione per esportare la mappa come file SVG è stata rimossa dal modale "Esporta immagine" per semplificare l'interfaccia, lasciando unicamente l'export in alta risoluzione PNG.

### VERSIONE 9.24 (Importazione Porte e Finestre in Graphic)
- **Oggetti Porta e Finestra in Graphic**: Aggiornata la logica di "Importa da Editor" della modalità Graphic in modo che includa anche l'importazione di porte e finestre (precedentemente omesse). Questi elementi vengono ora inseriti nella lista "OGGETTI", permettendone la personalizzazione grafica.
- **Posizionamento frazionato su parete**: Le porte e le finestre vengono posizionate visivamente calcolando coordinate frazionate, risultando perfettamente ancorate e centrate sul lato della cella (il muro) su cui sono state piazzate nell'editor. L'immagine ad essi associata viene di conseguenza correttamente centrata e ridimensionata.
- **Icone Vettoriali di Fallback**: In assenza di icone PNG personalizzate dal set, Graphic renderizza porte e finestre usando gli stessi glifi vettoriali stilizzati (senza label) della mappa EDITOR originale, calcolandone l'allineamento orizzontale o verticale a seconda del muro corrispondente.

### VERSIONE 9.25 (Sfondi Personalizzati Cloud)
- **Pre-caricamento automatico delle Texture (Tiles)**: L'editor ora interroga all'avvio la cartella `tiles` sul repository GitHub. Tutte le immagini presenti (PNG, WebP, JPG, JPEG) vengono scaricate dinamicamente e inserite automaticamente come opzioni predefinite nella sezione "Sfondi personalizzati" di Graphic, senza richiedere il caricamento manuale da parte dell'utente. Questa logica garantisce che le texture per i pavimenti (ad es. legno, erba, ecc.) siano sempre aggiornate e allineate con le risorse cloud ufficiali.

### VERSIONE 9.26 (Layout Griglia Sfondi Personalizzati)
- **Disposizione a 4 colonne per riga**: La griglia della sezione "Sfondi personalizzati" in Graphic Mode è stata aggiornata per disporre le miniature dei tile in righe da 4 elementi (`repeat(4, 1fr)`), ingrandendole e ottimizzando la resa visiva delle texture dei pavimenti con adattamento `object-fit: cover`.
