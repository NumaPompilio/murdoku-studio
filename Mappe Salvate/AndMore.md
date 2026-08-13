# Configurazione mappa "And More Abbigliamento"

Descrizione completa della mappa: stanze (aree), muri, oggetti e personaggi. Coordinate come (riga, colonna) a partire da 1.

Griglia 9×9. Regole: una sola persona per riga e per colonna; "accanto" = celle adiacenti nella stessa area (i muri bloccano); la vittima è sola con l'assassino (nella sua area c'è esattamente un sospetto).

## Stanze / aree

- **A = Magazzino** — celle occupabili: (1,3), (1,4), (1,5), (2,1), (2,2), (2,3), (2,4), (2,6)
- **C = And More Abbigliamento** — celle occupabili: (3,2), (3,3), (3,4), (4,4), (5,2), (5,3), (5,4), (5,5), (5,6), (5,7), (5,9), (6,1), (6,3), (6,4), (6,5), (6,6), (6,8), (6,9), (7,1), (7,2), (7,3), (7,4), (7,5), (7,6), (7,7), (7,8)
- **D = Camerino** — celle occupabili: (3,5), (3,6), (4,5), (4,6)
- **E = Via Alcide de Gasperi** — celle occupabili: (8,1), (8,2), (8,3), (8,4), (8,6), (8,7), (8,8), (8,9), (9,1), (9,2), (9,4), (9,5), (9,6), (9,7), (9,8), (9,9)

**Griglia di aree e muri** — `┃`/`━` = muro tra due celle; `#` = cella bloccata:
```
     1   2   3   4   5   6   7   8   9  
1 |  a   a   A   A   A   a ┃ #   #   # 
  |                                    
2 |  A   A   A   A   a   A ┃ #   #   # 
  | ━━━ ━━━ ━━━ ━━━ ━━━ ━━━            
3 |  c   C   C   C ┃ D   D ┃ #   #   # 
  |                                    
4 |  c   c   c   C ┃ D   D ┃ #   #   # 
  |                 ━━━ ━━━ ━━━ ━━━ ━━━
5 |  c   C   C   C   C   C   C   c   C 
  |                                    
6 |  C   c   C   C   C   C   c   C   C 
  |                                    
7 |  C   C   C   C   C   C   C   C   c 
  | ━━━ ━━━ ━━━ ━━━ ━━━ ━━━ ━━━ ━━━ ━━━
8 |  E   E   E   E   e   E   E   E   E 
  |                                    
9 |  E   E   e   E   E   E   E   E   E 
```

## Muri (coppie di celle separate)

- stessa riga: (1,6)|(1,7), (2,6)|(2,7), (3,4)|(3,5), (3,6)|(3,7), (4,4)|(4,5), (4,6)|(4,7)
- stessa colonna: (2,1)|(3,1), (2,2)|(3,2), (2,3)|(3,3), (2,4)|(3,4), (2,5)|(3,5), (2,6)|(3,6), (4,5)|(5,5), (4,6)|(5,6), (4,7)|(5,7), (4,8)|(5,8), (4,9)|(5,9), (7,1)|(8,1), (7,2)|(8,2), (7,3)|(8,3), (7,4)|(8,4), (7,5)|(8,5), (7,6)|(8,6), (7,7)|(8,7), (7,8)|(8,8), (7,9)|(8,9)

## Oggetti (elementi)

Minuscolo = calpestabile, MAIUSCOLO = ostacolo, `..` = vuota, `##` = bloccata:
```
     1   2   3   4   5   6   7   8   9  
1 | SF SF .. .. .. SF ## ## ## 
2 | ch .. .. .. SF .. ## ## ## 
3 | SF .. .. .. .. ch ## ## ## 
4 | SF TB TB .. .. .. ## ## ## 
5 | PL .. .. .. .. .. .. SF .. 
6 | .. TB .. rg .. ch TB .. .. 
7 | .. ch .. .. .. .. .. .. SF 
8 | .. .. .. cr PM .. .. .. .. 
9 | ap .. tr .. .. cr .. .. cr 
```

**Legenda oggetti:**
- `SF` = scaffale (ostacolo)
- `ch` = sedia (calpestabile)
- `TB` = tavolo (ostacolo)
- `PL` = pianta (ostacolo)
- `rg` = tappeto (calpestabile)
- `cr` = auto (calpestabile)
- `PM` = palma (ostacolo)
- `ap` = Ape car (calpestabile)
- `tr` = Trattore (ostacolo)

**Celle bloccate:** (1,7), (1,8), (1,9), (2,7), (2,8), (2,9), (3,7), (3,8), (3,9), (4,7), (4,8), (4,9)

**Oggetti per cella:** (1,1) scaffale (ostacolo); (1,2) scaffale (ostacolo); (1,6) scaffale (ostacolo); (2,1) sedia (calpestabile); (2,5) scaffale (ostacolo); (3,1) scaffale (ostacolo); (3,6) sedia (calpestabile); (4,1) scaffale (ostacolo); (4,2) tavolo (ostacolo); (4,3) tavolo (ostacolo); (5,1) pianta (ostacolo); (5,8) scaffale (ostacolo); (6,2) tavolo (ostacolo); (6,4) tappeto (calpestabile); (6,6) sedia (calpestabile); (6,7) tavolo (ostacolo); (7,2) sedia (calpestabile); (7,9) scaffale (ostacolo); (8,4) auto (calpestabile); (8,5) palma (ostacolo); (9,1) Ape car (calpestabile); (9,3) Trattore (ostacolo); (9,6) auto (calpestabile); (9,9) auto (calpestabile).

## Personaggi

- A = Arturo: (2,3) — **assassino**
- B = Bruna: (3,2)
- C = Chiara: (4,6)
- D = Diana: (5,9)
- E = Enzo: (6,4)
- F = Franco: (7,8)
- G = Gino: (8,7)
- H = Helga: (9,1)
- V = Zoe (vittima): (1,5)

**Assassino: Arturo** — unico sospetto nell'area della vittima.

<!-- MURDOKU_STATE_B64: eyJ2ZXJzaW9uIjogMSwgInRpdGxlIjogIkFuZCBNb3JlIEFiYmlnbGlhbWVudG8iLCAic2l6ZSI6IDksICJjZWxscyI6IFt7InJvdyI6IDAsICJjb2wiOiAwLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInNjYWZmYWxlIn0sIHsicm93IjogMCwgImNvbCI6IDEsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAic2NhZmZhbGUifSwgeyJyb3ciOiAwLCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDAsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMCwgImNvbCI6IDQsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAwLCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJzY2FmZmFsZSJ9LCB7InJvdyI6IDAsICJjb2wiOiA2LCAid2Fsa2FibGUiOiBmYWxzZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDAsICJjb2wiOiA3LCAid2Fsa2FibGUiOiBmYWxzZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDAsICJjb2wiOiA4LCAid2Fsa2FibGUiOiBmYWxzZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDEsICJjb2wiOiAwLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInNlZGlhIn0sIHsicm93IjogMSwgImNvbCI6IDEsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAxLCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDEsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMSwgImNvbCI6IDQsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAic2NhZmZhbGUifSwgeyJyb3ciOiAxLCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDEsICJjb2wiOiA2LCAid2Fsa2FibGUiOiBmYWxzZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDEsICJjb2wiOiA3LCAid2Fsa2FibGUiOiBmYWxzZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDEsICJjb2wiOiA4LCAid2Fsa2FibGUiOiBmYWxzZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDIsICJjb2wiOiAwLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInNjYWZmYWxlIn0sIHsicm93IjogMiwgImNvbCI6IDEsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAyLCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDIsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMiwgImNvbCI6IDQsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAyLCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJzZWRpYSJ9LCB7InJvdyI6IDIsICJjb2wiOiA2LCAid2Fsa2FibGUiOiBmYWxzZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDIsICJjb2wiOiA3LCAid2Fsa2FibGUiOiBmYWxzZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDIsICJjb2wiOiA4LCAid2Fsa2FibGUiOiBmYWxzZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDMsICJjb2wiOiAwLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInNjYWZmYWxlIn0sIHsicm93IjogMywgImNvbCI6IDEsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAidGF2b2xvIn0sIHsicm93IjogMywgImNvbCI6IDIsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAidGF2b2xvIn0sIHsicm93IjogMywgImNvbCI6IDMsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiAzLCAiY29sIjogNCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDMsICJjb2wiOiA1LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMywgImNvbCI6IDYsICJ3YWxrYWJsZSI6IGZhbHNlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMywgImNvbCI6IDcsICJ3YWxrYWJsZSI6IGZhbHNlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogMywgImNvbCI6IDgsICJ3YWxrYWJsZSI6IGZhbHNlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNCwgImNvbCI6IDAsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAidmFzb19kaV9waWFudGUifSwgeyJyb3ciOiA0LCAiY29sIjogMSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDQsICJjb2wiOiAyLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNCwgImNvbCI6IDMsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA0LCAiY29sIjogNCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDQsICJjb2wiOiA1LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNCwgImNvbCI6IDYsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA0LCAiY29sIjogNywgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJzY2FmZmFsZSJ9LCB7InJvdyI6IDQsICJjb2wiOiA4LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNSwgImNvbCI6IDAsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA1LCAiY29sIjogMSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJ0YXZvbG8ifSwgeyJyb3ciOiA1LCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDUsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInRhcHBldG8ifSwgeyJyb3ciOiA1LCAiY29sIjogNCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDUsICJjb2wiOiA1LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogInNlZGlhIn0sIHsicm93IjogNSwgImNvbCI6IDYsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAidGF2b2xvIn0sIHsicm93IjogNSwgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA1LCAiY29sIjogOCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDYsICJjb2wiOiAwLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNiwgImNvbCI6IDEsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAic2VkaWEifSwgeyJyb3ciOiA2LCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDYsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNiwgImNvbCI6IDQsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA2LCAiY29sIjogNSwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDYsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNiwgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA2LCAiY29sIjogOCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJzY2FmZmFsZSJ9LCB7InJvdyI6IDcsICJjb2wiOiAwLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNywgImNvbCI6IDEsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA3LCAiY29sIjogMiwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDcsICJjb2wiOiAzLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogImF1dG8ifSwgeyJyb3ciOiA3LCAiY29sIjogNCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJwYWxtYSJ9LCB7InJvdyI6IDcsICJjb2wiOiA1LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogNywgImNvbCI6IDYsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA3LCAiY29sIjogNywgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDcsICJjb2wiOiA4LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogOCwgImNvbCI6IDAsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAiYXBlX2NhciJ9LCB7InJvdyI6IDgsICJjb2wiOiAxLCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogOCwgImNvbCI6IDIsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAidHJhdHRvcmUifSwgeyJyb3ciOiA4LCAiY29sIjogMywgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6IG51bGx9LCB7InJvdyI6IDgsICJjb2wiOiA0LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogOCwgImNvbCI6IDUsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiAiYXV0byJ9LCB7InJvdyI6IDgsICJjb2wiOiA2LCAid2Fsa2FibGUiOiB0cnVlLCAib2JqZWN0IjogbnVsbH0sIHsicm93IjogOCwgImNvbCI6IDcsICJ3YWxrYWJsZSI6IHRydWUsICJvYmplY3QiOiBudWxsfSwgeyJyb3ciOiA4LCAiY29sIjogOCwgIndhbGthYmxlIjogdHJ1ZSwgIm9iamVjdCI6ICJhdXRvIn1dLCAid2FsbHMiOiBbIjYsMHw3LDAiLCAiNiwxfDcsMSIsICI2LDJ8NywyIiwgIjYsM3w3LDMiLCAiNiw0fDcsNCIsICI2LDV8Nyw1IiwgIjYsNnw3LDYiLCAiNiw3fDcsNyIsICI2LDh8Nyw4IiwgIjEsMHwyLDAiLCAiMSwxfDIsMSIsICIxLDJ8MiwyIiwgIjEsM3wyLDMiLCAiMSw0fDIsNCIsICIxLDV8Miw1IiwgIjIsNXwyLDYiLCAiMyw1fDMsNiIsICIzLDZ8NCw2IiwgIjMsN3w0LDciLCAiMyw4fDQsOCIsICIxLDV8MSw2IiwgIjAsNXwwLDYiLCAiMiwzfDIsNCIsICIzLDN8Myw0IiwgIjMsNHw0LDQiLCAiMyw1fDQsNSJdLCAid2luZG93cyI6IFsiNiw2fDcsNiIsICI2LDd8Nyw3Il0sICJkb29ycyI6IFsiNiwyfDcsMiIsICIyLDN8Miw0IiwgIjEsM3wyLDMiXSwgImFyZWFOYW1lcyI6IHsiMCI6ICJNYWdhenppbm8iLCAiMiI6ICJBbmQgTW9yZSBBYmJpZ2xpYW1lbnRvIiwgIjMiOiAiQ2FtZXJpbm8iLCAiNCI6ICJWaWEgQWxjaWRlIGRlIEdhc3BlcmkifSwgImFyZWFGbG9vcnMiOiB7fSwgImVudGl0aWVzIjogW3siaWQiOiAiczAiLCAia2luZCI6ICJzdXNwZWN0IiwgImluaXRpYWwiOiAiQSIsICJuYW1lIjogIkFydHVybyIsICJyb3ciOiAxLCAiY29sIjogMiwgImlzTXVyZGVyZXIiOiB0cnVlLCAiZ2VuZGVyIjogIk0iLCAiaGFzSGF0IjogZmFsc2UsICJoYXNHbGFzc2VzIjogZmFsc2V9LCB7ImlkIjogInMxIiwgImtpbmQiOiAic3VzcGVjdCIsICJpbml0aWFsIjogIkIiLCAibmFtZSI6ICJCcnVuYSIsICJyb3ciOiAyLCAiY29sIjogMSwgImlzTXVyZGVyZXIiOiBmYWxzZSwgImdlbmRlciI6ICJGIiwgImhhc0hhdCI6IGZhbHNlLCAiaGFzR2xhc3NlcyI6IGZhbHNlfSwgeyJpZCI6ICJzMiIsICJraW5kIjogInN1c3BlY3QiLCAiaW5pdGlhbCI6ICJDIiwgIm5hbWUiOiAiQ2hpYXJhIiwgInJvdyI6IDMsICJjb2wiOiA1LCAiaXNNdXJkZXJlciI6IGZhbHNlLCAiZ2VuZGVyIjogIkYiLCAiaGFzSGF0IjogZmFsc2UsICJoYXNHbGFzc2VzIjogZmFsc2V9LCB7ImlkIjogInMzIiwgImtpbmQiOiAic3VzcGVjdCIsICJpbml0aWFsIjogIkQiLCAibmFtZSI6ICJEaWFuYSIsICJyb3ciOiA0LCAiY29sIjogOCwgImlzTXVyZGVyZXIiOiBmYWxzZSwgImdlbmRlciI6ICJGIiwgImhhc0hhdCI6IGZhbHNlLCAiaGFzR2xhc3NlcyI6IGZhbHNlfSwgeyJpZCI6ICJzNCIsICJraW5kIjogInN1c3BlY3QiLCAiaW5pdGlhbCI6ICJFIiwgIm5hbWUiOiAiRW56byIsICJyb3ciOiA1LCAiY29sIjogMywgImlzTXVyZGVyZXIiOiBmYWxzZSwgImdlbmRlciI6ICJNIiwgImhhc0hhdCI6IGZhbHNlLCAiaGFzR2xhc3NlcyI6IGZhbHNlfSwgeyJpZCI6ICJzNSIsICJraW5kIjogInN1c3BlY3QiLCAiaW5pdGlhbCI6ICJGIiwgIm5hbWUiOiAiRnJhbmNvIiwgInJvdyI6IDYsICJjb2wiOiA3LCAiaXNNdXJkZXJlciI6IGZhbHNlLCAiZ2VuZGVyIjogIk0iLCAiaGFzSGF0IjogZmFsc2UsICJoYXNHbGFzc2VzIjogZmFsc2V9LCB7ImlkIjogInM2IiwgImtpbmQiOiAic3VzcGVjdCIsICJpbml0aWFsIjogIkciLCAibmFtZSI6ICJHaW5vIiwgInJvdyI6IDcsICJjb2wiOiA2LCAiaXNNdXJkZXJlciI6IGZhbHNlLCAiZ2VuZGVyIjogIk0iLCAiaGFzSGF0IjogZmFsc2UsICJoYXNHbGFzc2VzIjogZmFsc2V9LCB7ImlkIjogInM3IiwgImtpbmQiOiAic3VzcGVjdCIsICJpbml0aWFsIjogIkgiLCAibmFtZSI6ICJIZWxnYSIsICJyb3ciOiA4LCAiY29sIjogMCwgImlzTXVyZGVyZXIiOiBmYWxzZSwgImdlbmRlciI6ICJGIiwgImhhc0hhdCI6IHRydWUsICJoYXNHbGFzc2VzIjogZmFsc2V9LCB7ImlkIjogInZpY3RpbSIsICJraW5kIjogInZpY3RpbSIsICJpbml0aWFsIjogIlYiLCAibmFtZSI6ICJab2UiLCAicm93IjogMCwgImNvbCI6IDQsICJpc011cmRlcmVyIjogZmFsc2UsICJnZW5kZXIiOiAiRiIsICJoYXNIYXQiOiBmYWxzZSwgImhhc0dsYXNzZXMiOiBmYWxzZX1dLCAic3VzcGVjdENvdW50IjogOCwgImNsdWVzIjogW3siaWQiOiAiYzI0IiwgInR5cGUiOiAiSU5fQ09MIiwgInN1YmplY3RJZCI6ICJzMyIsICJzdWJqZWN0TmFtZSI6ICJEaWFuYSIsICJmYWN0IjogeyJjb2wiOiA4fSwgImNhdGVnb3J5IjogInBvc2l6aW9uZSIsICJkaWZmIjogMSwgInNjb3BlIjogInN1YmplY3QiLCAidGV4dCI6ICJEaWFuYSBzaSB0cm92YSBuZWxsYSBjb2xvbm5hIDkuIn0sIHsiaWQiOiAiYzUzIiwgInR5cGUiOiAiV0lUSF9JTl9BUkVBIiwgInN1YmplY3RJZCI6ICJzNSIsICJzdWJqZWN0TmFtZSI6ICJGcmFuY28iLCAiZmFjdCI6IHsidGFyZ2V0SWQiOiAiczEiLCAiYXJlYUlkIjogMn0sICJjYXRlZ29yeSI6ICJyZWxhemlvbmUiLCAiZGlmZiI6IDIsICJ0YXJnZXRJZCI6ICJzMSIsICJzY29wZSI6ICJzdWJqZWN0IiwgInRleHQiOiAiRnJhbmNvIMOoIGNvbiBCcnVuYSBpbiBBbmQgTW9yZSBBYmJpZ2xpYW1lbnRvLiJ9LCB7ImlkIjogImMxOSIsICJ0eXBlIjogIkJFU0lERV9PQkpFQ1QiLCAic3ViamVjdElkIjogInMyIiwgInN1YmplY3ROYW1lIjogIkNoaWFyYSIsICJmYWN0IjogeyJvYmplY3RLaW5kIjogInNlZGlhIn0sICJjYXRlZ29yeSI6ICJvZ2dldHRvIiwgImRpZmYiOiAxLCAic2NvcGUiOiAic3ViamVjdCIsICJ0ZXh0IjogIkNoaWFyYSBzaSB0cm92YSBhY2NhbnRvIGEgdW5hIHNlZGlhLiJ9LCB7ImlkIjogImMzNyIsICJ0eXBlIjogIk9OX09CSkVDVCIsICJzdWJqZWN0SWQiOiAiczQiLCAic3ViamVjdE5hbWUiOiAiRW56byIsICJmYWN0IjogeyJvYmplY3RLaW5kIjogInRhcHBldG8ifSwgImNhdGVnb3J5IjogIm9nZ2V0dG8iLCAiZGlmZiI6IDEsICJzY29wZSI6ICJzdWJqZWN0IiwgInRleHQiOiAiRW56byBzaSB0cm92YSBzdSB1biB0YXBwZXRvLiJ9LCB7ImlkIjogImM1MSIsICJ0eXBlIjogIkZST05UX1dJTkRPVyIsICJzdWJqZWN0SWQiOiAiczUiLCAic3ViamVjdE5hbWUiOiAiRnJhbmNvIiwgImZhY3QiOiB7fSwgImNhdGVnb3J5IjogInBvc2l6aW9uZSIsICJkaWZmIjogMiwgInNjb3BlIjogInN1YmplY3QiLCAidGV4dCI6ICJGcmFuY28gc2kgdHJvdmEgZGkgZnJvbnRlIGEgdW5hIGZpbmVzdHJhLiJ9LCB7ImlkIjogImM3MSIsICJ0eXBlIjogIk9OTFlfT05fT0JKRUNUIiwgInN1YmplY3RJZCI6ICJzNyIsICJzdWJqZWN0TmFtZSI6ICJIZWxnYSIsICJmYWN0IjogeyJvYmplY3RLaW5kIjogImFwZV9jYXIifSwgImNhdGVnb3J5IjogIm9nZ2V0dG8iLCAiZGlmZiI6IDIsICJzY29wZSI6ICJzdWJqZWN0IiwgInRleHQiOiAiSGVsZ2Egw6ggbCd1bmljYSBwZXJzb25hIHN1IHVuJ0FwZSBjYXIuIn0sIHsiaWQiOiAiYzU4IiwgInR5cGUiOiAiSU5fQVJFQSIsICJzdWJqZWN0SWQiOiAiczYiLCAic3ViamVjdE5hbWUiOiAiR2lubyIsICJmYWN0IjogeyJhcmVhSWQiOiA0fSwgImNhdGVnb3J5IjogImFyZWEiLCAiZGlmZiI6IDEsICJzY29wZSI6ICJzdWJqZWN0IiwgInRleHQiOiAiR2lubyBzaSB0cm92YSBpbiBWaWEgQWxjaWRlIGRlIEdhc3BlcmkuIn0sIHsiaWQiOiAiYzEiLCAidHlwZSI6ICJJTl9ST1ciLCAic3ViamVjdElkIjogInMwIiwgInN1YmplY3ROYW1lIjogIkFydHVybyIsICJmYWN0IjogeyJyb3ciOiAxfSwgImNhdGVnb3J5IjogInBvc2l6aW9uZSIsICJkaWZmIjogMSwgInNjb3BlIjogInN1YmplY3QiLCAidGV4dCI6ICJBcnR1cm8gc2kgdHJvdmEgbmVsbGEgcmlnYSAyLiJ9LCB7ImlkIjogImM0OSIsICJ0eXBlIjogIkJFU0lERV9PQkpFQ1QiLCAic3ViamVjdElkIjogInM1IiwgInN1YmplY3ROYW1lIjogIkZyYW5jbyIsICJmYWN0IjogeyJvYmplY3RLaW5kIjogInNjYWZmYWxlIn0sICJjYXRlZ29yeSI6ICJvZ2dldHRvIiwgImRpZmYiOiAxLCAic2NvcGUiOiAic3ViamVjdCIsICJ0ZXh0IjogIkZyYW5jbyBzaSB0cm92YSBhY2NhbnRvIGEgdW5vIHNjYWZmYWxlLiJ9LCB7ImlkIjogImM4IiwgInR5cGUiOiAiQkVTSURFX09CSkVDVCIsICJzdWJqZWN0SWQiOiAiczEiLCAic3ViamVjdE5hbWUiOiAiQnJ1bmEiLCAiZmFjdCI6IHsib2JqZWN0S2luZCI6ICJzY2FmZmFsZSJ9LCAiY2F0ZWdvcnkiOiAib2dnZXR0byIsICJkaWZmIjogMSwgInNjb3BlIjogInN1YmplY3QiLCAidGV4dCI6ICJCcnVuYSBzaSB0cm92YSBhY2NhbnRvIGEgdW5vIHNjYWZmYWxlLiJ9XSwgInRoZW1lIjogbnVsbCwgIm5hcnJhdGlvbiI6IG51bGwsICJuYXJyYXRlZCI6IGZhbHNlLCAiYWlTb2x1dGlvbiI6IG51bGwsICJhaVZhbGlkYXRpb25Nc2ciOiBudWxsLCAiYWlEaWZmaWN1bHR5IjogbnVsbCwgImFpSHVtYW5FdmFsdWF0aW9uIjogbnVsbH0= -->