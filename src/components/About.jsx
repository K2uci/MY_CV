import HackerAvatar from './HackerAvatar.jsx';
import RichText from './RichText.jsx';
import SectionHeading from './SectionHeading.jsx';
import { useLang } from '../i18n.jsx';

function InfoItem({ info }) {
    const body = (
        <>
            <i className={`bx ${info.icon}`}></i>
            <div>
                <span className="info-label">{info.label}</span>
                <span className={`info-value${info.className ? ' ' + info.className : ''}`}>
                    {info.value}
                </span>
            </div>
        </>
    );

    if (!info.href) return <div className="info-item">{body}</div>;

    return (
        <a
            className="info-item"
            href={info.href}
            {...(info.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
            {body}
        </a>
    );
}

export default function About() {
    const { t, cv } = useLang();
    const about = t.about;

    return (
        <section className="about" id="about">
            <SectionHeading number="01" heading={about.heading} />

            <div className="about-container">
                <div className="about-img">
                    <div className="img-frame">
                        <HackerAvatar label={about.avatarAlt} />
                    </div>
                    <span className="circle-spin"></span>
                    <div className="img-decorations">
                        <span className="deco-line"></span>
                        <span className="deco-corner tl"></span>
                        <span className="deco-corner tr"></span>
                        <span className="deco-corner bl"></span>
                        <span className="deco-corner br"></span>
                    </div>
                </div>

                <div className="about-content">
                    <div className="about-terminal" aria-hidden="true">
                        <span className="terminal-cmd">$ cat profile.txt</span>
                    </div>
                    <h3>{t.profile.headline}</h3>
                    {about.paragraphs.map((parts, i) => (
                        <p key={i}><RichText parts={parts} /></p>
                    ))}

                    <div className="about-info-grid">
                        {about.info.map(info => <InfoItem key={info.label} info={info} />)}
                    </div>

                    <div className="btn-box btns">
                        <a href={cv.href} download={cv.downloadName} className="btn">
                            <span>{about.cvDownload}</span>
                            <i className="bx bx-download"></i>
                        </a>
                        <a href={cv.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <span>{about.cvView}</span>
                            <i className="bx bx-show"></i>
                        </a>
                    </div>
                    <p className="cv-updated">{`// ${about.cvUpdated}: ${t.profile.cvUpdated}`}</p>
                </div>
            </div>
        </section>
    );
}
