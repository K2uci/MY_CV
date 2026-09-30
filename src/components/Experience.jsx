import RichText from './RichText.jsx';
import SectionHeading from './SectionHeading.jsx';
import { certLinks } from '../data/portfolio.js';
import { useLang } from '../i18n.jsx';

function TimelineItem({ period, tag, children }) {
    return (
        <div className="education-content">
            <div className="content">
                <div className="content-header">
                    <div className="year">
                        <i className="bx bxs-calendar"></i>
                        {period}
                    </div>
                    {tag && <span className={`tag ${tag.className}`}>{tag.text}</span>}
                </div>
                {children}
            </div>
        </div>
    );
}

export default function Experience() {
    const { t } = useLang();
    const exp = t.experience;

    return (
        <section className="education" id="experience">
            <SectionHeading number="03" heading={exp.heading} />

            <div className="education-row">
                <div className="education-column">
                    <h3 className="title">
                        <i className="bx bx-briefcase"></i>
                        {exp.proTitle}
                    </h3>
                    <div className="education-box">
                        {exp.jobs.map(job => (
                            <TimelineItem key={job.role} period={job.period} tag={job.tag}>
                                <h3>{job.role}</h3>
                                <h4 className="company">{job.company}</h4>
                                <ul className="content-list">
                                    {job.items.map((item, i) => (
                                        <li key={i}><RichText parts={item} /></li>
                                    ))}
                                </ul>
                                {job.tech && (
                                    <ul className="chip-list" aria-label={exp.techAria}>
                                        {job.tech.map(tech => <li className="chip" key={tech}>{tech}</li>)}
                                    </ul>
                                )}
                            </TimelineItem>
                        ))}
                    </div>
                </div>

                <div className="education-column">
                    <h3 className="title">
                        <i className="bx bx-certification"></i>
                        {exp.eduTitle}
                    </h3>
                    <div className="education-box">
                        {exp.education.map(item => (
                            <TimelineItem key={item.title} period={item.period} tag={item.tag}>
                                <h3>{item.title}</h3>
                                {item.company && <h4 className="company">{item.company}</h4>}
                                {item.desc && <p className="content-desc">{item.desc}</p>}
                                {item.link && (
                                    <a className="content-link" href={certLinks[item.link.key]} target="_blank" rel="noopener noreferrer">
                                        {item.link.label} <i className="bx bx-link-external"></i>
                                    </a>
                                )}
                                {item.languages?.map(lang => (
                                    <div className="lang-item" key={lang.name}>
                                        <span className="lang-name">{lang.name}</span>
                                        <span className="lang-level">{lang.level}</span>
                                    </div>
                                ))}
                            </TimelineItem>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
