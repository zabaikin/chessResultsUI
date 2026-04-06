import { useEffect, useState } from "react"

import "./popup.css"

const THEME_KEY = "chess-results-ui-theme"

function IndexPopup() {
  const [dark, setDark] = useState(false)

  // Restore saved theme on mount
  useEffect(() => {
    chrome.storage.local.get(THEME_KEY).then((result) => {
      if (result[THEME_KEY] === "dark") setDark(true)
    })
  }, [])

  // Persist & apply theme
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    )
    chrome.storage.local.set({ [THEME_KEY]: dark ? "dark" : "light" })
  }, [dark])

  return (
    <div className="popup">
      {/* Header */}
      <div className="popup-header">
        <span className="popup-title">Chess Results UI</span>

        <button
          className="theme-toggle"
          data-active={dark}
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle dark mode">
          <span className="toggle-icons">
            <span>☀️</span>
            <span>🌙</span>
          </span>
        </button>
      </div>

      {/* Description card */}
      <div className="popup-card">
        <p>
          A cleaner, more readable interface for{" "}
          <strong>chess-results.com</strong>. Dark mode, better typography, and
          improved table layouts — all applied automatically.
        </p>
        <p>Toggle dark mode above to switch the site theme.</p>
      </div>

      <hr className="popup-divider" />

      {/* Footer */}
      <div className="popup-footer">
        <span className="popup-version">v0.0.1</span>

        <a
          className="coffee-btn"
          href="https://buymeacoffee.com/"
          target="_blank"
          rel="noopener noreferrer">
          <span className="coffee-icon">☕</span>
          Buy me a coffee
        </a>
      </div>
    </div>
  )
}

export default IndexPopup
