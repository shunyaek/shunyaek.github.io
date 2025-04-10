"use client"

import { useMediaQuery } from "usehooks-ts"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  return !useMediaQuery(`(min-width: ${MOBILE_BREAKPOINT}px)`)
}

