import { useState } from 'react';
import SectionHeading from './SectionHeading.jsx';
import { contact, contactMethods } from '../data/portfolio.js';
import { useLang } from '../i18n.jsx';

const EMPTY_FORM = { name: '', email: '', topic: '', phone: '', message: '' };
const LINE = '━━━━━━━━━━━━━━━━━━━━━━━━━━━';

export default function Contact() {
    const { t } = useLang();
    const { form: labels, mail } = t.contact;
    const [form, setForm] = useState(EMPTY_FORM);

    const onChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

    const sendEmail = (e) => {
        e.preventDefault();
        const name = form.name.trim();
        const email = form.email.trim();
        const topic = form.topic.trim();
        const phone = form.phone.trim();
        const message = form.message.trim();

        const emailBody = [
            LINE, mail.title, LINE, '',
            `👤 ${mail.name}:     ${name}`,
            `📧 ${mail.email}:      ${email}`,
            `📱 ${mail.phone}:   ${phone || mail.noPhone}`,
            `📋 ${mail.topic}:     ${topic}`,
            '', LINE, `💬 ${mail.message}:`, LINE, '',
            message,
            '', LINE, mail.sentFrom, LINE,
        ].join('\n');

        const subject = `[Portfolio] ${topic} - ${name}`;
        window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        setTimeout(() => setForm(EMPTY_FORM), 1000);
    };

    const field = (id, type, required = true, autoComplete) => (
        <div className="input-field">
            <label htmlFor={id} className="sr-only">{labels[id]}</label>
            <input type={type} placeholder={labels[id]} id={id} value={form[id]} onChange={onChange}
                required={required} autoComplete={autoComplete} />
            <span className="focus"></span>
        </div>
    );

    return (
        <section className="contact" id="contact">
            <SectionHeading number="06" heading={t.contact.heading} />

            <div className="contact-container">
                <div className="contact-info">
                    <h3>{t.contact.title}</h3>
                    <p>{t.contact.text}</p>

                    <div className="contact-methods">
                        {contactMethods.map(m => (
                            <a
                                key={m.label}
                                href={m.href}
                                className="contact-method"
                                {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            >
                                <i className={`bx ${m.icon}`}></i>
                                <div>
                                    <span>{m.label}</span>
                                    <strong>{m.value}</strong>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="contact-terminal">
                        <span className="terminal-cmd">{t.contact.reply}</span>
                    </div>
                </div>

                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="input-box">
                        {field('name', 'text', true, 'name')}
                        {field('email', 'email', true, 'email')}
                    </div>

                    <div className="input-box">
                        {field('topic', 'text', true, 'off')}
                        {field('phone', 'tel', false, 'tel')}
                    </div>

                    <div className="textarea-field">
                        <label htmlFor="message" className="sr-only">{labels.message}</label>
                        <textarea cols="30" rows="10" placeholder={labels.message} id="message"
                            value={form.message} onChange={onChange} required></textarea>
                        <span className="focus"></span>
                    </div>

                    <div className="btn-box btns">
                        <button type="submit" className="btn">
                            <span>{labels.submit}</span>
                            <i className="bx bx-send"></i>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
