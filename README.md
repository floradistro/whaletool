# WhaleTools

The cannabis platform.

## Overview

WhaleTools is a modern, monochrome cannabis commerce platform inspired by Vercel's minimal design aesthetic and Steve Jobs' communication style. Pure black. Minimal. Powerful.

## Features

### 🐋 Core Platform
- **Storefront** - Your store. Your domain.
- **POS System** - Built for cannabis.
- **Inventory** - Real-time sync across all locations.
- **Payments** - In-house processing. No third parties.
- **Compliance** - Always compliant. Automatically.

### ⚡ Technical
- Deploy with `git push`
- REST & GraphQL APIs
- Webhooks for real-time events
- Sub-50ms global latency
- 99.9% uptime SLA
- Zero-downtime deployments

### ✅ Compliance
- Metrc integration
- Seed-to-sale tracking
- Multi-state support (18 states)
- Automated reporting
- Audit-ready exports

## Design Philosophy

### Monochrome
- Pure black (#000000)
- Dark grays (#0a0a0a, #0f0f0f, #151515)
- Text grays (#a8a8a8, #666666, #4a4a4a)
- No white. No colors.

### Minimal
- Clean typography (Inter, 300-500 weights)
- Subtle borders (#1a1a1a, #252525)
- Micro-interactions
- Cubic-bezier easing (0.4, 0, 0.2, 1)
- Glassmorphism header

### Steve Jobs Copy
- Short sentences.
- Simple words.
- Powerful statements.
- No fluff.

## Tech Stack

- React 18
- Vite
- CSS3 (Custom Properties)
- Inter Font Family

## Getting Started

```bash
cd shopify-clone
npm install
npm run dev
```

Visit `http://localhost:5173`

## Deploy

```bash
npm run build
npm run preview
```

## Structure

```
shopify-clone/
├── src/
│   ├── App.jsx          # Main component
│   ├── App.css          # Monochrome styling
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
└── package.json
```

## Copy Examples

### Hero
"The cannabis platform."
"Everything you need. Nothing you don't."

### Features
"Your store. Your domain."
"Always compliant."
"Process payments. In-house."
"One dashboard. Everything."

### Social Proof
"Fast." → Green Valley deployed in 28 minutes
"Scalable." → HighTide runs 47 locations
"Secure." → CannaCorp processes $50M

### Stats
- 100% Compliant
- 24/7 Monitored
- $2.8B Processed
- 99.9% Uptime
- <30min Setup
- 18 States

### CTA
"Deploy Now"
"Three steps. Live."

## Design Details

### Typography
- **Headings**: 300-400 weight, -1px to -2px letter-spacing
- **Body**: 400-500 weight, 1.6-1.7 line-height
- **Labels**: 500 weight, uppercase, 1.5px letter-spacing
- **Sizes**: 14-56px (no extremes)

### Spacing
- Section padding: 120px vertical
- Card padding: 32-48px
- Gaps: 24-80px
- Border radius: 6-8px

### Interactions
- Transitions: 200ms cubic-bezier
- Hover: translateY(-2px)
- Color shifts on hover
- Subtle border highlights

### Components
- **Header**: Backdrop blur, sticky
- **Cards**: Dark bg (#151515), 1px borders
- **Buttons**: Minimal, rounded (6px)
- **Links**: Underlined, subtle
- **Footer**: Clean grid, uppercase labels

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

Template/Educational use. Cannabis compliance is industry-specific.
