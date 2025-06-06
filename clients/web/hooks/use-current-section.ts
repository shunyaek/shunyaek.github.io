"use client"

import { useState, useEffect } from "react"

const sectionIds = [
  "about",
  "approach",
  "methodology",
  "edge",
  "services",
  "focus",
  "work",
  "pricing",
  "connect"
]

export function useCurrentSection(totalSections: number = 9) {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY + window.innerHeight / 2

      let currentIndex = 0

      // Find which section we're currently in by checking section positions
      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY
          const sectionBottom = sectionTop + rect.height

          if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
            currentIndex = i
            break
          }

          // If we're past this section, it could be the current one
          if (scrollTop >= sectionTop) {
            currentIndex = i
          }
        }
      }

      // Debug logging
      console.log({
        scrollTop: window.scrollY,
        scrollCenter: scrollTop,
        currentIndex,
        sectionId: sectionIds[currentIndex]
      })

      setCurrentSection(currentIndex)
    }

    // Initial call
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Add resize listener to recalculate on window resize
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [totalSections])

  return currentSection
} 