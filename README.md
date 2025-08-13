# Simulatore Token-by-Token di LLM

Questo progetto è un'applicazione web interattiva progettata come strumento didattico per dimostrare i meccanismi di base dei **Large Language Models (LLM)**. L'applicazione è direttamente ispirata al paper accademico *"Interactive Token-by-Token Simulation: A Novel Pedagogical Framework for Understanding Language Model Behavior and Hallucination Phenomena"*.

Lo scopo è quello di rendere tangibili concetti computazionali astratti, permettendo agli utenti di "impersonare" un modello linguistico e di sperimentare in prima persona il processo di generazione del testo, token per token.


---

## ✨ Funzionalità Principali

- **Generazione Interattiva**: L'utente costruisce frasi scegliendo una parola (token) alla volta da una serie di opzioni.
- **Natura Probabilistica**: Ogni opzione di token ha una probabilità associata, che ne visualizza la plausibilità statistica secondo il modello simulato.
- **Processo Irreversibile**: Ogni scelta è definitiva e condiziona le opzioni successive, illustrando la natura autoregressiva degli LLM dove non è possibile "tornare indietro e correggere".
- **Simulazione di Allucinazioni**: Alcuni percorsi a bassa probabilità sono progettati per generare "allucinazioni", ovvero frasi linguisticamente coerenti ma fattualmente errate o senza senso. L'interfaccia evidenzia questi eventi per scopi didattici.
- **Percorsi Multipli e Casuali**: L'applicazione include oltre 20 prompt di partenza che vengono selezionati casualmente a ogni riavvio, garantendo un'esperienza sempre nuova.
- **Statistiche in Tempo Reale**: Vengono mostrati dati come il numero di token generati, la confidenza media delle scelte e una stima dei percorsi alternativi possibili.
- **Modalità Automatica**: Una funzione che esegue la simulazione autonomamente, scegliendo i token in base alla loro probabilità ponderata per mostrare un output tipico del modello.

---

## 🧠 Concetti Didattici Dimostrati

Questo strumento aiuta a superare il "black box problem" nell'educazione sull'IA, rendendo visibili i seguenti concetti chiave:

- **Generazione Sequenziale**: Gli studenti comprendono che il testo viene creato un token dopo l'altro e che ogni nuovo token dipende da tutti quelli che lo precedono.
- **Ragionamento Probabilistico**: L'applicazione rende evidente che gli LLM non "scelgono" una parola, ma calcolano una distribuzione di probabilità su un vocabolario e selezionano da essa.
- **Influenza del Contesto**: Le opzioni disponibili cambiano radicalmente in base alle scelte precedenti, dimostrando come il contesto limiti e guidi la generazione futura.
- **Emergere delle Allucinazioni**: Gli studenti possono osservare come una serie di scelte individualmente plausibili ma a bassa probabilità possa portare a deviazioni significative dalla realtà, generando un'allucinazione.
- **Sviluppo del Pensiero Critico**: L'esperienza diretta con le "allucinazioni" incoraggia gli studenti a valutare criticamente qualsiasi contenuto generato da un'IA.

---

## 🛠️ Stack Tecnologico

Il simulatore è stato volutamente costruito con tecnologie web di base per garantire la massima accessibilità e facilità di implementazione, come suggerito dal paper per l'integrazione in contesti didattici.

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

**Nessuna dipendenza, nessun framework, nessun build tool richiesto.** L'applicazione è completamente auto-contenuta.

---

## 🚀 Installazione e Utilizzo

Non è richiesta alcuna installazione complessa.

**Opzione 1: Esecuzione Locale**
1. Scarica i tre file (`index.html`, `style.css`, `script.js`) in una cartella sul tuo computer.
2. Fai doppio clic sul file `index.html`. Si aprirà nel tuo browser predefinito e sarà immediatamente funzionante.

**Opzione 2: Deploy Online**
1. Carica i tre file (`index.html`, `style.css`, `script.js`) in una directory su un qualsiasi servizio di web hosting (anche il più semplice).
2. Naviga all'URL pubblico del file `index.html` per utilizzare l'applicazione.

---

## 📂 Struttura dei File

```
simulatore-token-by-token/
│
├── index.html      # Struttura della pagina web
├── style.css       # Stili per l'interfaccia grafica
└── script.js       # Tutta la logica, inclusi i percorsi e le frasi
```

---

## 🔧 Personalizzazione

È possibile aggiungere facilmente nuovi scenari o modificare quelli esistenti. Tutta la logica dei percorsi si trova nel file `script.js`.

1.  **Aggiungere un Nuovo Prompt**: Aggiungi un nuovo oggetto all'array `starters` con una `key` unica e una `description`.
    ```javascript
    const starters = [
        // ... altri prompt
        { key: "start_nuovo_tema", description: "Descrizione del Nuovo Tema" }
    ];
    ```
2.  **Definire il Nuovo Percorso**: Aggiungi le voci corrispondenti nell'oggetto `scenarios`, partendo dalla `key` definita sopra. Assicurati che la somma delle probabilità (`prob`) per ogni passaggio sia `1.0`.
    ```javascript
    const scenarios = {
        // ... altri scenari
        "start_nuovo_tema": [
            { token: "La prima parola", nextContext: "nuovo_tema_1", prob: 0.8 },
            { token: "Un'alternativa", nextContext: "end", prob: 0.2 }
        ],
        "nuovo_tema_1": [
            // ... opzioni successive
        ]
    };
    ```

Questa struttura modulare è in linea con le linee guida di personalizzazione descritte nel documento di riferimento.