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

  /* Full width layout */
  body {
    max-width: 100% !important;
    overflow-x: hidden;
  }

  @media (max-width: 1249px) {
    body {
      padding-left: 8px !important;
      padding-right: 10px !important;
    }
  }

  @media (min-width: 1250px) {
    body {
      padding-left: 10% !important;
      padding-right: 10% !important;
    }
  }

  .daten {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
  }

  .daten table,
  table {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
  }

  td, th {
    word-break: break-word;
  }

  /* Responsive width classes (applied by JS based on original px value) */
  .cr-w-medium {
    width: 48% !important;
    max-width: 48% !important;
    box-sizing: border-box;
    margin: 5px auto;
  }

  @media (max-width: 1250px) {
    .cr-w-medium {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  .cr-w-full {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
  }

  /* Responsive images */
  img {
    max-width: 100% !important;
    height: auto !important;
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
    padding: 10px;  
    margin: 5px 10px 5px 0 !important;
  }

  #fuss {
    display: none;
  }

  .fed {
    font-size: 10pt;
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
  "div.fedAdv",
  "#Table3"
].join(", ")

function removeAds(root: Document | Element = document) {
  root.querySelectorAll(AD_SELECTORS).forEach((el) => {
    if (el.matches("div.fed")) return
    el.remove()
  })
}

// ── Full width: strip inline widths ──────────────────────────────────────────
const WIDTH_SELECTORS = "table, td, th, tr, div, span, col, colgroup, form, section, article, header, footer, main, aside, nav, figure, img"

function applyResponsiveWidth(htmlEl: HTMLElement, px: number) {
  if (px < 100) {
    // Small fixed widths — leave untouched
    return
  } else if (px <= 500) {
    htmlEl.classList.add("cr-w-medium")
  } else if (px >= 800) {
    htmlEl.classList.add("cr-w-full")
  }
  // 501–799px — leave untouched
}

function stripWidths(root: Document | Element = document) {
  root.querySelectorAll(WIDTH_SELECTORS).forEach((el) => {
    // Keep div.fed — it's the flag column and needs its 37px
    if (el.matches("div.fed")) return
    const htmlEl = el as HTMLElement

    // Check inline style width
    const styleWidth = htmlEl.style.width
    if (styleWidth && styleWidth.includes("px")) {
      const px = parseFloat(styleWidth)
      if (!isNaN(px)) {
        htmlEl.style.removeProperty("width")
        htmlEl.style.removeProperty("max-width")
        htmlEl.style.removeProperty("min-width")
        applyResponsiveWidth(htmlEl, px)
        return
      }
    }

    // Check width= attribute (skip percentage values like width="100%")
    const attrWidth = htmlEl.getAttribute("width")
    if (attrWidth && !attrWidth.includes("%")) {
      const px = parseFloat(attrWidth)
      if (!isNaN(px)) {
        htmlEl.removeAttribute("width")
        htmlEl.style.removeProperty("max-width")
        htmlEl.style.removeProperty("min-width")
        applyResponsiveWidth(htmlEl, px)
        return
      }
    }
  })
}

// Remove ads, strip widths, and hide empty elements already in the DOM
removeAds()
stripWidths()

// Watch for dynamically injected content
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node instanceof Element) {
        if (node.matches(AD_SELECTORS)) {
          node.remove()
        } else {
          removeAds(node)
          stripWidths(node)
        }
      }
    }
  }
})

observer.observe(document.body, { childList: true, subtree: true })

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
