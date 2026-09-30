import { useCallback, useEffect, useState } from 'react';
import { LangProvider, useLang } from './i18n.jsx';
import MatrixRain from './components/MatrixRain.jsx';
import Cursor from './components/Cursor.jsx';
import Loader from './components/Loader.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const LOADER_DURATION = 2200;
const LOADER_SEEN_KEY = 'eh-loader-seen';

// El loader completo se muestra en la primera visita de la sesión;
// si el visitante recarga o cambia de idioma, se acorta para no hacerle esperar.
function getLoaderDuration() {
    try {
        if (sessionStorage.getItem(LOADER_SEEN_KEY)) return 600;
        sessionStorage.setItem(LOADER_SEEN_KEY, '1');
    } catch {
        // almacenamiento no disponible: se usa la duración completa
    }
    return LOADER_DURATION;
}

function Page() {
    const { t } = useLang();
    const [loaded, setLoaded] = useState(false);
    const finishLoading = useCallback(() => setLoaded(true), []);

    // Bloquea el scroll mientras se muestra el loader
    useEffect(() => {
        if (loaded) {
            document.body.style.overflow = '';
            return;
        }
        document.body.style.overflow = 'hidden';
        const timer = setTimeout(finishLoading, getLoaderDuration());
        window.addEventListener('keydown', finishLoading);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('keydown', finishLoading);
        };
    }, [loaded, finishLoading]);

    // Animaciones de aparición al hacer scroll
    useEffect(() => {
        if (!loaded) return;

        // threshold 0 + rootMargin: funciona también con secciones más altas que la pantalla
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show-animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });

        document.querySelectorAll('section').forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, [loaded]);

    // Scroll suave para enlaces internos (#seccion)
    useEffect(() => {
        const onClick = (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (!anchor) return;
            const href = anchor.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    return (
        <>
            <a href="#about" className="skip-link">{t.ui.skipLink}</a>
            <MatrixRain />
            <Cursor />
            <Loader hidden={loaded} onSkip={finishLoading} />
            <Header />
            <main>
                <Home />
                <About />
                <Services />
                <Experience />
                <Skills />
                <Faq />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default function App({ lang }) {
    return (
        <LangProvider lang={lang}>
            <Page />
        </LangProvider>
    );
}
