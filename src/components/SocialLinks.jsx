// Iconos de redes sociales (portada y footer)
export default function SocialLinks({ links, className }) {
    return (
        <div className={className}>
            {links.map(s => (
                <a
                    key={s.title}
                    href={s.href}
                    title={s.title}
                    aria-label={s.title}
                    {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                    <i className={`bx ${s.icon}`}></i>
                </a>
            ))}
        </div>
    );
}
