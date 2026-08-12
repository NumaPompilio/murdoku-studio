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

<!-- MURDOKU_STATE_B64: eyJ2ZXJzaW9uIjoxLCJ0aXRsZSI6IkFuZCBNb3JlIEFiYmlnbGlhbWVudG8iLCJzaXplIjo5LCJjZWxscyI6W3sicm93IjowLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzaGVsZiJ9LHsicm93IjowLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzaGVsZiJ9LHsicm93IjowLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzaGVsZiJ9LHsicm93IjowLCJjb2wiOjYsIndhbGthYmxlIjpmYWxzZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MCwiY29sIjo3LCJ3YWxrYWJsZSI6ZmFsc2UsIm9iamVjdCI6bnVsbH0seyJyb3ciOjAsImNvbCI6OCwid2Fsa2FibGUiOmZhbHNlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJjaGFpciJ9LHsicm93IjoxLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzaGVsZiJ9LHsicm93IjoxLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjYsIndhbGthYmxlIjpmYWxzZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjo3LCJ3YWxrYWJsZSI6ZmFsc2UsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6OCwid2Fsa2FibGUiOmZhbHNlLCJvYmplY3QiOm51bGx9LHsicm93IjoyLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzaGVsZiJ9LHsicm93IjoyLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoyLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoyLCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoyLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoyLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJjaGFpciJ9LHsicm93IjoyLCJjb2wiOjYsIndhbGthYmxlIjpmYWxzZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjo3LCJ3YWxrYWJsZSI6ZmFsc2UsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6OCwid2Fsa2FibGUiOmZhbHNlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzaGVsZiJ9LHsicm93IjozLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YWJsZSJ9LHsicm93IjozLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YWJsZSJ9LHsicm93IjozLCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjYsIndhbGthYmxlIjpmYWxzZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjo3LCJ3YWxrYWJsZSI6ZmFsc2UsIm9iamVjdCI6bnVsbH0seyJyb3ciOjMsImNvbCI6OCwid2Fsa2FibGUiOmZhbHNlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJwbGFudCJ9LHsicm93Ijo0LCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzaGVsZiJ9LHsicm93Ijo0LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YWJsZSJ9LHsicm93Ijo1LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJydWcifSx7InJvdyI6NSwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiY2hhaXIifSx7InJvdyI6NSwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidGFibGUifSx7InJvdyI6NSwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiY2hhaXIifSx7InJvdyI6NiwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2hlbGYifSx7InJvdyI6NywiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiY2FyIn0seyJyb3ciOjcsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InBhbG0ifSx7InJvdyI6NywiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYXBlY2FyIn0seyJyb3ciOjgsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InRyYXR0b3JlIn0seyJyb3ciOjgsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImNhciJ9LHsicm93Ijo4LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo4LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo4LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJjYXIifV0sIndhbGxzIjpbIjYsMHw3LDAiLCI2LDF8NywxIiwiNiwyfDcsMiIsIjYsM3w3LDMiLCI2LDR8Nyw0IiwiNiw1fDcsNSIsIjYsNnw3LDYiLCI2LDd8Nyw3IiwiNiw4fDcsOCIsIjEsMHwyLDAiLCIxLDF8MiwxIiwiMSwyfDIsMiIsIjEsM3wyLDMiLCIxLDR8Miw0IiwiMSw1fDIsNSIsIjIsNXwyLDYiLCIzLDV8Myw2IiwiMyw2fDQsNiIsIjMsN3w0LDciLCIzLDh8NCw4IiwiMSw1fDEsNiIsIjAsNXwwLDYiLCIyLDN8Miw0IiwiMywzfDMsNCIsIjMsNHw0LDQiLCIzLDV8NCw1Il0sIndpbmRvd3MiOlsiNiw2fDcsNiIsIjYsN3w3LDciXSwiZG9vcnMiOlsiNiwyfDcsMiIsIjIsM3wyLDQiLCIxLDN8MiwzIl0sImFyZWFOYW1lcyI6eyIwIjoiTWFnYXp6aW5vIiwiMiI6IkFuZCBNb3JlIEFiYmlnbGlhbWVudG8iLCIzIjoiQ2FtZXJpbm8iLCI0IjoiVmlhIEFsY2lkZSBkZSBHYXNwZXJpIn0sImFyZWFGbG9vcnMiOnt9LCJlbnRpdGllcyI6W3siaWQiOiJzMCIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkEiLCJuYW1lIjoiQXJ0dXJvIiwicm93IjoxLCJjb2wiOjIsImlzTXVyZGVyZXIiOnRydWUsImdlbmRlciI6Ik0iLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InMxIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiQiIsIm5hbWUiOiJCcnVuYSIsInJvdyI6MiwiY29sIjoxLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiRiIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoiczIiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJDIiwibmFtZSI6IkNoaWFyYSIsInJvdyI6MywiY29sIjo1LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiRiIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoiczMiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJEIiwibmFtZSI6IkRpYW5hIiwicm93Ijo0LCJjb2wiOjgsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzNCIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkUiLCJuYW1lIjoiRW56byIsInJvdyI6NSwiY29sIjozLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoiczUiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJGIiwibmFtZSI6IkZyYW5jbyIsInJvdyI6NiwiY29sIjo3LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoiczYiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJHIiwibmFtZSI6Ikdpbm8iLCJyb3ciOjcsImNvbCI6NiwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InM3Iiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiSCIsIm5hbWUiOiJIZWxnYSIsInJvdyI6OCwiY29sIjowLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiRiIsImhhc0hhdCI6dHJ1ZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJ2aWN0aW0iLCJraW5kIjoidmljdGltIiwiaW5pdGlhbCI6IlYiLCJuYW1lIjoiWm9lIiwicm93IjowLCJjb2wiOjQsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6ZmFsc2V9XSwic3VzcGVjdENvdW50Ijo4LCJjbHVlcyI6W3siaWQiOiJjMjQiLCJ0eXBlIjoiSU5fQ09MIiwic3ViamVjdElkIjoiczMiLCJzdWJqZWN0TmFtZSI6IkRpYW5hIiwiZmFjdCI6eyJjb2wiOjh9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJEaWFuYSBzaSB0cm92YSBuZWxsYSBjb2xvbm5hIDkuIn0seyJpZCI6ImM1MyIsInR5cGUiOiJXSVRIX0lOX0FSRUEiLCJzdWJqZWN0SWQiOiJzNSIsInN1YmplY3ROYW1lIjoiRnJhbmNvIiwiZmFjdCI6eyJ0YXJnZXRJZCI6InMxIiwiYXJlYUlkIjoyfSwiY2F0ZWdvcnkiOiJyZWxhemlvbmUiLCJkaWZmIjoyLCJ0YXJnZXRJZCI6InMxIiwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkZyYW5jbyDDqCBjb24gQnJ1bmEgaW4gQW5kIE1vcmUgQWJiaWdsaWFtZW50by4ifSx7ImlkIjoiYzE5IiwidHlwZSI6IkJFU0lERV9PQkpFQ1QiLCJzdWJqZWN0SWQiOiJzMiIsInN1YmplY3ROYW1lIjoiQ2hpYXJhIiwiZmFjdCI6eyJvYmplY3RLaW5kIjoiY2hhaXIifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkNoaWFyYSBzaSB0cm92YSBhY2NhbnRvIGEgdW5hIHNlZGlhLiJ9LHsiaWQiOiJjMzciLCJ0eXBlIjoiT05fT0JKRUNUIiwic3ViamVjdElkIjoiczQiLCJzdWJqZWN0TmFtZSI6IkVuem8iLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJydWcifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkVuem8gc2kgdHJvdmEgc3UgdW4gdGFwcGV0by4ifSx7ImlkIjoiYzUxIiwidHlwZSI6IkZST05UX1dJTkRPVyIsInN1YmplY3RJZCI6InM1Iiwic3ViamVjdE5hbWUiOiJGcmFuY28iLCJmYWN0Ijp7fSwiY2F0ZWdvcnkiOiJwb3NpemlvbmUiLCJkaWZmIjoyLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiRnJhbmNvIHNpIHRyb3ZhIGRpIGZyb250ZSBhIHVuYSBmaW5lc3RyYS4ifSx7ImlkIjoiYzcxIiwidHlwZSI6Ik9OTFlfT05fT0JKRUNUIiwic3ViamVjdElkIjoiczciLCJzdWJqZWN0TmFtZSI6IkhlbGdhIiwiZmFjdCI6eyJvYmplY3RLaW5kIjoiYXBlY2FyIn0sImNhdGVnb3J5Ijoib2dnZXR0byIsImRpZmYiOjIsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJIZWxnYSDDqCBsJ3VuaWNhIHBlcnNvbmEgc3UgdW4nQXBlIGNhci4ifSx7ImlkIjoiYzU4IiwidHlwZSI6IklOX0FSRUEiLCJzdWJqZWN0SWQiOiJzNiIsInN1YmplY3ROYW1lIjoiR2lubyIsImZhY3QiOnsiYXJlYUlkIjo0fSwiY2F0ZWdvcnkiOiJhcmVhIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6Ikdpbm8gc2kgdHJvdmEgaW4gVmlhIEFsY2lkZSBkZSBHYXNwZXJpLiJ9LHsiaWQiOiJjMSIsInR5cGUiOiJJTl9ST1ciLCJzdWJqZWN0SWQiOiJzMCIsInN1YmplY3ROYW1lIjoiQXJ0dXJvIiwiZmFjdCI6eyJyb3ciOjF9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJBcnR1cm8gc2kgdHJvdmEgbmVsbGEgcmlnYSAyLiJ9LHsiaWQiOiJjNDkiLCJ0eXBlIjoiQkVTSURFX09CSkVDVCIsInN1YmplY3RJZCI6InM1Iiwic3ViamVjdE5hbWUiOiJGcmFuY28iLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJzaGVsZiJ9LCJjYXRlZ29yeSI6Im9nZ2V0dG8iLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiRnJhbmNvIHNpIHRyb3ZhIGFjY2FudG8gYSB1bm8gc2NhZmZhbGUuIn0seyJpZCI6ImM4IiwidHlwZSI6IkJFU0lERV9PQkpFQ1QiLCJzdWJqZWN0SWQiOiJzMSIsInN1YmplY3ROYW1lIjoiQnJ1bmEiLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJzaGVsZiJ9LCJjYXRlZ29yeSI6Im9nZ2V0dG8iLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiQnJ1bmEgc2kgdHJvdmEgYWNjYW50byBhIHVubyBzY2FmZmFsZS4ifV0sInRoZW1lIjpudWxsLCJuYXJyYXRpb24iOm51bGwsIm5hcnJhdGVkIjpmYWxzZSwiYWlTb2x1dGlvbiI6bnVsbCwiYWlWYWxpZGF0aW9uTXNnIjpudWxsLCJhaURpZmZpY3VsdHkiOm51bGwsImFpSHVtYW5FdmFsdWF0aW9uIjpudWxsfQ== -->