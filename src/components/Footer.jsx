import SocialLinks from './SocialLinks.jsx';
import { socials } from '../data/portfolio.js';
import { useLang } from '../i18n.jsx';

export default function Footer() {
    const { t } = useLang();

    const scrollTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <span className="logo-bracket">&lt;</span>
                    EH
                    <span className="logo-bracket">/&gt;</span>
                </div>
                <p className="footer-tagline">{t.profile.headline}</p>
            </div>

            <SocialLinks links={socials} className="footer-sci" />

            <div className="footer-text">
                <p>
                    <span className="footer-cmd">$</span> © 2026 Elieser Hernandez · {t.footer.madeWith} <i className="bx bx-heart"></i>
                </p>
            </div>

            <div className="footer-iconTop">
                <a href="#" title={t.ui.backTop} aria-label={t.ui.backTop} onClick={scrollTop}>
                    <i className="bx bx-up-arrow-alt"></i>
                </a>
            </div>
        </footer>
    );
}
