import SectionHeading from './SectionHeading.jsx';
import { useLang } from '../i18n.jsx';

export default function Services() {
    const { t } = useLang();
    const services = t.services;

    return (
        <section className="services" id="services">
            <SectionHeading number="02" heading={services.heading} />

            <div className="services-grid">
                {services.items.map(service => (
                    <article className="service-card" key={service.title}>
                        <div className="service-icon"><i className={`bx ${service.icon}`}></i></div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </article>
                ))}
            </div>

            <div className="methodology">
                <h3 className="tech-title">{services.methodologyTitle}</h3>
                <ol className="methodology-steps">
                    {services.methodology.map(phase => (
                        <li className="methodology-step" key={phase.step}>
                            <span className="step-number">{phase.step}</span>
                            <h4>{phase.title}</h4>
                            <p>{phase.desc}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
