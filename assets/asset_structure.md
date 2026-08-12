# Struttura JSON degli Oggetti

Il file `objects.md` contiene la definizione degli oggetti di gioco strutturata come un array JSON. Ciascun oggetto segue il seguente schema:

```json
{
  "id": "string",          // Identificativo univoco dell'oggetto (es. "autosportiva")
  "label": "string",       // Nome visualizzato dell'oggetto (es. "auto sportiva")
  "article": "string",     // Articolo indeterminativo associato (es. "una" o "un")
  "symbol": "string",      // Simbolo/Sigla breve identificativa (es. "as")
  "walkable": boolean,     // true se i personaggi possono calpestarlo, false altrimenti
  "categories": [          // Categorie/tag di appartenenza dell'oggetto
    "string"
  ],
  "render": {              // Dati relativi alla grafica
    "type": "string",      // Tipo di rendering (es. "svg")
    "scale": number,       // Fattore di scala per il dimensionamento dell'icona (es. 0.8)
    "svgCode": "string"    // Il codice sorgente dell'SVG contenente la grafica vettoriale
  }
}
```
