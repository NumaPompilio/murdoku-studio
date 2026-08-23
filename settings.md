# Murdoku Studio – Impostazioni Generali

Questo file raccoglie i parametri di configurazione globale dell'applicazione **Murdoku Studio**.  
Le impostazioni qui definite vengono lette a runtime dal codice e ne guidano il comportamento in modo centralizzato.

---

## Manutenzione

### `maintenanceMode`

| Proprietà   | Valore        |
|-------------|---------------|
| **Tipo**    | `boolean`     |
| **Default** | `false`       |
| **Scope**   | PLAYER MODE   |

**Descrizione:**  
Quando impostato a `true`, all'apertura del **PLAYER in modalità PLAYER MODE** (URL con parametro `?mode=player`) viene mostrata una **pagina bloccante di manutenzione** che impedisce l'accesso all'interfaccia di gioco.

- In modalità normale (Editor o Player interno all'applicazione), questa impostazione non ha alcun effetto.
- La pagina di manutenzione è fullscreen, non bypassabile dall'utente, e deve comunicare che il servizio è temporaneamente non disponibile.

**Valore attuale:**

\`\`\`
maintenanceMode = false
\`\`\`

---

## Aggiornamento

Per aggiungere un nuovo parametro, seguire il formato:

1. Inserire il parametro sotto la sezione tematica appropriata (o crearne una nuova).
2. Documentare **tipo**, **default**, **scope** e una descrizione chiara del comportamento.
3. Aggiornare la logica nel file \`murdoku-studio.html\` per leggere e applicare il parametro.
