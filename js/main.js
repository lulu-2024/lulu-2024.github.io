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
  initCarousel();
  initProjectModal();
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
  const speed = 80;
  const deleteSpeed = 40;
  const pauseEnd = 2000;
  const pauseStart = 400;

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

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);

    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('href') === '#' + current);
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

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

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

      card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
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
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });
}

/* ----- Tech Stack Carousel (Auto-scroll) ----- */
function initCarousel() {
  var track = document.getElementById('skillsTrack');
  if (!track) return;

  var speed = 2.5;       // pixels per frame
  var paused = false;
  var animId;

  function scroll() {
    if (!paused) {
      track.scrollLeft += speed;
      // Loop: when reaching the end, jump back to start
      if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
        track.scrollLeft = 0;
      }
    }
    animId = requestAnimationFrame(scroll);
  }

  // Pause on hover
  track.addEventListener('mouseenter', function () { paused = true; });
  track.addEventListener('mouseleave', function () { paused = false; });

  // Also pause on touch
  track.addEventListener('touchstart', function () { paused = true; });
  track.addEventListener('touchend', function () { paused = false; });

  animId = requestAnimationFrame(scroll);
}

/* ----- Project Modal ----- */
function initProjectModal() {
  var modal = document.getElementById('projectModal');
  var modalImg = document.getElementById('modalImg');
  var modalTitle = document.getElementById('modalTitle');
  var modalDesc = document.getElementById('modalDesc');
  var modalTags = document.getElementById('modalTags');
  var modalLink = document.getElementById('modalLink');
  var modalClose = document.getElementById('modalClose');

  if (!modal) return;

  // Project data
  var projects = {
    cs50: {
      title: 'CS50 Finance',
      desc: 'A full-stack stock trading web application built with Python and Flask. Features include user registration and authentication, portfolio management with real-time stock quotes via IEX Cloud API, buy/sell transaction history, and cash balance tracking. Implements password hashing, session management, and SQLite database for persistent storage. Built as the final project for Harvard\'s CS50 — Introduction to Computer Science.',
      tags: ['Python', 'Flask', 'SQLite', 'HTML/CSS', 'Jinja2'],
      link: 'https://github.com/lulu-2024/CS50-Finance',
      gradient: 'linear-gradient(135deg, #1e3a5f, #2563eb)'
    },
    dsjourney: {
      title: 'My Data Science Journey',
      desc: 'A curated collection of Jupyter notebooks documenting my learning path through data science. Covers data wrangling with Pandas, exploratory data analysis, statistical testing, data visualization with Matplotlib and Seaborn, and introductory machine learning with Scikit-learn. Each notebook is self-contained with explanations, code, and visual outputs — serving as both a personal reference and a portfolio of techniques.',
      tags: ['Python', 'Jupyter', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
      link: 'https://github.com/lulu-2024/My-Data-Science-Journey',
      gradient: 'linear-gradient(135deg, #4c1d95, #7c3aed)'
    },
    powerbi: {
      title: 'Power BI Dashboard',
      desc: 'An interactive Power BI dashboard for real-time data exploration and KPI tracking. Features dynamic filtering, drill-down capabilities, and automated data refresh. Designed to transform raw data into actionable business insights through compelling visualizations. Replace with your own published Power BI embed link to make this dashboard live.',
      tags: ['Power BI', 'DAX', 'Data Visualization', 'SQL'],
      link: '#',
      gradient: 'linear-gradient(135deg, #065f46, #059669)'
    },
    coming: {
      title: 'Coming Soon',
      desc: 'This space is reserved for your next data science project. Whether it\'s a machine learning model, an interactive dashboard, a deep learning experiment, or a data analysis deep-dive — this card is ready to showcase it. Add your project details and GitHub link here.',
      tags: ['Coming Soon'],
      link: '#',
      gradient: 'linear-gradient(135deg, #64748b, #94a3b8)'
    }
  };

  // Open modal on card click
  document.querySelectorAll('.project-card[data-project]').forEach(function (card) {
    card.addEventListener('click', function () {
      var key = card.getAttribute('data-project');
      var p = projects[key];
      if (!p) return;

      modalImg.style.background = p.gradient;
      modalImg.innerHTML = '<span style="font-size:1.5rem;font-weight:700">' + p.title + '</span>';
      modalTitle.textContent = p.title;
      modalDesc.textContent = p.desc;
      modalTags.innerHTML = p.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('');

      // Set up the GitHub button with direct onclick for reliability
      modalLink.setAttribute('onclick', 'window.open(\'' + p.link + '\', \'_blank\')');
      modalLink.href = p.link;

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', function (e) {
    e.stopPropagation();
    closeModal();
  });

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}

