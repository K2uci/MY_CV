// ============================================
// DATOS COMUNES A TODOS LOS IDIOMAS
// Los textos traducibles están en src/data/content/es.js y en.js
// ============================================

// URL pública del sitio (se define en .env → VITE_SITE_URL)
export const SITE_URL = import.meta.env.VITE_SITE_URL || '/';

export const contact = {
    email: 'astroreal031@gmail.com',
    phone: '+53 59805123',
    phoneE164: '+5359805123',
    telegram: 'https://web.telegram.org/k/#@ElieserHS',
    telegramUser: '@ElieserHS',
    whatsapp: 'https://wa.me/5359805123',
    linkedin: 'https://www.linkedin.com/in/elieser-hernandez-795771273/',
    linkedinUser: 'elieser-hernandez',
    github: 'https://github.com/K2uci',
    githubUser: 'K2uci',
};

// CV que se descarga en cada idioma (archivos en /public)
export const cvFiles = {
    es: { file: 'CV_Ciber_es_8_2026.pdf', downloadName: 'Elieser_Hernandez_Pentester_CV_ES.pdf' },
    en: { file: 'CV_Ciber_en_08_2026.pdf', downloadName: 'Elieser_Hernandez_Penetration_Tester_CV_EN.pdf' },
};

export const certLinks = {
    efset: 'https://cert.efset.org/es/YfMbVQ',
    icip: 'https://drive.google.com/file/d/1Gu6CPIAU6Xm2dm-DOxE4L8Wuc0w_VHUe/view',
};

export const loaderLines = [
    { delay: 0, text: 'Initializing system...' },
    { delay: 400, text: 'Loading offensive modules...' },
    { delay: 800, text: 'Establishing secure connection...' },
    { delay: 1200, text: 'Bypassing firewall...' },
    { delay: 1600, text: 'Access granted. Welcome, operator.' },
];

export const socials = [
    { href: contact.github, title: 'GitHub', icon: 'bxl-github', external: true },
    { href: contact.linkedin, title: 'LinkedIn', icon: 'bxl-linkedin', external: true },
    { href: `mailto:${contact.email}`, title: 'Email', icon: 'bxl-gmail' },
    { href: contact.whatsapp, title: 'WhatsApp', icon: 'bxl-whatsapp', external: true },
    { href: contact.telegram, title: 'Telegram', icon: 'bxl-telegram', external: true },
];

export const contactMethods = [
    { href: `mailto:${contact.email}`, icon: 'bx-envelope', label: 'Email', value: contact.email },
    { href: contact.linkedin, icon: 'bxl-linkedin', label: 'LinkedIn', value: contact.linkedinUser, external: true },
    { href: contact.github, icon: 'bxl-github', label: 'GitHub', value: contact.githubUser, external: true },
    { href: contact.whatsapp, icon: 'bxl-whatsapp', label: 'WhatsApp', value: contact.phone, external: true },
    { href: contact.telegram, icon: 'bxl-telegram', label: 'Telegram', value: contact.telegramUser, external: true },
];

export const vulnClasses = ['SQL Injection', 'XSS', 'SSRF', 'RCE', 'Broken Access Control', 'Business Logic', 'Misconfiguration'];

export const techStack = [
    { title: 'Burp Suite', icon: 'bx-bug', label: 'Burp' },
    { title: 'Nmap', icon: 'bx-radar', label: 'Nmap' },
    { title: 'Metasploit', icon: 'bx-target-lock', label: 'Metasploit' },
    { title: 'SQLMap', icon: 'bx-data', label: 'SQLMap' },
    { title: 'Nuclei', icon: 'bx-atom', label: 'Nuclei' },
    { title: 'FFUF', icon: 'bx-search-alt', label: 'FFUF' },
    { title: 'Amass', icon: 'bx-network-chart', label: 'Amass' },
    { title: 'Hashcat / John the Ripper', icon: 'bx-lock-open-alt', label: 'Hashcat' },
    { title: 'Python', icon: 'bxl-python', label: 'Python' },
    { title: 'Bash', icon: 'bx-terminal', label: 'Bash' },
    { title: 'JavaScript', icon: 'bxl-javascript', label: 'JavaScript' },
    { title: 'Elastic Stack', icon: 'bx-line-chart', label: 'Elastic' },
];
