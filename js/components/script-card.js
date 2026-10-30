/**
 * Don't Splash Script - Script Card Component & Clipboard Logic
 */

// Helper to escape HTML characters for safe code rendering
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Fallback clipboard method for legacy browsers or restricted iframe environments
function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.top = '-9999px';
  textArea.style.left = '-9999px';
  textArea.setAttribute('readonly', '');
  document.body.appendChild(textArea);
  textArea.select();

  let successful = false;
  try {
    successful = document.execCommand('copy');
  } catch (err) {
    successful = false;
  }
  document.body.removeChild(textArea);
  return successful;
}

// Main Clipboard Copy Handler with feedback
async function copyScriptToClipboard(scriptText, buttonElement, scriptName) {
  let copied = false;

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(scriptText);
      copied = true;
    } catch (err) {
      copied = fallbackCopyText(scriptText);
    }
  } else {
    copied = fallbackCopyText(scriptText);
  }

  if (copied) {
    // Visual button state update
    const originalText = buttonElement.innerHTML;
    buttonElement.classList.add('copied');
    buttonElement.innerHTML = `
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
      Copied Successfully!
    `;

    // Trigger toast alert
    if (window.showToast) {
      window.showToast('Copied to Clipboard!', `"${scriptName}" Lua code is ready to paste into Roblox Studio.`, 'success');
    }

    setTimeout(() => {
      buttonElement.classList.remove('copied');
      buttonElement.innerHTML = originalText;
    }, 2500);
  } else {
    if (window.showToast) {
      window.showToast('Copy Failed', 'Please manually select and copy the Lua code from the box.', 'error');
    }
  }
}

// Function to generate the HTML markup for a single script card
function renderScriptCard(script) {
  const featuresHtml = script.features.map(f => `
    <li class="script-feature-item">
      <svg class="feature-check-icon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
      <span>${escapeHtml(f)}</span>
    </li>
  `).join('');

  return `
    <article class="script-card" id="card-${script.id}">
      <header class="script-card-header">
        <div class="script-title-group">
          <div class="script-badge-row">
            <span class="badge badge-cyan">${escapeHtml(script.badge)}</span>
            <span class="script-type">
              <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
              </svg>
              ${escapeHtml(script.type)}
            </span>
          </div>
          <h3 class="script-title">${escapeHtml(script.name)}</h3>
        </div>
      </header>

      <div class="script-metadata-bar">
        <div class="meta-item">
          <strong>Compatibility:</strong>
          <span>${escapeHtml(script.compatibility)}</span>
        </div>
        <div class="meta-item">
          <strong>Last Verified:</strong>
          <span>${escapeHtml(script.verifiedDate)}</span>
        </div>
        <div class="meta-item">
          <span class="meta-status-dot"></span>
          <span>${escapeHtml(script.verifiedStatus)}</span>
        </div>
      </div>

      <p class="script-description">${escapeHtml(script.description)}</p>

      <ul class="script-features-list">
        ${featuresHtml}
      </ul>

      <div class="script-code-container">
        <div class="script-code-header">
          <span class="code-lang-label">
            <svg class="code-lang-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Lua Snippet
          </span>
          <span class="form-hint">Roblox Studio Ready</span>
        </div>
        <pre class="script-code-block" tabindex="0"><code>${escapeHtml(script.code)}</code></pre>
      </div>

      <footer class="script-card-footer">
        <div class="script-safety-note">
          <svg viewBox="0 0 20 20" width="16" height="16" fill="#10b981">
            <path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd" />
          </svg>
          Safe &amp; Educational Lua • Adheres to Roblox Terms
        </div>
        <button type="button" class="btn btn-copy" data-script-id="${script.id}" aria-label="Copy ${escapeHtml(script.name)} script to clipboard">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
          </svg>
          Copy Script
        </button>
      </footer>
    </article>
  `;
}

// Initialize script cards rendering and event listeners
function initScriptCards() {
  const container = document.getElementById('scripts-list-container');
  if (!container) return;

  if (typeof SCRIPTS_DATA !== 'undefined' && Array.isArray(SCRIPTS_DATA)) {
    container.innerHTML = SCRIPTS_DATA.map(renderScriptCard).join('');

    // Attach click listeners to all Copy Script buttons
    const copyButtons = container.querySelectorAll('.btn-copy');
    copyButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const scriptId = btn.getAttribute('data-script-id');
        const scriptObj = SCRIPTS_DATA.find(s => s.id === scriptId);
        if (scriptObj) {
          copyScriptToClipboard(scriptObj.code, btn, scriptObj.name);
        }
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', initScriptCards);
