# Outerview — Design System

A portable reference for the visual style of the Outerview app. Tech: **Tailwind CSS v4** (CSS-first config via `@theme`, no `tailwind.config.ts`) + **shadcn/ui** ("new-york" style) + **Radix** + **lucide** icons. Colors are HSL CSS variables with light/dark themes. The look is warm, editorial, paper-like — serif display headings, a single warm-red brand accent, no drop shadows (elevation is done with transforms + subtle background tints).

---

## 1. Fonts

Three variable web fonts, loaded via `@font-face` from jsDelivr/fontsource.

| Role | Family | Stack | Notes |
|------|--------|-------|-------|
| **Display / headings** | `Fraunces` | `'Fraunces', 'Google Sans Flex', serif` | Editorial serif. Used for `h1`–`h6`, logo. |
| **Body / UI (sans)** | `Google Sans Flex` | `'Google Sans Flex', system-ui, sans-serif` | Default body font. Full variable axes (wght, wdth, etc.). |
| **Editorial writing** | `Literata` | `'Literata', serif` | Used in the post editor for long-form writing. |

Tailwind tokens:
```css
--font-sans:    'Google Sans Flex', system-ui, sans-serif;   /* font-sans */
--font-display: 'Fraunces', 'Google Sans Flex', serif;        /* font-display */
```

Body sets OpenType stylistic sets: `font-feature-settings: "ss01", "ss02";` plus antialiasing.

### Heading rules (global)
```css
h1,h2,h3,h4,h5,h6 { font-family: 'Fraunces'; font-weight: 600; letter-spacing: -0.01em; }
h1               { font-weight: 700; letter-spacing: -0.02em; }   /* tighter tracking */
.logo-text       { font-family: 'Fraunces'; font-weight: 400; letter-spacing: -0.01em; }
```

### @font-face declarations (copy these)
```css
@font-face { font-family:'Literata'; font-style:normal; font-display:swap; font-weight:200 900;
  src:url('https://cdn.jsdelivr.net/fontsource/fonts/literata:vf@latest/latin-wght-normal.woff2') format('woff2-variations'); }
@font-face { font-family:'Literata'; font-style:italic; font-display:swap; font-weight:200 900;
  src:url('https://cdn.jsdelivr.net/fontsource/fonts/literata:vf@latest/latin-wght-italic.woff2') format('woff2-variations'); }
@font-face { font-family:'Fraunces'; font-style:normal; font-display:swap; font-weight:100 900;
  src:url('https://cdn.jsdelivr.net/fontsource/fonts/fraunces:vf@latest/latin-standard-normal.woff2') format('woff2-variations'); }
@font-face { font-family:'Fraunces'; font-style:italic; font-display:swap; font-weight:100 900;
  src:url('https://cdn.jsdelivr.net/fontsource/fonts/fraunces:vf@latest/latin-standard-italic.woff2') format('woff2-variations'); }
@font-face { font-family:'Google Sans Flex'; font-style:normal; font-display:swap; font-weight:100 900; font-stretch:25% 151%;
  src:url('https://cdn.jsdelivr.net/fontsource/fonts/google-sans-flex:vf@latest/latin-standard-normal.woff2') format('woff2-variations'); }
```

---

## 2. Sizes

### Border radius
Base radius is `0.5rem` (8px). Scale derived from it:
```css
--radius: 0.5rem;
--radius-sm:  calc(var(--radius) - 4px);  /* 4px */
--radius-md:  calc(var(--radius) - 2px);  /* 6px */
--radius-lg:  var(--radius);              /* 8px */
--radius-xl:  calc(var(--radius) + 4px);  /* 12px */
--radius-2xl: calc(var(--radius) + 8px);  /* 16px */
--radius-card: 12px;                       /* cards / mockups */
```

### Type scale (used in the blog/article editor as a reference)
| Element | Size | Weight | Line-height |
|---------|------|--------|-------------|
| h2 | 1.25rem | 600 | 1.4 |
| h3 | 1.05rem | 600 | 1.4 |
| h4 | 1rem | 500 (0.7 opacity) | 1.4 |
| body | 1rem | 400 | — |

Otherwise use Tailwind's default text scale (`text-xs` … `text-2xl` …). Buttons use `text-sm` (sm size: `text-xs`).

### Button heights
`default` 36px (`min-h-9`) · `sm` 32px (`min-h-8`) · `lg` 40px (`min-h-10`) · `icon` 36×36 (`h-9 w-9`).

---

## 3. Colors

Brand color is **`#E63B2E`** (warm red) → `hsl(5 78% 53%)`. All theme colors are HSL CSS variables consumed as `hsl(var(--token))`. Two themes: `:root` (light) and `.dark`.

### Light theme (`:root`)
| Token | HSL | Hex / note |
|-------|-----|-----------|
| `--background` | `30 33% 97%` | `#FAF8F5` warm white |
| `--foreground` | `0 0% 7%` | `#111111` true dark |
| `--card` | `0 0% 100%` | pure white |
| `--card-foreground` | `0 0% 7%` | |
| `--popover` | `0 0% 100%` | |
| `--primary` | `5 78% 53%` | `#E63B2E` brand red |
| `--primary-foreground` | `0 0% 100%` | white |
| `--secondary` | `35 20% 94%` | warm tint |
| `--secondary-foreground` | `0 0% 7%` | |
| `--muted` | `35 15% 92%` | |
| `--muted-foreground` | `33 7% 46%` | `#7A756D` muted text |
| `--accent` | `5 78% 53%` | same as primary |
| `--accent-foreground` | `0 0% 100%` | |
| `--destructive` | `0 72% 51%` | red |
| `--destructive-foreground` | `0 0% 98%` | |
| `--border` | `30 15% 88%` | soft warm border |
| `--input` | `30 12% 90%` | |
| `--ring` | `5 78% 53%` | brand (focus ring) |

### Dark theme (`.dark`) — warm dark
| Token | HSL |
|-------|-----|
| `--background` | `30 18% 8%` |
| `--foreground` | `40 15% 90%` |
| `--card` | `30 15% 11%` |
| `--primary` | `5 78% 60%` (slightly lighter red) |
| `--secondary` | `30 12% 16%` |
| `--muted` | `30 10% 18%` |
| `--muted-foreground` | `35 8% 55%` |
| `--accent` | `5 78% 60%` |
| `--destructive` | `0 62% 50%` |
| `--border` | `30 10% 20%` |
| `--input` | `30 10% 22%` |
| `--ring` | `5 78% 60%` |

### Brand HSL parts (for opacity math)
```css
--brand-h: 5; --brand-s: 78%; --brand-l: 53%;   /* #E63B2E */
```

### Status colors (badges)
Brand palette: `#E63B2E` (red), `#FFFF36` (yellow), `#2E8142` (green), `#FDE9BE` (cream).

| Status | bg (light) | fg (light) |
|--------|-----------|-----------|
| pending | `50 100% 92%` | `50 100% 25%` |
| approved | `136 48% 90%` | `136 48% 28%` |
| scheduled | `39 95% 87%` | `39 60% 35%` |
| published | `136 48% 85%` | `136 48% 25%` |

Utility classes: `.status-pending`, `.status-approved`, `.status-scheduled`, `.status-published`. Special-case brand colors used inline: LinkedIn blue `#0a66c2`, success green `emerald-600/700`.

### Semantic surface helpers
```css
--button-outline:      rgba(0,0,0,.1);    /* dark: rgba(255,255,255,.1) */
--badge-outline:       rgba(0,0,0,.06);
--card-border-subtle:  rgba(0,0,0,.06);
--card-hover:          rgba(0,0,0,.03);
--elevate-1:           rgba(0,0,0,.02);
--elevate-2:           rgba(0,0,0,.05);
```

---

## 4. Button styles

shadcn/ui `Button` built with `class-variance-authority`. Base classes:
```
inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md
text-sm font-medium transition-colors cursor-pointer
focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
disabled:pointer-events-none disabled:opacity-50
[&_svg]:size-4 [&_svg]:shrink-0
hover-elevate active-elevate-2
```

### Variants
| Variant | Classes |
|---------|---------|
| `default` | `bg-primary text-primary-foreground border border-primary-border` (no color hover — uses elevate) |
| `destructive` | `bg-destructive text-destructive-foreground shadow-sm border-destructive-border` |
| `outline` | `border [border-color:var(--button-outline)] shadow-xs active:shadow-none` (transparent bg, inherits text color) |
| `secondary` | `border bg-secondary text-secondary-foreground border-secondary-border` |
| `ghost` | `border border-transparent` |
| `link` | `text-primary underline-offset-4 hover:underline` |
| `success` | `bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-700` |
| `linkedin` | `bg-[#0a66c2] hover:bg-[#0a66c2]/90 text-white border-[#0a66c2]` |

### Sizes
| Size | Classes |
|------|---------|
| `default` | `min-h-9 px-4 py-2` |
| `sm` | `min-h-8 rounded-md px-3 text-xs` |
| `lg` | `min-h-10 rounded-md px-8` |
| `icon` | `h-9 w-9` |

### Key interaction philosophy — **no shadows, elevation via transform**
Global `box-shadow: none !important` on everything. Buttons/cards "lift" using transform helpers instead:
```css
.hover-elevate   { transition: transform 100ms ease, background-color 100ms ease; }
.hover-elevate:hover  { transform: translateY(-1px); }
.hover-elevate:active,
.active-elevate-2:active { transform: translateY(0); }

.card-hover:hover { transform: translateY(-2px); background-color: var(--card-hover); }
```

Focus state (global):
```css
:focus-visible { outline: none; ring: 2px hsl(primary/40); ring-offset: 2px; }
```

---

## 5. Signature effects & textures

These give the app its editorial / paper character — optional but on-brand.

- **`.paper-texture`** — subtle SVG fractal-noise grain overlay (`opacity: 0.025`, `mix-blend-mode: multiply`).
- **`.divider`** — 1px horizontal gradient line fading at both ends.
- **`.glass-bevel`** — gradient 1px border (brand-red → white) via mask trick, for a soft 3D glass edge.
- **`.mockup-border` / `.mockup-border-glow`** — animated rotating "comet" border in brand red (uses `@property --border-angle` + conic-gradient), for product mockups/screenshots.
- **`.text-balance`** — `text-wrap: balance` for headlines.
- **`.no-scrollbar`** — hides scrollbars.
- Keyframe animations available: `fadeInUp`, `gentle-hover` (`.floating-post-visible`), `speaking-ring`, `cursor-blink`, `squiggle-draw`, `circle-draw`, `border-rotate`.

---

## 6. Quick-start for another project

1. Use **Tailwind v4** with CSS-first config. In your main CSS: `@import "tailwindcss";` then an `@theme inline { ... }` block mapping `--color-*` to `hsl(var(--*))` and the `--font-*` / `--radius-*` tokens above.
2. Drop in the `@font-face` declarations (section 1) and the `:root` + `.dark` variable blocks (section 3).
3. Set base layer: `body { font-family: var(--font-sans); }`, headings → Fraunces, `box-shadow: none !important`, and the `:focus-visible` ring.
4. Add the `hover-elevate` / `active-elevate-2` / `card-hover` utilities (section 4) — these replace shadows everywhere.
5. Use the shadcn `Button` cva (section 4) for buttons.

**Essence:** warm off-white `#FAF8F5` canvas, near-black text, one warm-red accent `#E63B2E`, Fraunces serif headings over Google Sans Flex body, 8px base radius, and zero drop shadows — depth comes from 1px transforms and tinted backgrounds.
