# Portafolio — Elieser Hernandez (React)

Portafolio bilingüe (ES / EN) en React + Vite, prerenderizado para SEO.

- Español: `/` → descarga `CV_Ciber_es_8_2026.pdf`
- Inglés: `/en/` → descarga `CV_Ciber_en_08_2026.pdf`

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/` (español) o `http://localhost:5173/en/` (inglés).

## Build y publicación (GitHub Pages)

```bash
npm run build
```

El build hace tres cosas:
1. Compila las dos páginas (`dist/index.html` y `dist/en/index.html`).
2. Prerenderiza el contenido completo dentro del HTML e inyecta los datos estructurados (JSON-LD) — `scripts/prerender.js`.
3. Genera `dist/sitemap.xml` y `dist/robots.txt`.

Sube el contenido de `dist/` a la rama `gh-pages`.

**URL del sitio:** se define en `.env` (`VITE_SITE_URL`). Si cambias de hosting o usas un dominio propio, cámbiala ahí y vuelve a hacer build.

## Estructura

- `src/data/portfolio.js` — datos comunes (contacto, enlaces, CVs, herramientas).
- `src/data/content/es.js` y `en.js` — todos los textos de cada idioma.
- `src/i18n.jsx` — contexto de idioma.
- `src/seo.js` — datos estructurados (Person, ProfessionalService, FAQPage, ProfilePage).
- `src/components/` — un componente por sección.
- `index.html` / `en/index.html` — metadatos SEO de cada idioma (title, description, canonical, hreflang, Open Graph).
- `public/` — CVs, imagen para redes (`og-image.png`, `og-image-en.png`) y favicons.

## Después de publicar (Google)

1. Entra en [Google Search Console](https://search.google.com/search-console), añade la propiedad con la URL del sitio y verifícala.
2. En **Sitemaps**, envía `sitemap.xml`.
3. En **Inspección de URLs**, pide la indexación de `/` y `/en/`.
4. Comprueba los datos estructurados en [Rich Results Test](https://search.google.com/test/rich-results).
