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
   
