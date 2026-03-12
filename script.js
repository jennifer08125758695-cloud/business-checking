/* =============================================
   SMART MONEY DAILY - Main Script
   ============================================= */

(function () {
  'use strict';

  /* ---- Reading Progress Bar ---- */
  const progressBar = document.getElementById('progress-bar');
  function updateProgress() {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }

  /* ---- Back to Top ---- */
  const backToTop = document.getElementById('back-to-top');
  function toggleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Mobile Menu ---- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
    });
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
  }

  /* ---- Newsletter Form ---- */
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn = form.querySelector('button');
      if (input && input.value.includes('@')) {
        btn.textContent = '✓ Subscribed!';
        btn.style.background = '#1a7f5a';
        input.value = '';
        setTimeout(function () {
          btn.textContent = 'Subscribe';
          btn.style.background = '';
        }, 3000);
      } else {
        if (input) {
          input.style.borderColor = '#e8423a';
          setTimeout(function () { input.style.borderColor = ''; }, 2000);
        }
      }
    });
  });

  /* ---- Contact Form ---- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit');
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#1a7f5a';
      contactForm.reset();
      setTimeout(function () {
        btn.textContent = 'Send Message';
        btn.style.background = '';
      }, 4000);
    });
  }

  /* ---- Scroll Events ---- */
  window.addEventListener('scroll', function () {
    updateProgress();
    toggleBackToTop();
  }, { passive: true });

  /* ---- Smooth anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---- CTA Click Tracking (console log — replace with your pixel) ---- */
  document.querySelectorAll('.cta-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const label = this.dataset.cta || this.textContent.trim();
      console.log('[CTA Click]', label);
      // Replace with: fbq('track', 'Lead'); OR gtag('event', 'click', {...});
    });
  });

  /* ---- Lazy-load images ---- */
  if ('IntersectionObserver' in window) {
    const lazyImgs = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    lazyImgs.forEach(function (img) { observer.observe(img); });
  }

  /* ---- Active nav highlight ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a, .mobile-menu a').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.style.color = 'var(--primary)';
    }
  });

})();
