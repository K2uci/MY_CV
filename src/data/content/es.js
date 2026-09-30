// ============================================
// TEXTOS EN ESPAÑOL
// Fragmentos con negrita: string normal o { b: 'texto en negrita' }
// Fuente: CV_Ciber_es_8_2026.pdf (actualizado agosto 2026)
// ============================================
import { contact } from '../portfolio.js';

export default {
    ui: {
        skipLink: 'Saltar al contenido',
        loaderSkip: '[ click o cualquier tecla para saltar ]',
        menuOpen: 'Abrir menú',
        menuClose: 'Cerrar menú',
        navAria: 'Navegación principal',
        home: 'Inicio',
        statusTitle: 'Disponible para nuevas oportunidades',
        langSwitch: { label: 'EN', title: 'View in English', hrefLang: 'en' },
        backTop: 'Volver arriba',
        external: 'se abre en una pestaña nueva',
    },

    nav: [
        { id: 'home', label: 'Inicio' },
        { id: 'about', label: 'Sobre mí' },
        { id: 'services', label: 'Servicios' },
        { id: 'experience', label: 'Experiencia' },
        { id: 'skills', label: 'Skills' },
        { id: 'faq', label: 'FAQ' },
        { id: 'contact', label: 'Contacto' },
    ],

    profile: {
        role: 'Red Team Operator',
        headline: 'Pentester Ofensivo | Web, APIs e Infraestructura',
        location: 'La Habana, Cuba',
        cvUpdated: 'Agosto 2026',
    },

    home: {
        badges: {
            available: 'Disponible para contratar',
            mode: 'Remoto · Freelance o tiempo completo',
            methods: 'OWASP · PTES · MITRE ATT&CK',
        },
        intro: [
            { b: 'Pentester independiente' }, ' especializado en pentesting de aplicaciones web, APIs e infraestructura. Experiencia práctica en ',
            { b: 'auditorías de seguridad' }, ', ', { b: 'bug bounty' },
            ' y automatización de pruebas. Enfoque metódico, orientado a impacto real de negocio, identificación de vulnerabilidades de alto riesgo y reporting técnico-ejecutivo.',
        ],
        stats: [
            { count: 27, suffix: '+', label: 'Auditorías' },
            { count: 8, suffix: '+', label: 'Vulns / auditoría' },
            { count: 75, suffix: '%', label: 'Validación BB' },
            { count: 40, suffix: '+', label: 'Reportes' },
        ],
        ctaContact: 'Contactar',
        ctaCv: 'Descargar CV',
        scroll: 'Scroll',
        scrollAria: 'Ir a Sobre mí',
    },

    about: {
        heading: { pre: 'Sobre', hi: 'Mí' },
        avatarAlt: 'Ilustración: operador Red Team encapuchado frente a una terminal',
        paragraphs: [
            [
                'Soy ', { b: 'pentester ofensivo independiente' }, ' especializado en aplicaciones web, APIs e infraestructura, con experiencia práctica en auditorías de seguridad, programas de bug bounty y automatización de pruebas. Mi metodología se basa en ',
                { b: 'OWASP Top 10' }, ', ', { b: 'PTES' }, ' y ', { b: 'MITRE ATT&CK' },
                ', con un enfoque en la identificación y explotación de vulnerabilidades críticas como ',
                { b: 'SQL Injection' }, ', ', { b: 'XSS' }, ', ', { b: 'SSRF' }, ', ', { b: 'RCE' }, ' y fallas de lógica de negocio.',
            ],
            [
                'He ejecutado ', { b: '27+ auditorías de seguridad' }, ' con un promedio de ', { b: '8+ vulnerabilidades por evaluación' },
                ', incluyendo hallazgos de severidad alta y crítica, y mantengo una ', { b: 'tasa de validación del 75%' },
                ' en bug bounty. Entrego reportes técnicos claros y resúmenes ejecutivos enfocados en el impacto de negocio y la exposición al riesgo.',
            ],
        ],
        info: [
            { icon: 'bx-map', label: 'Ubicación', value: 'La Habana, Cuba' },
            { icon: 'bx-world', label: 'Modalidad', value: 'Remoto' },
            { icon: 'bx-envelope', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
            { icon: 'bxl-github', label: 'GitHub', value: `github.com/${contact.githubUser}`, href: contact.github, external: true },
            { icon: 'bx-phone', label: 'Teléfono', value: contact.phone, href: contact.whatsapp, external: true },
            { icon: 'bx-check-shield', label: 'Disponibilidad', value: 'Disponible para contratar', className: 'status-available' },
        ],
        cvDownload: 'Descargar CV',
        cvView: 'Ver CV online',
        cvUpdated: 'CV actualizado',
    },

    services: {
        heading: { pre: 'Servicios de', hi: 'Pentesting' },
        items: [
            {
                icon: 'bx-globe',
                title: 'Pentesting Web',
                desc: 'Auditorías ofensivas bajo OWASP Top 10 y PTES: inyección SQL, XSS, SSRF, RCE, control de acceso roto y fallas de lógica de negocio.',
            },
            {
                icon: 'bx-git-branch',
                title: 'Seguridad de APIs',
                desc: 'Pruebas manuales en profundidad combinadas con automatización: control de acceso, validación insuficiente y configuraciones inseguras.',
            },
            {
                icon: 'bx-mobile-alt',
                title: 'Seguridad Móvil',
                desc: 'Auditorías de plataformas móviles bajo metodología OWASP, con foco en hallazgos de severidad alta y crítica.',
            },
            {
                icon: 'bx-server',
                title: 'Infraestructura y Recon',
                desc: 'Reconocimiento automatizado con Python y Bash, enumeración de superficie de ataque y simulaciones controladas de DoS.',
            },
        ],
        methodologyTitle: '// Metodología de trabajo',
        methodology: [
            { step: '01', title: 'Reconocimiento', desc: 'Mapeo de la superficie de ataque con Amass, Nmap y FFUF.' },
            { step: '02', title: 'Análisis', desc: 'Detección de vulnerabilidades con Burp Suite, Nuclei y pruebas manuales.' },
            { step: '03', title: 'Explotación', desc: 'Validación del impacto real con PoCs controladas y reproducibles.' },
            { step: '04', title: 'Reporting', desc: 'Reporte técnico con evidencias y resumen ejecutivo orientado a negocio.' },
        ],
    },

    experience: {
        heading: { pre: 'Mi', hi: 'Experiencia' },
        proTitle: 'Experiencia Profesional',
        eduTitle: 'Educación y Certificaciones',
        techAria: 'Tecnologías',
        jobs: [
            {
                period: 'Ago 2025 — Mar 2026',
                role: 'Penetration Tester (Mid-Level)',
                company: 'INTRUST SECURITY — Remoto',
                items: [
                    ['Auditorías de seguridad ofensiva bajo metodologías ', { b: 'OWASP' }, ' y ', { b: 'PTES' }, ' en aplicaciones web, APIs y plataformas móviles.'],
                    ['Ejecuté ', { b: '27+ auditorías de seguridad' }, ', identificando un promedio de ', { b: '8+ vulnerabilidades por evaluación' }, ', incluyendo hallazgos de severidad ', { b: 'alta y crítica' }, '.'],
                    ['Explotación activa de ', { b: 'SQL Injection' }, ', ', { b: 'XSS' }, ', ', { b: 'SSRF' }, ', ', { b: 'RCE' }, ' y fallas de lógica de negocio.'],
                    ['Automatización de flujos de reconocimiento y explotación con scripts en ', { b: 'Python' }, ' y ', { b: 'Bash' }, '.'],
                    ['Reportes técnicos detallados y resúmenes ejecutivos enfocados en exposición al riesgo e impacto de negocio.'],
                ],
                tech: ['Burp Suite', 'Nuclei', 'SQLMap', 'Python', 'Bash'],
            },
            {
                period: 'Dic 2023 — Ago 2025',
                role: 'Freelancer / Bug Bounty',
                company: 'Investigador de Seguridad Independiente — Remoto',
                items: [
                    ['Participación activa en múltiples programas de ', { b: 'Bug Bounty' }, ' enfocados en aplicaciones web e infraestructura.'],
                    ['Tasa de aceptación de reportes del ', { b: '75%' }, ' (6 de 8 envíos validados).'],
                    ['Pruebas manuales en profundidad combinadas con herramientas automatizadas para descubrir ', { b: 'vulnerabilidades complejas' }, '.'],
                    ['Identificación de debilidades de control de acceso, validación insuficiente y configuraciones inseguras.'],
                ],
                tech: ['Burp Suite', 'FFUF', 'Amass', 'Nuclei'],
            },
            {
                period: 'May 2023 — Dic 2023',
                role: 'Especialista en Monitoreo de Sistemas y Seguridad',
                company: 'XETID DEVELOPMENT COMPANY — La Habana, Cuba',
                items: [
                    ['Monitoreo de disponibilidad, integridad y seguridad usando ', { b: 'Elastic Stack' }, ' (Elasticsearch y Kibana).'],
                    ['Simulaciones controladas de ', { b: 'Denegación de Servicio (DoS)' }, ' para evaluar la resiliencia de la infraestructura.'],
                    ['Generación de ', { b: '40+ reportes de incidentes' }, ' de seguridad, con análisis post-incidente y documentación.'],
                ],
                tech: ['Elasticsearch', 'Kibana'],
            },
        ],
        education: [
            {
                period: '2022 — 2026',
                title: 'Ingeniería en Ciencias de la Computación',
                company: 'Universidad de Ciencias Informáticas (UCI)',
                desc: 'La Habana, Cuba. Enfoque en ciberseguridad, desarrollo de software y análisis de datos.',
            },
            {
                period: 'Feb 2026',
                tag: { text: 'Verificado', className: 'tag-cert' },
                title: 'EF SET Certificate — B1 Intermedio',
                company: 'EF Standard English Test — 41/100',
                link: { key: 'efset', label: 'Verificar certificado' },
            },
            {
                period: 'ICIP',
                tag: { text: 'Certificado', className: 'tag-cert' },
                title: 'ICIP Certificate',
                company: 'Institución: ICIP',
                link: { key: 'icip', label: 'Ver certificado' },
            },
            {
                period: 'Idiomas',
                title: 'Idiomas',
                languages: [
                    { name: 'Español', level: 'Nativo' },
                    { name: 'Inglés', level: 'B1 — Lectura técnica y reportes' },
                ],
            },
        ],
    },

    skills: {
        heading: { pre: 'Mis', hi: 'Skills' },
        groups: [
            { icon: 'bx-shield-quarter', title: 'Metodologías', items: ['OWASP Top 10', 'PTES', 'MITRE ATT&CK', 'Bug Bounty', 'Threat Modeling'] },
            { icon: 'bx-wrench', title: 'Herramientas', items: ['Burp Suite', 'Nmap', 'Metasploit', 'SQLMap', 'Nuclei', 'FFUF', 'Amass', 'Hashcat', 'John the Ripper'] },
            { icon: 'bx-code-curly', title: 'Lenguajes', items: ['Python', 'Bash', 'JavaScript', 'SQL'] },
            { icon: 'bx-target-lock', title: 'Especializaciones', items: ['Pentesting Web', 'Seguridad de APIs', 'Seguridad Móvil', 'Reconocimiento', 'Explotación'] },
        ],
        vulnLabel: '$ grep -i "exploited" findings.log',
        arsenalTitle: '// Tech Arsenal',
    },

    faq: {
        heading: { pre: 'Preguntas', hi: 'Frecuentes' },
        items: [
            {
                q: '¿Trabajas como pentester independiente?',
                a: 'Sí. Trabajo en remoto como pentester independiente para empresas y equipos de seguridad, y también estoy abierto a posiciones a tiempo completo. Desde 2023 he trabajado en auditorías de seguridad profesionales y en programas de bug bounty.',
            },
            {
                q: '¿Qué tipo de pruebas de penetración realizas?',
                a: 'Pentesting de aplicaciones web, APIs, plataformas móviles e infraestructura, siguiendo OWASP Top 10, PTES y MITRE ATT&CK. Combino pruebas manuales en profundidad con herramientas como Burp Suite, Nuclei, SQLMap y Nmap.',
            },
            {
                q: '¿Qué entregas al final de una auditoría?',
                a: 'Un reporte técnico detallado con los hallazgos, su severidad y las evidencias, y un resumen ejecutivo enfocado en la exposición al riesgo y el impacto de negocio.',
            },
            {
                q: '¿Trabajas en remoto y en qué idiomas?',
                a: 'Sí, trabajo 100% en remoto desde La Habana, Cuba. Hablo español nativo e inglés nivel B1, suficiente para lectura técnica y redacción de reportes.',
            },
            {
                q: '¿Cómo puedo contactarte?',
                a: `Por email a ${contact.email}, por LinkedIn o por WhatsApp al ${contact.phone}. Respondo en menos de 24 horas.`,
            },
        ],
    },

    contact: {
        heading: { pre: '', hi: 'Contacto' },
        title: '// Iniciemos una conversación',
        text: '¿Buscas un pentester independiente para tu equipo o necesitas auditar la seguridad de tu aplicación web, API o infraestructura? Estoy disponible para posiciones remotas y proyectos puntuales.',
        reply: '$ echo "Responderé en menos de 24h"',
        form: {
            name: 'Nombre completo',
            email: 'Correo electrónico',
            topic: 'Asunto',
            phone: 'Teléfono (opcional)',
            message: 'Tu mensaje...',
            submit: 'Enviar Mensaje',
        },
        mail: {
            title: 'NUEVO CONTACTO - PORTFOLIO',
            name: 'Nombre',
            email: 'Email',
            phone: 'Teléfono',
            topic: 'Asunto',
            message: 'Mensaje',
            noPhone: 'No proporcionado',
            sentFrom: 'Enviado desde: Portafolio Web',
        },
    },

    footer: {
        madeWith: 'Diseñado y desarrollado con',
    },
};
