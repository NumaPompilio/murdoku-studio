# Configurazione mappa "Murdoku"

Descrizione completa della mappa: stanze (aree), muri, oggetti e personaggi. Coordinate come (riga, colonna) a partire da 1.

Griglia 9×9. Regole: una sola persona per riga e per colonna; "accanto" = celle adiacenti nella stessa area (i muri bloccano); la vittima è sola con l'assassino (nella sua area c'è esattamente un sospetto).

## Stanze / aree

- **A = Como Ovest** [Stile: color=#bcd4c4] — celle occupabili: (1,2), (2,1), (3,1), (4,1), (5,1), (5,2)
- **B = Piazza Cavour** [Stile: color=#d2b48c] — celle occupabili: (1,3), (1,4), (1,5), (1,6), (1,7), (2,3), (2,4), (2,5), (2,7), (3,3), (3,4), (3,6), (3,7), (4,3), (4,5), (4,6), (4,7), (5,3), (5,4), (5,5), (5,6)
- **C = Como Est** [Stile: color=#e8e4dc] — celle occupabili: (1,8), (2,9), (3,8), (3,9), (4,8), (4,9), (5,9)
- **D = Lungolago** [Stile: color=#e08d79] — celle occupabili: (6,1), (6,2), (6,3), (6,4), (6,5), (6,6), (6,7), (6,8), (6,9), (7,1), (7,2), (7,3), (7,4), (7,5), (7,6), (7,7), (7,8), (7,9)
- **E = Lago** [Stile: color=#395F83] — celle occupabili: (8,1), (8,2), (8,3), (8,4), (8,5), (8,6), (8,8), (8,9), (9,1), (9,2), (9,3), (9,5), (9,6), (9,7), (9,8), (9,9)

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

<!-- MURDOKU_STATE_B64: eyJ2ZXJzaW9uIjoxLCJ0aXRsZSI6IiIsInNpemUiOjksImNlbGxzIjpbeyJyb3ciOjAsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImFsYmVybyJ9LHsicm93IjowLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJhbGJlcm8ifSx7InJvdyI6MSwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiZmlvcmkifSx7InJvdyI6MSwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidmFzb19kaV9waWFudGUifSx7InJvdyI6MSwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiZmlvcmkifSx7InJvdyI6MSwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoicGFsbWEifSx7InJvdyI6MiwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2VkaWEifSx7InJvdyI6MiwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2NvZ2xpbyJ9LHsicm93IjoyLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzZWRpYSJ9LHsicm93IjoyLCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoyLCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoyLCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJmaW9yaSJ9LHsicm93IjozLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ2YXNvX2RpX3BpYW50ZSJ9LHsicm93IjozLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzZWRpYSJ9LHsicm93Ijo0LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzZWRpYSJ9LHsicm93Ijo0LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ2YXNvX2RpX3BpYW50ZSJ9LHsicm93Ijo0LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzY29nbGlvIn0seyJyb3ciOjQsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImF1dG8ifSx7InJvdyI6NSwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2VkaWEifSx7InJvdyI6NSwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYXV0byJ9LHsicm93Ijo1LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzZWRpYSJ9LHsicm93Ijo1LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJhdXRvIn0seyJyb3ciOjYsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InBlZGFsbyJ9LHsicm93Ijo2LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJwZWRhbG8ifSx7InJvdyI6NywiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYmFyY2FfYV92ZWxhIn0seyJyb3ciOjcsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImJhcmNhX2FfdmVsYSJ9LHsicm93Ijo3LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo3LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzY29nbGlvIn0seyJyb3ciOjcsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImJhcmNhX2FfdmVsYSJ9LHsicm93Ijo4LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo4LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJib2EifSx7InJvdyI6OCwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfV0sIndhbGxzIjpbIjYsMHw3LDAiLCI2LDF8NywxIiwiNiwyfDcsMiIsIjYsM3w3LDMiLCI2LDR8Nyw0IiwiNiw1fDcsNSIsIjYsNnw3LDYiLCI2LDd8Nyw3IiwiNiw4fDcsOCIsIjQsMHw1LDAiLCI0LDF8NSwxIiwiNCwyfDUsMiIsIjQsM3w1LDMiLCI0LDR8NSw0IiwiNCw1fDUsNSIsIjQsNnw1LDYiLCI0LDd8NSw3IiwiNCw4fDUsOCIsIjAsMXwwLDIiLCIxLDF8MSwyIiwiMiwxfDIsMiIsIjMsMXwzLDIiLCI0LDF8NCwyIiwiMCw2fDAsNyIsIjEsNnwxLDciLCIyLDZ8Miw3IiwiMyw2fDMsNyIsIjQsNnw0LDciXSwid2luZG93cyI6W10sImRvb3JzIjpbXSwiYXJlYU5hbWVzIjp7IjAiOiJDb21vIE92ZXN0IiwiMSI6IlBpYXp6YSBDYXZvdXIiLCIyIjoiQ29tbyBFc3QiLCIzIjoiTHVuZ29sYWdvIiwiNCI6IkxhZ28ifSwiYXJlYUZsb29ycyI6eyIwIjp7InR5cGUiOiJjb2xvciIsInZhbHVlIjoiI2JjZDRjNCJ9LCIxIjp7InR5cGUiOiJjb2xvciIsInZhbHVlIjoiI2QyYjQ4YyJ9LCIyIjp7InR5cGUiOiJjb2xvciIsInZhbHVlIjoiI2U4ZTRkYyJ9LCIzIjp7InR5cGUiOiJjb2xvciIsInZhbHVlIjoiI2UwOGQ3OSJ9LCI0Ijp7InR5cGUiOiJjb2xvciIsInZhbHVlIjoiIzU2MzY5NSJ9fSwiZW50aXRpZXMiOlt7ImlkIjoiczAiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJBIiwibmFtZSI6IkFubmEiLCJyb3ciOjAsImNvbCI6MSwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6IkYiLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InMxIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiQiIsIm5hbWUiOiJCcnVuYSIsInJvdyI6MSwiY29sIjoyLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiRiIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoiczIiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJDIiwibmFtZSI6IkNhcmxvIiwicm93IjoyLCJjb2wiOjcsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJNIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzMyIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkQiLCJuYW1lIjoiRGF2aWRlIiwicm93IjozLCJjb2wiOjgsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJNIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6dHJ1ZX0seyJpZCI6InM0Iiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiRSIsIm5hbWUiOiJFbGlvIiwicm93Ijo0LCJjb2wiOjUsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJNIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzNSIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkYiLCJuYW1lIjoiRnVyaW8iLCJyb3ciOjUsImNvbCI6NCwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InM2Iiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiRyIsIm5hbWUiOiJHaXVsaWEiLCJyb3ciOjYsImNvbCI6MCwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6IkYiLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjp0cnVlfSx7ImlkIjoiczciLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJIIiwibmFtZSI6Ikhpcm8iLCJyb3ciOjcsImNvbCI6MywiaXNNdXJkZXJlciI6dHJ1ZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6dHJ1ZSwiaGFzR2xhc3NlcyI6dHJ1ZX0seyJpZCI6InZpY3RpbSIsImtpbmQiOiJ2aWN0aW0iLCJpbml0aWFsIjoiViIsIm5hbWUiOiJaYXJhIiwicm93Ijo4LCJjb2wiOjYsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0Ijp0cnVlLCJoYXNHbGFzc2VzIjp0cnVlfV0sInN1c3BlY3RDb3VudCI6OCwiY2x1ZXMiOlt7ImlkIjoiYzY4OSIsInR5cGUiOiJCRVNJREVfT0JKRUNUIiwic3ViamVjdElkIjoiczAiLCJzdWJqZWN0TmFtZSI6IkFubmEiLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJhbGJlcm8ifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkFubmEgc2kgdHJvdmEgYWNjYW50byBhIHVuIGFsYmVyby4ifSx7ImlkIjoiYzcwMCIsInR5cGUiOiJJTl9DT0wiLCJzdWJqZWN0SWQiOiJzMiIsInN1YmplY3ROYW1lIjoiQ2FybG8iLCJmYWN0Ijp7ImNvbCI6N30sImNhdGVnb3J5IjoicG9zaXppb25lIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkNhcmxvIHNpIHRyb3ZhIG5lbGxhIGNvbG9ubmEgOC4ifSx7ImlkIjoiYzcwNiIsInR5cGUiOiJJTl9ST1ciLCJzdWJqZWN0SWQiOiJzMyIsInN1YmplY3ROYW1lIjoiRGF2aWRlIiwiZmFjdCI6eyJyb3ciOjN9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJEYXZpZGUgc2kgdHJvdmEgbmVsbGEgcmlnYSA0LiJ9LHsiaWQiOiJjNzM0IiwidHlwZSI6IkNPUk5FUiIsInN1YmplY3RJZCI6InM2Iiwic3ViamVjdE5hbWUiOiJHaXVsaWEiLCJmYWN0Ijp7fSwiY2F0ZWdvcnkiOiJwb3NpemlvbmUiLCJkaWZmIjoyLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiR2l1bGlhIHNpIHRyb3ZhIGluIHVuIGFuZ29sbyBkZWxsYSBzdWEgYXJlYS4ifSx7ImlkIjoiYzc0MSIsInR5cGUiOiJPTkxZX09OX09CSkVDVCIsInN1YmplY3RJZCI6InM3Iiwic3ViamVjdE5hbWUiOiJIaXJvIiwiZmFjdCI6eyJvYmplY3RLaW5kIjoiYmFyY2FfYV92ZWxhIn0sImNhdGVnb3J5Ijoib2dnZXR0byIsImRpZmYiOjIsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJIaXJvIMOoIGwndW5pY2EgcGVyc29uYSBzdSB1bmEgYmFyY2EuIn0seyJpZCI6ImM3MTEiLCJ0eXBlIjoiV0lUSF9JTl9BUkVBIiwic3ViamVjdElkIjoiczMiLCJzdWJqZWN0TmFtZSI6IkRhdmlkZSIsImZhY3QiOnsidGFyZ2V0SWQiOiJzMiIsImFyZWFJZCI6Mn0sImNhdGVnb3J5IjoicmVsYXppb25lIiwiZGlmZiI6MiwidGFyZ2V0SWQiOiJzMiIsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJEYXZpZGUgw6ggY29uIENhcmxvIGluIENvbW8gRXN0LiJ9LHsiaWQiOiJjNjkyIiwidHlwZSI6IklOX0FSRUEiLCJzdWJqZWN0SWQiOiJzMSIsInN1YmplY3ROYW1lIjoiQnJ1bmEiLCJmYWN0Ijp7ImFyZWFJZCI6MX0sImNhdGVnb3J5IjoiYXJlYSIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJCcnVuYSBzaSB0cm92YSBpbiBQaWF6emEgQ2F2b3VyLiJ9LHsiaWQiOiJjNzE1IiwidHlwZSI6IkJFU0lERV9PQkpFQ1QiLCJzdWJqZWN0SWQiOiJzNCIsInN1YmplY3ROYW1lIjoiRWxpbyIsImZhY3QiOnsib2JqZWN0S2luZCI6InNlZGlhIn0sImNhdGVnb3J5Ijoib2dnZXR0byIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJFbGlvIHNpIHRyb3ZhIGFjY2FudG8gYSB1bmEgc2VkaWEuIn0seyJpZCI6ImM2OTQiLCJ0eXBlIjoiSU5fQ09MIiwic3ViamVjdElkIjoiczEiLCJzdWJqZWN0TmFtZSI6IkJydW5hIiwiZmFjdCI6eyJjb2wiOjJ9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJCcnVuYSBzaSB0cm92YSBuZWxsYSBjb2xvbm5hIDMuIn0seyJpZCI6ImM3MjMiLCJ0eXBlIjoiQkVTSURFX09CSkVDVCIsInN1YmplY3RJZCI6InM1Iiwic3ViamVjdE5hbWUiOiJGdXJpbyIsImZhY3QiOnsib2JqZWN0S2luZCI6ImF1dG8ifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkZ1cmlvIHNpIHRyb3ZhIGFjY2FudG8gYSB1bidhdXRvLiJ9LHsiaWQiOiJjNzMyIiwidHlwZSI6IkJFU0lERV9PQkpFQ1QiLCJzdWJqZWN0SWQiOiJzNiIsInN1YmplY3ROYW1lIjoiR2l1bGlhIiwiZmFjdCI6eyJvYmplY3RLaW5kIjoiYXV0byJ9LCJjYXRlZ29yeSI6Im9nZ2V0dG8iLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiR2l1bGlhIHNpIHRyb3ZhIGFjY2FudG8gYSB1bidhdXRvLiJ9XSwidGhlbWUiOm51bGwsIm5hcnJhdGlvbiI6bnVsbCwibmFycmF0ZWQiOmZhbHNlLCJhaVNvbHV0aW9uIjpudWxsLCJhaVZhbGlkYXRpb25Nc2ciOm51bGwsImFpRGlmZmljdWx0eSI6bnVsbCwiYWlIdW1hbkV2YWx1YXRpb24iOm51bGx9 -->