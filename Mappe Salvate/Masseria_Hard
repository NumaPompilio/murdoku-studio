# Configurazione mappa "Masseria 9×9"

Descrizione completa della mappa: stanze (aree), muri, oggetti e personaggi. Coordinate come (riga, colonna) a partire da 1.

Griglia 9×9. Regole: una sola persona per riga e per colonna; "accanto" = celle adiacenti nella stessa area (i muri bloccano); la vittima è sola con l'assassino (nella sua area c'è esattamente un sospetto).

## Stanze / aree

- **A = Giardino** [Stile: pattern=prato] — celle occupabili: (1,1), (1,2), (2,2), (3,1), (4,1), (5,1), (6,1), (6,3), (7,1), (7,2), (7,3), (8,2), (8,3), (9,1), (9,2)
- **B = Suite 1** — celle occupabili: (1,5), (1,6), (2,4), (2,5), (2,6)
- **C = Suite 2** — celle occupabili: (1,7), (1,8), (1,9), (2,7)
- **D = Cucina** [Stile: color=#e08d79] — celle occupabili: (2,3), (3,3), (3,4), (4,2), (4,3), (4,4), (5,3)
- **E = Reception** — celle occupabili: (3,5), (3,6), (3,7), (4,7), (5,5), (5,6), (5,7)
- **F = Bagno** — celle occupabili: (3,8), (4,8), (4,9)
- **G = Campagna** [Stile: pattern=terra] — celle occupabili: (5,9), (6,6), (6,7), (6,8), (7,7), (8,7), (8,9), (9,9)
- **H = Entrata** [Stile: pattern=pavimento] — celle occupabili: (6,5), (7,4), (7,5), (7,6), (8,6), (9,5), (9,6)

**Griglia di aree e muri** — `┃`/`━` = muro tra due celle; `#` = cella bloccata:
```
     1   2   3   4   5   6   7   8   9  
1 |  A   A   a ┃ b   B   B ┃ C   C   C 
  |         ━━━                        
2 |  a   A ┃ D ┃ B   B   B ┃ C   c   c 
  |     ━━━     ━━━ ━━━ ━━━ ━━━ ━━━ ━━━
3 |  A ┃ d   D   D ┃ E   E   E ┃ F   f 
  |                                    
4 |  A ┃ D   D   D ┃ e   e   E ┃ F   F 
  |                                 ━━━
5 |  A ┃ d   D   d ┃ E   E   E ┃ f ┃ G 
  |     ━━━ ━━━ ━━━ ━━━ ━━━ ━━━ ━━━    
6 |  A   a   A   a ┃ H ┃ G   G   G   g 
  |             ━━━     ━━━            
7 |  A   A   A ┃ H   H   H ┃ G   g   g 
  |                                    
8 |  a   A   A ┃ h   h   H ┃ G   g   G 
  |                                    
9 |  A   A   a ┃ h   H   H ┃ g   g   G 
```

## Muri (coppie di celle separate)

- stessa riga: (1,3)|(1,4), (1,6)|(1,7), (2,2)|(2,3), (2,3)|(2,4), (2,6)|(2,7), (3,1)|(3,2), (3,4)|(3,5), (3,7)|(3,8), (4,1)|(4,2), (4,4)|(4,5), (4,7)|(4,8), (5,1)|(5,2), (5,4)|(5,5), (5,7)|(5,8), (5,8)|(5,9), (6,4)|(6,5), (6,5)|(6,6), (7,3)|(7,4), (7,6)|(7,7), (8,3)|(8,4), (8,6)|(8,7), (9,3)|(9,4), (9,6)|(9,7)
- stessa colonna: (1,3)|(2,3), (2,2)|(3,2), (2,4)|(3,4), (2,5)|(3,5), (2,6)|(3,6), (2,7)|(3,7), (2,8)|(3,8), (2,9)|(3,9), (4,9)|(5,9), (5,2)|(6,2), (5,3)|(6,3), (5,4)|(6,4), (5,5)|(6,5), (5,6)|(6,6), (5,7)|(6,7), (5,8)|(6,8), (6,4)|(7,4), (6,6)|(7,6)

## Oggetti (elementi)

Minuscolo = calpestabile, MAIUSCOLO = ostacolo, `..` = vuota, `##` = bloccata:
```
     1   2   3   4   5   6   7   8   9  
1 | .. .. AU2 TA le .. le .. .. 
2 | AU2 .. .. .. .. .. le VDP TA 
3 | .. TA se .. ta2 ta2 ta2 .. LA2 
4 | .. se .. .. VDP TA ta2 .. ta2 
5 | .. TA .. LA2 .. .. .. VDP .. 
6 | .. AU2 .. VDP ta2 .. .. .. MAS 
7 | se .. .. .. .. .. .. MAS AU2 
8 | TA .. .. MAS AU2 .. .. MAS .. 
9 | .. .. AU2 MAS .. .. MAS AU2 .. 
```

**Legenda oggetti:**
- `AU2` = Albero ulivo (ostacolo)
- `TA` = Tavolo (ostacolo)
- `le` = Letto (calpestabile)
- `VDP` = Vaso di piante (ostacolo)
- `se` = Sedia (calpestabile)
- `ta2` = Tappeto (calpestabile)
- `LA2` = Lavandino (ostacolo)
- `MAS` = Muro a secco (ostacolo)

**Celle bloccate:** nessuna

**Oggetti per cella:** (1,3) Albero ulivo (ostacolo); (1,4) Tavolo (ostacolo); (1,5) Letto (calpestabile); (1,7) Letto (calpestabile); (2,1) Albero ulivo (ostacolo); (2,7) Letto (calpestabile); (2,8) Vaso di piante (ostacolo); (2,9) Tavolo (ostacolo); (3,2) Tavolo (ostacolo); (3,3) Sedia (calpestabile); (3,5) Tappeto (calpestabile); (3,6) Tappeto (calpestabile); (3,7) Tappeto (calpestabile); (3,9) Lavandino (ostacolo); (4,2) Sedia (calpestabile); (4,5) Vaso di piante (ostacolo); (4,6) Tavolo (ostacolo); (4,7) Tappeto (calpestabile); (4,9) Tappeto (calpestabile); (5,2) Tavolo (ostacolo); (5,4) Lavandino (ostacolo); (5,8) Vaso di piante (ostacolo); (6,2) Albero ulivo (ostacolo); (6,4) Vaso di piante (ostacolo); (6,5) Tappeto (calpestabile); (6,9) Muro a secco (ostacolo); (7,1) Sedia (calpestabile); (7,8) Muro a secco (ostacolo); (7,9) Albero ulivo (ostacolo); (8,1) Tavolo (ostacolo); (8,4) Muro a secco (ostacolo); (8,5) Albero ulivo (ostacolo); (8,8) Muro a secco (ostacolo); (9,3) Albero ulivo (ostacolo); (9,4) Muro a secco (ostacolo); (9,7) Muro a secco (ostacolo); (9,8) Albero ulivo (ostacolo).

## Personaggi

- A = Amelia: (1,2)
- B = Biagio: (2,4)
- C = Corrado: (4,9) — **assassino**
- D = Dora: (5,6)
- E = Ettore: (6,3)
- F = Fosca: (7,1)
- G = Giulia: (8,7)
- H = Helga: (9,5)
- V = Zoe (vittima): (3,8)

**Assassino: Corrado** — unico sospetto nell'area della vittima.

<!-- MURDOKU_STATE_B64: eyJ2ZXJzaW9uIjoxLCJ0aXRsZSI6Ik1hc3NlcmlhIDnDlzkiLCJzaXplIjo5LCJjZWxscyI6W3sicm93IjowLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJhbGJlcm9fdWxpdm8ifSx7InJvdyI6MCwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidGF2b2xvIn0seyJyb3ciOjAsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImxldHRvIn0seyJyb3ciOjAsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjAsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImxldHRvIn0seyJyb3ciOjAsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjAsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImFsYmVyb191bGl2byJ9LHsicm93IjoxLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJsZXR0byJ9LHsicm93IjoxLCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ2YXNvX2RpX3BpYW50ZSJ9LHsicm93IjoxLCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YXZvbG8ifSx7InJvdyI6MiwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidGF2b2xvIn0seyJyb3ciOjIsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InNlZGlhIn0seyJyb3ciOjIsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InRhcHBldG8ifSx7InJvdyI6MiwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidGFwcGV0byJ9LHsicm93IjoyLCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YXBwZXRvIn0seyJyb3ciOjIsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImxhdmFuZGlubyJ9LHsicm93IjozLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzZWRpYSJ9LHsicm93IjozLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ2YXNvX2RpX3BpYW50ZSJ9LHsicm93IjozLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YXZvbG8ifSx7InJvdyI6MywiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidGFwcGV0byJ9LHsicm93IjozLCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YXBwZXRvIn0seyJyb3ciOjQsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjQsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InRhdm9sbyJ9LHsicm93Ijo0LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJsYXZhbmRpbm8ifSx7InJvdyI6NCwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NCwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NCwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NCwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidmFzb19kaV9waWFudGUifSx7InJvdyI6NCwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYWxiZXJvX3VsaXZvIn0seyJyb3ciOjUsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InZhc29fZGlfcGlhbnRlIn0seyJyb3ciOjUsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InRhcHBldG8ifSx7InJvdyI6NSwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NSwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibXVyb19hX3NlY2NvIn0seyJyb3ciOjYsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InNlZGlhIn0seyJyb3ciOjYsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6Im11cm9fYV9zZWNjbyJ9LHsicm93Ijo2LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJhbGJlcm9fdWxpdm8ifSx7InJvdyI6NywiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidGF2b2xvIn0seyJyb3ciOjcsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6Im11cm9fYV9zZWNjbyJ9LHsicm93Ijo3LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJhbGJlcm9fdWxpdm8ifSx7InJvdyI6NywiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibXVyb19hX3NlY2NvIn0seyJyb3ciOjcsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImFsYmVyb191bGl2byJ9LHsicm93Ijo4LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJtdXJvX2Ffc2VjY28ifSx7InJvdyI6OCwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibXVyb19hX3NlY2NvIn0seyJyb3ciOjgsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImFsYmVyb191bGl2byJ9LHsicm93Ijo4LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9XSwid2FsbHMiOlsiOCwyfDgsMyIsIjcsMnw3LDMiLCI2LDJ8NiwzIiwiOCw1fDgsNiIsIjcsNXw3LDYiLCI2LDV8Niw2IiwiNSwzfDYsMyIsIjUsM3w1LDQiLCI1LDR8NSw1IiwiNSw1fDYsNSIsIjQsNXw1LDUiLCI0LDZ8NSw2IiwiNCw3fDUsNyIsIjQsN3w0LDgiLCIzLDh8NCw4IiwiNCwzfDUsMyIsIjQsMnw1LDIiLCI0LDF8NSwxIiwiNCwwfDQsMSIsIjMsMHwzLDEiLCIyLDB8MiwxIiwiMSwxfDIsMSIsIjEsMXwxLDIiLCIwLDJ8MSwyIiwiMCwyfDAsMyIsIjAsNXwwLDYiLCIxLDV8MSw2IiwiMSwyfDEsMyIsIjEsM3wyLDMiLCIxLDR8Miw0IiwiMSw1fDIsNSIsIjEsNnwyLDYiLCIxLDd8Miw3IiwiMSw4fDIsOCIsIjIsNnwyLDciLCIzLDZ8Myw3IiwiNCw2fDQsNyIsIjIsM3wyLDQiLCIzLDN8Myw0IiwiNCwzfDQsNCIsIjQsNHw1LDQiXSwid2luZG93cyI6WyI0LDJ8NSwyIiwiNCw1fDUsNSIsIjMsMHwzLDEiXSwiZG9vcnMiOltdLCJhcmVhTmFtZXMiOnsiMCI6IkdpYXJkaW5vIiwiMSI6IlN1aXRlIDEiLCIyIjoiU3VpdGUgMiIsIjMiOiJDdWNpbmEiLCI0IjoiUmVjZXB0aW9uIiwiNSI6IkJhZ25vIiwiNiI6IkNhbXBhZ25hIiwiNyI6IkVudHJhdGEifSwiYXJlYUZsb29ycyI6eyIwIjp7InR5cGUiOiJwYXR0ZXJuIiwidmFsdWUiOiJwcmF0byJ9LCIzIjp7InR5cGUiOiJjb2xvciIsInZhbHVlIjoiI2UwOGQ3OSJ9LCI2Ijp7InR5cGUiOiJwYXR0ZXJuIiwidmFsdWUiOiJ0ZXJyYSJ9LCI3Ijp7InR5cGUiOiJwYXR0ZXJuIiwidmFsdWUiOiJwYXZpbWVudG8ifX0sImVudGl0aWVzIjpbeyJpZCI6InMwIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiQSIsIm5hbWUiOiJBbWVsaWEiLCJyb3ciOjAsImNvbCI6MSwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6IkYiLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjp0cnVlfSx7ImlkIjoiczEiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJCIiwibmFtZSI6IkJpYWdpbyIsInJvdyI6MSwiY29sIjozLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOnRydWV9LHsiaWQiOiJzMiIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkMiLCJuYW1lIjoiQ29ycmFkbyIsInJvdyI6MywiY29sIjo4LCJpc011cmRlcmVyIjp0cnVlLCJnZW5kZXIiOiJNIiwiaGFzSGF0Ijp0cnVlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InMzIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiRCIsIm5hbWUiOiJEb3JhIiwicm93Ijo0LCJjb2wiOjUsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6dHJ1ZX0seyJpZCI6InM0Iiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiRSIsIm5hbWUiOiJFdHRvcmUiLCJyb3ciOjUsImNvbCI6MiwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOnRydWUsImhhc0dsYXNzZXMiOnRydWV9LHsiaWQiOiJzNSIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkYiLCJuYW1lIjoiRm9zY2EiLCJyb3ciOjYsImNvbCI6MCwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6IkYiLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjp0cnVlfSx7ImlkIjoiczYiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJHIiwibmFtZSI6IkdpdWxpYSIsInJvdyI6NywiY29sIjo2LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiRiIsImhhc0hhdCI6dHJ1ZSwiaGFzR2xhc3NlcyI6dHJ1ZX0seyJpZCI6InM3Iiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiSCIsIm5hbWUiOiJIZWxnYSIsInJvdyI6OCwiY29sIjo0LCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiRiIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOnRydWV9LHsiaWQiOiJ2aWN0aW0iLCJraW5kIjoidmljdGltIiwiaW5pdGlhbCI6IlYiLCJuYW1lIjoiWm9lIiwicm93IjoyLCJjb2wiOjcsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6dHJ1ZX1dLCJzdXNwZWN0Q291bnQiOjgsImNsdWVzIjpbeyJpZCI6ImMxMTcxMCIsInR5cGUiOiJST1dTX09GRlNFVCIsInN1YmplY3RJZCI6InMwIiwic3ViamVjdE5hbWUiOiJBbWVsaWEiLCJmYWN0Ijp7InRhcmdldElkIjoiczQiLCJyb3dzTm9ydGgiOjV9LCJjYXRlZ29yeSI6InJlbGF6aW9uZSIsImRpZmYiOjMsIl9jYW5kIjpudWxsLCJ0YXJnZXRJZCI6InM0Iiwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkFtZWxpYSBzaSB0cm92YSBlc2F0dGFtZW50ZSA1IHJpZ2hlIGEgbm9yZCBkaSBFdHRvcmUuIn0seyJpZCI6ImMxMTk4NCIsInR5cGUiOiJPQkpFQ1RfRElSIiwic3ViamVjdElkIjoiczYiLCJzdWJqZWN0TmFtZSI6IkdpdWxpYSIsImZhY3QiOnsib2JqZWN0S2luZCI6Im11cm9fYV9zZWNjbyIsImRpciI6IlcifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6Mywic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkdpdWxpYSBzaSB0cm92YSBlc2F0dGFtZW50ZSBhIHNpbmlzdHJhIGRpIHVuIE11cm8gYSBzZWNjby4ifSx7ImlkIjoiYzExNjc5IiwidHlwZSI6IklOX0FSRUEiLCJzdWJqZWN0SWQiOiJzMCIsInN1YmplY3ROYW1lIjoiQW1lbGlhIiwiZmFjdCI6eyJhcmVhSWQiOjB9LCJjYXRlZ29yeSI6ImFyZWEiLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiQW1lbGlhIHNpIHRyb3ZhIGluIEdpYXJkaW5vLiJ9LHsiaWQiOiJjMTE3MzMiLCJ0eXBlIjoiQkVTSURFX09CSkVDVCIsInN1YmplY3RJZCI6InMxIiwic3ViamVjdE5hbWUiOiJCaWFnaW8iLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJ0YXZvbG8ifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkJpYWdpbyBzaSB0cm92YSBhY2NhbnRvIGEgdW4gVGF2b2xvLiJ9LHsiaWQiOiJjMTE3ODAiLCJ0eXBlIjoiT05fT0JKRUNUIiwic3ViamVjdElkIjoiczIiLCJzdWJqZWN0TmFtZSI6IkNvcnJhZG8iLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJ0YXBwZXRvIn0sImNhdGVnb3J5Ijoib2dnZXR0byIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJDb3JyYWRvIHNpIHRyb3ZhIHN1IHVuIFRhcHBldG8uIn0seyJpZCI6ImMxMTgzNSIsInR5cGUiOiJGUk9OVF9XSU5ET1ciLCJzdWJqZWN0SWQiOiJzMyIsInN1YmplY3ROYW1lIjoiRG9yYSIsImZhY3QiOnt9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjIsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJEb3JhIHNpIHRyb3ZhIGRpIGZyb250ZSBhIHVuYSBmaW5lc3RyYS4ifSx7ImlkIjoiYzExODg3IiwidHlwZSI6IkJFU0lERV9PQkpFQ1RfT1IiLCJzdWJqZWN0SWQiOiJzNCIsInN1YmplY3ROYW1lIjoiRXR0b3JlIiwiZmFjdCI6eyJvYmoxIjoiYWxiZXJvX3VsaXZvIiwib2JqMiI6InRhdm9sbyJ9LCJjYXRlZ29yeSI6Im9nZ2V0dG8iLCJkaWZmIjozLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiRXR0b3JlIHNpIHRyb3ZhIGFjY2FudG8gYSB1biBBbGJlcm8gdWxpdm8gbyBhIHVuIFRhdm9sby4ifSx7ImlkIjoiYzExOTMxIiwidHlwZSI6Ik9OTFlfT05fT0JKRUNUIiwic3ViamVjdElkIjoiczUiLCJzdWJqZWN0TmFtZSI6IkZvc2NhIiwiZmFjdCI6eyJvYmplY3RLaW5kIjoic2VkaWEifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6Miwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkZvc2NhIMOoIGwndW5pY2EgcGVyc29uYSBzZWR1dGEgc3UgdW5hIHNlZGlhLiJ9LHsiaWQiOiJjMTIwMzciLCJ0eXBlIjoiSU5fQ09MX09SIiwic3ViamVjdElkIjoiczciLCJzdWJqZWN0TmFtZSI6IkhlbGdhIiwiZmFjdCI6eyJjb2wxIjo0LCJjb2wyIjo1fSwiY2F0ZWdvcnkiOiJwb3NpemlvbmUiLCJkaWZmIjoyLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiSGVsZ2Egc2kgdHJvdmEgbmVsbGEgNcKqIG8gbmVsbGEgNsKqIGNvbG9ubmEuIn1dLCJ0aGVtZSI6bnVsbCwibmFycmF0aW9uIjpudWxsLCJuYXJyYXRlZCI6ZmFsc2UsImFpU29sdXRpb24iOm51bGwsImFpVmFsaWRhdGlvbk1zZyI6bnVsbCwiYWlEaWZmaWN1bHR5IjpudWxsLCJhaUh1bWFuRXZhbHVhdGlvbiI6bnVsbH0= -->
