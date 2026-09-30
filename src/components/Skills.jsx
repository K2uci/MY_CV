import SectionHeading from './SectionHeading.jsx';
import { techStack, vulnClasses } from '../data/portfolio.js';
import { useLang } from '../i18n.jsx';

export default function Skills() {
    const { t } = useLang();
    const skills = t.skills;

    return (
        <section className="skills" id="skills">
            <SectionHeading number="04" heading={skills.heading} />

            <div className="skills-grid">
                {skills.groups.map(group => (
                    <div className="skills-box" key={group.title}>
                        <div className="skills-content">
                            <h3 className="title">
                                <i className={`bx ${group.icon}`}></i>
                                {group.title}
                            </h3>
                            <ul className="chip-list">
                                {group.items.map(item => <li className="chip chip-lg" key={item}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div className="vuln-strip">
                <span className="vuln-label">{skills.vulnLabel}</span>
                <ul className="chip-list">
                    {vulnClasses.map(v => <li className="chip chip-vuln" key={v}>{v}</li>)}
                </ul>
            </div>

            <div className="tech-stack">
                <h3 className="tech-title">{skills.arsenalTitle}</h3>
                <div className="tech-icons">
                    {techStack.map(tech => (
                        <div className="tech-item" title={tech.title} key={tech.title}>
                            <i className={`bx ${tech.icon}`}></i><span>{tech.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
