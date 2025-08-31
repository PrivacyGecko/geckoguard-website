// Pricko Privacy Guard - Website JavaScript

// =====================================================
// Smooth Scrolling & Navigation
// =====================================================

function scrollToDownload() {
  document.getElementById('download').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// =====================================================
// Stats Animation
// =====================================================

function animateStats() {
  const stats = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = target.textContent;
        
        // Skip if already animated
        if (target.classList.contains('animated')) return;
        target.classList.add('animated');
        
        // Animate numbers (skip percentage values)
        if (!finalValue.includes('%')) {
          animateNumber(target, 0, parseInt(finalValue) || 0, 2000);
        }
      }
    });
  }, { threshold: 0.5 });
  
  stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, start, end, duration) {
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (end - start) * easeOut);
    
    element.textContent = current.toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = end.toLocaleString();
    }
  }
  
  requestAnimationFrame(update);
}

// =====================================================
// Browser Detection & Download Links
// =====================================================

function detectBrowser() {
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('chrome') && !userAgent.includes('edg')) {
    return 'chrome';
  } else if (userAgent.includes('firefox')) {
    return 'firefox';
  } else if (userAgent.includes('brave')) {
    return 'brave';
  } else if (userAgent.includes('edg')) {
    return 'edge';
  }
  
  return 'chrome'; // Default fallback
}

function updateDownloadButtons() {
  const browser = detectBrowser();
  const primaryButton = document.querySelector('.hero-cta .btn-primary');
  
  const browserNames = {
    chrome: 'Chrome',
    firefox: 'Firefox',
    brave: 'Brave',
    edge: 'Edge'
  };
  
  if (primaryButton) {
    primaryButton.textContent = `Download for ${browserNames[browser]}`;
  }
}

// =====================================================
// Privacy Protection Demo
// =====================================================

function startProtectionDemo() {
  const statItems = document.querySelectorAll('.stat-item');
  
  // Simulate real-time blocking
  setInterval(() => {
    statItems.forEach(item => {
      item.style.animation = 'none';
      setTimeout(() => {
        item.style.animation = 'pulse-protection 0.5s ease';
      }, 10);
    });
  }, 3000);
}

// =====================================================
// Dark Mode Toggle (Future Enhancement)
// =====================================================

function initializeDarkMode() {
  // Check for saved theme preference or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// =====================================================
// Form Handling (Future Newsletter Signup)
// =====================================================

function handleNewsletterSignup(event) {
  event.preventDefault();
  const email = event.target.email.value;
  
  // Future: Send to newsletter service
  console.log('Newsletter signup:', email);
  
  // Show success message
  showNotification('Thanks! We\'ll notify you about the token launch.', 'success');
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => notification.classList.add('show'), 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => document.body.removeChild(notification), 300);
  }, 3000);
}

// =====================================================
// Analytics (Privacy-Respectful)
// =====================================================

function trackEvent(eventName, properties = {}) {
  // Future: Add privacy-respectful analytics
  // Only track basic usage patterns, no personal data
  console.log('Event:', eventName, properties);
}

// =====================================================
// Performance Monitoring
// =====================================================

function initializePerformanceMonitoring() {
  // Monitor Core Web Vitals
  if ('web-vital' in window) {
    // Future: Add web vitals monitoring
  }
  
  // Track page load performance
  window.addEventListener('load', () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    trackEvent('page_load', { loadTime });
  });
}

// =====================================================
// Initialization
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all features
  animateStats();
  updateDownloadButtons();
  startProtectionDemo();
  initializeDarkMode();
  initializePerformanceMonitoring();
  
  // Add event listeners
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Track download button clicks
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', () => {
      trackEvent('download_button_click', { 
        buttonText: button.textContent,
        browser: detectBrowser()
      });
    });
  });
});

// =====================================================
// CSS Animations (Added via JavaScript)
// =====================================================

const additionalCSS = `
@keyframes pulse-protection {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); background-color: var(--accent-green); }
  100% { transform: scale(1); }
}

.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-lg);
  color: white;
  font-weight: var(--font-medium);
  transform: translateX(100%);
  transition: transform var(--transition-normal);
  z-index: 9999;
}

.notification.show {
  transform: translateX(0);
}

.notification-success {
  background: var(--accent-green);
}

.notification-error {
  background: var(--accent-red);
}

.notification-info {
  background: var(--primary-blue);
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);