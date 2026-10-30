# Don't Splash Script

> Professional gaming website, educational Roblox Studio Lua resource hub, and gameplay guide for the Roblox game **DONT SPLASH**.

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&style=flat-square)](https://vercel.com)
[![Google AdSense Ready](https://img.shields.io/badge/Google%20AdSense-Compliant-green?style=flat-square)](https://adsense.google.com)
[![W3C Validated](https://img.shields.io/badge/HTML5%2FCSS3-Valid-blue?style=flat-square)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-purple?style=flat-square)](LICENSE)

---

## 🌟 Overview

**Don't Splash Script** is an independent, high-performance web resource designed specifically for Roblox players, game developers, and technical enthusiasts. The site provides:
- **Verified Educational Lua Snippets:** Code modules for velocity calculation, atmospheric poolroom lighting, stealth sprint stamina, and server progression.
- **Game Mechanics Guides:** In-depth breakdowns of noise thresholds, acoustic entity detection, and poolrooms navigation.
- **Cybersecurity & Safety Education:** Clear instructions to help players recognize phishing schemes, malicious executables, and token-stealing exploits.
- **AdSense-Compliant Infrastructure:** Strictly follows Google Publisher Policies with dedicated, safely spaced advertisement containers.

---

## 📁 File & Directory Architecture

The website is engineered with a modular, clean, and dependency-free structure:

```
dont-splash-script/
├── index.html                      # Homepage (/)
├── about/
│   └── index.html                  # About Us Page (/about/)
├── contact/
│   └── index.html                  # Contact Us Page with Validation (/contact/)
├── privacy-policy/
│   └── index.html                  # AdSense-ready Privacy Policy (/privacy-policy/)
├── terms-and-conditions/
│   └── index.html                  # Legal Terms and Conditions (/terms-and-conditions/)
├── disclaimer/
│   └── index.html                  # Fan-site & safety disclaimer (/disclaimer/)
├── css/
│   ├── variables.css               # Design tokens, gaming color palette & typography
│   ├── base.css                    # Modern CSS reset, body layout & prose styles
│   └── components/
│       ├── buttons.css             # Reusable gaming buttons & copy states
│       ├── header.css              # Header, navigation & mobile hamburger drawer
│       ├── hero.css                # Gaming hero banner & stats counters
│       ├── about-game.css          # DONT SPLASH game info cards
│       ├── script-card.css         # Script listing cards, code blocks & copy buttons
│       ├── how-to-use.css          # Beginner educational guide & safety callout
│       ├── features.css            # Game-script concept feature cards
│       ├── faq.css                 # Accessible accordion Q&A
│       ├── forms.css               # Contact form fields & validation states
│       ├── ads.css                 # AdSense-compliant spaced placeholders
│       ├── toast.css               # Floating toast notifications
│       └── footer.css              # Footer layout, navigation & fan-site notice
├── js/
│   ├── config.js                   # Site configuration (domain, email, AdSense ID)
│   ├── main.js                     # Core app initialization & dynamic year updates
│   └── components/
│       ├── navbar.js               # Mobile menu & scroll listener
│       ├── script-card.js          # Clipboard API copy handler & fallback
│       ├── faq.js                  # Accordion expand/collapse interactivity
│       ├── contact-form.js         # Form field validation & bot trap protection
│       ├── ads.js                  # AdSense loader & placeholder manager
│       └── toast.js                # System toast alerts
├── data/
│   ├── scripts.js                  # Verified educational Roblox Studio Lua scripts
│   └── faqs.js                     # 10 comprehensive Q&As for users & SEO
├── assets/
│   └── icons/
│       ├── logo.svg                # Vector brand emblem (neon gaming shield)
│       └── favicon.svg             # Browser tab icon
├── sitemap.xml                     # XML sitemap with all 6 clean routes
├── robots.txt                      # Search engine crawler instructions
├── vercel.json                     # Vercel routing rules & HTTP security headers
└── README.md                       # Complete technical & deployment manual
```

---

## 🚀 Local Development Setup

Because this project is built using standard, modern, zero-dependency web technologies (HTML5, CSS3, ES6 JavaScript), you do not need complex toolchains or package managers to get started.

### Option 1: Any HTTP Static Server (Python, Node, or VS Code)
If you have Python installed:
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

If you have Node.js / npx installed:
```bash
npx serve .
```

### Option 2: VS Code Live Server
1. Open the `dont-splash-script` folder in Visual Studio Code.
2. Click **Go Live** on the bottom status bar (using the Live Server extension).
3. The site will launch automatically at `http://127.0.0.1:5500`.

---

## ⚙️ Configuration & Environment Variables

All primary website settings are centralized in [`js/config.js`](file:///C:/Users/ibrah/.gemini/antigravity/scratch/dont-splash-script/js/config.js).

Open `js/config.js` to modify:
```javascript
const SITE_CONFIG = {
  name: "Don't Splash Script",
  domain: "dontsplashscript.com", // Your production domain
  contactEmail: "support@dontsplashscript.com", // Your active support email
  
  integrations: {
    // 1. Google AdSense Publisher ID (e.g. 'ca-pub-1234567890123456')
    adSensePublisherId: "", 
    adSenseEnabled: false, // Set to true once approved by Google AdSense
    
    // 2. Google Analytics 4 Measurement ID (e.g. 'G-ABC123XYZ')
    gaMeasurementId: "", 
    
    // 3. Google Search Console Verification String
    searchConsoleVerification: ""
  }
};
```

---

## 🌐 Deploying to Vercel

The repository includes a ready-to-use [`vercel.json`](file:///C:/Users/ibrah/.gemini/antigravity/scratch/dont-splash-script/vercel.json) file configured with clean URL rewrites, trailing slash handling, and strict HTTP security headers.

### Deploy via Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Deploy via GitHub (Recommended):
1. Create a new GitHub repository (e.g., `dont-splash-script`).
2. Push your project files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Don't Splash Script"
   git branch -M main
   git remote add origin https://github.com/<your-username>/dont-splash-script.git
   git push -u origin main
   ```
3. Visit [Vercel.com](https://vercel.com) and click **Add New > Project**.
4. Import your `dont-splash-script` repository.
5. Leave Build & Output settings default (it automatically recognizes static HTML).
6. Click **Deploy**.

---

## 🔍 Connecting Google Search Console

1. Log into [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** and enter your domain (`dontsplashscript.com`) or URL prefix (`https://dontsplashscript.com`).
3. Verification options:
   - **DNS Verification (Recommended):** Add the provided TXT record to your domain registrar (Namecheap, Cloudflare, GoDaddy).
   - **HTML Tag Method:** Copy the verification code from Search Console into the `<head>` of `index.html` or set it in `SITE_CONFIG.integrations.searchConsoleVerification`.
4. Once verified, submit your sitemap URL:
   `https://dontsplashscript.com/sitemap.xml`

---

## 🛡️ Google AdSense Compliance Checklist

Before applying for Google AdSense, verify these requirements:
- [x] **Original, high-value content:** All gameplay guides, mechanical analysis, and Lua scripts are original and educational.
- [x] **No malicious downloads or exploit tools:** Plain Lua text only, zero executables.
- [x] **Clear and accessible legal pages:** About Us, Contact Us, Privacy Policy, Terms & Conditions, and Disclaimer linked in header and footer.
- [x] **Spam-protected contact channel:** Functional contact form with honeypot bot trap and real email disclosure.
- [x] **No deceptive ad layouts:** Ad placeholders are labeled "Advertisement" and strictly separated from interactive buttons to prevent accidental clicks.
- [x] **Mobile responsive:** Fluid layout verified for all viewport widths.
- [x] **Custom domain:** Ensure your domain is connected and resolves over HTTPS before submitting to AdSense review.

---

## 📄 License & Disclaimer

Don't Splash Script is an independent fan resource. We are not affiliated with, authorized, maintained, sponsored, or endorsed by Roblox Corporation or the developers of DONT SPLASH.

All Lua code snippets are released under the [MIT License](LICENSE) for educational and Roblox Studio use.
