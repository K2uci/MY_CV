// ============================================
// ENGLISH CONTENT
// Bold fragments: plain string or { b: 'bold text' }
// Source: CV_Ciber_en_08_2026.pdf (updated August 2026)
// ============================================
import { contact } from '../portfolio.js';

export default {
    ui: {
        skipLink: 'Skip to content',
        loaderSkip: '[ click or press any key to skip ]',
        menuOpen: 'Open menu',
        menuClose: 'Close menu',
        navAria: 'Main navigation',
        home: 'Home',
        statusTitle: 'Available for new opportunities',
        langSwitch: { label: 'ES', title: 'Ver en español', hrefLang: 'es' },
        backTop: 'Back to top',
        external: 'opens in a new tab',
    },

    nav: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'faq', label: 'FAQ' },
        { id: 'contact', label: 'Contact' },
    ],

    profile: {
        role: 'Red Team Operator',
        headline: 'Offensive Penetration Tester | Web, APIs & Infrastructure',
        location: 'Havana, Cuba',
        cvUpdated: 'August 2026',
    },

    home: {
        badges: {
            available: 'Open to work',
            mode: 'Remote · Freelance or full-time',
            methods: 'OWASP · PTES · MITRE ATT&CK',
        },
        intro: [
            { b: 'Freelance penetration tester' }, ' specializing in web application, API and infrastructure security testing. Hands-on experience in ',
            { b: 'security assessments' }, ', ', { b: 'bug bounty' },
            ' programs and test automation. Methodical, impact-driven approach with a strong focus on identifying high-risk vulnerabilities and delivering clear technical and executive-level reporting.',
        ],
        stats: [
            { count: 27, suffix: '+', label: 'Assessments' },
            { count: 8, suffix: '+', label: 'Vulns / engagement' },
            { count: 75, suffix: '%', label: 'BB acceptance' },
            { count: 40, suffix: '+', label: 'Reports' },
        ],
        ctaContact: 'Get in touch',
        ctaCv: 'Download CV',
        scroll: 'Scroll',
        scrollAria: 'Go to About',
    },

    about: {
        heading: { pre: 'About', hi: 'Me' },
        avatarAlt: 'Illustration: hooded Red Team operator in front of a terminal',
        paragraphs: [
            [
                'I am a ', { b: 'freelance offensive penetration tester' }, ' specializing in web applications, APIs and infrastructure, with hands-on experience in security assessments, bug bounty programs and test automation. My methodology is based on ',
                { b: 'OWASP Top 10' }, ', ', { b: 'PTES' }, ' and ', { b: 'MITRE ATT&CK' },
                ', focused on identifying and exploiting critical vulnerabilities such as ',
                { b: 'SQL Injection' }, ', ', { b: 'XSS' }, ', ', { b: 'SSRF' }, ', ', { b: 'RCE' }, ' and business logic flaws.',
            ],
            [
                'I have executed ', { b: '27+ security assessments' }, ' with an average of ', { b: '8+ vulnerabilities per engagement' },
                ', including high and critical severity findings, and hold a ', { b: '75% report acceptance rate' },
                ' in bug bounty. I deliver clear technical reports and executive summaries focused on business impact and risk exposure.',
            ],
        ],
        info: [
            { icon: 'bx-map', label: 'Location', value: 'Havana, Cuba' },
            { icon: 'bx-world', label: 'Work mode', value: 'Remote' },
            { icon: 'bx-envelope', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
            { icon: 'bxl-github', label: 'GitHub', value: `github.com/${contact.githubUser}`, href: contact.github, external: true },
            { icon: 'bx-phone', label: 'Phone', value: contact.phone, href: contact.whatsapp, external: true },
            { icon: 'bx-check-shield', label: 'Availability', value: 'Open to work', className: 'status-available' },
        ],
        cvDownload: 'Download CV',
        cvView: 'View CV online',
        cvUpdated: 'CV updated',
    },

    services: {
        heading: { pre: 'Pentesting', hi: 'Services' },
        items: [
            {
                icon: 'bx-globe',
                title: 'Web Pentesting',
                desc: 'Offensive assessments following OWASP Top 10 and PTES: SQL injection, XSS, SSRF, RCE, broken access control and business logic flaws.',
            },
            {
                icon: 'bx-git-branch',
                title: 'API Security',
                desc: 'In-depth manual testing combined with automation: access control, insufficient validation and insecure configurations.',
            },
            {
                icon: 'bx-mobile-alt',
                title: 'Mobile Security',
                desc: 'Mobile platform assessments following OWASP methodology, focused on high and critical severity findings.',
            },
            {
                icon: 'bx-server',
                title: 'Infrastructure & Recon',
                desc: 'Automated reconnaissance with Python and Bash, attack surface enumeration and controlled DoS simulations.',
            },
        ],
        methodologyTitle: '// How I work',
        methodology: [
            { step: '01', title: 'Reconnaissance', desc: 'Attack surface mapping with Amass, Nmap and FFUF.' },
            { step: '02', title: 'Analysis', desc: 'Vulnerability discovery with Burp Suite, Nuclei and manual testing.' },
            { step: '03', title: 'Exploitation', desc: 'Real impact validation with controlled, reproducible PoCs.' },
            { step: '04', title: 'Reporting', desc: 'Technical report with evidence plus a business-focused executive summary.' },
        ],
    },

    experience: {
        heading: { pre: 'My', hi: 'Experience' },
        proTitle: 'Professional Experience',
        eduTitle: 'Education & Certifications',
        techAria: 'Technologies',
        jobs: [
            {
                period: 'Aug 2025 — Mar 2026',
                role: 'Penetration Tester (Mid-Level)',
                company: 'INTRUST SECURITY — Remote',
                items: [
                    ['Performed offensive security assessments following ', { b: 'OWASP' }, ' and ', { b: 'PTES' }, ' methodologies across web applications, APIs and mobile platforms.'],
                    ['Executed ', { b: '27+ security assessments' }, ', identifying an average of ', { b: '8+ vulnerabilities per engagement' }, ', including ', { b: 'high and critical' }, ' severity findings.'],
                    ['Actively exploited ', { b: 'SQL Injection' }, ', ', { b: 'XSS' }, ', ', { b: 'SSRF' }, ', ', { b: 'RCE' }, ' and business logic flaws.'],
                    ['Automated reconnaissance and exploitation workflows using ', { b: 'Python' }, ' and ', { b: 'Bash' }, ' scripting.'],
                    ['Produced detailed technical reports and executive summaries focused on risk exposure and business impact.'],
                ],
                tech: ['Burp Suite', 'Nuclei', 'SQLMap', 'Python', 'Bash'],
            },
            {
                period: 'Dec 2023 — Aug 2025',
                role: 'Freelancer / Bug Bounty',
                company: 'Independent Security Researcher — Remote',
                items: [
                    ['Actively participated in multiple ', { b: 'Bug Bounty' }, ' programs targeting web applications and infrastructure.'],
                    ['Achieved a ', { b: '75% report acceptance rate' }, ' (6 out of 8 submissions validated).'],
                    ['Combined in-depth manual testing with automated tooling to uncover ', { b: 'complex vulnerabilities' }, '.'],
                    ['Identified access control weaknesses, insufficient validation and insecure configurations.'],
                ],
                tech: ['Burp Suite', 'FFUF', 'Amass', 'Nuclei'],
            },
            {
                period: 'May 2023 — Dec 2023',
                role: 'Systems Monitoring & Security Specialist',
                company: 'XETID DEVELOPMENT COMPANY — Havana, Cuba',
                items: [
                    ['Monitored system availability, integrity and security using the ', { b: 'Elastic Stack' }, ' (Elasticsearch and Kibana).'],
                    ['Conducted controlled ', { b: 'Denial of Service (DoS)' }, ' simulations to evaluate infrastructure resilience.'],
                    ['Generated ', { b: '40+ security incident reports' }, ', including post-incident analysis and documentation.'],
                ],
                tech: ['Elasticsearch', 'Kibana'],
            },
        ],
        education: [
            {
                period: '2022 — 2026',
                title: 'Bachelor of Science in Computer Science',
                company: 'University of Informatics Sciences (UCI)',
                desc: 'Havana, Cuba. Focus on cybersecurity, software development and data analysis.',
            },
            {
                period: 'Feb 2026',
                tag: { text: 'Verified', className: 'tag-cert' },
                title: 'EF SET Certificate — B1 Intermediate',
                company: 'EF Standard English Test — 41/100',
                link: { key: 'efset', label: 'Verify certificate' },
            },
            {
                period: 'ICIP',
                tag: { text: 'Certified', className: 'tag-cert' },
                title: 'ICIP Certificate',
                company: 'Institution: ICIP',
                link: { key: 'icip', label: 'View certificate' },
            },
            {
                period: 'Languages',
                title: 'Languages',
                languages: [
                    { name: 'Spanish', level: 'Native' },
                    { name: 'English', level: 'B1 — Technical reading & reporting' },
                ],
            },
        ],
    },

    skills: {
        heading: { pre: 'My', hi: 'Skills' },
        groups: [
            { icon: 'bx-shield-quarter', title: 'Methodologies', items: ['OWASP Top 10', 'PTES', 'MITRE ATT&CK', 'Bug Bounty', 'Threat Modeling'] },
            { icon: 'bx-wrench', title: 'Tools', items: ['Burp Suite', 'Nmap', 'Metasploit', 'SQLMap', 'Nuclei', 'FFUF', 'Amass', 'Hashcat', 'John the Ripper'] },
            { icon: 'bx-code-curly', title: 'Languages', items: ['Python', 'Bash', 'JavaScript', 'SQL'] },
            { icon: 'bx-target-lock', title: 'Specializations', items: ['Web Pentesting', 'API Security', 'Mobile Security', 'Reconnaissance', 'Exploitation'] },
        ],
        vulnLabel: '$ grep -i "exploited" findings.log',
        arsenalTitle: '// Tech Arsenal',
    },

    faq: {
        heading: { pre: 'Frequently Asked', hi: 'Questions' },
        items: [
            {
                q: 'Do you work as a freelance penetration tester?',
                a: 'Yes. I work remotely as a freelance penetration tester for companies and security teams, and I am also open to full-time positions. Since 2023 I have worked on professional security assessments and bug bounty programs.',
            },
            {
                q: 'What kind of penetration testing do you perform?',
                a: 'Web application, API, mobile and infrastructure pentesting, following OWASP Top 10, PTES and MITRE ATT&CK. I combine in-depth manual testing with tools such as Burp Suite, Nuclei, SQLMap and Nmap.',
            },
            {
                q: 'What do you deliver at the end of an assessment?',
                a: 'A detailed technical report with findings, severity and evidence, plus an executive summary focused on risk exposure and business impact.',
            },
            {
                q: 'Do you work remotely, and in which languages?',
                a: 'Yes, I work 100% remotely from Havana, Cuba. I am a native Spanish speaker with B1 English, enough for technical reading and report writing.',
            },
            {
                q: 'How can I contact you?',
                a: `By email at ${contact.email}, via LinkedIn or on WhatsApp at ${contact.phone}. I reply within 24 hours.`,
            },
        ],
    },

    contact: {
        heading: { pre: '', hi: 'Contact' },
        title: "// Let's talk",
        text: 'Looking for a freelance penetration tester for your team, or need a security assessment of your web application, API or infrastructure? I am available for remote positions and one-off projects.',
        reply: '$ echo "I reply within 24h"',
        form: {
            name: 'Full name',
            email: 'Email address',
            topic: 'Subject',
            phone: 'Phone (optional)',
            message: 'Your message...',
            submit: 'Send Message',
        },
        mail: {
            title: 'NEW CONTACT - PORTFOLIO',
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            topic: 'Subject',
            message: 'Message',
            noPhone: 'Not provided',
            sentFrom: 'Sent from: Portfolio website',
        },
    },

    footer: {
        madeWith: 'Designed & developed with',
    },
};
