# Configurazione mappa "Casa della Nonna"

Descrizione completa della mappa: stanze (aree), muri, oggetti e personaggi. Coordinate come (riga, colonna) a partire da 1.

Griglia 9×9. Regole: una sola persona per riga e per colonna; "accanto" = celle adiacenti nella stessa area (i muri bloccano); la vittima è sola con l'assassino (nella sua area c'è esattamente un sospetto).

## Stanze / aree

- **A = Giardino** — celle occupabili: (1,1), (1,3), (2,2), (2,3), (3,1), (3,2), (4,1)
- **B = Cucina** — celle occupabili: (1,4), (1,5), (1,6), (1,7), (1,9), (2,5), (2,6), (2,8), (2,9), (3,3), (3,4), (3,6), (3,7), (3,8), (3,9), (4,2), (4,5), (4,6), (4,7), (4,8), (4,9), (5,1), (5,3), (5,4), (5,5), (5,6), (5,7), (5,8), (6,1), (6,2), (6,3), (6,4), (6,5), (6,7), (7,1), (7,2), (7,3), (7,4), (7,5), (7,6), (8,1), (8,2), (8,3), (8,4), (9,3)
- **C = Cantina** — celle occupabili: (6,8), (6,9), (7,7), (7,8), (7,9), (8,5), (8,6), (8,8), (8,9), (9,4), (9,7), (9,8), (9,9)

**Griglia di aree e muri** — `┃`/`━` = muro tra due celle; `#` = cella bloccata:
```
     1   2   3   4   5   6   7   8   9  
1 |  A   a   A ┃ B   B   B   B   #   B 
  |                                    
2 |  a   A   A ┃ b   B   B   b   B   B 
  |         ━━━                        
3 |  A   A ┃ B   B   #   B   B   B   B 
  |     ━━━                            
4 |  A ┃ B   b   b   B   B   B   B   B 
  | ━━━                             ━━━
5 |  B   b   B   B   B   B   B   B ┃ c 
  |                             ━━━    
6 |  B   B   B   B   B   b   B ┃ C   C 
  |                         ━━━        
7 |  B   B   B   B   B   B ┃ C   C   C 
  |                 ━━━ ━━━            
8 |  B   B   B   B ┃ C   C   c   C   C 
  |             ━━━                    
9 |  #   b   B ┃ C   c   #   C   C   C 
```

## Muri (coppie di celle separate)

- stessa riga: (1,3)|(1,4), (2,3)|(2,4), (3,2)|(3,3), (4,1)|(4,2), (5,8)|(5,9), (6,7)|(6,8), (7,6)|(7,7), (8,4)|(8,5), (9,3)|(9,4)
- stessa colonna: (2,3)|(3,3), (3,2)|(4,2), (4,1)|(5,1), (4,9)|(5,9), (5,8)|(6,8), (6,7)|(7,7), (7,5)|(8,5), (7,6)|(8,6), (8,4)|(9,4)

## Oggetti (elementi)

Minuscolo = calpestabile, MAIUSCOLO = ostacolo, `..` = vuota, `##` = bloccata:
```
     1   2   3   4   5   6   7   8   9  
1 | .. SC3 .. .. .. gi .. ## .. 
2 | CA5 gi .. PE gi .. SC3 .. wa 
3 | .. wa .. .. ## .. .. .. wa 
4 | .. .. BO PE gi gi .. .. .. 
5 | gi BO .. .. gi .. .. wa PE 
6 | gi .. .. .. wa PE .. .. .. 
7 | .. gi wa .. .. .. wa .. .. 
8 | .. .. .. .. .. .. CA5 .. .. 
9 | ## SC3 .. .. SC3 ## .. .. .. 
```

**Legenda oggetti:**
- `SC3` = Scaffale (ostacolo)
- `gi` = Giostra (calpestabile)
- `CA5` = Camion (ostacolo)
- `PE` = Pesce (ostacolo)
- `wa` = Water (calpestabile)
- `BO` = Boa (ostacolo)

**Celle bloccate:** (1,8), (3,5), (9,1), (9,6)

**Oggetti per cella:** (1,2) Scaffale (ostacolo); (1,6) Giostra (calpestabile); (2,1) Camion (ostacolo); (2,2) Giostra (calpestabile); (2,4) Pesce (ostacolo); (2,5) Giostra (calpestabile); (2,7) Scaffale (ostacolo); (2,9) Water (calpestabile); (3,2) Water (calpestabile); (3,9) Water (calpestabile); (4,3) Boa (ostacolo); (4,4) Pesce (ostacolo); (4,5) Giostra (calpestabile); (4,6) Giostra (calpestabile); (5,1) Giostra (calpestabile); (5,2) Boa (ostacolo); (5,5) Giostra (calpestabile); (5,8) Water (calpestabile); (5,9) Pesce (ostacolo); (6,1) Giostra (calpestabile); (6,5) Water (calpestabile); (6,6) Pesce (ostacolo); (7,2) Giostra (calpestabile); (7,3) Water (calpestabile); (7,7) Water (calpestabile); (8,7) Camion (ostacolo); (9,2) Scaffale (ostacolo); (9,5) Scaffale (ostacolo).

## Personaggi

- A = Aldo: (1,1)
- B = Biagio: (2,8)
- C = Corrado: (3,4)
- D = Dora: (4,6)
- E = Enzo: (5,3)
- F = Furio: (6,5)
- G = Gino: (8,2)
- H = Hana: (9,9) — **assassino**
- V = Zoe (vittima): (7,7)

**Assassino: Hana** — unico sospetto nell'area della vittima.

<!-- MURDOKU_STATE_B64: eyJ2ZXJzaW9uIjoxLCJ0aXRsZSI6IkNhc2EgZGVsbGEgTm9ubmEiLCJzaXplIjo5LCJjZWxscyI6W3sicm93IjowLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJzY2FmZmFsZSJ9LHsicm93IjowLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJnaW9zdHJhIn0seyJyb3ciOjAsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjAsImNvbCI6Nywid2Fsa2FibGUiOmZhbHNlLCJvYmplY3QiOm51bGx9LHsicm93IjowLCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJjYW1pb24ifSx7InJvdyI6MSwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiZ2lvc3RyYSJ9LHsicm93IjoxLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoxLCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJwZXNjZSJ9LHsicm93IjoxLCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJnaW9zdHJhIn0seyJyb3ciOjEsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6InNjYWZmYWxlIn0seyJyb3ciOjEsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjEsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6IndhdGVyIn0seyJyb3ciOjIsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6IndhdGVyIn0seyJyb3ciOjIsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjIsImNvbCI6NCwid2Fsa2FibGUiOmZhbHNlLCJvYmplY3QiOm51bGx9LHsicm93IjoyLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoyLCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoyLCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjoyLCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ3YXRlciJ9LHsicm93IjozLCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93IjozLCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJib2EifSx7InJvdyI6MywiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoicGVzY2UifSx7InJvdyI6MywiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiZ2lvc3RyYSJ9LHsicm93IjozLCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJnaW9zdHJhIn0seyJyb3ciOjMsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjMsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjMsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjQsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6Imdpb3N0cmEifSx7InJvdyI6NCwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiYm9hIn0seyJyb3ciOjQsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjQsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjQsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6Imdpb3N0cmEifSx7InJvdyI6NCwiY29sIjo1LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NCwiY29sIjo2LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6NCwiY29sIjo3LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoid2F0ZXIifSx7InJvdyI6NCwiY29sIjo4LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoicGVzY2UifSx7InJvdyI6NSwiY29sIjowLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjoiZ2lvc3RyYSJ9LHsicm93Ijo1LCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjIsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjMsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjQsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJ3YXRlciJ9LHsicm93Ijo1LCJjb2wiOjUsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJwZXNjZSJ9LHsicm93Ijo1LCJjb2wiOjYsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo1LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjAsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo2LCJjb2wiOjEsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOiJnaW9zdHJhIn0seyJyb3ciOjYsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6IndhdGVyIn0seyJyb3ciOjYsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6IndhdGVyIn0seyJyb3ciOjYsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjYsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6MCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6MSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6Miwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6Mywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6NCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6NSwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjcsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6ImNhbWlvbiJ9LHsicm93Ijo3LCJjb2wiOjcsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo3LCJjb2wiOjgsIndhbGthYmxlIjp0cnVlLCJvYmplY3QiOm51bGx9LHsicm93Ijo4LCJjb2wiOjAsIndhbGthYmxlIjpmYWxzZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjoxLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2NhZmZhbGUifSx7InJvdyI6OCwiY29sIjoyLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjozLCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0IjpudWxsfSx7InJvdyI6OCwiY29sIjo0LCJ3YWxrYWJsZSI6dHJ1ZSwib2JqZWN0Ijoic2NhZmZhbGUifSx7InJvdyI6OCwiY29sIjo1LCJ3YWxrYWJsZSI6ZmFsc2UsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Niwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6Nywid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH0seyJyb3ciOjgsImNvbCI6OCwid2Fsa2FibGUiOnRydWUsIm9iamVjdCI6bnVsbH1dLCJ3YWxscyI6WyIwLDJ8MCwzIiwiMSwyfDIsMiIsIjEsMnwxLDMiLCIyLDF8MywxIiwiMiwxfDIsMiIsIjMsMHw0LDAiLCIzLDB8MywxIiwiMyw4fDQsOCIsIjQsN3w1LDciLCI0LDd8NCw4IiwiNSw2fDYsNiIsIjUsNnw1LDciLCI2LDR8Nyw0IiwiNiw1fDcsNSIsIjYsNXw2LDYiLCI3LDN8OCwzIiwiNywzfDcsNCIsIjgsMnw4LDMiXSwid2luZG93cyI6W10sImRvb3JzIjpbXSwiYXJlYU5hbWVzIjp7IjAiOiJHaWFyZGlubyIsIjEiOiJDdWNpbmEiLCIyIjoiQ2FudGluYSJ9LCJhcmVhRmxvb3JzIjp7fSwiZW50aXRpZXMiOlt7ImlkIjoiczAiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJBIiwibmFtZSI6IkFsZG8iLCJyb3ciOjAsImNvbCI6MCwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InMxIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiQiIsIm5hbWUiOiJCaWFnaW8iLCJyb3ciOjEsImNvbCI6NywiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InMyIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiQyIsIm5hbWUiOiJDb3JyYWRvIiwicm93IjoyLCJjb2wiOjMsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJNIiwiaGFzSGF0Ijp0cnVlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InMzIiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiRCIsIm5hbWUiOiJEb3JhIiwicm93IjozLCJjb2wiOjUsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0Ijp0cnVlLCJoYXNHbGFzc2VzIjpmYWxzZX0seyJpZCI6InM0Iiwia2luZCI6InN1c3BlY3QiLCJpbml0aWFsIjoiRSIsIm5hbWUiOiJFbnpvIiwicm93Ijo0LCJjb2wiOjIsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJNIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJzNSIsImtpbmQiOiJzdXNwZWN0IiwiaW5pdGlhbCI6IkYiLCJuYW1lIjoiRnVyaW8iLCJyb3ciOjUsImNvbCI6NCwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOmZhbHNlLCJoYXNHbGFzc2VzIjp0cnVlfSx7ImlkIjoiczYiLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJHIiwibmFtZSI6Ikdpbm8iLCJyb3ciOjcsImNvbCI6MSwiaXNNdXJkZXJlciI6ZmFsc2UsImdlbmRlciI6Ik0iLCJoYXNIYXQiOnRydWUsImhhc0dsYXNzZXMiOmZhbHNlfSx7ImlkIjoiczciLCJraW5kIjoic3VzcGVjdCIsImluaXRpYWwiOiJIIiwibmFtZSI6IkhhbmEiLCJyb3ciOjgsImNvbCI6OCwiaXNNdXJkZXJlciI6dHJ1ZSwiZ2VuZGVyIjoiRiIsImhhc0hhdCI6dHJ1ZSwiaGFzR2xhc3NlcyI6ZmFsc2V9LHsiaWQiOiJ2aWN0aW0iLCJraW5kIjoidmljdGltIiwiaW5pdGlhbCI6IlYiLCJuYW1lIjoiWm9lIiwicm93Ijo2LCJjb2wiOjYsImlzTXVyZGVyZXIiOmZhbHNlLCJnZW5kZXIiOiJGIiwiaGFzSGF0IjpmYWxzZSwiaGFzR2xhc3NlcyI6dHJ1ZX1dLCJzdXNwZWN0Q291bnQiOjgsImNsdWVzIjpbeyJpZCI6ImMxNTI4IiwidHlwZSI6IklOX0NPTCIsInN1YmplY3RJZCI6InMxIiwic3ViamVjdE5hbWUiOiJCaWFnaW8iLCJmYWN0Ijp7ImNvbCI6N30sImNhdGVnb3J5IjoicG9zaXppb25lIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkJpYWdpbyBzaSB0cm92YSBuZWxsYSBjb2xvbm5hIDguIn0seyJpZCI6ImMxNTQ2IiwidHlwZSI6Ik5PVF9DT1JORVIiLCJzdWJqZWN0SWQiOiJzMiIsInN1YmplY3ROYW1lIjoiQ29ycmFkbyIsImZhY3QiOnt9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjIsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJDb3JyYWRvIG5vbiBzaSB0cm92YSBpbiB1biBhbmdvbG8gZGVsbGEgc3VhIGFyZWEuIn0seyJpZCI6ImMxNTkwIiwidHlwZSI6IklOX1JPVyIsInN1YmplY3RJZCI6InM1Iiwic3ViamVjdE5hbWUiOiJGdXJpbyIsImZhY3QiOnsicm93Ijo1fSwiY2F0ZWdvcnkiOiJwb3NpemlvbmUiLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiRnVyaW8gc2kgdHJvdmEgbmVsbGEgcmlnYSA2LiJ9LHsiaWQiOiJjMTYyMyIsInR5cGUiOiJJTl9BUkVBIiwic3ViamVjdElkIjoiczciLCJzdWJqZWN0TmFtZSI6IkhhbmEiLCJmYWN0Ijp7ImFyZWFJZCI6Mn0sImNhdGVnb3J5IjoiYXJlYSIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJIYW5hIHNpIHRyb3ZhIGluIENhbnRpbmEuIn0seyJpZCI6ImMxNTYwIiwidHlwZSI6Ik9OX09CSkVDVCIsInN1YmplY3RJZCI6InMzIiwic3ViamVjdE5hbWUiOiJEb3JhIiwiZmFjdCI6eyJvYmplY3RLaW5kIjoiZ2lvc3RyYSJ9LCJjYXRlZ29yeSI6Im9nZ2V0dG8iLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiRG9yYSBzaSB0cm92YSBzdSB1bmEgR2lvc3RyYS4ifSx7ImlkIjoiYzE1OTMiLCJ0eXBlIjoiT05MWV9PTl9PQkpFQ1QiLCJzdWJqZWN0SWQiOiJzNSIsInN1YmplY3ROYW1lIjoiRnVyaW8iLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJ3YXRlciJ9LCJjYXRlZ29yeSI6Im9nZ2V0dG8iLCJkaWZmIjoyLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiRnVyaW8gw6ggbCd1bmljYSBwZXJzb25hIHN1IHVuIFdhdGVyLiJ9LHsiaWQiOiJjMTU0NSIsInR5cGUiOiJCRVNJREVfT0JKRUNUIiwic3ViamVjdElkIjoiczIiLCJzdWJqZWN0TmFtZSI6IkNvcnJhZG8iLCJmYWN0Ijp7Im9iamVjdEtpbmQiOiJwZXNjZSJ9LCJjYXRlZ29yeSI6Im9nZ2V0dG8iLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiQ29ycmFkbyBzaSB0cm92YSBhY2NhbnRvIGEgdW4gUGVzY2UuIn0seyJpZCI6ImMxNjI4IiwidHlwZSI6IkNPUk5FUiIsInN1YmplY3RJZCI6InM3Iiwic3ViamVjdE5hbWUiOiJIYW5hIiwiZmFjdCI6e30sImNhdGVnb3J5IjoicG9zaXppb25lIiwiZGlmZiI6Miwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6IkhhbmEgc2kgdHJvdmEgaW4gdW4gYW5nb2xvIGRlbGxhIHN1YSBhcmVhLiJ9LHsiaWQiOiJjMTU0MCIsInR5cGUiOiJTQU1FX0FSRUEiLCJzdWJqZWN0SWQiOiJzMSIsInN1YmplY3ROYW1lIjoiQmlhZ2lvIiwiZmFjdCI6eyJ0YXJnZXRJZCI6InM2In0sImNhdGVnb3J5IjoicmVsYXppb25lIiwiZGlmZiI6MiwiX2NhbmQiOm51bGwsInRhcmdldElkIjoiczYiLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiQmlhZ2lvIHNpIHRyb3ZhIG5lbGxhIHN0ZXNzYSBhcmVhIGRpIEdpbm8uIn0seyJpZCI6ImMxNjI0IiwidHlwZSI6IklOX1JPVyIsInN1YmplY3RJZCI6InM3Iiwic3ViamVjdE5hbWUiOiJIYW5hIiwiZmFjdCI6eyJyb3ciOjh9LCJjYXRlZ29yeSI6InBvc2l6aW9uZSIsImRpZmYiOjEsInNjb3BlIjoic3ViamVjdCIsInRleHQiOiJIYW5hIHNpIHRyb3ZhIG5lbGxhIHJpZ2EgOS4ifSx7ImlkIjoiYzE2MTEiLCJ0eXBlIjoiQkVTSURFX09CSkVDVCIsInN1YmplY3RJZCI6InM2Iiwic3ViamVjdE5hbWUiOiJHaW5vIiwiZmFjdCI6eyJvYmplY3RLaW5kIjoic2NhZmZhbGUifSwiY2F0ZWdvcnkiOiJvZ2dldHRvIiwiZGlmZiI6MSwic2NvcGUiOiJzdWJqZWN0IiwidGV4dCI6Ikdpbm8gc2kgdHJvdmEgYWNjYW50byBhIHVuIFNjYWZmYWxlLiJ9LHsiaWQiOiJjMTU3NSIsInR5cGUiOiJJTl9ST1ciLCJzdWJqZWN0SWQiOiJzNCIsInN1YmplY3ROYW1lIjoiRW56byIsImZhY3QiOnsicm93Ijo0fSwiY2F0ZWdvcnkiOiJwb3NpemlvbmUiLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiRW56byBzaSB0cm92YSBuZWxsYSByaWdhIDUuIn0seyJpZCI6ImMxNTIyIiwidHlwZSI6IkJFU0lERV9PQkpFQ1QiLCJzdWJqZWN0SWQiOiJzMCIsInN1YmplY3ROYW1lIjoiQWxkbyIsImZhY3QiOnsib2JqZWN0S2luZCI6ImNhbWlvbiJ9LCJjYXRlZ29yeSI6Im9nZ2V0dG8iLCJkaWZmIjoxLCJzY29wZSI6InN1YmplY3QiLCJ0ZXh0IjoiQWxkbyBzaSB0cm92YSBhY2NhbnRvIGEgdW4gQ2FtaW9uLiJ9XSwidGhlbWUiOm51bGwsIm5hcnJhdGlvbiI6bnVsbCwibmFycmF0ZWQiOmZhbHNlLCJhaVNvbHV0aW9uIjpudWxsLCJhaVZhbGlkYXRpb25Nc2ciOm51bGwsImFpRGlmZmljdWx0eSI6bnVsbCwiYWlIdW1hbkV2YWx1YXRpb24iOm51bGx9 -->