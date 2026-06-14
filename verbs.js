// ============================================
// VERB-KONJUGATION - Buchhaltung Teil 8 (B1)
// Claudia Toth · verbe pentru impozite/fisc · PONS-verified
// Präteritum = IMPERFECT. Perfekt = timp vorbit.
// ============================================

const verbsData = [
    {
        infinitiv: 'absetzen', ro: 'a deduce (din impozit)', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'setze ... ab', ro: 'deduc' },
            { p: 'du', f: 'setzt ... ab', ro: 'deduci' },
            { p: 'er/sie/es', f: 'setzt ... ab', ro: 'deduce' },
            { p: 'wir', f: 'setzen ... ab', ro: 'deducem' },
            { p: 'ihr', f: 'setzt ... ab', ro: 'deduceți' },
            { p: 'sie/Sie', f: 'setzen ... ab', ro: 'deduc / deduceți' }
        ],
        praeteritum: [
            { p: 'ich', f: 'setzte ... ab', ro: 'deduceam' },
            { p: 'du', f: 'setztest ... ab', ro: 'deduceai' },
            { p: 'er/sie/es', f: 'setzte ... ab', ro: 'deducea' },
            { p: 'wir', f: 'setzten ... ab', ro: 'deduceam (noi)' },
            { p: 'ihr', f: 'setztet ... ab', ro: 'deduceați' },
            { p: 'sie/Sie', f: 'setzten ... ab', ro: 'deduceau' }
        ],
        perfekt: 'ich habe die Fahrtkosten abgesetzt', perfektRo: 'am dedus costurile de drum',
        notes: 'Verb regulat SEPARABIL (ab-): prefixul pleacă la sfârșit (Ich setze die Kosten ab). Perfekt cu „-ge-": ab-ge-setzt. „etwas von der Steuer absetzen" = a deduce din impozit.'
    },
    {
        infinitiv: 'erstatten', ro: 'a rambursa / a restitui', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'erstatte', ro: 'rambursez' },
            { p: 'du', f: 'erstattest', ro: 'rambursezi' },
            { p: 'er/sie/es', f: 'erstattet', ro: 'rambursează' },
            { p: 'wir', f: 'erstatten', ro: 'rambursăm' },
            { p: 'ihr', f: 'erstattet', ro: 'rambursați' },
            { p: 'sie/Sie', f: 'erstatten', ro: 'rambursează / rambursați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'erstattete', ro: 'rambursam' },
            { p: 'du', f: 'erstattetest', ro: 'rambursai' },
            { p: 'er/sie/es', f: 'erstattete', ro: 'rambursa' },
            { p: 'wir', f: 'erstatteten', ro: 'rambursam (noi)' },
            { p: 'ihr', f: 'erstattetet', ro: 'rambursați' },
            { p: 'sie/Sie', f: 'erstatteten', ro: 'rambursau' }
        ],
        perfekt: 'das Finanzamt hat die Steuer erstattet', perfektRo: 'fiscul a rambursat impozitul',
        notes: 'Verb regulat cu prefix NEseparabil er- → Perfekt FĂRĂ „ge-": erstattet. „jemandem etwas erstatten" = a-i restitui cuiva ceva. Substantiv înrudit: die Erstattung.'
    },
    {
        infinitiv: 'abgeben', ro: 'a depune / a preda', type: 'strong', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'gebe ... ab', ro: 'depun' },
            { p: 'du', f: 'gibst ... ab', ro: 'depui' },
            { p: 'er/sie/es', f: 'gibt ... ab', ro: 'depune' },
            { p: 'wir', f: 'geben ... ab', ro: 'depunem' },
            { p: 'ihr', f: 'gebt ... ab', ro: 'depuneți' },
            { p: 'sie/Sie', f: 'geben ... ab', ro: 'depun / depuneți' }
        ],
        praeteritum: [
            { p: 'ich', f: 'gab ... ab', ro: 'depuneam' },
            { p: 'du', f: 'gabst ... ab', ro: 'depuneai' },
            { p: 'er/sie/es', f: 'gab ... ab', ro: 'depunea' },
            { p: 'wir', f: 'gaben ... ab', ro: 'depuneam (noi)' },
            { p: 'ihr', f: 'gabt ... ab', ro: 'depuneați' },
            { p: 'sie/Sie', f: 'gaben ... ab', ro: 'depuneau' }
        ],
        perfekt: 'ich habe die Steuererklärung abgegeben', perfektRo: 'am depus declarația de impozit',
        notes: 'Verb TARE SEPARABIL (ab- + geben→gab→gegeben). Atenție la schimbarea vocalei la Präsens: du gibst ab, er gibt ab (e→i). Perfekt cu „-ge-": ab-ge-geben.'
    },
    {
        infinitiv: 'nachzahlen', ro: 'a plăti suplimentar', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'zahle ... nach', ro: 'plătesc suplimentar' },
            { p: 'du', f: 'zahlst ... nach', ro: 'plătești suplimentar' },
            { p: 'er/sie/es', f: 'zahlt ... nach', ro: 'plătește suplimentar' },
            { p: 'wir', f: 'zahlen ... nach', ro: 'plătim suplimentar' },
            { p: 'ihr', f: 'zahlt ... nach', ro: 'plătiți suplimentar' },
            { p: 'sie/Sie', f: 'zahlen ... nach', ro: 'plătesc / plătiți suplimentar' }
        ],
        praeteritum: [
            { p: 'ich', f: 'zahlte ... nach', ro: 'plăteam suplimentar' },
            { p: 'du', f: 'zahltest ... nach', ro: 'plăteai suplimentar' },
            { p: 'er/sie/es', f: 'zahlte ... nach', ro: 'plătea suplimentar' },
            { p: 'wir', f: 'zahlten ... nach', ro: 'plăteam (noi)' },
            { p: 'ihr', f: 'zahltet ... nach', ro: 'plăteați suplimentar' },
            { p: 'sie/Sie', f: 'zahlten ... nach', ro: 'plăteau suplimentar' }
        ],
        perfekt: 'ich habe 200 Euro nachgezahlt', perfektRo: 'am plătit suplimentar 200 de euro',
        notes: 'Verb regulat SEPARABIL (nach-): prefixul pleacă la sfârșit (Ich zahle 200 Euro nach). Perfekt cu „-ge-": nach-ge-zahlt. Substantiv înrudit: die Nachzahlung.'
    },
    {
        infinitiv: 'erhalten', ro: 'a primi', type: 'strong', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'erhalte', ro: 'primesc' },
            { p: 'du', f: 'erhältst', ro: 'primești' },
            { p: 'er/sie/es', f: 'erhält', ro: 'primește' },
            { p: 'wir', f: 'erhalten', ro: 'primim' },
            { p: 'ihr', f: 'erhaltet', ro: 'primiți' },
            { p: 'sie/Sie', f: 'erhalten', ro: 'primesc / primiți' }
        ],
        praeteritum: [
            { p: 'ich', f: 'erhielt', ro: 'primeam' },
            { p: 'du', f: 'erhielst', ro: 'primeai' },
            { p: 'er/sie/es', f: 'erhielt', ro: 'primea' },
            { p: 'wir', f: 'erhielten', ro: 'primeam (noi)' },
            { p: 'ihr', f: 'erhieltet', ro: 'primeați' },
            { p: 'sie/Sie', f: 'erhielten', ro: 'primeau' }
        ],
        perfekt: 'ich habe den Steuerbescheid erhalten', perfektRo: 'am primit decizia de impunere',
        notes: 'Verb TARE (erhielt) cu prefix NEseparabil er- → Perfekt FĂRĂ „ge-": erhalten. Atenție la Umlaut în Präsens: du erhältst, er erhält (a→ä). Mai formal decât „bekommen".'
    }
];

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = `
        <div class="theory-box" style="background:#F5F0E8;border-left:4px solid #D4A574">
            <h4>📌 Verbe pentru impozite și fisc</h4>
            <p>Atenție la prefixe: <strong>absetzen</strong>, <strong>abgeben</strong> și <strong>nachzahlen</strong> sunt separabile → „-ge-" la mijloc. <strong>erstatten</strong> și <strong>erhalten</strong> au prefix neseparabil er- → Perfekt FĂRĂ „ge-". <strong>abgeben</strong> (e→i) și <strong>erhalten</strong> (a→ä) sunt și tari, cu schimbare de vocală la Präsens.</p>
            <p style="margin-top:8px"><strong>Reamintire:</strong> Präteritum = IMPERFECT (deducea, primea). Perfekt = perfect compus (a dedus, a primit).</p>
        </div>
    `;
    verbsData.forEach((v, idx) => {
        const auxColor = v.aux === 'sein' ? '#D4A574' : '#10b981';
        const typeColor = v.type === 'strong' ? '#dc2626' : '#10b981';
        const typeLabel = v.type === 'strong' ? 'TARE (neregulat)' : 'REGULAT';
        let praesensRows = ''; v.praesens.forEach(r => { praesensRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        let praeteritumRows = ''; v.praeteritum.forEach(r => { praeteritumRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        html += `
            <div class="sub-section">
                <div class="sub-section-header" onclick="toggleSubSection(${idx + 100})">
                    <span><strong>${idx + 1}. ${v.infinitiv}</strong> — <em>${v.ro}</em>
                        <span style="background:${typeColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:8px">${typeLabel}</span>
                        <span style="background:${auxColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:4px">Perfekt + ${v.aux}</span>
                    </span>
                    <span class="sub-arrow">▼</span>
                </div>
                <div class="sub-section-content" id="sub-section-${idx + 100}">
                    <h4 style="color:#065f46;margin-bottom:8px">📘 Präsens</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praesensRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📗 Präteritum (imperfect / timp scris)</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praeteritumRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📕 Perfekt (timp vorbit)</h4>
                    <div class="example-box"><div class="de">${v.perfekt}</div><div class="ro">${v.perfektRo}</div></div>
                    <div class="theory-box" style="margin-top:12px;background:#FBF7EF"><p><strong>📌 Notă:</strong> ${v.notes}</p></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

buildVerbs();
