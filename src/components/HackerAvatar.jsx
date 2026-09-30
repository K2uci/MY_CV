// Ilustración SVG de un operador encapuchado frente a su laptop.
// Sustituye la foto original; los colores siguen las variables del tema (rojo / cian).

const CODE_COLUMNS = [
    { x: 30, text: '10110010' },
    { x: 62, text: 'nmap -sV' },
    { x: 330, text: '0x7f3a9c' },
    { x: 362, text: 'SELECT *' },
];

export default function HackerAvatar({ label }) {
    return (
        <svg
            className="hacker-avatar"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={label}
        >
            <defs>
                <radialGradient id="ha-bg" cx="50%" cy="45%" r="65%">
                    <stop offset="0%" stopColor="#2a0609" />
                    <stop offset="60%" stopColor="#0c0508" />
                    <stop offset="100%" stopColor="#050508" />
                </radialGradient>
                <linearGradient id="ha-hood" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1c1c28" />
                    <stop offset="100%" stopColor="#09090f" />
                </linearGradient>
                <linearGradient id="ha-screen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff2e2e" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#ff2e2e" stopOpacity="0" />
                </linearGradient>
                <filter id="ha-glow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <pattern id="ha-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M20 0H0V20" fill="none" stroke="#ff2e2e" strokeOpacity="0.08" strokeWidth="1" />
                </pattern>
            </defs>

            {/* Fondo */}
            <rect width="400" height="400" fill="url(#ha-bg)" />
            <rect width="400" height="400" fill="url(#ha-grid)" />

            {/* Columnas de código */}
            <g className="ha-code" fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#ff2e2e">
                {CODE_COLUMNS.map((col, i) => (
                    <text
                        key={col.x}
                        x={col.x}
                        y="60"
                        style={{ writingMode: 'vertical-rl', animationDelay: `${i * 0.7}s` }}
                    >
                        {col.text}
                    </text>
                ))}
            </g>

            {/* Luz roja detrás de la figura */}
            <circle cx="200" cy="190" r="120" fill="#ff2e2e" opacity="0.08" />

            {/* Hombros / cuerpo */}
            <path
                d="M30 400 C38 330 88 292 148 276 L200 302 L252 276 C312 292 362 330 370 400 Z"
                fill="url(#ha-hood)"
                stroke="#ff2e2e"
                strokeOpacity="0.35"
                strokeWidth="2"
            />
            {/* Cordones de la capucha */}
            <path d="M182 290 L176 338 M218 290 L224 338" stroke="#ff2e2e" strokeOpacity="0.45" strokeWidth="2.5" strokeLinecap="round" />

            {/* Capucha */}
            <path
                d="M200 64 C132 64 100 128 106 200 C109 240 122 266 142 284 L258 284 C278 266 291 240 294 200 C300 128 268 64 200 64 Z"
                fill="url(#ha-hood)"
                stroke="#ff2e2e"
                strokeOpacity="0.55"
                strokeWidth="2.5"
            />

            {/* Hueco del rostro */}
            <path
                d="M200 116 C160 116 144 158 147 198 C150 236 172 264 200 272 C228 264 250 236 253 198 C256 158 240 116 200 116 Z"
                fill="#020203"
            />

            {/* Ojos */}
            <g className="ha-eyes" filter="url(#ha-glow)" fill="#ff2e2e">
                <path d="M166 196 L192 199 L188 205 L170 203 Z" />
                <path d="M234 196 L208 199 L212 205 L230 203 Z" />
            </g>

            {/* Reflejo de la pantalla en el rostro */}
            <path d="M160 236 C180 258 220 258 240 236 L240 272 L160 272 Z" fill="url(#ha-screen)" opacity="0.35" />

            {/* Laptop */}
            <g>
                <path d="M104 330 L296 330 L312 400 L88 400 Z" fill="#0d0d15" stroke="#ff2e2e" strokeOpacity="0.7" strokeWidth="2" />
                <path d="M104 330 L296 330" stroke="#ff5252" strokeWidth="3" filter="url(#ha-glow)" />
                <text
                    x="200"
                    y="374"
                    textAnchor="middle"
                    fontFamily="JetBrains Mono, monospace"
                    fontSize="22"
                    fontWeight="700"
                    fill="#00ffcc"
                    className="ha-logo"
                >
                    {'</>'}
                </text>
            </g>

            {/* Línea de escaneo */}
            <rect className="ha-scan" x="0" y="0" width="400" height="3" fill="#ff2e2e" opacity="0.35" />
        </svg>
    );
}
