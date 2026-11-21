"use client"

import { useEffect } from "react"

export default function BrowserProtection() {
  useEffect(() => {
    // Disable context menu globally.
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault()
    }

    // Block common inspection and source-view shortcuts.
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()

      const blocked =
        // F12
        key === "f12" ||
        // Ctrl + Shift + I / J / C
        (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) ||
        // Ctrl + U (View Source)
        (event.ctrlKey && key === "u") ||
        // Ctrl + Shift + K (Firefox Web Console)
        (event.ctrlKey && event.shiftKey && key === "k")

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

    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown, true)
    document.addEventListener("dragstart", handleDragStart)

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown, true)
      document.removeEventListener("dragstart", handleDragStart)
    }
  }, [])

  return null
}
