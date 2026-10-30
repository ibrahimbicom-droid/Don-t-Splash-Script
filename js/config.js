/**
 * Don't Splash Script - Global Site Configuration
 * 
 * Centralized settings for site metadata, AdSense integration, 
 * Google Analytics, contact channels, and navigation items.
 */

const SITE_CONFIG = {
  name: "Don't Splash Script",
  shortName: "DontSplashScript",
  domain: "dontsplashscript.com", // Replace with your live production domain
  baseUrl: "https://dontsplashscript.com",
  tagline: "Educational Roblox Studio Lua Scripts, Game Guides & Community Resources for DONT SPLASH",
  description: "Explore useful DONT SPLASH script information, game guides, features, and community resources for Roblox players. Verified Lua snippets and beginner-friendly guides.",
  contactEmail: "support@dontsplashscript.com", // Configurable contact email address
  
  // Google Services Integration (Populate when ready to connect)
  integrations: {
    // Google AdSense Publisher ID (e.g., 'ca-pub-XXXXXXXXXXXXXXXX')
    adSensePublisherId: "", 
    adSenseEnabled: false, // Set to true once approved by Google AdSense
    
    // Google Analytics 4 Measurement ID (e.g., 'G-XXXXXXXXXX')
    gaMeasurementId: "", 
    
    // Google Search Console HTML Verification Meta Tag content
    searchConsoleVerification: ""
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Scripts", href: "/#scripts" },
    { label: "How to Use", href: "/#how-to-use" },
    { label: "FAQs", href: "/#faqs" },
    { label: "About Us", href: "/about/" },
    { label: "Contact Us", href: "/contact/" }
  ],

  // Legal & Footer Links
  legalLinks: [
    { label: "About Us", href: "/about/" },
    { label: "Contact Us", href: "/contact/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms and Conditions", href: "/terms-and-conditions/" },
    { label: "Disclaimer", href: "/disclaimer/" }
  ]
};

// Freeze configuration in browser environment to prevent unauthorized mutation
if (typeof Object.freeze === 'function') {
  Object.freeze(SITE_CONFIG);
}

// Support both ES module and vanilla script tag inclusion
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
