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
        "vol_6": [{ token: "risale", nextContext: "end", prob: 0.6 }, { token: "fuoriesce", nextContext: "end", prob: 0.2 }, { token: "si", nextContext: "end", prob: 0.2 }],
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