# Smart Money Daily — Advertorial Landing Page
## Complete Website Package

### Files Included
```
smartmoneydaily/
├── index.html          ← Main advertorial landing page
├── style.css           ← All styles (responsive, mobile-first)
├── script.js           ← Interactivity (progress bar, menus, forms)
├── about.html          ← About Us page
├── contact.html        ← Contact page with form
├── disclaimer.html     ← Full FTC-compliant disclaimer
├── privacy-policy.html ← GDPR/CCPA-ready privacy policy
├── terms.html          ← Terms & Conditions
└── images/             ← Place your images here (see below)
```

---

### Image Replacements
Replace these placeholder images in the `images/` folder:
- `images/hero.jpg` — Main hero image (recommended: 1200×500px)
- `images/tip1.jpg` — Real estate / apartment building (600×300px)
- `images/tip2.jpg` — Car / auto insurance (600×300px)
- `images/tip3.jpg` — Credit card / debt relief (600×300px)
- `images/tip4.jpg` — Stock market / investing (600×300px)
- `images/tip5.jpg` — Mobile phone / gaming (600×300px)
- `images/related1.jpg` through `related6.jpg` — Related article thumbnails (400×200px)

To activate an image, find this code in index.html:
```html
<div class="hero-placeholder" ...>...</div>
<!-- To use a real image: <img src="images/hero.jpg" alt="..." /> -->
```
Remove the `<div class="hero-placeholder">` block and uncomment the `<img>` tag.

---

### How to Upload to Hostinger
1. Compress all files into a ZIP
2. Log in to Hostinger File Manager
3. Navigate to `public_html/`
4. Upload the ZIP and extract it
5. Make sure `index.html` is in the root of `public_html/`

---

### CTA Button Setup
All CTA buttons have `href="#"` — replace these with your affiliate links:
- Move #1 Real Estate → your Fundrise/Arrived affiliate link
- Move #2 Insurance → your Jerry/The Zebra affiliate link
- Move #3 Debt Relief → your debt relief affiliate link
- Move #4 Investing → your Robinhood/Public affiliate link
- Move #5 Gaming → your Bingo Cash affiliate link

---

### Tracking Pixel Setup
In `script.js`, find this comment and add your pixel:
```javascript
// Replace with: fbq('track', 'Lead'); OR gtag('event', 'click', {...});
```

---

### Native Ad Platform Notes
- **Taboola / Outbrain**: The page is properly labeled as "Advertorial" in the banner and footer
- **NewsBreak / Nextdoor**: No auto-play media, no popups — compliant by default
- **FTC Compliant**: Advertorial disclosure appears at top of article and in footer

---

### Customization Tips
- Change brand name: Search/replace "Smart Money Daily" across all files
- Change colors: Edit CSS variables in `style.css` under `:root { ... }`
- Change fonts: Update the Google Fonts import URL in `style.css`

© 2026 Smart Money Daily
