import { useEffect, useState } from 'react';
import { useLang } from '../i18n.jsx';

export default function Header() {
    const { t, altHref } = useLang();
    const [menuOpen, setMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [activeId, setActiveId] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            const top = window.scrollY;

            document.querySelectorAll('section').forEach(sec => {
                const offset = sec.offsetTop - 150;
                if (top >= offset && top < offset + sec.offsetHeight) {
                    setActiveId(sec.id);
                }
            });

            setSticky(top > 100);

            // Cierra el menú móvil al hacer scroll
            if (window.innerWidth <= 768) setMenuOpen(false);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const lang = t.ui.langSwitch;

    return (
        <header className={`header${sticky ? ' sticky' : ''}`}>
            <a href="#home" className="logo" aria-label={t.ui.home}>
                <span className="logo-bracket">&lt;</span>
                EH
                <span className="logo-bracket">/&gt;</span>
            </a>

            <button
                type="button"
                className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}
                id="menu-icon"
                aria-label={menuOpen ? t.ui.menuClose : t.ui.menuOpen}
                aria-expanded={menuOpen}
                aria-controls="main-nav"
                onClick={() => setMenuOpen(open => !open)}
            ></button>

            <nav id="main-nav" className={`navbar${menuOpen ? ' active' : ''}`} aria-label={t.ui.navAria}>
                {t.nav.map(link => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={activeId === link.id ? 'active' : undefined}
                        aria-current={activeId === link.id ? 'true' : undefined}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            <div className="header-actions">
                <a
                    href={altHref}
                    className="lang-switch"
                    hrefLang={lang.hrefLang}
                    lang={lang.hrefLang}
                    title={lang.title}
                >
                    <i className="bx bx-globe"></i>{lang.label}
                </a>
                <a href="#contact" className="header-status" title={t.ui.statusTitle}>
                    <span className="status-dot"></span>
                    <span className="status-text">OPEN TO WORK</span>
                </a>
            </div>
        </header>
    );
}
