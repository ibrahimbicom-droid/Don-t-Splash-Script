/**
 * Don't Splash Script - FAQ Accordion Logic & Accessibility
 */

function initFAQs() {
  const container = document.getElementById('faq-accordion-container');
  if (!container) return;

  // Render FAQs from FAQS_DATA if empty
  if (container.children.length === 0 && typeof FAQS_DATA !== 'undefined' && Array.isArray(FAQS_DATA)) {
    container.innerHTML = FAQS_DATA.map((faq, index) => `
      <div class="faq-item" id="faq-item-${index}">
        <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-ans-${index}">
          <span>${faq.question}</span>
          <svg class="faq-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <div class="faq-answer" id="faq-ans-${index}" role="region" aria-labelledby="faq-item-${index}">
          <div class="faq-answer-inner">
            <p>${faq.answer}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Bind toggle clicks
  const faqItems = container.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isCurrentlyActive = item.classList.contains('active');

      // Close other items for neat accordion behavior
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (isCurrentlyActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initFAQs);
