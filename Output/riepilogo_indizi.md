# Riepilogo Indizi Murdoku Studio

Questo documento elenca tutte le tipologie di indizi generate dal motore CSP di Murdoku Studio, le regole logiche sottostanti, esempi testuali e i livelli di difficoltà in cui possono apparire.

---

## 🟢 Difficoltà: Easy
Questi indizi sono i più diretti e basilari. Forniscono informazioni assolute e non richiedono di relazionare più personaggi o oggetti complessi.

### 1. IN_AREA (Presenza in un'area)
- **Regola:** Il personaggio si trova all'interno di una specifica stanza (area) delimitata dai muri.
- **Esempi:** 
  - *"Carlo si trova in Cucina."*
  - *"Marta si trova in Giardino."*

### 2. IN_ROW / IN_COL (Coordinate assolute)
- **Regola:** Fissa la riga o la colonna esatta in cui si trova il personaggio (1-indexed).
- **Esempi:** 
  - *"Alice si trova nella riga 3."*
  - *"Bob si trova nella colonna 5."*

### 3. EDGE (Bordi della mappa)
- **Regola:** Il personaggio si trova in una delle 4 estremità assolute della mappa (prima/ultima riga, prima/ultima colonna).
- **Esempi:** 
  - *"Carlo si trova nella riga più in alto."*
  - *"Marta si trova nell'ultima colonna."*

### 4. ON_OBJECT (Su un oggetto calpestabile)
- **Regola:** Il personaggio condivide la cella con un oggetto di tipo calpestabile (es. sedia, tappeto, pozzanghera).
- **Esempi:** 
  - *"Alice si trova su una sedia."*
  - *"Bob si trova su un tappeto."*

### 5. BESIDE_OBJECT (Vicinanza a un oggetto)
- **Regola:** Il personaggio si trova in una cella ortogonalmente adiacente (su, giù, destra, sinistra) a un oggetto, *nella stessa stanza* e senza muri di mezzo.
- **Esempi:** 
  - *"Carlo era accanto a un tavolo."*
  - *"Marta era accanto a una pianta."*

### 6. ALONE (Da solo)
- **Regola:** Il personaggio è l'unico *sospetto* presente in quell'area (la presenza della vittima viene ignorata).
- **Esempi:** 
  - *"Bob era da solo nella sua area."*

### 7. ONLY_ON_OBJECT (Unico su oggetto)
- **Regola:** Il personaggio è l'unico sospetto dell'intera mappa a trovarsi sopra a uno specifico oggetto calpestabile.
- **Esempi:** 
  - *"Bob è l'unica persona seduta su una sedia."*
  - *"Alice è l'unica persona su un tappeto."*

---

## 🟡 Difficoltà: Medium
Oltre a tutti gli indizi di livello *Easy*, questa difficoltà introduce le prime relazioni spaziali di base e concetti geometrici leggermente più complessi.

### 8. SAME_AREA (Stessa area generica)
- **Regola:** Due personaggi si trovano nella medesima stanza, senza specificare quale.
- **Esempi:** 
  - *"Alice si trova nella stessa area di Bob."*
  - *"Carlo si trova nella stessa area di Marta."*

### 9. WITH_IN_AREA (Stessa area specifica)
- **Regola:** Variante più esplicita di `SAME_AREA`: specifica anche il nome della stanza.
- **Esempi:** 
  - *"Alice è con Bob in Cucina."*
  - *"Marta è con Carlo nel Salotto."*

### 10. CORNER (Angolo della stanza)
- **Regola:** Il personaggio si trova in una cella della sua stanza che tocca esattamente due muri o bordi ortogonali.
- **Esempi:** 
  - *"Marta si trova in un angolo della sua area."*

### 11. FRONT_WINDOW (Di fronte a una finestra)
- **Regola:** Il personaggio si trova in una cella adiacente a un muro che funge da confine esterno della mappa (se applicabile).
- **Esempi:** 
  - *"Carlo si trova di fronte a una finestra."*

---

## 🔴 Difficoltà: Hard
Oltre ai precedenti, introduce indizi di esclusione (negazioni logiche) e relazioni posizionali molto precise tra entità.

### 12. NOT_IN_AREA (Esclusione area)
- **Regola:** Specifica una stanza in cui il personaggio sicuramente *non* si trova.
- **Esempi:** 
  - *"Carlo non si trova in Bagno."*

### 13. NOT_EDGE_COL (Esclusione bordi)
- **Regola:** Il personaggio si trova in una colonna centrale (esclude la prima e l'ultima colonna della griglia).
- **Esempi:** 
  - *"Alice non si trova né nella prima né nell'ultima colonna."*

### 14. NOT_BESIDE_OBJECT (Lontananza da oggetto)
- **Regola:** Nessuna delle celle ortogonalmente adiacenti e raggiungibili dal personaggio contiene l'oggetto specificato.
- **Esempi:** 
  - *"Marta non si trova accanto a un tavolo."*

### 15. DIFF_AREA (Aree differenti)
- **Regola:** Due personaggi si trovano obbligatoriamente in due stanze diverse.
- **Esempi:** 
  - *"Carlo si trova in un'area diversa da Alice."*

### 16. CARDINAL (Direzione cardinale relativa)
- **Regola:** Un personaggio si trova in una determinata direzione (N/S/E/W) rispetto a un altro. Non implica adiacenza, valuta solo le coordinate relative.
- **Esempi:** 
  - *"Alice si trova a nord rispetto a Bob."*
  - *"Marta si trova a est rispetto a Carlo."*

### 17. ALONE_WITH_TRAIT (Solo con [Tratto])
- **Regola:** Nella stanza del personaggio ci sono esattamente due sospetti, e l'altro sospetto possiede un tratto fisico/visivo specifico.
- **Esempi:** 
  - *"Alice si trova da sola nella sua area con un uomo."*
  - *"Carlo si trova da solo nella sua area con una persona con gli occhiali."*

### 18. NOT_CORNER (Non in un angolo)
- **Regola:** Negazione dell'indizio `CORNER`.
- **Esempi:** 
  - *"Bob non si trova in un angolo della sua area."*

### 19. ROWS_OFFSET (Distanza esatta in righe)
- **Regola:** Definisce la distanza assoluta in righe (Nord o Sud) tra due personaggi.
- **Esempi:** 
  - *"Marta si trova esattamente 2 righe a sud di Alice."*

### 20. OBJECT_DIR (Direzione cardinale da oggetto)
- **Regola:** Il personaggio si trova nella cella *esattamente* adiacente all'oggetto indicato, nella direzione cardinale specificata.
- **Esempi:** 
  - *"Carlo si trova esattamente a nord di una statua."*

---


### 19. Operatori "OR" (Logica alternativa limitata)
- **Regola:** Il personaggio si trova su uno di due oggetti o accanto a uno di due oggetti, oppure in una di due righe/colonne. Introduce incertezza formale.
- **Esempi:** 
  - *"Diana si trova su una sedia o su un divano."*
  - *"Giorgio si trova accanto a un tavolo o a un vaso."*
  - *"Silvia si trova nella prima o nella seconda colonna."*

### 20. COLS_OFFSET (Distanza orizzontale esatta)
- **Regola:** Simmetrico a ROWS_OFFSET. Specifica l'esatta distanza in colonne e la direzione Est/Ovest rispetto a un altro personaggio.
- **Esempi:** 
  - *"Paolo si trova esattamente 2 colonne a est di Giulia."*

### 21. ALONE_WITH_PERSON (Isolamento selettivo)
- **Regola:** Il personaggio è l'unica altra persona nell'area assieme a un target specifico. Non ci sono altre persone nella loro area.
- **Esempi:** 
  - *"Bob è da solo nella sua area con Alice."*

## 🟣 Difficoltà: Expert
Oltre a tutto il catalogo *Hard*, introduce indizi **Globali** e **Indiretti** che non fanno riferimento a un sospetto noto, o che forniscono informazioni matematiche sull'intera griglia.

### 21. INDIRECT (Identità Mascherata)
- **Regola:** Prende un indizio base e maschera il nome del soggetto sostituendolo con un tratto visivo/fisico (genere, cappello, occhiali). È un indizio esistenziale (almeno una persona con quel tratto lo soddisfa).
- **Esempi:** 
  - *"Una donna si trova in Cucina."*
  - *"Una persona con il cappello era esattamente a nord di un tavolo."*

### 22. EMPTY_ROWS / EMPTY_COLS (Righe/Colonne vuote)
- **Regola:** Fornisce il numero esatto di righe o colonne in cui non è presente alcun personaggio (né sospetti né vittima).
- **Esempi:** 
  - *"Ci sono esattamente 2 righe vuote (senza persone)."*
  - *"C'è esattamente 1 colonna vuota (senza persone)."*

### 23. AREA_MIN_PEOPLE (Densità di zona)
- **Regola:** Indica che in una specifica area vi è un numero di persone (sospetti + vittima) superiore o uguale a una certa soglia.
- **Esempi:** 
  - *"Ci sono almeno 3 persone in totale in Salotto."*

### 24. AREA_PARITY (Parità persone in area)
- **Regola:** Indica se il numero totale di persone in una stanza è pari o dispari.
  - *"C'è un numero dispari di persone in totale in Cucina."*

---

## 🎩 Calcolo dell'Eleganza del Puzzle
Il motore di Murdoku Studio valuta la qualità di ogni set di indizi generato tramite un punteggio di **Eleganza** (da 0 a 100). Un puzzle "elegante" è un puzzle che si risolve fluidamente con deduzioni dirette, senza costringere il giocatore ad andare a tentativi. 

Il punteggio parte da **100 punti base**, a cui vengono applicati i seguenti modificatori:

### Penalità (Ostacoli alla fluidità)
1. **Passi per Unicità ("fidati")** `-14 punti`: Penalità severa. Si verifica quando un personaggio viene piazzato non per deduzione logica diretta, ma procedendo "a tentativi" e accorgendosi che posizionandolo altrove si romperebbe il puzzle. È la pratica meno appagante per il giocatore umano.
2. **Passi per Contraddizione** `-5 punti`: Penalità minore. Si verifica quando bisogna ipotizzare momentaneamente uno scenario e spingersi avanti di un paio di deduzioni per trovare un assurdo. È legittimo, ma meno elegante di una deduzione diretta e immediata.
3. **Eccessiva Verbosità** *(fino a -10 o più)*: Se la densità di indizi è troppo alta (in media più di 2,2 indizi per ogni personaggio), il puzzle risulta prolisso e legnoso da leggere, per cui viene inflitta una penalità progressiva.

### Bonus (Varietà e Creatività)
4. **Varietà degli Indizi** *(fino a +15 punti)*: Viene premiato il puzzle che utilizza molte *tipologie* diverse di indizi rispetto al numero totale di indizi forniti (es. mischiare indizi di vicinanza, aree, coordinate e negazioni), per evitare set ripetitivi.
5. **Ampiezza delle Categorie** *(da +4 a +12 punti)*: Se gli indizi spaziano tra 3 o più macrocategorie strutturali diverse (es. Posizione, Relazione, Oggetto, Globale), il punteggio riceve un ulteriore bonus per la completezza dell'esperienza logica.

### Fasce di Giudizio
In base al punteggio finale ottenuto, il set di indizi viene classificato come:
- **Ottima**: da 80 a 100 (Un puzzle fluido, brillante e puro)
- **Buona**: da 65 a 79 (Un puzzle solido e piacevole)
- **Discreta**: da 45 a 64 (Risolvibile ma forse con qualche collo di bottiglia noioso)
- **Scarsa**: sotto 45 (Un puzzle frustrante o troppo confusionario)


### 27. Proiezioni Spaziali "Qualcuno" (SOMEONE_OFFSET)
- **Regola:** Questo vincolo non asserisce nulla direttamente sul soggetto o su un bersaglio noto, ma proietta un raggio. Indica che a una certa distanza esatta (in righe o colonne) verso una certa direzione cardinale c'è *almeno una persona* (non specificata) posizionata sopra o accanto a uno specifico oggetto.
- **Esempi:** 
  - *"Esattamente 3 colonne a est di Bob, qualcuno si trova su una sedia."*
  - *"Esattamente 2 righe a sud di Alice, qualcuno si trova accanto a un tavolo."*

### 28. Co-presenza Specifica (TRAIT_ON_OBJECT_IN_AREA)
- **Regola:** Asserisce l'esistenza di un altro personaggio con un tratto specifico (es. genere) appoggiato su un oggetto specifico all'interno della stessa area.
- **Esempi:** 
  - *"Nella sua area c'è un uomo su un letto."*
