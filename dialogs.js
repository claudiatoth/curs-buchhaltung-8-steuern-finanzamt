// ============================================
// DIALOGS.JS — Steuern & Finanzamt: dialog animat
// Andreea ↔ Frau Vogel (Steuerberaterin) · prima declarație de impozit
// sync pe audio.currentTime + timer fallback · fără TTS
// ============================================

const dialog1Data = {
    id: 'dialog1',
    title: 'Die erste Steuererklärung — beim Steuerberater',
    context: 'Andreea trebuie să facă prima ei declarație de impozit în Germania și nu știe de unde să înceapă. Merge la Frau Vogel, consiliera fiscală, care îi explică ce poate deduce și ce urmează după.',
    audioFile: 'audio/dialog-01.mp3',
    totalDuration: 94,
    replici: [
        { id: 1, speaker: 'andreea', start: 0,  duration: 7, de: 'Guten Tag, Frau Vogel. Ich muss meine erste Steuererklärung machen und weiß nicht, wie.', ro: 'Bună ziua, doamnă Vogel. Trebuie să fac prima mea declarație de impozit și nu știu cum.' },
        { id: 2, speaker: 'vogel',   start: 7,  duration: 6, de: 'Guten Tag, Andreea. Keine Sorge, das machen wir zusammen.', ro: 'Bună ziua, Andreea. Nicio grijă, o facem împreună.' },
        { id: 3, speaker: 'andreea', start: 13, duration: 5, de: 'Muss ich die Erklärung überhaupt machen?', ro: 'Trebuie neapărat să fac declarația?' },
        { id: 4, speaker: 'vogel',   start: 18, duration: 8, de: 'Nicht immer Pflicht, aber es lohnt sich oft. Viele bekommen Geld zurück.', ro: 'Nu mereu obligatoriu, dar adesea merită. Mulți primesc bani înapoi.' },
        { id: 5, speaker: 'andreea', start: 26, duration: 5, de: 'Wirklich? Und was kann ich absetzen?', ro: 'Serios? Și ce pot deduce?' },
        { id: 6, speaker: 'vogel',   start: 31, duration: 9, de: 'Fahrtkosten zur Arbeit, Arbeitskleidung, Fortbildungen — das sind Werbungskosten.', ro: 'Costurile de drum la muncă, hainele de lucru, perfecționările — acelea sunt cheltuieli profesionale.' },
        { id: 7, speaker: 'andreea', start: 40, duration: 6, de: 'Gut, dass ich alle Belege gesammelt habe!', ro: 'Bine că am strâns toate documentele!' },
        { id: 8, speaker: 'vogel',   start: 46, duration: 8, de: 'Perfekt. Mit den Belegen können wir die Werbungskosten absetzen.', ro: 'Perfect. Cu documentele putem deduce cheltuielile profesionale.' },
        { id: 9, speaker: 'andreea', start: 54, duration: 6, de: 'Und bis wann muss ich die Erklärung abgeben?', ro: 'Și până când trebuie să depun declarația?' },
        { id: 10, speaker: 'vogel',  start: 60, duration: 8, de: 'Die Frist ist normalerweise der 31. Juli. Danach kommt der Steuerbescheid.', ro: 'Termenul este de obicei 31 iulie. Apoi vine decizia de impunere.' },
        { id: 11, speaker: 'andreea', start: 68, duration: 8, de: 'Und im Bescheid steht, ob ich eine Erstattung oder eine Nachzahlung bekomme?', ro: 'Și în decizie scrie dacă primesc o rambursare sau o plată suplimentară?' },
        { id: 12, speaker: 'vogel',  start: 76, duration: 9, de: 'Genau. Bei Ihnen sieht es gut aus — ich rechne mit einer Erstattung. Vielen Dank!', ro: 'Exact. La dumneavoastră arată bine — mă aștept la o rambursare. Mulțumesc mult!' }
    ]
};

const dialogsById = { dialog1: dialog1Data };

function speakerLabel(s) { return s === 'andreea' ? '🇷🇴 Andreea' : '📋 Frau Vogel'; }
function avatarHTML(speaker) {
    if (speaker === 'andreea') return `<div class="character-avatar"><img src="images/andreea.png" alt="Andreea"></div>`;
    return `<div class="character-avatar vogel-avatar">📋</div>`;
}

function buildAnimatedDialog(data) {
    const repliciHTML = data.replici.map(r => `
        <div class="reply-item" data-reply-id="${r.id}" data-speaker="${r.speaker}">
            <div class="reply-header">
                <span class="reply-num">${r.id}.</span>
                <span class="reply-speaker speaker-${r.speaker}">${speakerLabel(r.speaker)}</span>
                <button class="btn-replay-reply" onclick="replayReply('${data.id}', ${r.id})">🔁</button>
            </div>
            <div class="reply-de">${r.de}</div>
            <div class="reply-ro">${r.ro}</div>
        </div>
    `).join('');

    return `
        <div class="animated-dialog" id="dialog-${data.id}" data-dialog-id="${data.id}">
            <div class="dialog-context"><strong>📍 Situația:</strong> ${data.context}</div>
            <div class="stage-container">
                <div class="stage">
                    <div class="character-wrapper character-andreea" data-speaker="andreea">
                        ${avatarHTML('andreea')}
                        <div class="character-label">Andreea 🇷🇴</div>
                        <div class="speech-bubble speech-andreea" id="bubble-${data.id}-andreea"><div class="bubble-de"></div><div class="bubble-ro"></div></div>
                    </div>
                    <div class="character-wrapper character-vogel" data-speaker="vogel">
                        ${avatarHTML('vogel')}
                        <div class="character-label">Frau Vogel 📋</div>
                        <div class="speech-bubble speech-vogel" id="bubble-${data.id}-vogel"><div class="bubble-de"></div><div class="bubble-ro"></div></div>
                    </div>
                </div>
                <div class="dialog-controls">
                    <button class="btn-dialog btn-play" id="btn-play-${data.id}" onclick="playDialog('${data.id}')">▶️ Pornește</button>
                    <button class="btn-dialog btn-pause" id="btn-pause-${data.id}" onclick="pauseDialog('${data.id}')" disabled>⏸ Pauză</button>
                    <button class="btn-dialog btn-reset" id="btn-reset-${data.id}" onclick="resetDialog('${data.id}')">🔄 Reset</button>
                </div>
                <div class="dialog-progress">
                    <div class="progress-bar" id="progress-${data.id}"><div class="progress-fill" id="progress-fill-${data.id}"></div></div>
                    <div class="progress-text" id="progress-text-${data.id}">Replica 0 / ${data.replici.length}</div>
                </div>
                <audio id="audio-${data.id}" preload="none"><source src="${data.audioFile}" type="audio/mpeg"></audio>
            </div>
            <details class="transcript-details">
                <summary>📜 Vezi transcriptul complet (bilingv)</summary>
                <div class="transcript-list">${repliciHTML}</div>
            </details>
        </div>
    `;
}

const dialogState = {};
function initDialogState(dialogId) {
    if (!dialogState[dialogId]) {
        dialogState[dialogId] = { isPlaying: false, currentReply: 0, lastDisplayedIdx: -1, mode: null, timeouts: [], timeUpdateHandler: null, endedHandler: null, data: dialogsById[dialogId] };
    }
    return dialogState[dialogId];
}

function playDialog(dialogId) {
    const state = initDialogState(dialogId);
    if (state.isPlaying) return;
    state.isPlaying = true;
    const data = state.data;
    const audio = document.getElementById(`audio-${dialogId}`);
    document.getElementById(`btn-play-${dialogId}`).disabled = true;
    document.getElementById(`btn-pause-${dialogId}`).disabled = false;

    if (audio && !state.timeUpdateHandler) {
        state.timeUpdateHandler = () => {
            if (!state.isPlaying || state.mode === 'timer') return;
            if (audio.currentTime > 0) state.mode = 'audio';
            const t = audio.currentTime;
            let currentIdx = -1;
            for (let i = 0; i < data.replici.length; i++) { if (t >= data.replici[i].start) currentIdx = i; else break; }
            if (currentIdx >= 0 && currentIdx !== state.lastDisplayedIdx) {
                state.lastDisplayedIdx = currentIdx; state.currentReply = currentIdx + 1;
                showReply(dialogId, data.replici[currentIdx]); updateProgress(dialogId);
            }
        };
        audio.addEventListener('timeupdate', state.timeUpdateHandler);
        state.endedHandler = () => { if (state.mode === 'audio') endDialog(dialogId); };
        audio.addEventListener('ended', state.endedHandler);
        audio.addEventListener('error', () => startTimerFallback(dialogId));
    }

    if (audio) {
        if (state.currentReply >= data.replici.length) { try { audio.currentTime = 0; } catch (e) {} state.currentReply = 0; state.lastDisplayedIdx = -1; }
        const p = audio.play();
        if (p && p.catch) p.catch(() => startTimerFallback(dialogId));
        setTimeout(() => { if (state.isPlaying && state.mode !== 'audio' && (audio.paused || !audio.currentTime)) startTimerFallback(dialogId); }, 500);
    } else {
        startTimerFallback(dialogId);
    }
}

function startTimerFallback(dialogId) {
    const state = initDialogState(dialogId);
    if (state.mode) return;
    state.mode = 'timer';
    const data = state.data;
    const startFromReply = state.currentReply;
    const offsetMs = startFromReply > 0 ? data.replici[startFromReply - 1].start * 1000 : 0;
    for (let i = startFromReply; i < data.replici.length; i++) {
        const reply = data.replici[i];
        const delayMs = (reply.start * 1000) - offsetMs;
        const timeout = setTimeout(() => {
            if (!state.isPlaying) return;
            state.lastDisplayedIdx = i; showReply(dialogId, reply); state.currentReply = i + 1; updateProgress(dialogId);
            if (i === data.replici.length - 1) setTimeout(() => endDialog(dialogId), reply.duration * 1000);
        }, delayMs);
        state.timeouts.push(timeout);
    }
}

function showReply(dialogId, reply) {
    const activeChar = document.querySelector(`#dialog-${dialogId} .character-${reply.speaker}`);
    const sameSpeakerContinues = activeChar && activeChar.classList.contains('speaking');
    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => { if (c !== activeChar) c.classList.remove('speaking'); });
    if (activeChar) activeChar.classList.add('speaking');
    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => { if (!b.id.endsWith('-' + reply.speaker)) b.classList.remove('visible'); });
    const bubble = document.getElementById(`bubble-${dialogId}-${reply.speaker}`);
    if (!bubble) return;
    if (sameSpeakerContinues) {
        bubble.classList.add('text-fading');
        setTimeout(() => { bubble.querySelector('.bubble-de').textContent = reply.de; bubble.querySelector('.bubble-ro').textContent = reply.ro; bubble.classList.remove('text-fading'); }, 180);
    } else {
        bubble.querySelector('.bubble-de').textContent = reply.de; bubble.querySelector('.bubble-ro').textContent = reply.ro; bubble.classList.add('visible');
    }
    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));
    const ri = document.querySelector(`#dialog-${dialogId} .reply-item[data-reply-id="${reply.id}"]`);
    if (ri) ri.classList.add('active');
}

function pauseDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state || !state.isPlaying) return;
    state.isPlaying = false; state.mode = null;
    state.timeouts.forEach(t => clearTimeout(t)); state.timeouts = [];
    const audio = document.getElementById(`audio-${dialogId}`); if (audio) audio.pause();
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function resetDialog(dialogId) {
    pauseDialog(dialogId);
    const state = initDialogState(dialogId);
    state.currentReply = 0; state.lastDisplayedIdx = -1; state.timeouts = [];
    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => c.classList.remove('speaking'));
    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => b.classList.remove('visible'));
    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));
    const audio = document.getElementById(`audio-${dialogId}`); if (audio) { audio.pause(); audio.currentTime = 0; }
    updateProgress(dialogId);
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function endDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    state.isPlaying = false; state.mode = null; state.currentReply = state.data.replici.length; state.timeouts = [];
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function updateProgress(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    const total = state.data.replici.length, pct = total > 0 ? (state.currentReply / total) * 100 : 0;
    const fill = document.getElementById(`progress-fill-${dialogId}`), text = document.getElementById(`progress-text-${dialogId}`);
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `Replica ${state.currentReply} / ${total}`;
}

function replayReply(dialogId, replyId) {
    const data = dialogsById[dialogId];
    const idx = data.replici.findIndex(r => r.id === replyId);
    if (idx < 0) return;
    const reply = data.replici[idx];
    const state = initDialogState(dialogId);
    state.lastDisplayedIdx = -1; showReply(dialogId, reply); state.currentReply = idx + 1; updateProgress(dialogId);
    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) {
        audio.currentTime = reply.start;
        if (audio.paused) { state.isPlaying = true; audio.play().catch(() => {}); document.getElementById(`btn-play-${dialogId}`).disabled = true; document.getElementById(`btn-pause-${dialogId}`).disabled = false; }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const c = document.getElementById('dialog1-container');
    if (c) c.innerHTML = buildAnimatedDialog(dialog1Data);
});
