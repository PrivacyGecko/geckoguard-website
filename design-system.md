# Gecko Guard - Design System

## Brand Identity

### Logo & Brand Mark
- **Primary Logo**: Gecko Guard shield icon with "Privacy Guard" text
- **Icon Only**: Shield with "P" or gecko mascot for compact spaces
- **Beta Badge**: "Beta" tag to indicate early release status

### Brand Voice
- **Professional yet approachable**
- **Security-focused without being paranoid**
- **Educational and transparent**
- **Community-oriented**

---

## Color Palette

### Primary Colors
```css
--primary-navy: #1e293b;        /* Deep navy - trust, security */
--primary-blue: #3b82f6;        /* Bright blue - action, reliability */
--primary-dark: #0f172a;        /* Nearly black - premium feel */
```

### Accent Colors
```css
--accent-green: #22c55e;        /* Success, protection active */
--accent-orange: #f59e0b;       /* Warning, privacy risks */
--accent-red: #ef4444;          /* Danger, threats blocked */
--accent-purple: #8b5cf6;       /* Premium features preview */
```

### Neutral Colors
```css
--gray-50: #f8fafc;            /* Light backgrounds */
--gray-100: #f1f5f9;           /* Card backgrounds */
--gray-200: #e2e8f0;           /* Borders */
--gray-400: #94a3b8;           /* Secondary text */
--gray-600: #475569;           /* Primary text */
--gray-800: #1e293b;           /* Dark text */
--gray-900: #0f172a;           /* Headings */
```

### Dark Mode
```css
--dark-bg: #0f172a;            /* Main background */
--dark-surface: #1e293b;       /* Card surfaces */
--dark-border: #334155;        /* Borders */
--dark-text: #f1f5f9;          /* Primary text */
--dark-text-secondary: #94a3b8; /* Secondary text */
```

---

## Typography

### Font Stack
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
```

### Type Scale
```css
--text-xs: 0.75rem;      /* 12px - captions */
--text-sm: 0.875rem;     /* 14px - body small */
--text-base: 1rem;       /* 16px - body text */
--text-lg: 1.125rem;     /* 18px - large body */
--text-xl: 1.25rem;      /* 20px - subheadings */
--text-2xl: 1.5rem;      /* 24px - headings */
--text-3xl: 1.875rem;    /* 30px - page titles */
--text-4xl: 2.25rem;     /* 36px - hero heading */
--text-5xl: 3rem;        /* 48px - large hero */
```

### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

---

## Components

### Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--primary-blue);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: var(--font-semibold);
  transition: all 0.2s;
}
.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-1px);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: var(--primary-blue);
  border: 1px solid var(--primary-blue);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
}
```

### Cards
```css
.card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 1px solid var(--gray-200);
}
```

### Feature Icons
- **Shield**: Protection active
- **Eye with slash**: Tracker blocking
- **Mask**: Fingerprint spoofing
- **Cookie**: Cookie management
- **Social icons**: Social widget blocking

---

## Layout Patterns

### Hero Section
- **Full-width background** with subtle gradient
- **Centered content** with max-width container
- **Large headline** with supporting subtext
- **CTA buttons** prominently displayed
- **Trust indicators** (no data collection, local processing)

### Feature Grid
- **3-column grid** on desktop, single column on mobile
- **Icon + title + description** pattern
- **Consistent spacing** and alignment
- **Hover effects** for interactivity

### Stats/Numbers Section
- **Large numbers** with descriptions
- **Real-time feeling** with animated counters
- **Social proof** elements

---

## Visual Elements

### Gradients
```css
--gradient-hero: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
--gradient-card: linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%);
--gradient-accent: linear-gradient(90deg, #22c55e 0%, #3b82f6 100%);
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.07);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
--shadow-xl: 0 20px 25px rgba(0,0,0,0.1);
```

### Border Radius
```css
--radius-sm: 0.25rem;    /* 4px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
```

---

## Responsive Breakpoints

```css
--mobile: 640px;         /* Mobile phones */
--tablet: 768px;         /* Tablets */
--desktop: 1024px;       /* Desktop */
--wide: 1280px;          /* Wide screens */
```

---

## Animations

### Micro-interactions
```css
--transition-fast: 0.15s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

### Hover Effects
- **Subtle lift** on cards and buttons
- **Color transitions** on interactive elements
- **Scale effects** on icons

---

## Privacy-Focused Design Elements

### Trust Indicators
- **Local processing badges**
- **No data collection callouts**
- **Security audit mentions**
- **Open source indicators**

### Visual Metaphors
- **Shields** for protection
- **Locks** for security
- **Eyes with slashes** for anti-tracking
- **Masks** for anonymity

---

## Accessibility

### Color Contrast
- **WCAG AA compliant** color combinations
- **High contrast mode** support
- **Color blind friendly** palette

### Interactive Elements
- **Focus indicators** for keyboard navigation
- **Proper ARIA labels**
- **Semantic HTML structure**

---

This design system creates a **professional, trustworthy, modern** appearance that elevates the Gecko Guard brand while maintaining focus on privacy and security.