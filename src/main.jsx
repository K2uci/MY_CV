import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// El idioma lo define el <html lang="..."> de cada página (index.html o en/index.html)
const lang = document.documentElement.lang === 'en' ? 'en' : 'es';
const container = document.getElementById('root');
const app = (
    <StrictMode>
        <App lang={lang} />
    </StrictMode>
);

// En producción el HTML viene prerenderizado (scripts/prerender.js): se hidrata.
// En desarrollo el contenedor está vacío: se renderiza normal.
if (container.hasChildNodes()) {
    hydrateRoot(container, app);
} else {
    createRoot(container).render(app);
}
