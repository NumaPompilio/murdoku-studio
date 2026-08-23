# Regole del Progetto Murdoku Studio

## Aggiornamento Continuo delle Specifiche
Ogni volta che viene implementata una nuova funzionalità, una modifica logica o architetturale, una variazione nell'interfaccia o nei test:
- Aggiornare **sempre** il file [`requirements/nuove-specifiche.md`](../requirements/nuove-specifiche.md).
- Riportare con precisione **solo le differenze e le estensioni** rispetto alle specifiche di partenza in [`requirements/specifiche-murdoku-dettagliate.md`](../requirements/specifiche-murdoku-dettagliate.md).
- Mantenere il contenuto di `nuove-specifiche.md` sempre coerente e allineato con quanto effettivamente sviluppato.

## Riferimento a Mappe, Puzzle e Soluzioni di Esempio
I file di esempio (PDF delle mappe originali, soluzioni, ecc.) si trovano all'interno della cartella `reference/`.
**REGOLA TASSATIVA**: La cartella `reference/` e tutto il suo contenuto NON fanno parte del progetto attivo e devono essere **COMPLETAMENTE IGNORATI** durante lo scanning del codice, le ricerche (grep) o qualsiasi altra operazione di analisi, a meno che l'utente non ti chieda esplicitamente e specificamente di leggerli o farvi riferimento. Non includere mai file presenti in `reference/` nelle modifiche di progetto a meno che non ti venga esplicitamente richiesto.

## Versioning dell'Applicazione
Ogni volta che viene effettuata una modifica al codice di `murdoku-studio.html`, è obbligatorio aggiornare il numero di versione mostrato nell'interfaccia (header, accanto a "Studio"):
- **Modifiche minori (aggiunte non strutturali)**: aumentare la sottoversione (es. da 1.0 a 1.1).
- **Nuove funzionalità o modifiche rilevanti**: aumentare la versione principale (es. da 1.2 a 2.0).
- **Bugfixing**: NON comporta un avanzamento di versione.

**ATTENZIONE - Backup di versione**: PRIMA di applicare qualsiasi modifica che comporti l'avanzamento della versione, devi copiare la *vecchia* versione del file `murdoku-studio.html` all'interno della cartella `versioning/`, rinominandola in base alla versione uscente (es. `murdoku-studio-v1.0.html`). Se la cartella `versioning` non esiste, creala.

## Pubblicazione Online
Quando l'utente chiede di pubblicare l'editor online (o aggiornare il repo), devi:
1. Sovrascrivere `index.html` creando una copia aggiornata dell'ultimo `murdoku-studio.html`.
2. Eseguire in locale `git add .` e `git commit -m "Aggiornamento versione [VERSIONE]"`.
3. Chiedere esplicitamente all'utente di eseguire `git push origin main` dal suo terminale per completare il deploy (poiché il sandbox di rete blocca i push automatici).

## Terminologia
- **Murdoku Studio** (o **Studio**, o **Questo programma**): si riferisce all'intero applicativo software/web-app sviluppato (l'ambiente che racchiude Editor e Player).
- **PLAYER**: si riferisce alla modalità "PLAY", ovvero la sezione dell'applicazione che si apre cliccando sul pulsante "PLAY" (o "Player").
- **PLAYER MODE**: si riferisce specificamente al Player avviato in modalità "pura" o isolata, accessibile tramite URL con il parametro `?mode=player`.
- **SELETTORE DEI PERSONAGGI**: si riferisce al componente del Player (la palette orizzontale) contenente le icone/avatar di tutti i sospettati e della vittima, da cui il giocatore seleziona un personaggio per poterlo poi piazzare sulla mappa.
- **Editor**: si riferisce alla modalità "Editor", ovvero la parte dell'applicazione che si apre cliccando sul pulsante "Editor".
- **MOBILE**: si riferisce solo ed esclusivamente alla visualizzazione da dispositivi mobili (layout responsive, media query), differenziandola dalla modalità desktop.

## Stile e Implementazione dei Popup (Modali)
Ogni volta che viene richiesto di implementare un popup o finestra modale, questo deve seguire fedelmente lo stile e la struttura dei modali già presenti nel progetto (`murdoku-studio.html`):
1. **Struttura HTML**: Deve essere utilizzato un container principale con classe `.modal` (o stili in linea equivalenti) e un sotto-container `.box`:
   ```html
   <div id="myModal" class="modal" style="display:none; position:fixed; inset:0; background:rgba(10,8,14,.72); align-items:center; justify-content:center; z-index:60; padding:20px">
     <div class="box" style="background:var(--panel); border:1px solid var(--line2); border-radius:14px; width:min(500px,96vw); max-height:80vh; display:flex; flex-direction:column; box-shadow:0 30px 80px rgba(0,0,0,.5); overflow:hidden">
       <!-- Header (.mh) -->
       <div class="mh" style="display:flex; align-items:center; gap:10px; padding:13px 16px; border-bottom:1px solid var(--line)">
         <h3 style="margin:0; font-family:var(--serif); font-size:17px">Titolo Modale</h3>
       </div>
       <!-- Body (.mb) -->
       <div class="mb" style="padding:14px 16px; overflow-y:auto; flex:1; display:flex; flex-direction:column; gap:8px">
         ...
       </div>
       <!-- Footer (.mf) -->
       <div class="mf" style="display:flex; gap:8px; padding:12px 16px; border-top:1px solid var(--line); align-items:center; justify-content:flex-end">
         <button class="btn" id="myModalClose">Annulla</button>
         <button class="btn btn-primary" id="myModalConfirm">Conferma</button>
       </div>
     </div>
   </div>
   ```
2. **Comportamento JavaScript**:
   - Apertura impostando `.style.display = "flex"`.
   - Chiusura impostando `.style.display = "none"`.
   - Gestione della chiusura cliccando sull'overlay (lo sfondo esterno al `.box`).
   - Gestione del pulsante di chiusura.
