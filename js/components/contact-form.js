/**
 * Don't Splash Script - Contact Form Validation & Anti-Spam
 */

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const botTrap = document.getElementById('bot-field');
  const successAlert = document.getElementById('form-success-alert');
  const errorAlert = document.getElementById('form-error-alert');
  const submitBtn = document.getElementById('contact-submit-btn');

  // Simple email pattern check
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function setError(inputElement, hasError) {
    const parentGroup = inputElement.closest('.form-group');
    if (parentGroup) {
      if (hasError) {
        parentGroup.classList.add('has-error');
      } else {
        parentGroup.classList.remove('has-error');
      }
    }
  }

  // Live input cleanup
  [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
    if (field) {
      field.addEventListener('input', () => {
        setError(field, false);
        if (errorAlert) errorAlert.style.display = 'none';
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check honeypot spam trap
    if (botTrap && botTrap.value.trim() !== '') {
      // Quietly drop bot submission
      return;
    }

    let hasErrors = false;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      setError(nameInput, true);
      hasErrors = true;
    } else {
      setError(nameInput, false);
    }

    // Validate Email
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
      setError(emailInput, true);
      hasErrors = true;
    } else {
      setError(emailInput, false);
    }

    // Validate Subject
    if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
      setError(subjectInput, true);
      hasErrors = true;
    } else {
      setError(subjectInput, false);
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 15) {
      setError(messageInput, true);
      hasErrors = true;
    } else {
      setError(messageInput, false);
    }

    if (hasErrors) {
      if (errorAlert) {
        errorAlert.style.display = 'flex';
        errorAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }

    // Simulate submission state
    submitBtn.disabled = true;
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <svg class="animate-spin" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke-width="4" stroke-opacity="0.25"></circle>
        <path stroke-width="4" d="M4 12a8 8 0 018-8v8H4z" fill="currentColor"></path>
      </svg>
      Sending Inquiry...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      form.reset();
      if (errorAlert) errorAlert.style.display = 'none';
      if (successAlert) {
        successAlert.style.display = 'flex';
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      if (window.showToast) {
        window.showToast('Message Sent', 'Thank you! Your inquiry has been recorded and our team will get back to you soon.', 'success');
      }
    }, 1000);
  });
}

document.addEventListener('DOMContentLoaded', initContactForm);
