// ============================================
// TEORIE - Buchhaltung Teil 8: Steuern & Finanzamt (B1)
// Claudia Toth · germană pentru impozite și fisc
// Sursă: extindere PONS-verified pe seria Buchhaltung & Finanzen
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Impozite și fisc (Steuern & Finanzamt)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">Azi învățăm despre <strong>impozite</strong>: ce e declarația de impozit (Steuererklärung), ce tipuri de impozite există (Einkommensteuer, Umsatzsteuer), ce e decizia de impunere (Steuerbescheid) și diferența dintre o <strong>rambursare</strong> (Erstattung) și o <strong>plată suplimentară</strong> (Nachzahlung). La final ascult un dialog real cu Frau Vogel, consiliera fiscală (Steuerberaterin).</div>
                </div>
            </div>
            <div class="theory-box" style="background:#fef3c7;border-color:#f59e0b;">
                <h4>✍️ Notă despre diacritice (ä, ö, ü, ß)</h4>
                <p>Verificarea e blândă: poți scrie Umlaut-urile corect (<em>die Steuererklärung, der Freibetrag, die Finanzämter</em>) sau cu varianta de înlocuire (<em>Steuererklaerung, Freibetrag</em>). Ambele sunt acceptate. La fel, punctul de la finalul propoziției e opțional.</p>
            </div>
        </div>
    </div>

    <!-- 1: Vocabular -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📋 2. Vocabular: impozite și fisc (Grundwortschatz)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-vocabular.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box" style="background:#fef3c7;border-color:#f59e0b;">
                <h4>🚨 Substantivele se învață ÎNTOTDEAUNA cu pluralul</h4>
                <p>În germană pluralul e imprevizibil (-e, -en, Umlaut sau identic). De aceea fiecare substantiv apare aici la <strong>singular · plural</strong>. Învață-le împreună, ca pe o pereche.</p>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO</th><th>Exemplu (DE)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">die Steuer</td><td class="verb">die Steuern</td><td>impozitul / taxa · impozitele</td><td><em>Ich zahle jeden Monat Steuern.</em></td></tr>
                    <tr><td class="verb">die Steuererklärung</td><td class="verb">die Steuererklärungen</td><td>declarația de impozit · ...</td><td><em>Ich mache die Steuererklärung im März.</em></td></tr>
                    <tr><td class="verb">die Einkommensteuer</td><td class="verb">— (de obicei Sg.)</td><td>impozitul pe venit</td><td><em>Die Einkommensteuer hängt vom Gehalt ab.</em></td></tr>
                    <tr><td class="verb">die Umsatzsteuer</td><td class="verb">— (de obicei Sg.)</td><td>TVA (impozitul pe cifra de afaceri)</td><td><em>Die Umsatzsteuer ist 19 Prozent.</em></td></tr>
                    <tr><td class="verb">der Steuerbescheid</td><td class="verb">die Steuerbescheide</td><td>decizia de impunere · ...</td><td><em>Der Steuerbescheid kommt nach ein paar Wochen.</em></td></tr>
                    <tr><td class="verb">der Steuerberater / die Steuerberaterin</td><td class="verb">die Steuerberater / die Steuerberaterinnen</td><td>consilierul fiscal · ...</td><td><em>Der Steuerberater hilft bei der Erklärung.</em></td></tr>
                    <tr><td class="verb">das Finanzamt</td><td class="verb">die Finanzämter</td><td>administrația financiară (fiscul) · ... (Umlaut a→ä)</td><td><em>Das Finanzamt prüft die Steuererklärung.</em></td></tr>
                    <tr><td class="verb">die Steuererstattung</td><td class="verb">die Steuererstattungen</td><td>rambursarea de impozit · ...</td><td><em>Ich bekomme eine Steuererstattung.</em></td></tr>
                    <tr><td class="verb">die Nachzahlung</td><td class="verb">die Nachzahlungen</td><td>plata suplimentară · ...</td><td><em>Leider gibt es eine Nachzahlung.</em></td></tr>
                    <tr><td class="verb">die Frist</td><td class="verb">die Fristen</td><td>termenul · termenele</td><td><em>Die Frist ist der 31. Juli.</em></td></tr>
                    <tr><td class="verb">die Steuer-ID</td><td class="verb">die Steuer-IDs</td><td>codul fiscal personal · ...</td><td><em>Geben Sie bitte Ihre Steuer-ID an.</em></td></tr>
                    <tr><td class="verb">die Steuerklasse</td><td class="verb">die Steuerklassen</td><td>clasa de impozitare · ...</td><td><em>Ich habe Steuerklasse 1.</em></td></tr>
                    <tr><td class="verb">der Freibetrag</td><td class="verb">die Freibeträge</td><td>suma neimpozabilă · ... (Umlaut a→ä)</td><td><em>Bis zum Freibetrag zahlt man keine Steuer.</em></td></tr>
                    <tr><td class="verb">die Werbungskosten</td><td class="verb">— (numai Pl.)</td><td>cheltuielile profesionale deductibile (numai plural)</td><td><em>Fahrtkosten sind Werbungskosten.</em></td></tr>
                    <tr><td class="verb">der Beleg</td><td class="verb">die Belege</td><td>documentul justificativ · ...</td><td><em>Für jede Ausgabe brauche ich einen Beleg.</em></td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 2: Erstattung vs Nachzahlung + tipuri -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>⚖️ 3. Erstattung sau Nachzahlung? · Tipuri de impozite</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-erstattung.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box" style="background:#f0fdf4;">
                <h4>💡 Ce scrie în Steuerbescheid</h4>
                <p>După ce trimiți Steuererklärung, primești un <strong>Steuerbescheid</strong> (decizia de impunere). Acolo scrie unul din două lucruri:<br>
                ✅ <strong>Erstattung</strong> = primești bani înapoi (ai plătit prea mult).<br>
                ⚠️ <strong>Nachzahlung</strong> = mai ai de plătit (ai plătit prea puțin).</p>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Termen (DE)</th><th>Ce înseamnă (RO)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">die Einkommensteuer</td><td>impozitul pe venit (din salariu, profit)</td></tr>
                    <tr><td class="verb">die Lohnsteuer</td><td>impozitul pe salariu (forma de Einkommensteuer pentru angajați)</td></tr>
                    <tr><td class="verb">die Umsatzsteuer / Mehrwertsteuer</td><td>TVA (la cumpărături, 19% sau 7%)</td></tr>
                    <tr><td class="verb">die Steuererstattung</td><td>rambursare — bani înapoi de la fisc</td></tr>
                    <tr><td class="verb">die Nachzahlung</td><td>plată suplimentară — mai datorezi bani</td></tr>
                    <tr><td class="verb">der Freibetrag</td><td>suma până la care NU plătești impozit</td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Vestea bună: foarte mulți angajați primesc <strong>Erstattung</strong> (bani înapoi) dacă fac Steuererklärung! Poți <strong>deduce</strong> (absetzen) multe cheltuieli: drumul la muncă (Fahrtkosten), cursuri, haine de lucru — acelea sunt <strong>Werbungskosten</strong>. Păstrează <strong>Belege</strong> pentru tot. Un <strong>Steuerberater</strong> te poate ajuta dacă e complicat. 💚</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Situații practice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎭 4. Situații practice (la fisc & la consilier)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-situatii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box"><h4>📝 Trebuie să fac declarația? — Muss ich eine Steuererklärung machen?</h4>
                <p class="de"><em>„Muss ich eine Steuererklärung machen?" — „Nicht immer Pflicht, aber oft lohnt es sich — Sie bekommen Geld zurück."</em></p>
                <p class="ro">Expresii: <strong>eine Steuererklärung machen</strong> (a face declarația) · <strong>es lohnt sich</strong> (merită) · <strong>Geld zurückbekommen</strong> (a primi bani înapoi)</p>
            </div>
            <div class="theory-box"><h4>📉 Ce pot deduce? — Was kann ich absetzen?</h4>
                <p class="de"><em>„Was kann ich von der Steuer absetzen?" — „Fahrtkosten, Arbeitskleidung und Fortbildungen — das sind Werbungskosten."</em></p>
                <p class="ro">Expresii: <strong>von der Steuer absetzen</strong> (a deduce din impozit) · <strong>die Werbungskosten</strong> (cheltuieli profesionale) · <strong>die Fortbildung</strong> (perfecționarea)</p>
            </div>
            <div class="theory-box"><h4>📅 Termenul — Die Frist</h4>
                <p class="de"><em>„Bis wann muss ich die Erklärung abgeben?" — „Die Frist ist normalerweise der 31. Juli."</em></p>
                <p class="ro">Expresii: <strong>die Erklärung abgeben</strong> (a depune declarația) · <strong>die Frist</strong> (termenul) · <strong>bis wann?</strong> (până când?)</p>
            </div>
            <div class="theory-box"><h4>📬 Decizia de impunere — Der Steuerbescheid</h4>
                <p class="de"><em>„Ich habe den Steuerbescheid erhalten. Bekomme ich Geld zurück?" — „Ja, Sie bekommen eine Erstattung von 400 Euro."</em></p>
                <p class="ro">Expresii: <strong>den Steuerbescheid erhalten</strong> (a primi decizia) · <strong>die Erstattung</strong> (rambursarea) · <strong>die Nachzahlung</strong> (plata suplimentară)</p>
            </div>
            <div class="theory-box"><h4>👩‍💼 La consilierul fiscal — Beim Steuerberater</h4>
                <p class="de"><em>„Das ist mir zu kompliziert. Können Sie mir helfen?" — „Natürlich. Bringen Sie alle Belege mit."</em></p>
                <p class="ro">Expresii: <strong>zu kompliziert</strong> (prea complicat) · <strong>der Steuerberater</strong> (consilierul fiscal) · <strong>die Belege mitbringen</strong> (a aduce documentele)</p>
            </div>
        </div>
    </div>

    <!-- 4: Expresii utile -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>💬 5. Expresii utile (la fisc și la consilier)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-expresii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Expresie (DE)</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Muss ich eine Steuererklärung machen?</td><td>Trebuie să fac o declarație de impozit?</td></tr>
                    <tr><td class="verb">Was kann ich von der Steuer absetzen?</td><td>Ce pot deduce din impozit?</td></tr>
                    <tr><td class="verb">Bis wann ist die Frist?</td><td>Până când este termenul?</td></tr>
                    <tr><td class="verb">Ich habe den Steuerbescheid erhalten.</td><td>Am primit decizia de impunere.</td></tr>
                    <tr><td class="verb">Bekomme ich eine Erstattung?</td><td>Primesc o rambursare?</td></tr>
                    <tr><td class="verb">Gibt es eine Nachzahlung?</td><td>Există o plată suplimentară?</td></tr>
                    <tr><td class="verb">Ich brauche einen Steuerberater.</td><td>Am nevoie de un consilier fiscal.</td></tr>
                    <tr><td class="verb">Wie ist meine Steuer-ID?</td><td>Care este codul meu fiscal?</td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Pentru mulți români din Germania, prima Steuererklärung pare grea — dar e adesea cea care aduce cei mai mulți bani înapoi! „Was kann ich von der Steuer absetzen?" e întrebarea de aur. Dacă te simți depășit, un <strong>Steuerberater</strong> sau o aplicație (ELSTER, WISO) te ajută. Acum ascultă dialogul cu Frau Vogel, consiliera fiscală. 💚</div>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
