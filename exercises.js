// ============================================
// EXERCIȚII - Buchhaltung Teil 8: Steuern & Finanzamt (B1)
// Claudia Toth · 5 exerciții interactive
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}
function shuffleArr(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function checkTextItems(items, prefix) {
    let correct = 0;
    items.forEach(item => {
        const input = document.getElementById(`${prefix}-${item.id}`), fb = document.getElementById(`${prefix}-f${item.id}`);
        if (!input || !fb) return;
        const ua = normalizeAnswer(input.value);
        const valid = [item.answer, ...(item.accept || [])].map(normalizeAnswer);
        if (ua && valid.includes(ua)) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${item.answer}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${item.answer}`; }
    });
    return { correct, total: items.length };
}
const mcPicked = {};
function buildMC(prefix, items, instruction) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    let html = `<div class="exercise-instruction">${instruction}</div>`;
    items.forEach((item, idx) => {
        let opts = '';
        item.options.forEach((opt, oi) => { opts += `<div class="mistake-opt" onclick="mcPick('${prefix}','${item.id}',${oi},this)"><span class="mistake-opt-letter">${String.fromCharCode(65 + oi)}.</span> ${opt}</div>`; });
        html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.q}</label><div class="mistake-options" id="${prefix}-opts-${item.id}">${opts}</div></div><div class="feedback" id="${prefix}-f${item.id}"></div></div>`;
    });
    container.innerHTML = html;
}
function mcPick(prefix, itemId, optIdx, el) { mcPicked[prefix + '-' + itemId] = optIdx; const c = document.getElementById(`${prefix}-opts-${itemId}`); if (c) c.querySelectorAll('.mistake-opt').forEach(o => o.classList.remove('mistake-picked')); el.classList.add('mistake-picked'); }
function checkMC(prefix, items) {
    let correct = 0;
    items.forEach(item => {
        const fb = document.getElementById(`${prefix}-f${item.id}`);
        const pick = mcPicked[prefix + '-' + item.id], txt = item.options[item.correct];
        if (pick === item.correct) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${txt} — ${item.explanation}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${txt} — ${item.explanation}`; }
    });
    return { correct, total: items.length };
}
const dmState = {};
function buildClickMatch(prefix, pairs, instruction, deTitle, roTitle) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    dmState[prefix] = { matched: {}, selDE: null, selRO: null, pairs };
    const shuffledRO = shuffleArr(pairs.map(p => p.ro));
    let deHTML = ''; pairs.forEach(p => { deHTML += `<div class="dm-tile dm-de" data-de="${p.de}" onclick="dmClickDE('${prefix}',this)">${p.de}</div>`; });
    let roHTML = ''; shuffledRO.forEach(ro => { roHTML += `<div class="dm-tile dm-ro" data-ro="${ro}" onclick="dmClickRO('${prefix}',this)">${ro}</div>`; });
    container.innerHTML = `<div class="exercise-instruction">${instruction}</div>
        <div class="dm-board"><div class="dm-col"><div class="dm-col-title">${deTitle}</div>${deHTML}</div><div class="dm-col"><div class="dm-col-title">${roTitle}</div>${roHTML}</div></div>
        <div class="dm-status" id="${prefix}-status">Perechi formate: 0 / ${pairs.length}</div>`;
}
function dmClickDE(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-de`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selDE = el; dmTry(prefix); }
function dmClickRO(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-ro`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selRO = el; dmTry(prefix); }
function dmTry(prefix) {
    const s = dmState[prefix];
    if (!s.selDE || !s.selRO) return;
    const de = s.selDE.dataset.de, ro = s.selRO.dataset.ro;
    const pair = s.pairs.find(p => p.de === de);
    if (pair && pair.ro === ro) { s.selDE.classList.add('dm-correct'); s.selRO.classList.add('dm-correct'); s.selDE.classList.remove('dm-selected'); s.selRO.classList.remove('dm-selected'); s.matched[de] = ro; }
    else { const a = s.selDE, b = s.selRO; a.classList.add('dm-wrong'); b.classList.add('dm-wrong'); setTimeout(() => { a.classList.remove('dm-wrong', 'dm-selected'); b.classList.remove('dm-wrong', 'dm-selected'); }, 700); }
    s.selDE = null; s.selRO = null;
    const st = document.getElementById(`${prefix}-status`); if (st) st.textContent = `Perechi formate: ${Object.keys(s.matched).length} / ${s.pairs.length}`;
}

// ============================================
// EX1: Lückentext
// ============================================
const ex1Items = [
    { id: 'a', before: 'Im März mache ich meine', after: '. (declarația de impozit)', answer: 'Steuererklärung', accept: ['Steuererklaerung'] },
    { id: 'b', before: 'Das', after: 'prüft meine Erklärung. (fiscul)', answer: 'Finanzamt' },
    { id: 'c', before: 'Die Steuer auf das Gehalt heißt', after: '. (impozit pe venit)', answer: 'Einkommensteuer' },
    { id: 'd', before: 'Wenn ich zu viel gezahlt habe, bekomme ich eine', after: '. (rambursare)', answer: 'Erstattung' },
    { id: 'e', before: 'Wenn ich zu wenig gezahlt habe, gibt es eine', after: '. (plată suplimentară)', answer: 'Nachzahlung' },
    { id: 'f', before: 'Fahrtkosten kann ich von der Steuer', after: '. (a deduce)', answer: 'absetzen' },
    { id: 'g', before: 'Fahrtkosten und Arbeitskleidung sind', after: '. (cheltuieli profesionale)', answer: 'Werbungskosten' },
    { id: 'h', before: 'Die', after: 'für die Erklärung ist der 31. Juli. (termenul)', answer: 'Frist' },
    { id: 'i', before: 'Nach der Prüfung kommt der', after: '. (decizia de impunere)', answer: 'Steuerbescheid' },
    { id: 'j', before: 'Wenn es kompliziert ist, hilft mir ein', after: '. (consilier fiscal)', answer: 'Steuerberater' }
];
function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>✍️ Completează cu cuvântul potrivit.</strong><br>Cuvinte: <em>Steuererklärung · Finanzamt · Einkommensteuer · Erstattung · Nachzahlung · absetzen · Werbungskosten · Frist · Steuerbescheid · Steuerberater</em></div>`;
    ex1Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.before} <input type="text" id="ex1-${item.id}" placeholder="..." style="width:170px;display:inline-block;"> ${item.after}</label></div><div class="feedback" id="ex1-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx1() { return checkTextItems(ex1Items, 'ex1'); }
function resetEx1() { buildEx1(); const s = document.getElementById('score-1'); if (s) s.textContent = ''; }

// ============================================
// EX2: Multiple Choice
// ============================================
const ex2Items = [
    { id: 'a', q: 'Was ist „die Steuererklärung"?', options: ['o factură', 'declarația anuală de impozit', 'un salariu'], correct: 1, explanation: 'die Steuererklärung = declarația de impozit depusă la fisc.' },
    { id: 'b', q: 'Was bedeutet „die Erstattung"?', options: ['mai ai de plătit', 'primești bani înapoi', 'o amendă'], correct: 1, explanation: 'die (Steuer-)Erstattung = rambursare, primești bani înapoi.' },
    { id: 'c', q: 'Was ist „die Nachzahlung"?', options: ['o rambursare', 'mai ai de plătit la fisc', 'o reducere'], correct: 1, explanation: 'die Nachzahlung = plată suplimentară (ai plătit prea puțin).' },
    { id: 'd', q: 'Was sind „Werbungskosten"?', options: ['costuri de publicitate la TV', 'cheltuieli profesionale deductibile', 'TVA'], correct: 1, explanation: 'Werbungskosten = cheltuieli legate de muncă (drum, cursuri) — deductibile.' },
    { id: 'e', q: 'Wer hilft bei einer komplizierten Steuererklärung?', options: ['der Steuerberater', 'der Kellner', 'der Arzt'], correct: 0, explanation: 'der Steuerberater = consilierul fiscal.' }
];
function buildEx2() { buildMC('ex2', ex2Items, '<strong>🎯 Alege varianta corectă.</strong>'); }
function checkEx2() { return checkMC('ex2', ex2Items); }
function resetEx2() { ex2Items.forEach(i => delete mcPicked['ex2-' + i.id]); buildEx2(); const s = document.getElementById('score-2'); if (s) s.textContent = ''; }

// ============================================
// EX3: Match vocabular DE ↔ RO
// ============================================
const ex3Pairs = [
    { de: 'die Steuererklärung', ro: 'declarația de impozit' },
    { de: 'die Einkommensteuer', ro: 'impozitul pe venit' },
    { de: 'die Umsatzsteuer', ro: 'TVA' },
    { de: 'der Steuerbescheid', ro: 'decizia de impunere' },
    { de: 'die Steuererstattung', ro: 'rambursarea de impozit' },
    { de: 'die Nachzahlung', ro: 'plata suplimentară' },
    { de: 'die Werbungskosten', ro: 'cheltuieli profesionale' },
    { de: 'der Freibetrag', ro: 'suma neimpozabilă' },
    { de: 'das Finanzamt', ro: 'fiscul' },
    { de: 'der Steuerberater', ro: 'consilierul fiscal' }
];
function buildEx3() { buildClickMatch('ex3', ex3Pairs, '<strong>🔗 Potrivește termenul cu traducerea.</strong><br>Click pe cuvântul german, apoi pe traducerea corectă.', '🇩🇪 Begriff', '🇷🇴 Traducere'); }
function checkEx3() { const s = dmState['ex3']; return { correct: Object.keys(s.matched).length, total: ex3Pairs.length }; }
function resetEx3() { buildEx3(); const s = document.getElementById('score-3'); if (s) s.textContent = ''; }

// ============================================
// EX4: Traduceri RO → DE
// ============================================
const ex4Items = [
    { id: 'a', q: 'Trebuie să fac o declarație de impozit?', answer: 'Muss ich eine Steuererklärung machen?', accept: ['Muss ich eine Steuererklaerung machen?'] },
    { id: 'b', q: 'Ce pot deduce din impozit?', answer: 'Was kann ich von der Steuer absetzen?' },
    { id: 'c', q: 'Până când este termenul?', answer: 'Bis wann ist die Frist?' },
    { id: 'd', q: 'Am primit decizia de impunere.', answer: 'Ich habe den Steuerbescheid erhalten.' },
    { id: 'e', q: 'Primesc o rambursare?', answer: 'Bekomme ich eine Erstattung?' },
    { id: 'f', q: 'Există o plată suplimentară?', answer: 'Gibt es eine Nachzahlung?' },
    { id: 'g', q: 'Am nevoie de un consilier fiscal.', answer: 'Ich brauche einen Steuerberater.' },
    { id: 'h', q: 'Costurile de drum sunt cheltuieli profesionale.', answer: 'Fahrtkosten sind Werbungskosten.' }
];
function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>🇷🇴→🇩🇪 Tradu în germană.</strong><br>Scrie propoziția în germană. (Diferențele mici de topică/articol sunt acceptate; punctul final e opțional — compară cu varianta-model.)</div>`;
    ex4Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>🇷🇴 ${item.q}</label><input type="text" id="ex4-${item.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex4-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx4() { return checkTextItems(ex4Items, 'ex4'); }
function resetEx4() { buildEx4(); const s = document.getElementById('score-4'); if (s) s.textContent = ''; }

// ============================================
// EX5: Potrivește situația cu expresia-cheie
// ============================================
const ex5Pairs = [
    { de: 'Muss ich eine Steuererklärung machen?', ro: 'Nu știi dacă e obligatoriu' },
    { de: 'Was kann ich absetzen?', ro: 'Vrei să plătești mai puțin impozit' },
    { de: 'Bekomme ich eine Erstattung?', ro: 'Speri să primești bani înapoi' },
    { de: 'Gibt es eine Nachzahlung?', ro: 'Te temi că mai ai de plătit' },
    { de: 'Ich brauche einen Steuerberater.', ro: 'E prea complicat singur' }
];
function buildEx5() { buildClickMatch('ex5', ex5Pairs, '<strong>🎭 Potrivește expresia cu situația.</strong><br>Click pe expresia germană, apoi pe situația potrivită.', '🇩🇪 Expresie', '📋 Situație'); }
function checkEx5() { const s = dmState['ex5']; return { correct: Object.keys(s.matched).length, total: ex5Pairs.length }; }
function resetEx5() { buildEx5(); const s = document.getElementById('score-5'); if (s) s.textContent = ''; }

document.addEventListener('DOMContentLoaded', function () { buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); });
