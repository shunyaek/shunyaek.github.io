"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useThemeDetection() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkTheme = mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark"))

  return {
    isDarkTheme,
    mounted,
    theme,
    systemTheme,
  }
}

