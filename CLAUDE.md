# Project: Browser Extension for Legacy Site UI Improvement

## Project Goal
Build a browser extension that improves the UI/UX of a legacy website chess-results.com.
Monetization: optional BuyMeACoffee support model.

---

## Key Decisions Made

### Distribution method
- Publish on **Chrome Web Store** ($5 one-time developer fee) — covers Chrome, Edge, Brave
- Publish on **Firefox Add-ons** as free secondary channel
- Safari / iOS — skipped for now (requires $99/yr Apple Developer account + Xcode wrapper)

### Mobile strategy
- Chrome for Android and Safari for iOS do **not support extensions** — no clean solution exists
- Decision: **desktop-first**, revisit mobile when there is revenue and user demand
- Firefox for Android supports extensions but has negligible market share among target audience

### Monetization
- **Free extension** on Chrome Web Store
- **Optional BuyMeACoffee** for supporters — familiar model for younger/non-technical audiences
- No hard paywall — open source goodwill drives BuyMeACoffee conversions
---

## Tech Stack

### Core
- **Vanilla JS** — content scripts (no React needed for DOM manipulation)
- **CSS** — injected stylesheet for visual improvements
- **Manifest V3** — current standard, supported by Chrome and Firefox

### Framework
- **Plasmo** — extension-specific build framework
  - Handles MV3 boilerplate
  - Hot reload during development
  - Builds for Chrome + Firefox from one codebase
  - Bootstrap: `npm create plasmo@latest`

### Popup UI
- Plain HTML + CSS for simple popups

### Skipped (intentionally)
- TypeScript — add later if codebase grows
- React — overkill for a popup
- Webpack / Vite manual config — Plasmo handles this
- UI component libraries — unnecessary weight

---

## Project Structure (Plasmo)

```
my-extension/
├── contents/
│   └── main.ts          # content script — runs on target site
├── popup.tsx            # settings popup UI
├── assets/
│   └── injected.css     # styles injected into target site
├── background.ts        # service worker (auth checks, etc.)
└── package.json
```

---
