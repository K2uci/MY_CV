// ============================================
// TERMINAL LOADER
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const loaderLines = document.querySelectorAll('.loader-line');

    // Set animation delays
    loaderLines.forEach(line => {
        const delay = line.getAttribute('data-delay') || 0;
        line.style.setProperty('--d', delay);
    });

    // Hide loader after animations complete
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        initAnimations();
    }, 2200);
});

// Prevent scroll during load
document.body.style.overflow = 'hidden';

// ============================================
// MENU NAVBAR
// ============================================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close menu on link click
navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// ============================================
// SCROLL SETTINGS
// ============================================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                const activeLink = document.querySelector('header nav a[href*="' + id + '"]');
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close mobile menu on scroll
    if (window.innerWidth <= 768) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

// ============================================
// ANIMATIONS ON SCROLL
// ============================================
function initAnimations() {
    // Intersection Observer for reveal animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Animate skill bars when visible
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.bar span').forEach(bar => {
                    bar.style.animation = 'none';
                    bar.offsetHeight; // trigger reflow
                    bar.style.animation = null;
                });
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.skills-content').forEach(skill => {
        skillObserver.observe(skill);
    });
}

// ============================================
// ANIMATED COUNTERS
// ============================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// Trigger counters when home section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.stat-number').forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const homeStats = document.querySelector('.home-stats');
if (homeStats) statsObserver.observe(homeStats);

// ============================================
// CUSTOM CURSOR
// ============================================
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline && window.matchMedia('(hover: hover)').matches) {
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    // Smooth follow for outline
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';

        requestAnimationFrame(animateOutline);
    }
    animateOutline();

    // Hover effects
    document.querySelectorAll('a, button, .tech-item, .info-item, .contact-method, .education-content').forEach(el => {
        el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
    });
} else {
    if (cursorDot) cursorDot.style.display = 'none';
    if (cursorOutline) cursorOutline.style.display = 'none';
}

// ============================================
// MATRIX RAIN EFFECT
// ============================================
const canvas = document.getElementById('matrix-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * canvas.height;
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(5, 5, 8, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#ff2e2e';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ============================================
// DOWNLOAD CV
// ============================================
function descargarArchivo() {
    const enlace = document.createElement('a');
    enlace.href = './CV_Ciber_es_8_2026.pdf';
    enlace.download = 'Elieser_Hernandez_Red_Team_CV.pdf';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}

// ============================================
// SEND EMAIL
// ============================================
function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const topic = document.getElementById("topic").value.trim();

    const emailBody =
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━
NUEVO CONTACTO - PORTFOLIO
━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nombre:     ${name}
📧 Email:      ${email}
📱 Teléfono:   ${phone || 'No proporcionado'}
📋 Asunto:     ${topic}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 Mensaje:
━━━━━━━━━━━━━━━━━━━━━━━━━━━

${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
Enviado desde: Portafolio Web
━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    const subject = `[Portfolio] ${topic} - ${name}`;
    window.location.href = `mailto:astrorealo31@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Reset form
    setTimeout(() => {
        event.target.reset();
    }, 1000);
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// PARALLAX EFFECT ON HOME
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const homeImgHover = document.querySelector('.home-imgHover');
    if (homeImgHover && scrolled < window.innerHeight) {
        homeImgHover.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});
