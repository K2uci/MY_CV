// ============================================
// DATOS ESTRUCTURADOS (schema.org / JSON-LD)
// Se inyectan en el HTML en build (scripts/prerender.js) y se generan
// a partir del mismo contenido que se muestra en la página.
// ============================================
import es from './data/content/es.js';
import en from './data/content/en.js';
import { contact, SITE_URL } from './data/portfolio.js';

const CONTENT = { es, en };

export const pageUrl = (lang) => (lang === 'en' ? `${SITE_URL}en/` : SITE_URL);

export function jsonLd(lang) {
    const t = CONTENT[lang];
    const url = pageUrl(lang);
    const personId = `${SITE_URL}#person`;
    const isEn = lang === 'en';

    const person = {
        '@type': 'Person',
        '@id': personId,
        name: 'Elieser Hernandez',
        givenName: 'Elieser',
        familyName: 'Hernandez',
        jobTitle: isEn ? 'Freelance Penetration Tester' : 'Pentester Independiente',
        description: t.profile.headline,
        url: SITE_URL,
        image: `${SITE_URL}og-image.png`,
        email: `mailto:${contact.email}`,
        telephone: contact.phoneE164,
        address: {
            '@type': 'PostalAddress',
            addressLocality: isEn ? 'Havana' : 'La Habana',
            addressCountry: 'CU',
        },
        alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: isEn ? 'University of Informatics Sciences (UCI)' : 'Universidad de Ciencias Informáticas (UCI)',
        },
        knowsLanguage: ['es', 'en'],
        knowsAbout: [
            'Penetration Testing', 'Ethical Hacking', 'Red Team', 'Web Application Security',
            'API Security', 'Mobile Security', 'OWASP Top 10', 'PTES', 'MITRE ATT&CK', 'Bug Bounty',
            'Burp Suite', 'Metasploit', 'Nmap', 'Python', 'Bash',
        ],
        sameAs: [contact.github, contact.linkedin],
    };

    const service = {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}#service`,
        name: isEn ? 'Elieser Hernandez — Freelance Penetration Testing' : 'Elieser Hernandez — Pentesting Independiente',
        description: isEn
            ? 'Freelance penetration testing of web applications, APIs, mobile platforms and infrastructure following OWASP, PTES and MITRE ATT&CK.'
            : 'Pentesting independiente de aplicaciones web, APIs, plataformas móviles e infraestructura bajo OWASP, PTES y MITRE ATT&CK.',
        url,
        image: `${SITE_URL}og-image.png`,
        email: contact.email,
        telephone: contact.phoneE164,
        founder: { '@id': personId },
        areaServed: 'Worldwide',
        availableLanguage: ['Spanish', 'English'],
        address: person.address,
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: t.services.heading.pre + ' ' + t.services.heading.hi,
            itemListElement: t.services.items.map(s => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: s.title, description: s.desc },
            })),
        },
    };

    const faq = {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: t.faq.items.map(item => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
    };

    const page = {
        '@type': 'ProfilePage',
        '@id': `${url}#webpage`,
        url,
        name: isEn ? 'Elieser Hernandez — Freelance Penetration Tester' : 'Elieser Hernandez — Pentester Independiente',
        inLanguage: lang,
        mainEntity: { '@id': personId },
        dateModified: new Date().toISOString().slice(0, 10),
    };

    return { '@context': 'https://schema.org', '@graph': [page, person, service, faq] };
}
