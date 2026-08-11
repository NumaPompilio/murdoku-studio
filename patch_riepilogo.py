import os

path = '/Users/mnuzzo/Documents/Antigravity IDE Projects/Murkodu Editor/Output/riepilogo_indizi.md'
with open(path, 'r') as f:
    content = f.read()

# Add to Hard section
hard_addition = """
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
"""

# Add to Expert section
expert_addition = """
### 27. Proiezioni Spaziali "Qualcuno" (SOMEONE_OFFSET)
- **Regola:** Questo vincolo non asserisce nulla direttamente sul soggetto o su un bersaglio noto, ma proietta un raggio. Indica che a una certa distanza esatta (in righe o colonne) verso una certa direzione cardinale c'è *almeno una persona* (non specificata) posizionata sopra o accanto a uno specifico oggetto.
- **Esempi:** 
  - *"Esattamente 3 colonne a est di Bob, qualcuno si trova su una sedia."*
  - *"Esattamente 2 righe a sud di Alice, qualcuno si trova accanto a un tavolo."*

### 28. Co-presenza Specifica (TRAIT_ON_OBJECT_IN_AREA)
- **Regola:** Asserisce l'esistenza di un altro personaggio con un tratto specifico (es. genere) appoggiato su un oggetto specifico all'interno della stessa area.
- **Esempi:** 
  - *"Nella sua area c'è un uomo su un letto."*
"""

content = content.replace("## 🟣 Difficoltà: Expert", hard_addition + "\n## 🟣 Difficoltà: Expert")
content = content + "\n" + expert_addition

with open(path, 'w') as f:
    f.write(content)
