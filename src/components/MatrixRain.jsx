import { useEffect, useRef } from 'react';

const CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const FONT_SIZE = 14;

export default function MatrixRain() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let drops = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const columns = Math.floor(canvas.width / FONT_SIZE);
            drops = Array.from({ length: columns }, (_, i) => drops[i] ?? Math.random() * canvas.height);
        };
        resize();

        const draw = () => {
            ctx.fillStyle = 'rgba(5, 5, 8, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#ff2e2e';
            ctx.font = FONT_SIZE + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = CHARS[Math.floor(Math.random() * CHARS.length)];
                ctx.fillText(text, i * FONT_SIZE, drops[i] * FONT_SIZE);

                if (drops[i] * FONT_SIZE > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        // Respeta a quien prefiere menos movimiento
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        // Solo dibuja con la pestaña visible (ahorra CPU/batería)
        let interval = null;
        const start = () => { if (!interval) interval = setInterval(draw, 50); };
        const stop = () => { clearInterval(interval); interval = null; };
        const onVisibility = () => (document.hidden ? stop() : start());

        start();
        window.addEventListener('resize', resize);
        document.addEventListener('visibilitychange', onVisibility);
        return () => {
            stop();
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, []);

    return <canvas id="matrix-canvas" ref={canvasRef}></canvas>;
}
