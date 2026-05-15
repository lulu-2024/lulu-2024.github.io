# Design Specification

## Design Philosophy
Modern-minimal professional portfolio. Content is the hero — design supports readability. Subtle animations enhance, never distract.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#f8fafc` | Page background |
| `--bg-secondary` | `#f1f5f9` | Alternating section background |
| `--bg-card` | `#ffffff` | Card surfaces |
| `--text-primary` | `#0f172a` | Headings, important text |
| `--text-secondary` | `#475569` | Body text |
| `--text-muted` | `#94a3b8` | Captions, metadata |
| `--accent` | `#6366f1` | Primary accent (indigo) |
| `--accent-secondary` | `#8b5cf6` | Secondary accent (violet) |
| `--accent-gradient` | `linear-gradient(135deg, #6366f1, #8b5cf6)` | Buttons, hero emphasis |
| `--border` | `#e2e8f0` | Card borders, dividers |
| `--shadow` | `0 4px 6px -1px rgba(0,0,0,0.07)` | Card shadows |

## Typography

| Token | Value |
|-------|-------|
| **Font family** | `'Inter', system-ui, -apple-system, sans-serif` |
| **Heading weight** | 700 (bold) |
| **Body weight** | 400 (regular) |
| **Code weight** | 500 (medium) |
| **Base size** | 16px (1rem) |

| Element | Size | Weight | Line-height |
|---------|------|--------|-------------|
| Hero name (h1) | 3.5rem (56px) | 800 | 1.1 |
| Hero subtitle | 1.25rem (20px) | 400 | 1.5 |
| Section title (h2) | 2rem (32px) | 700 | 1.3 |
| Card title (h3) | 1.25rem (20px) | 600 | 1.4 |
| Body text | 1rem (16px) | 400 | 1.7 |
| Small / caption | 0.875rem (14px) | 400 | 1.5 |

## Spacing Scale

| Token | Value |
|-------|-------|
| `--space-xs` | 0.5rem (8px) |
| `--space-sm` | 1rem (16px) |
| `--space-md` | 1.5rem (24px) |
| `--space-lg` | 2rem (32px) |
| `--space-xl` | 3rem (48px) |
| `--space-2xl` | 4rem (64px) |
| `--space-3xl` | 6rem (96px) |

## Components

### Cards
- White background (`--bg-card`)
- 12px border-radius
- Subtle box-shadow (`--shadow`)
- Hover: translateY(-4px) + shadow intensifies
- Tilt: max 5deg rotation on mouse position (JS)

### Buttons
- **Primary:** accent gradient background, white text, 8px radius
- **Outline:** transparent bg, accent border, accent text
- **Small:** 0.75rem padding-x, 0.5rem padding-y, 0.875rem font-size

### Navigation
- Height: 64px
- Sticky top
- Initial: transparent background
- On scroll: `rgba(255,255,255,0.85)` with `backdrop-filter: blur(12px)`
- Border-bottom appears on scroll

### Section Spacing
- Padding: `--space-3xl` top/bottom
- Max content width: 1100px centered
- Alternating backgrounds: primary / secondary

## Animations

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Typewriter cursor | blink | 0.7s infinite | step-end |
| Section content | fadeInUp (opacity 0→1, translateY 20px→0) | 0.6s | ease-out |
| Card hover | scale + shadow | 0.2s | ease |
| Card tilt | rotateX/Y | live (mousemove) | - |
| Nav background | color + blur transition | 0.3s | ease |
| Mobile menu | slideDown | 0.3s | ease |

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| Mobile | 375px – 639px |
| Tablet | 640px – 1023px |
| Desktop | 1024px+ |

Mobile adjustments:
- Hero name: 2.5rem
- Section title: 1.75rem
- Single column cards
- Hamburger menu replaces nav links
- Reduced section padding
