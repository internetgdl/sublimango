# SystemsMX Design System

## Overview

**SystemsMX** (systemsmx.com) is a Mexican fiscal/accounting SaaS platform aimed at SMEs (pequeñas y medianas empresas). It simplifies the full fiscal lifecycle in Mexico: downloading XMLs from the SAT, analyzing CFDIs, managing multi-company accounting, and emitting invoices.

### Products

| Product | Description | Sources |
|---|---|---|
| **Analyze** | Core fiscal app — SAT CFDI download (CIEC + e.firma), XML analysis, multi-company dashboard, payroll analysis, CFDI 4.0 emission, contabilidad electrónica module | GitHub: `internetgdl/Analyze` *(not accessible — see caveat below)* |
| **POS Cafetería** | Point-of-sale system for restaurants and cafeterias — menu browsing, cart, payment, admin panel | GitHub: `FernandoDELREAL/proyecto-final-cafeteria` |

### ⚠️ Caveats

- **`internetgdl/Analyze` was not accessible** via the GitHub App. The design system's app-level color/type details were inferred from the live website (systemsmx.com/login) and related sources. Ask the user to install the app on that repo for deeper accuracy.
- The **cafeteria project** is a school project (ITESO University) — it uses ITESO's institutional branding (navy blues), not a dedicated SystemsMX brand identity.
- No dedicated SystemsMX logo file was available. A placeholder is used in UI kits.

---

## CONTENT FUNDAMENTALS

### Language & Tone
- **Language**: Spanish (Mexican), always. UI copy, labels, error messages — all in Spanish.
- **Register**: Professional but approachable. Not overly formal; not casual. The tone is that of a trusted accountant or tax advisor.
- **Voice**: "Tu empresa", "tus CFDIs", "tu contador" — second person singular (*tú*), close and direct.
- **Casing**: Sentence case for most headings. ALL CAPS used occasionally for section banners and labels (e.g., "CREAR NUEVO PLATILLO").
- **Emoji**: Not used in product UI. Possibly in marketing.
- **Numbers**: Mexican number format — peso sign with 2 decimals: `$1,234.00 MXN`.
- **Dates**: dd/mm/yyyy format. SAT/fiscal dates follow ISO 8601 internally.
- **CTAs**: Direct action verbs — "Ingresar", "Guardar", "Descargar", "Analizar", "Registrarse".

### Example Copy
- "Tu negocio no solo factura, evoluciona."
- "Gestión fiscal inteligente para contadores y empresas mexicanas."
- "Descarga masiva de CFDIs desde el SAT"
- "Soporte para CIEC y e.firma"
- "Gestión multiempresa en tiempo real"
- "Bienvenido" / "Iniciar sesión" / "Correo institucional"
- "Modo administrador"

---

## VISUAL FOUNDATIONS

### Colors
Core palette is a **deep navy blue** family — authoritative, trustworthy, fiscal-government adjacent.

| Token | Value | Usage |
|---|---|---|
| `--brand-900` | `#051e30` | Deepest backgrounds, text on light |
| `--brand-800` | `#0a3d62` | Navbar, admin banners |
| `--brand-700` | `#024a7a` | Primary brand blue |
| `--brand-500` | `#1a7fad` | Interactive elements, links |
| `--brand-300` | `#ADD8E6` | Section titles on dark bg, accents |
| `--brand-200` | `#d2e2ee` | Navbar background, surface |
| `--brand-100` | `#eaf3f9` | Page background |
| `--brand-50` | `#f5f9fc` | Card backgrounds |

Semantic: green for success/pay, red for errors/delete, amber for warnings.

### Typography
- **Display**: `Rubik Mono One` — used for section banners, section titles, large callout numbers
- **Body**: `Rubik` (weights 300, 400, 500, 700) — all body text, cards, modals, forms
- **UI / Nav**: `Quicksand` — navbar links, button labels, tab labels

### Backgrounds
- App pages: `#f4f4f4` or `#024a7a` (dark mode) backgrounds
- No full-bleed imagery in the app UI; hero carousels in the POS consumer view
- Cards: white with subtle box-shadow `0 4px 8px rgba(0,0,0,0.1)`, border-radius 10-12px

### Spacing & Layout
- `border-radius`: 6px (inputs, buttons), 10-12px (cards), 12px (modals)
- Fixed top navbar (80px height); content gets `padding-top: 80px`
- Forms centered, max-width ~600px
- Bootstrap 5 grid system

### Animations & Interactions
- Bootstrap modal fade transitions
- Bootstrap carousel auto-play
- Accordion expand/collapse (Bootstrap)
- Button hover: darker shade of same color (e.g. `#0066cc` → `#005bb5`)
- No custom animation beyond Bootstrap defaults

### Shadows
- Cards: `0 4px 8px rgba(0,0,0,0.1)` — soft, subtle
- Modals: `0 0 10px rgba(0,0,0,0.1)`
- No heavy outer glow or inner shadow

### Icons
Bootstrap Icons (`bi-*`) — see ICONOGRAPHY section.

### Corner Radii
- Inputs: 6px
- Buttons: 6px
- Cards / containers: 10–12px
- No pill-style radii except in special badge elements

---

## ICONOGRAPHY

### Icon System
**Bootstrap Icons** (`bootstrap-icons`) is the primary icon font used throughout all products. Loaded from CDN:
```
https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css
```

### Key Icons in Use
| Icon class | Usage |
|---|---|
| `bi-cart2` | Shopping cart |
| `bi-person-circle` | User/profile |
| `bi-box-arrow-right` | Logout |
| `bi-shield-lock` | Admin mode |
| `bi-download` | Download |

### Logo
- `assets/iteso-logo.png` — ITESO University logo (used in the cafeteria project; NOT a SystemsMX brand asset)
- No dedicated SystemsMX logo file was found. The website uses a text-based "SYSTEMSMX" wordmark.
- `assets/qr-sample.png` — Sample QR code for payment flow

### Emoji / Unicode
Not used as icons in product UI.

---

## FILE INDEX

```
README.md                         — This file
SKILL.md                          — Agent skill definition
colors_and_type.css               — CSS design tokens (colors + typography)
assets/
  iteso-logo.png                  — ITESO University logo (cafeteria project)
  qr-sample.png                   — Sample QR code asset
preview/
  colors-brand.html               — Brand color palette swatches
  colors-semantic.html            — Semantic color swatches
  type-scale.html                 — Typography scale specimen
  type-fonts.html                 — Font family specimens
  spacing-tokens.html             — Spacing, radius, shadow tokens
  components-buttons.html         — Button states
  components-inputs.html          — Form inputs
  components-cards.html           — Card components
  components-navbar.html          — Navbar component
  brand-logo.html                 — Logo / brand mark
ui_kits/
  analyze/
    README.md                     — Analyze product notes
    index.html                    — Interactive prototype (login → dashboard → CFDI)
    Sidebar.jsx                   — App sidebar navigation
    TopBar.jsx                    — App top bar
    CFDITable.jsx                 — CFDI data table
    Dashboard.jsx                 — Dashboard summary cards
  pos/
    README.md                     — POS product notes
    index.html                    — Interactive prototype (menu → cart → payment)
    Navbar.jsx                    — POS navbar
    MenuGrid.jsx                  — Food item grid
    Cart.jsx                      — Cart + checkout
    AdminPanel.jsx                — Admin panel
```
