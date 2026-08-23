# Configurazione mappa "Casa della Nonna"

Descrizione completa della mappa: stanze (aree), muri, oggetti e personaggi. Coordinate come (riga, colonna) a partire da 1.

Griglia 9×9. Regole: una sola persona per riga e per colonna; "accanto" = celle adiacenti nella stessa area (i muri bloccano); la vittima è sola con l'assassino (nella sua area c'è esattamente un sospetto).

## Stanze / aree

- **A = Cucina** — celle occupabili: (1,1), (1,2), (2,1)
- **B = Studio** — celle occupabili: (1,3), (2,2), (3,2)
- **C = Serra** — celle occupabili: (1,4), (1,5), (1,6), (2,6), (2,7), (2,8), (3,6), (3,7), (3,8), (3,9), (4,6), (4,8), (5,4), (5,5), (5,6), (5,7), (5,8), (6,5), (6,6), (6,7), (7,4), (7,5), (7,6)
- **D = Cantina** — celle occupabili: (1,8), (1,9)
- **E = Salotto** — celle occupabili: (2,5), (3,4), (3,5), (4,4)
- **F = Camera** — celle occupabili: (4,3), (5,3)
- **G = Loggia** — celle occupabili: (5,9), (6,8), (6,9), (7,9), (8,9), (9,7), (9,8), (9,9)
- **H = Portico** — celle occupabili: (6,1), (6,2), (7,1), (7,2), (7,3), (8,2), (8,3), (9,1), (9,3)
- **I = Officina** — celle occupabili: (8,5), (8,6), (9,4), (9,5), (9,6)

**Griglia di aree e muri** — `┃`/`━` = muro tra due celle; `#` = cella bloccata:
```
     1   2   3   4   5   6   7   8   9  
1 |  A   A ┃ B ┃ C   C   C ┃ #   D   D 
  |     ━━━     ━━━ ━━━     ━━━ ━━━ ━━━
2 |  A ┃ B   #   b ┃ E ┃ C   C   C   c 
  | ━━━         ━━━                    
3 |  #   B   b ┃ E   E ┃ C   C   C   C 
  |     ━━━ ━━━                     ━━━
4 |  b ┃ f   F ┃ E   e ┃ C   c   C ┃ g 
  |             ━━━ ━━━                
5 |  b ┃ f   F ┃ C   C   C   C   C ┃ G 
  | ━━━ ━━━                     ━━━    
6 |  H   H ┃ f ┃ #   C   C   C ┃ G   G 
  |         ━━━             ━━━        
7 |  H   H   H ┃ C   C   C ┃ i ┃ g   G 
  |             ━━━ ━━━ ━━━            
8 |  #   H   H ┃ #   I   I   i ┃ g   G 
  |                         ━━━        
9 |  H   h   H ┃ I   I   I ┃ G   G   G 
```

## Muri (coppie di celle separate)

- stessa riga: (1,2)|(1,3), (1,3)|(1,4), (1,6)|(1,7), (2,1)|(2,2), (2,4)|(2,5), (2,5)|(2,6), (3,3)|(3,4), (3,5)|(3,6), (4,1)|(4,2), (4,3)|(4,4), (4,5)|(4,6), (4,8)|(4,9), (5,1)|(5,2), (5,3)|(5,4), (5,8)|(5,9), (6,2)|(6,3), (6,3)|(6,4), (6,7)|(6,8), (7,3)|(7,4), (7,6)|(7,7), (7,7)|(7,8), (8,3)|(8,4), (8,7)|(8,8), (9,3)|(9,4), (9,6)|(9,7)
- stessa colonna: (1,2)|(2,2), (1,4)|(2,4), (1,5)|(2,5), (1,7)|(2,7), (1,8)|(2,8), (1,9)|(2,9), (2,1)|(3,1), (2,4)|(3,4), (3,2)|(4,2), (3,3)|(4,3), (3,9)|(4,9), (4,4)|(5,4), (4,5)|(5,5), (5,1)|(6,1), (5,2)|(6,2), (5,8)|(6,8), (6,3)|(7,3), (6,7)|(7,7), (7,4)|(8,4), (7,5)|(8,5), (7,6)|(8,6), (8,7)|(9,7)

## Oggetti (elementi)

Minuscolo = calpestabile, MAIUSCOLO = ostacolo, `..` = vuota, `##` = bloccata:
```
     1   2   3   4   5   6   7   8   9  
1 | .. bu .. .. .. .. ## .. .. 
2 | wa .. ## SO .. .. .. wa MO 
3 | ## .. MAS .. bu .. .. .. .. 
4 | FR2 SE3 .. bu FR2 .. SE3 .. MAS 
5 | SO MO .. wa .. .. pa wa pa 
6 | .. .. SO ## .. bu .. .. .. 
7 | .. .. .. .. .. .. MO SO pa 
8 | ## .. .. ## .. .. SO SO .. 
9 | .. MO .. pa bu .. .. .. .. 
```

**Legenda oggetti:**
- `bu` = Buca (calpestabile)
- `wa` = Water (calpestabile)
- `SO` = Sant’Oronzo (ostacolo)
- `MO` = Moto (ostacolo)
- `MAS` = Muro a secco (ostacolo)
- `FR2` = Frisella (ostacolo)
- `SE3` = Semaforo (ostacolo)
- `pa` = Panchina (calpestabile)

**Celle bloccate:** (1,7), (2,3), (3,1), (6,4), (8,1), (8,4)

**Oggetti per cella:** (1,2) Buca (calpestabile); (2,1) Water (calpestabile); (2,4) Sant’Oronzo (ostacolo); (2,8) Water (calpestabile); (2,9) Moto (ostacolo); (3,3) Muro a secco (ostacolo); (3,5) Buca (calpestabile); (4,1) Frisella (ostacolo); (4,2) Semaforo (ostacolo); (4,4) Buca (calpestabile); (4,5) Frisella (ostacolo); (4,7) Semaforo (ostacolo); (4,9) Muro a secco (ostacolo); (5,1) Sant’Oronzo (ostacolo); (5,2) Moto (ostacolo); (5,4) Water (calpestabile); (5,7) Panchina (calpestabile); (5,8) Water (calpestabile); (5,9) Panchina (calpestabile); (6,3) Sant’Oronzo (ostacolo); (6,6) Buca (calpestabile); (7,7) Moto (ostacolo); (7,8) Sant’Oronzo (ostacolo); (7,9) Panchina (calpestabile); (8,7) Sant’Oronzo (ostacolo); (8,8) Sant’Oronzo (ostacolo); (9,2) Moto (ostacolo); (9,4) Panchina (calpestabile); (9,5) Buca (calpestabile).

## Personaggi

- A = Arturo: (2,1) — **assassino**
- B = Biagio: (3,7)
- C = Corrado: (4,4)
- D = Dario: (5,6)
- E = Elsa: (6,5)
- F = Fabio: (7,3)
- G = Giulia: (8,9)
- H = Hektor: (9,8)
- V = Zaccaria (vittima): (1,2)

**Assassino: Arturo** — unico sospetto nell'area della vittima.

<!-- MURDOKU_STATE_B64: eyJ2ZXJzaW9uIjoxLCJ0aXRsZSI6IkNhc2EgZGVsbGEgTm9ubmEiLCJzaXplIjo5LCJjZWxscyI6W3sicm93IjowLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJidWNhIn0seyJyb3ciOjAsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjAsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjAsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjAsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjAsImNvbCI6Niwid2Fsa2FibGUiOmZhbHNlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ3YXRlciJ9LHsicm93IjoxLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjIsIndhbGthYmxlIjpmYWxzZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2FudF9vcm9uem8ifSx7InJvdyI6MSwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoid2F0ZXIifSx7InJvdyI6MSwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibW90byJ9LHsicm93IjoyLCJjb2wiOjAsIndhbGthYmxlIjpmYWxzZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibXVyb19hX3NlY2NvIn0seyJyb3ciOjIsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImJ1Y2EifSx7InJvdyI6MiwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiZnJpc2VsbGEifSx7InJvdyI6MywiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2VtYWZvcm8ifSx7InJvdyI6MywiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYnVjYSJ9LHsicm93IjozLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJmcmlzZWxsYSJ9LHsicm93IjozLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzZW1hZm9ybyJ9LHsicm93IjozLCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJtdXJvX2Ffc2VjY28ifSx7InJvdyI6NCwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2FudF9vcm9uem8ifSx7InJvdyI6NCwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibW90byJ9LHsicm93Ijo0LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ3YXRlciJ9LHsicm93Ijo0LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJwYW5jaGluYSJ9LHsicm93Ijo0LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ3YXRlciJ9LHsicm93Ijo0LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJwYW5jaGluYSJ9LHsicm93Ijo1LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzYW50X29yb256byJ9LHsicm93Ijo1LCJjb2wiOjMsIndhbGthYmxlIjpmYWxzZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYnVjYSJ9LHsicm93Ijo1LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJtb3RvIn0seyJyb3ciOjYsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InNhbnRfb3JvbnpvIn0seyJyb3ciOjYsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InBhbmNoaW5hIn0seyJyb3ciOjcsImNvbCI6MCwid2Fsa2FibGUiOmZhbHNlLCJvYmplY3QiOm51bGx9LHsicm93Ijo3LCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo3LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo3LCJjb2wiOjMsIndhbGthYmxlIjpmYWxzZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2FudF9vcm9uem8ifSx7InJvdyI6NywiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2FudF9vcm9uem8ifSx7InJvdyI6NywiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibW90byJ9LHsicm93Ijo4LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo4LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJwYW5jaGluYSJ9LHsicm93Ijo4LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJidWNhIn0seyJyb3ciOjgsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH1dLCJ3YWxscyI6WyIwLDF8MSwxIiwiMCwxfDAsMiIsIjAsMnwwLDMiLCIwLDN8MSwzIiwiMCw0fDEsNCIsIjAsNXwwLDYiLCIwLDZ8MSw2IiwiMCw3fDEsNyIsIjAsOHwxLDgiLCIxLDB8MiwwIiwiMSwwfDEsMSIsIjEsM3wyLDMiLCIxLDN8MSw0IiwiMSw0fDEsNSIsIjIsMXwzLDEiLCIyLDJ8MywyIiwiMiwyfDIsMyIsIjIsNHwyLDUiLCIyLDh8Myw4IiwiMywwfDMsMSIsIjMsMnwzLDMiLCIzLDN8NCwzIiwiMyw0fDQsNCIsIjMsNHwzLDUiLCIzLDd8Myw4IiwiNCwwfDUsMCIsIjQsMHw0LDEiLCI0LDF8NSwxIiwiNCwyfDQsMyIsIjQsN3w1LDciLCI0LDd8NCw4IiwiNSwxfDUsMiIsIjUsMnw2LDIiLCI1LDJ8NSwzIiwiNSw2fDYsNiIsIjUsNnw1LDciLCI2LDJ8NiwzIiwiNiwzfDcsMyIsIjYsNHw3LDQiLCI2LDV8Nyw1IiwiNiw1fDYsNiIsIjYsNnw2LDciLCI3LDJ8NywzIiwiNyw2fDgsNiIsIjcsNnw3LDciLCI4LDJ8OCwzIiwiOCw1fDgsNiJdLCJ3aW5kb3dzIjpbXSwiZG9vcnMiOltdLCJhcmVhTmFtZXMiOnsiMCI6IkN1Y2luYSIsIjEiOiJTdHVkaW8iLCIyIjoiU2VycmEiLCIzIjoiQ2FudGluYSIsIjQiOiJTYWxvdHRvIiwiNSI6IkNhbWVyYSIsIjYiOiJMb2dnaWEiLCI3IjoiUG9ydGljbyIsIjgiOiJPZmZpY2luYSJ9LCJhcmVhRmxvb3JzIjp7fSwiZW50aXRpZXMiOlt7ImlkIjoiczAiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJBIiwibmFtZSI6IkFydHVybyIsInJvdyI6MSwiY29sIjowLCJpc011cmRlcmVyIjp0cnVlLCJnZW5kZXIiOiJNIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzMSIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkIiLCJuYW1lIjoiQmlhZ2lvIiwicm93IjoyLCJjb2wiOjYsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJNIiwiaGFzSGF0Ijp0cnVlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InMyIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiQyIsIm5hbWUiOiJDb3JyYWRvIiwicm93IjozLCJjb2wiOjMsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJNIiwiaGFzSGF0Ijp0cnVlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InMzIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiRCIsIm5hbWUiOiJEYXJpbyIsInJvdyI6NCwiY29sIjo1LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6dHJ1ZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzNCIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkUiLCJuYW1lIjoiRWxzYSIsInJvdyI6NSwiY29sIjo0LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiRiIsImhhc0hhdCI6dHJ1ZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzNSIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkYiLCJuYW1lIjoiRmFiaW8iLCJyb3ciOjYsImNvbCI6MiwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InM2Iiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiRyIsIm5hbWUiOiJHaXVsaWEiLCJyb3ciOjcsImNvbCI6OCwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6IkYiLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InM3Iiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiSCIsIm5hbWUiOiJIZWt0b3IiLCJyb3ciOjgsImNvbCI6NywiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InZpY3RpbSIsImtpbmQiOiJ2aWN0aW0iLCJpbml0aWFsIjoiViIsIm5hbWUiOiJaYWNjYXJpYSIsInJvdyI6MCwiY29sIjoxLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfV0sInN1c3BlY3RDb3VudCI6OCwiY2x1ZXMiOltdLCJ0aGVtZSI6bnVsbCwibmFycmF0aW9uIjpudWxsLCJuYXJyYXRlZCI6ZmFsc2UsImFpU29sdXRpb24iOm51bGwsImFpVmFsaWRhdGlvbk1zZyI6bnVsbCwiYWlEaWZmaWN1bHR5IjpudWxsLCJhaUh1bWFuRXZhbHVhdGlvbiI6bnVsbH0= -->