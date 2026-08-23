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

<!-- MURDOKU_STATE_B64: eyJ2ZXJzaW9uIjoxLCJ0aXRsZSI6IiIsInNpemUiOjksImNlbGxzIjpbeyJyb3ciOjAsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImFsYmVybyJ9LHsicm93IjowLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJhbGJlcm8ifSx7InJvdyI6MSwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiZmlvcmkifSx7InJvdyI6MSwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidmFzb2RpcGlhbnRlIn0seyJyb3ciOjEsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImZpb3JpIn0seyJyb3ciOjEsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InBhbG1hIn0seyJyb3ciOjIsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InNlZGlhIn0seyJyb3ciOjIsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InNjb2dsaW8ifSx7InJvdyI6MiwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2VkaWEifSx7InJvdyI6MiwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiZmlvcmkifSx7InJvdyI6MywiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidmFzb2RpcGlhbnRlIn0seyJyb3ciOjMsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjMsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjMsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjMsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjMsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjQsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjQsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjQsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InNlZGlhIn0seyJyb3ciOjQsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjQsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InNlZGlhIn0seyJyb3ciOjQsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjQsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InZhc29kaXBpYW50ZSJ9LHsicm93Ijo0LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzY29nbGlvIn0seyJyb3ciOjQsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImF1dG8ifSx7InJvdyI6NSwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2VkaWEifSx7InJvdyI6NSwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYXV0byJ9LHsicm93Ijo1LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzZWRpYSJ9LHsicm93Ijo1LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJhdXRvIn0seyJyb3ciOjYsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InBlZGFsIn0seyJyb3ciOjYsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InBlZGFsIn0seyJyb3ciOjcsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImJhcmNhYXZlbGEifSx7InJvdyI6NywiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYmFyY2FhdmVsYSJ9LHsicm93Ijo3LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo3LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzY29nbGlvIn0seyJyb3ciOjcsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImJhcmNhYXZlbGEifSx7InJvdyI6OCwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYm9hIn0seyJyb3ciOjgsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH1dLCJ3YWxscyI6WyI2LDB8NywwIiwiNiwxfDcsMSIsIjYsMnw3LDIiLCI2LDN8NywzIiwiNiw0fDcsNCIsIjYsNXw3LDUiLCI2LDZ8Nyw2IiwiNiw3fDcsNyIsIjYsOHw3LDgiLCI0LDB8NSwwIiwiNCwxfDUsMSIsIjQsMnw1LDIiLCI0LDN8NSwzIiwiNCw0fDUsNCIsIjQsNXw1LDUiLCI0LDZ8NSw2IiwiNCw3fDUsNyIsIjQsOHw1LDgiLCIwLDF8MCwyIiwiMSwxfDEsMiIsIjIsMXwyLDIiLCIzLDF8MywyIiwiNCwxfDQsMiIsIjAsNnwwLDciLCIxLDZ8MSw3IiwiMiw2fDIsNyIsIjMsNnwzLDciLCI0LDZ8NCw3Il0sIndpbmRvd3MiOltdLCJkb29ycyI6W10sImFyZWFOYW1lcyI6eyIwIjoiQ29tbyBPdmVzdCIsIjEiOiJQaWF6emEgQ2F2b3VyIiwiMiI6IkNvbW8gRXN0IiwiMyI6Ikx1bmdvbGFnbyIsIjQiOiJMYWdvIn0sImFyZWFGbG9vcnMiOnsiMCI6eyJ0eXBlIjoiY29sb3IiLCJ2YWx1ZSI6IiNiY2Q0YzQifSwiMSI6eyJ0eXBlIjoiY29sb3IiLCJ2YWx1ZSI6IiNkMmI0OGMifSwiMiI6eyJ0eXBlIjoiY29sb3IiLCJ2YWx1ZSI6IiNlOGU0ZGMifSwiMyI6eyJ0eXBlIjoiY29sb3IiLCJ2YWx1ZSI6IiNlMDhkNzkifSwiNCI6eyJ0eXBlIjoiY29sb3IiLCJ2YWx1ZSI6IiM1NjM2OTUifX0sImVudGl0aWVzIjpbeyJpZCI6InMwIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiQSIsIm5hbWUiOiJBbm5hIiwicm93IjowLCJjb2wiOjEsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzMSIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkIiLCJuYW1lIjoiQnJ1bmEiLCJyb3ciOjEsImNvbCI6MiwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6IkYiLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InMyIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiQyIsIm5hbWUiOiJDYXJsbyIsInJvdyI6MiwiY29sIjo3LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoiczMiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJEIiwibmFtZSI6IkRhdmlkZSIsInJvdyI6MywiY29sIjo4LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOnRydWV9LHsiaWQiOiJzNCIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkUiLCJuYW1lIjoiRWxpbyIsInJvdyI6NCwiY29sIjo1LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoiczUiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJGIiwibmFtZSI6IkZ1cmlvIiwicm93Ijo1LCJjb2wiOjQsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJNIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzNiIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkciLCJuYW1lIjoiR2l1bGlhIiwicm93Ijo2LCJjb2wiOjAsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6dHJ1ZX0seyJpZCI6InM3Iiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiSCIsIm5hbWUiOiJIaXJvIiwicm93Ijo3LCJjb2wiOjMsImlzTXVyZGVyZXIiOnRydWUsImdlbmRlciI6Ik0iLCJoYXNIYXQiOnRydWUsImhhc0dsYXNzZXMiOnRydWV9LHsiaWQiOiJ2aWN0aW0iLCJraW5kIjoidmljdGltIiwiaW5pdGlhbCI6IlYiLCJuYW1lIjoiWmFyYSIsInJvdyI6OCwiY29sIjo2LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiRiIsImhhc0hhdCI6dHJ1ZSwiaGFzR2xhc3NlcyI6dHJ1ZX1dLCJzdXNwZWN0Q291bnQiOjgsImNsdWVzIjpbeyJpZCI6ImM2ODkiLCJ0eXBlIjoiQkVTSURFX09CSkVDVCIsInN1YmplY3RJZCI6InMwIiwic3ViamVjdE5hbWUiOiJBbm5hIiwiZmFjdCI6eyJvYmplY3RLaW5kIjoiYWxiZXJvIn0sImNhdGVnb3J5Ijoib2dnZXR0byIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJBbm5hIHNpIHRyb3ZhIGFjY2FudG8gYSB1biBhbGJlcm8uIn0seyJpZCI6ImM3MDAiLCJ0eXBlIjoiSU5fQ09MIiwic3ViamVjdElkIjoiczIiLCJzdWJqZWN0TmFtZSI6IkNhcmxvIiwiZmFjdCI6eyJjb2wiOjd9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJDYXJsbyBzaSB0cm92YSBuZWxsYSBjb2xvbm5hIDguIn0seyJpZCI6ImM3MDYiLCJ0eXBlIjoiSU5fUk9XIiwic3ViamVjdElkIjoiczMiLCJzdWJqZWN0TmFtZSI6IkRhdmlkZSIsImZhY3QiOnsicm93IjozfSwiY2F0ZWdvcnkiOiJwb3NpemlvbmUiLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiRGF2aWRlIHNpIHRyb3ZhIG5lbGxhIHJpZ2EgNC4ifSx7ImlkIjoiYzczNCIsInR5cGUiOiJDT1JORVIiLCJzdWJqZWN0SWQiOiJzNiIsInN1YmplY3ROYW1lIjoiR2l1bGlhIiwiZmFjdCI6e30sImNhdGVnb3J5IjoicG9zaXppb25lIiwiZGlmZiI6Miwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkdpdWxpYSBzaSB0cm92YSBpbiB1biBhbmdvbG8gZGVsbGEgc3VhIGFyZWEuIn0seyJpZCI6ImM3NDEiLCJ0eXBlIjoiT05MWV9PTl9PQkpFQ1QiLCJzdWJqZWN0SWQiOiJzNyIsInN1YmplY3ROYW1lIjoiSGlybyIsImZhY3QiOnsib2JqZWN0S2luZCI6ImJhcmNhYXZlbGEifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6Miwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6Ikhpcm8gw6ggbCd1bmljYSBwZXJzb25hIHN1IHVuYSBiYXJjYS4ifSx7ImlkIjoiYzcxMSIsInR5cGUiOiJXSVRIX0lOX0FSRUEiLCJzdWJqZWN0SWQiOiJzMyIsInN1YmplY3ROYW1lIjoiRGF2aWRlIiwiZmFjdCI6eyJ0YXJnZXRJZCI6InMyIiwiYXJlYUlkIjoyfSwiY2F0ZWdvcnkiOiJyZWxhemlvbmUiLCJkaWZmIjoyLCJ0YXJnZXRJZCI6InMyIiwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkRhdmlkZSDDqCBjb24gQ2FybG8gaW4gQ29tbyBFc3QuIn0seyJpZCI6ImM2OTIiLCJ0eXBlIjoiSU5fQVJFQSIsInN1YmplY3RJZCI6InMxIiwic3ViamVjdE5hbWUiOiJCcnVuYSIsImZhY3QiOnsiYXJlYUlkIjoxfSwiY2F0ZWdvcnkiOiJhcmVhIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkJydW5hIHNpIHRyb3ZhIGluIFBpYXp6YSBDYXZvdXIuIn0seyJpZCI6ImM3MTUiLCJ0eXBlIjoiQkVTSURFX09CSkVDVCIsInN1YmplY3RJZCI6InM0Iiwic3ViamVjdE5hbWUiOiJFbGlvIiwiZmFjdCI6eyJvYmplY3RLaW5kIjoic2VkaWEifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkVsaW8gc2kgdHJvdmEgYWNjYW50byBhIHVuYSBzZWRpYS4ifSx7ImlkIjoiYzY5NCIsInR5cGUiOiJJTl9DT0wiLCJzdWJqZWN0SWQiOiJzMSIsInN1YmplY3ROYW1lIjoiQnJ1bmEiLCJmYWN0Ijp7ImNvbCI6Mn0sImNhdGVnb3J5IjoicG9zaXppb25lIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkJydW5hIHNpIHRyb3ZhIG5lbGxhIGNvbG9ubmEgMy4ifSx7ImlkIjoiYzcyMyIsInR5cGUiOiJCRVNJREVfT0JKRUNUIiwic3ViamVjdElkIjoiczUiLCJzdWJqZWN0TmFtZSI6IkZ1cmlvIiwiZmFjdCI6eyJvYmplY3RLaW5kIjoiYXV0byJ9LCJjYXRlZ29yeSI6Im9nZ2V0dG8iLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiRnVyaW8gc2kgdHJvdmEgYWNjYW50byBhIHVuJ2F1dG8uIn0seyJpZCI6ImM3MzIiLCJ0eXBlIjoiQkVTSURFX09CSkVDVCIsInN1YmplY3RJZCI6InM2Iiwic3ViamVjdE5hbWUiOiJHaXVsaWEiLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJhdXRvIn0sImNhdGVnb3J5Ijoib2dnZXR0byIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJHaXVsaWEgc2kgdHJvdmEgYWNjYW50byBhIHVuJ2F1dG8uIn1dLCJ0aGVtZSI6bnVsbCwibmFycmF0aW9uIjpudWxsLCJuYXJyYXRlZCI6ZmFsc2UsImFpU29sdXRpb24iOm51bGwsImFpVmFsaWRhdGlvbk1zZyI6bnVsbCwiYWlEaWZmaWN1bHR5IjpudWxsLCJhaUh1bWFuRXZhbHVhdGlvbiI6bnVsbH0= -->