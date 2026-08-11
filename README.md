# Murdoku Studio

Generatore ed editor di enigmi logici deduttivi **Murdoku** (fascicolo noir).

🎮 **[Gioca online a Murdoku Studio](https://numapompilio.github.io/murdoku-studio/)**

L'applicazione è contenuta interamente nel file **[`murdoku-studio.html`](murdoku-studio.html)**: è standalone, apribile con un doppio clic su qualsiasi browser moderno, utilizzabile completamente offline e priva di dipendenze o CDN esterne.

---

## 📁 Struttura del Progetto

```text
├── murdoku-studio.html     # Applicazione standalone completa (Motore + GUI)
├── package.json            # Script di collaudo e sviluppo
├── tests/
│   └── engine.test.js      # Suite di test headless per MurdokuEngine
├── Specifiche/
│   └── specifiche-murdoku-dettagliate.md  # Specifica tecnica di riferimento
├── Claude_Application/     # Copia archivio generata inizialmente
└── README.md
```

---

## 🚀 Come Utilizzare l'Applicazione

1. **Uso immediato**: fai doppio clic sul file `murdoku-studio.html` per aprirlo nel tuo browser predefinito.
2. **Generazione rapida**:
   - Clicca **🎲 Genera mappa** per creare una configurazione casuale coerente.
   - Clicca **🔍 Genera indizi** oppure **✨ Più eleganti** per ottenere un set di indizi univoco con il percorso di ragionamento passo-passo.
   - Clicca **🖨️ Stampa PDF** per stampare o salvare in PDF l'enigma su due fogli A4 (Pagina 1: Enigma per il giocatore; Pagina 2: Soluzione e ragionamento).

---

## 🧪 Esecuzione dei Test

Per collaudare il motore logico e verificare che tutte le regole e gli invarianti di gioco siano rispettati:

```bash
npm test
```

I test verificano:
- Costanti e alfabeti ammessi.
- Regole di adiacenza e calcolo aree/stanze bloccate solo dai muri.
- Piazzamento *n-rooks* e vincolo vittima (sola con l'assassino).
- Risoluzione deterministica CSP (MRV + forward-checking).
- Unicità degli indizi per tutte le difficoltà (`facile`, `medio`, `difficile`, `expert`) e dimensioni (5–10).
- Calcolo dell'eleganza e generazione della soluzione ragionata.

---

## 🧩 Architettura di `murdoku-studio.html`

L'applicazione è strutturata in due sezioni logiche:

1. **`MurdokuEngine` (Primo `<script>`)**:
   - Logica pura, zero dipendenze dal DOM.
   - Esposto come `window.MurdokuEngine` nel browser e `module.exports` in ambienti Node.js.
   - Fornisce funzioni per generazione mappa, piazzamento, catalogo indizi, solver CSP, calcolo dell'eleganza (`eleganceScore`) e soluzione ragionata (`reasonedSolution`).

2. **Interfaccia Grafica (Secondo `<script>` + CSS inline)**:
   - Rendering SVG vettoriale interattivo con supporto per muri spessi, oggetti e personaggi semi-trasparenti.
   - Gestione strumenti (muri, blocco celle, oggetti, personaggi, gomma a livelli).
   - Autosave in `localStorage` (`murdoku:autosave`).
   - Flusso di abbellimento narrativo tramite AI (prompt builder e validatore JSON paste-back con fallback garantito).
   - Stampa vettoriale pulita per A4.
