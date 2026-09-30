// Entrada usada solo en build para prerenderizar el HTML de cada idioma
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export { jsonLd, pageUrl } from './seo.js';
export { SITE_URL } from './data/portfolio.js';

export function render(lang) {
    return renderToString(
        <StrictMode>
            <App lang={lang} />
        </StrictMode>
    );
}
