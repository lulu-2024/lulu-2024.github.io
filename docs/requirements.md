# Requirements Document

## Project Name
Personal Portfolio Website for GitHub Pages

## Owner
- **GitHub:** lulu-2024
- **Field:** Data Science / AI
- **Language:** English

## Core Requirements

### R1: Single-Page Portfolio
Static single-page website deployed on GitHub Pages, with smooth-scroll anchor navigation between sections.

### R2: Content Sections
The site must include these 9 sections (modeled after reference portfolio):
1. **Navigation** — Sticky top bar, transparent on hero → solid on scroll, hamburger menu on mobile
2. **Hero** — Name, title, typewriter cycling through role keywords, CTA buttons
3. **About** — Bio/personal summary with stat counters
4. **Tech Stack** — Grid of skill icons (13 items minimum)
5. **Projects** — Cards with title, description, tech tags, GitHub/Demo links + Power BI iframe embed slot
6. **Achievements** — Certifications + honors list
7. **Beyond Data** — Personal interests / extracurriculars
8. **Contact** — Email, LinkedIn, GitHub links + resume download
9. **Footer** — Copyright

### R3: Tech Constraints
- Pure HTML, CSS, JavaScript — no frameworks, no build tools
- Zero runtime dependencies (no GSAP, no jQuery, no icon libraries requiring JS)
- Must work when opened directly from filesystem (no server required)
- Google Fonts (Inter) loaded via CDN link tag

### R4: Visual Style
- Clean, professional, modern-minimal
- NOT excessively animated or flashy
- Subtle micro-interactions only (hover, scroll reveal, typewriter)
- Responsive: mobile (375px), tablet (768px), desktop (1024px+)

### R5: Content Placeholder Strategy
- All content uses obvious placeholders (`Your Name`, `your.email@example.com`)
- User replaces placeholders with real data in Phase 5
- Project cards pre-structured for user's 2 repos (My-Data-Science-Journey, CS50-Finance)

### R6: Power BI Integration
- Reserve an iframe embed slot in Projects section
- User pastes their Power BI publish link when ready

## Non-Requirements
- No dark mode toggle (single theme)
- No CMS or content editing UI
- No analytics or tracking
- No contact form (email link only)

## Reference
- https://arsalan-ahmed17.github.io/my-portfolio/ (same background, same structure philosophy)
