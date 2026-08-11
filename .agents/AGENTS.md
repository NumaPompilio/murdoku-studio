# Regole del Progetto Murdoku Studio

## Aggiornamento Continuo delle Specifiche
Ogni volta che viene implementata una nuova funzionalità, una modifica logica o architetturale, una variazione nell'interfaccia o nei test:
- Aggiornare **sempre** il file [`Specifiche/nuove-specifiche.md`](../Specifiche/nuove-specifiche.md).
- Riportare con precisione **solo le differenze e le estensioni** rispetto alle specifiche di partenza in [`Specifiche/specifiche-murdoku-dettagliate.md`](../Specifiche/specifiche-murdoku-dettagliate.md).
- Mantenere il contenuto di `nuove-specifiche.md` sempre coerente e allineato con quanto effettivamente sviluppato.

## Riferimento a Mappe, Puzzle e Soluzioni di Esempio
La cartella `Murdoku_Risolti` (o `Murkodu_Risolti`) contiene mappe e puzzle originali di esempio in formato PDF, spesso corredati delle relative soluzioni (riconoscibili dai nomi dei file, es. `-solution.pdf` o simili). 
Ogni volta che si fa riferimento ad esempi di puzzle, logiche di gioco ufficiali, layout di mappe o soluzioni per confermare delle regole, **è tassativo** fare riferimento al contenuto di questa cartella come "fonte della verità".

In aggiunta, la cartella `Murdoku_NON_Risolti` contiene altre mappe ufficiali (non risolte) suddivise per livello di complessità, che possono essere usate come ulteriore reference per studiare la struttura e il level design originale.

## Versioning dell'Applicazione
Ogni volta che viene effettuata una modifica al codice di `murdoku-studio.html`, è obbligatorio aggiornare il numero di versione mostrato nell'interfaccia (header, accanto a "Studio"):
- **Modifiche minori (aggiunte non strutturali)**: aumentare la sottoversione (es. da 1.0 a 1.1).
- **Nuove funzionalità o modifiche rilevanti**: aumentare la versione principale (es. da 1.2 a 2.0).
- **Bugfixing**: NON comporta un avanzamento di versione.

**ATTENZIONE - Backup di versione**: PRIMA di applicare qualsiasi modifica che comporti l'avanzamento della versione, devi copiare la *vecchia* versione del file `murdoku-studio.html` all'interno della cartella `Versioning/`, rinominandola in base alla versione uscente (es. `murdoku-studio-v1.0.html`). Se la cartella `Versioning` non esiste, creala.

## Pubblicazione Online
Quando l'utente chiede di pubblicare l'editor online (o aggiornare il repo), devi:
1. Sovrascrivere `index.html` creando una copia aggiornata dell'ultimo `murdoku-studio.html`.
2. Eseguire in locale `git add .` e `git commit -m "Aggiornamento versione [VERSIONE]"`.
3. Chiedere esplicitamente all'utente di eseguire `git push origin main` dal suo terminale per completare il deploy (poiché il sandbox di rete blocca i push automatici).

## Terminologia
- **Murdoku Studio** (o **Studio**, o **Questo programma**): si riferisce all'intero applicativo software/web-app sviluppato (l'ambiente che racchiude Editor e Player).
- **PLAYER**: si riferisce alla modalità "PLAY", ovvero la sezione dell'applicazione che si apre cliccando sul pulsante "PLAY" (o "Player").
- **Editor**: si riferisce alla modalità "Editor", ovvero la parte dell'applicazione che si apre cliccando sul pulsante "Editor".
- **MOBILE**: si riferisce solo ed esclusivamente alla visualizzazione da dispositivi mobili (layout responsive, media query), differenziandola dalla modalità desktop.
