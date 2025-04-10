"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface CustomButtonProps {
  href?: string
  onClick?: () => void
  className?: string
  external?: boolean
  icon?: ReactNode
  children?: ReactNode
}

export function CustomButton({ href, onClick, className, external = false, icon, children }: CustomButtonProps) {
  const buttonClasses = cn("contact-link inline-flex w-auto", className)

  // If there's an href, render as a link
  if (href) {
    const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {}

    return (
      <Link href={href} className={buttonClasses} {...linkProps}>
        {icon && <span className="mr-2">{icon}</span>}
        {children || "Connect Now"}
      </Link>
    )
  }

  // Otherwise render as a button
  return (
    <button onClick={onClick} className={buttonClasses}>
      {icon && <span className="mr-2">{icon}</span>}
      {children || "Connect Now"}
    </button>
  )
}

