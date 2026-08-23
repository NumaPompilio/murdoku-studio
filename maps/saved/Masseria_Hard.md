# Configurazione mappa "Masseria 9×9"

Descrizione completa della mappa: stanze (aree), muri, oggetti e personaggi. Coordinate come (riga, colonna) a partire da 1.

Griglia 9×9. Regole: una sola persona per riga e per colonna; "accanto" = celle adiacenti nella stessa area (i muri bloccano); la vittima è sola con l'assassino (nella sua area c'è esattamente un sospetto).

## Stanze / aree

- **A = Giardino** [Stile: color=#395F83] — celle occupabili: (1,1), (1,2), (2,2), (3,1), (4,1), (5,1), (6,1), (6,3), (7,1), (7,2), (7,3), (8,2), (8,3), (9,1), (9,2)
- **B = Suite 1** — celle occupabili: (1,5), (1,6), (2,4), (2,5), (2,6)
- **C = Suite 2** — celle occupabili: (1,7), (1,8), (1,9), (2,7)
- **D = Cucina** [Stile: color=#e08d79] — celle occupabili: (2,3), (3,3), (3,4), (4,2), (4,3), (4,4), (5,3)
- **E = Reception** — celle occupabili: (3,5), (3,6), (3,7), (4,7), (5,5), (5,6), (5,7)
- **F = Bagno** — celle occupabili: (3,8), (4,8), (4,9)
- **G = Campagna** [Stile: color=#8FCED5] — celle occupabili: (5,9), (6,6), (6,7), (6,8), (7,7), (8,7), (8,9), (9,9)
- **H = Entrata** [Stile: color=#949494] — celle occupabili: (6,5), (7,4), (7,5), (7,6), (8,6), (9,5), (9,6)

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

<!-- MURDOKU_STATE_B64: eyJ2ZXJzaW9uIjoxLCJ0aXRsZSI6Ik1hc3NlcmlhIDnDlzkiLCJzaXplIjo5LCJjZWxscyI6W3sicm93IjowLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJhbGJlcm91bGl2byJ9LHsicm93IjowLCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YXZvbG8ifSx7InJvdyI6MCwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibGV0dG8ifSx7InJvdyI6MCwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MCwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibGV0dG8ifSx7InJvdyI6MCwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MCwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYWxiZXJvdWxpdm8ifSx7InJvdyI6MSwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MSwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibGV0dG8ifSx7InJvdyI6MSwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidmFzb2RpcGlhbnRlIn0seyJyb3ciOjEsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InRhdm9sbyJ9LHsicm93IjoyLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoyLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YXZvbG8ifSx7InJvdyI6MiwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2VkaWEifSx7InJvdyI6MiwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidGFwcGV0byJ9LHsicm93IjoyLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YXBwZXRvIn0seyJyb3ciOjIsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InRhcHBldG8ifSx7InJvdyI6MiwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6MiwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibGF2YW5kaW5vIn0seyJyb3ciOjMsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjMsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InNlZGlhIn0seyJyb3ciOjMsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjMsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjMsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InZhc29kaXBpYW50ZSJ9LHsicm93IjozLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YXZvbG8ifSx7InJvdyI6MywiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidGFwcGV0byJ9LHsicm93IjozLCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YXBwZXRvIn0seyJyb3ciOjQsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjQsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InRhdm9sbyJ9LHsicm93Ijo0LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo0LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJsYXZhbmRpbm8ifSx7InJvdyI6NCwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NCwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NCwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NCwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoidmFzb2RpcGlhbnRlIn0seyJyb3ciOjQsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImFsYmVyb3VsaXZvIn0seyJyb3ciOjUsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InZhc29kaXBpYW50ZSJ9LHsicm93Ijo1LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YXBwZXRvIn0seyJyb3ciOjUsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjUsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6Im11cm9hc2VjY28ifSx7InJvdyI6NiwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2VkaWEifSx7InJvdyI6NiwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NiwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibXVyb2FzZWNjbyJ9LHsicm93Ijo2LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJhbGJlcm91bGl2byJ9LHsicm93Ijo3LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ0YXZvbG8ifSx7InJvdyI6NywiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NywiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibXVyb2FzZWNjbyJ9LHsicm93Ijo3LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJhbGJlcm91bGl2byJ9LHsicm93Ijo3LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo3LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo3LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJtdXJvYXNlY2NvIn0seyJyb3ciOjcsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImFsYmVyb3VsaXZvIn0seyJyb3ciOjgsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6Im11cm9hc2VjY28ifSx7InJvdyI6OCwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoibXVyb2FzZWNjbyJ9LHsicm93Ijo4LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJhbGJlcm91bGl2byJ9LHsicm93Ijo4LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9XSwid2FsbHMiOlsiOCwyfDgsMyIsIjcsMnw3LDMiLCI2LDJ8NiwzIiwiOCw1fDgsNiIsIjcsNXw3LDYiLCI2LDV8Niw2IiwiNSwzfDYsMyIsIjUsM3w1LDQiLCI1LDR8NSw1IiwiNSw1fDYsNSIsIjQsNXw1LDUiLCI0LDZ8NSw2IiwiNCw3fDUsNyIsIjQsN3w0LDgiLCIzLDh8NCw4IiwiNCwzfDUsMyIsIjQsMnw1LDIiLCI0LDF8NSwxIiwiNCwwfDQsMSIsIjMsMHwzLDEiLCIyLDB8MiwxIiwiMSwxfDIsMSIsIjEsMXwxLDIiLCIwLDJ8MSwyIiwiMCwyfDAsMyIsIjAsNXwwLDYiLCIxLDV8MSw2IiwiMSwyfDEsMyIsIjEsM3wyLDMiLCIxLDR8Miw0IiwiMSw1fDIsNSIsIjEsNnwyLDYiLCIxLDd8Miw3IiwiMSw4fDIsOCIsIjIsNnwyLDciLCIzLDZ8Myw3IiwiNCw2fDQsNyIsIjIsM3wyLDQiLCIzLDN8Myw0IiwiNCwzfDQsNCIsIjQsNHw1LDQiXSwid2luZG93cyI6WyI0LDJ8NSwyIiwiNCw1fDUsNSIsIjMsMHwzLDEiXSwiZG9vcnMiOltdLCJhcmVhTmFtZXMiOnsiMCI6IkdpYXJkaW5vIiwiMSI6IlN1aXRlIDEiLCIyIjoiU3VpdGUgMiIsIjMiOiJDdWNpbmEiLCI0IjoiUmVjZXB0aW9uIiwiNSI6IkJhZ25vIiwiNiI6IkNhbXBhZ25hIiwiNyI6IkVudHJhdGEifSwiYXJlYUZsb29ycyI6eyIwIjp7InR5cGUiOiJjb2xvciIsInZhbHVlIjoiI0VBRDE3QSJ9LCIzIjp7InR5cGUiOiJjb2xvciIsInZhbHVlIjoiI2UwOGQ3OSJ9LCI2Ijp7InR5cGUiOiJjb2xvciIsInZhbHVlIjoiIzQxODA5OSJ9LCI3Ijp7InR5cGUiOiJjb2xvciIsInZhbHVlIjoiIzM2MUY2MyJ9fSwiZW50aXRpZXMiOlt7ImlkIjoiczAiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJBIiwibmFtZSI6IkFtZWxpYSIsInJvdyI6MCwiY29sIjoxLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiRiIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOnRydWV9LHsiaWQiOiJzMSIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkIiLCJuYW1lIjoiQmlhZ2lvIiwicm93IjoxLCJjb2wiOjMsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJNIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6dHJ1ZX0seyJpZCI6InMyIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiQyIsIm5hbWUiOiJDb3JyYWRvIiwicm93IjozLCJjb2wiOjgsImlzTXVyZGVyZXIiOnRydWUsImdlbmRlciI6Ik0iLCJoYXNIYXQiOnRydWUsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoiczMiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJEIiwibmFtZSI6IkRvcmEiLCJyb3ciOjQsImNvbCI6NSwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6IkYiLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjp0cnVlfSx7ImlkIjoiczQiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJFIiwibmFtZSI6IkV0dG9yZSIsInJvdyI6NSwiY29sIjoyLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImhhc0hhdCI6dHJ1ZSwiaGFzR2xhc3NlcyI6dHJ1ZX0seyJpZCI6InM1Iiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiRiIsIm5hbWUiOiJGb3NjYSIsInJvdyI6NiwiY29sIjowLCJpc011cmRlcmVyIjpmYWxzZSwiZ2VuZGVyIjoiRiIsImhhc0hhdCI6ZmFsc2UsImhhc0dsYXNzZXMiOnRydWV9LHsiaWQiOiJzNiIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkciLCJuYW1lIjoiR2l1bGlhIiwicm93Ijo3LCJjb2wiOjYsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0Ijp0cnVlLCJoYXNHbGFzc2VzIjp0cnVlfSx7ImlkIjoiczciLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJIIiwibmFtZSI6IkhlbGdhIiwicm93Ijo4LCJjb2wiOjQsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6dHJ1ZX0seyJpZCI6InZpY3RpbSIsImtpbmQiOiJ2aWN0aW0iLCJpbml0aWFsIjoiViIsIm5hbWUiOiJab2UiLCJyb3ciOjIsImNvbCI6NywiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6IkYiLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjp0cnVlfV0sInN1c3BlY3RDb3VudCI6OCwiY2x1ZXMiOlt7ImlkIjoiYzExNzEwIiwidHlwZSI6IlJPV1NfT0ZGU0VUIiwic3ViamVjdElkIjoiczAiLCJzdWJqZWN0TmFtZSI6IkFtZWxpYSIsImZhY3QiOnsidGFyZ2V0SWQiOiJzNCIsInJvd3NOb3J0aCI6NX0sImNhdGVnb3J5IjoicmVsYXppb25lIiwiZGlmZiI6MywiX2NhbmQiOm51bGwsInRhcmdldElkIjoiczQiLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiQW1lbGlhIHNpIHRyb3ZhIGVzYXR0YW1lbnRlIDUgcmlnaGUgYSBub3JkIGRpIEV0dG9yZS4ifSx7ImlkIjoiYzExOTg0IiwidHlwZSI6Ik9CSkVDVF9ESVIiLCJzdWJqZWN0SWQiOiJzNiIsInN1YmplY3ROYW1lIjoiR2l1bGlhIiwiZmFjdCI6eyJvYmplY3RLaW5kIjoibXVyb2FzZWNjbyIsImRpciI6IlcifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6Mywic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkdpdWxpYSBzaSB0cm92YSBlc2F0dGFtZW50ZSBhIHNpbmlzdHJhIGRpIHVuIE11cm8gYSBzZWNjby4ifSx7ImlkIjoiYzExNjc5IiwidHlwZSI6IklOX0FSRUEiLCJzdWJqZWN0SWQiOiJzMCIsInN1YmplY3ROYW1lIjoiQW1lbGlhIiwiZmFjdCI6eyJhcmVhSWQiOjB9LCJjYXRlZ29yeSI6ImFyZWEiLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiQW1lbGlhIHNpIHRyb3ZhIGluIEdpYXJkaW5vLiJ9LHsiaWQiOiJjMTE3MzMiLCJ0eXBlIjoiQkVTSURFX09CSkVDVCIsInN1YmplY3RJZCI6InMxIiwic3ViamVjdE5hbWUiOiJCaWFnaW8iLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJ0YXZvbG8ifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkJpYWdpbyBzaSB0cm92YSBhY2NhbnRvIGEgdW4gVGF2b2xvLiJ9LHsiaWQiOiJjMTE3ODAiLCJ0eXBlIjoiT05fT0JKRUNUIiwic3ViamVjdElkIjoiczIiLCJzdWJqZWN0TmFtZSI6IkNvcnJhZG8iLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJ0YXBwZXRvIn0sImNhdGVnb3J5Ijoib2dnZXR0byIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJDb3JyYWRvIHNpIHRyb3ZhIHN1IHVuIFRhcHBldG8uIn0seyJpZCI6ImMxMTgzNSIsInR5cGUiOiJGUk9OVF9XSU5ET1ciLCJzdWJqZWN0SWQiOiJzMyIsInN1YmplY3ROYW1lIjoiRG9yYSIsImZhY3QiOnt9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjIsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJEb3JhIHNpIHRyb3ZhIGRpIGZyb250ZSBhIHVuYSBmaW5lc3RyYS4ifSx7ImlkIjoiYzExODg3IiwidHlwZSI6IkJFU0lERV9PQkpFQ1RfT1IiLCJzdWJqZWN0SWQiOiJzNCIsInN1YmplY3ROYW1lIjoiRXR0b3JlIiwiZmFjdCI6eyJvYmoxIjoiYWxiZXJvX3VsaXZvIiwib2JqMiI6InRhdm9sbyJ9LCJjYXRlZ29yeSI6Im9nZ2V0dG8iLCJkaWZmIjozLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiRXR0b3JlIHNpIHRyb3ZhIGFjY2FudG8gYSB1biBBbGJlcm8gdWxpdm8gbyBhIHVuIFRhdm9sby4ifSx7ImlkIjoiYzExOTMxIiwidHlwZSI6Ik9OTFlfT05fT0JKRUNUIiwic3ViamVjdElkIjoiczUiLCJzdWJqZWN0TmFtZSI6IkZvc2NhIiwiZmFjdCI6eyJvYmplY3RLaW5kIjoic2VkaWEifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6Miwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkZvc2NhIMOoIGwndW5pY2EgcGVyc29uYSBzZWR1dGEgc3UgdW5hIHNlZGlhLiJ9LHsiaWQiOiJjMTIwMzciLCJ0eXBlIjoiSU5fQ09MX09SIiwic3ViamVjdElkIjoiczciLCJzdWJqZWN0TmFtZSI6IkhlbGdhIiwiZmFjdCI6eyJjb2wxIjo0LCJjb2wyIjo1fSwiY2F0ZWdvcnkiOiJwb3NpemlvbmUiLCJkaWZmIjoyLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiSGVsZ2Egc2kgdHJvdmEgbmVsbGEgNcKqIG8gbmVsbGEgNsKqIGNvbG9ubmEuIn1dLCJ0aGVtZSI6bnVsbCwibmFycmF0aW9uIjpudWxsLCJuYXJyYXRlZCI6ZmFsc2UsImFpU29sdXRpb24iOm51bGwsImFpVmFsaWRhdGlvbk1zZyI6bnVsbCwiYWlEaWZmaWN1bHR5IjpudWxsLCJhaUh1bWFuRXZhbHVhdGlvbiI6bnVsbH0= -->
