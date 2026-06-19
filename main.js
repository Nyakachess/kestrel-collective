/* ===================================================
   KESTREL COLLECTIVE — Main JavaScript
   =================================================== */

(function () {
  'use strict';

  /* ===== DARK MODE TOGGLE ===== */
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const html = document.documentElement;
  let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  html.setAttribute('data-theme', currentTheme);
  updateToggleIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', currentTheme);
      updateToggleIcon(currentTheme);
    });
  }

  function updateToggleIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'dark') {
      themeToggle.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      themeToggle.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  /* ===== STICKY HEADER SCROLL BEHAVIOUR ===== */
  const header = document.getElementById('header');
  let lastScrollY = 0;

  const onScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    if (scrollY > lastScrollY && scrollY > 300) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }
    lastScrollY = scrollY;
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ===== MOBILE NAV TOGGLE ===== */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ===== SMOOTH SCROLL FOR BUTTONS ===== */
  window.scrollTo = function (selector) {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile nav if open
        if (navLinks && navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      }
    });
  });

  /* ===== HOW IT WORKS TABS ===== */
  const tabBtns = document.querySelectorAll('.how-tab-btn');
  const tabContents = {
    partners: document.getElementById('tab-partners'),
    graduates: document.getElementById('tab-graduates'),
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      Object.keys(tabContents).forEach(key => {
        if (tabContents[key]) {
          tabContents[key].classList.toggle('hidden', key !== tab);
        }
      });
    });
  });

  /* ===== SCROLL REVEAL ===== */
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach(el => observer.observe(el));

  /* ===== FORM SUBMISSION ===== */
  
  handleForm(
    'partnerForm',
    'Thank you for your enquiry. A member of the Kestrel team will be in touch to discuss your project soon.'
  );
  handleForm(
    'gradForm',
    'Thank you for registering your interest with Kestrel Collective. We\'ll be in touch about suitable project opportunities.'
  );

  /* ===== MARQUEE PAUSE ON REDUCED MOTION ===== */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const track = document.querySelector('.marquee-track');
    if (track) track.style.animationPlayState = 'paused';
  }

  /* ===== ACTIVE NAV HIGHLIGHT ON SCROLL ===== */
  const sections = document.querySelectorAll('section[id]');
  const navAnchorLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchorLinks.forEach(link => {
            link.style.color = link.getAttribute('href') === '#' + entry.target.id
              ? 'var(--color-teal)'
              : '';
          });
        }
      });
    },
    { threshold: 0.3 }
  );
  sections.forEach(section => sectionObserver.observe(section));

})();
