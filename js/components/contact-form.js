
/**
 * Don't Splash Script - Contact Form Validation & Web3Forms
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

  // Add your actual Web3Forms Access Key here
  const WEB3FORMS_ACCESS_KEY = '9ddb1dbe-7ade-4407-a9b7-d4cd9ff8026a';

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function setError(inputElement, hasError) {
    if (!inputElement) return;

    const parentGroup = inputElement.closest('.form-group');

    if (parentGroup) {
      parentGroup.classList.toggle('has-error', hasError);
    }
  }

  // Live input validation
  [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
    if (field) {
      field.addEventListener('input', () => {
        setError(field, false);

        if (errorAlert) {
          errorAlert.style.display = 'none';
        }
      });
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot spam protection
    if (botTrap && botTrap.value.trim() !== '') {
      return;
    }

    if (successAlert) successAlert.style.display = 'none';
    if (errorAlert) errorAlert.style.display = 'none';

    let hasErrors = false;

    // Validate name
    if (!nameInput || nameInput.value.trim().length < 2) {
      setError(nameInput, true);
      hasErrors = true;
    } else {
      setError(nameInput, false);
    }

    // Validate email
    if (!emailInput || !isValidEmail(emailInput.value.trim())) {
      setError(emailInput, true);
      hasErrors = true;
    } else {
      setError(emailInput, false);
    }

    // Validate subject
    if (!subjectInput || subjectInput.value.trim().length < 3) {
      setError(subjectInput, true);
      hasErrors = true;
    } else {
      setError(subjectInput, false);
    }

    // Validate message
    if (!messageInput || messageInput.value.trim().length < 15) {
      setError(messageInput, true);
      hasErrors = true;
    } else {
      setError(messageInput, false);
    }

    if (hasErrors) {
      if (errorAlert) {
        errorAlert.style.display = 'flex';
        errorAlert.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
      return;
    }

    if (!submitBtn) return;

    const originalBtnText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending Inquiry...';

    try {
      // Prepare form data
      const formData = new FormData(form);

      // Add Web3Forms Access Key
      formData.set('access_key', WEB3FORMS_ACCESS_KEY);

      // Send form data to Web3Forms
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json'
          }
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'Form submission failed.'
        );
      }

      // Successful submission
      form.reset();

      if (successAlert) {
        successAlert.style.display = 'flex';
        successAlert.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }

      if (window.showToast) {
        window.showToast(
          'Message Sent',
          'Thank you! Your inquiry has been sent successfully.',
          'success'
        );
      }

    } catch (error) {
      console.error('Web3Forms Error:', error);

      if (errorAlert) {
        errorAlert.style.display = 'flex';
        errorAlert.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }

      if (window.showToast) {
        window.showToast(
          'Submission Failed',
          'Your message could not be sent. Please try again.',
          'error'
        );
      }

    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

document.addEventListener('DOMContentLoaded', initContactForm);
