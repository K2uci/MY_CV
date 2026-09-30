import { useEffect, useRef } from 'react';
import { socials } from '../data/portfolio.js';
import { useLang } from '../i18n.jsx';
import RichText from './RichText.jsx';
import SocialLinks from './SocialLinks.jsx';

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const update = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    };
    update();
}

export default function Home() {
    const { t, cv } = useLang();
    const home = t.home;
    const statsRef = useRef(null);
    const imgHoverRef = useRef(null);

    // Contadores animados cuando las estadísticas entran en pantalla.
    // El HTML ya trae el número final (lo que leen Google y los lectores de pantalla);
    // la animación arranca desde 0 solo en el navegador.
    useEffect(() => {
        const numbers = statsRef.current.querySelectorAll('.stat-number');
        numbers.forEach(stat => { stat.textContent = '0'; });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    numbers.forEach(stat => animateCounter(stat, Number(stat.dataset.count)));
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    // Efecto parallax
    useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY;
            if (imgHoverRef.current && scrolled < window.innerHeight) {
                imgHoverRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section className="home" id="home">
            <div className="home-content">
                <div className="terminal-prompt" aria-hidden="true">
                    <span className="prompt-user">root@kali</span><span className="prompt-sep">:</span><span
                        className="prompt-path">~</span><span className="prompt-sym">$</span>
                    <span className="prompt-cmd">whoami</span>
                </div>

                <h1>Elieser <span className="glitch" data-text="Hernandez">Hernandez</span></h1>

                <div className="text-animate">
                    <p className="home-role">{t.profile.role}</p>
                </div>

                <div className="home-badges">
                    <span className="home-badge badge-available"><span className="status-dot"></span> {home.badges.available}</span>
                    <span className="home-badge"><i className="bx bx-world"></i> {home.badges.mode}</span>
                    <span className="home-badge"><i className="bx bx-shield-quarter"></i> {home.badges.methods}</span>
                </div>

                <p className="home-intro"><RichText parts={home.intro} /></p>

                <div className="home-stats" ref={statsRef}>
                    {home.stats.map(stat => (
                        <div className="stat-item" key={stat.label}>
                            <div>
                                <span className="stat-number" data-count={stat.count}>{stat.count}</span>
                                <span className="stat-plus">{stat.suffix}</span>
                            </div>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div className="btn-box">
                    <a href="#contact" className="btn">
                        <span>{home.ctaContact}</span>
                        <i className="bx bx-terminal"></i>
                    </a>
                    <a href={cv.href} download={cv.downloadName} className="btn btn-outline">
                        <span>{home.ctaCv}</span>
                        <i className="bx bx-download"></i>
                    </a>
                </div>

                <SocialLinks links={socials} className="home-sci" />
            </div>

            <div className="home-imgHover" ref={imgHoverRef}></div>
            <a href="#about" className="home-scroll-indicator" aria-label={home.scrollAria}>
                <span>{home.scroll}</span>
                <i className="bx bx-chevron-down"></i>
            </a>
        </section>
    );
}
