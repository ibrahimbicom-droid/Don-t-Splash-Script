/**
 * Don't Splash Script - Core Application Orchestration
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year Update
  const currentYear = new Date().getFullYear();
  const yearElements = document.querySelectorAll('.dynamic-year');
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });

  // 2. Populate configurable elements from SITE_CONFIG
  if (typeof SITE_CONFIG !== 'undefined') {
    const emailPlaceholders = document.querySelectorAll('[data-config="contactEmail"]');
    emailPlaceholders.forEach(el => {
      el.textContent = SITE_CONFIG.contactEmail;
      if (el.tagName === 'A') {
        el.setAttribute('href', `mailto:${SITE_CONFIG.contactEmail}`);
      }
    });

    const domainPlaceholders = document.querySelectorAll('[data-config="domain"]');
    domainPlaceholders.forEach(el => {
      el.textContent = SITE_CONFIG.domain;
    });
  }

  // 3. Smooth scrolling for hash links
  const internalHashLinks = document.querySelectorAll('a[href^="#"], a[href^="/#"]');
  internalHashLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;

      const targetId = href.substring(hashIndex + 1);
      const targetElement = document.getElementById(targetId);

      // Only prevent default if we're on the homepage or target exists on current page
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });
});
