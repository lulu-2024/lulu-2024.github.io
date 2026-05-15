/* ============================================================
   Portfolio — main.js
   Zero-dependency interactivity.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initScrollReveal();
  initNavScroll();
  initMobileMenu();
  initTiltCards();
  initSmoothScroll();
});

/* ----- Typewriter Effect ----- */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const roles = [
    'Data Scientist.',
    'AI Enthusiast.',
    'Problem Solver.',
    'Lifelong Learner.'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 80;      // typing speed (ms)
  const deleteSpeed = 40;
  const pauseEnd = 2000;   // pause after word complete
  const pauseStart = 400;  // pause before typing next

  function tick() {
    const current = roles[roleIndex];

    if (!isDeleting) {
      charIndex++;
      if (charIndex > current.length) {
        isDeleting = true;
        setTimeout(tick, pauseEnd);
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(tick, pauseStart);
        return;
      }
    }

    el.textContent = current.substring(0, charIndex);
    setTimeout(tick, isDeleting ? deleteSpeed : speed);
  }

  tick();
}

/* ----- Scroll Reveal (Intersection Observer) ----- */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ----- Nav Scroll Behavior ----- */
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');
  if (!navbar) return;

  // Sticky + blur on scroll
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);

    // Active section highlighting
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('href') === `#${current}`);
    });
  });
}

/* ----- Mobile Menu ----- */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-item');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
      navLinks.classList.remove('open');
    }
  });
}

/* ----- 3D Tilt on Cards ----- */
function initTiltCards() {
  const cards = document.querySelectorAll('.tilt-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ----- Smooth Scroll for Anchor Links ----- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80; // nav height + breathing room
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}
