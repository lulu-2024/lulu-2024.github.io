# Technical Specification

## Architecture

```
Single HTML file (index.html)
  ├── <link> → css/style.css
  ├── <link> → Google Fonts (Inter)
  └── <script> → js/main.js
```

Zero build step. Zero runtime dependencies. Open `index.html` in any browser.

## File Responsibilities

### index.html
- Semantic HTML5 structure
- All 9 sections with placeholder content
- Inline `onerror` fallbacks for missing images
- SVG icons inline for Contact section
- `<span class="typewriter">` placeholder for JS typewriter

### css/style.css
- CSS custom properties on `:root`
- Mobile-first responsive design (`@media` queries at 640px, 1024px)
- `@keyframes` for animations
- `.reveal` class for JS-triggered scroll animations
- Print-friendly (no special handling needed)

### js/main.js
- `DOMContentLoaded` event initializes all modules
- Module functions:
  - `initTypewriter()` — cycles through role keywords
  - `initScrollReveal()` — Intersection Observer adds `.visible` to `.reveal`
  - `initNavScroll()` — toggles `.scrolled` class on header
  - `initMobileMenu()` — hamburger toggle + close on link click
  - `initTiltCards()` — mousemove-based 3D tilt on `.tilt-card`
  - `initSmoothScroll()` — intercepts anchor clicks for smooth scroll

## Browser Support
- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

Key features used: CSS Grid, Flexbox, Intersection Observer, backdrop-filter, CSS custom properties.

## Performance Targets
- First paint: < 1s (static HTML, minimal CSS)
- No render-blocking JS (all scripts deferred or at end of body)
- Google Fonts loaded with `display=swap` for no FOIT
- Total page weight target: < 200KB (excluding user images)

## Skill Icons Strategy
Use **Devicon CDN** for skill icons:
```html
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python">
```

Benefits:
- No local icon files needed
- Always up-to-date brand logos
- SVG format = crisp at any size
- Free CDN with high availability

Fallback: `onerror` hides the img, CSS-styled text label remains visible.

## Deployment

Deploy via GitHub Pages:
1. Push code to `lulu-2024/lulu-2024.github.io` repo (or any repo with Pages enabled)
2. GitHub automatically serves from root or `/docs` directory
3. Site available at `https://lulu-2024.github.io/`

Alternative: Push to any repo, enable Pages in Settings → set source to `main` branch `/ (root)`.
