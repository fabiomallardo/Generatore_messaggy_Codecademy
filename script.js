// Funzione per generare un messaggio di scuse casuale
const generaMessaggio = () => {
    // Array di frasi
    const introduzioni = [
        "Mi scusi",
        "Vorrei porgere le mie più sincere scuse...",
        "Mi dispiace davvero...",
        "Perdonami per...",
        "Houston, abbiamo un problema... E il problema sono io! Scusa!"
    ];

    const motivi = [
        "aver dimenticato il tuo compleanno.",
        "aver fatto tardi all'appuntamento.",
        "non aver risposto subito al tuo messaggio.",
        "essermi dimenticato di portarti quello che ti avevo promesso."
    ];

    const promesse = [
        "Se vuoi, possiamo parlarne e chiarire tutto.",
        "Posso offrirti un caffè per farmi perdonare?",
        "Per farmi perdonare, la prossima cena è a carico mio!",
        "Ti prometto che non succederà più!"
    ];

    // Selezione casuale di un elemento da ogni array
    const introCasuale = introduzioni[Math.floor(Math.random() * introduzioni.length)];
    const motivoCasuale = motivi[Math.floor(Math.random() * motivi.length)];
    const promessaCasuale = promesse[Math.floor(Math.random() * promesse.length)];

    // Creazione del messaggio finale
    return `${introCasuale} ${motivoCasuale} ${promessaCasuale}`;
};

// Test della funzione
console.log(generaMessaggio());
