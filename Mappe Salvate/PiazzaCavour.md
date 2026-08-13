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

<!-- MURDOKU_STATE_B64: eyJ2ZXJzaW9uIjogMSwgInRpdGxlIjogIiIsICJzaXplIjogOSwgImNlbGxzIjogW3sicm93IjogMCwgImNvbCI6IDAsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAiYWxiZXJvIn0sIHsicm93IjogMCwgImNvbCI6IDEsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAwLCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDAsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMCwgImNvbCI6IDQsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAwLCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDAsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMCwgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAwLCAiY29sIjogOCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJhbGJlcm8ifSwgeyJyb3ciOiAxLCAiY29sIjogMCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDEsICJjb2wiOiAxLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogImZpb3JpIn0sIHsicm93IjogMSwgImNvbCI6IDIsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAxLCAiY29sIjogMywgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDEsICJjb2wiOiA0LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMSwgImNvbCI6IDUsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAidmFzb19kaV9waWFudGUifSwgeyJyb3ciOiAxLCAiY29sIjogNiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDEsICJjb2wiOiA3LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogImZpb3JpIn0sIHsicm93IjogMSwgImNvbCI6IDgsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAyLCAiY29sIjogMCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDIsICJjb2wiOiAxLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInBhbG1hIn0sIHsicm93IjogMiwgImNvbCI6IDIsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAyLCAiY29sIjogMywgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJzZWRpYSJ9LCB7InJvdyI6IDIsICJjb2wiOiA0LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInNjb2dsaW8ifSwgeyJyb3ciOiAyLCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJzZWRpYSJ9LCB7InJvdyI6IDIsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMiwgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAyLCAiY29sIjogOCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDMsICJjb2wiOiAwLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMywgImNvbCI6IDEsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAiZmlvcmkifSwgeyJyb3ciOiAzLCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDMsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInZhc29fZGlfcGlhbnRlIn0sIHsicm93IjogMywgImNvbCI6IDQsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAzLCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDMsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMywgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAzLCAiY29sIjogOCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDQsICJjb2wiOiAwLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNCwgImNvbCI6IDEsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA0LCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJzZWRpYSJ9LCB7InJvdyI6IDQsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNCwgImNvbCI6IDQsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAic2VkaWEifSwgeyJyb3ciOiA0LCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDQsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInZhc29fZGlfcGlhbnRlIn0sIHsicm93IjogNCwgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAic2NvZ2xpbyJ9LCB7InJvdyI6IDQsICJjb2wiOiA4LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNSwgImNvbCI6IDAsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAiYXV0byJ9LCB7InJvdyI6IDUsICJjb2wiOiAxLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInNlZGlhIn0sIHsicm93IjogNSwgImNvbCI6IDIsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA1LCAiY29sIjogMywgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJhdXRvIn0sIHsicm93IjogNSwgImNvbCI6IDQsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA1LCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJzZWRpYSJ9LCB7InJvdyI6IDUsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNSwgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA1LCAiY29sIjogOCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJhdXRvIn0sIHsicm93IjogNiwgImNvbCI6IDAsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA2LCAiY29sIjogMSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJwb250aWxlIn0sIHsicm93IjogNiwgImNvbCI6IDIsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA2LCAiY29sIjogMywgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDYsICJjb2wiOiA0LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNiwgImNvbCI6IDUsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA2LCAiY29sIjogNiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDYsICJjb2wiOiA3LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNiwgImNvbCI6IDgsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAicG9udGlsZSJ9LCB7InJvdyI6IDcsICJjb2wiOiAwLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNywgImNvbCI6IDEsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA3LCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDcsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogImJhcmNhX2FfdmVsYSJ9LCB7InJvdyI6IDcsICJjb2wiOiA0LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogImJhcmNhX2FfdmVsYSJ9LCB7InJvdyI6IDcsICJjb2wiOiA1LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNywgImNvbCI6IDYsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAic2NvZ2xpbyJ9LCB7InJvdyI6IDcsICJjb2wiOiA3LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNywgImNvbCI6IDgsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA4LCAiY29sIjogMCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDgsICJjb2wiOiAxLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogImJhcmNhX2FfdmVsYSJ9LCB7InJvdyI6IDgsICJjb2wiOiAyLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogOCwgImNvbCI6IDMsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAiYm9hIn0sIHsicm93IjogOCwgImNvbCI6IDQsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA4LCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDgsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogOCwgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA4LCAiY29sIjogOCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9XSwgIndhbGxzIjogWyI2LDB8NywwIiwgIjYsMXw3LDEiLCAiNiwyfDcsMiIsICI2LDN8NywzIiwgIjYsNHw3LDQiLCAiNiw1fDcsNSIsICI2LDZ8Nyw2IiwgIjYsN3w3LDciLCAiNiw4fDcsOCIsICI0LDB8NSwwIiwgIjQsMXw1LDEiLCAiNCwyfDUsMiIsICI0LDN8NSwzIiwgIjQsNHw1LDQiLCAiNCw1fDUsNSIsICI0LDZ8NSw2IiwgIjQsN3w1LDciLCAiNCw4fDUsOCIsICIwLDF8MCwyIiwgIjEsMXwxLDIiLCAiMiwxfDIsMiIsICIzLDF8MywyIiwgIjQsMXw0LDIiLCAiMCw2fDAsNyIsICIxLDZ8MSw3IiwgIjIsNnwyLDciLCAiMyw2fDMsNyIsICI0LDZ8NCw3Il0sICJ3aW5kb3dzIjogW10sICJkb29ycyI6IFtdLCAiYXJlYU5hbWVzIjogeyIwIjogIkNvbW8gT3Zlc3QiLCAiMSI6ICJQaWF6emEgQ2F2b3VyIiwgIjIiOiAiQ29tbyBFc3QiLCAiMyI6ICJMdW5nb2xhZ28iLCAiNCI6ICJMYWdvIn0sICJhcmVhRmxvb3JzIjogeyIwIjogeyJ0eXBlIjogImNvbG9yIiwgInZhbHVlIjogIiNiY2Q0YzQifSwgIjEiOiB7InR5cGUiOiAiY29sb3IiLCAidmFsdWUiOiAiI2QyYjQ4YyJ9LCAiMiI6IHsidHlwZSI6ICJjb2xvciIsICJ2YWx1ZSI6ICIjZThlNGRjIn0sICIzIjogeyJ0eXBlIjogImNvbG9yIiwgInZhbHVlIjogIiNlMDhkNzkifSwgIjQiOiB7InR5cGUiOiAicGF0dGVybiIsICJ2YWx1ZSI6ICJtYXJlIn19LCAiZW50aXRpZXMiOiBbeyJpZCI6ICJzMCIsICJraW5kIjogInN1c3BlY3QiLCAiaW5pdGlhbCI6ICJBIiwgIm5hbWUiOiAiQW5uYSIsICJyb3ciOiAwLCAiY29sIjogMSwgImlzTXVyZGVyZXIiOiBmYWxzZSwgImdlbmRlciI6ICJGIiwgImhhc0hhdCI6IGZhbHNlLCAiaGFzR2xhc3NlcyI6IGZhbHNlfSwgeyJpZCI6ICJzMSIsICJraW5kIjogInN1c3BlY3QiLCAiaW5pdGlhbCI6ICJCIiwgIm5hbWUiOiAiQnJ1bmEiLCAicm93IjogMSwgImNvbCI6IDIsICJpc011cmRlcmVyIjogZmFsc2UsICJnZW5kZXIiOiAiRiIsICJoYXNIYXQiOiBmYWxzZSwgImhhc0dsYXNzZXMiOiBmYWxzZX0sIHsiaWQiOiAiczIiLCAia2luZCI6ICJzdXNwZWN0IiwgImluaXRpYWwiOiAiQyIsICJuYW1lIjogIkNhcmxvIiwgInJvdyI6IDIsICJjb2wiOiA3LCAiaXNNdXJkZXJlciI6IGZhbHNlLCAiZ2VuZGVyIjogIk0iLCAiaGFzSGF0IjogZmFsc2UsICJoYXNHbGFzc2VzIjogZmFsc2V9LCB7ImlkIjogInMzIiwgImtpbmQiOiAic3VzcGVjdCIsICJpbml0aWFsIjogIkQiLCAibmFtZSI6ICJEYXZpZGUiLCAicm93IjogMywgImNvbCI6IDgsICJpc011cmRlcmVyIjogZmFsc2UsICJnZW5kZXIiOiAiTSIsICJoYXNIYXQiOiBmYWxzZSwgImhhc0dsYXNzZXMiOiB0cnVlfSwgeyJpZCI6ICJzNCIsICJraW5kIjogInN1c3BlY3QiLCAiaW5pdGlhbCI6ICJFIiwgIm5hbWUiOiAiRWxpbyIsICJyb3ciOiA0LCAiY29sIjogNSwgImlzTXVyZGVyZXIiOiBmYWxzZSwgImdlbmRlciI6ICJNIiwgImhhc0hhdCI6IGZhbHNlLCAiaGFzR2xhc3NlcyI6IGZhbHNlfSwgeyJpZCI6ICJzNSIsICJraW5kIjogInN1c3BlY3QiLCAiaW5pdGlhbCI6ICJGIiwgIm5hbWUiOiAiRnVyaW8iLCAicm93IjogNSwgImNvbCI6IDQsICJpc011cmRlcmVyIjogZmFsc2UsICJnZW5kZXIiOiAiTSIsICJoYXNIYXQiOiBmYWxzZSwgImhhc0dsYXNzZXMiOiBmYWxzZX0sIHsiaWQiOiAiczYiLCAia2luZCI6ICJzdXNwZWN0IiwgImluaXRpYWwiOiAiRyIsICJuYW1lIjogIkdpdWxpYSIsICJyb3ciOiA2LCAiY29sIjogMCwgImlzTXVyZGVyZXIiOiBmYWxzZSwgImdlbmRlciI6ICJGIiwgImhhc0hhdCI6IGZhbHNlLCAiaGFzR2xhc3NlcyI6IHRydWV9LCB7ImlkIjogInM3IiwgImtpbmQiOiAic3VzcGVjdCIsICJpbml0aWFsIjogIkgiLCAibmFtZSI6ICJIaXJvIiwgInJvdyI6IDcsICJjb2wiOiAzLCAiaXNNdXJkZXJlciI6IHRydWUsICJnZW5kZXIiOiAiTSIsICJoYXNIYXQiOiB0cnVlLCAiaGFzR2xhc3NlcyI6IHRydWV9LCB7ImlkIjogInZpY3RpbSIsICJraW5kIjogInZpY3RpbSIsICJpbml0aWFsIjogIlYiLCAibmFtZSI6ICJaYXJhIiwgInJvdyI6IDgsICJjb2wiOiA2LCAiaXNNdXJkZXJlciI6IGZhbHNlLCAiZ2VuZGVyIjogIkYiLCAiaGFzSGF0IjogdHJ1ZSwgImhhc0dsYXNzZXMiOiB0cnVlfV0sICJzdXNwZWN0Q291bnQiOiA4LCAiY2x1ZXMiOiBbeyJpZCI6ICJjNjg5IiwgInR5cGUiOiAiQkVTSURFX09CSkVDVCIsICJzdWJqZWN0SWQiOiAiczAiLCAic3ViamVjdE5hbWUiOiAiQW5uYSIsICJmYWN0IjogeyJvYmplY3RLaW5kIjogImFsYmVybyJ9LCAiY2F0ZWdvcnkiOiAib2dnZXR0byIsICJkaWZmIjogMSwgInNjb3BlIjogInN1YmplY3QiLCAidGV4dCI6ICJBbm5hIHNpIHRyb3ZhIGFjY2FudG8gYSB1biBhbGJlcm8uIn0sIHsiaWQiOiAiYzcwMCIsICJ0eXBlIjogIklOX0NPTCIsICJzdWJqZWN0SWQiOiAiczIiLCAic3ViamVjdE5hbWUiOiAiQ2FybG8iLCAiZmFjdCI6IHsiY29sIjogN30sICJjYXRlZ29yeSI6ICJwb3NpemlvbmUiLCAiZGlmZiI6IDEsICJzY29wZSI6ICJzdWJqZWN0IiwgInRleHQiOiAiQ2FybG8gc2kgdHJvdmEgbmVsbGEgY29sb25uYSA4LiJ9LCB7ImlkIjogImM3MDYiLCAidHlwZSI6ICJJTl9ST1ciLCAic3ViamVjdElkIjogInMzIiwgInN1YmplY3ROYW1lIjogIkRhdmlkZSIsICJmYWN0IjogeyJyb3ciOiAzfSwgImNhdGVnb3J5IjogInBvc2l6aW9uZSIsICJkaWZmIjogMSwgInNjb3BlIjogInN1YmplY3QiLCAidGV4dCI6ICJEYXZpZGUgc2kgdHJvdmEgbmVsbGEgcmlnYSA0LiJ9LCB7ImlkIjogImM3MzQiLCAidHlwZSI6ICJDT1JORVIiLCAic3ViamVjdElkIjogInM2IiwgInN1YmplY3ROYW1lIjogIkdpdWxpYSIsICJmYWN0Ijoge30sICJjYXRlZ29yeSI6ICJwb3NpemlvbmUiLCAiZGlmZiI6IDIsICJzY29wZSI6ICJzdWJqZWN0IiwgInRleHQiOiAiR2l1bGlhIHNpIHRyb3ZhIGluIHVuIGFuZ29sbyBkZWxsYSBzdWEgYXJlYS4ifSwgeyJpZCI6ICJjNzQxIiwgInR5cGUiOiAiT05MWV9PTl9PQkpFQ1QiLCAic3ViamVjdElkIjogInM3IiwgInN1YmplY3ROYW1lIjogIkhpcm8iLCAiZmFjdCI6IHsib2JqZWN0S2luZCI6ICJiYXJjYV9hX3ZlbGEifSwgImNhdGVnb3J5IjogIm9nZ2V0dG8iLCAiZGlmZiI6IDIsICJzY29wZSI6ICJzdWJqZWN0IiwgInRleHQiOiAiSGlybyDDqCBsJ3VuaWNhIHBlcnNvbmEgc3UgdW5hIGJhcmNhLiJ9LCB7ImlkIjogImM3MTEiLCAidHlwZSI6ICJXSVRIX0lOX0FSRUEiLCAic3ViamVjdElkIjogInMzIiwgInN1YmplY3ROYW1lIjogIkRhdmlkZSIsICJmYWN0IjogeyJ0YXJnZXRJZCI6ICJzMiIsICJhcmVhSWQiOiAyfSwgImNhdGVnb3J5IjogInJlbGF6aW9uZSIsICJkaWZmIjogMiwgInRhcmdldElkIjogInMyIiwgInNjb3BlIjogInN1YmplY3QiLCAidGV4dCI6ICJEYXZpZGUgw6ggY29uIENhcmxvIGluIENvbW8gRXN0LiJ9LCB7ImlkIjogImM2OTIiLCAidHlwZSI6ICJJTl9BUkVBIiwgInN1YmplY3RJZCI6ICJzMSIsICJzdWJqZWN0TmFtZSI6ICJCcnVuYSIsICJmYWN0IjogeyJhcmVhSWQiOiAxfSwgImNhdGVnb3J5IjogImFyZWEiLCAiZGlmZiI6IDEsICJzY29wZSI6ICJzdWJqZWN0IiwgInRleHQiOiAiQnJ1bmEgc2kgdHJvdmEgaW4gUGlhenphIENhdm91ci4ifSwgeyJpZCI6ICJjNzE1IiwgInR5cGUiOiAiQkVTSURFX09CSkVDVCIsICJzdWJqZWN0SWQiOiAiczQiLCAic3ViamVjdE5hbWUiOiAiRWxpbyIsICJmYWN0IjogeyJvYmplY3RLaW5kIjogInNlZGlhIn0sICJjYXRlZ29yeSI6ICJvZ2dldHRvIiwgImRpZmYiOiAxLCAic2NvcGUiOiAic3ViamVjdCIsICJ0ZXh0IjogIkVsaW8gc2kgdHJvdmEgYWNjYW50byBhIHVuYSBzZWRpYS4ifSwgeyJpZCI6ICJjNjk0IiwgInR5cGUiOiAiSU5fQ09MIiwgInN1YmplY3RJZCI6ICJzMSIsICJzdWJqZWN0TmFtZSI6ICJCcnVuYSIsICJmYWN0IjogeyJjb2wiOiAyfSwgImNhdGVnb3J5IjogInBvc2l6aW9uZSIsICJkaWZmIjogMSwgInNjb3BlIjogInN1YmplY3QiLCAidGV4dCI6ICJCcnVuYSBzaSB0cm92YSBuZWxsYSBjb2xvbm5hIDMuIn0sIHsiaWQiOiAiYzcyMyIsICJ0eXBlIjogIkJFU0lERV9PQkpFQ1QiLCAic3ViamVjdElkIjogInM1IiwgInN1YmplY3ROYW1lIjogIkZ1cmlvIiwgImZhY3QiOiB7Im9iamVjdEtpbmQiOiAiYXV0byJ9LCAiY2F0ZWdvcnkiOiAib2dnZXR0byIsICJkaWZmIjogMSwgInNjb3BlIjogInN1YmplY3QiLCAidGV4dCI6ICJGdXJpbyBzaSB0cm92YSBhY2NhbnRvIGEgdW4nYXV0by4ifSwgeyJpZCI6ICJjNzMyIiwgInR5cGUiOiAiQkVTSURFX09CSkVDVCIsICJzdWJqZWN0SWQiOiAiczYiLCAic3ViamVjdE5hbWUiOiAiR2l1bGlhIiwgImZhY3QiOiB7Im9iamVjdEtpbmQiOiAiYXV0byJ9LCAiY2F0ZWdvcnkiOiAib2dnZXR0byIsICJkaWZmIjogMSwgInNjb3BlIjogInN1YmplY3QiLCAidGV4dCI6ICJHaXVsaWEgc2kgdHJvdmEgYWNjYW50byBhIHVuJ2F1dG8uIn1dLCAidGhlbWUiOiBudWxsLCAibmFycmF0aW9uIjogbnVsbCwgIm5hcnJhdGVkIjogZmFsc2UsICJhaVNvbHV0aW9uIjogbnVsbCwgImFpVmFsaWRhdGlvbk1zZyI6IG51bGwsICJhaURpZmZpY3VsdHkiOiBudWxsLCAiYWlIdW1hbkV2YWx1YXRpb24iOiBudWxsfQ== -->