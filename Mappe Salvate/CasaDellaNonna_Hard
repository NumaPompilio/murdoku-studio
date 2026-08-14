# Configurazione mappa "Casa della Nonna"

Descrizione completa della mappa: stanze (aree), muri, oggetti e personaggi. Coordinate come (riga, colonna) a partire da 1.

Griglia 9×9. Regole: una sola persona per riga e per colonna; "accanto" = celle adiacenti nella stessa area (i muri bloccano); la vittima è sola con l'assassino (nella sua area c'è esattamente un sospetto).

## Stanze / aree

- **A = Cucina** — celle occupabili: (1,2), (2,2), (2,3), (3,3), (4,1), (4,2), (4,3)
- **B = Bagno** — celle occupabili: (1,4), (1,5), (2,4)
- **C = Camera** — celle occupabili: (1,8), (1,9), (2,6), (2,7), (2,8), (3,6), (3,7), (3,8), (4,6), (4,7), (4,9)
- **D = Corridoio** — celle occupabili: (3,4), (3,5), (4,4), (4,5), (5,4), (5,5), (6,4), (7,4), (7,5)
- **E = Salotto** — celle occupabili: (5,1), (5,2), (6,2), (6,3), (7,1), (7,2), (7,3)
- **F = Cameretta** — celle occupabili: (5,6), (5,7), (5,8), (6,6), (6,8)
- **G = Box** — celle occupabili: (7,6), (7,7), (7,8), (7,9), (8,6), (8,8), (9,6), (9,7), (9,9)
- **H = Veranda** — celle occupabili: (8,2), (8,3), (8,4), (8,5), (9,1), (9,2), (9,3), (9,4), (9,5)

**Griglia di aree e muri** — `┃`/`━` = muro tra due celle; `#` = cella bloccata:
```
     1   2   3   4   5   6   7   8   9  
1 |  a   A   a ┃ B   B ┃ c   c   C   C 
  |                                    
2 |  a   A   A ┃ B   b ┃ C   C   C   c 
  |             ━━━ ━━━                
3 |  a   a   A ┃ D   D ┃ C   C   C   c 
  |                                    
4 |  A   A   A ┃ D   D ┃ C   C   c   C 
  | ━━━ ━━━ ━━━         ━━━ ━━━ ━━━ ━━━
5 |  E   E   e ┃ D   D ┃ F   F   F   f 
  |                                    
6 |  e   E   E ┃ D   d ┃ F   f   F   f 
  |                     ━━━ ━━━ ━━━ ━━━
7 |  E   E   E ┃ D   D ┃ G   G   G   G 
  | ━━━ ━━━ ━━━ ━━━ ━━━                
8 |  h   H   H   H   H ┃ G   g   G   g 
  |                                    
9 |  H   H   H   H   H ┃ G   G   g   G 
```

## Muri (coppie di celle separate)

- stessa riga: (1,3)|(1,4), (1,5)|(1,6), (2,3)|(2,4), (2,5)|(2,6), (3,3)|(3,4), (3,5)|(3,6), (4,3)|(4,4), (4,5)|(4,6), (5,3)|(5,4), (5,5)|(5,6), (6,3)|(6,4), (6,5)|(6,6), (7,3)|(7,4), (7,5)|(7,6), (8,5)|(8,6), (9,5)|(9,6)
- stessa colonna: (2,4)|(3,4), (2,5)|(3,5), (4,1)|(5,1), (4,2)|(5,2), (4,3)|(5,3), (4,6)|(5,6), (4,7)|(5,7), (4,8)|(5,8), (4,9)|(5,9), (6,6)|(7,6), (6,7)|(7,7), (6,8)|(7,8), (6,9)|(7,9), (7,1)|(8,1), (7,2)|(8,2), (7,3)|(8,3), (7,4)|(8,4), (7,5)|(8,5)

## Oggetti (elementi)

Minuscolo = calpestabile, MAIUSCOLO = ostacolo, `..` = vuota, `##` = bloccata:
```
     1   2   3   4   5   6   7   8   9  
1 | FR .. CE do .. LA CA .. sg 
2 | FO2 .. .. wa LA2 .. ta2 .. AR 
3 | FO TA se .. .. .. .. .. AR 
4 | .. se .. ta2 .. .. le CO .. 
5 | .. .. LI .. .. .. le .. CO 
6 | TV di .. .. LA .. PC .. AR 
7 | po ta2 .. .. .. .. .. .. .. 
8 | VDP .. se .. .. .. AC .. AU 
9 | .. .. .. .. .. .. .. BI .. 
```

**Legenda oggetti:**
- `FR` = Frigorifero (ostacolo)
- `CE` = Cestino (ostacolo)
- `do` = Doccia (calpestabile)
- `LA` = Lampada (ostacolo)
- `CA` = Cassettiera (ostacolo)
- `sg` = Sgabello (calpestabile)
- `FO2` = Forno (ostacolo)
- `wa` = Water (calpestabile)
- `LA2` = Lavandino (ostacolo)
- `ta2` = Tappeto (calpestabile)
- `AR` = Armadio (ostacolo)
- `FO` = Fornello (ostacolo)
- `TA` = Tavolo (ostacolo)
- `se` = Sedia (calpestabile)
- `le` = Letto (calpestabile)
- `CO` = Comodino (ostacolo)
- `LI` = Libreria (ostacolo)
- `TV` = TV (ostacolo)
- `di` = Divano (calpestabile)
- `PC` = PC (ostacolo)
- `po` = Poltrona (calpestabile)
- `VDP` = Vaso di piante (ostacolo)
- `AC` = Ape car (ostacolo)
- `AU` = Auto (ostacolo)
- `BI` = Bicicletta (ostacolo)

**Celle bloccate:** nessuna

**Oggetti per cella:** (1,1) Frigorifero (ostacolo); (1,3) Cestino (ostacolo); (1,4) Doccia (calpestabile); (1,6) Lampada (ostacolo); (1,7) Cassettiera (ostacolo); (1,9) Sgabello (calpestabile); (2,1) Forno (ostacolo); (2,4) Water (calpestabile); (2,5) Lavandino (ostacolo); (2,7) Tappeto (calpestabile); (2,9) Armadio (ostacolo); (3,1) Fornello (ostacolo); (3,2) Tavolo (ostacolo); (3,3) Sedia (calpestabile); (3,9) Armadio (ostacolo); (4,2) Sedia (calpestabile); (4,4) Tappeto (calpestabile); (4,7) Letto (calpestabile); (4,8) Comodino (ostacolo); (5,3) Libreria (ostacolo); (5,7) Letto (calpestabile); (5,9) Comodino (ostacolo); (6,1) TV (ostacolo); (6,2) Divano (calpestabile); (6,5) Lampada (ostacolo); (6,7) PC (ostacolo); (6,9) Armadio (ostacolo); (7,1) Poltrona (calpestabile); (7,2) Tappeto (calpestabile); (8,1) Vaso di piante (ostacolo); (8,3) Sedia (calpestabile); (8,7) Ape car (ostacolo); (8,9) Auto (ostacolo); (9,8) Bicicletta (ostacolo).

## Personaggi

- A = Arturo: (1,8)
- B = Bruno: (2,3)
- C = Corrado: (3,7)
- D = Delia: (5,4) — **assassino**
- E = Ettore: (6,2)
- F = Fabio: (7,1)
- G = Giulia: (8,6)
- H = Hiro: (9,9)
- V = Zelda (vittima): (4,5)

**Assassino: Delia** — unico sospetto nell'area della vittima.

<!-- MURDOKU_STATE_B64: eyJ2ZXJzaW9uIjoxLCJ0aXRsZSI6IkNhc2EgZGVsbGEgTm9ubmEiLCJzaXplIjo5LCJjZWxscyI6W3sicm93IjowLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJmcmlnb3JpZmVybyJ9LHsicm93IjowLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJjZXN0aW5vIn0seyJyb3ciOjAsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImRvY2NpYSJ9LHsicm93IjowLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJsYW1wYWRhIn0seyJyb3ciOjAsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImNhc3NldHRpZXJhIn0seyJyb3ciOjAsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjAsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InNnYWJlbGxvIn0seyJyb3ciOjEsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImZvcm5vIn0seyJyb3ciOjEsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6IndhdGVyIn0seyJyb3ciOjEsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImxhdmFuZGlubyJ9LHsicm93IjoxLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YXBwZXRvIn0seyJyb3ciOjEsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImFybWFkaW8ifSx7InJvdyI6MiwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiZm9ybmVsbG8ifSx7InJvdyI6MiwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidGF2b2xvIn0seyJyb3ciOjIsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InNlZGlhIn0seyJyb3ciOjIsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImFybWFkaW8ifSx7InJvdyI6MywiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2VkaWEifSx7InJvdyI6MywiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MywiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidGFwcGV0byJ9LHsicm93IjozLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJsZXR0byJ9LHsicm93IjozLCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJjb21vZGlubyJ9LHsicm93IjozLCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJsaWJyZXJpYSJ9LHsicm93Ijo0LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJsZXR0byJ9LHsicm93Ijo0LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJjb21vZGlubyJ9LHsicm93Ijo1LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0diJ9LHsicm93Ijo1LCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJkaXZhbm8ifSx7InJvdyI6NSwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibGFtcGFkYSJ9LHsicm93Ijo1LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJwYyJ9LHsicm93Ijo1LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJhcm1hZGlvIn0seyJyb3ciOjYsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InBvbHRyb25hIn0seyJyb3ciOjYsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InRhcHBldG8ifSx7InJvdyI6NiwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidmFzb19kaV9waWFudGUifSx7InJvdyI6NywiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2VkaWEifSx7InJvdyI6NywiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYXBlX2NhciJ9LHsicm93Ijo3LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo3LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJhdXRvIn0seyJyb3ciOjgsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImJpY2ljbGV0dGEifSx7InJvdyI6OCwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfV0sIndhbGxzIjpbIjgsNHw4LDUiLCI3LDR8Nyw1IiwiNiwwfDcsMCIsIjYsMXw3LDEiLCI2LDJ8NywyIiwiNiwzfDcsMyIsIjYsNHw3LDQiLCI2LDR8Niw1IiwiNSw0fDUsNSIsIjUsMnw1LDMiLCI0LDJ8NCwzIiwiMywyfDQsMiIsIjMsMXw0LDEiLCIzLDB8NCwwIiwiNiwyfDYsMyIsIjMsNHwzLDUiLCIyLDR8Miw1IiwiMSw0fDEsNSIsIjQsNHw0LDUiLCIxLDN8MiwzIiwiMSw0fDIsNCIsIjAsMnwwLDMiLCIxLDJ8MSwzIiwiMCw0fDAsNSIsIjIsMnwyLDMiLCIzLDJ8MywzIiwiNSw1fDYsNSIsIjUsNnw2LDYiLCI1LDd8Niw3IiwiNSw4fDYsOCIsIjMsNXw0LDUiLCIzLDZ8NCw2IiwiMyw3fDQsNyIsIjMsOHw0LDgiXSwid2luZG93cyI6WyI1LC0xfDUsMCIsIi0xLDF8MCwxIiwiLTEsNnwwLDYiLCIzLDh8Myw5Il0sImRvb3JzIjpbIjYsM3w3LDMiLCI1LDJ8NSwzIiwiMiwyfDIsMyIsIjEsNHwyLDQiLCI4LDZ8OSw2IiwiOCw3fDksNyIsIjIsNHwyLDUiLCI0LDR8NCw1Il0sImFyZWFOYW1lcyI6eyIwIjoiQ3VjaW5hIiwiMSI6IkJhZ25vIiwiMiI6IkNhbWVyYSIsIjMiOiJDb3JyaWRvaW8iLCI0IjoiU2Fsb3R0byIsIjUiOiJDYW1lcmV0dGEiLCI2IjoiQm94IiwiNyI6IlZlcmFuZGEifSwiYXJlYUZsb29ycyI6e30sImVudGl0aWVzIjpbeyJpZCI6InMwIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiQSIsIm5hbWUiOiJBcnR1cm8iLCJyb3ciOjAsImNvbCI6NywiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InMxIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiQiIsIm5hbWUiOiJCcnVubyIsInJvdyI6MSwiY29sIjoyLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoiczIiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJDIiwibmFtZSI6IkNvcnJhZG8iLCJyb3ciOjIsImNvbCI6NiwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOnRydWUsImhhc0dsYXNzZXMiOnRydWV9LHsiaWQiOiJzMyIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkQiLCJuYW1lIjoiRGVsaWEiLCJyb3ciOjQsImNvbCI6MywiaXNNdXJkZXJlciI6dHJ1ZSwiZ2VuZGVyIjoiRiIsImhhc0hhdCI6dHJ1ZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzNCIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkUiLCJuYW1lIjoiRXR0b3JlIiwicm93Ijo1LCJjb2wiOjEsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJNIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6dHJ1ZX0seyJpZCI6InM1Iiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiRiIsIm5hbWUiOiJGYWJpbyIsInJvdyI6NiwiY29sIjowLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6dHJ1ZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzNiIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkciLCJuYW1lIjoiR2l1bGlhIiwicm93Ijo3LCJjb2wiOjUsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzNyIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkgiLCJuYW1lIjoiSGlybyIsInJvdyI6OCwiY29sIjo4LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoidmljdGltIiwia2luZCI6InZpY3RpbSIsImluaXRpYWwiOiJWIiwibmFtZSI6IlplbGRhIiwicm93IjozLCJjb2wiOjQsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6ZmFsc2V9XSwic3VzcGVjdENvdW50Ijo4LCJjbHVlcyI6W3siaWQiOiJjMzM0OSIsInR5cGUiOiJCRVNJREVfT0JKRUNUIiwic3ViamVjdElkIjoiczAiLCJzdWJqZWN0TmFtZSI6IkFydHVybyIsImZhY3QiOnsib2JqZWN0S2luZCI6InNnYWJlbGxvIn0sImNhdGVnb3J5Ijoib2dnZXR0byIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJBcnR1cm8gc2kgdHJvdmEgYWNjYW50byBhIHVuIFNnYWJlbGxvLiJ9LHsiaWQiOiJjMzM2OSIsInR5cGUiOiJJTl9ST1ciLCJzdWJqZWN0SWQiOiJzMyIsInN1YmplY3ROYW1lIjoiRGVsaWEiLCJmYWN0Ijp7InJvdyI6NH0sImNhdGVnb3J5IjoicG9zaXppb25lIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkRlbGlhIHNpIHRyb3ZhIG5lbGxhIHJpZ2EgNS4ifSx7ImlkIjoiYzMzOTMiLCJ0eXBlIjoiV0lUSF9JTl9BUkVBIiwic3ViamVjdElkIjoiczUiLCJzdWJqZWN0TmFtZSI6IkZhYmlvIiwiZmFjdCI6eyJ0YXJnZXRJZCI6InM0IiwiYXJlYUlkIjo0fSwiY2F0ZWdvcnkiOiJyZWxhemlvbmUiLCJkaWZmIjoyLCJ0YXJnZXRJZCI6InM0Iiwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkZhYmlvIMOoIGNvbiBFdHRvcmUgaW4gU2Fsb3R0by4ifSx7ImlkIjoiYzMzOTQiLCJ0eXBlIjoiSU5fQVJFQSIsInN1YmplY3RJZCI6InM2Iiwic3ViamVjdE5hbWUiOiJHaXVsaWEiLCJmYWN0Ijp7ImFyZWFJZCI6Nn0sImNhdGVnb3J5IjoiYXJlYSIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJHaXVsaWEgc2kgdHJvdmEgaW4gQm94LiJ9LHsiaWQiOiJjMzQwOCIsInR5cGUiOiJDT1JORVIiLCJzdWJqZWN0SWQiOiJzNyIsInN1YmplY3ROYW1lIjoiSGlybyIsImZhY3QiOnt9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjIsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJIaXJvIHNpIHRyb3ZhIGluIHVuIGFuZ29sbyBkZWxsYSBzdWEgYXJlYS4ifSx7ImlkIjoiYzMzNzYiLCJ0eXBlIjoiT05fT0JKRUNUIiwic3ViamVjdElkIjoiczQiLCJzdWJqZWN0TmFtZSI6IkV0dG9yZSIsImZhY3QiOnsib2JqZWN0S2luZCI6ImRpdmFubyJ9LCJjYXRlZ29yeSI6Im9nZ2V0dG8iLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiRXR0b3JlIHNpIHRyb3ZhIHN1IHVuIERpdmFuby4ifSx7ImlkIjoiYzMzNTYiLCJ0eXBlIjoiQkVTSURFX09CSkVDVCIsInN1YmplY3RJZCI6InMxIiwic3ViamVjdE5hbWUiOiJCcnVubyIsImZhY3QiOnsib2JqZWN0S2luZCI6ImNlc3Rpbm8ifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkJydW5vIHNpIHRyb3ZhIGFjY2FudG8gYSB1biBDZXN0aW5vLiJ9LHsiaWQiOiJjMzM2MCIsInR5cGUiOiJJTl9BUkVBIiwic3ViamVjdElkIjoiczIiLCJzdWJqZWN0TmFtZSI6IkNvcnJhZG8iLCJmYWN0Ijp7ImFyZWFJZCI6Mn0sImNhdGVnb3J5IjoiYXJlYSIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJDb3JyYWRvIHNpIHRyb3ZhIGluIENhbWVyYS4ifSx7ImlkIjoiYzMzNzEiLCJ0eXBlIjoiQkVTSURFX09CSkVDVCIsInN1YmplY3RJZCI6InMzIiwic3ViamVjdE5hbWUiOiJEZWxpYSIsImZhY3QiOnsib2JqZWN0S2luZCI6InRhcHBldG8ifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkRlbGlhIHNpIHRyb3ZhIGFjY2FudG8gYSB1biBUYXBwZXRvLiJ9LHsiaWQiOiJjMzM2MyIsInR5cGUiOiJCRVNJREVfT0JKRUNUIiwic3ViamVjdElkIjoiczIiLCJzdWJqZWN0TmFtZSI6IkNvcnJhZG8iLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJ0YXBwZXRvIn0sImNhdGVnb3J5Ijoib2dnZXR0byIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJDb3JyYWRvIHNpIHRyb3ZhIGFjY2FudG8gYSB1biBUYXBwZXRvLiJ9XSwidGhlbWUiOm51bGwsIm5hcnJhdGlvbiI6bnVsbCwibmFycmF0ZWQiOmZhbHNlLCJhaVNvbHV0aW9uIjpbIlBhc3NvIDE6IEFydHVybyBkZXZlIHRyb3ZhcnNpIGFjY2FudG8gYWxsbyBTZ2FiZWxsby4gTG8gU2dhYmVsbG8gw6ggaW4gcmlnYSAxLCBjb2xvbm5hIDk7IGwndW5pY2EgY2VsbGEgdmFsaWRhIGFkaWFjZW50ZSBuZWxsYSBzdGVzc2Egc3RhbnphIMOoIHJpZ2EgMSwgY29sb25uYSA4LiBRdWluZGkgQXJ0dXJvIMOoIGluICgxLDgpLiIsIlBhc3NvIDI6IEV0dG9yZSBzaSB0cm92YSBzb3ByYSBpbCBEaXZhbm8uIEwndW5pY28gRGl2YW5vIGNhbHBlc3RhYmlsZSDDqCBpbiByaWdhIDYsIGNvbG9ubmEgMi4gUXVpbmRpIEV0dG9yZSDDqCBpbiAoNiwyKS4iLCJQYXNzbyAzOiBEZWxpYSDDqCBuZWxsYSByaWdhIDUgZSBkZXZlIGVzc2VyZSBhY2NhbnRvIGEgdW4gVGFwcGV0by4gQ29udHJvbGxhbmRvIGkgdGFwcGV0aSwgbCd1bmljYSBjZWxsYSB2YWxpZGEgZGVsbGEgcmlnYSA1IGFkaWFjZW50ZSBhIHVuIHRhcHBldG8gw6ggcmlnYSA1LCBjb2xvbm5hIDQsIGFjY2FudG8gYWwgdGFwcGV0byBkZWwgQ29ycmlkb2lvIGluICg0LDQpLiBRdWluZGkgRGVsaWEgw6ggaW4gKDUsNCkuIiwiUGFzc28gNDogQnJ1bm8gZGV2ZSB0cm92YXJzaSBhY2NhbnRvIGFsIENlc3Rpbm8uIElsIENlc3Rpbm8gw6ggaW4gcmlnYSAxLCBjb2xvbm5hIDM7IGxlIGNlbGxlIHZhbGlkZSBhZGlhY2VudGkgc29ubyAoMSwyKSBlICgyLDMpLiBQb2ljaMOpIGxhIHJpZ2EgMSDDqCBnacOgIG9jY3VwYXRhIGRhIEFydHVybywgQnJ1bm8gbm9uIHB1w7Igc3RhcmUgaW4gKDEsMikuIFF1aW5kaSBCcnVubyDDqCBpbiAoMiwzKS4iLCJQYXNzbyA1OiBDb3JyYWRvIHNpIHRyb3ZhIGluIENhbWVyYSBlZCDDqCBhY2NhbnRvIGEgdW4gVGFwcGV0by4gSWwgdGFwcGV0byBkZWxsYSBDYW1lcmEgw6ggaW4gKDIsNyksIHF1aW5kaSBsZSBjZWxsZSB2YWxpZGUgY2FuZGlkYXRlIHNvbm8gKDIsNiksICgyLDgpIGUgKDMsNykuIExhIHJpZ2EgMiDDqCBnacOgIG9jY3VwYXRhIGRhIEJydW5vLCBxdWluZGkgcmVzdGFubyBzb2xvIGxlIGNlbGxlIG5vbiBpbiByaWdhIDIuIEwndW5pY2EgY2FuZGlkYXRhIGVmZmV0dGl2YSDDqCAoMyw3KS4gUXVpbmRpIENvcnJhZG8gw6ggaW4gKDMsNykuIiwiUGFzc28gNjogRmFiaW8gw6ggY29uIEV0dG9yZSBpbiBTYWxvdHRvLiBFdHRvcmUgb2NjdXBhIGdpw6AgaWwgU2Fsb3R0byBpbiAoNiwyKSwgcXVpbmRpIEZhYmlvIGRldmUgc3RhcmUgaW4gdW4nYWx0cmEgY2VsbGEgZGVsIFNhbG90dG8uIEVzY2x1ZGVuZG8gbGUgcmlnaGUgZ2nDoCBvY2N1cGF0ZSBkYSBEZWxpYSBlZCBFdHRvcmUgZSBsZSBjb2xvbm5lIGdpw6Agb2NjdXBhdGUgZGEgQnJ1bm8gZWQgRXR0b3JlLCBsJ3VuaWNhIGNlbGxhIHJpbWFzdGEgdmFsaWRhIG5lbCBTYWxvdHRvIMOoICg3LDEpLiBRdWluZGkgRmFiaW8gw6ggaW4gKDcsMSkuIiwiUGFzc28gNzogR2l1bGlhIHNpIHRyb3ZhIGluIEJveC4gRG9wbyBsZSBwb3NpemlvbmkgZ2nDoCBmaXNzYXRlLCBsZSBjYW5kaWRhdGUgY29tcGF0aWJpbGkgY29uIHJpZ2hlIGUgY29sb25uZSBhbmNvcmEgbGliZXJlIHNvbm8gKDgsNiksICg5LDYpIGUgKDksOSkuIiwiUGFzc28gODogSGlybyBkZXZlIHRyb3ZhcnNpIGluIHVuIGFuZ29sbyBkZWxsYSBzdWEgYXJlYS4gRG9wbyBsZSBlc2NsdXNpb25pIGRpIHJpZ2EgZSBjb2xvbm5hLCBsZSBzdWUgY2FuZGlkYXRlIHJlc2lkdWUgY29tcGF0aWJpbGkgc29ubyAoNCw5KSwgKDgsNSksICg5LDYpIGUgKDksOSkuIiwiUGFzc28gOTogUmVzdGFubyBkYSBjb2xsb2NhcmUgR2l1bGlhLCBIaXJvIGUgbGEgdml0dGltYSBuZWxsZSByaWdoZSA0LCA4IGUgOSBlIG5lbGxlIGNvbG9ubmUgNSwgNiBlIDkuIEJpc29nbmEgb3JhIGFwcGxpY2FyZSBhbmNoZSBsYSByZWdvbGEgZGVsbCdhc3Nhc3Npbm86IGxhIHZpdHRpbWEgZGV2ZSB0cm92YXJzaSBpbiB1bmEgc3RhbnphIGNoZSBjb250aWVuZSBlc2F0dGFtZW50ZSB1biBzb3NwZXR0by4iLCJQYXNzbyAxMDogU2UgSGlybyBvIEdpdWxpYSBvY2N1cGFubyBjb21iaW5hemlvbmkgZGl2ZXJzZSBkYSBIaXJvIGluICg5LDkpIGUgR2l1bGlhIGluICg4LDYpLCBsYSBjZWxsYSByZXNpZHVhIHBlciBsYSB2aXR0aW1hIGNhZGUgbyBpbiB1bmEgc3RhbnphIHNlbnphIHNvc3BldHRpLCBvcHB1cmUgaW4gQ2FtZXJhLCBkb3ZlIGNpIHNvbm8gZ2nDoCBBcnR1cm8gZSBDb3JyYWRvLCBxdWluZGkgbm9uIGNpIHNhcmViYmUgdW4gdW5pY28gc29zcGV0dG8gbmVsbGEgc3RhbnphIGRlbGxhIHZpdHRpbWEuIiwiUGFzc28gMTE6IEwndW5pY2EgY29uZmlndXJhemlvbmUgdmFsaWRhIMOoIHF1aW5kaSBHaXVsaWEgaW4gKDgsNikgZSBIaXJvIGluICg5LDkpLiBBIHF1ZXN0byBwdW50byBsJ3VuaWNhIHJpZ2EgZSBjb2xvbm5hIHJpbWFzdGUgcGVyIGxhIHZpdHRpbWEgc29ubyByaWdhIDQgZSBjb2xvbm5hIDUuIiwiUGFzc28gMTI6IExhIHZpdHRpbWEgWmVsZGEgw6ggcXVpbmRpIGluICg0LDUpLCBuZWwgQ29ycmlkb2lvLiBOZWwgQ29ycmlkb2lvIGMnw6ggdW4gc29sbyBzb3NwZXR0bywgRGVsaWEgaW4gKDUsNCksIHBlcmNpw7IgRGVsaWEgw6ggbCdhc3Nhc3NpbmEgc2Vjb25kbyBsYSByZWdvbGEgZGVsIGdpb2NvLiJdLCJhaVZhbGlkYXRpb25Nc2ciOiLinIUgTCdBSSBoYSByaXNvbHRvIGNvcnJldHRhbWVudGUgbGEgbWFwcGEhIExlIHBvc2l6aW9uaSBkZWRvdHRlIGNvbWJhY2lhbm8gcGVyZmV0dGFtYW50ZS4iLCJhaURpZmZpY3VsdHkiOiJIYXJkIiwiYWlIdW1hbkV2YWx1YXRpb24iOiJMYSBtYXBwYSBoYSB1bmEgcHJpbWEgcGFydGUgYWJiYXN0YW56YSBsaW5lYXJlLCBwZXJjaMOpIGRpdmVyc2kgaW5kaXppIHB1bnRhbm8gYSBjZWxsZSBxdWFzaSBvYmJsaWdhdGU6IEFydHVybyBhY2NhbnRvIGFsbG8gc2dhYmVsbG8sIEV0dG9yZSBzdWwgZGl2YW5vLCBEZWxpYSBuZWxsYSByaWdhIDUgYWNjYW50byBhbCB0YXBwZXRvLiBMYSBkaWZmaWNvbHTDoCBjcmVzY2UgbmVsbGEgcGFydGUgZmluYWxlLCBxdWFuZG8gR2l1bGlhLCBIaXJvIGUgbGEgdml0dGltYSBkZXZvbm8gZXNzZXJlIHJpc29sdGkgaW5zaWVtZSB1c2FuZG8gbm9uIHNvbG8gbGEgcmVnb2xhIGRpIHJpZ2EvY29sb25uYSwgbWEgYW5jaGUgbGEgcmVnb2xhIGRlbGwnYXNzYXNzaW5vIGNvbWUgdW5pY28gc29zcGV0dG8gbmVsbGEgc3RhbnphIGRlbGxhIHZpdHRpbWEuIFBlciB1biB1bWFubyBxdWVzdG8gZmluYWxlIMOoIGFwcGFnYW50ZSBtYSBwaXV0dG9zdG8gdGVjbmljbzogcmljaGllZGUgZGkgY29uZnJvbnRhcmUgcG9jaGkgc2NlbmFyaSByZXNpZHVpIGUgc2NhcnRhcmUgcXVlbGxpIGluIGN1aSBsYSB2aXR0aW1hIGZpbmlyZWJiZSBpbiB1bmEgc3RhbnphIGNvbiB6ZXJvIHNvc3BldHRpIG8gY29uIHBpw7kgZGkgdW4gc29zcGV0dG8uIMOIIHVuIGJ1b24gbGl2ZWxsbyBIYXJkLCBub24gRXhwZXJ0LCBwZXJjaMOpIGxhIGNhdGVuYSBsb2dpY2EgcmVzdGEgY29udHJvbGxhYmlsZSBlIG5vbiByaWNoaWVkZSB0ZW50YXRpdmkgdHJvcHBvIGVzdGVzaS4ifQ== -->
