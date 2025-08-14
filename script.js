document.addEventListener('DOMContentLoaded', () => {

    // --- DATABASE DEGLI SCENARI ---
    const starters = [
        { key: "start_ai", description: "Intelligenza Artificiale" },
        { key: "start_ml", description: "Machine Learning" },
        { key: "start_blockchain", description: "Blockchain" },
        { key: "start_quantum", description: "Quantum Computing" },
        { key: "start_dna", description: "Biologia e DNA" },
        { key: "start_water", description: "Chimica dell'Acqua" },
        { key: "start_blackhole", description: "Astrofisica dei Buchi Neri" },
        { key: "start_relativity", description: "Teoria della Relatività" },
        { key: "start_rome", description: "Storia dell'Impero Romano" },
        { key: "start_leonardo", description: "Leonardo da Vinci" },
        { key: "start_renaissance", description: "Il Rinascimento" },
        { key: "start_columbus", description: "La scoperta dell'America" },
        { key: "start_creativity", description: "La Creatività" },
        { key: "start_music", description: "Musica Classica" },
        { key: "start_travel", description: "Viaggiare" },
        { key: "start_python", description: "Linguaggio Python" },
        { key: "start_web", description: "Sviluppo Web" },
        { key: "start_cyber", description: "Cybersecurity" },
        { key: "start_photosynthesis", description: "Fotosintesi" },
        { key: "start_volcano", description: "Vulcanologia" },
        { key: "start_medicine", description: "Medicina e Salute" },
        { key: "start_climate", description: "Cambiamenti Climatici" },
        { key: "start_psychology", description: "Psicologia" },
        { key: "start_economy", description: "Economia" },
        { key: "start_philosophy", description: "Filosofia" },
    ];

    // OGGETTO COMPLETO DI TUTTI I 20 PERCORSI
    const scenarios = {
        // 1. AI
        "start_ai": [{ token: "L'intelligenza", nextContext: "ai_1", prob: 0.6 }, { token: "Un", nextContext: "ai_2", prob: 0.25 }, { token: "La", nextContext: "cyb_1", prob: 0.1 }, { token: "I", nextContext: "ai_robot_path", prob: 0.05 }],
        "ai_1": [{ token: "artificiale", nextContext: "ai_3", prob: 0.8 }, { token: "emotiva", nextContext: "end", prob: 0.1 }, { token: "collettiva", nextContext: "end", prob: 0.05 }, { token: "umana", nextContext: "end", prob: 0.05 }],
        "ai_2": [{ token: "modello", nextContext: "ai_4", prob: 0.7 }, { token: "computer", nextContext: "end", prob: 0.15 }, { token: "algoritmo", nextContext: "ai_algo_path", prob: 0.1 }, { token: "robot", nextContext: "ai_robot_path", prob: 0.05 }],
        "ai_robot_path": [{ token: "robot", nextContext: "end", prob: 1.0 }], "ai_algo_path": [{ token: "serve", nextContext: "end", prob: 1.0 }],
        "ai_3": [{ token: "è", nextContext: "ai_5", prob: 0.6 }, { token: "può", nextContext: "ai_can_do", prob: 0.2 }, { token: "sembra", nextContext: "ai_seems_like", prob: 0.15 }, { token: "mangia", nextContext: "end", prob: 0.05, isHallucination: true }],
        "ai_can_do": [{ token: "imparare", nextContext: "end", prob: 1.0 }], "ai_seems_like": [{ token: "magia", nextContext: "end", prob: 1.0 }],
        "ai_4": [{ token: "linguistico", nextContext: "ai_6", prob: 0.85 }, { token: "matematico", nextContext: "end", prob: 0.1 }, { token: "predittivo", nextContext: "end", prob: 0.05 }],
        "ai_5": [{ token: "una", nextContext: "ai_7", prob: 0.5 }, { token: "un", nextContext: "ai_8", prob: 0.3 }, { token: "spesso", nextContext: "end", prob: 0.1 }, { token: "anche", nextContext: "end", prob: 0.1 }],
        "ai_6": [{ token: "genera", nextContext: "ai_9", prob: 0.6 }, { token: "sente", nextContext: "end", prob: 0.1, isHallucination: true }, { token: "prevede", nextContext: "ai_9", prob: 0.25 }, { token: "calcola", nextContext: "ai_9", prob: 0.05 }],
        "ai_7": [{ token: "disciplina", nextContext: "end", prob: 0.4 }, { token: "tecnologia", nextContext: "end", prob: 0.3 }, { token: "persona", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "forza", nextContext: "end", prob: 0.25 }],
        "ai_8": [{ token: "campo", nextContext: "end", prob: 0.7 }, { token: "sogno", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "strumento", nextContext: "end", prob: 0.2 }, { token: "concetto", nextContext: "end", prob: 0.05 }],
        "ai_9": [{ token: "testo", nextContext: "end", prob: 0.7 }, { token: "elettricità", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "numeri", nextContext: "end", prob: 0.15 }, { token: "risposte", nextContext: "end", prob: 0.1 }],
        
        // 2. ML
        "start_ml": [{ token: "Il", nextContext: "ml_1", prob: 0.8 }, { token: "Machine", nextContext: "ml_2", prob: 0.2 }],
        "ml_1": [{ token: "machine", nextContext: "ml_2", prob: 0.8 }, { token: "gatto", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "computer", nextContext: "end", prob: 0.1 }, { token: "processo", nextContext: "end", prob: 0.05 }],
        "ml_2": [{ token: "learning", nextContext: "ml_3", prob: 1.0 }],
        "ml_3": [{ token: "è", nextContext: "ml_4", prob: 0.7 }, { token: "utilizza", nextContext: "ml_uses", prob: 0.2 }, { token: "rappresenta", nextContext: "ml_4", prob: 0.1 }],
        "ml_uses": [{ token: "dati", nextContext: "end", prob: 0.8 }, {token: "algoritmi", nextContext: "end", prob: 0.2}],
        "ml_4": [{ token: "una", nextContext: "ml_5", prob: 0.6 }, { token: "un", nextContext: "ml_6", prob: 0.25 }, { token: "come", nextContext: "end", prob: 0.1 }, { token: "sempre", nextContext: "end", prob: 0.05 }],
        "ml_5": [{ token: "branca", nextContext: "ml_7", prob: 0.8 }, { token: "tecnica", nextContext: "end", prob: 0.15 }, { token: "scatola", nextContext: "end", prob: 0.05, isHallucination: true }],
        "ml_6": [{ token: "sottoinsieme", nextContext: "ml_7", prob: 0.75 }, { token: "approccio", nextContext: "end", prob: 0.25 }],
        "ml_7": [{ token: "dell'IA", nextContext: "end", prob: 0.8 }, { token: "della", nextContext: "ml_8", prob: 0.1 }, { token: "che", nextContext: "end", prob: 0.05 }, { token: "per", nextContext: "end", prob: 0.05 }],
        "ml_8": [{ token: "cucina", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "statistica", nextContext: "end", prob: 0.8 }, { token: "scienza", nextContext: "end", prob: 0.15 }],

        // 3. Blockchain
        "start_blockchain": [{ token: "La", nextContext: "bc_1", prob: 0.9 }, { token: "Una", nextContext: "bc_1", prob: 0.1 }],
        "bc_1": [{ token: "blockchain", nextContext: "bc_2", prob: 0.85 }, { token: "panna", nextContext: "end", prob: 0.02, isHallucination: true }, { token: "tecnologia", nextContext: "bc_2", prob: 0.1 }, { token: "catena", nextContext: "end", prob: 0.03 }],
        "bc_2": [{ token: "è", nextContext: "bc_3", prob: 0.9 }, { token: "funziona", nextContext: "end", prob: 0.1 }],
        "bc_3": [{ token: "un", nextContext: "bc_4", prob: 0.6 }, { token: "una", nextContext: "bc_3_una", prob: 0.4 }],
        "bc_3_una": [{ token: "tecnologia", nextContext: "end", prob: 0.7 }, { token: "struttura", nextContext: "end", prob: 0.3 }],
        "bc_4": [{ token: "registro", nextContext: "bc_5", prob: 0.7 }, { token: "tipo", nextContext: "bc_6", prob: 0.15 }, { token: "database", nextContext: "bc_5", prob: 0.1 }, { token: "libro", nextContext: "bc_5", prob: 0.05 }],
        "bc_5": [{ token: "distribuito", nextContext: "end", prob: 0.6 }, { token: "immutabile", nextContext: "end", prob: 0.2 }, { token: "digitale", nextContext: "end", prob: 0.15 }, { token: "molto", nextContext: "end", prob: 0.05 }],
        "bc_6": [{ token: "di", nextContext: "bc_7", prob: 0.9 }, { token: "particolare", nextContext: "end", prob: 0.1 }],
        "bc_7": [{ token: "database", nextContext: "end", prob: 0.7 }, { token: "magia", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "sicurezza", nextContext: "end", prob: 0.15 }, { token: "archiviazione", nextContext: "end", prob: 0.1 }],

        // 4. Quantum Computing
        "start_quantum": [{ token: "Il", nextContext: "qc_1", prob: 0.8 }, { token: "Il", nextContext: "qc_1", prob: 0.2 }],
        "qc_1": [{ token: "quantum", nextContext: "qc_2", prob: 0.9 }, { token: "salto", nextContext: "end", prob: 0.1 }],
        "qc_2": [{ token: "computing", nextContext: "qc_3", prob: 1.0 }],
        "qc_3": [{ token: "sfrutta", nextContext: "qc_4", prob: 0.7 }, { token: "è", nextContext: "qc_is", prob: 0.3 }],
        "qc_is": [{ token: "una", nextContext: "end", prob: 1.0 }],
        "qc_4": [{ token: "i", nextContext: "qc_5", prob: 0.5 }, { token: "la", nextContext: "qc_6", prob: 0.3 }, { token: "le", nextContext: "qc_laws", prob: 0.2 }],
        "qc_laws": [{token: "leggi", nextContext: "end", prob: 1.0}],
        "qc_5": [{ token: "qubit", nextContext: "end", prob: 0.8 }, { token: "gatti", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "principi", nextContext: "qc_laws", prob: 0.15 }],
        "qc_6": [{ token: "sovrapposizione", nextContext: "end", prob: 0.6 }, { token: "meccanica", nextContext: "qc_laws", prob: 0.4 }],

        // 5. DNA
        "start_dna": [{ token: "Il", nextContext: "dna_1", prob: 0.8 }, { token: "Nel", nextContext: "dna_1", prob: 0.1 }, { token: "L'", nextContext: "dna_acid", prob: 0.1 }],
        "dna_acid": [{ token: "acido", nextContext: "end", prob: 1.0 }],
        "dna_1": [{ token: "DNA", nextContext: "dna_2", prob: 0.85 }, { token: "Dottore", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "codice", nextContext: "dna_2", prob: 0.1 }],
        "dna_2": [{ token: "contiene", nextContext: "dna_3", prob: 0.6 }, { token: "è", nextContext: "dna_is", prob: 0.3 }, { token: "codifica", nextContext: "dna_3", prob: 0.1 }],
        "dna_is": [{ token: "una", nextContext: "dna_is_a", prob: 1.0 }],
        "dna_is_a": [{ token: "molecola", nextContext: "end", prob: 0.8 }, { token: "doppia", nextContext: "end", prob: 0.2 }],
        "dna_3": [{ token: "le", nextContext: "dna_4", prob: 0.7 }, { token: "i", nextContext: "dna_5", prob: 0.15 }, { token: "tutte", nextContext: "dna_4", prob: 0.1 }, { token: "le", nextContext: "dna_4", prob: 0.05 }],
        "dna_4": [{ token: "informazioni", nextContext: "dna_6", prob: 0.9 }, { token: "istruzioni", nextContext: "dna_6", prob: 0.1 }],
        "dna_5": [{ token: "segreti", nextContext: "dna_7", prob: 0.15, isHallucination: true }, { token: "geni", nextContext: "end", prob: 0.7 }, { token: "cromosomi", nextContext: "end", prob: 0.15 }],
        "dna_6": [{ token: "genetiche", nextContext: "end", prob: 0.8 }, { token: "per", nextContext: "end", prob: 0.1 }, { token: "ereditarie", nextContext: "end", prob: 0.05 }, { token: "biologiche", nextContext: "end", prob: 0.05 }],
        "dna_7": [{ token: "dell'universo", nextContext: "end", prob: 0.2, isHallucination: true }, { token: "della", nextContext: "dna_of", prob: 0.8 }],
        "dna_of": [{ token: "vita", nextContext: "end", prob: 1.0 }],
        
        // 6. Acqua
        "start_water": [{ token: "L'acqua", nextContext: "h2o_1", prob: 0.8 }, { token: "La", nextContext: "h2o_formula", prob: 0.2 }],
        "h2o_formula": [{token: "formula", nextContext: "end", prob: 1.0}],
        "h2o_1": [{ token: "è", nextContext: "h2o_2", prob: 0.9 }, { token: "bolle", nextContext: "end", prob: 0.1 }],
        "h2o_2": [{ token: "composta", nextContext: "h2o_3", prob: 0.7 }, { token: "un", nextContext: "h2o_4", prob: 0.15 }, { token: "essenziale", nextContext: "end", prob: 0.1 }, { token: "insapore", nextContext: "end", prob: 0.05 }],
        "h2o_3": [{ token: "da", nextContext: "h2o_5", prob: 1.0 }],
        "h2o_4": [{ token: "elemento", nextContext: "end", prob: 0.1, isHallucination: true }, { token: "composto", nextContext: "end", prob: 0.9 }],
        "h2o_5": [{ token: "idrogeno", nextContext: "h2o_6", prob: 0.6 }, { token: "fuoco", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "due", nextContext: "end", prob: 0.2 }, { token: "atomi", nextContext: "end", prob: 0.15 }],
        "h2o_6": [{ token: "e", nextContext: "h2o_7", prob: 1.0 }],
        "h2o_7": [{ token: "ossigeno", nextContext: "end", prob: 0.9 }, { token: "azoto", nextContext: "end", prob: 0.1 }],
        
        // 7. Buchi Neri
        "start_blackhole": [{ token: "Un", nextContext: "bh_1", prob: 0.9 }, { token: "I", nextContext: "bh_plural", prob: 0.1 }],
        "bh_plural": [{token: "buchi", nextContext: "bh_2", prob: 1.0}],
        "bh_1": [{ token: "buco", nextContext: "bh_2", prob: 0.9 }, { token: "ponte", nextContext: "end", prob: 0.05 }, { token: "varco", nextContext: "end", prob: 0.05 }],
        "bh_2": [{ token: "nero", nextContext: "bh_3", prob: 1.0 }],
        "bh_3": [{ token: "ha", nextContext: "bh_4", prob: 0.5 }, { token: "è", nextContext: "bh_5", prob: 0.3 }, { token: "assorbe", nextContext: "end", prob: 0.1 }, { token: "nasce", nextContext: "end", prob: 0.1 }],
        "bh_4": [{ token: "una", nextContext: "bh_6", prob: 1.0 }],
        "bh_5": [{ token: "un", nextContext: "bh_7", prob: 0.8 }, { token: "una", nextContext: "bh_singularity", prob: 0.2 }],
        "bh_singularity": [{token: "singolarità", nextContext: "end", prob: 1.0}],
        "bh_6": [{ token: "gravità", nextContext: "bh_8", prob: 0.9 }, { token: "massa", nextContext: "end", prob: 0.1 }],
        "bh_7": [{ token: "portale", nextContext: "end", prob: 0.1, isHallucination: true }, { token: "oggetto", nextContext: "end", prob: 0.5 }, { token: "corpo", nextContext: "end", prob: 0.4 }],
        "bh_8": [{ token: "così", nextContext: "bh_9", prob: 1.0 }],
        "bh_9": [{ token: "forte", nextContext: "bh_10", prob: 0.8 }, { token: "intensa", nextContext: "bh_10", prob: 0.2 }],
        "bh_10": [{ token: "che", nextContext: "bh_11", prob: 1.0 }],
        "bh_11": [{ token: "nulla", nextContext: "bh_12", prob: 0.7 }, { token: "nemmeno", nextContext: "end", prob: 0.2 }, { token: "tutto", nextContext: "end", prob: 0.05 }, { token: "la", nextContext: "end", prob: 0.05 }],
        "bh_12": [{ token: "può", nextContext: "bh_13", prob: 1.0 }],
        "bh_13": [{ token: "sfuggire", nextContext: "end", prob: 0.9 }, { token: "entrare", nextContext: "end", prob: 0.1 }],

        // 8. Relatività
        "start_relativity": [{ token: "La", nextContext: "rel_1", prob: 1.0 }],
        "rel_1": [{ token: "teoria", nextContext: "rel_2", prob: 0.9 }, { token: "legge", nextContext: "rel_2", prob: 0.1 }],
        "rel_2": [{ token: "della", nextContext: "rel_3", prob: 1.0 }],
        "rel_3": [{ token: "relatività", nextContext: "rel_4", prob: 0.85 }, { token: "pizza", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "gravitazione", nextContext: "end", prob: 0.1 }],
        "rel_4": [{ token: "fu", nextContext: "rel_5", prob: 0.8 }, { token: "è", nextContext: "end", prob: 0.2 }],
        "rel_5": [{ token: "formulata", nextContext: "rel_6", prob: 0.7 }, { token: "sviluppata", nextContext: "rel_6", prob: 0.2 }, { token: "inventata", nextContext: "rel_6", prob: 0.1 }],
        "rel_6": [{ token: "da", nextContext: "rel_7", prob: 1.0 }],
        "rel_7": [{ token: "Albert", nextContext: "rel_8", prob: 0.9 }, { token: "Piero", nextContext: "rel_9", prob: 0.05 }, { token: "Isaac", nextContext: "end", prob: 0.05 }],
        "rel_8": [{ token: "Einstein", nextContext: "end", prob: 1.0 }],
        "rel_9": [{ token: "Angela", nextContext: "end", prob: 1.0, isHallucination: true }],

        // 9. Impero Romano
        "start_rome": [{ token: "L'Impero", nextContext: "rome_1", prob: 0.7 }, { token: "La", nextContext: "rome_republic", prob: 0.2 }, { token: "Roma", nextContext: "rome_city", prob: 0.1 }],
        "rome_republic": [{ token: "repubblica", nextContext: "end", prob: 1.0 }], "rome_city": [{ token: "antica", nextContext: "end", prob: 1.0 }],
        "rome_1": [{ token: "Romano", nextContext: "rome_2", prob: 0.9 }, { token: "dei", nextContext: "end", prob: 0.05 }, { token: "d'Occidente", nextContext: "end", prob: 0.05 }],
        "rome_2": [{ token: "fu", nextContext: "rome_3", prob: 0.6 }, { token: "ha", nextContext: "rome_had", prob: 0.2 }, { token: "rappresenta", nextContext: "rome_3", prob: 0.1 }, { token: "dura", nextContext: "end", prob: 0.1 }],
        "rome_had": [{ token: "una", nextContext: "end", prob: 1.0 }],
        "rome_3": [{ token: "uno", nextContext: "rome_4", prob: 0.7 }, { token: "una", nextContext: "rome_5", prob: 0.2 }, { token: "un", nextContext: "rome_4", prob: 0.1 }],
        "rome_4": [{ token: "dei", nextContext: "rome_6", prob: 0.8 }, { token: "più", nextContext: "rome_7", prob: 0.2 }],
        "rome_5": [{ token: "repubblica", nextContext: "end", prob: 0.1, isHallucination: true }, { token: "potenza", nextContext: "end", prob: 0.6 }, { token: "civiltà", nextContext: "end", prob: 0.3 }],
        "rome_6": [{ token: "più", nextContext: "rome_7", prob: 0.9 }, { token: "grandi", nextContext: "rome_8", prob: 0.1 }],
        "rome_7": [{ token: "grandi", nextContext: "rome_8", prob: 0.7 }, { token: "importanti", nextContext: "rome_8", prob: 0.2 }, { token: "longevi", nextContext: "rome_8", prob: 0.1 }],
        "rome_8": [{ token: "imperi", nextContext: "end", prob: 0.8 }, { token: "ristoranti", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "stati", nextContext: "end", prob: 0.1 }, { token: "regni", nextContext: "end", prob: 0.05 }],

        // 10. Leonardo
        "start_leonardo": [{ token: "Leonardo", nextContext: "leo_1", prob: 0.9 }, { token: "Il", nextContext: "end", prob: 0.1 }],
        "leo_1": [{ token: "da", nextContext: "leo_2", prob: 1.0 }],
        "leo_2": [{ token: "Vinci", nextContext: "leo_3", prob: 1.0 }],
        "leo_3": [{ token: "era", nextContext: "leo_4", prob: 0.8 }, { token: "fu", nextContext: "leo_4", prob: 0.2 }],
        "leo_4": [{ token: "un", nextContext: "leo_5", prob: 0.9 }, { token: "il", nextContext: "end", prob: 0.1 }],
        "leo_5": [{ token: "artista", nextContext: "leo_6", prob: 0.4 }, { token: "scienziato", nextContext: "leo_6", prob: 0.3 }, { token: "inventore", nextContext: "leo_6", prob: 0.2 }, { token: "astronauta", nextContext: "end", prob: 0.1, isHallucination: true }],
        "leo_6": [{ token: "e", nextContext: "leo_7", prob: 0.8 }, { token: "del", nextContext: "end", prob: 0.2 }],
        "leo_7": [{ token: "inventore", nextContext: "end", prob: 0.4 }, { token: "pittore", nextContext: "end", prob: 0.3 }, { token: "ingegnere", nextContext: "end", prob: 0.2 }, { token: "musicista", nextContext: "end", prob: 0.1, isHallucination: true }],

        // 11. Rinascimento
        "start_renaissance": [{ token: "Il", nextContext: "ren_1", prob: 1.0 }],
        "ren_1": [{ token: "Rinascimento", nextContext: "ren_2", prob: 0.9 }, { token: "Medioevo", nextContext: "end", prob: 0.1 }],
        "ren_2": [{ token: "fu", nextContext: "ren_3", prob: 0.7 }, { token: "è", nextContext: "ren_3", prob: 0.3 }],
        "ren_3": [{ token: "un", nextContext: "ren_4", prob: 0.9 }, { token: "una", nextContext: "end", prob: 0.1 }],
        "ren_4": [{ token: "periodo", nextContext: "ren_5", prob: 0.8 }, { token: "concerto", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "movimento", nextContext: "ren_5", prob: 0.15 }],
        "ren_5": [{ token: "di", nextContext: "ren_6", prob: 1.0 }],
        "ren_6": [{ token: "grande", nextContext: "ren_7", prob: 0.6 }, { token: "rinnovamento", nextContext: "ren_8", prob: 0.2 }, { token: "cambiamento", nextContext: "ren_8", prob: 0.2 }],
        "ren_7": [{ token: "fermento", nextContext: "ren_8", prob: 0.8 }, { token: "interesse", nextContext: "end", prob: 0.2 }],
        "ren_8": [{ token: "culturale", nextContext: "end", prob: 0.7 }, { token: "artistico", nextContext: "end", prob: 0.2 }, { token: "tecnologico", nextContext: "end", prob: 0.1, isHallucination: true }],

        // 12. Colombo
        "start_columbus": [{ token: "La", nextContext: "col_1", prob: 0.8 }, { token: "Cristoforo", nextContext: "col_name", prob: 0.2 }],
        "col_name": [{token: "Colombo", nextContext: "end", prob: 1.0}],
        "col_1": [{ token: "scoperta", nextContext: "col_2", prob: 0.9 }, { token: "conquista", nextContext: "end", prob: 0.1 }],
        "col_2": [{ token: "dell'America", nextContext: "col_3", prob: 0.8 }, { token: "del", nextContext: "col_4", prob: 0.1 }, { token: "delle", nextContext: "end", prob: 0.1 }],
        "col_3": [{ token: "avvenne", nextContext: "col_5", prob: 0.7 }, { token: "è", nextContext: "end", prob: 0.2 }, { token: "fu", nextContext: "end", prob: 0.1 }],
        "col_4": [{ token: "fuoco", nextContext: "end", prob: 0.1, isHallucination: true }, { token: "Nuovo", nextContext: "end", prob: 0.9 }],
        "col_5": [{ token: "nel", nextContext: "col_6", prob: 1.0 }],
        "col_6": [{ token: "1492", nextContext: "end", prob: 0.85 }, { token: "2012", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "1498", nextContext: "end", prob: 0.05 }, { token: "1502", nextContext: "end", prob: 0.05 }],

        // 13. Creatività
        "start_creativity": [{ token: "La", nextContext: "crea_1", prob: 0.9 }, { token: "L'atto", nextContext: "end", prob: 0.1 }],
        "crea_1": [{ token: "creatività", nextContext: "crea_2", prob: 1.0 }],
        "crea_2": [{ token: "è", nextContext: "crea_3", prob: 0.8 }, { token: "nasce", nextContext: "end", prob: 0.1 }, { token: "aiuta", nextContext: "end", prob: 0.1 }],
        "crea_3": [{ token: "la", nextContext: "crea_4", prob: 0.6 }, { token: "un", nextContext: "crea_5", prob: 0.2 }, { token: "una", nextContext: "crea_4", prob: 0.15 }, { token: "il", nextContext: "end", prob: 0.05 }],
        "crea_4": [{ token: "capacità", nextContext: "crea_6", prob: 0.7 }, { token: "forma", nextContext: "end", prob: 0.2 }, { token: "magia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "crea_5": [{ token: "muscolo", nextContext: "crea_7", prob: 0.3, isHallucination: true }, { token: "processo", nextContext: "end", prob: 0.6 }, { token: "dono", nextContext: "end", prob: 0.1 }],
        "crea_6": [{ token: "di", nextContext: "crea_8", prob: 1.0 }],
        "crea_7": [{ token: "da", nextContext: "crea_9", prob: 1.0 }],
        "crea_8": [{ token: "creare", nextContext: "end", prob: 0.5 }, { token: "vedere", nextContext: "end", prob: 0.2 }, { token: "associare", nextContext: "end", prob: 0.2 }, { token: "immaginare", nextContext: "end", prob: 0.1 }],
        "crea_9": [{ token: "allenare", nextContext: "end", prob: 0.9 }, { token: "mangiare", nextContext: "end", prob: 0.1, isHallucination: true }],

        // 14. Musica
        "start_music": [{ token: "La", nextContext: "mus_1", prob: 1.0 }],
        "mus_1": [{ token: "musica", nextContext: "mus_2", prob: 1.0 }],
        "mus_2": [{ token: "classica", nextContext: "mus_3", prob: 0.4 }, { token: "pop", nextContext: "end", prob: 0.2 }, { token: "rock", nextContext: "end", prob: 0.2 }, { token: "è", nextContext: "end", prob: 0.2 }],
        "mus_3": [{ token: "include", nextContext: "mus_4", prob: 0.7 }, { token: "è", nextContext: "end", prob: 0.3 }],
        "mus_4": [{ token: "compositori", nextContext: "mus_5", prob: 0.8 }, { token: "artisti", nextContext: "mus_5", prob: 0.2 }],
        "mus_5": [{ token: "come", nextContext: "mus_6", prob: 1.0 }],
        "mus_6": [{ token: "Mozart", nextContext: "mus_7", prob: 0.4 }, { token: "Beethoven", nextContext: "mus_7", prob: 0.3 }, { token: "Elvis", nextContext: "end", prob: 0.1, isHallucination: true }, { token: "Bach", nextContext: "mus_7", prob: 0.2 }],
        "mus_7": [{ token: "e", nextContext: "mus_8", prob: 0.8 }, { token: ",", nextContext: "mus_6", prob: 0.2 }],
        "mus_8": [{ token: "Bach", nextContext: "end", prob: 0.4 }, { token: "Vivaldi", nextContext: "end", prob: 0.3 }, { token: "Chopin", nextContext: "end", prob: 0.3 }],

        // 15. Viaggiare
        "start_travel": [{ token: "Viaggiare", nextContext: "trav_1", prob: 0.8 }, { token: "Il", nextContext: "end", prob: 0.2 }],
        "trav_1": [{ token: "apre", nextContext: "trav_2", prob: 0.5 }, { token: "costa", nextContext: "end", prob: 0.1 }, { token: "insegna", nextContext: "end", prob: 0.2 }, { token: "è", nextContext: "end", prob: 0.2 }],
        "trav_2": [{ token: "la", nextContext: "trav_3", prob: 0.8 }, { token: "gli", nextContext: "end", prob: 0.2 }],
        "trav_3": [{ token: "mente", nextContext: "end", prob: 0.7 }, { token: "porta", nextContext: "end", prob: 0.1, isHallucination: true }, { token: "conoscenza", nextContext: "end", prob: 0.1 }, { token: "valigia", nextContext: "end", prob: 0.1, isHallucination: true }],

        // 16. Python
        "start_python": [{ token: "Python", nextContext: "py_1", prob: 0.9 }, { token: "Il", nextContext: "py_serpent", prob: 0.1 }],
        "py_serpent": [{ token: "pitone", nextContext: "end", prob: 1.0 }],
        "py_1": [{ token: "è", nextContext: "py_2", prob: 1.0 }],
        "py_2": [{ token: "un", nextContext: "py_3", prob: 0.9 }, { token: "una", nextContext: "end", prob: 0.1 }],
        "py_3": [{ token: "linguaggio", nextContext: "py_4", prob: 0.8 }, { token: "serpente", nextContext: "end", prob: 0.1, isHallucination: true }, { token: "framework", nextContext: "end", prob: 0.1 }],
        "py_4": [{ token: "di", nextContext: "py_5", prob: 1.0 }],
        "py_5": [{ token: "programmazione", nextContext: "py_6", prob: 0.9 }, { token: "scripting", nextContext: "py_6", prob: 0.1 }],
        "py_6": [{ token: "molto", nextContext: "end", prob: 0.4 }, { token: "usato", nextContext: "end", prob: 0.3 }, { token: "interpretato", nextContext: "end", prob: 0.2 }, { token: "facile", nextContext: "end", prob: 0.1 }],

        // 17. Sviluppo Web
        "start_web": [{ token: "Lo", nextContext: "web_1", prob: 0.7 }, { token: "Il", nextContext: "web_1", prob: 0.3 }],
        "web_1": [{ token: "sviluppo", nextContext: "web_2", prob: 0.9 }, { token: "design", nextContext: "web_2", prob: 0.1 }],
        "web_2": [{ token: "web", nextContext: "web_3", prob: 1.0 }],
        "web_3": [{ token: "si", nextContext: "web_4", prob: 0.6 }, { token: "comprende", nextContext: "web_6", prob: 0.2 }, { token: "è", nextContext: "end", prob: 0.2 }],
        "web_4": [{ token: "divide", nextContext: "web_5", prob: 0.8 }, { token: "mangia", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "basa", nextContext: "end", prob: 0.15 }],
        "web_5": [{ token: "in", nextContext: "web_6", prob: 1.0 }],
        "web_6": [{ token: "frontend", nextContext: "web_7", prob: 0.7 }, { token: "due", nextContext: "end", prob: 0.1 }, { token: "tre", nextContext: "end", prob: 0.1 }, { token: "varie", nextContext: "end", prob: 0.1 }],
        "web_7": [{ token: "e", nextContext: "web_8", prob: 0.9 }, { token: "o", nextContext: "web_8", prob: 0.1 }],
        "web_8": [{ token: "backend", nextContext: "end", prob: 0.9 }, { token: "database", nextContext: "end", prob: 0.1 }],

        // 18. Cybersecurity
        "start_cyber": [{ token: "La", nextContext: "cyb_1", prob: 1.0 }],
        "cyb_1": [{ token: "cybersecurity", nextContext: "cyb_2", prob: 0.8 }, { token: "pizza", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "sicurezza", nextContext: "end", prob: 0.15 }],
        "cyb_2": [{ token: "protegge", nextContext: "cyb_3", prob: 0.6 }, { token: "è", nextContext: "end", prob: 0.2 }, { token: "analizza", nextContext: "cyb_3", prob: 0.2 }],
        "cyb_3": [{ token: "i", nextContext: "cyb_4", prob: 0.5 }, { token: "le", nextContext: "cyb_plural", prob: 0.3 }, { token: "gli", nextContext: "cyb_plural", prob: 0.2 }],
        "cyb_plural": [{token: "utenti", nextContext: "end", prob: 1.0}],
        "cyb_4": [{ token: "sistemi", nextContext: "cyb_5", prob: 0.4 }, { token: "dati", nextContext: "cyb_5", prob: 0.3 }, { token: "dispositivi", nextContext: "cyb_5", prob: 0.2 }, { token: "segreti", nextContext: "end", prob: 0.1, isHallucination: true }],
        "cyb_5": [{ token: "informatici", nextContext: "end", prob: 0.6 }, { token: "sensibili", nextContext: "end", prob: 0.2 }, { token: "aziendali", nextContext: "end", prob: 0.2 }],

        // 19. Fotosintesi
        "start_photosynthesis": [{ token: "La", nextContext: "photo_1", prob: 1.0 }],
        "photo_1": [{ token: "fotosintesi", nextContext: "photo_2", prob: 0.9 }, { token: "fotografia", nextContext: "end", prob: 0.1 }],
        "photo_2": [{ token: "converte", nextContext: "photo_3", prob: 0.7 }, { token: "è", nextContext: "end", prob: 0.2 }, { token: "produce", nextContext: "end", prob: 0.1 }],
        "photo_3": [{ token: "l'energia", nextContext: "photo_4", prob: 0.9 }, { token: "la", nextContext: "end", prob: 0.1 }],
        "photo_4": [{ token: "solare", nextContext: "photo_5", prob: 0.8 }, { token: "elettrica", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "luminosa", nextContext: "photo_5", prob: 0.15 }],
        "photo_5": [{ token: "in", nextContext: "photo_6", prob: 1.0 }],
        "photo_6": [{ token: "energia", nextContext: "photo_7", prob: 0.8 }, { token: "ossigeno", nextContext: "end", prob: 0.1 }, { token: "glucosio", nextContext: "end", prob: 0.1 }],
        "photo_7": [{ token: "chimica", nextContext: "end", prob: 0.9 }, { token: "cinetica", nextContext: "end", prob: 0.1 }],

        // 20. Vulcano
        "start_volcano": [{ token: "Un", nextContext: "vol_1", prob: 0.8 }, { token: "Il", nextContext: "vol_1", prob: 0.2 }],
        "vol_1": [{ token: "vulcano", nextContext: "vol_2", prob: 0.8 }, { token: "gelato", nextContext: "end", prob: 0.05, isHallucination: true }, { token: "terremoto", nextContext: "end", prob: 0.15 }],
        "vol_2": [{ token: "erutta", nextContext: "vol_3", prob: 0.5 }, { token: "è", nextContext: "end", prob: 0.3 }, { token: "dorme", nextContext: "end", prob: 0.2 }],
        "vol_3": [{ token: "quando", nextContext: "vol_4", prob: 0.8 }, { token: "lava", nextContext: "end", prob: 0.1 }, { token: "cenere", nextContext: "end", prob: 0.1 }],
        "vol_4": [{ token: "il", nextContext: "vol_5", prob: 0.9 }, { token: "la", nextContext: "end", prob: 0.1 }],
        "vol_5": [{ token: "magma", nextContext: "vol_6", prob: 0.7 }, { token: "gas", nextContext: "end", prob: 0.1 }, { token: "calore", nextContext: "end", prob: 0.1 }, { token: "fuoco", nextContext: "end", prob: 0.1, isHallucination: true }],
        "vol_6": [{ token: "risale", nextContext: "vol_7", prob: 0.6 }, { token: "fuoriesce", nextContext: "vol_8", prob: 0.2 }, { token: "si", nextContext: "vol_9", prob: 0.2 }],
        "vol_7": [{ token: "verso", nextContext: "vol_10", prob: 0.8 }, { token: "attraverso", nextContext: "vol_10", prob: 0.2 }],
        "vol_8": [{ token: "creando", nextContext: "vol_11", prob: 0.7 }, { token: "formando", nextContext: "vol_11", prob: 0.3 }],
        "vol_9": [{ token: "accumula", nextContext: "vol_12", prob: 0.8 }, { token: "raffredda", nextContext: "end", prob: 0.2 }],
        "vol_10": [{ token: "la", nextContext: "vol_13", prob: 0.9 }, { token: "le", nextContext: "end", prob: 0.1 }],
        "vol_11": [{ token: "nuove", nextContext: "vol_14", prob: 0.8 }, { token: "spettacolari", nextContext: "vol_14", prob: 0.2 }],
        "vol_12": [{ token: "nelle", nextContext: "vol_15", prob: 1.0 }],
        "vol_13": [{ token: "superficie", nextContext: "vol_16", prob: 0.9 }, { token: "crosta", nextContext: "end", prob: 0.1 }],
        "vol_14": [{ token: "formazioni", nextContext: "vol_17", prob: 0.8 }, { token: "eruzioni", nextContext: "end", prob: 0.2 }],
        "vol_15": [{ token: "camere", nextContext: "vol_18", prob: 1.0 }],
        "vol_16": [{ token: "terrestre", nextContext: "vol_19", prob: 0.9 }, { token: "lunare", nextContext: "end", prob: 0.1, isHallucination: true }],
        "vol_17": [{ token: "rocciose", nextContext: "vol_20", prob: 0.8 }, { token: "di", nextContext: "end", prob: 0.2 }],
        "vol_18": [{ token: "magmatiche", nextContext: "vol_21", prob: 0.9 }, { token: "di", nextContext: "end", prob: 0.1 }],
        "vol_19": [{ token: "modificando", nextContext: "vol_22", prob: 0.8 }, { token: "e", nextContext: "end", prob: 0.2 }],
        "vol_20": [{ token: "che", nextContext: "vol_23", prob: 0.8 }, { token: "e", nextContext: "end", prob: 0.2 }],
        "vol_21": [{ token: "sotterranee", nextContext: "vol_24", prob: 0.9 }, { token: "profonde", nextContext: "end", prob: 0.1 }],
        "vol_22": [{ token: "il", nextContext: "vol_25", prob: 0.9 }, { token: "la", nextContext: "end", prob: 0.1 }],
        "vol_23": [{ token: "plasmano", nextContext: "vol_26", prob: 0.8 }, { token: "modificano", nextContext: "vol_26", prob: 0.2 }],
        "vol_24": [{ token: "a", nextContext: "vol_27", prob: 0.8 }, { token: "per", nextContext: "end", prob: 0.2 }],
        "vol_25": [{ token: "paesaggio", nextContext: "vol_28", prob: 0.9 }, { token: "territorio", nextContext: "end", prob: 0.1 }],
        "vol_26": [{ token: "il", nextContext: "vol_29", prob: 0.9 }, { token: "la", nextContext: "end", prob: 0.1 }],
        "vol_27": [{ token: "causa", nextContext: "vol_30", prob: 0.8 }, { token: "seguito", nextContext: "end", prob: 0.2 }],
        "vol_28": [{ token: "circostante", nextContext: "vol_31", prob: 0.9 }, { token: "locale", nextContext: "end", prob: 0.1 }],
        "vol_29": [{ token: "territorio", nextContext: "vol_32", prob: 0.8 }, { token: "mondo", nextContext: "end", prob: 0.2 }],
        "vol_30": [{ token: "della", nextContext: "vol_33", prob: 0.9 }, { token: "di", nextContext: "end", prob: 0.1 }],
        "vol_31": [{ token: "per", nextContext: "vol_34", prob: 0.8 }, { token: "da", nextContext: "end", prob: 0.2 }],
        "vol_32": [{ token: "per", nextContext: "vol_35", prob: 0.8 }, { token: "da", nextContext: "end", prob: 0.2 }],
        "vol_33": [{ token: "pressione", nextContext: "vol_36", prob: 0.9 }, { token: "forza", nextContext: "end", prob: 0.1 }],
        "vol_34": [{ token: "milioni", nextContext: "vol_37", prob: 0.9 }, { token: "migliaia", nextContext: "end", prob: 0.1 }],
        "vol_35": [{ token: "secoli", nextContext: "vol_38", prob: 0.8 }, { token: "millenni", nextContext: "end", prob: 0.2 }],
        "vol_36": [{ token: "accumulata", nextContext: "vol_39", prob: 0.9 }, { token: "interna", nextContext: "end", prob: 0.1 }],
        "vol_37": [{ token: "di", nextContext: "vol_40", prob: 1.0 }],
        "vol_38": [{ token: "di", nextContext: "vol_41", prob: 0.8 }, { token: "attraverso", nextContext: "end", prob: 0.2 }],
        "vol_39": [{ token: "nelle", nextContext: "vol_42", prob: 0.9 }, { token: "sotto", nextContext: "end", prob: 0.1 }],
        "vol_40": [{ token: "anni", nextContext: "vol_43", prob: 0.9 }, { token: "ere", nextContext: "end", prob: 0.1 }],
        "vol_41": [{ token: "evoluzione", nextContext: "vol_44", prob: 0.8 }, { token: "storia", nextContext: "end", prob: 0.2 }],
        "vol_42": [{ token: "profondità", nextContext: "vol_45", prob: 0.9 }, { token: "camere", nextContext: "end", prob: 0.1 }],
        "vol_43": [{ token: "di", nextContext: "vol_46", prob: 0.9 }, { token: "fa", nextContext: "end", prob: 0.1 }],
        "vol_44": [{ token: "geologica", nextContext: "vol_47", prob: 0.9 }, { token: "terrestre", nextContext: "end", prob: 0.1 }],
        "vol_45": [{ token: "terrestri", nextContext: "vol_48", prob: 0.9 }, { token: "magmatiche", nextContext: "end", prob: 0.1 }],
        "vol_46": [{ token: "attività", nextContext: "vol_49", prob: 0.8 }, { token: "evoluzione", nextContext: "end", prob: 0.2 }],
        "vol_47": [{ token: "del", nextContext: "vol_50", prob: 0.9 }, { token: "terrestre", nextContext: "end", prob: 0.1 }],
        "vol_48": [{ token: "creando", nextContext: "vol_51", prob: 0.8 }, { token: "formando", nextContext: "end", prob: 0.2 }],
        "vol_49": [{ token: "vulcanica", nextContext: "vol_52", prob: 0.9 }, { token: "sismica", nextContext: "end", prob: 0.1 }],
        "vol_50": [{ token: "nostro", nextContext: "vol_53", prob: 0.9 }, { token: "pianeta", nextContext: "end", prob: 0.1 }],
        "vol_51": [{ token: "fenomeni", nextContext: "vol_54", prob: 0.8 }, { token: "paesaggi", nextContext: "end", prob: 0.2 }],
        "vol_52": [{ token: "che", nextContext: "vol_55", prob: 0.8 }, { token: "e", nextContext: "end", prob: 0.2 }],
        "vol_53": [{ token: "pianeta", nextContext: "vol_56", prob: 0.9 }, { token: "mondo", nextContext: "end", prob: 0.1 }],
        "vol_54": [{ token: "spettacolari", nextContext: "vol_57", prob: 0.8 }, { token: "geologici", nextContext: "end", prob: 0.2 }],
        "vol_55": [{ token: "ha", nextContext: "vol_58", prob: 0.8 }, { token: "continua", nextContext: "end", prob: 0.2 }],
        "vol_56": [{ token: "Terra", nextContext: "end", prob: 1.0 }],
        "vol_57": [{ token: "e", nextContext: "vol_59", prob: 0.8 }, { token: "che", nextContext: "end", prob: 0.2 }],
        "vol_58": [{ token: "plasmato", nextContext: "vol_60", prob: 0.8 }, { token: "modellato", nextContext: "end", prob: 0.2 }],
        "vol_59": [{ token: "unici", nextContext: "vol_61", prob: 0.8 }, { token: "diversi", nextContext: "end", prob: 0.2 }],
        "vol_60": [{ token: "la", nextContext: "vol_62", prob: 0.9 }, { token: "il", nextContext: "end", prob: 0.1 }],
        "vol_61": [{ token: "nel", nextContext: "vol_63", prob: 0.8 }, { token: "sulla", nextContext: "end", prob: 0.2 }],
        "vol_62": [{ token: "geologia", nextContext: "vol_64", prob: 0.9 }, { token: "superficie", nextContext: "end", prob: 0.1 }],
        "vol_63": [{ token: "loro", nextContext: "vol_65", prob: 0.8 }, { token: "mondo", nextContext: "end", prob: 0.2 }],
        "vol_64": [{ token: "terrestre", nextContext: "vol_66", prob: 0.9 }, { token: "mondiale", nextContext: "end", prob: 0.1 }],
        "vol_65": [{ token: "genere", nextContext: "vol_67", prob: 0.8 }, { token: "aspetto", nextContext: "end", prob: 0.2 }],
        "vol_66": [{ token: "per", nextContext: "vol_68", prob: 0.8 }, { token: "attraverso", nextContext: "end", prob: 0.2 }],
        "vol_67": [{ token: "e", nextContext: "vol_69", prob: 0.8 }, { token: "dimostrando", nextContext: "end", prob: 0.2 }],
        "vol_68": [{ token: "milioni", nextContext: "vol_70", prob: 0.9 }, { token: "migliaia", nextContext: "end", prob: 0.1 }],
        "vol_69": [{ token: "bellezza", nextContext: "vol_71", prob: 0.8 }, { token: "potenza", nextContext: "end", prob: 0.2 }],
        "vol_70": [{ token: "di", nextContext: "vol_72", prob: 1.0 }],
        "vol_71": [{ token: "in", nextContext: "vol_73", prob: 0.8 }, { token: "della", nextContext: "end", prob: 0.2 }],
        "vol_72": [{ token: "anni", nextContext: "vol_74", prob: 0.9 }, { token: "ere", nextContext: "end", prob: 0.1 }],
        "vol_73": [{ token: "tutto", nextContext: "vol_75", prob: 0.8 }, { token: "ogni", nextContext: "end", prob: 0.2 }],
        "vol_74": [{ token: "di", nextContext: "vol_76", prob: 0.8 }, { token: "fa", nextContext: "end", prob: 0.2 }],
        "vol_75": [{ token: "il", nextContext: "vol_77", prob: 0.9 }, { token: "lo", nextContext: "end", prob: 0.1 }],
        "vol_76": [{ token: "evoluzione", nextContext: "vol_78", prob: 0.8 }, { token: "storia", nextContext: "end", prob: 0.2 }],
        "vol_77": [{ token: "mondo", nextContext: "end", prob: 1.0 }],
        "vol_78": [{ token: "geologica", nextContext: "end", prob: 1.0 }],

        // 21. Medicina e Salute
        "start_medicine": [{ token: "La", nextContext: "med_1", prob: 0.9 }, { token: "I", nextContext: "med_doctors", prob: 0.1 }],
        "med_doctors": [{ token: "medici", nextContext: "end", prob: 1.0 }],
        "med_1": [{ token: "medicina", nextContext: "med_2", prob: 0.9 }, { token: "salute", nextContext: "med_health", prob: 0.1 }],
        "med_health": [{ token: "è", nextContext: "end", prob: 1.0 }],
        "med_2": [{ token: "moderna", nextContext: "med_3", prob: 0.8 }, { token: "tradizionale", nextContext: "end", prob: 0.1 }, { token: "alternativa", nextContext: "end", prob: 0.1 }],
        "med_3": [{ token: "si", nextContext: "med_4", prob: 0.8 }, { token: "utilizza", nextContext: "med_uses", prob: 0.2 }],
        "med_uses": [{ token: "tecnologie", nextContext: "end", prob: 1.0 }],
        "med_4": [{ token: "basa", nextContext: "med_5", prob: 0.9 }, { token: "fonda", nextContext: "med_5", prob: 0.1 }],
        "med_5": [{ token: "su", nextContext: "med_6", prob: 1.0 }],
        "med_6": [{ token: "evidenze", nextContext: "med_7", prob: 0.8 }, { token: "ricerche", nextContext: "med_research", prob: 0.1 }, { token: "magia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "med_research": [{ token: "approfondite", nextContext: "end", prob: 1.0 }],
        "med_7": [{ token: "scientifiche", nextContext: "med_8", prob: 0.9 }, { token: "empiriche", nextContext: "end", prob: 0.1 }],
        "med_8": [{ token: "rigorose", nextContext: "med_9", prob: 0.8 }, { token: "accurate", nextContext: "med_9", prob: 0.2 }],
        "med_9": [{ token: "e", nextContext: "med_10", prob: 0.9 }, { token: "per", nextContext: "end", prob: 0.1 }],
        "med_10": [{ token: "tecnologie", nextContext: "med_11", prob: 0.8 }, { token: "strumenti", nextContext: "med_11", prob: 0.2 }],
        "med_11": [{ token: "avanzate", nextContext: "med_12", prob: 0.8 }, { token: "innovative", nextContext: "med_12", prob: 0.1 }, { token: "magiche", nextContext: "end", prob: 0.1, isHallucination: true }],
        "med_12": [{ token: "che", nextContext: "med_13", prob: 0.7 }, { token: "per", nextContext: "med_purpose", prob: 0.3 }],
        "med_purpose": [{ token: "salvare", nextContext: "end", prob: 1.0 }],
        "med_13": [{ token: "permettono", nextContext: "med_14", prob: 0.8 }, { token: "consentono", nextContext: "med_14", prob: 0.2 }],
        "med_14": [{ token: "diagnosi", nextContext: "med_15", prob: 0.6 }, { token: "cure", nextContext: "med_treatments", prob: 0.3 }, { token: "previsioni", nextContext: "end", prob: 0.1, isHallucination: true }],
        "med_treatments": [{ token: "efficaci", nextContext: "end", prob: 1.0 }],
        "med_15": [{ token: "precise", nextContext: "med_16", prob: 0.8 }, { token: "accurate", nextContext: "med_16", prob: 0.2 }],
        "med_16": [{ token: "e", nextContext: "med_17", prob: 0.9 }, { token: "per", nextContext: "end", prob: 0.1 }],
        "med_17": [{ token: "trattamenti", nextContext: "med_18", prob: 0.8 }, { token: "terapie", nextContext: "med_18", prob: 0.2 }],
        "med_18": [{ token: "personalizzati", nextContext: "med_19", prob: 0.6 }, { token: "mirati", nextContext: "med_19", prob: 0.3 }, { token: "universali", nextContext: "end", prob: 0.1, isHallucination: true }],
        "med_19": [{ token: "che", nextContext: "med_20", prob: 0.8 }, { token: "per", nextContext: "end", prob: 0.2 }],
        "med_20": [{ token: "migliorano", nextContext: "med_21", prob: 0.8 }, { token: "salvano", nextContext: "med_save", prob: 0.2 }],
        "med_save": [{ token: "vite", nextContext: "end", prob: 1.0 }],
        "med_21": [{ token: "significativamente", nextContext: "med_22", prob: 0.8 }, { token: "drasticamente", nextContext: "med_22", prob: 0.2 }],
        "med_22": [{ token: "la", nextContext: "med_23", prob: 0.9 }, { token: "le", nextContext: "end", prob: 0.1 }],
        "med_23": [{ token: "qualità", nextContext: "med_24", prob: 0.8 }, { token: "durata", nextContext: "med_duration", prob: 0.2 }],
        "med_duration": [{ token: "della", nextContext: "end", prob: 1.0 }],
        "med_24": [{ token: "di", nextContext: "med_25", prob: 0.9 }, { token: "della", nextContext: "med_25", prob: 0.1 }],
        "med_25": [{ token: "vita", nextContext: "med_26", prob: 0.9 }, { token: "esistenza", nextContext: "end", prob: 0.1 }],
        "med_26": [{ token: "dei", nextContext: "med_27", prob: 0.8 }, { token: "di", nextContext: "end", prob: 0.2 }],
        "med_27": [{ token: "pazienti", nextContext: "med_28", prob: 0.9 }, { token: "malati", nextContext: "end", prob: 0.1 }],
        "med_28": [{ token: "attraverso", nextContext: "med_29", prob: 0.8 }, { token: "grazie", nextContext: "end", prob: 0.2 }],
        "med_29": [{ token: "approcci", nextContext: "med_30", prob: 0.7 }, { token: "metodologie", nextContext: "med_30", prob: 0.2 }, { token: "rituali", nextContext: "end", prob: 0.1, isHallucination: true }],
        "med_30": [{ token: "multidisciplinari", nextContext: "med_31", prob: 0.8 }, { token: "integrati", nextContext: "end", prob: 0.2 }],
        "med_31": [{ token: "che", nextContext: "med_32", prob: 0.8 }, { token: "e", nextContext: "end", prob: 0.2 }],
        "med_32": [{ token: "combinano", nextContext: "med_33", prob: 0.8 }, { token: "integrano", nextContext: "med_33", prob: 0.2 }],
        "med_33": [{ token: "prevenzione", nextContext: "med_34", prob: 0.6 }, { token: "diagnosi", nextContext: "med_34", prob: 0.3 }, { token: "astrologia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "med_34": [{ token: "e", nextContext: "med_35", prob: 0.9 }, { token: "con", nextContext: "end", prob: 0.1 }],
        "med_35": [{ token: "cura", nextContext: "med_36", prob: 0.8 }, { token: "riabilitazione", nextContext: "end", prob: 0.2 }],
        "med_36": [{ token: "in", nextContext: "med_37", prob: 0.8 }, { token: "per", nextContext: "end", prob: 0.2 }],
        "med_37": [{ token: "un", nextContext: "med_38", prob: 0.9 }, { token: "una", nextContext: "end", prob: 0.1 }],
        "med_38": [{ token: "sistema", nextContext: "med_39", prob: 0.8 }, { token: "approccio", nextContext: "end", prob: 0.2 }],
        "med_39": [{ token: "sanitario", nextContext: "med_40", prob: 0.9 }, { token: "medico", nextContext: "end", prob: 0.1 }],
        "med_40": [{ token: "sempre", nextContext: "med_41", prob: 0.8 }, { token: "più", nextContext: "med_42", prob: 0.2 }],
        "med_41": [{ token: "più", nextContext: "med_42", prob: 1.0 }],
        "med_42": [{ token: "efficiente", nextContext: "med_43", prob: 0.6 }, { token: "accessibile", nextContext: "med_43", prob: 0.3 }, { token: "costoso", nextContext: "end", prob: 0.1 }],
        "med_43": [{ token: "e", nextContext: "med_44", prob: 0.9 }, { token: "per", nextContext: "end", prob: 0.1 }],
        "med_44": [{ token: "umano", nextContext: "end", prob: 0.8 }, { token: "compassionevole", nextContext: "end", prob: 0.2 }],

        // 22. Cambiamenti Climatici
        "start_climate": [{ token: "Il", nextContext: "clim_1", prob: 0.8 }, { token: "I", nextContext: "clim_plural", prob: 0.2 }],
        "clim_plural": [{ token: "cambiamenti", nextContext: "clim_2", prob: 1.0 }],
        "clim_1": [{ token: "riscaldamento", nextContext: "clim_2", prob: 0.8 }, { token: "cambiamento", nextContext: "clim_2", prob: 0.1 }, { token: "raffreddamento", nextContext: "end", prob: 0.1, isHallucination: true }],
        "clim_2": [{ token: "globale", nextContext: "clim_3", prob: 0.8 }, { token: "climatici", nextContext: "clim_3", prob: 0.2 }],
        "clim_3": [{ token: "è", nextContext: "clim_4", prob: 0.7 }, { token: "sono", nextContext: "clim_4", prob: 0.2 }, { token: "rappresenta", nextContext: "clim_4", prob: 0.1 }],
        "clim_4": [{ token: "causato", nextContext: "clim_5", prob: 0.6 }, { token: "causati", nextContext: "clim_5", prob: 0.2 }, { token: "una", nextContext: "clim_threat", prob: 0.1 }, { token: "dovuto", nextContext: "end", prob: 0.1 }],
        "clim_threat": [{ token: "minaccia", nextContext: "end", prob: 1.0 }],
        "clim_5": [{ token: "principalmente", nextContext: "clim_6", prob: 0.8 }, { token: "esclusivamente", nextContext: "clim_6", prob: 0.1 }, { token: "magicamente", nextContext: "end", prob: 0.1, isHallucination: true }],
        "clim_6": [{ token: "dalle", nextContext: "clim_7", prob: 0.8 }, { token: "da", nextContext: "clim_singular", prob: 0.2 }],
        "clim_singular": [{ token: "attività", nextContext: "clim_8", prob: 1.0 }],
        "clim_7": [{ token: "attività", nextContext: "clim_8", prob: 0.9 }, { token: "emissioni", nextContext: "clim_emissions", prob: 0.1 }],
        "clim_emissions": [{ token: "di", nextContext: "end", prob: 1.0 }],
        "clim_8": [{ token: "umane", nextContext: "clim_9", prob: 0.8 }, { token: "industriali", nextContext: "clim_9", prob: 0.1 }, { token: "aliene", nextContext: "end", prob: 0.1, isHallucination: true }],
        "clim_9": [{ token: "industriali", nextContext: "clim_10", prob: 0.7 }, { token: "e", nextContext: "clim_and", prob: 0.2 }, { token: "che", nextContext: "end", prob: 0.1 }],
        "clim_and": [{ token: "agricole", nextContext: "end", prob: 1.0 }],
        "clim_10": [{ token: "che", nextContext: "clim_11", prob: 0.8 }, { token: "e", nextContext: "clim_12", prob: 0.2 }],
        "clim_11": [{ token: "rilasciano", nextContext: "clim_13", prob: 0.8 }, { token: "emettono", nextContext: "clim_13", prob: 0.1 }, { token: "mangiano", nextContext: "end", prob: 0.1, isHallucination: true }],
        "clim_12": [{ token: "trasporti", nextContext: "clim_transport", prob: 0.8 }, { token: "deforestazione", nextContext: "end", prob: 0.2 }],
        "clim_transport": [{ token: "che", nextContext: "end", prob: 1.0 }],
        "clim_13": [{ token: "enormi", nextContext: "clim_14", prob: 0.6 }, { token: "grandi", nextContext: "clim_14", prob: 0.3 }, { token: "piccole", nextContext: "end", prob: 0.1, isHallucination: true }],
        "clim_14": [{ token: "quantità", nextContext: "clim_15", prob: 0.9 }, { token: "volumi", nextContext: "clim_15", prob: 0.1 }],
        "clim_15": [{ token: "di", nextContext: "clim_16", prob: 1.0 }],
        "clim_16": [{ token: "gas", nextContext: "clim_17", prob: 0.8 }, { token: "anidride", nextContext: "clim_co2", prob: 0.1 }, { token: "vapore", nextContext: "end", prob: 0.1 }],
        "clim_co2": [{ token: "carbonica", nextContext: "end", prob: 1.0 }],
        "clim_17": [{ token: "serra", nextContext: "clim_18", prob: 0.9 }, { token: "tossici", nextContext: "end", prob: 0.1 }],
        "clim_18": [{ token: "nell'atmosfera", nextContext: "clim_19", prob: 0.8 }, { token: "che", nextContext: "clim_effect", prob: 0.1 }, { token: "nello", nextContext: "end", prob: 0.1 }],
        "clim_effect": [{ token: "intrappolano", nextContext: "end", prob: 1.0 }],
        "clim_19": [{ token: "terrestre", nextContext: "clim_20", prob: 0.8 }, { token: "causando", nextContext: "clim_causing", prob: 0.1 }, { token: "lunare", nextContext: "end", prob: 0.1, isHallucination: true }],
        "clim_causing": [{ token: "un", nextContext: "end", prob: 1.0 }],
        "clim_20": [{ token: "aumentando", nextContext: "clim_21", prob: 0.8 }, { token: "modificando", nextContext: "clim_21", prob: 0.1 }, { token: "diminuendo", nextContext: "end", prob: 0.1, isHallucination: true }],
        "clim_21": [{ token: "progressivamente", nextContext: "clim_22", prob: 0.8 }, { token: "rapidamente", nextContext: "clim_22", prob: 0.1 }, { token: "lentamente", nextContext: "end", prob: 0.1 }],
        "clim_22": [{ token: "la", nextContext: "clim_23", prob: 0.9 }, { token: "le", nextContext: "end", prob: 0.1 }],
        "clim_23": [{ token: "temperatura", nextContext: "clim_24", prob: 0.9 }, { token: "pressione", nextContext: "end", prob: 0.1 }],
        "clim_24": [{ token: "media", nextContext: "clim_25", prob: 0.8 }, { token: "globale", nextContext: "clim_25", prob: 0.2 }],
        "clim_25": [{ token: "del", nextContext: "clim_26", prob: 0.9 }, { token: "della", nextContext: "end", prob: 0.1 }],
        "clim_26": [{ token: "pianeta", nextContext: "clim_27", prob: 0.9 }, { token: "mondo", nextContext: "end", prob: 0.1 }],
        "clim_27": [{ token: "con", nextContext: "clim_28", prob: 0.8 }, { token: "causando", nextContext: "clim_consequences", prob: 0.2 }],
        "clim_consequences": [{ token: "gravi", nextContext: "end", prob: 1.0 }],
        "clim_28": [{ token: "conseguenze", nextContext: "clim_29", prob: 0.8 }, { token: "effetti", nextContext: "clim_29", prob: 0.2 }],
        "clim_29": [{ token: "devastanti", nextContext: "clim_30", prob: 0.6 }, { token: "gravi", nextContext: "clim_30", prob: 0.3 }, { token: "positive", nextContext: "end", prob: 0.1, isHallucination: true }],
        "clim_30": [{ token: "per", nextContext: "clim_31", prob: 0.8 }, { token: "su", nextContext: "clim_31", prob: 0.2 }],
        "clim_31": [{ token: "ecosistemi", nextContext: "clim_32", prob: 0.6 }, { token: "l'umanità", nextContext: "clim_32", prob: 0.3 }, { token: "i", nextContext: "end", prob: 0.1 }],
        "clim_32": [{ token: "e", nextContext: "clim_33", prob: 0.8 }, { token: "che", nextContext: "end", prob: 0.2 }],
        "clim_33": [{ token: "biodiversità", nextContext: "clim_34", prob: 0.6 }, { token: "società", nextContext: "clim_34", prob: 0.3 }, { token: "economia", nextContext: "end", prob: 0.1 }],
        "clim_34": [{ token: "richiedendo", nextContext: "clim_35", prob: 0.8 }, { token: "necessitando", nextContext: "clim_35", prob: 0.2 }],
        "clim_35": [{ token: "azioni", nextContext: "clim_36", prob: 0.8 }, { token: "interventi", nextContext: "clim_36", prob: 0.2 }],
        "clim_36": [{ token: "immediate", nextContext: "clim_37", prob: 0.8 }, { token: "urgenti", nextContext: "clim_37", prob: 0.1 }, { token: "future", nextContext: "end", prob: 0.1 }],
        "clim_37": [{ token: "e", nextContext: "clim_38", prob: 0.8 }, { token: "per", nextContext: "end", prob: 0.2 }],
        "clim_38": [{ token: "coordinate", nextContext: "clim_39", prob: 0.8 }, { token: "globali", nextContext: "clim_39", prob: 0.2 }],
        "clim_39": [{ token: "a", nextContext: "clim_40", prob: 0.8 }, { token: "per", nextContext: "end", prob: 0.2 }],
        "clim_40": [{ token: "livello", nextContext: "clim_41", prob: 0.9 }, { token: "scala", nextContext: "end", prob: 0.1 }],
        "clim_41": [{ token: "mondiale", nextContext: "clim_42", prob: 0.8 }, { token: "globale", nextContext: "clim_42", prob: 0.2 }],
        "clim_42": [{ token: "per", nextContext: "clim_43", prob: 0.8 }, { token: "attraverso", nextContext: "end", prob: 0.2 }],
        "clim_43": [{ token: "mitigare", nextContext: "clim_44", prob: 0.6 }, { token: "ridurre", nextContext: "clim_44", prob: 0.3 }, { token: "aumentare", nextContext: "end", prob: 0.1, isHallucination: true }],
        "clim_44": [{ token: "gli", nextContext: "clim_45", prob: 0.8 }, { token: "i", nextContext: "clim_45", prob: 0.2 }],
        "clim_45": [{ token: "impatti", nextContext: "clim_46", prob: 0.8 }, { token: "effetti", nextContext: "clim_46", prob: 0.2 }],
        "clim_46": [{ token: "negativi", nextContext: "clim_47", prob: 0.8 }, { token: "catastrofici", nextContext: "clim_47", prob: 0.1 }, { token: "positivi", nextContext: "end", prob: 0.1, isHallucination: true }],
        "clim_47": [{ token: "e", nextContext: "clim_48", prob: 0.8 }, { token: "attraverso", nextContext: "end", prob: 0.2 }],
        "clim_48": [{ token: "promuovere", nextContext: "clim_49", prob: 0.8 }, { token: "sviluppare", nextContext: "clim_49", prob: 0.2 }],
        "clim_49": [{ token: "la", nextContext: "clim_50", prob: 0.8 }, { token: "uno", nextContext: "end", prob: 0.2 }],
        "clim_50": [{ token: "transizione", nextContext: "clim_51", prob: 0.8 }, { token: "conversione", nextContext: "clim_51", prob: 0.2 }],
        "clim_51": [{ token: "verso", nextContext: "clim_52", prob: 0.9 }, { token: "a", nextContext: "end", prob: 0.1 }],
        "clim_52": [{ token: "energie", nextContext: "clim_53", prob: 0.8 }, { token: "fonti", nextContext: "clim_53", prob: 0.2 }],
        "clim_53": [{ token: "rinnovabili", nextContext: "clim_54", prob: 0.9 }, { token: "pulite", nextContext: "clim_54", prob: 0.1 }],
        "clim_54": [{ token: "e", nextContext: "clim_55", prob: 0.8 }, { token: "che", nextContext: "end", prob: 0.2 }],
        "clim_55": [{ token: "sostenibili", nextContext: "clim_56", prob: 0.8 }, { token: "pratiche", nextContext: "end", prob: 0.2 }],
        "clim_56": [{ token: "che", nextContext: "clim_57", prob: 0.8 }, { token: "per", nextContext: "end", prob: 0.2 }],
        "clim_57": [{ token: "rappresentano", nextContext: "clim_58", prob: 0.8 }, { token: "costituiscono", nextContext: "clim_58", prob: 0.2 }],
        "clim_58": [{ token: "il", nextContext: "clim_59", prob: 0.9 }, { token: "la", nextContext: "end", prob: 0.1 }],
        "clim_59": [{ token: "futuro", nextContext: "clim_60", prob: 0.9 }, { token: "destino", nextContext: "end", prob: 0.1 }],
        "clim_60": [{ token: "sostenibile", nextContext: "clim_61", prob: 0.8 }, { token: "verde", nextContext: "clim_61", prob: 0.2 }],
        "clim_61": [{ token: "del", nextContext: "clim_62", prob: 0.9 }, { token: "per", nextContext: "end", prob: 0.1 }],
        "clim_62": [{ token: "nostro", nextContext: "clim_63", prob: 0.9 }, { token: "pianeta", nextContext: "end", prob: 0.1 }],
        "clim_63": [{ token: "pianeta", nextContext: "clim_64", prob: 0.9 }, { token: "mondo", nextContext: "end", prob: 0.1 }],
        "clim_64": [{ token: "Terra", nextContext: "end", prob: 1.0 }],

        // 23. Psicologia
        "start_psychology": [{ token: "La", nextContext: "psic_1", prob: 0.9 }, { token: "Gli", nextContext: "psic_studies", prob: 0.1 }],
        "psic_studies": [{ token: "studi", nextContext: "psic_1", prob: 1.0 }],
        "psic_1": [{ token: "psicologia", nextContext: "psic_2", prob: 0.8 }, { token: "mente", nextContext: "psic_mind", prob: 0.1 }, { token: "telepatia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "psic_mind": [{ token: "umana", nextContext: "psic_2", prob: 1.0 }],
        "psic_2": [{ token: "moderna", nextContext: "psic_3", prob: 0.7 }, { token: "cognitiva", nextContext: "psic_3", prob: 0.2 }, { token: "paranormale", nextContext: "end", prob: 0.1, isHallucination: true }],
        "psic_3": [{ token: "studia", nextContext: "psic_4", prob: 0.8 }, { token: "analizza", nextContext: "psic_4", prob: 0.2 }],
        "psic_4": [{ token: "i", nextContext: "psic_5", prob: 0.8 }, { token: "il", nextContext: "psic_behavior", prob: 0.2 }],
        "psic_behavior": [{ token: "comportamento", nextContext: "psic_6", prob: 1.0 }],
        "psic_5": [{ token: "processi", nextContext: "psic_6", prob: 0.8 }, { token: "meccanismi", nextContext: "psic_6", prob: 0.1 }, { token: "poteri", nextContext: "end", prob: 0.1, isHallucination: true }],
        "psic_6": [{ token: "mentali", nextContext: "psic_7", prob: 0.7 }, { token: "umano", nextContext: "psic_7", prob: 0.2 }, { token: "magici", nextContext: "end", prob: 0.1, isHallucination: true }],
        "psic_7": [{ token: "e", nextContext: "psic_8", prob: 0.9 }, { token: "attraverso", nextContext: "end", prob: 0.1 }],
        "psic_8": [{ token: "comportamentali", nextContext: "psic_9", prob: 0.8 }, { token: "emotivi", nextContext: "psic_9", prob: 0.1 }, { token: "soprannaturali", nextContext: "end", prob: 0.1, isHallucination: true }],
        "psic_9": [{ token: "attraverso", nextContext: "psic_10", prob: 0.8 }, { token: "utilizzando", nextContext: "psic_10", prob: 0.2 }],
        "psic_10": [{ token: "metodi", nextContext: "psic_11", prob: 0.8 }, { token: "approcci", nextContext: "psic_11", prob: 0.1 }, { token: "rituali", nextContext: "end", prob: 0.1, isHallucination: true }],
        "psic_11": [{ token: "scientifici", nextContext: "psic_12", prob: 0.8 }, { token: "empirici", nextContext: "psic_12", prob: 0.1 }, { token: "esoterici", nextContext: "end", prob: 0.1, isHallucination: true }],
        "psic_12": [{ token: "rigorosi", nextContext: "psic_13", prob: 0.8 }, { token: "che", nextContext: "psic_14", prob: 0.2 }],
        "psic_13": [{ token: "che", nextContext: "psic_14", prob: 1.0 }],
        "psic_14": [{ token: "includono", nextContext: "psic_15", prob: 0.8 }, { token: "comprendono", nextContext: "psic_15", prob: 0.2 }],
        "psic_15": [{ token: "osservazione", nextContext: "psic_16", prob: 0.6 }, { token: "sperimentazione", nextContext: "psic_16", prob: 0.3 }, { token: "divinazione", nextContext: "end", prob: 0.1, isHallucination: true }],
        "psic_16": [{ token: "controllata", nextContext: "psic_17", prob: 0.8 }, { token: "e", nextContext: "psic_18", prob: 0.2 }],
        "psic_17": [{ token: "e", nextContext: "psic_18", prob: 1.0 }],
        "psic_18": [{ token: "analisi", nextContext: "psic_19", prob: 0.8 }, { token: "test", nextContext: "psic_19", prob: 0.2 }],
        "psic_19": [{ token: "statistica", nextContext: "psic_20", prob: 0.7 }, { token: "dei", nextContext: "psic_data", prob: 0.2 }, { token: "astrale", nextContext: "end", prob: 0.1, isHallucination: true }],
        "psic_data": [{ token: "dati", nextContext: "psic_20", prob: 1.0 }],
        "psic_20": [{ token: "per", nextContext: "psic_21", prob: 0.9 }, { token: "che", nextContext: "end", prob: 0.1 }],
        "psic_21": [{ token: "comprendere", nextContext: "psic_22", prob: 0.8 }, { token: "spiegare", nextContext: "psic_22", prob: 0.2 }],
        "psic_22": [{ token: "come", nextContext: "psic_23", prob: 0.9 }, { token: "perché", nextContext: "end", prob: 0.1 }],
        "psic_23": [{ token: "funziona", nextContext: "psic_24", prob: 0.8 }, { token: "opera", nextContext: "psic_24", prob: 0.2 }],
        "psic_24": [{ token: "la", nextContext: "psic_25", prob: 0.9 }, { token: "il", nextContext: "end", prob: 0.1 }],
        "psic_25": [{ token: "mente", nextContext: "psic_26", prob: 0.9 }, { token: "coscienza", nextContext: "end", prob: 0.1 }],
        "psic_26": [{ token: "umana", nextContext: "psic_27", prob: 0.9 }, { token: "e", nextContext: "end", prob: 0.1 }],
        "psic_27": [{ token: "in", nextContext: "psic_28", prob: 0.8 }, { token: "durante", nextContext: "end", prob: 0.2 }],
        "psic_28": [{ token: "tutte", nextContext: "psic_29", prob: 0.8 }, { token: "diverse", nextContext: "psic_29", prob: 0.2 }],
        "psic_29": [{ token: "le", nextContext: "psic_30", prob: 0.9 }, { token: "sue", nextContext: "end", prob: 0.1 }],
        "psic_30": [{ token: "sue", nextContext: "psic_31", prob: 0.8 }, { token: "diverse", nextContext: "psic_31", prob: 0.2 }],
        "psic_31": [{ token: "manifestazioni", nextContext: "psic_32", prob: 0.8 }, { token: "espressioni", nextContext: "end", prob: 0.2 }],
        "psic_32": [{ token: "e", nextContext: "psic_33", prob: 0.8 }, { token: "dalla", nextContext: "end", prob: 0.2 }],
        "psic_33": [{ token: "applicazioni", nextContext: "psic_34", prob: 0.8 }, { token: "implicazioni", nextContext: "end", prob: 0.2 }],
        "psic_34": [{ token: "pratiche", nextContext: "psic_35", prob: 0.8 }, { token: "che", nextContext: "end", prob: 0.2 }],
        "psic_35": [{ token: "che", nextContext: "psic_36", prob: 0.8 }, { token: "per", nextContext: "end", prob: 0.2 }],
        "psic_36": [{ token: "spaziano", nextContext: "psic_37", prob: 0.8 }, { token: "vanno", nextContext: "psic_37", prob: 0.2 }],
        "psic_37": [{ token: "dalla", nextContext: "psic_38", prob: 0.8 }, { token: "dal", nextContext: "end", prob: 0.2 }],
        "psic_38": [{ token: "terapia", nextContext: "psic_39", prob: 0.6 }, { token: "clinica", nextContext: "psic_39", prob: 0.3 }, { token: "magia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "psic_39": [{ token: "alla", nextContext: "psic_40", prob: 0.8 }, { token: "all'", nextContext: "psic_education", prob: 0.2 }],
        "psic_education": [{ token: "educazione", nextContext: "psic_40", prob: 1.0 }],
        "psic_40": [{ token: "ricerca", nextContext: "psic_41", prob: 0.6 }, { token: "neuropsicologia", nextContext: "end", prob: 0.3 }, { token: "telepatia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "psic_41": [{ token: "neuroscientifica", nextContext: "psic_42", prob: 0.8 }, { token: "avanzata", nextContext: "end", prob: 0.2 }],
        "psic_42": [{ token: "contribuendo", nextContext: "psic_43", prob: 0.8 }, { token: "aiutando", nextContext: "end", prob: 0.2 }],
        "psic_43": [{ token: "significativamente", nextContext: "psic_44", prob: 0.8 }, { token: "costantemente", nextContext: "end", prob: 0.2 }],
        "psic_44": [{ token: "al", nextContext: "psic_45", prob: 0.8 }, { token: "alla", nextContext: "end", prob: 0.2 }],
        "psic_45": [{ token: "benessere", nextContext: "psic_46", prob: 0.8 }, { token: "miglioramento", nextContext: "end", prob: 0.2 }],
        "psic_46": [{ token: "mentale", nextContext: "psic_47", prob: 0.8 }, { token: "e", nextContext: "end", prob: 0.2 }],
        "psic_47": [{ token: "e", nextContext: "psic_48", prob: 0.8 }, { token: "della", nextContext: "end", prob: 0.2 }],
        "psic_48": [{ token: "sociale", nextContext: "psic_49", prob: 0.8 }, { token: "emotivo", nextContext: "end", prob: 0.2 }],
        "psic_49": [{ token: "di", nextContext: "psic_50", prob: 0.8 }, { token: "delle", nextContext: "end", prob: 0.2 }],
        "psic_50": [{ token: "individui", nextContext: "psic_51", prob: 0.8 }, { token: "persone", nextContext: "end", prob: 0.2 }],
        "psic_51": [{ token: "e", nextContext: "psic_52", prob: 0.8 }, { token: "in", nextContext: "end", prob: 0.2 }],
        "psic_52": [{ token: "comunità", nextContext: "psic_53", prob: 0.8 }, { token: "società", nextContext: "end", prob: 0.2 }],
        "psic_53": [{ token: "in", nextContext: "psic_54", prob: 0.8 }, { token: "attraverso", nextContext: "end", prob: 0.2 }],
        "psic_54": [{ token: "tutto", nextContext: "psic_55", prob: 0.8 }, { token: "ogni", nextContext: "end", prob: 0.2 }],
        "psic_55": [{ token: "il", nextContext: "psic_56", prob: 0.9 }, { token: "lo", nextContext: "end", prob: 0.1 }],
        "psic_56": [{ token: "mondo", nextContext: "end", prob: 1.0 }],

        // 24. Economia
        "start_economy": [{ token: "L'", nextContext: "econ_1", prob: 0.8 }, { token: "Gli", nextContext: "econ_studies", prob: 0.2 }],
        "econ_studies": [{ token: "studi", nextContext: "econ_1", prob: 1.0 }],
        "econ_1": [{ token: "economia", nextContext: "econ_2", prob: 0.8 }, { token: "mercato", nextContext: "econ_market", prob: 0.1 }, { token: "alchimia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_market": [{ token: "globale", nextContext: "econ_2", prob: 1.0 }],
        "econ_2": [{ token: "moderna", nextContext: "econ_3", prob: 0.7 }, { token: "globale", nextContext: "econ_3", prob: 0.2 }, { token: "magica", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_3": [{ token: "è", nextContext: "econ_4", prob: 0.9 }, { token: "rappresenta", nextContext: "end", prob: 0.1 }],
        "econ_4": [{ token: "una", nextContext: "econ_5", prob: 0.8 }, { token: "la", nextContext: "econ_science", prob: 0.2 }],
        "econ_science": [{ token: "scienza", nextContext: "econ_6", prob: 1.0 }],
        "econ_5": [{ token: "scienza", nextContext: "econ_6", prob: 0.8 }, { token: "disciplina", nextContext: "econ_6", prob: 0.1 }, { token: "magia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_6": [{ token: "sociale", nextContext: "econ_7", prob: 0.8 }, { token: "complessa", nextContext: "econ_7", prob: 0.1 }, { token: "occulta", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_7": [{ token: "che", nextContext: "econ_8", prob: 0.9 }, { token: "e", nextContext: "end", prob: 0.1 }],
        "econ_8": [{ token: "studia", nextContext: "econ_9", prob: 0.8 }, { token: "analizza", nextContext: "econ_9", prob: 0.2 }],
        "econ_9": [{ token: "come", nextContext: "econ_10", prob: 0.8 }, { token: "il", nextContext: "econ_how", prob: 0.2 }],
        "econ_how": [{ token: "modo", nextContext: "econ_11", prob: 1.0 }],
        "econ_10": [{ token: "le", nextContext: "econ_11", prob: 0.8 }, { token: "gli", nextContext: "econ_individuals", prob: 0.2 }],
        "econ_individuals": [{ token: "individui", nextContext: "econ_12", prob: 1.0 }],
        "econ_11": [{ token: "società", nextContext: "econ_12", prob: 0.6 }, { token: "persone", nextContext: "econ_12", prob: 0.3 }, { token: "streghe", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_12": [{ token: "e", nextContext: "econ_13", prob: 0.8 }, { token: "allocano", nextContext: "econ_allocate", prob: 0.2 }],
        "econ_allocate": [{ token: "le", nextContext: "econ_14", prob: 1.0 }],
        "econ_13": [{ token: "le", nextContext: "econ_14", prob: 0.8 }, { token: "i", nextContext: "econ_governments", prob: 0.2 }],
        "econ_governments": [{ token: "governi", nextContext: "econ_15", prob: 1.0 }],
        "econ_14": [{ token: "organizzazioni", nextContext: "econ_15", prob: 0.6 }, { token: "risorse", nextContext: "econ_resources", prob: 0.3 }, { token: "pozioni", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_resources": [{ token: "scarse", nextContext: "econ_16", prob: 1.0 }],
        "econ_15": [{ token: "allocano", nextContext: "econ_16", prob: 0.8 }, { token: "gestiscono", nextContext: "econ_16", prob: 0.2 }],
        "econ_16": [{ token: "le", nextContext: "econ_17", prob: 0.9 }, { token: "i", nextContext: "end", prob: 0.1 }],
        "econ_17": [{ token: "risorse", nextContext: "econ_18", prob: 0.8 }, { token: "loro", nextContext: "econ_18", prob: 0.1 }, { token: "energie", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_18": [{ token: "limitate", nextContext: "econ_19", prob: 0.8 }, { token: "disponibili", nextContext: "econ_19", prob: 0.2 }],
        "econ_19": [{ token: "per", nextContext: "econ_20", prob: 0.9 }, { token: "attraverso", nextContext: "end", prob: 0.1 }],
        "econ_20": [{ token: "soddisfare", nextContext: "econ_21", prob: 0.8 }, { token: "massimizzare", nextContext: "econ_maximize", prob: 0.2 }],
        "econ_maximize": [{ token: "il", nextContext: "econ_22", prob: 1.0 }],
        "econ_21": [{ token: "bisogni", nextContext: "econ_22", prob: 0.6 }, { token: "desideri", nextContext: "econ_22", prob: 0.3 }, { token: "incantesimi", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_22": [{ token: "e", nextContext: "econ_23", prob: 0.8 }, { token: "benessere", nextContext: "econ_24", prob: 0.2 }],
        "econ_23": [{ token: "desideri", nextContext: "econ_24", prob: 0.7 }, { token: "aspirazioni", nextContext: "econ_24", prob: 0.2 }, { token: "sortilegi", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_24": [{ token: "umani", nextContext: "econ_25", prob: 0.8 }, { token: "individuali", nextContext: "econ_25", prob: 0.1 }, { token: "magici", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_25": [{ token: "attraverso", nextContext: "econ_26", prob: 0.8 }, { token: "mediante", nextContext: "econ_26", prob: 0.2 }],
        "econ_26": [{ token: "la", nextContext: "econ_27", prob: 0.8 }, { token: "sistemi", nextContext: "econ_systems", prob: 0.2 }],
        "econ_systems": [{ token: "di", nextContext: "econ_28", prob: 1.0 }],
        "econ_27": [{ token: "produzione", nextContext: "econ_28", prob: 0.6 }, { token: "distribuzione", nextContext: "econ_28", prob: 0.3 }, { token: "trasmutazione", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_28": [{ token: "e", nextContext: "econ_29", prob: 0.8 }, { token: "di", nextContext: "econ_30", prob: 0.2 }],
        "econ_29": [{ token: "distribuzione", nextContext: "econ_30", prob: 0.7 }, { token: "consumo", nextContext: "econ_30", prob: 0.2 }, { token: "evocazione", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_30": [{ token: "di", nextContext: "econ_31", prob: 0.9 }, { token: "che", nextContext: "end", prob: 0.1 }],
        "econ_31": [{ token: "beni", nextContext: "econ_32", prob: 0.8 }, { token: "ricchezza", nextContext: "econ_32", prob: 0.1 }, { token: "artefatti", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_32": [{ token: "e", nextContext: "econ_33", prob: 0.9 }, { token: "materiali", nextContext: "end", prob: 0.1 }],
        "econ_33": [{ token: "servizi", nextContext: "econ_34", prob: 0.8 }, { token: "capitale", nextContext: "econ_34", prob: 0.1 }, { token: "rituali", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_34": [{ token: "che", nextContext: "econ_35", prob: 0.8 }, { token: "in", nextContext: "econ_36", prob: 0.2 }],
        "econ_35": [{ token: "influenzano", nextContext: "econ_36", prob: 0.8 }, { token: "determinano", nextContext: "econ_36", prob: 0.2 }],
        "econ_36": [{ token: "profondamente", nextContext: "econ_37", prob: 0.8 }, { token: "significativamente", nextContext: "econ_37", prob: 0.2 }],
        "econ_37": [{ token: "la", nextContext: "econ_38", prob: 0.8 }, { token: "il", nextContext: "econ_welfare", prob: 0.2 }],
        "econ_welfare": [{ token: "benessere", nextContext: "econ_39", prob: 1.0 }],
        "econ_38": [{ token: "qualità", nextContext: "econ_39", prob: 0.6 }, { token: "prosperità", nextContext: "econ_39", prob: 0.3 }, { token: "magia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_39": [{ token: "di", nextContext: "econ_40", prob: 0.8 }, { token: "della", nextContext: "econ_40", prob: 0.2 }],
        "econ_40": [{ token: "vita", nextContext: "econ_41", prob: 0.8 }, { token: "società", nextContext: "econ_41", prob: 0.2 }],
        "econ_41": [{ token: "e", nextContext: "econ_42", prob: 0.8 }, { token: "di", nextContext: "econ_43", prob: 0.2 }],
        "econ_42": [{ token: "lo", nextContext: "econ_43", prob: 0.8 }, { token: "il", nextContext: "econ_43", prob: 0.2 }],
        "econ_43": [{ token: "sviluppo", nextContext: "econ_44", prob: 0.8 }, { token: "progresso", nextContext: "econ_44", prob: 0.2 }],
        "econ_44": [{ token: "sostenibile", nextContext: "econ_45", prob: 0.6 }, { token: "economico", nextContext: "econ_45", prob: 0.3 }, { token: "magico", nextContext: "end", prob: 0.1, isHallucination: true }],
        "econ_45": [{ token: "delle", nextContext: "econ_46", prob: 0.8 }, { token: "di", nextContext: "econ_47", prob: 0.2 }],
        "econ_46": [{ token: "nazioni", nextContext: "econ_47", prob: 0.8 }, { token: "comunità", nextContext: "econ_47", prob: 0.2 }],
        "econ_47": [{ token: "e", nextContext: "econ_48", prob: 0.8 }, { token: "in", nextContext: "econ_49", prob: 0.2 }],
        "econ_48": [{ token: "del", nextContext: "econ_49", prob: 0.8 }, { token: "dell'", nextContext: "econ_humanity", prob: 0.2 }],
        "econ_humanity": [{ token: "umanità", nextContext: "econ_50", prob: 1.0 }],
        "econ_49": [{ token: "mondo", nextContext: "econ_50", prob: 0.8 }, { token: "pianeta", nextContext: "econ_50", prob: 0.2 }],
        "econ_50": [{ token: "intero", nextContext: "end", prob: 0.8 }, { token: "in", nextContext: "end", prob: 0.2 }],

        // 25. Filosofia
        "start_philosophy": [{ token: "La", nextContext: "filo_1", prob: 0.9 }, { token: "Il", nextContext: "filo_thought", prob: 0.1 }],
        "filo_thought": [{ token: "pensiero", nextContext: "filo_2", prob: 1.0 }],
        "filo_1": [{ token: "filosofia", nextContext: "filo_2", prob: 0.8 }, { token: "saggezza", nextContext: "filo_2", prob: 0.1 }, { token: "telepatia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_2": [{ token: "è", nextContext: "filo_3", prob: 0.8 }, { token: "filosofico", nextContext: "filo_3", prob: 0.1 }, { token: "rappresenta", nextContext: "filo_3", prob: 0.1 }],
        "filo_3": [{ token: "l'", nextContext: "filo_4", prob: 0.7 }, { token: "una", nextContext: "filo_discipline", prob: 0.2 }, { token: "la", nextContext: "end", prob: 0.1 }],
        "filo_discipline": [{ token: "disciplina", nextContext: "filo_5", prob: 1.0 }],
        "filo_4": [{ token: "amore", nextContext: "filo_5", prob: 0.6 }, { token: "arte", nextContext: "filo_5", prob: 0.3 }, { token: "energia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_5": [{ token: "per", nextContext: "filo_6", prob: 0.7 }, { token: "che", nextContext: "filo_7", prob: 0.2 }, { token: "della", nextContext: "filo_6", prob: 0.1 }],
        "filo_6": [{ token: "la", nextContext: "filo_7", prob: 0.8 }, { token: "il", nextContext: "filo_knowledge", prob: 0.2 }],
        "filo_knowledge": [{ token: "sapere", nextContext: "filo_8", prob: 1.0 }],
        "filo_7": [{ token: "saggezza", nextContext: "filo_8", prob: 0.6 }, { token: "conoscenza", nextContext: "filo_8", prob: 0.3 }, { token: "magia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_8": [{ token: "e", nextContext: "filo_9", prob: 0.8 }, { token: "che", nextContext: "filo_10", prob: 0.2 }],
        "filo_9": [{ token: "la", nextContext: "filo_10", prob: 0.8 }, { token: "il", nextContext: "filo_search", prob: 0.2 }],
        "filo_search": [{ token: "ricerca", nextContext: "filo_11", prob: 1.0 }],
        "filo_10": [{ token: "ricerca", nextContext: "filo_11", prob: 0.6 }, { token: "comprensione", nextContext: "filo_11", prob: 0.3 }, { token: "divinazione", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_11": [{ token: "della", nextContext: "filo_12", prob: 0.8 }, { token: "di", nextContext: "filo_13", prob: 0.2 }],
        "filo_12": [{ token: "verità", nextContext: "filo_13", prob: 0.6 }, { token: "realtà", nextContext: "filo_13", prob: 0.3 }, { token: "profezia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_13": [{ token: "attraverso", nextContext: "filo_14", prob: 0.8 }, { token: "mediante", nextContext: "filo_14", prob: 0.2 }],
        "filo_14": [{ token: "il", nextContext: "filo_15", prob: 0.8 }, { token: "la", nextContext: "filo_reflection", prob: 0.2 }],
        "filo_reflection": [{ token: "riflessione", nextContext: "filo_16", prob: 1.0 }],
        "filo_15": [{ token: "ragionamento", nextContext: "filo_16", prob: 0.6 }, { token: "pensiero", nextContext: "filo_16", prob: 0.3 }, { token: "incantesimo", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_16": [{ token: "critico", nextContext: "filo_17", prob: 0.7 }, { token: "razionale", nextContext: "filo_17", prob: 0.2 }, { token: "magico", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_17": [{ token: "e", nextContext: "filo_18", prob: 0.8 }, { token: "che", nextContext: "filo_19", prob: 0.2 }],
        "filo_18": [{ token: "l'", nextContext: "filo_19", prob: 0.8 }, { token: "la", nextContext: "filo_analysis", prob: 0.2 }],
        "filo_analysis": [{ token: "analisi", nextContext: "filo_20", prob: 1.0 }],
        "filo_19": [{ token: "analisi", nextContext: "filo_20", prob: 0.6 }, { token: "argomentazione", nextContext: "filo_20", prob: 0.3 }, { token: "evocazione", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_20": [{ token: "sistematica", nextContext: "filo_21", prob: 0.7 }, { token: "logica", nextContext: "filo_21", prob: 0.2 }, { token: "astrale", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_21": [{ token: "di", nextContext: "filo_22", prob: 0.9 }, { token: "delle", nextContext: "end", prob: 0.1 }],
        "filo_22": [{ token: "concetti", nextContext: "filo_23", prob: 0.6 }, { token: "questioni", nextContext: "filo_23", prob: 0.3 }, { token: "spiriti", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_23": [{ token: "fondamentali", nextContext: "filo_24", prob: 0.8 }, { token: "universali", nextContext: "filo_24", prob: 0.1 }, { token: "soprannaturali", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_24": [{ token: "come", nextContext: "filo_25", prob: 0.8 }, { token: "quali", nextContext: "filo_25", prob: 0.2 }],
        "filo_25": [{ token: "l'", nextContext: "filo_26", prob: 0.6 }, { token: "la", nextContext: "filo_nature", prob: 0.3 }, { token: "il", nextContext: "end", prob: 0.1 }],
        "filo_nature": [{ token: "natura", nextContext: "filo_27", prob: 1.0 }],
        "filo_26": [{ token: "esistenza", nextContext: "filo_27", prob: 0.6 }, { token: "essere", nextContext: "filo_27", prob: 0.3 }, { token: "immortalità", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_27": [{ token: "la", nextContext: "filo_28", prob: 0.7 }, { token: "il", nextContext: "filo_knowledge2", prob: 0.2 }, { token: "dell'", nextContext: "end", prob: 0.1 }],
        "filo_knowledge2": [{ token: "sapere", nextContext: "filo_29", prob: 1.0 }],
        "filo_28": [{ token: "conoscenza", nextContext: "filo_29", prob: 0.6 }, { token: "realtà", nextContext: "filo_29", prob: 0.3 }, { token: "profezia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_29": [{ token: "la", nextContext: "filo_30", prob: 0.7 }, { token: "e", nextContext: "filo_31", prob: 0.2 }, { token: "il", nextContext: "end", prob: 0.1 }],
        "filo_30": [{ token: "moralità", nextContext: "filo_31", prob: 0.6 }, { token: "giustizia", nextContext: "filo_31", prob: 0.3 }, { token: "stregoneria", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_31": [{ token: "e", nextContext: "filo_32", prob: 0.8 }, { token: "che", nextContext: "filo_33", prob: 0.2 }],
        "filo_32": [{ token: "il", nextContext: "filo_33", prob: 0.7 }, { token: "la", nextContext: "filo_beauty", prob: 0.2 }, { token: "lo", nextContext: "end", prob: 0.1 }],
        "filo_beauty": [{ token: "bellezza", nextContext: "filo_34", prob: 1.0 }],
        "filo_33": [{ token: "significato", nextContext: "filo_34", prob: 0.6 }, { token: "senso", nextContext: "filo_34", prob: 0.3 }, { token: "potere", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_34": [{ token: "della", nextContext: "filo_35", prob: 0.8 }, { token: "di", nextContext: "filo_36", prob: 0.2 }],
        "filo_35": [{ token: "vita", nextContext: "filo_36", prob: 0.8 }, { token: "esistenza", nextContext: "filo_36", prob: 0.2 }],
        "filo_36": [{ token: "umana", nextContext: "filo_37", prob: 0.8 }, { token: "e", nextContext: "filo_38", prob: 0.2 }],
        "filo_37": [{ token: "e", nextContext: "filo_38", prob: 0.8 }, { token: "in", nextContext: "filo_39", prob: 0.2 }],
        "filo_38": [{ token: "del", nextContext: "filo_39", prob: 0.7 }, { token: "dell'", nextContext: "filo_universe", prob: 0.2 }, { token: "dello", nextContext: "end", prob: 0.1 }],
        "filo_universe": [{ token: "universo", nextContext: "filo_40", prob: 1.0 }],
        "filo_39": [{ token: "nostro", nextContext: "filo_40", prob: 0.7 }, { token: "mondo", nextContext: "filo_40", prob: 0.2 }, { token: "multiverso", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_40": [{ token: "posto", nextContext: "filo_41", prob: 0.6 }, { token: "ruolo", nextContext: "filo_41", prob: 0.3 }, { token: "destino", nextContext: "end", prob: 0.1 }],
        "filo_41": [{ token: "nell'", nextContext: "filo_42", prob: 0.8 }, { token: "nel", nextContext: "filo_cosmos", prob: 0.2 }],
        "filo_cosmos": [{ token: "cosmo", nextContext: "filo_43", prob: 1.0 }],
        "filo_42": [{ token: "universo", nextContext: "filo_43", prob: 0.8 }, { token: "esistenza", nextContext: "filo_43", prob: 0.2 }],
        "filo_43": [{ token: "attraverso", nextContext: "filo_44", prob: 0.8 }, { token: "mediante", nextContext: "filo_44", prob: 0.2 }],
        "filo_44": [{ token: "secoli", nextContext: "filo_45", prob: 0.6 }, { token: "millenni", nextContext: "filo_45", prob: 0.3 }, { token: "ere", nextContext: "end", prob: 0.1 }],
        "filo_45": [{ token: "di", nextContext: "filo_46", prob: 0.9 }, { token: "e", nextContext: "end", prob: 0.1 }],
        "filo_46": [{ token: "dibattito", nextContext: "filo_47", prob: 0.6 }, { token: "riflessione", nextContext: "filo_47", prob: 0.3 }, { token: "meditazione", nextContext: "end", prob: 0.1 }],
        "filo_47": [{ token: "intellettuale", nextContext: "filo_48", prob: 0.8 }, { token: "e", nextContext: "filo_49", prob: 0.2 }],
        "filo_48": [{ token: "e", nextContext: "filo_49", prob: 0.8 }, { token: "che", nextContext: "filo_50", prob: 0.2 }],
        "filo_49": [{ token: "spirituale", nextContext: "filo_50", prob: 0.6 }, { token: "morale", nextContext: "filo_50", prob: 0.3 }, { token: "astrale", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_50": [{ token: "che", nextContext: "filo_51", prob: 0.8 }, { token: "continuando", nextContext: "filo_52", prob: 0.2 }],
        "filo_51": [{ token: "continua", nextContext: "filo_52", prob: 0.8 }, { token: "persiste", nextContext: "filo_52", prob: 0.2 }],
        "filo_52": [{ token: "a", nextContext: "filo_53", prob: 0.9 }, { token: "ancora", nextContext: "end", prob: 0.1 }],
        "filo_53": [{ token: "influenzare", nextContext: "filo_54", prob: 0.7 }, { token: "guidare", nextContext: "filo_54", prob: 0.2 }, { token: "incantare", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_54": [{ token: "profondamente", nextContext: "filo_55", prob: 0.8 }, { token: "significativamente", nextContext: "filo_55", prob: 0.2 }],
        "filo_55": [{ token: "il", nextContext: "filo_56", prob: 0.8 }, { token: "la", nextContext: "filo_culture", prob: 0.2 }],
        "filo_culture": [{ token: "cultura", nextContext: "filo_57", prob: 1.0 }],
        "filo_56": [{ token: "pensiero", nextContext: "filo_57", prob: 0.6 }, { token: "modo", nextContext: "filo_57", prob: 0.3 }, { token: "destino", nextContext: "end", prob: 0.1 }],
        "filo_57": [{ token: "e", nextContext: "filo_58", prob: 0.8 }, { token: "umano", nextContext: "filo_59", prob: 0.2 }],
        "filo_58": [{ token: "la", nextContext: "filo_59", prob: 0.8 }, { token: "le", nextContext: "filo_actions", prob: 0.2 }],
        "filo_actions": [{ token: "azioni", nextContext: "filo_60", prob: 1.0 }],
        "filo_59": [{ token: "società", nextContext: "filo_60", prob: 0.6 }, { token: "civiltà", nextContext: "filo_60", prob: 0.3 }, { token: "magia", nextContext: "end", prob: 0.1, isHallucination: true }],
        "filo_60": [{ token: "umana", nextContext: "filo_61", prob: 0.8 }, { token: "contemporanea", nextContext: "filo_61", prob: 0.2 }],
        "filo_61": [{ token: "in", nextContext: "filo_62", prob: 0.8 }, { token: "di", nextContext: "filo_63", prob: 0.2 }],
        "filo_62": [{ token: "tutto", nextContext: "filo_63", prob: 0.8 }, { token: "ogni", nextContext: "filo_63", prob: 0.2 }],
        "filo_63": [{ token: "il", nextContext: "filo_64", prob: 0.9 }, { token: "lo", nextContext: "end", prob: 0.1 }],
        "filo_64": [{ token: "mondo", nextContext: "end", prob: 1.0 }],
    };

    // --- ELEMENTI DEL DOM ---
    const textContainer = document.getElementById('generated-text');
    const optionsContainer = document.getElementById('options-container');
    const tokenCountEl = document.getElementById('token-count');
    const avgConfidenceEl = document.getElementById('avg-confidence');
    const alternativePathsEl = document.getElementById('alternative-paths');
    const restartBtn = document.getElementById('restart-btn');
    const autoModeBtn = document.getElementById('auto-mode-btn');
    const hallucinationModal = document.getElementById('hallucination-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const modalOkBtn = document.getElementById('modal-ok-btn');
    const promptDescriptionEl = document.getElementById('prompt-description');

    // --- STATO DELLA SIMULAZIONE ---
    let state;

    function initState() {
        const randomStarter = starters[Math.floor(Math.random() * starters.length)];
        state = {
            currentContext: randomStarter.key,
            promptDescription: randomStarter.description,
            generatedText: "",
            tokenHistory: [],
            totalConfidence: 0,
            alternativePaths: 1,
            isAutoMode: false,
            autoModeInterval: null
        };
    }

    // --- FUNZIONI PRINCIPALI ---

    function render() {
        promptDescriptionEl.textContent = state.promptDescription;
        textContainer.textContent = state.generatedText;

        tokenCountEl.textContent = state.tokenHistory.length;
        const avgConfidence = state.tokenHistory.length > 0 ? (state.totalConfidence / state.tokenHistory.length * 100).toFixed(1) + '%' : 'N/A';
        avgConfidenceEl.textContent = avgConfidence;
        alternativePathsEl.textContent = state.alternativePaths.toLocaleString('it-IT');

        optionsContainer.innerHTML = '';
        
        const currentOptions = scenarios[state.currentContext];
        if (state.currentContext === "end" || !currentOptions) {
            optionsContainer.innerHTML = '<p class="end-message">Fine della sequenza. Riavvia la simulazione.</p>';
            if(state.isAutoMode) stopAutoMode();
            return;
        }

        currentOptions.forEach(option => {
            const optionEl = document.createElement('div');
            optionEl.className = 'token-option';
            if (option.isHallucination) {
                optionEl.classList.add('hallucination-potential');
            }
            
            optionEl.innerHTML = `
                <span class="token-text">"${option.token}"</span>
                <div class="probability-bar-bg">
                    <div class="probability-bar-fg" style="width: ${option.prob * 100}%;"></div>
                </div>
                <span class="probability-text">Probabilità: ${(option.prob * 100).toFixed(0)}%</span>
            `;

            optionEl.addEventListener('click', () => selectToken(option));
            optionsContainer.appendChild(optionEl);
        });
    }

    function selectToken(option) {
        if (state.isAutoMode && hallucinationModal.style.display === 'flex') {
            return;
        }

        const separator = state.generatedText && ![".", ",", "?", "!"].includes(option.token) ? ' ' : '';
        state.generatedText += separator + option.token;

        state.tokenHistory.push(option);
        const previousContext = state.currentContext;
        state.currentContext = option.nextContext;
        state.totalConfidence += option.prob;
        
        const numChoices = scenarios[previousContext]?.length || 1;
        if (numChoices > 1) {
            state.alternativePaths = (state.alternativePaths / numChoices) * (scenarios[state.currentContext]?.length || 1);
        } else {
            state.alternativePaths *= (scenarios[state.currentContext]?.length || 1);
        }

        if (option.isHallucination) {
            hallucinationModal.style.display = 'flex';
            if(state.isAutoMode) stopAutoMode();
        }

        render();
    }
    
    function weightedRandomSelect() {
        if (state.currentContext === "end" || !scenarios[state.currentContext]) {
            stopAutoMode();
            return;
        }

        const options = scenarios[state.currentContext];
        const rand = Math.random();
        let cumulativeProb = 0;

        for (const option of options) {
            cumulativeProb += option.prob;
            if (rand < cumulativeProb) {
                selectToken(option);
                return;
            }
        }
        if (options.length > 0) {
            selectToken(options[options.length - 1]);
        }
    }

    function startAutoMode() {
        if (state.currentContext === "end") return;
        state.isAutoMode = true;
        autoModeBtn.textContent = '⏸️ Pausa Auto-Mode';
        autoModeBtn.style.backgroundColor = '#e67e22';
        weightedRandomSelect();
        state.autoModeInterval = setInterval(weightedRandomSelect, 1500);
    }
    
    function stopAutoMode() {
        state.isAutoMode = false;
        autoModeBtn.textContent = '▶️ Avvia Auto-Mode';
        autoModeBtn.style.backgroundColor = 'var(--primary-color)';
        clearInterval(state.autoModeInterval);
    }

    function toggleAutoMode() {
        if (state.isAutoMode) {
            stopAutoMode();
        } else {
            startAutoMode();
        }
    }

    function restart() {
        stopAutoMode();
        initState();
        render();
    }

    // --- EVENT LISTENERS ---
    restartBtn.addEventListener('click', restart);
    autoModeBtn.addEventListener('click', toggleAutoMode);
    
    const closeModal = () => {
        hallucinationModal.style.display = 'none';
    };
    closeModalBtn.addEventListener('click', closeModal);
    modalOkBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === hallucinationModal) {
            closeModal();
        }
    });

    // --- INIZIALIZZAZIONE ---
    initState();
    render();
});