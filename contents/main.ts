import type { PlasmoCSConfig } from "plasmo";





export const config: PlasmoCSConfig = {
  matches: [
    "https://chess-results.com/*",
    "http://chess-results.com/*",
    "https://*.chess-results.com/*",
    "http://*.chess-results.com/*"
  ]
}

const THEME_KEY = "chess-results-ui-theme"

// ── Fonts ────────────────────────────────────────────────────────────────────
const link = document.createElement("link")
link.rel = "stylesheet"
link.href =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
document.head.appendChild(link)

// ── Styles ───────────────────────────────────────────────────────────────────
const style = document.createElement("style")
style.textContent = `
  * {
    font-family: 'Roboto', sans-serif !important;
  }
  
  body {
    font-size: 12pt;
  }

  /* Menu links */
  ul.navlist a:link,
  ul.navlist a:visited {
    color: #ffffff !important;
  }

  /* Links – light mode */
  a:link {
    color: #1a73e8 !important;
  }

  a:visited {
    color: #7b1fa2 !important;
  }

  /* Zebra striping */
  table tr:nth-child(even) {
    background-color: #f5f7fa !important;
  }

  /* ── Dark mode ── */
  html.chess-ui-dark body,
  html.chess-ui-dark td,
  html.chess-ui-dark th,
  html.chess-ui-dark div,
  html.chess-ui-dark span,
  html.chess-ui-dark p {
    background-color: #13131a !important;
    color: #eaeaef !important;
  }

  html.chess-ui-dark a {
    color: #8b83ff !important;
  }
  
  html.chess-ui-dark a:visited {
    color: #7b1fa2 !important;
  }

  html.chess-ui-dark table {
    border-color: #2a2a3a !important;
  }

  html.chess-ui-dark table td,
  html.chess-ui-dark table th {
    border-color: #2a2a3a !important;
  }

  html.chess-ui-dark table tr:nth-child(even) {
    background-color: #1c1c28 !important;
  }

  html.chess-ui-dark input,
  html.chess-ui-dark select {
    background-color: #1c1c28 !important;
    color: #eaeaef !important;
    border-color: #2a2a3a !important;
  }
  
  div.defaultDialog, div.defaultDialogKleiner, div.defaultDialogMsg, div.defaultDialogIFrame {
    padding: 5px;  
  }
`
document.head.appendChild(style)

// ── Ad removal ───────────────────────────────────────────────────────────────
const AD_SELECTORS = [
  "ins.adsbygoogle",
  'div[id^="div-gpt-ad"]',
  'iframe[src*="googlesyndication"]',
  'iframe[src*="doubleclick"]',
  'div[id*="banner"]',
  'div[class*="banner"]',
  'div[id*="F8"]',
  "div.fedAdv"
].join(", ")

function removeAds(root: Document | Element = document) {
  root.querySelectorAll(AD_SELECTORS).forEach((el) => el.remove())
}

// Remove ads already in the DOM
removeAds()

// Watch for dynamically injected ads
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node instanceof Element) {
        if (node.matches(AD_SELECTORS)) {
          node.remove()
        } else {
          removeAds(node)
        }
      }
    }
  }
})

observer.observe(document.body, { childList: true, subtree: true })

// ── DOM cleanup ───────────────────────────────────────────────────────────────
document
  .querySelector("#datenxx tr:last-child td:last-child")
  ?.remove()

// ── Theme logic ───────────────────────────────────────────────────────────────
function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("chess-ui-dark", dark)
}

// Apply saved theme on page load
chrome.storage.local.get(THEME_KEY).then((result) => {
  applyTheme(result[THEME_KEY] === "dark")
})

// React to toggle changes in real time
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes[THEME_KEY]) {
    applyTheme(changes[THEME_KEY].newValue === "dark")
  }
})
