# Configurazione mappa "Casa della Nonna"

Descrizione completa della mappa: stanze (aree), muri, oggetti e personaggi. Coordinate come (riga, colonna) a partire da 1.

Griglia 9×9. Regole: una sola persona per riga e per colonna; "accanto" = celle adiacenti nella stessa area (i muri bloccano); la vittima è sola con l'assassino (nella sua area c'è esattamente un sospetto).

## Stanze / aree

- **A = Soffitta** — celle occupabili: (1,1), (2,1), (3,1), (4,1), (5,2), (6,1), (6,2), (6,3), (7,1), (7,2), (8,1), (9,1)
- **B = Portico** — celle occupabili: (1,3), (1,4), (1,5), (1,6), (2,2), (2,3), (2,4), (2,5), (2,6), (3,4), (3,5), (3,6), (4,7), (4,8), (5,6), (5,7), (5,8), (6,7), (6,8), (7,8)
- **C = Camera** — celle occupabili: (1,7), (1,8), (1,9), (2,8), (3,8), (4,9), (5,9)
- **D = Cucina** — celle occupabili: (3,2), (3,3), (4,2), (4,3), (4,4), (5,3), (6,4)
- **E = Sala** — celle occupabili: (4,5), (5,5), (6,6), (7,5), (7,6)
- **F = Atrio** — celle occupabili: (7,4), (8,2), (9,2)
- **G = Deposito** — celle occupabili: (7,7), (7,9), (8,7), (8,8), (8,9), (9,7), (9,8)
- **H = Galleria** — celle occupabili: (8,4), (9,3), (9,4)

**Griglia di aree e muri** — `┃`/`━` = muro tra due celle; `#` = cella bloccata:
```
     1   2   3   4   5   6   7   8   9  
1 |  A ┃ b   B   B   B   B ┃ C   C   C 
  |                                    
2 |  A ┃ B   B   B   B   B ┃ c   C   # 
  |     ━━━ ━━━             ━━━        
3 |  A ┃ D   D ┃ B   B   B   b ┃ C   c 
  |             ━━━ ━━━         ━━━    
4 |  A ┃ D   D   D ┃ E ┃ b   B   B ┃ C 
  |     ━━━                            
5 |  a   A ┃ D   # ┃ E ┃ B   B   B ┃ C 
  |         ━━━         ━━━            
6 |  A   A   A ┃ D ┃ #   E ┃ B   B ┃ c 
  |         ━━━ ━━━         ━━━     ━━━
7 |  A   A ┃ f   F ┃ E   E ┃ G ┃ B ┃ G 
  |     ━━━     ━━━ ━━━ ━━━     ━━━    
8 |  A ┃ F   f ┃ H   h ┃ g   G   G   G 
  |         ━━━                        
9 |  A ┃ F ┃ H   H   h ┃ #   G   G   # 
```

## Muri (coppie di celle separate)

- stessa riga: (1,1)|(1,2), (1,6)|(1,7), (2,1)|(2,2), (2,6)|(2,7), (3,1)|(3,2), (3,3)|(3,4), (3,7)|(3,8), (4,1)|(4,2), (4,4)|(4,5), (4,5)|(4,6), (4,8)|(4,9), (5,2)|(5,3), (5,4)|(5,5), (5,5)|(5,6), (5,8)|(5,9), (6,3)|(6,4), (6,4)|(6,5), (6,6)|(6,7), (6,8)|(6,9), (7,2)|(7,3), (7,4)|(7,5), (7,6)|(7,7), (7,7)|(7,8), (7,8)|(7,9), (8,1)|(8,2), (8,3)|(8,4), (8,5)|(8,6), (9,1)|(9,2), (9,2)|(9,3), (9,5)|(9,6)
- stessa colonna: (2,2)|(3,2), (2,3)|(3,3), (2,7)|(3,7), (3,4)|(4,4), (3,5)|(4,5), (3,8)|(4,8), (4,2)|(5,2), (5,3)|(6,3), (5,6)|(6,6), (6,3)|(7,3), (6,4)|(7,4), (6,7)|(7,7), (6,9)|(7,9), (7,2)|(8,2), (7,4)|(8,4), (7,5)|(8,5), (7,6)|(8,6), (7,8)|(8,8), (8,3)|(9,3)

## Oggetti (elementi)

Minuscolo = calpestabile, MAIUSCOLO = ostacolo, `..` = vuota, `##` = bloccata:
```
     1   2   3   4   5   6   7   8   9  
1 | se MI se .. .. .. se .. .. 
2 | su .. se .. .. .. FI2 .. ## 
3 | .. .. .. .. su .. TB su BAV 
4 | .. .. .. .. .. FDI .. .. .. 
5 | FI2 .. .. ## .. .. .. .. .. 
6 | .. .. su .. ## .. .. se BAV 
7 | .. .. FI2 .. .. .. .. .. .. 
8 | .. .. TB su BAV FDI .. .. .. 
9 | se .. .. .. TB ## .. .. ## 
```

**Legenda oggetti:**
- `se` = Sedia (calpestabile)
- `MI` = Microonde (ostacolo)
- `su` = SUP (calpestabile)
- `FI2` = Fico (ostacolo)
- `TB` = Torretta bagnino (ostacolo)
- `BAV` = Barca a vela (ostacolo)
- `FDI` = Fico d’India (ostacolo)

**Celle bloccate:** (2,9), (5,4), (6,5), (9,6), (9,9)

**Oggetti per cella:** (1,1) Sedia (calpestabile); (1,2) Microonde (ostacolo); (1,3) Sedia (calpestabile); (1,7) Sedia (calpestabile); (2,1) SUP (calpestabile); (2,3) Sedia (calpestabile); (2,7) Fico (ostacolo); (3,5) SUP (calpestabile); (3,7) Torretta bagnino (ostacolo); (3,8) SUP (calpestabile); (3,9) Barca a vela (ostacolo); (4,6) Fico d’India (ostacolo); (5,1) Fico (ostacolo); (6,3) SUP (calpestabile); (6,8) Sedia (calpestabile); (6,9) Barca a vela (ostacolo); (7,3) Fico (ostacolo); (8,3) Torretta bagnino (ostacolo); (8,4) SUP (calpestabile); (8,5) Barca a vela (ostacolo); (8,6) Fico d’India (ostacolo); (9,1) Sedia (calpestabile); (9,5) Torretta bagnino (ostacolo).

## Personaggi

- A = Aldo: (1,6)
- B = Biagio: (2,5)
- C = Corrado: (4,9)
- D = Dario: (5,8)
- E = Ettore: (6,4) — **assassino**
- F = Furio: (7,2)
- G = Greta: (8,7)
- H = Hiro: (9,1)
- V = Zeno (vittima): (3,3)

**Assassino: Ettore** — unico sospetto nell'area della vittima.

<!-- MURDOKU_STATE_B64: eyJ2ZXJzaW9uIjoxLCJ0aXRsZSI6IkNhc2EgZGVsbGEgTm9ubmEiLCJzaXplIjo5LCJjZWxscyI6W3sicm93IjowLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzZWRpYSJ9LHsicm93IjowLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJtaWNyb29uZGUifSx7InJvdyI6MCwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2VkaWEifSx7InJvdyI6MCwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MCwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MCwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MCwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2VkaWEifSx7InJvdyI6MCwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MCwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic3VwIn0seyJyb3ciOjEsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InNlZGlhIn0seyJyb3ciOjEsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImZpY28ifSx7InJvdyI6MSwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjo4LCJ3YWxrYWJsZSI6ZmFsc2UsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InN1cCJ9LHsicm93IjoyLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoyLCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0b3JyZXR0YWJhZ25pbm8ifSx7InJvdyI6MiwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic3VwIn0seyJyb3ciOjIsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImJhcmNhYXZlbGEifSx7InJvdyI6MywiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiZmljb2RpbmRpYSJ9LHsicm93IjozLCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJmaWNvIn0seyJyb3ciOjQsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjQsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjQsImNvbCI6Mywid2Fsa2FibGUiOmZhbHNlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzdXAifSx7InJvdyI6NSwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjo0LCJ3YWxrYWJsZSI6ZmFsc2UsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InNlZGlhIn0seyJyb3ciOjUsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImJhcmNhYXZlbGEifSx7InJvdyI6NiwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiZmljbyJ9LHsicm93Ijo2LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo3LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo3LCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo3LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0b3JyZXR0YWJhZ25pbm8ifSx7InJvdyI6NywiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic3VwIn0seyJyb3ciOjcsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImJhcmNhYXZlbGEifSx7InJvdyI6NywiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiZmljb2RpbmRpYSJ9LHsicm93Ijo3LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo3LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo3LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo4LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzZWRpYSJ9LHsicm93Ijo4LCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo4LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo4LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo4LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0b3JyZXR0YWJhZ25pbm8ifSx7InJvdyI6OCwiY29sIjo1LCJ3YWxrYWJsZSI6ZmFsc2UsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6OCwid2Fsa2FibGUiOmZhbHNlLCJvYmplY3QiOm51bGx9XSwid2FsbHMiOlsiMCwwfDAsMSIsIjAsNXwwLDYiLCIxLDB8MSwxIiwiMSwxfDIsMSIsIjEsMnwyLDIiLCIxLDV8MSw2IiwiMSw2fDIsNiIsIjIsMHwyLDEiLCIyLDJ8MiwzIiwiMiwzfDMsMyIsIjIsNHwzLDQiLCIyLDZ8Miw3IiwiMiw3fDMsNyIsIjMsMHwzLDEiLCIzLDF8NCwxIiwiMywzfDMsNCIsIjMsNHwzLDUiLCIzLDd8Myw4IiwiNCwxfDQsMiIsIjQsMnw1LDIiLCI0LDN8NCw0IiwiNCw0fDQsNSIsIjQsNXw1LDUiLCI0LDd8NCw4IiwiNSwyfDYsMiIsIjUsMnw1LDMiLCI1LDN8NiwzIiwiNSwzfDUsNCIsIjUsNXw1LDYiLCI1LDZ8Niw2IiwiNSw3fDUsOCIsIjUsOHw2LDgiLCI2LDF8NywxIiwiNiwxfDYsMiIsIjYsM3w3LDMiLCI2LDN8Niw0IiwiNiw0fDcsNCIsIjYsNXw3LDUiLCI2LDV8Niw2IiwiNiw2fDYsNyIsIjYsN3w3LDciLCI2LDd8Niw4IiwiNywwfDcsMSIsIjcsMnw4LDIiLCI3LDJ8NywzIiwiNyw0fDcsNSIsIjgsMHw4LDEiLCI4LDF8OCwyIiwiOCw0fDgsNSJdLCJ3aW5kb3dzIjpbXSwiZG9vcnMiOltdLCJhcmVhTmFtZXMiOnsiMCI6IlNvZmZpdHRhIiwiMSI6IlBvcnRpY28iLCIyIjoiQ2FtZXJhIiwiMyI6IkN1Y2luYSIsIjQiOiJTYWxhIiwiNSI6IkF0cmlvIiwiNiI6IkRlcG9zaXRvIiwiNyI6IkdhbGxlcmlhIn0sImFyZWFGbG9vcnMiOnt9LCJlbnRpdGllcyI6W3siaWQiOiJzMCIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkEiLCJuYW1lIjoiQWxkbyIsInJvdyI6MCwiY29sIjo1LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOnRydWV9LHsiaWQiOiJzMSIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkIiLCJuYW1lIjoiQmlhZ2lvIiwicm93IjoxLCJjb2wiOjQsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJNIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzMiIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkMiLCJuYW1lIjoiQ29ycmFkbyIsInJvdyI6MywiY29sIjo4LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6dHJ1ZSwiaGFzR2xhc3NlcyI6dHJ1ZX0seyJpZCI6InMzIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiRCIsIm5hbWUiOiJEYXJpbyIsInJvdyI6NCwiY29sIjo3LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoiczQiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJFIiwibmFtZSI6IkV0dG9yZSIsInJvdyI6NSwiY29sIjozLCJpc011cmRlcmVyIjp0cnVlLCJnZW5kZXIiOiJNIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6dHJ1ZX0seyJpZCI6InM1Iiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiRiIsIm5hbWUiOiJGdXJpbyIsInJvdyI6NiwiY29sIjoxLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoiczYiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJHIiwibmFtZSI6IkdyZXRhIiwicm93Ijo3LCJjb2wiOjYsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzNyIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkgiLCJuYW1lIjoiSGlybyIsInJvdyI6OCwiY29sIjowLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoidmljdGltIiwia2luZCI6InZpY3RpbSIsImluaXRpYWwiOiJWIiwibmFtZSI6Ilplbm8iLCJyb3ciOjIsImNvbCI6MiwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjpmYWxzZX1dLCJzdXNwZWN0Q291bnQiOjgsImNsdWVzIjpbeyJpZCI6ImMxNjg4IiwidHlwZSI6IkVER0UiLCJzdWJqZWN0SWQiOiJzMCIsInN1YmplY3ROYW1lIjoiQWxkbyIsImZhY3QiOnsiZWRnZSI6InRvcCJ9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJBbGRvIHNpIHRyb3ZhIG5lbGxhIHJpZ2EgcGnDuSBpbiBhbHRvLiJ9LHsiaWQiOiJjMTY5NiIsInR5cGUiOiJJTl9DT0wiLCJzdWJqZWN0SWQiOiJzMSIsInN1YmplY3ROYW1lIjoiQmlhZ2lvIiwiZmFjdCI6eyJjb2wiOjR9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJCaWFnaW8gc2kgdHJvdmEgbmVsbGEgY29sb25uYSA1LiJ9LHsiaWQiOiJjMTcyMiIsInR5cGUiOiJOT1RfQ09STkVSIiwic3ViamVjdElkIjoiczQiLCJzdWJqZWN0TmFtZSI6IkV0dG9yZSIsImZhY3QiOnt9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjIsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJFdHRvcmUgbm9uIHNpIHRyb3ZhIGluIHVuIGFuZ29sbyBkZWxsYSBzdWEgYXJlYS4ifSx7ImlkIjoiYzE3MzIiLCJ0eXBlIjoiQkVTSURFX09CSkVDVCIsInN1YmplY3RJZCI6InM2Iiwic3ViamVjdE5hbWUiOiJHcmV0YSIsImZhY3QiOnsib2JqZWN0S2luZCI6ImZpY29kaW5kaWEifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkdyZXRhIHNpIHRyb3ZhIGFjY2FudG8gYSB1biBGaWNvIGTigJlJbmRpYS4ifSx7ImlkIjoiYzE3NDMiLCJ0eXBlIjoiU0FNRV9BUkVBIiwic3ViamVjdElkIjoiczciLCJzdWJqZWN0TmFtZSI6Ikhpcm8iLCJmYWN0Ijp7InRhcmdldElkIjoiczUifSwiY2F0ZWdvcnkiOiJyZWxhemlvbmUiLCJkaWZmIjoyLCJfY2FuZCI6bnVsbCwidGFyZ2V0SWQiOiJzNSIsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJIaXJvIHNpIHRyb3ZhIG5lbGxhIHN0ZXNzYSBhcmVhIGRpIEZ1cmlvLiJ9LHsiaWQiOiJjMTY5MSIsInR5cGUiOiJXSVRIX0lOX0FSRUEiLCJzdWJqZWN0SWQiOiJzMCIsInN1YmplY3ROYW1lIjoiQWxkbyIsImZhY3QiOnsidGFyZ2V0SWQiOiJzMSIsImFyZWFJZCI6MX0sImNhdGVnb3J5IjoicmVsYXppb25lIiwiZGlmZiI6MiwidGFyZ2V0SWQiOiJzMSIsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJBbGRvIMOoIGNvbiBCaWFnaW8gaW4gUG9ydGljby4ifSx7ImlkIjoiYzE3MzQiLCJ0eXBlIjoiQUxPTkUiLCJzdWJqZWN0SWQiOiJzNiIsInN1YmplY3ROYW1lIjoiR3JldGEiLCJmYWN0Ijp7fSwiY2F0ZWdvcnkiOiJyZWxhemlvbmUiLCJkaWZmIjoyLCJfY2FuZCI6bnVsbCwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkdyZXRhIMOoIGRhIHNvbGEgbmVsbGEgc3VhIGFyZWEuIn0seyJpZCI6ImMxNzAzIiwidHlwZSI6IklOX0FSRUEiLCJzdWJqZWN0SWQiOiJzMiIsInN1YmplY3ROYW1lIjoiQ29ycmFkbyIsImZhY3QiOnsiYXJlYUlkIjoyfSwiY2F0ZWdvcnkiOiJhcmVhIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkNvcnJhZG8gc2kgdHJvdmEgaW4gQ2FtZXJhLiJ9LHsiaWQiOiJjMTc0MCIsInR5cGUiOiJPTl9PQkpFQ1QiLCJzdWJqZWN0SWQiOiJzNyIsInN1YmplY3ROYW1lIjoiSGlybyIsImZhY3QiOnsib2JqZWN0S2luZCI6InNlZGlhIn0sImNhdGVnb3J5Ijoib2dnZXR0byIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJIaXJvIHNpIHRyb3ZhIHN1IHVuYSBTZWRpYS4ifSx7ImlkIjoiYzE3MjQiLCJ0eXBlIjoiSU5fUk9XIiwic3ViamVjdElkIjoiczUiLCJzdWJqZWN0TmFtZSI6IkZ1cmlvIiwiZmFjdCI6eyJyb3ciOjZ9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJGdXJpbyBzaSB0cm92YSBuZWxsYSByaWdhIDcuIn0seyJpZCI6ImMxNzEzIiwidHlwZSI6IkJFU0lERV9PQkpFQ1QiLCJzdWJqZWN0SWQiOiJzMyIsInN1YmplY3ROYW1lIjoiRGFyaW8iLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJzZWRpYSJ9LCJjYXRlZ29yeSI6Im9nZ2V0dG8iLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiRGFyaW8gc2kgdHJvdmEgYWNjYW50byBhIHVuYSBTZWRpYS4ifV0sInRoZW1lIjpudWxsLCJuYXJyYXRpb24iOm51bGwsIm5hcnJhdGVkIjpmYWxzZSwiYWlTb2x1dGlvbiI6bnVsbCwiYWlWYWxpZGF0aW9uTXNnIjpudWxsLCJhaURpZmZpY3VsdHkiOm51bGwsImFpSHVtYW5FdmFsdWF0aW9uIjpudWxsfQ== -->