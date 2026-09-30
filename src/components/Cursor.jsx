import { useEffect, useRef } from 'react';

const HOVER_TARGETS = 'a, button, .tech-item, .info-item, .contact-method, .education-content';

export default function Cursor() {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const outline = outlineRef.current;

        if (!window.matchMedia('(hover: hover)').matches) {
            dot.style.display = 'none';
            outline.style.display = 'none';
            return;
        }

        let mouseX = 0, mouseY = 0;
        let outlineX = 0, outlineY = 0;
        let frame;

        const onMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
        };

        // Seguimiento suave del contorno
        const animate = () => {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            outline.style.left = outlineX + 'px';
            outline.style.top = outlineY + 'px';
            frame = requestAnimationFrame(animate);
        };
        animate();

        // Delegación de eventos: funciona también con elementos renderizados después
        const onOver = (e) => {
            outline.classList.toggle('hover', !!e.target.closest(HOVER_TARGETS));
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseover', onOver);
        return () => {
            cancelAnimationFrame(frame);
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onOver);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={dotRef}></div>
            <div className="cursor-outline" ref={outlineRef}></div>
        </>
    );
}
