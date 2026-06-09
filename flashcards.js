// ============================================
// FLASHCARDS - Buchhaltung Teil 8: Steuern & Finanzamt (B1)
// Claudia Toth · 32 carduri cu TTS · substantive Sg·Pl
// ============================================

const flashcardsData = [
    { de: "die Steuer · die Steuern", ro: "impozitul / taxa · impozitele" },
    { de: "die Steuererklärung · die Steuererklärungen", ro: "declarația de impozit · ..." },
    { de: "die Einkommensteuer", ro: "impozitul pe venit (de obicei Sg.)" },
    { de: "die Umsatzsteuer", ro: "TVA / impozitul pe cifra de afaceri (de obicei Sg.)" },
    { de: "die Lohnsteuer", ro: "impozitul pe salariu (de obicei Sg.)" },
    { de: "der Steuerbescheid · die Steuerbescheide", ro: "decizia de impunere · ..." },
    { de: "der Steuerberater · die Steuerberater", ro: "consilierul fiscal · ... (f: die Steuerberaterin)" },
    { de: "das Finanzamt · die Finanzämter", ro: "fiscul / administrația financiară · ... (Umlaut a→ä)" },
    { de: "die Steuererstattung · die Steuererstattungen", ro: "rambursarea de impozit · ..." },
    { de: "die Nachzahlung · die Nachzahlungen", ro: "plata suplimentară · ..." },
    { de: "die Frist · die Fristen", ro: "termenul · termenele" },
    { de: "die Steuer-ID · die Steuer-IDs", ro: "codul fiscal personal · ..." },
    { de: "die Steuerklasse · die Steuerklassen", ro: "clasa de impozitare · ..." },
    { de: "der Freibetrag · die Freibeträge", ro: "suma neimpozabilă · ... (Umlaut a→ä)" },
    { de: "die Werbungskosten", ro: "cheltuielile profesionale deductibile (numai plural)" },
    { de: "die Fahrtkosten", ro: "costurile de drum (numai plural)" },
    { de: "die Fortbildung · die Fortbildungen", ro: "perfecționarea / cursul · ..." },
    { de: "der Beleg · die Belege", ro: "documentul justificativ · ..." },
    { de: "das Einkommen · die Einkommen", ro: "venitul · veniturile" },
    { de: "die Arbeitskleidung", ro: "îmbrăcămintea de lucru (de obicei Sg.)" },
    { de: "die Erstattung / die Nachzahlung", ro: "rambursare / plată suplimentară" },
    { de: "kompliziert", ro: "complicat" },
    { de: "absetzen", ro: "a deduce (din impozit)" },
    { de: "erstatten", ro: "a rambursa / a restitui" },
    { de: "abgeben", ro: "a depune / a preda (declarația)" },
    { de: "nachzahlen", ro: "a plăti suplimentar" },
    { de: "erhalten", ro: "a primi (decizia/banii)" },
    { de: "Steuern zahlen", ro: "a plăti impozite" },
    { de: "von der Steuer absetzen", ro: "a deduce din impozit" },
    { de: "Geld zurückbekommen", ro: "a primi bani înapoi" },
    { de: "Muss ich eine Steuererklärung machen?", ro: "Trebuie să fac o declarație de impozit?" },
    { de: "Bekomme ich eine Erstattung?", ro: "Primesc o rambursare?" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri: vocabularul impozitelor și al fiscului.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană automată.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}
function updateFlashcard() {
    const card = document.getElementById('flashcard'), de = document.getElementById('flashcard-de'), ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter'), prevBtn = document.getElementById('prev-btn'), nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de; ro.textContent = c.ro; card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}
function flipCard() { const card = document.getElementById('flashcard'); if (card) card.classList.toggle('flipped'); }
function nextCard() { if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); } }
function prevCard() { if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); } }
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(card.de); u.lang = 'de-DE'; u.rate = 0.85; window.speechSynthesis.speak(u); }
    else { alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.'); }
}
document.addEventListener('DOMContentLoaded', function() { buildFlashcards(); });
