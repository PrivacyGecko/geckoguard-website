// GeckoGuard - Refined Website JavaScript
// =========================================

(function() {
  'use strict';

  // =========================================
  // Navigation
  // =========================================

  function initNavigation() {
    const nav = document.querySelector('.nav');
    const progressBar = document.querySelector('.nav-progress');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    if (!nav) return;

    const scrollThreshold = 20;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Scroll progress bar
      if (progressBar) {
        const scrollPercent = (currentScroll / docHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
      }

      // Nav background on scroll
      if (currentScroll > scrollThreshold) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      // Active nav link based on scroll position
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });

    }, { passive: true });
  }

  // =========================================
  // Smooth Scrolling
  // =========================================

  function scrollToDownload() {
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
      const targetPosition = downloadSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 32;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Make globally available
  window.scrollToDownload = scrollToDownload;

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
          const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 32;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // =========================================
  // Scroll Animations
  // =========================================

  function initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll(
      '.section-header, .feature-card, .step, .privacy-feature, .browser-card, .faq-item, .support-card'
    );

    animatedElements.forEach((el, index) => {
      el.classList.add('fade-in');
      el.style.transitionDelay = `${(index % 4) * 0.08}s`;
      observer.observe(el);
    });
  }

  // =========================================
  // Browser Detection
  // =========================================

  function detectBrowser() {
    const ua = navigator.userAgent.toLowerCase();

    if (ua.includes('brave')) return 'brave';
    if (ua.includes('edg')) return 'edge';
    if (ua.includes('chrome')) return 'chrome';
    if (ua.includes('firefox')) return 'firefox';
    if (ua.includes('safari')) return 'safari';

    return 'chrome';
  }

  function updateDownloadButton() {
    const browser = detectBrowser();
    const primaryButton = document.querySelector('.hero-cta .btn-primary');

    const browserNames = {
      chrome: 'Chrome',
      firefox: 'Firefox',
      brave: 'Brave',
      edge: 'Edge',
      safari: 'Safari'
    };

    if (primaryButton && browserNames[browser]) {
      primaryButton.textContent = `Download for ${browserNames[browser]}`;
    }
  }

  // =========================================
  // Browser Mockup Animation
  // =========================================

  function initMockupAnimation() {
    const statItems = document.querySelectorAll('.stat-item');
    if (statItems.length === 0) return;

    let currentIndex = 0;

    setInterval(() => {
      // Reset all
      statItems.forEach(item => {
        item.style.transform = '';
        item.style.background = '';
      });

      // Highlight current
      if (statItems[currentIndex]) {
        statItems[currentIndex].style.transform = 'translateX(4px)';
        statItems[currentIndex].style.background = 'var(--coral-100)';
      }

      currentIndex = (currentIndex + 1) % statItems.length;
    }, 2500);
  }

  // =========================================
  // Mobile Menu
  // =========================================

  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu-link');
    const mobileCta = document.querySelector('.mobile-menu-cta a');

    if (!menuToggle || !mobileMenu) return;

    // Toggle menu on hamburger click
    menuToggle.addEventListener('click', () => {
      const isActive = menuToggle.classList.contains('active');

      if (isActive) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close menu when clicking CTA
    if (mobileCta) {
      mobileCta.addEventListener('click', () => {
        closeMenu();
      });
    }

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuToggle.classList.contains('active')) {
        closeMenu();
      }
    });

    function openMenu() {
      menuToggle.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      mobileMenu.classList.add('active');
      document.body.classList.add('menu-open');
    }

    function closeMenu() {
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  }

  // =========================================
  // Button Interactions
  // =========================================

  function initButtonEffects() {
    document.querySelectorAll('.btn').forEach(button => {
      // Add hover sound effect placeholder
      button.addEventListener('mouseenter', () => {
        button.style.willChange = 'transform, box-shadow';
      });

      button.addEventListener('mouseleave', () => {
        button.style.willChange = 'auto';
      });
    });
  }

  // =========================================
  // Feature Card Hover Effects
  // =========================================

  function initCardEffects() {
    const cards = document.querySelectorAll('.feature-card, .support-card, .browser-card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.willChange = 'transform, box-shadow';
      });

      card.addEventListener('mouseleave', function() {
        this.style.willChange = 'auto';
      });
    });
  }

  // =========================================
  // Performance Optimization
  // =========================================

  function initPerformanceOptimizations() {
    // Lazy load images that are off-screen
    if ('loading' in HTMLImageElement.prototype) {
      document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      });
    }

    // Preconnect to external resources
    const preconnectUrls = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  // =========================================
  // Analytics (Privacy-Respecting)
  // =========================================

  function trackEvent(name, data = {}) {
    // Placeholder for privacy-respecting analytics
    if (window.location.hostname === 'localhost') {
      console.log('📊 Event:', name, data);
    }
  }

  // =========================================
  // Initialize
  // =========================================

  function init() {
    // Core functionality
    initNavigation();
    initSmoothScroll();
    initMobileMenu();
    updateDownloadButton();

    // Visual enhancements
    initScrollAnimations();
    initMockupAnimation();
    initButtonEffects();
    initCardEffects();

    // Performance
    initPerformanceOptimizations();

    // Track page view
    trackEvent('page_view', { path: window.location.pathname });

    console.log('🦎 GeckoGuard ready');
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
