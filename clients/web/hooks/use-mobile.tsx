"use client"

import { useMediaQuery } from "usehooks-ts"
import { MOBILE_BREAKPOINT } from "@/lib/constants"

export function useIsMobile() {
  return !useMediaQuery(`(min-width: ${MOBILE_BREAKPOINT}px)`)
}

