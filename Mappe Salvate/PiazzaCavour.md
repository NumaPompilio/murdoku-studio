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

<!-- MURDOKU_STATE_B64: eyJ2ZXJzaW9uIjoxLCJ0aXRsZSI6IiIsInNpemUiOjksImNlbGxzIjpbeyJyb3ciOjAsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InRyZWUifSx7InJvdyI6MCwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MCwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MCwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MCwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MCwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MCwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MCwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MCwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidHJlZSJ9LHsicm93IjoxLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJmbG93ZXJzIn0seyJyb3ciOjEsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InBsYW50In0seyJyb3ciOjEsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImZsb3dlcnMifSx7InJvdyI6MSwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoicGFsbSJ9LHsicm93IjoyLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoyLCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJjaGFpciJ9LHsicm93IjoyLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJib3VsZGVyIn0seyJyb3ciOjIsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImNoYWlyIn0seyJyb3ciOjIsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjMsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjMsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImZsb3dlcnMifSx7InJvdyI6MywiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoicGxhbnQifSx7InJvdyI6MywiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NCwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NCwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NCwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiY2hhaXIifSx7InJvdyI6NCwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NCwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiY2hhaXIifSx7InJvdyI6NCwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NCwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoicGxhbnQifSx7InJvdyI6NCwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYm91bGRlciJ9LHsicm93Ijo0LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJjYXIifSx7InJvdyI6NSwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiY2hhaXIifSx7InJvdyI6NSwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiY2FyIn0seyJyb3ciOjUsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImNoYWlyIn0seyJyb3ciOjUsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImNhciJ9LHsicm93Ijo2LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJkb2NrIn0seyJyb3ciOjYsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImRvY2sifSx7InJvdyI6NywiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYm9hdCJ9LHsicm93Ijo3LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJib2F0In0seyJyb3ciOjcsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImJvdWxkZXIifSx7InJvdyI6NywiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYm9hdCJ9LHsicm93Ijo4LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo4LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJib2EifSx7InJvdyI6OCwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfV0sIndhbGxzIjpbIjYsMHw3LDAiLCI2LDF8NywxIiwiNiwyfDcsMiIsIjYsM3w3LDMiLCI2LDR8Nyw0IiwiNiw1fDcsNSIsIjYsNnw3LDYiLCI2LDd8Nyw3IiwiNiw4fDcsOCIsIjQsMHw1LDAiLCI0LDF8NSwxIiwiNCwyfDUsMiIsIjQsM3w1LDMiLCI0LDR8NSw0IiwiNCw1fDUsNSIsIjQsNnw1LDYiLCI0LDd8NSw3IiwiNCw4fDUsOCIsIjAsMXwwLDIiLCIxLDF8MSwyIiwiMiwxfDIsMiIsIjMsMXwzLDIiLCI0LDF8NCwyIiwiMCw2fDAsNyIsIjEsNnwxLDciLCIyLDZ8Miw3IiwiMyw2fDMsNyIsIjQsNnw0LDciXSwid2luZG93cyI6W10sImRvb3JzIjpbXSwiYXJlYU5hbWVzIjp7IjAiOiJDb21vIE92ZXN0IiwiMSI6IlBpYXp6YSBDYXZvdXIiLCIyIjoiQ29tbyBFc3QiLCIzIjoiTHVuZ29sYWdvIiwiNCI6IkxhZ28ifSwiYXJlYUZsb29ycyI6eyIwIjp7InR5cGUiOiJjb2xvciIsInZhbHVlIjoiI2JjZDRjNCJ9LCIxIjp7InR5cGUiOiJjb2xvciIsInZhbHVlIjoiI2QyYjQ4YyJ9LCIyIjp7InR5cGUiOiJjb2xvciIsInZhbHVlIjoiI2U4ZTRkYyJ9LCIzIjp7InR5cGUiOiJjb2xvciIsInZhbHVlIjoiI2UwOGQ3OSJ9LCI0Ijp7InR5cGUiOiJwYXR0ZXJuIiwidmFsdWUiOiJtYXJlIn19LCJlbnRpdGllcyI6W3siaWQiOiJzMCIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkEiLCJuYW1lIjoiQW5uYSIsInJvdyI6MCwiY29sIjoxLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiRiIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoiczEiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJCIiwibmFtZSI6IkJydW5hIiwicm93IjoxLCJjb2wiOjIsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzMiIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkMiLCJuYW1lIjoiQ2FybG8iLCJyb3ciOjIsImNvbCI6NywiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InMzIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiRCIsIm5hbWUiOiJEYXZpZGUiLCJyb3ciOjMsImNvbCI6OCwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjp0cnVlfSx7ImlkIjoiczQiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJFIiwibmFtZSI6IkVsaW8iLCJyb3ciOjQsImNvbCI6NSwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InM1Iiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiRiIsIm5hbWUiOiJGdXJpbyIsInJvdyI6NSwiY29sIjo0LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoiczYiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJHIiwibmFtZSI6IkdpdWxpYSIsInJvdyI6NiwiY29sIjowLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiRiIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOnRydWV9LHsiaWQiOiJzNyIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkgiLCJuYW1lIjoiSGlybyIsInJvdyI6NywiY29sIjozLCJpc011cmRlcmVyIjp0cnVlLCJnZW5kZXIiOiJNIiwiaGFzSGF0Ijp0cnVlLCJoYXNHbGFzc2VzIjp0cnVlfSx7ImlkIjoidmljdGltIiwia2luZCI6InZpY3RpbSIsImluaXRpYWwiOiJWIiwibmFtZSI6IlphcmEiLCJyb3ciOjgsImNvbCI6NiwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6IkYiLCJoYXNIYXQiOnRydWUsImhhc0dsYXNzZXMiOnRydWV9XSwic3VzcGVjdENvdW50Ijo4LCJjbHVlcyI6W3siaWQiOiJjNjg5IiwidHlwZSI6IkJFU0lERV9PQkpFQ1QiLCJzdWJqZWN0SWQiOiJzMCIsInN1YmplY3ROYW1lIjoiQW5uYSIsImZhY3QiOnsib2JqZWN0S2luZCI6InRyZWUifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkFubmEgc2kgdHJvdmEgYWNjYW50byBhIHVuIGFsYmVyby4ifSx7ImlkIjoiYzcwMCIsInR5cGUiOiJJTl9DT0wiLCJzdWJqZWN0SWQiOiJzMiIsInN1YmplY3ROYW1lIjoiQ2FybG8iLCJmYWN0Ijp7ImNvbCI6N30sImNhdGVnb3J5IjoicG9zaXppb25lIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkNhcmxvIHNpIHRyb3ZhIG5lbGxhIGNvbG9ubmEgOC4ifSx7ImlkIjoiYzcwNiIsInR5cGUiOiJJTl9ST1ciLCJzdWJqZWN0SWQiOiJzMyIsInN1YmplY3ROYW1lIjoiRGF2aWRlIiwiZmFjdCI6eyJyb3ciOjN9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJEYXZpZGUgc2kgdHJvdmEgbmVsbGEgcmlnYSA0LiJ9LHsiaWQiOiJjNzM0IiwidHlwZSI6IkNPUk5FUiIsInN1YmplY3RJZCI6InM2Iiwic3ViamVjdE5hbWUiOiJHaXVsaWEiLCJmYWN0Ijp7fSwiY2F0ZWdvcnkiOiJwb3NpemlvbmUiLCJkaWZmIjoyLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiR2l1bGlhIHNpIHRyb3ZhIGluIHVuIGFuZ29sbyBkZWxsYSBzdWEgYXJlYS4ifSx7ImlkIjoiYzc0MSIsInR5cGUiOiJPTkxZX09OX09CSkVDVCIsInN1YmplY3RJZCI6InM3Iiwic3ViamVjdE5hbWUiOiJIaXJvIiwiZmFjdCI6eyJvYmplY3RLaW5kIjoiYm9hdCJ9LCJjYXRlZ29yeSI6Im9nZ2V0dG8iLCJkaWZmIjoyLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiSGlybyDDqCBsJ3VuaWNhIHBlcnNvbmEgc3UgdW5hIGJhcmNhLiJ9LHsiaWQiOiJjNzExIiwidHlwZSI6IldJVEhfSU5fQVJFQSIsInN1YmplY3RJZCI6InMzIiwic3ViamVjdE5hbWUiOiJEYXZpZGUiLCJmYWN0Ijp7InRhcmdldElkIjoiczIiLCJhcmVhSWQiOjJ9LCJjYXRlZ29yeSI6InJlbGF6aW9uZSIsImRpZmYiOjIsInRhcmdldElkIjoiczIiLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiRGF2aWRlIMOoIGNvbiBDYXJsbyBpbiBDb21vIEVzdC4ifSx7ImlkIjoiYzY5MiIsInR5cGUiOiJJTl9BUkVBIiwic3ViamVjdElkIjoiczEiLCJzdWJqZWN0TmFtZSI6IkJydW5hIiwiZmFjdCI6eyJhcmVhSWQiOjF9LCJjYXRlZ29yeSI6ImFyZWEiLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiQnJ1bmEgc2kgdHJvdmEgaW4gUGlhenphIENhdm91ci4ifSx7ImlkIjoiYzcxNSIsInR5cGUiOiJCRVNJREVfT0JKRUNUIiwic3ViamVjdElkIjoiczQiLCJzdWJqZWN0TmFtZSI6IkVsaW8iLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJjaGFpciJ9LCJjYXRlZ29yeSI6Im9nZ2V0dG8iLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiRWxpbyBzaSB0cm92YSBhY2NhbnRvIGEgdW5hIHNlZGlhLiJ9LHsiaWQiOiJjNjk0IiwidHlwZSI6IklOX0NPTCIsInN1YmplY3RJZCI6InMxIiwic3ViamVjdE5hbWUiOiJCcnVuYSIsImZhY3QiOnsiY29sIjoyfSwiY2F0ZWdvcnkiOiJwb3NpemlvbmUiLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiQnJ1bmEgc2kgdHJvdmEgbmVsbGEgY29sb25uYSAzLiJ9LHsiaWQiOiJjNzIzIiwidHlwZSI6IkJFU0lERV9PQkpFQ1QiLCJzdWJqZWN0SWQiOiJzNSIsInN1YmplY3ROYW1lIjoiRnVyaW8iLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJjYXIifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkZ1cmlvIHNpIHRyb3ZhIGFjY2FudG8gYSB1bidhdXRvLiJ9LHsiaWQiOiJjNzMyIiwidHlwZSI6IkJFU0lERV9PQkpFQ1QiLCJzdWJqZWN0SWQiOiJzNiIsInN1YmplY3ROYW1lIjoiR2l1bGlhIiwiZmFjdCI6eyJvYmplY3RLaW5kIjoiY2FyIn0sImNhdGVnb3J5Ijoib2dnZXR0byIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJHaXVsaWEgc2kgdHJvdmEgYWNjYW50byBhIHVuJ2F1dG8uIn1dLCJ0aGVtZSI6bnVsbCwibmFycmF0aW9uIjpudWxsLCJuYXJyYXRlZCI6ZmFsc2UsImFpU29sdXRpb24iOm51bGwsImFpVmFsaWRhdGlvbk1zZyI6bnVsbCwiYWlEaWZmaWN1bHR5IjpudWxsLCJhaUh1bWFuRXZhbHVhdGlvbiI6bnVsbH0= -->