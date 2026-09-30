import { createContext, useContext } from 'react';
import es from './data/content/es.js';
import en from './data/content/en.js';
import { cvFiles } from './data/portfolio.js';

// Cada idioma vive en su propia URL: "/" (español) y "/en/" (inglés).
// `root` es la ruta relativa a la raíz del sitio desde esa página.
export const LANGS = {
    es: { content: es, root: './', altHref: './en/' },
    en: { content: en, root: '../', altHref: '../' },
};

const LangContext = createContext(null);

export function LangProvider({ lang, children }) {
    const config = LANGS[lang] ?? LANGS.es;
    const cv = cvFiles[lang] ?? cvFiles.es;
    const value = {
        lang,
        t: config.content,
        root: config.root,
        altHref: config.altHref,
        cv: { href: config.root + cv.file, downloadName: cv.downloadName },
    };
    return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
    return useContext(LangContext);
}
