# Configurazione mappa "Murdoku"

Descrizione completa della mappa: stanze (aree), muri, oggetti e personaggi. Coordinate come (riga, colonna) a partire da 1.

Griglia 9×9. Regole: una sola persona per riga e per colonna; "accanto" = celle adiacenti nella stessa area (i muri bloccano); la vittima è sola con l'assassino (nella sua area c'è esattamente un sospetto).

## Stanze / aree

- **A = Como Ovest** [Stile: color=#bcd4c4] — celle occupabili: (1,2), (2,1), (3,1), (4,1), (5,1), (5,2)
- **B = Piazza Cavour** [Stile: color=#d2b48c] — celle occupabili: (1,3), (1,4), (1,5), (1,6), (1,7), (2,3), (2,4), (2,5), (2,7), (3,3), (3,4), (3,6), (3,7), (4,3), (4,5), (4,6), (4,7), (5,3), (5,4), (5,5), (5,6)
- **C = Como Est** [Stile: color=#e8e4dc] — celle occupabili: (1,8), (2,9), (3,8), (3,9), (4,8), (4,9), (5,9)
- **D = Lungolago** [Stile: color=#e08d79] — celle occupabili: (6,1), (6,2), (6,3), (6,4), (6,5), (6,6), (6,7), (6,8), (6,9), (7,1), (7,2), (7,3), (7,4), (7,5), (7,6), (7,7), (7,8), (7,9)
- **E = Lago** [Stile: pattern=mare] — celle occupabili: (8,1), (8,2), (8,3), (8,4), (8,5), (8,6), (8,8), (8,9), (9,1), (9,2), (9,3), (9,5), (9,6), (9,7), (9,8), (9,9)

**Griglia di aree e muri** — `┃`/`━` = muro tra due celle; `#` = cella bloccata:
```
     1   2   3   4   5   6   7   8   9  
1 |  a   A ┃ B   B   B   B   B ┃ C   c 
  |                                    
2 |  A   a ┃ B   B   B   b   B ┃ c   C 
  |                                    
3 |  A   a ┃ B   B   b   B   B ┃ C   C 
  |                                    
4 |  A   a ┃ B   b   B   B   B ┃ C   C 
  |                                    
5 |  A   A ┃ B   B   B   B   b ┃ c   C 
  | ━━━ ━━━ ━━━ ━━━ ━━━ ━━━ ━━━ ━━━ ━━━
6 |  D   D   D   D   D   D   D   D   D 
  |                                    
7 |  D   D   D   D   D   D   D   D   D 
  | ━━━ ━━━ ━━━ ━━━ ━━━ ━━━ ━━━ ━━━ ━━━
8 |  E   E   E   E   E   E   e   E   E 
  |                                    
9 |  E   E   E   e   E   E   E   E   E 
```

## Muri (coppie di celle separate)

- stessa riga: (1,2)|(1,3), (1,7)|(1,8), (2,2)|(2,3), (2,7)|(2,8), (3,2)|(3,3), (3,7)|(3,8), (4,2)|(4,3), (4,7)|(4,8), (5,2)|(5,3), (5,7)|(5,8)
- stessa colonna: (5,1)|(6,1), (5,2)|(6,2), (5,3)|(6,3), (5,4)|(6,4), (5,5)|(6,5), (5,6)|(6,6), (5,7)|(6,7), (5,8)|(6,8), (5,9)|(6,9), (7,1)|(8,1), (7,2)|(8,2), (7,3)|(8,3), (7,4)|(8,4), (7,5)|(8,5), (7,6)|(8,6), (7,7)|(8,7), (7,8)|(8,8), (7,9)|(8,9)

## Oggetti (elementi)

Minuscolo = calpestabile, MAIUSCOLO = ostacolo, `..` = vuota, `##` = bloccata:
```
     1   2   3   4   5   6   7   8   9  
1 | TR .. .. .. .. .. .. .. TR 
2 | .. FL .. .. .. PL .. FL .. 
3 | .. PM .. ch BL ch .. .. .. 
4 | .. FL .. PL .. .. .. .. .. 
5 | .. .. ch .. ch .. PL BL .. 
6 | cr ch .. cr .. ch .. .. cr 
7 | .. pt .. .. .. .. .. .. pt 
8 | .. .. .. bt bt .. BL .. .. 
9 | .. bt .. BO .. .. .. .. .. 
```

**Legenda oggetti:**
- `TR` = albero (ostacolo)
- `FL` = fiori (ostacolo)
- `PL` = pianta (ostacolo)
- `PM` = palma (ostacolo)
- `ch` = sedia (calpestabile)
- `BL` = masso (ostacolo)
- `cr` = auto (calpestabile)
- `pt` = pontile (calpestabile)
- `bt` = barca (calpestabile)
- `BO` = boa (ostacolo)

**Celle bloccate:** nessuna

**Oggetti per cella:** (1,1) albero (ostacolo); (1,9) albero (ostacolo); (2,2) fiori (ostacolo); (2,6) pianta (ostacolo); (2,8) fiori (ostacolo); (3,2) palma (ostacolo); (3,4) sedia (calpestabile); (3,5) masso (ostacolo); (3,6) sedia (calpestabile); (4,2) fiori (ostacolo); (4,4) pianta (ostacolo); (5,3) sedia (calpestabile); (5,5) sedia (calpestabile); (5,7) pianta (ostacolo); (5,8) masso (ostacolo); (6,1) auto (calpestabile); (6,2) sedia (calpestabile); (6,4) auto (calpestabile); (6,6) sedia (calpestabile); (6,9) auto (calpestabile); (7,2) pontile (calpestabile); (7,9) pontile (calpestabile); (8,4) barca (calpestabile); (8,5) barca (calpestabile); (8,7) masso (ostacolo); (9,2) barca (calpestabile); (9,4) boa (ostacolo).

## Personaggi

- A = Anna: (1,2)
- B = Bruna: (2,3)
- C = Carlo: (3,8)
- D = Davide: (4,9)
- E = Elio: (5,6)
- F = Furio: (6,5)
- G = Giulia: (7,1)
- H = Hiro: (8,4) — **assassino**
- V = Zara (vittima): (9,7)

**Assassino: Hiro** — unico sospetto nell'area della vittima.

<!-- MURDOKU_STATE_B64: eyJ2ZXJzaW9uIjogMSwgInRpdGxlIjogIiIsICJzaXplIjogOSwgImNlbGxzIjogW3sicm93IjogMCwgImNvbCI6IDAsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAiYWxiZXJvIn0sIHsicm93IjogMCwgImNvbCI6IDEsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAwLCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDAsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMCwgImNvbCI6IDQsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAwLCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDAsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMCwgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAwLCAiY29sIjogOCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJhbGJlcm8ifSwgeyJyb3ciOiAxLCAiY29sIjogMCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDEsICJjb2wiOiAxLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogImZpb3JpIn0sIHsicm93IjogMSwgImNvbCI6IDIsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAxLCAiY29sIjogMywgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDEsICJjb2wiOiA0LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMSwgImNvbCI6IDUsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAidmFzb19kaV9waWFudGUifSwgeyJyb3ciOiAxLCAiY29sIjogNiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDEsICJjb2wiOiA3LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogImZpb3JpIn0sIHsicm93IjogMSwgImNvbCI6IDgsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAyLCAiY29sIjogMCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDIsICJjb2wiOiAxLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInBhbG1hIn0sIHsicm93IjogMiwgImNvbCI6IDIsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAyLCAiY29sIjogMywgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJzZWRpYSJ9LCB7InJvdyI6IDIsICJjb2wiOiA0LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInNjb2dsaW8ifSwgeyJyb3ciOiAyLCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJzZWRpYSJ9LCB7InJvdyI6IDIsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMiwgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAyLCAiY29sIjogOCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDMsICJjb2wiOiAwLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMywgImNvbCI6IDEsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAiZmlvcmkifSwgeyJyb3ciOiAzLCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDMsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInZhc29fZGlfcGlhbnRlIn0sIHsicm93IjogMywgImNvbCI6IDQsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAzLCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDMsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMywgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAzLCAiY29sIjogOCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDQsICJjb2wiOiAwLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNCwgImNvbCI6IDEsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA0LCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJzZWRpYSJ9LCB7InJvdyI6IDQsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNCwgImNvbCI6IDQsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAic2VkaWEifSwgeyJyb3ciOiA0LCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDQsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInZhc29fZGlfcGlhbnRlIn0sIHsicm93IjogNCwgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAic2NvZ2xpbyJ9LCB7InJvdyI6IDQsICJjb2wiOiA4LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNSwgImNvbCI6IDAsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAiYXV0byJ9LCB7InJvdyI6IDUsICJjb2wiOiAxLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInNlZGlhIn0sIHsicm93IjogNSwgImNvbCI6IDIsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA1LCAiY29sIjogMywgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJhdXRvIn0sIHsicm93IjogNSwgImNvbCI6IDQsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA1LCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJzZWRpYSJ9LCB7InJvdyI6IDUsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNSwgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA1LCAiY29sIjogOCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJhdXRvIn0sIHsicm93IjogNiwgImNvbCI6IDAsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA2LCAiY29sIjogMSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJwZWRhbG8ifSwgeyJyb3ciOiA2LCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDYsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNiwgImNvbCI6IDQsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA2LCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDYsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNiwgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA2LCAiY29sIjogOCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJwZWRhbG8ifSwgeyJyb3ciOiA3LCAiY29sIjogMCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDcsICJjb2wiOiAxLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNywgImNvbCI6IDIsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA3LCAiY29sIjogMywgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJiYXJjYV9hX3ZlbGEifSwgeyJyb3ciOiA3LCAiY29sIjogNCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJiYXJjYV9hX3ZlbGEifSwgeyJyb3ciOiA3LCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDcsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInNjb2dsaW8ifSwgeyJyb3ciOiA3LCAiY29sIjogNywgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDcsICJjb2wiOiA4LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogOCwgImNvbCI6IDAsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA4LCAiY29sIjogMSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJiYXJjYV9hX3ZlbGEifSwgeyJyb3ciOiA4LCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDgsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogImJvYSJ9LCB7InJvdyI6IDgsICJjb2wiOiA0LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogOCwgImNvbCI6IDUsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA4LCAiY29sIjogNiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDgsICJjb2wiOiA3LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogOCwgImNvbCI6IDgsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfV0sICJ3YWxscyI6IFsiNiwwfDcsMCIsICI2LDF8NywxIiwgIjYsMnw3LDIiLCAiNiwzfDcsMyIsICI2LDR8Nyw0IiwgIjYsNXw3LDUiLCAiNiw2fDcsNiIsICI2LDd8Nyw3IiwgIjYsOHw3LDgiLCAiNCwwfDUsMCIsICI0LDF8NSwxIiwgIjQsMnw1LDIiLCAiNCwzfDUsMyIsICI0LDR8NSw0IiwgIjQsNXw1LDUiLCAiNCw2fDUsNiIsICI0LDd8NSw3IiwgIjQsOHw1LDgiLCAiMCwxfDAsMiIsICIxLDF8MSwyIiwgIjIsMXwyLDIiLCAiMywxfDMsMiIsICI0LDF8NCwyIiwgIjAsNnwwLDciLCAiMSw2fDEsNyIsICIyLDZ8Miw3IiwgIjMsNnwzLDciLCAiNCw2fDQsNyJdLCAid2luZG93cyI6IFtdLCAiZG9vcnMiOiBbXSwgImFyZWFOYW1lcyI6IHsiMCI6ICJDb21vIE92ZXN0IiwgIjEiOiAiUGlhenphIENhdm91ciIsICIyIjogIkNvbW8gRXN0IiwgIjMiOiAiTHVuZ29sYWdvIiwgIjQiOiAiTGFnbyJ9LCAiYXJlYUZsb29ycyI6IHsiMCI6IHsidHlwZSI6ICJjb2xvciIsICJ2YWx1ZSI6ICIjYmNkNGM0In0sICIxIjogeyJ0eXBlIjogImNvbG9yIiwgInZhbHVlIjogIiNkMmI0OGMifSwgIjIiOiB7InR5cGUiOiAiY29sb3IiLCAidmFsdWUiOiAiI2U4ZTRkYyJ9LCAiMyI6IHsidHlwZSI6ICJjb2xvciIsICJ2YWx1ZSI6ICIjZTA4ZDc5In0sICI0IjogeyJ0eXBlIjogInBhdHRlcm4iLCAidmFsdWUiOiAibWFyZSJ9fSwgImVudGl0aWVzIjogW3siaWQiOiAiczAiLCAia2luZCI6ICJzdXNwZWN0IiwgImluaXRpYWwiOiAiQSIsICJuYW1lIjogIkFubmEiLCAicm93IjogMCwgImNvbCI6IDEsICJpc011cmRlcmVyIjogZmFsc2UsICJnZW5kZXIiOiAiRiIsICJoYXNIYXQiOiBmYWxzZSwgImhhc0dsYXNzZXMiOiBmYWxzZX0sIHsiaWQiOiAiczEiLCAia2luZCI6ICJzdXNwZWN0IiwgImluaXRpYWwiOiAiQiIsICJuYW1lIjogIkJydW5hIiwgInJvdyI6IDEsICJjb2wiOiAyLCAiaXNNdXJkZXJlciI6IGZhbHNlLCAiZ2VuZGVyIjogIkYiLCAiaGFzSGF0IjogZmFsc2UsICJoYXNHbGFzc2VzIjogZmFsc2V9LCB7ImlkIjogInMyIiwgImtpbmQiOiAic3VzcGVjdCIsICJpbml0aWFsIjogIkMiLCAibmFtZSI6ICJDYXJsbyIsICJyb3ciOiAyLCAiY29sIjogNywgImlzTXVyZGVyZXIiOiBmYWxzZSwgImdlbmRlciI6ICJNIiwgImhhc0hhdCI6IGZhbHNlLCAiaGFzR2xhc3NlcyI6IGZhbHNlfSwgeyJpZCI6ICJzMyIsICJraW5kIjogInN1c3BlY3QiLCAiaW5pdGlhbCI6ICJEIiwgIm5hbWUiOiAiRGF2aWRlIiwgInJvdyI6IDMsICJjb2wiOiA4LCAiaXNNdXJkZXJlciI6IGZhbHNlLCAiZ2VuZGVyIjogIk0iLCAiaGFzSGF0IjogZmFsc2UsICJoYXNHbGFzc2VzIjogdHJ1ZX0sIHsiaWQiOiAiczQiLCAia2luZCI6ICJzdXNwZWN0IiwgImluaXRpYWwiOiAiRSIsICJuYW1lIjogIkVsaW8iLCAicm93IjogNCwgImNvbCI6IDUsICJpc011cmRlcmVyIjogZmFsc2UsICJnZW5kZXIiOiAiTSIsICJoYXNIYXQiOiBmYWxzZSwgImhhc0dsYXNzZXMiOiBmYWxzZX0sIHsiaWQiOiAiczUiLCAia2luZCI6ICJzdXNwZWN0IiwgImluaXRpYWwiOiAiRiIsICJuYW1lIjogIkZ1cmlvIiwgInJvdyI6IDUsICJjb2wiOiA0LCAiaXNNdXJkZXJlciI6IGZhbHNlLCAiZ2VuZGVyIjogIk0iLCAiaGFzSGF0IjogZmFsc2UsICJoYXNHbGFzc2VzIjogZmFsc2V9LCB7ImlkIjogInM2IiwgImtpbmQiOiAic3VzcGVjdCIsICJpbml0aWFsIjogIkciLCAibmFtZSI6ICJHaXVsaWEiLCAicm93IjogNiwgImNvbCI6IDAsICJpc011cmRlcmVyIjogZmFsc2UsICJnZW5kZXIiOiAiRiIsICJoYXNIYXQiOiBmYWxzZSwgImhhc0dsYXNzZXMiOiB0cnVlfSwgeyJpZCI6ICJzNyIsICJraW5kIjogInN1c3BlY3QiLCAiaW5pdGlhbCI6ICJIIiwgIm5hbWUiOiAiSGlybyIsICJyb3ciOiA3LCAiY29sIjogMywgImlzTXVyZGVyZXIiOiB0cnVlLCAiZ2VuZGVyIjogIk0iLCAiaGFzSGF0IjogdHJ1ZSwgImhhc0dsYXNzZXMiOiB0cnVlfSwgeyJpZCI6ICJ2aWN0aW0iLCAia2luZCI6ICJ2aWN0aW0iLCAiaW5pdGlhbCI6ICJWIiwgIm5hbWUiOiAiWmFyYSIsICJyb3ciOiA4LCAiY29sIjogNiwgImlzTXVyZGVyZXIiOiBmYWxzZSwgImdlbmRlciI6ICJGIiwgImhhc0hhdCI6IHRydWUsICJoYXNHbGFzc2VzIjogdHJ1ZX1dLCAic3VzcGVjdENvdW50IjogOCwgImNsdWVzIjogW3siaWQiOiAiYzY4OSIsICJ0eXBlIjogIkJFU0lERV9PQkpFQ1QiLCAic3ViamVjdElkIjogInMwIiwgInN1YmplY3ROYW1lIjogIkFubmEiLCAiZmFjdCI6IHsib2JqZWN0S2luZCI6ICJhbGJlcm8ifSwgImNhdGVnb3J5IjogIm9nZ2V0dG8iLCAiZGlmZiI6IDEsICJzY29wZSI6ICJzdWJqZWN0IiwgInRleHQiOiAiQW5uYSBzaSB0cm92YSBhY2NhbnRvIGEgdW4gYWxiZXJvLiJ9LCB7ImlkIjogImM3MDAiLCAidHlwZSI6ICJJTl9DT0wiLCAic3ViamVjdElkIjogInMyIiwgInN1YmplY3ROYW1lIjogIkNhcmxvIiwgImZhY3QiOiB7ImNvbCI6IDd9LCAiY2F0ZWdvcnkiOiAicG9zaXppb25lIiwgImRpZmYiOiAxLCAic2NvcGUiOiAic3ViamVjdCIsICJ0ZXh0IjogIkNhcmxvIHNpIHRyb3ZhIG5lbGxhIGNvbG9ubmEgOC4ifSwgeyJpZCI6ICJjNzA2IiwgInR5cGUiOiAiSU5fUk9XIiwgInN1YmplY3RJZCI6ICJzMyIsICJzdWJqZWN0TmFtZSI6ICJEYXZpZGUiLCAiZmFjdCI6IHsicm93IjogM30sICJjYXRlZ29yeSI6ICJwb3NpemlvbmUiLCAiZGlmZiI6IDEsICJzY29wZSI6ICJzdWJqZWN0IiwgInRleHQiOiAiRGF2aWRlIHNpIHRyb3ZhIG5lbGxhIHJpZ2EgNC4ifSwgeyJpZCI6ICJjNzM0IiwgInR5cGUiOiAiQ09STkVSIiwgInN1YmplY3RJZCI6ICJzNiIsICJzdWJqZWN0TmFtZSI6ICJHaXVsaWEiLCAiZmFjdCI6IHt9LCAiY2F0ZWdvcnkiOiAicG9zaXppb25lIiwgImRpZmYiOiAyLCAic2NvcGUiOiAic3ViamVjdCIsICJ0ZXh0IjogIkdpdWxpYSBzaSB0cm92YSBpbiB1biBhbmdvbG8gZGVsbGEgc3VhIGFyZWEuIn0sIHsiaWQiOiAiYzc0MSIsICJ0eXBlIjogIk9OTFlfT05fT0JKRUNUIiwgInN1YmplY3RJZCI6ICJzNyIsICJzdWJqZWN0TmFtZSI6ICJIaXJvIiwgImZhY3QiOiB7Im9iamVjdEtpbmQiOiAiYmFyY2FfYV92ZWxhIn0sICJjYXRlZ29yeSI6ICJvZ2dldHRvIiwgImRpZmYiOiAyLCAic2NvcGUiOiAic3ViamVjdCIsICJ0ZXh0IjogIkhpcm8gw6ggbCd1bmljYSBwZXJzb25hIHN1IHVuYSBiYXJjYS4ifSwgeyJpZCI6ICJjNzExIiwgInR5cGUiOiAiV0lUSF9JTl9BUkVBIiwgInN1YmplY3RJZCI6ICJzMyIsICJzdWJqZWN0TmFtZSI6ICJEYXZpZGUiLCAiZmFjdCI6IHsidGFyZ2V0SWQiOiAiczIiLCAiYXJlYUlkIjogMn0sICJjYXRlZ29yeSI6ICJyZWxhemlvbmUiLCAiZGlmZiI6IDIsICJ0YXJnZXRJZCI6ICJzMiIsICJzY29wZSI6ICJzdWJqZWN0IiwgInRleHQiOiAiRGF2aWRlIMOoIGNvbiBDYXJsbyBpbiBDb21vIEVzdC4ifSwgeyJpZCI6ICJjNjkyIiwgInR5cGUiOiAiSU5fQVJFQSIsICJzdWJqZWN0SWQiOiAiczEiLCAic3ViamVjdE5hbWUiOiAiQnJ1bmEiLCAiZmFjdCI6IHsiYXJlYUlkIjogMX0sICJjYXRlZ29yeSI6ICJhcmVhIiwgImRpZmYiOiAxLCAic2NvcGUiOiAic3ViamVjdCIsICJ0ZXh0IjogIkJydW5hIHNpIHRyb3ZhIGluIFBpYXp6YSBDYXZvdXIuIn0sIHsiaWQiOiAiYzcxNSIsICJ0eXBlIjogIkJFU0lERV9PQkpFQ1QiLCAic3ViamVjdElkIjogInM0IiwgInN1YmplY3ROYW1lIjogIkVsaW8iLCAiZmFjdCI6IHsib2JqZWN0S2luZCI6ICJzZWRpYSJ9LCAiY2F0ZWdvcnkiOiAib2dnZXR0byIsICJkaWZmIjogMSwgInNjb3BlIjogInN1YmplY3QiLCAidGV4dCI6ICJFbGlvIHNpIHRyb3ZhIGFjY2FudG8gYSB1bmEgc2VkaWEuIn0sIHsiaWQiOiAiYzY5NCIsICJ0eXBlIjogIklOX0NPTCIsICJzdWJqZWN0SWQiOiAiczEiLCAic3ViamVjdE5hbWUiOiAiQnJ1bmEiLCAiZmFjdCI6IHsiY29sIjogMn0sICJjYXRlZ29yeSI6ICJwb3NpemlvbmUiLCAiZGlmZiI6IDEsICJzY29wZSI6ICJzdWJqZWN0IiwgInRleHQiOiAiQnJ1bmEgc2kgdHJvdmEgbmVsbGEgY29sb25uYSAzLiJ9LCB7ImlkIjogImM3MjMiLCAidHlwZSI6ICJCRVNJREVfT0JKRUNUIiwgInN1YmplY3RJZCI6ICJzNSIsICJzdWJqZWN0TmFtZSI6ICJGdXJpbyIsICJmYWN0IjogeyJvYmplY3RLaW5kIjogImF1dG8ifSwgImNhdGVnb3J5IjogIm9nZ2V0dG8iLCAiZGlmZiI6IDEsICJzY29wZSI6ICJzdWJqZWN0IiwgInRleHQiOiAiRnVyaW8gc2kgdHJvdmEgYWNjYW50byBhIHVuJ2F1dG8uIn0sIHsiaWQiOiAiYzczMiIsICJ0eXBlIjogIkJFU0lERV9PQkpFQ1QiLCAic3ViamVjdElkIjogInM2IiwgInN1YmplY3ROYW1lIjogIkdpdWxpYSIsICJmYWN0IjogeyJvYmplY3RLaW5kIjogImF1dG8ifSwgImNhdGVnb3J5IjogIm9nZ2V0dG8iLCAiZGlmZiI6IDEsICJzY29wZSI6ICJzdWJqZWN0IiwgInRleHQiOiAiR2l1bGlhIHNpIHRyb3ZhIGFjY2FudG8gYSB1bidhdXRvLiJ9XSwgInRoZW1lIjogbnVsbCwgIm5hcnJhdGlvbiI6IG51bGwsICJuYXJyYXRlZCI6IGZhbHNlLCAiYWlTb2x1dGlvbiI6IG51bGwsICJhaVZhbGlkYXRpb25Nc2ciOiBudWxsLCAiYWlEaWZmaWN1bHR5IjogbnVsbCwgImFpSHVtYW5FdmFsdWF0aW9uIjogbnVsbH0= -->