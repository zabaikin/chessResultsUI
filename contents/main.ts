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

  /* Nav bars */
  #menu0, #menu0L, #menu1, #menu2 {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box;
    background-color: #1e1e2e;
  }

  #menu0 ul.navlist,
  #menu0L ul.navlist,
  #menu1 ul.navlist,
  #menu2 ul.navlist {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2px;
    padding: 4px 8px;
    margin: 0;
    list-style: none;
  }

  #menu1 ul.navlist,
  #menu2 ul.navlist {
    padding: 0 8px;
  }

  /* Menu links */
  ul.navlist a:link,
  ul.navlist a:visited {
    color: #ffffff !important;
    text-decoration: none !important;
    padding: 6px 10px;
    border-radius: 6px;
    display: inline-block;
    font-size: 11pt;
    transition: background-color 0.15s;
  }

  ul.navlist a.OtherTabs:hover {
    background-color: rgba(255, 255, 255, 0.12) !important;
  }

  ul.navlist a.SelectedTab {
    background-color: rgba(255, 255, 255, 0.2) !important;
    font-weight: 500;
  }

  ul.navlist a.Link {
    color: #a8b4ff !important;
  }

  ul.navlist a.Link:hover {
    background-color: rgba(168, 180, 255, 0.15) !important;
  }

  /* Dark mode nav */
  html.chess-ui-dark #menu0,
  html.chess-ui-dark #menu0L,
  html.chess-ui-dark #menu1,
  html.chess-ui-dark #menu2 {
    background-color: #0e0e1a !important;
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
    width: 100% !important;
    max-width: 100% !important;
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
    height: auto !important;
  }

  #fuss {
    display: none;
  }

  .fed {
    font-size: 10pt;
  }

  /* ── Language selector ── */
  #cr-lang-select {
    appearance: none;
    -webkit-appearance: none;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 6px;
    color: #ffffff;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 11pt;
    padding: 3px 26px 3px 8px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath fill='%23ffffff' d='M5 7L0 2h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 7px center;
    background-size: 10px;
    outline: none;
    vertical-align: middle;
  }

  #cr-lang-select:hover {
    border-color: rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0.1);
  }

  #cr-lang-select option {
    background-color: #2c2c3a;
    color: #ffffff;
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

// ── Language selector ─────────────────────────────────────────────────────────
const LANG_FLAGS: Record<string, string> = {
  EGY: "🇪🇬", ARM: "🇦🇲", AZE: "🇦🇿", BIH: "🇧🇦", BUL: "🇧🇬",
  CAT: "🏴", CHN: "🇨🇳", CRO: "🇭🇷", CZE: "🇨🇿", DEN: "🇩🇰",
  ENG: "🇬🇧", ESP: "🇪🇸", FAI: "🇫🇴", FIN: "🇫🇮", FRA: "🇫🇷",
  GER: "🇩🇪", GRE: "🇬🇷", INA: "🇮🇩", ITA: "🇮🇹", JPN: "🇯🇵",
  MKD: "🇲🇰", LTU: "🇱🇹", NED: "🇳🇱", POL: "🇵🇱", POR: "🇵🇹",
  ROU: "🇷🇴", RUS: "🇷🇺", SRB: "🇷🇸", SVK: "🇸🇰", SWE: "🇸🇪",
  TUR: "🇹🇷", UKR: "🇺🇦", VIE: "🇻🇳",
}

function buildLanguageSelector() {
  const menu = document.getElementById("menu0L")
  if (!menu) return

  const langItems = Array.from(menu.querySelectorAll("li")).filter((li) => {
    const a = li.querySelector("a[id^='Hyp_']") as HTMLAnchorElement | null
    return a && a.href.includes("lan=")
  })
  if (langItems.length === 0) return

  const select = document.createElement("select")
  select.id = "cr-lang-select"

  langItems.forEach((li) => {
    const a = li.querySelector("a") as HTMLAnchorElement
    const code = a.id.replace("Hyp_", "")
    const flag = LANG_FLAGS[code] ?? "🌐"
    const option = document.createElement("option")
    option.value = a.href
    option.textContent = `${flag} ${a.textContent?.trim()}`
    if (a.classList.contains("SelectedTab")) option.selected = true
    select.appendChild(option)
  })

  select.addEventListener("change", () => {
    window.location.href = select.value
  })

  const wrapperLi = document.createElement("li")
  wrapperLi.appendChild(select)
  langItems[0].parentNode?.insertBefore(wrapperLi, langItems[0])
  langItems.forEach((li) => li.remove())
  menu.querySelectorAll("li:empty").forEach((li) => li.remove())

  // Remove font size link
  document.getElementById("Hyp_Font")?.closest("li")?.remove()

  // Clean up empty <li> items in other nav bars
  document.querySelectorAll("#menu0 li:empty, #menu1 li:empty, #menu2 li:empty")
    .forEach((li) => li.remove())
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", buildLanguageSelector)
} else {
  buildLanguageSelector()
}
