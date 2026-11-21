// components/Security/BrowserProtection.tsx
"use client"

import { useEffect } from "react"

export default function BrowserProtection() {
  useEffect(() => {
    const body = document.body

    // Disable text selection.
    body.style.userSelect = "none"
    body.style.webkitUserSelect = "none"

    // Prevent text highlighting.
    const handleSelectStart = (event: Event) => {
      event.preventDefault()
    }

    // Disable context menu.
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault()
    }

    // Block common inspection shortcuts.
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()

      const blocked =
        key === "f12" ||
        (event.ctrlKey &&
          event.shiftKey &&
          ["i", "j", "c", "k"].includes(key)) ||
        (event.ctrlKey && ["u", "s"].includes(key))

      if (blocked) {
        event.preventDefault()
        event.stopPropagation()
      }
    }

    // Prevent image dragging.
    const handleDragStart = (event: DragEvent) => {
      if (event.target instanceof HTMLImageElement) {
        event.preventDefault()
      }
    }

    // Best-effort protection when the page becomes hidden.
    const handleVisibilityChange = () => {
      body.classList.toggle(
        "screenshot-protection-blur",
        document.hidden
      )
    }

    // Blur protected content when the window loses focus.
    const handleWindowBlur = () => {
      body.classList.add("screenshot-protection-blur")
    }

    const handleWindowFocus = () => {
      if (!document.hidden) {
        body.classList.remove("screenshot-protection-blur")
      }
    }

    document.addEventListener("selectstart", handleSelectStart)
    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown, true)
    document.addEventListener("dragstart", handleDragStart)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    window.addEventListener("blur", handleWindowBlur)
    window.addEventListener("focus", handleWindowFocus)

    return () => {
      body.style.userSelect = ""
      body.style.webkitUserSelect = ""

      body.classList.remove("screenshot-protection-blur")

      document.removeEventListener("selectstart", handleSelectStart)
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown, true)
      document.removeEventListener("dragstart", handleDragStart)
      document.removeEventListener("visibilitychange", handleVisibilityChange)

      window.removeEventListener("blur", handleWindowBlur)
      window.removeEventListener("focus", handleWindowFocus)
    }
  }, [])

  return null
}