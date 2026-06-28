// ── HISTORY ──────────────────────────────────────────────────
const HISTORY_KEY = 'mgv_history';

function getHistory() {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); }
    catch { return []; }
}

function recordPlay(game) {
    const history = getHistory();
    const idx = history.findIndex(g => g.file === game.file);
    if (idx !== -1) history.splice(idx, 1);
    history.unshift({ file: game.file, title: game.title });
    if (history.length > 60) history.length = 60;
    try { localStorage.setItem(HISTORY_KEY, JSON.stringify(history)); }
    catch {}
}

// ── CARD BUILDER ─────────────────────────────────────────────
const inGameDir = window.location.pathname.includes('/gamefiles/');
const base = inGameDir ? '../' : '';

// img field in games.js accepts either:
//   "filename.webp"           → looks in /gameimages/ folder
//   "https://..."             → uses the URL directly (no upload needed)
function getGameImg(game) {
    if (!game.img) return `${base}favicon.png`;
    const isUrl = /^https?:\/\/|^\/\//.test(game.img);
    return isUrl ? game.img : `${base}gameimages/${game.img}`;
}

function buildCard(game) {
    const a = document.createElement('a');
    a.className = 'game-link';

    // On the hub (index.html), open games inside the overlay so the nav stays.
    // On standalone pages (allgames.html etc.), navigate normally.
    const onHub = !inGameDir && typeof openGameOverlay === 'function';
    if (onHub) {
        a.href = '#';
        a.addEventListener('click', e => {
            e.preventDefault();
            openGameOverlay(game);
        });
    } else {
        a.href = `${base}gamefiles/${game.file}`;
        a.addEventListener('click', () => recordPlay(game));
    }

    const img = document.createElement('img');
    img.src = getGameImg(game);
    img.alt = game.title;
    img.loading = 'lazy';
    img.onerror = () => { img.src = `${base}favicon.png`; };

    const label = document.createElement('div');
    label.className = 'card-title';
    label.textContent = game.title;

    a.appendChild(img);
    a.appendChild(label);
    return a;
}

// ── HEADER SEARCH ─────────────────────────────────────────────
(function initHeaderSearch() {
    const toggle   = document.getElementById('search-toggle');
    const dropdown = document.getElementById('search-dropdown');
    const input    = document.getElementById('header-search');
    const results  = document.getElementById('search-results');
    if (!toggle || !dropdown || !input) return;

    toggle.addEventListener('click', () => {
        const open = dropdown.style.display !== 'none';
        dropdown.style.display = open ? 'none' : 'block';
        if (!open) setTimeout(() => input.focus(), 50);
    });

    input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        results.innerHTML = '';
        if (!q || typeof GAMES === 'undefined') return;
        const hits = GAMES.filter(g => g.title.toLowerCase().includes(q)).slice(0, 12);
        hits.forEach(g => results.appendChild(buildCard(g)));
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') { dropdown.style.display = 'none'; }
    });
    document.addEventListener('click', e => {
        if (!e.target.closest('.search-dropdown') && !e.target.closest('#search-toggle')) {
            dropdown.style.display = 'none';
        }
    });
}());

// ── NETWORK CANVAS ANIMATION ──────────────────────────────────
function initNetwork() {
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, nodes;

    function resize() {
        W = canvas.width  = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    }

    function makeNodes(n) {
        return Array.from({length: n}, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
        }));
    }

    resize();
    nodes = makeNodes(55);

    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#f4c401';

    function draw() {
        ctx.clearRect(0, 0, W, H);

        nodes.forEach(n => {
            n.x += n.vx; n.y += n.vy;
            if (n.x < 0 || n.x > W) n.vx *= -1;
            if (n.y < 0 || n.y > H) n.vy *= -1;
        });

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const d  = Math.sqrt(dx*dx + dy*dy);
                if (d < 140) {
                    ctx.globalAlpha = (1 - d / 140) * 0.12;
                    ctx.strokeStyle = accent;
                    ctx.lineWidth   = 1;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }
        ctx.globalAlpha = 1;
        nodes.forEach(n => {
            ctx.fillStyle = accent + '70';
            ctx.beginPath();
            ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => { resize(); nodes = makeNodes(55); });
    draw();
}
