// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hide');
    }, 1800);
});

// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
});
function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
}
animateRing();
document.querySelectorAll('a, button, .hoverable').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        ring.style.width = '50px';
        ring.style.height = '50px';
        ring.style.borderColor = 'rgba(108,99,255,0.8)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.borderColor = 'rgba(108,99,255,0.5)';
    });
});

// Theme toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'light') {
        html.removeAttribute('data-theme');
    } else {
        html.setAttribute('data-theme', 'light');
    }
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Stagger siblings
document.querySelectorAll('.skills-grid, .projects-grid, .mindset-grid, .about-stats, .timeline, .cooking-grid').forEach(grid => {
    grid.querySelectorAll('.fade-up').forEach((el, i) => {
        el.style.transitionDelay = (i * 0.08) + 's';
    });
});

// Hobby tabs
function switchTab(name) {
    document.querySelectorAll('.hobby-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.hobby-content').forEach(c => c.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById(name).classList.add('active');
}

// Nav scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '0.85rem 2rem';
    } else {
        nav.style.padding = '1.25rem 2rem';
    }
});

