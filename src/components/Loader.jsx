import { loaderLines } from '../data/portfolio.js';
import { useLang } from '../i18n.jsx';

export default function Loader({ hidden, onSkip }) {
    const { t } = useLang();

    return (
        <div
            className={`loader${hidden ? ' hidden' : ''}`}
            id="loader"
            onClick={onSkip}
            aria-hidden="true"
        >
            <div className="loader-terminal">
                <div className="terminal-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="terminal-title">root@elieser:~#</span>
                </div>
                <div className="terminal-body">
                    {loaderLines.map(line => (
                        <p className="loader-line" key={line.delay} style={{ '--d': line.delay }}>
                            [<span className="green">+</span>] {line.text}
                        </p>
                    ))}
                </div>
            </div>
            <span className="loader-skip">{t.ui.loaderSkip}</span>
        </div>
    );
}
