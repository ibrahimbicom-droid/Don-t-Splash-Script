/**
 * Don't Splash Script - Header & Navigation Interactivity
 */

function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Handle header background styling on scroll
  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // Mobile Menu Toggle
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('open');
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (navMenu.classList.contains('open') && 
          !navMenu.contains(event.target) && 
          !toggleBtn.contains(event.target)) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Close mobile drawer when clicking a navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          toggleBtn.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // Highlight active link intelligently across HTTP and file:// protocols
  const currentPath = window.location.pathname.toLowerCase();
  navLinks.forEach(link => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    
    // Ignore internal anchor hashes on subpages
    if (href.startsWith('#') || href.includes('/#')) return;

    if (
      (href === '/' || href === '../' || href === './') && 
      (currentPath.endsWith('/') || currentPath.endsWith('index.html')) &&
      !currentPath.includes('/about') && 
      !currentPath.includes('/contact') && 
      !currentPath.includes('/privacy-policy') && 
      !currentPath.includes('/terms-and-conditions') && 
      !currentPath.includes('/disclaimer')
    ) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else if (
      (href.includes('about') && currentPath.includes('about')) ||
      (href.includes('contact') && currentPath.includes('contact')) ||
      (href.includes('privacy-policy') && currentPath.includes('privacy-policy')) ||
      (href.includes('terms-and-conditions') && currentPath.includes('terms-and-conditions')) ||
      (href.includes('disclaimer') && currentPath.includes('disclaimer'))
    ) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

document.addEventListener('DOMContentLoaded', initNavbar);
