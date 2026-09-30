// ============================================
// PRERENDER (se ejecuta al final de `npm run build`)
// 1. Inyecta el HTML ya renderizado de cada idioma en dist/ para que
//    Google lea todo el contenido sin depender de JavaScript.
// 2. Inyecta los datos estructurados (JSON-LD).
// 3. Genera sitemap.xml y robots.txt con la URL de VITE_SITE_URL.
// ============================================
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const serverEntry = resolve(root, 'dist-server/entry-server.js');

const { render, jsonLd, pageUrl, SITE_URL } = await import(pathToFileURL(serverEntry).href);

if (!SITE_URL.startsWith('http')) {
    throw new Error('VITE_SITE_URL no está definida en .env (debe ser una URL absoluta con barra final).');
}

const pages = [
    { lang: 'es', file: resolve(dist, 'index.html') },
    { lang: 'en', file: resolve(dist, 'en/index.html') },
];

for (const { lang, file } of pages) {
    let html = readFileSync(file, 'utf-8');
    const ld = JSON.stringify(jsonLd(lang)).replace(/</g, '\\u003c');

    html = html
        .replace('<div id="root"></div>', `<div id="root">${render(lang)}</div>`)
        .replace('</head>', `    <script type="application/ld+json">${ld}</script>\n</head>`);

    writeFileSync(file, html);
    console.log(`✓ prerender ${lang} → ${file.replace(root, '.')}`);
}

// sitemap.xml con las dos versiones enlazadas entre sí (hreflang)
const today = new Date().toISOString().slice(0, 10);
const alternates = ['es', 'en']
    .map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${pageUrl(l)}"/>`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl('es')}"/>`)
    .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${['es', 'en'].map(l => `  <url>
    <loc>${pageUrl(l)}</loc>
    <lastmod>${today}</lastmod>
${alternates}
  </url>`).join('\n')}
</urlset>
`;
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap);

writeFileSync(resolve(dist, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${SITE_URL}sitemap.xml
`);
console.log('✓ sitemap.xml y robots.txt');

rmSync(resolve(root, 'dist-server'), { recursive: true, force: true });
