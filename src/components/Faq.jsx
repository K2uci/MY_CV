import SectionHeading from './SectionHeading.jsx';
import { useLang } from '../i18n.jsx';

// Preguntas frecuentes: el texto está en el HTML (visible para Google)
// y también se publica como FAQPage en los datos estructurados (src/seo.js).
export default function Faq() {
    const { t } = useLang();
    const faq = t.faq;

    return (
        <section className="faq" id="faq">
            <SectionHeading number="05" heading={faq.heading} />

            <div className="faq-list">
                {faq.items.map((item, i) => (
                    <details className="faq-item" key={item.q} open={i === 0}>
                        <summary>
                            <span className="faq-prompt">&gt;</span>
                            <h3>{item.q}</h3>
                            <i className="bx bx-chevron-down"></i>
                        </summary>
                        <p>{item.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
