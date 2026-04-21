// Mobile Menu Logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate hamburger to X
    hamburger.classList.toggle('toggle');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal, .service-card, .portfolio-item, .price-card');

const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add('visible');
        }
    }
};

window.addEventListener('scroll', revealOnScroll);

// Initial call to check positions on load
revealOnScroll();

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});