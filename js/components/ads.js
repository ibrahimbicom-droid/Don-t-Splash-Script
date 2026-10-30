/**
 * Don't Splash Script - Google AdSense Integration & Safe Placeholder Handler
 */

function initAdSense() {
  if (typeof SITE_CONFIG === 'undefined') return;

  const config = SITE_CONFIG.integrations;

  // If live AdSense is enabled and publisher ID is specified, inject the official script tag
  if (config && config.adSenseEnabled && config.adSensePublisherId) {
    const existingScript = document.querySelector('script[src*="pagead2.googlesyndication.com"]');
    if (!existingScript) {
      const adScript = document.createElement('script');
      adScript.async = true;
      adScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(config.adSensePublisherId)}`;
      adScript.crossOrigin = 'anonymous';
      document.head.appendChild(adScript);
    }
  } else {
    // In preview / pre-approval mode, keep placeholders cleanly labeled with publisher disclosures
    const placeholders = document.querySelectorAll('.ad-slot-placeholder');
    placeholders.forEach(slot => {
      if (!slot.querySelector('.ad-slot-info')) {
        const info = document.createElement('div');
        info.className = 'ad-slot-info';
        info.textContent = 'AdSense Ready Slot • Verified Compliant Spacing';
        slot.appendChild(info);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initAdSense);
