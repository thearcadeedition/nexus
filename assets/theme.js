// ── THEME & SETTINGS ENGINE ──────────────────────────────────────────────────
const SETTINGS_KEY = 'tae_settings';

const DEFAULTS = {
    theme: 'dark',
    accentColor: '#e8d5b0',
    fontSize: 'normal',
    animationsEnabled: true,
    compactNav: false,
};

function getSettings() {
    try { return Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}')); }
    catch { return Object.assign({}, DEFAULTS); }
}

function saveSettings(settings) {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); }
    catch {}
}

function applyTheme(settings) {
    const root = document.documentElement;
    const themes = {
        dark: {
            '--bg':      '#0f0f13',
            '--surface': '#17171d',
            '--surface2':'#1f1f27',
            '--surface3':'#26262f',
            '--text':    '#eeeef2',
            '--muted':   '#7878a0',
            '--border':  'rgba(255,255,255,0.07)',
        },
        midnight: {
            '--bg':      '#06060e',
            '--surface': '#0e0e18',
            '--surface2':'#141420',
            '--surface3':'#1a1a28',
            '--text':    '#e4e4f4',
            '--muted':   '#5858a0',
            '--border':  'rgba(100,100,200,0.1)',
        },
        light: {
            '--bg':      '#f2f2f6',
            '--surface': '#ffffff',
            '--surface2':'#eaeaef',
            '--surface3':'#e0e0e8',
            '--text':    '#0f0f13',
            '--muted':   '#6666aa',
            '--border':  'rgba(0,0,0,0.07)',
        },
        gold: {
            '--bg':      '#0a0900',
            '--surface': '#131100',
            '--surface2':'#1c1800',
            '--surface3':'#231e00',
            '--text':    '#fff8e7',
            '--muted':   '#9a8820',
            '--border':  'rgba(244,196,1,0.1)',
        },
    };

    const palette = themes[settings.theme] || themes.dark;
    for (const [k, v] of Object.entries(palette)) {
        root.style.setProperty(k, v);
    }

    root.style.setProperty('--accent', settings.accentColor || '#e8d5b0');

    const hex = (settings.accentColor || '#e8d5b0').replace('#', '');
    const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4,6),16);
    const luminance = (0.299*r + 0.587*g + 0.114*b) / 255;
    root.style.setProperty('--accent-fg', luminance > 0.5 ? '#000000' : '#ffffff');

    const fontSizes = { small: '14px', normal: '16px', large: '18px' };
    root.style.setProperty('--base-font-size', fontSizes[settings.fontSize] || '16px');
    document.body.style.fontSize = fontSizes[settings.fontSize] || '16px';

    document.body.dataset.theme = settings.theme;
}

// Apply immediately on script load to prevent flash
(function() {
    applyTheme(getSettings());
}());
